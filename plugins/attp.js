const _0x2834fa=_0x28d7;(function(_0x165e14,_0x2ec9ca){const _0x15a8c9=_0x28d7,_0x3babd4=_0x165e14();while(!![]){try{const _0xdc7f1a=parseInt(_0x15a8c9(0x13c))/0x1+parseInt(_0x15a8c9(0x13d))/0x2*(parseInt(_0x15a8c9(0x11c))/0x3)+parseInt(_0x15a8c9(0x125))/0x4+-parseInt(_0x15a8c9(0x11d))/0x5*(-parseInt(_0x15a8c9(0x14e))/0x6)+parseInt(_0x15a8c9(0x152))/0x7*(-parseInt(_0x15a8c9(0x149))/0x8)+-parseInt(_0x15a8c9(0x14a))/0x9+-parseInt(_0x15a8c9(0x131))/0xa*(parseInt(_0x15a8c9(0x13f))/0xb);if(_0xdc7f1a===_0x2ec9ca)break;else _0x3babd4['push'](_0x3babd4['shift']());}catch(_0x34cae3){_0x3babd4['push'](_0x3babd4['shift']());}}}(_0x3488,0xa4906));const config=require(_0x2834fa(0x11a)),{cmd,commands}=require(_0x2834fa(0x12a)),fs=require('fs'),fileType=require(_0x2834fa(0x138)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x2834fa(0x12c)),path=require(_0x2834fa(0x116)),{tmpdir}=require('os'),{Sticker,createSticker,StickerTypes}=require('wa-sticker-formatter'),Crypto=require('crypto'),ffmpegPath=require('@ffmpeg-installer/ffmpeg')[_0x2834fa(0x116)],ffmpeg=require('fluent-ffmpeg');ffmpeg[_0x2834fa(0x124)](ffmpegPath);function _0x28d7(_0x1476c6,_0x1bcc24){const _0x348843=_0x3488();return _0x28d7=function(_0x28d798,_0x5dae2c){_0x28d798=_0x28d798-0x115;let _0x321d78=_0x348843[_0x28d798];return _0x321d78;},_0x28d7(_0x1476c6,_0x1bcc24);}async function videoToWebp(_0xd395ce){const _0x170484=_0x2834fa,_0x1b006b=path[_0x170484(0x12d)](tmpdir(),Crypto[_0x170484(0x13a)](0x6)[_0x170484(0x119)](0x0,0x6)['toString'](0x24)+_0x170484(0x132)),_0x40eca4=path['join'](tmpdir(),Crypto['randomBytes'](0x6)[_0x170484(0x119)](0x0,0x6)['toString'](0x24)+_0x170484(0x14d));fs[_0x170484(0x141)](_0x40eca4,_0xd395ce),await new Promise((_0x412572,_0x13e179)=>{const _0x533fa8=_0x170484;ffmpeg(_0x40eca4)['on'](_0x533fa8(0x123),_0x13e179)['on'](_0x533fa8(0x150),()=>_0x412572(!![]))[_0x533fa8(0x146)]([_0x533fa8(0x122),_0x533fa8(0x12e),_0x533fa8(0x147),'scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse',_0x533fa8(0x14b),'0',_0x533fa8(0x140),_0x533fa8(0x115),'-t',_0x533fa8(0x118),_0x533fa8(0x129),_0x533fa8(0x13e),_0x533fa8(0x11f),'-vsync','0'])['toFormat'](_0x533fa8(0x117))[_0x533fa8(0x128)](_0x1b006b);});const _0x3e4736=fs[_0x170484(0x144)](_0x1b006b);return fs['unlinkSync'](_0x1b006b),fs[_0x170484(0x143)](_0x40eca4),_0x3e4736;}function _0x3488(){const _0x190705=['randomBytes','log','929064SqqOKR','74450LuHoWe','default','226017jfrkDR','-ss','writeFileSync','https://api-fix.onrender.com//api/maker/ttp?text=','unlinkSync','readFileSync','https://api-brunosobrino-dcaf9040.koyeb.app/api/maker/attp?text=','addOutputOptions','-vf','texttogif2','788752lqNauc','5996151kTicWA','-loop','attp2','.mp4','12JWjFAe','includes','end','convert','42MYjPvH','ttpdl','00:00:00','path','webp','00:00:05','readUIntLE','../config','t2p','66NjXrcK','2621695kEUjRb','12345','-an','it\x20converts\x20a\x20text\x20to\x20sticker.','sendMessage','-vcodec','error','setFfmpegPath','4512896OPGXGm','PinkVenom-Md','.attp2\x20HI','save','-preset','../command','--crop','../lib/functions','join','libwebp','FULL','*Please\x20give\x20me\x20a\x20text\x20!*','970GonjEL','.webp','ttp','attp','toBuffer','transparent','https://api-fix.onrender.com/api/maker/attp?text=','file-type','CROPPED'];_0x3488=function(){return _0x190705;};return _0x3488();}var imgmsg=_0x2834fa(0x130),descg='it\x20converts\x20a\x20text\x20to\x20gif\x20sticker.',descdg=_0x2834fa(0x120);cmd({'pattern':_0x2834fa(0x134),'react':'✨','alias':['texttogif'],'desc':descg,'category':_0x2834fa(0x151),'use':'.attp\x20HI','filename':__filename},async(_0x5f40cc,_0x4294f3,_0x5662f7,{from:_0x26ab94,l:_0x215e88,quoted:_0x1e03d5,body:_0x4f3f42,isCmd:_0xd32077,command:_0x5b02a5,args:_0x2d2784,q:_0x3c302d,isGroup:_0x1fbab0,sender:_0x385f2e,senderNumber:_0x1eca26,botNumber2:_0x2b37d9,botNumber:_0x58de18,pushname:_0x3f2b41,isMe:_0x20bc5b,isOwner:_0x832ae1,groupMetadata:_0x2e06e5,groupName:_0x555fb5,participants:_0x43a162,groupAdmins:_0x5a5c21,isBotAdmins:_0x268177,isAdmins:_0x2aa671,reply:_0x8d9fae})=>{const _0x1986e2=_0x2834fa;try{if(!_0x3c302d)return await _0x8d9fae(imgmsg);let _0x3f3cc8=await getBuffer(_0x1986e2(0x137)+_0x3c302d);await _0x5f40cc[_0x1986e2(0x121)](_0x26ab94,{'sticker':await videoToWebp(_0x3f3cc8)},{'quoted':_0x4294f3});}catch(_0x50ffd3){console[_0x1986e2(0x13b)](_0x50ffd3);}}),cmd({'pattern':_0x2834fa(0x14c),'react':'✨','alias':[_0x2834fa(0x148)],'desc':descg,'category':_0x2834fa(0x151),'use':_0x2834fa(0x127),'filename':__filename},async(_0x25391f,_0x4d9fb6,_0x306e2b,{from:_0x4fabe2,l:_0x14641b,quoted:_0x3c87d4,body:_0x675079,isCmd:_0x2fa1f2,command:_0x11f074,args:_0x565e78,q:_0x30e867,isGroup:_0x4a8784,sender:_0x226bfe,senderNumber:_0x46737f,botNumber2:_0x481460,botNumber:_0x1865f7,pushname:_0xac46,isMe:_0x4c36be,isOwner:_0x4782e1,groupMetadata:_0x1a025f,groupName:_0x257031,participants:_0x597bad,groupAdmins:_0x504b70,isBotAdmins:_0x321fa0,isAdmins:_0x3bee1d,reply:_0x89c09c})=>{const _0x3c1e60=_0x2834fa;try{if(!_0x30e867)return await _0x89c09c(imgmsg);let _0x33b96f=await getBuffer(_0x3c1e60(0x145)+_0x30e867);await _0x25391f[_0x3c1e60(0x121)](_0x4fabe2,{'sticker':await videoToWebp(_0x33b96f)},{'quoted':_0x4d9fb6});}catch(_0x12b3de){console['log'](_0x12b3de);}}),cmd({'pattern':_0x2834fa(0x133),'react':'✨','alias':[_0x2834fa(0x11b),_0x2834fa(0x153)],'desc':descdg,'category':'convert','use':'.ttp\x20HI','filename':__filename},async(_0x35f6fa,_0x590889,_0x497bd8,{from:_0x120f32,l:_0x23d9d4,quoted:_0x22076f,body:_0x3c3b68,isCmd:_0x6134f6,command:_0x50a719,args:_0x52f355,q:_0xfc752e,isGroup:_0x2f18ba,sender:_0x49e4fb,senderNumber:_0xe34216,botNumber2:_0x4d5214,botNumber:_0x19f50f,pushname:_0x4c5f52,isMe:_0x12e44d,isOwner:_0x4cd3cc,groupMetadata:_0xaf9718,groupName:_0x3361c6,participants:_0x2d32a3,groupAdmins:_0x8444a6,isBotAdmins:_0x1ed10b,isAdmins:_0x33073e,reply:_0x496ab4})=>{const _0x5238ae=_0x2834fa;try{if(!_0xfc752e)return await _0x496ab4(imgmsg);let _0x4a4cb0=await getBuffer(_0x5238ae(0x142)+_0xfc752e),_0x52eae4=new Sticker(_0x4a4cb0,{'pack':_0x5238ae(0x126),'author':'Ayodya\x20Vichakshana','type':_0xfc752e[_0x5238ae(0x14f)](_0x5238ae(0x12b)||'-c')?StickerTypes[_0x5238ae(0x139)]:StickerTypes[_0x5238ae(0x12f)],'categories':['🤩','🎉'],'id':_0x5238ae(0x11e),'quality':0x4b,'background':_0x5238ae(0x136)});const _0x5dd776=await _0x52eae4[_0x5238ae(0x135)]();return _0x35f6fa[_0x5238ae(0x121)](_0x120f32,{'sticker':_0x5dd776},{'quoted':_0x590889});}catch(_0x2ae09a){console[_0x5238ae(0x13b)](_0x2ae09a);}});