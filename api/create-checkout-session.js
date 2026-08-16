const PRODUCTS = Object.freeze({
  all:{name:'Game Night Shuffle',description:'Unlock the complete competitive shuffle.',amount:399},
  arabish:{name:'Decode the Gibberish',description:'Unlock the complete Arabic phrase challenge.',amount:299},
  ayah:{name:'Complete the Ayah',description:'Unlock the complete Quranic verse challenge.',amount:299},
  conversation:{name:'Conversation Starters',description:'Unlock the complete conversation starter collection.',amount:399},
  mizan:{name:'Dilemmas',description:'Unlock the complete Dilemmas collection.',amount:299},
  culture:{name:'Islam vs Culture',description:'Unlock the complete Islam vs Culture collection.',amount:299},
  bundle:{name:'Al Majlis Premium Collection',description:'Unlock every current premium game mode.',amount:799}
});
const send=(response,status,body)=>response.status(status).json(body);
function configurationStatus(){
  const secretKey=process.env.STRIPE_SECRET_KEY||'';
  const publishableKey=process.env.STRIPE_PUBLISHABLE_KEY||process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY||'';
  const secretMatch=secretKey.match(/^sk_(test|live)_/);
  const publishableMatch=publishableKey.match(/^pk_(test|live)_/);
  const keysMatch=Boolean(secretMatch&&publishableMatch&&secretMatch[1]===publishableMatch[1]);
  return {
    stripeConfigured:keysMatch,
    stripeMode:keysMatch?secretMatch[1]:null,
    ownerConfigured:String(process.env.AL_MAJLIS_OWNER_KEY||'').length>=20
  };
}
function paramsFor(product, selected, origin){
  const p=new URLSearchParams();
  p.set('ui_mode','embedded_page');
  p.set('redirect_on_completion','if_required');
  p.set('mode','payment');
  p.set('payment_method_types[0]','card');
  p.set('line_items[0][quantity]','1');
  p.set('line_items[0][price_data][currency]','usd');
  p.set('line_items[0][price_data][unit_amount]',String(product.amount));
  p.set('line_items[0][price_data][product_data][name]',product.name);
  p.set('line_items[0][price_data][product_data][description]',product.description);
  p.set('metadata[al_majlis_product]',selected);
  p.set('metadata[al_majlis_version]','premium-v1');
  p.set('return_url',`${origin}/?checkout=return&session_id={CHECKOUT_SESSION_ID}`);
  return p;
}
export default async function handler(request,response){
  if(request.method==='GET'){
    response.setHeader('Cache-Control','no-store');
    return send(response,200,configurationStatus());
  }
  if(request.method!=='POST'){response.setHeader('Allow','GET, POST');return send(response,405,{error:'Method not allowed.'});}
  const secretKey=process.env.STRIPE_SECRET_KEY;
  const publishableKey=process.env.STRIPE_PUBLISHABLE_KEY||process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if(!secretKey||!publishableKey)return send(response,503,{error:'Stripe is not configured yet. Add the Stripe environment variables in Vercel.'});
  if(!/^sk_(test|live)_/.test(secretKey)||!/^pk_(test|live)_/.test(publishableKey))return send(response,503,{error:'The Stripe keys in Vercel are not valid API keys.'});
  if(secretKey.split('_')[1]!==publishableKey.split('_')[1])return send(response,503,{error:'The Stripe keys in Vercel must both use the same test or live mode.'});
  const selected=String(request.body?.product||'');
  const product=PRODUCTS[selected];
  if(!product)return send(response,400,{error:'Unknown Al Majlis product.'});
  const host=String(request.headers['x-forwarded-host']||request.headers.host||'').split(',')[0].trim();
  const protocol=String(request.headers['x-forwarded-proto']||'https').split(',')[0].trim();
  if(!/^[A-Za-z0-9.-]+(?::\d+)?$/.test(host)||!/^https?$/.test(protocol))return send(response,400,{error:'Invalid site origin.'});
  const origin=`${protocol}://${host}`;
  try{
    const stripeResponse=await fetch('https://api.stripe.com/v1/checkout/sessions',{
      method:'POST',
      headers:{Authorization:`Bearer ${secretKey}`,'Content-Type':'application/x-www-form-urlencoded'},
      body:paramsFor(product,selected,origin)
    });
    const session=await stripeResponse.json();
    if(!stripeResponse.ok)return send(response,502,{error:session?.error?.message||'Unable to open secure checkout. Please try again.'});
    return send(response,200,{clientSecret:session.client_secret,sessionId:session.id,publishableKey});
  }catch(error){
    console.error('Stripe session creation failed:',error);
    return send(response,500,{error:'Unable to open secure checkout. Please try again.'});
  }
}
