import {createHmac,timingSafeEqual} from 'node:crypto';

const COOKIE_NAME='al_majlis_owner';
const COOKIE_MAX_AGE=60*60*24*365*5;
const send=(response,status,body)=>{
  response.setHeader('Cache-Control','no-store, private');
  return response.status(status).json(body);
};
const safeEqual=(left,right)=>{
  const a=Buffer.from(String(left));
  const b=Buffer.from(String(right));
  return a.length===b.length&&timingSafeEqual(a,b);
};
const ownerToken=secret=>createHmac('sha256',secret)
  .update('al-majlis-owner-access-v1')
  .digest('base64url');
const readCookie=(header,name)=>String(header||'')
  .split(';')
  .map(part=>part.trim().split('='))
  .find(([key])=>key===name)?.slice(1).join('=')||'';

export default function handler(request,response){
  if(!['GET','POST'].includes(request.method)){
    response.setHeader('Allow','GET, POST');
    return send(response,405,{error:'Method not allowed.'});
  }

  const secret=String(process.env.AL_MAJLIS_OWNER_KEY||'');
  if(request.method==='GET'){
    const cookie=readCookie(request.headers.cookie,COOKIE_NAME);
    const owner=secret.length>=20&&safeEqual(cookie,ownerToken(secret));
    return send(response,200,{owner,configured:secret.length>=20});
  }

  if(secret.length<20){
    return send(response,503,{error:'Owner access is not configured yet.'});
  }

  const code=String(request.body?.code||'');
  if(!safeEqual(code,secret)){
    return send(response,403,{error:'That owner code was not accepted.'});
  }

  response.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=${ownerToken(secret)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${COOKIE_MAX_AGE}`
  );
  return send(response,200,{owner:true});
}
