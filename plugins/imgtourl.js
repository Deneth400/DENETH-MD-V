const _0x3694c6=_0x2291;function _0x245e(){const _0x3a5ef5=['11YGTOvB','Upload\x20failed','../config','form-data','3832184fMjWlX','mediaType','264LGxMKD','convert','log','promises','214929GUoyPz','url','3685130zVBkRg','8968UHbSvQ','https://uguu.se/upload.php','No\x20media\x20found','unlink','10aDbPPV','statSync','quoted','download','node-fetch','json','⛓️\x20*Link:*\x0a','imgurl','@blackamda/telegram-image-url','5581953HEpIve','files[]','../lib/functions','reply','img2url','7jApFiA','POST','telegraph','tourl','append','.img2url\x20<reply\x20image>','1839522cCXspo','1711972TSECJE'];_0x245e=function(){return _0x3a5ef5;};return _0x245e();}(function(_0x51a409,_0x212043){const _0x20e19a=_0x2291,_0x4ed08f=_0x51a409();while(!![]){try{const _0x351042=-parseInt(_0x20e19a(0x1c1))/0x1+parseInt(_0x20e19a(0x1b6))/0x2+parseInt(_0x20e19a(0x1bd))/0x3*(parseInt(_0x20e19a(0x1c4))/0x4)+-parseInt(_0x20e19a(0x1c8))/0x5*(parseInt(_0x20e19a(0x1b5))/0x6)+parseInt(_0x20e19a(0x1d6))/0x7*(parseInt(_0x20e19a(0x1bb))/0x8)+-parseInt(_0x20e19a(0x1d1))/0x9+parseInt(_0x20e19a(0x1c3))/0xa*(parseInt(_0x20e19a(0x1b7))/0xb);if(_0x351042===_0x212043)break;else _0x4ed08f['push'](_0x4ed08f['shift']());}catch(_0x4ce95f){_0x4ed08f['push'](_0x4ed08f['shift']());}}}(_0x245e,0x6e792));const {cmd,commands}=require('../command');let {img2url}=require(_0x3694c6(0x1d0));const {getRandom}=require(_0x3694c6(0x1d3)),fs=require('fs'),fetch=require(_0x3694c6(0x1cc)),config=require(_0x3694c6(0x1b9)),FormData=require(_0x3694c6(0x1ba));function _0x2291(_0x2515a0,_0x223a9a){const _0x245e20=_0x245e();return _0x2291=function(_0x2291f7,_0xbbf4ce){_0x2291f7=_0x2291f7-0x1b5;let _0x4dc8f2=_0x245e20[_0x2291f7];return _0x4dc8f2;},_0x2291(_0x2515a0,_0x223a9a);}var desct='It\x20Convert\x20Given\x20Image\x20To\x20URL.',imgmsg='*Reply\x20To\x20A\x20Photo\x20!*',cantf='*Server\x20Is\x20Busy.\x20Try\x20Again\x20Later!*';const uploadUguu=async _0x4e1932=>{const _0x21bf56=_0x3694c6;try{const _0x4536da=new FormData();_0x4536da[_0x21bf56(0x1da)](_0x21bf56(0x1d2),fs['createReadStream'](_0x4e1932));const _0x18e03b=await fetch(_0x21bf56(0x1c5),{'method':_0x21bf56(0x1d7),'headers':_0x4536da['getHeaders'](),'body':_0x4536da}),_0x59e343=await _0x18e03b[_0x21bf56(0x1cd)]();return await fs[_0x21bf56(0x1c0)][_0x21bf56(0x1c7)](_0x4e1932),_0x59e343;}catch(_0x3f7dd5){return await fs[_0x21bf56(0x1c0)]['unlink'](_0x4e1932),_0x21bf56(0x1b8);}};cmd({'pattern':_0x3694c6(0x1d5),'react':'🔗','alias':[_0x3694c6(0x1d9),_0x3694c6(0x1cf),_0x3694c6(0x1d8),'imgtourl'],'desc':desct,'category':_0x3694c6(0x1be),'use':_0x3694c6(0x1db),'filename':__filename},async(_0x35561a,_0x1918bb,_0x4a2411,{from:_0x1bb3b7,l:_0x14eaa1,prefix:_0xa24e5e,quoted:_0x292b08,body:_0xc6043a,isCmd:_0x1f0324,command:_0x19475f,args:_0x323e8d,q:_0x313a54,isGroup:_0x570323,sender:_0x555ac9,senderNumber:_0x445823,botNumber2:_0x43098b,botNumber:_0x1fb8fa,pushname:_0x2bbc37,isMe:_0x2a3e70,isOwner:_0x8930a9,groupMetadata:_0x5587c5,groupName:_0x193e5f,participants:_0x4a9156,groupAdmins:_0x435acf,isBotAdmins:_0xe916a5,isAdmins:_0xd17566,reply:_0x16c17f})=>{const _0x266f2e=_0x3694c6;try{const _0x532a88=_0x4a2411[_0x266f2e(0x1ca)]||_0x4a2411,_0x541912=_0x532a88[_0x266f2e(0x1bc)]||'';if(!/image|video|audio|sticker|document/['test'](_0x541912))await _0x16c17f(_0x266f2e(0x1c6));const _0x39b94a=await _0x532a88?.[_0x266f2e(0x1cb)](!0x0),_0x934a2d=fs[_0x266f2e(0x1c9)](_0x39b94a)['size'];if(0x0===_0x934a2d)return _0x16c17f(imgmsg),void await fs[_0x266f2e(0x1c0)][_0x266f2e(0x1c7)](_0x39b94a);if(_0x934a2d>0x40000000)return _0x4a2411[_0x266f2e(0x1d4)]('File\x20Size\x20Is\x20Too\x20Big'),void await fs[_0x266f2e(0x1c0)][_0x266f2e(0x1c7)](_0x39b94a);const {files:_0x597e05}=await uploadUguu(_0x39b94a),_0x248577=_0x266f2e(0x1ce)+_0x597e05[0x0]?.[_0x266f2e(0x1c2)];await _0x16c17f(_0x248577);}catch(_0x19b12c){_0x16c17f(cantf),console[_0x266f2e(0x1bf)](_0x19b12c);}});