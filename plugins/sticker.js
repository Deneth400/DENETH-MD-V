const _0x4c3ffb=_0x253f;(function(_0x27f348,_0x246244){const _0x5dbbf9=_0x253f,_0x135055=_0x27f348();while(!![]){try{const _0x37f3cd=parseInt(_0x5dbbf9(0xff))/0x1+-parseInt(_0x5dbbf9(0xef))/0x2*(-parseInt(_0x5dbbf9(0xfb))/0x3)+-parseInt(_0x5dbbf9(0x105))/0x4+parseInt(_0x5dbbf9(0x10b))/0x5+parseInt(_0x5dbbf9(0xe9))/0x6+parseInt(_0x5dbbf9(0xee))/0x7+-parseInt(_0x5dbbf9(0xfd))/0x8;if(_0x37f3cd===_0x246244)break;else _0x135055['push'](_0x135055['shift']());}catch(_0x1e216b){_0x135055['push'](_0x135055['shift']());}}}(_0x32f8,0x909a5));const config=require(_0x4c3ffb(0xf1)),{Sticker,createSticker,StickerTypes}=require(_0x4c3ffb(0xf9)),{cmd,commands}=require(_0x4c3ffb(0xf3)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x4c3ffb(0xf2));function _0x32f8(){const _0xc4581b=['194386JTQTum','split','*Reply\x20To\x20A\x20Photo\x20!*','FULL','take','12345','4378916sfrczV','download','stickerMessage','videoMessage','convert','--crop','5617535lhhWie','sendMessage','4737582ILVGMu','CROPPED','*Error\x20!!*','imageMessage','sticker','424263XJygOf','907638pfvytw','toBuffer','../config','../lib/functions','../command','includes','quoted','It\x20Converts\x20Your\x20Replied\x20Photo\x20To\x20Sticker.','msg','transparent','wa-sticker-formatter','type','3BNhEaW','.mp4','7479168TksqJW','.sticker\x20<Reply\x20to\x20image>'];_0x32f8=function(){return _0xc4581b;};return _0x32f8();}var imgmsg=_0x4c3ffb(0x101),descg=_0x4c3ffb(0xf6);function _0x253f(_0x4ae733,_0x27023e){const _0x32f852=_0x32f8();return _0x253f=function(_0x253fe0,_0x2a69e2){_0x253fe0=_0x253fe0-0xe9;let _0x5528bb=_0x32f852[_0x253fe0];return _0x5528bb;},_0x253f(_0x4ae733,_0x27023e);}cmd({'pattern':_0x4c3ffb(0xed),'react':'🔮','alias':['s',_0x4c3ffb(0x103)],'desc':descg,'category':_0x4c3ffb(0x109),'use':_0x4c3ffb(0xfe),'filename':__filename},async(_0x30bd6a,_0x474ecf,_0x5a8664,{from:_0x34aac6,l:_0x1a27ee,quoted:_0x3c93c0,body:_0x19b519,isCmd:_0x3982e8,command:_0x2d589c,args:_0x579ce3,q:_0x26b08f,isGroup:_0x142cae,sender:_0x1b316c,senderNumber:_0x2c3301,botNumber2:_0x4c877e,botNumber:_0x1c4908,pushname:_0x1bb240,isMe:_0x1e1516,isOwner:_0x4dfa4f,groupMetadata:_0x13ff66,groupName:_0x5c42fd,participants:_0x1f7697,groupAdmins:_0x3911f3,isBotAdmins:_0x2f8f5f,isAdmins:_0xde2d9c,reply:_0x4d1542})=>{const _0x25fe3e=_0x4c3ffb;try{const _0x1afd67=_0x5a8664[_0x25fe3e(0xf5)]?_0x5a8664['quoted'][_0x25fe3e(0xfa)]==='viewOnceMessage':![],_0x52e08d=_0x5a8664[_0x25fe3e(0xf5)]?_0x5a8664[_0x25fe3e(0xf5)]['type']===_0x25fe3e(0xec)||(_0x1afd67?_0x5a8664[_0x25fe3e(0xf5)][_0x25fe3e(0xf7)][_0x25fe3e(0xfa)]===_0x25fe3e(0xec):![]):![],_0x2b32ed=_0x5a8664[_0x25fe3e(0xf5)]?_0x5a8664[_0x25fe3e(0xf5)][_0x25fe3e(0xfa)]===_0x25fe3e(0x108)||(_0x1afd67?_0x5a8664[_0x25fe3e(0xf5)]['msg'][_0x25fe3e(0xfa)]===_0x25fe3e(0x108):![]):![],_0x584c89=_0x5a8664[_0x25fe3e(0xf5)]?_0x5a8664[_0x25fe3e(0xf5)][_0x25fe3e(0xfa)]===_0x25fe3e(0x107):![],_0x4a4292=_0x26b08f[_0x25fe3e(0x100)]('|')[0x0]||_0x1bb240,_0x308f4d=_0x26b08f[_0x25fe3e(0x100)]('|')[0x1]||'';if(_0x5a8664[_0x25fe3e(0xfa)]===_0x25fe3e(0xec)||_0x52e08d){var _0x52d54a=getRandom('');_0x52e08d?await _0x5a8664[_0x25fe3e(0xf5)][_0x25fe3e(0x106)](_0x52d54a):await _0x5a8664[_0x25fe3e(0x106)](_0x52d54a);let _0x1298e6=new Sticker(_0x52d54a+'.jpg',{'pack':_0x4a4292,'author':_0x308f4d,'type':_0x26b08f[_0x25fe3e(0xf4)](_0x25fe3e(0x10a)||'-c')?StickerTypes[_0x25fe3e(0xea)]:StickerTypes[_0x25fe3e(0x102)],'categories':['🤩','🎉'],'id':_0x25fe3e(0x104),'quality':0x64,'background':_0x25fe3e(0xf8)});const _0x2f21db=await _0x1298e6[_0x25fe3e(0xf0)]();return _0x30bd6a[_0x25fe3e(0x10c)](_0x34aac6,{'sticker':_0x2f21db},{'quoted':_0x474ecf});}else{if(_0x584c89){var _0x4ce584=getRandom('');await _0x5a8664[_0x25fe3e(0xf5)]['download'](_0x4ce584);let _0x5a23d8=new Sticker(_0x4ce584+'.webp',{'pack':_0x4a4292,'author':_0x308f4d,'type':_0x26b08f[_0x25fe3e(0xf4)](_0x25fe3e(0x10a)||'-c')?StickerTypes['CROPPED']:StickerTypes[_0x25fe3e(0x102)],'categories':['🤩','🎉'],'id':'12345','quality':0x64,'background':_0x25fe3e(0xf8)});const _0x360ac7=await _0x5a23d8[_0x25fe3e(0xf0)]();return _0x30bd6a[_0x25fe3e(0x10c)](_0x34aac6,{'sticker':_0x360ac7},{'quoted':_0x474ecf});}else{if(_0x584c89){var _0x1a7320=getRandom('');await _0x5a8664[_0x25fe3e(0xf5)][_0x25fe3e(0x106)](_0x4ce584);let _0x79687d=new Sticker(_0x1a7320+_0x25fe3e(0xfc),{'pack':_0x4a4292,'author':_0x308f4d,'type':_0x26b08f[_0x25fe3e(0xf4)](_0x25fe3e(0x10a)||'-c')?StickerTypes[_0x25fe3e(0xea)]:StickerTypes[_0x25fe3e(0x102)],'categories':['🤩','🎉'],'id':_0x25fe3e(0x104),'quality':0x64,'background':_0x25fe3e(0xf8)});const _0x3fc444=await _0x79687d['toBuffer']();return _0x30bd6a[_0x25fe3e(0x10c)](_0x34aac6,{'sticker':_0x3fc444},{'quoted':_0x474ecf});}else return await _0x4d1542(imgmsg);}}}catch(_0x5662a9){_0x4d1542(_0x25fe3e(0xeb)),_0x1a27ee(_0x5662a9);}});