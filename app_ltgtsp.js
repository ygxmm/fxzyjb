
/*
中国联通---搜索 阅读专区 ---看小说
阅读抓包地址 https://10010.woread.com.cn/ng_woread_service/rest/basics/addreadtime
龟兔抓包地址(顶部轮播的活动) https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData
复制请求里面的sign值(需要看2分钟小说才有)
在阅读抓包地址或龟兔抓包地址请求头里面找accesstoken值

变量名:soy_ltgtsp_data
变量值:accesstoken&阅读的sign&龟兔的sign

定时自己算,跑一次是2分钟阅读
0/2 0-23 * * *
*/


const $ = new Env('联通-龟兔赛跑');
const author = '作者TG_ID:@ls_soy';
const notify = $.isNode() ? require('./sendNotify') : '';

var version_='jsjiami.com.v7';const _0x132027=_0x5c5d;function _0x5c5d(_0x4fb45e,_0x36177f){const _0x427aa6=_0x427a();return _0x5c5d=function(_0x5c5d7a,_0x123ad8){_0x5c5d7a=_0x5c5d7a-0x9a;let _0x72fe6=_0x427aa6[_0x5c5d7a];if(_0x5c5d['Ecwieg']===undefined){var _0x33c8b2=function(_0x225030){const _0x762ebf='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x366899='',_0x383ca4='';for(let _0x5e1e71=0x0,_0x130167,_0x18e6e8,_0x1e8f64=0x0;_0x18e6e8=_0x225030['charAt'](_0x1e8f64++);~_0x18e6e8&&(_0x130167=_0x5e1e71%0x4?_0x130167*0x40+_0x18e6e8:_0x18e6e8,_0x5e1e71++%0x4)?_0x366899+=String['fromCharCode'](0xff&_0x130167>>(-0x2*_0x5e1e71&0x6)):0x0){_0x18e6e8=_0x762ebf['indexOf'](_0x18e6e8);}for(let _0x568468=0x0,_0x334974=_0x366899['length'];_0x568468<_0x334974;_0x568468++){_0x383ca4+='%'+('00'+_0x366899['charCodeAt'](_0x568468)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x383ca4);};const _0x450972=function(_0x2cbe4e,_0xbf4e35){let _0x147f8f=[],_0x46c760=0x0,_0x37573b,_0x208b35='';_0x2cbe4e=_0x33c8b2(_0x2cbe4e);let _0x599b7b;for(_0x599b7b=0x0;_0x599b7b<0x100;_0x599b7b++){_0x147f8f[_0x599b7b]=_0x599b7b;}for(_0x599b7b=0x0;_0x599b7b<0x100;_0x599b7b++){_0x46c760=(_0x46c760+_0x147f8f[_0x599b7b]+_0xbf4e35['charCodeAt'](_0x599b7b%_0xbf4e35['length']))%0x100,_0x37573b=_0x147f8f[_0x599b7b],_0x147f8f[_0x599b7b]=_0x147f8f[_0x46c760],_0x147f8f[_0x46c760]=_0x37573b;}_0x599b7b=0x0,_0x46c760=0x0;for(let _0x4d88c6=0x0;_0x4d88c6<_0x2cbe4e['length'];_0x4d88c6++){_0x599b7b=(_0x599b7b+0x1)%0x100,_0x46c760=(_0x46c760+_0x147f8f[_0x599b7b])%0x100,_0x37573b=_0x147f8f[_0x599b7b],_0x147f8f[_0x599b7b]=_0x147f8f[_0x46c760],_0x147f8f[_0x46c760]=_0x37573b,_0x208b35+=String['fromCharCode'](_0x2cbe4e['charCodeAt'](_0x4d88c6)^_0x147f8f[(_0x147f8f[_0x599b7b]+_0x147f8f[_0x46c760])%0x100]);}return _0x208b35;};_0x5c5d['IwQVHL']=_0x450972,_0x4fb45e=arguments,_0x5c5d['Ecwieg']=!![];}const _0x19338b=_0x427aa6[0x0],_0x20ad8b=_0x5c5d7a+_0x19338b,_0x273eec=_0x4fb45e[_0x20ad8b];return!_0x273eec?(_0x5c5d['UeTIFO']===undefined&&(_0x5c5d['UeTIFO']=!![]),_0x72fe6=_0x5c5d['IwQVHL'](_0x72fe6,_0x123ad8),_0x4fb45e[_0x20ad8b]=_0x72fe6):_0x72fe6=_0x273eec,_0x72fe6;},_0x5c5d(_0x4fb45e,_0x36177f);}(function(_0x503d3c,_0x1f23e6,_0x1b3ae2,_0x3bf995,_0x2a44e5,_0x564e58,_0x2e9465){return _0x503d3c=_0x503d3c>>0x6,_0x564e58='hs',_0x2e9465='hs',function(_0x41d66c,_0x53f01f,_0x155a99,_0x16a01a,_0x13c8b2){const _0xd79087=_0x5c5d;_0x16a01a='tfi',_0x564e58=_0x16a01a+_0x564e58,_0x13c8b2='up',_0x2e9465+=_0x13c8b2,_0x564e58=_0x155a99(_0x564e58),_0x2e9465=_0x155a99(_0x2e9465),_0x155a99=0x0;const _0x172230=_0x41d66c();while(!![]&&--_0x3bf995+_0x53f01f){try{_0x16a01a=parseInt(_0xd79087(0x1eb,'WMt!'))/0x1+-parseInt(_0xd79087(0x292,'c3G#'))/0x2+-parseInt(_0xd79087(0x102,'jx4v'))/0x3*(-parseInt(_0xd79087(0x25a,'Gn2J'))/0x4)+-parseInt(_0xd79087(0x181,'GBfn'))/0x5*(-parseInt(_0xd79087(0xd2,'EEv('))/0x6)+parseInt(_0xd79087(0x103,'zljb'))/0x7*(parseInt(_0xd79087(0x1a7,'7ku]'))/0x8)+-parseInt(_0xd79087(0x2d2,'GBfn'))/0x9+parseInt(_0xd79087(0x27e,'taBO'))/0xa*(-parseInt(_0xd79087(0x212,'K$0Z'))/0xb);}catch(_0x2c88e9){_0x16a01a=_0x155a99;}finally{_0x13c8b2=_0x172230[_0x564e58]();if(_0x503d3c<=_0x3bf995)_0x155a99?_0x2a44e5?_0x16a01a=_0x13c8b2:_0x2a44e5=_0x13c8b2:_0x155a99=_0x13c8b2;else{if(_0x155a99==_0x2a44e5['replace'](/[qfebYMhVFRUrEQOHwtJD=]/g,'')){if(_0x16a01a===_0x53f01f){_0x172230['un'+_0x564e58](_0x13c8b2);break;}_0x172230[_0x2e9465](_0x13c8b2);}}}}}(_0x1b3ae2,_0x1f23e6,function(_0x391b58,_0x3998b0,_0x3967b7,_0x27f1c6,_0x22c481,_0x2cb256,_0x3f2588){return _0x3998b0='\x73\x70\x6c\x69\x74',_0x391b58=arguments[0x0],_0x391b58=_0x391b58[_0x3998b0](''),_0x3967b7=`\x72\x65\x76\x65\x72\x73\x65`,_0x391b58=_0x391b58[_0x3967b7]('\x76'),_0x27f1c6=`\x6a\x6f\x69\x6e`,(0x1243b4,_0x391b58[_0x27f1c6](''));});}(0x3340,0x32571,_0x427a,0xcf),_0x427a)&&(version_=_0x427a);try{CryptoJs=$[_0x132027(0x194,'VmLA')]()?require(_0x132027(0x1a1,'92E5')):'';}catch(_0x4cddaa){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}try{axios=$[_0x132027(0x221,'K$0Z')]()?require('axios'):'';}catch(_0x3db105){throw new Error('\x0a找不到依赖\x20axios\x20,请自行安装\x0a');}let subTitle='',user_num=0x0,execAcList=[],user_data='',app_sj=![];!(async()=>{const _0x21b5ef=_0x132027,_0x8f86e1={'mTgKT':function(_0x59985b,_0x23f176){return _0x59985b(_0x23f176);},'rVlge':_0x21b5ef(0xaf,'Zk7n'),'DHMLn':function(_0x47aec7,_0x51ad5d){return _0x47aec7(_0x51ad5d);},'VQpoX':function(_0x5406e7){return _0x5406e7();},'ABRXk':'geziI','DdeMl':_0x21b5ef(0xa2,'#rvE'),'yAiiB':'tHCga','zTMUR':function(_0x2ec182,_0x52a27a){return _0x2ec182>_0x52a27a;},'cniZP':function(_0x37f5f4,_0x3e4918){return _0x37f5f4>_0x3e4918;},'kBQYQ':function(_0x1cfc02,_0x5af744){return _0x1cfc02===_0x5af744;},'wJgDz':'vstQt','VomQD':function(_0x570e78,_0x6304d8){return _0x570e78+_0x6304d8;},'fENZM':function(_0x15ca22,_0x58a67e){return _0x15ca22*_0x58a67e;},'ybjfH':function(_0x7425ba,_0x2ce002){return _0x7425ba*_0x2ce002;},'CuvXN':function(_0x315965,_0x56f5eb){return _0x315965*_0x56f5eb;},'KdZdN':function(_0x5e5ea1,_0x2b8c28){return _0x5e5ea1*_0x2b8c28;},'eFlEY':function(_0x8ec6e7,_0x12b71f){return _0x8ec6e7!==_0x12b71f;},'vyvXx':_0x21b5ef(0x2c8,'VmLA')};console[_0x21b5ef(0x1b6,'TgQS')](_0x21b5ef(0x191,'zljb'));if($[_0x21b5ef(0x1a2,'*S42')]()){await _0x8f86e1[_0x21b5ef(0x188,'W]dO')](yyz_getip);try{Tips=author[_0x21b5ef(0x1ed,'FpJP')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x1270ce){if(_0x8f86e1[_0x21b5ef(0xea,'GBfn')]!==_0x21b5ef(0x21b,'Yb7s'))_0x366899=_0x383ca4[_0x21b5ef(0x2cd,'Yb7s')]()?_0x8f86e1[_0x21b5ef(0x182,'ioBX')](_0x5e1e71,_0x8f86e1['rVlge']):'';else throw new Error(_0x21b5ef(0x106,'*S42'));}try{_0x8f86e1[_0x21b5ef(0x1a4,'E[*v')]===_0x8f86e1['yAiiB']?_0x8f86e1['DHMLn'](_0x1ccd35,_0x5bbc36):YZ=author['match'](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}catch(_0x4d3082){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}if(process['env'][_0x21b5ef(0x26a,'zljb')]&&_0x8f86e1['zTMUR'](process[_0x21b5ef(0x24d,'SuRc')][_0x21b5ef(0x1e7,'JlAW')]['indexOf']('@'),-0x1))user_data=process[_0x21b5ef(0x209,'K$0Z')]['soy_ltgtsp_data'][_0x21b5ef(0x180,']6gY')]('@');else{if(process[_0x21b5ef(0x133,'vc10')]['soy_ltgtsp_data']&&_0x8f86e1[_0x21b5ef(0xd5,'Zk7n')](process[_0x21b5ef(0x133,'vc10')]['soy_ltgtsp_data'][_0x21b5ef(0x27d,'GBfn')]('\x0a'),-0x1))user_data=process['env'][_0x21b5ef(0x229,'u5)%')]['split']('\x0a');else{if(process['env'][_0x21b5ef(0x229,'u5)%')]&&process[_0x21b5ef(0x165,'HEWi')]['soy_ltgtsp_data'][_0x21b5ef(0x178,'cax#')]('#')>-0x1)user_data=process[_0x21b5ef(0x18e,'P0oq')]['soy_ltgtsp_data'][_0x21b5ef(0x169,'jx4v')]('#');else{if(_0x8f86e1['kBQYQ'](_0x21b5ef(0xa3,'TgQS'),_0x8f86e1[_0x21b5ef(0x1e2,'*S42')]))user_data=process[_0x21b5ef(0x276,'Ohf7')][_0x21b5ef(0x1d7,'Gn2J')]['split']();else throw new _0x5697d1(_0x21b5ef(0x11f,'xQLR'));}}};user_num=user_data[_0x21b5ef(0x149,'HEWi')],console[_0x21b5ef(0x1ee,'GBfn')](_0x21b5ef(0x202,']6gY')+new Date(_0x8f86e1['VomQD'](new Date()[_0x21b5ef(0x1ea,'92E5')]()+_0x8f86e1[_0x21b5ef(0x20e,'jXEc')](new Date()['getTimezoneOffset']()*0x3c,0x3e8),_0x8f86e1[_0x21b5ef(0x290,'SgxK')](_0x8f86e1[_0x21b5ef(0xfb,'7NyC')](_0x8f86e1['KdZdN'](0x8,0x3c),0x3c),0x3e8)))[_0x21b5ef(0x294,')GzI')]()+_0x21b5ef(0x193,'vc10')),console['log'](_0x21b5ef(0x138,'92E5')+user_num+_0x21b5ef(0x1bc,'!64y')),subTitle='',await get_zu();}else{if(_0x8f86e1[_0x21b5ef(0x162,'xQLR')](_0x8f86e1['vyvXx'],_0x21b5ef(0x1f7,'7NyC')))_0x10e9ac[_0x369d57]?_0x2728dc[_0x465f78]['push'](_0x1b73d2):_0x5047d4[_0x59e6f3]=[_0x42401f];else{console[_0x21b5ef(0x1c9,'Yb7s')](_0x21b5ef(0xa7,'HEWi'));return;}}})()['catch'](_0x50d50e=>$['logErr'](_0x50d50e))[_0x132027(0x1f8,')$iK')](()=>$[_0x132027(0x2b5,'pVHU')]());async function get_zu(){const _0x4646fc=_0x132027,_0x357a4d={'jKQWX':function(_0x3d6e87,_0x484eb9){return _0x3d6e87==_0x484eb9;},'EMSlP':function(_0x3150d5,_0x4aab93){return _0x3150d5===_0x4aab93;},'ocpnN':_0x4646fc(0x25e,'K$0Z'),'ezARW':_0x4646fc(0x267,'!64y'),'jukXK':function(_0xbe33e5,_0x2c6e18){return _0xbe33e5<_0x2c6e18;},'UNzbj':function(_0x240093,_0x582fa2){return _0x240093+_0x582fa2;},'YcxTA':function(_0x393a6f){return _0x393a6f();}};let _0x2b2e50=0x0,_0x474566=[];for(let _0x4bb2ea=0x0;_0x357a4d[_0x4646fc(0x206,'cax#')](_0x4bb2ea,user_num);_0x4bb2ea++){_0x474566[_0x4646fc(0xd1,'h9U*')]({'num':_0x357a4d[_0x4646fc(0x27c,'Zk7n')](_0x4bb2ea,0x1),'token':user_data[_0x4bb2ea][_0x4646fc(0xd3,'7NyC')]('&')[0x0],'yd_sign':user_data[_0x4bb2ea][_0x4646fc(0x271,'P0oq')]('&')[0x1],'gt_sign':user_data[_0x4bb2ea][_0x4646fc(0xf2,')GzI')]('&')[0x2]});}_0x474566['forEach']((_0x262f9b,_0x25eda8)=>{const _0x221275=_0x4646fc;if(execAcList[_0x2b2e50]){if(_0x357a4d['EMSlP'](_0x357a4d[_0x221275(0x153,'P0oq')],_0x357a4d['ocpnN']))execAcList[_0x2b2e50][_0x221275(0x117,']6gY')](_0x262f9b);else{let _0x33343a=_0x44211b[_0x221275(0x211,'P0oq')](_0x2905ec);_0x357a4d[_0x221275(0x1bd,'HEWi')](_0x33343a['code'],0x0)?(_0x3afe52[_0x221275(0x13f,'jXEc')]('\x0a【'+_0x3c2f87+'提示---账号\x20'+_0x5bb4e1['num']+_0x221275(0x265,'HEWi')+_0x33343a[_0x221275(0xb5,'TgQS')][_0x221275(0x18a,'#rvE')]+','+_0x33343a[_0x221275(0x2b2,'ueFR')][_0x221275(0x123,'xQLR')]),_0x5b25cc+='\x0a【'+_0x2be984+'提示---账号\x20'+_0x4e1f69['num']+'\x20唤醒小兔】:\x20获得'+_0x33343a['data']['prizedesc']+','+_0x33343a[_0x221275(0xb5,'TgQS')][_0x221275(0x1f6,'h9U*')]):(_0x20f48a[_0x221275(0x23e,'Gn2J')]('\x0a【'+_0x295c71+'提示---账号\x20'+_0x462a53[_0x221275(0x222,'JlAW')]+_0x221275(0x1da,'VZ)O')+_0x33343a[_0x221275(0x1a6,'Ohf7')]),_0x3764ea+='\x0a【'+_0x2469c9+_0x221275(0x16d,'jx4v')+_0x1ed70c[_0x221275(0x1b4,'pVHU')]+_0x221275(0x1a9,'HEWi')+_0x33343a[_0x221275(0x12b,'W]dO')]);}}else _0x357a4d[_0x221275(0x28b,'jx4v')](_0x357a4d[_0x221275(0x18f,'WMt!')],_0x357a4d[_0x221275(0x2c6,'zljb')])?execAcList[_0x2b2e50]=[_0x262f9b]:_0x39c9c0=_0x221275(0x10e,'8h3q');}),await _0x357a4d[_0x4646fc(0x257,'Ohf7')](implement);}async function implement(){const _0x457415=_0x132027,_0x3b61bf={'nVsfa':_0x457415(0x25d,'HEWi'),'XnJCQ':function(_0x448708,_0x58eb8f){return _0x448708<_0x58eb8f;},'ybldI':function(_0x1f71ab,_0x147ba6){return _0x1f71ab-_0x147ba6;},'zRopS':_0x457415(0x1c8,'W]dO'),'AxQyD':function(_0x191c4d,_0x21b696){return _0x191c4d>_0x21b696;},'OWnbe':_0x457415(0x2cb,'P0oq'),'BARaQ':function(_0x2870b1,_0x48adfb){return _0x2870b1===_0x48adfb;},'tqATg':_0x457415(0x13e,'Yb7s'),'jqaRn':function(_0x25e2de,_0x31e07d){return _0x25e2de===_0x31e07d;},'vdXuw':_0x457415(0x1dc,'#rvE'),'XiUGW':_0x457415(0x29d,'Gn2J')};let _0x568b20=[];if(_0x3b61bf[_0x457415(0x2c2,'Zk7n')](execAcList[_0x457415(0x19f,'u5)%')],0x0)){if(_0x3b61bf['OWnbe']!==_0x3b61bf[_0x457415(0x228,'Zk7n')]){let _0x3ff3f9=_0x3b61bf['nVsfa'],_0x53238e='';for(let _0x210f7a=0x0;_0x3b61bf[_0x457415(0xb6,'S4IJ')](_0x210f7a,_0x186a96);_0x210f7a++){let _0x2498a4=_0x4f5b67[_0x457415(0x1d6,']mz(')](_0x3b61bf[_0x457415(0x122,'taBO')](_0x217657[_0x457415(0x2ce,'zljb')]()*_0x3ff3f9[_0x457415(0x1ae,'FpJP')],0x1));_0x53238e+=_0x3ff3f9[_0x2498a4];}return _0x53238e;}else{for(let _0xe44cba of execAcList){_0x3b61bf[_0x457415(0x2a0,'SuRc')](_0x3b61bf['tqATg'],_0x3b61bf['tqATg'])?await Promise[_0x457415(0x1fb,')$iK')](_0xe44cba[_0x457415(0x128,'Gn2J')](_0x100f85=>start(_0x100f85))):_0x2aee34?_0x41c405=_0x3b61bf['zRopS']:_0x339f98=_0x3ae8d6;}notify&&(subTitle&&(_0x3b61bf['jqaRn'](_0x3b61bf[_0x457415(0x197,'EEv(')],_0x3b61bf['XiUGW'])?(_0x46f639[_0x457415(0x232,'cax#')]('\x0a【'+_0x230180+'提示---账号\x20'+_0x265412[_0x457415(0x1f1,'u5)%')]+'\x20唤醒小兔】:\x20返回\x20'+_0x2c57a9),_0x3c72f6+='\x0a【'+_0x2d3d66+'提示---账号\x20'+_0x59774d[_0x457415(0x2b7,'!64y')]+_0x457415(0x1b8,'Ohf7')+_0x51c836):await notify[_0x457415(0x240,'VZ)O')]($[_0x457415(0x245,'Ohf7')],subTitle)));}}else console[_0x457415(0x1ee,'GBfn')]('\x0a【脚本提示】：没有获取到账号数据');}async function start(_0x257c0c){const _0x310311=_0x132027,_0x1d68db={'vxInY':function(_0x39c31e,_0x5ac829){return _0x39c31e(_0x5ac829);}};console[_0x310311(0x16f,'taBO')](_0x257c0c),await _0x1d68db[_0x310311(0x175,'W]dO')](Activity,_0x257c0c),await addreadtime(_0x257c0c);};function Activity(_0x115741){const _0x1863e7=_0x132027,_0x23c21f={'RnclG':function(_0x3e4835,_0x2aeee5){return _0x3e4835+_0x2aeee5;},'SRaDe':function(_0x2fabfa,_0x26053f){return _0x2fabfa+_0x26053f;},'RQmcC':function(_0x16703a,_0x483a0b){return _0x16703a+_0x483a0b;},'sFhXM':function(_0x1a7d87,_0x473c9f){return _0x1a7d87+_0x473c9f;},'AHnPH':function(_0x4a2ac4,_0x4675cc){return _0x4a2ac4+_0x4675cc;},'TTWDp':'abcdefghijklmnopqrstuvwxyz0123456789','CkCoV':function(_0x5e1a9b,_0x5664e6){return _0x5e1a9b-_0x5664e6;},'okQtR':function(_0x565056,_0x579f43){return _0x565056*_0x579f43;},'ohbxj':_0x1863e7(0x1af,')GzI'),'lsOBN':function(_0x2cbf5d,_0x1cf4fc){return _0x2cbf5d==_0x1cf4fc;},'MheMY':function(_0x564e99,_0x2db02c){return _0x564e99(_0x2db02c);},'VSDUT':function(_0x2e5c0b,_0x5325d5){return _0x2e5c0b===_0x5325d5;},'ZFvPU':'ZvAsO','DFTjW':'10010.woread.com.cn','JYcBP':_0x1863e7(0x255,'P]&r'),'guIzS':'Mozilla/5.0\x20(Linux;\x20Android\x2010;)','CpTBd':_0x1863e7(0x264,'8h3q'),'SxSkD':_0x1863e7(0xfd,'cax#'),'fOGAa':_0x1863e7(0x15e,'*S42'),'RarIM':_0x1863e7(0x18d,'7ku]'),'vpFkB':_0x1863e7(0x110,'jx4v')};let _0x16386f=new Date()[_0x1863e7(0x283,'Mb[3')](),_0x444f01=getRandom(0xd),_0x284918='{\x22sign\x22:\x22'+_0x115741['gt_sign']+'\x22}';return new Promise(_0x5a02f8=>{const _0x1f7da5=_0x1863e7,_0x5291d9={'ZrrvW':function(_0x10329d,_0x4e8fa9){const _0x1cafad=_0x5c5d;return _0x23c21f[_0x1cafad(0x116,'pVHU')](_0x10329d,_0x4e8fa9);},'VAMFF':function(_0x4c6f6e,_0x2f679a){const _0x50ae68=_0x5c5d;return _0x23c21f[_0x50ae68(0x2a2,'92E5')](_0x4c6f6e,_0x2f679a);},'tCkva':function(_0x333b3c,_0x55c45e){return _0x23c21f['SRaDe'](_0x333b3c,_0x55c45e);},'crQDb':function(_0x50be2f,_0x281a32){const _0x57b705=_0x5c5d;return _0x23c21f[_0x57b705(0x2b8,'c3G#')](_0x50be2f,_0x281a32);},'bhSVS':function(_0x3a39d4,_0x52f8d2){return _0x23c21f['sFhXM'](_0x3a39d4,_0x52f8d2);},'rOqzl':function(_0x172a63,_0x1b81bd){const _0x22c5a4=_0x5c5d;return _0x23c21f[_0x22c5a4(0xda,'E[*v')](_0x172a63,_0x1b81bd);},'NFjox':function(_0x5c4c9a,_0x44340b){const _0x229e19=_0x5c5d;return _0x23c21f[_0x229e19(0x1df,'P]&r')](_0x5c4c9a,_0x44340b);},'BizwD':function(_0x14d0d8,_0x2e9719){return _0x14d0d8+_0x2e9719;},'LGATk':_0x23c21f[_0x1f7da5(0x295,'ueFR')],'aUBCp':function(_0x2a6418,_0x42e33e){const _0x4e9ed4=_0x1f7da5;return _0x23c21f[_0x4e9ed4(0x131,']mz(')](_0x2a6418,_0x42e33e);},'eArVu':function(_0x54c9ac,_0x1f8534){return _0x23c21f['okQtR'](_0x54c9ac,_0x1f8534);},'RrefM':_0x1f7da5(0xd4,'u5)%'),'zpinP':_0x23c21f[_0x1f7da5(0x22c,']6gY')],'MnKUJ':function(_0x3438c4,_0x982756){return _0x3438c4===_0x982756;},'QyFIw':function(_0x34bdca,_0x13e15f){return _0x23c21f['lsOBN'](_0x34bdca,_0x13e15f);},'TEQYl':function(_0x4a72a5,_0x4cb713){return _0x23c21f['MheMY'](_0x4a72a5,_0x4cb713);},'JUEQR':function(_0x51554f,_0xeb250d){const _0x1182fa=_0x1f7da5;return _0x23c21f[_0x1182fa(0x156,'Mb[3')](_0x51554f,_0xeb250d);},'vsyDw':_0x1f7da5(0x1e4,'VmLA'),'JjTpQ':function(_0x31ee83,_0x484002){return _0x31ee83>_0x484002;},'Ifbkc':_0x23c21f['ZFvPU']};let _0x4c8552={'url':_0x1f7da5(0x146,'P0oq'),'headers':{'Host':_0x23c21f[_0x1f7da5(0x124,'jXEc')],'content-length':_0x284918[_0x1f7da5(0x242,'E[*v')],'pragma':'no-cache','cache-control':_0x1f7da5(0x2ba,'HEWi'),'accept':_0x23c21f[_0x1f7da5(0xba,'daCS')],'accesstoken':_0x115741[_0x1f7da5(0x266,'jXEc')],'user-agent':_0x23c21f['guIzS'],'Content-Type':'application/json;charset=UTF-8','origin':_0x23c21f[_0x1f7da5(0x247,'vc10')],'x-requested-with':'com.sinovatech.unicom.ui','sec-fetch-site':_0x23c21f['SxSkD'],'sec-fetch-mode':_0x23c21f['fOGAa'],'sec-fetch-dest':'empty','referer':_0x23c21f[_0x1f7da5(0xec,'8h3q')],'accept-encoding':_0x1f7da5(0xff,'SuRc'),'accept-language':_0x23c21f[_0x1f7da5(0x277,'*S42')]},'body':_0x284918};$[_0x1f7da5(0x241,'ioBX')](_0x4c8552,async(_0x27d8bf,_0x360851,_0x1e7dea)=>{const _0x2d175e=_0x1f7da5;if(_0x5291d9['RrefM']===_0x5291d9[_0x2d175e(0x20c,'#rvE')]){var _0x33baaa=new _0x14c640(_0x3009b4*0x3e8),_0x417771=_0x33baaa['getFullYear']()+'-',_0x4c739d=(_0x33baaa['getMonth']()+0x1<0xa?_0x5291d9[_0x2d175e(0x11a,'Mb[3')]('0',_0x33baaa['getMonth']()+0x1):_0x33baaa[_0x2d175e(0x272,']6gY')]()+0x1)+'-',_0x559e18=_0x5291d9['ZrrvW'](_0x33baaa[_0x2d175e(0x21c,')GzI')](),'\x20'),_0x57346c=_0x5291d9['VAMFF'](_0x33baaa[_0x2d175e(0xb4,'7ku]')](),':'),_0x194ee6=_0x5291d9[_0x2d175e(0x18b,'VZ)O')](_0x33baaa[_0x2d175e(0xd0,'pVHU')]()<0xa?_0x5291d9[_0x2d175e(0x2ad,'WMt!')]('0',_0x33baaa[_0x2d175e(0x20b,'!64y')]()):_0x33baaa['getMinutes'](),':'),_0x322f2d=_0x33baaa[_0x2d175e(0x233,'K$0Z')]();let _0x5cf766=_0x5291d9['tCkva'](_0x5291d9['crQDb'](_0x5291d9[_0x2d175e(0xf8,'K$0Z')](_0x417771,_0x4c739d)+_0x559e18+_0x57346c,_0x194ee6),_0x322f2d);return _0x5291d9[_0x2d175e(0x2bb,'7ku]')](_0x5291d9[_0x2d175e(0x2a6,'!64y')](_0x5291d9[_0x2d175e(0x9b,'*S42')](_0x417771,_0x4c739d)+_0x559e18,_0x57346c),_0x194ee6)+_0x322f2d;}else{try{if(_0x5291d9[_0x2d175e(0x16c,'cax#')](_0x2d175e(0xa6,']6gY'),_0x2d175e(0x158,'c3G#'))){if(_0x27d8bf)console['log']('\x0a【'+Tips+_0x2d175e(0xab,'xQLR')+_0x115741['num']+'\x20赛跑状态】:\x20返回\x20'+_0x27d8bf),subTitle+='\x0a【'+Tips+'提示---账号\x20'+_0x115741[_0x2d175e(0x190,'Yb7s')]+_0x2d175e(0x126,'P0oq')+_0x27d8bf;else{let _0x3a98d9=JSON[_0x2d175e(0xdd,'Gn2J')](_0x1e7dea);_0x3a98d9['code']==0x0?(console[_0x2d175e(0x1ec,')$iK')]('\x0a【'+Tips+_0x2d175e(0x1a5,'TgQS')+_0x115741[_0x2d175e(0xbc,'8h3q')]+'\x20赛跑状态】:\x20当前总阅读时长:'+_0x3a98d9[_0x2d175e(0x1f0,'SgxK')]['totalreadnums']+'分钟'),_0x5291d9['QyFIw'](_0x3a98d9[_0x2d175e(0x2b2,'ueFR')][_0x2d175e(0x2c7,'P0oq')],0x1)&&await _0x5291d9[_0x2d175e(0x1cb,'SgxK')](wakeRabbit,_0x115741)):_0x5291d9[_0x2d175e(0x1e0,')$iK')]('VpshM',_0x5291d9['vsyDw'])?_0x5291d9[_0x2d175e(0x148,'Ohf7')](_0x3a98d9['message']['indexOf']('请先参加活动'),-0x1)?await _0x5291d9[_0x2d175e(0x299,'pVHU')](joinRuning,_0x115741):_0x2d175e(0x143,'#rvE')!==_0x5291d9[_0x2d175e(0x189,'TgQS')]?(_0x302bad['log']('\x0a【'+_0x27a367+_0x2d175e(0x1e9,'W]dO')+_0xbf954f[_0x2d175e(0x170,')GzI')]+_0x2d175e(0x208,'HEWi')+_0x2e9acc),_0x219563+='\x0a【'+_0x1ada57+_0x2d175e(0xbf,'VZ)O')+_0x4de08f[_0x2d175e(0x1b4,'pVHU')]+'\x20阅读】:\x20返回\x20'+_0x323225):(console[_0x2d175e(0x130,'FpJP')]('\x0a【'+Tips+_0x2d175e(0x168,'7ku]')+_0x115741[_0x2d175e(0x2b7,'!64y')]+'\x20赛跑状态】:\x20'+_0x3a98d9[_0x2d175e(0x11d,'S4IJ')]),subTitle+='\x0a【'+Tips+_0x2d175e(0x29c,'WMt!')+_0x115741['num']+_0x2d175e(0x217,'7ku]')+_0x3a98d9['message']):_0x142ede[_0x2d175e(0x154,'S4IJ')]({'num':_0x5291d9[_0x2d175e(0x1aa,'S4IJ')](_0x44d9d4,0x1),'token':_0xb74fd0[_0x8ffc47][_0x2d175e(0x1c6,'zljb')]('&')[0x0],'yd_sign':_0x47e36d[_0x5bd109][_0x2d175e(0x263,'jXEc')]('&')[0x1],'gt_sign':_0x2568fc[_0x2baaf6][_0x2d175e(0x1c7,')$iK')]('&')[0x2]});}}else{let _0x7156c2=_0x5291d9['LGATk'],_0xd0ae6c='';for(let _0x387bf6=0x0;_0x387bf6<_0x2df6c2;_0x387bf6++){let _0x458f89=_0x4969c6[_0x2d175e(0x112,'jx4v')](_0x5291d9[_0x2d175e(0x1ca,')$iK')](_0x5291d9[_0x2d175e(0xc5,'TgQS')](_0x41e23e['random'](),_0x7156c2['length']),0x1));_0xd0ae6c+=_0x7156c2[_0x458f89];}return _0xd0ae6c;}}catch(_0xdf179a){}finally{_0x5a02f8(_0x115741);};}});});};function joinRuning(_0x3605b5){const _0x388b10=_0x132027,_0x14e68f={'YdbsY':_0x388b10(0x25b,'JlAW'),'QPWMi':function(_0x536a63,_0x2899e8){return _0x536a63!==_0x2899e8;},'QfSSQ':_0x388b10(0x1ba,'SuRc'),'YAXCU':_0x388b10(0x244,'u5)%'),'UuGlr':function(_0x531b12,_0x114702){return _0x531b12!==_0x114702;},'JmSwn':'KVOwz','wLXzX':function(_0x781b8b,_0x963624){return _0x781b8b===_0x963624;},'sJlCn':_0x388b10(0xb1,'VZ)O'),'afqPM':function(_0x36d8f4,_0x24251b){return _0x36d8f4(_0x24251b);},'Gwtel':'no-cache','bysJJ':_0x388b10(0x1fa,'FpJP'),'toRHy':'application/json;charset=UTF-8','ycXAH':_0x388b10(0xe7,'7ku]'),'AeYTn':_0x388b10(0xdb,'jXEc'),'yMuRN':_0x388b10(0x243,'JlAW'),'NozwB':_0x388b10(0x204,'E[*v'),'KpZZU':_0x388b10(0x279,'WMt!'),'kzxtK':_0x388b10(0xc6,'7ku]')};let _0x57a273=new Date()['getTime'](),_0xbf9548=getRandom(0xd),_0x30231f=_0x388b10(0x23c,'Zk%r')+_0x3605b5[_0x388b10(0x26c,'c3G#')]+'\x22}';return new Promise(_0x4bdc8d=>{const _0x249180=_0x388b10,_0x3b6c1b={'NDaVV':_0x14e68f[_0x249180(0x12d,'xQLR')],'xhBED':function(_0x74fe25,_0x4e37ec){const _0x55edb9=_0x249180;return _0x14e68f[_0x55edb9(0x104,'pVHU')](_0x74fe25,_0x4e37ec);},'kwTFy':_0x14e68f[_0x249180(0x2b3,')GzI')],'DuNxg':_0x14e68f['YAXCU'],'dVYdY':function(_0x514834,_0xc0d779){const _0x2f4a36=_0x249180;return _0x14e68f[_0x2f4a36(0xf5,'pVHU')](_0x514834,_0xc0d779);},'cDGuE':_0x14e68f[_0x249180(0xd6,'FpJP')],'BDgiq':'amcmo','rOgIT':_0x249180(0x17c,'Zk7n'),'phNAN':function(_0x5a6c02,_0x59abd2){const _0x5bae85=_0x249180;return _0x14e68f[_0x5bae85(0x2be,'GBfn')](_0x5a6c02,_0x59abd2);},'fryqE':_0x14e68f[_0x249180(0x9e,'!20M')],'BuuXG':function(_0xc30590,_0xe1cf0c){return _0x14e68f['afqPM'](_0xc30590,_0xe1cf0c);}};if('nZgeC'===_0x249180(0x2d3,'FpJP')){let _0x359a5b=_0x2003f3[_0x249180(0x161,'SgxK')]['encrypt'](_0x351a5f[_0x249180(0x26b,')GzI')][_0x249180(0x150,'!20M')][_0x249180(0x167,'!64y')](_0x57833d),_0xca750a[_0x249180(0x163,'pVHU')][_0x249180(0x1f2,'TgQS')][_0x249180(0x1fe,')GzI')](_0x3b6c1b['NDaVV']),{'iv':_0x38ff3b[_0x249180(0x11b,'Mb[3')][_0x249180(0x281,'cax#')][_0x249180(0xdd,'Gn2J')](_0x249180(0x289,'vc10')),'mode':_0x5ee03c[_0x249180(0x10d,'Zk7n')][_0x249180(0x2ae,'TgQS')],'padding':_0x79b8e8[_0x249180(0x293,'taBO')][_0x249180(0x2bd,'!20M')]}),_0x5bbafe=_0xc5ffa2['enc']['Base64']['stringify'](_0x359a5b[_0x249180(0x26e,'Mb[3')]);return _0x5bbafe;}else{let _0x191c98={'url':_0x249180(0x1cd,']6gY'),'headers':{'Host':_0x249180(0x9c,'E[*v'),'content-length':_0x30231f[_0x249180(0x252,'xQLR')],'pragma':_0x14e68f[_0x249180(0x23f,'*S42')],'cache-control':'no-cache','accept':_0x249180(0x24b,'ioBX'),'accesstoken':_0x3605b5['token'],'user-agent':_0x14e68f['bysJJ'],'Content-Type':_0x14e68f[_0x249180(0x15b,'Gn2J')],'origin':_0x14e68f['ycXAH'],'x-requested-with':_0x14e68f[_0x249180(0x24e,'u5)%')],'sec-fetch-site':_0x14e68f[_0x249180(0x19b,'SgxK')],'sec-fetch-mode':_0x14e68f['NozwB'],'sec-fetch-dest':_0x14e68f[_0x249180(0x1e5,'ioBX')],'referer':'https://10010.woread.com.cn/ng_woread/','accept-encoding':_0x249180(0x2af,'c3G#'),'accept-language':_0x14e68f[_0x249180(0x239,'W]dO')]},'body':_0x30231f};$['post'](_0x191c98,async(_0x4df283,_0x3ee335,_0x26e449)=>{const _0x5344a5=_0x249180;try{if(_0x3b6c1b[_0x5344a5(0x1c3,'h9U*')](_0x3b6c1b['kwTFy'],_0x3b6c1b[_0x5344a5(0x203,'daCS')]))_0x1d76a5=_0x13c2f5[_0x5344a5(0x2bc,'92E5')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');else{if(_0x4df283)'TYrgR'===_0x3b6c1b[_0x5344a5(0x275,'ioBX')]?(console[_0x5344a5(0x23e,'Gn2J')]('\x0a【'+Tips+_0x5344a5(0x17b,'o]O3')+_0x3605b5[_0x5344a5(0x1f1,'u5)%')]+_0x5344a5(0x1d2,'!20M')+_0x4df283),subTitle+='\x0a【'+Tips+_0x5344a5(0x1c1,'SuRc')+_0x3605b5[_0x5344a5(0xbd,'ueFR')]+_0x5344a5(0x1d0,'*S42')+_0x4df283):(_0x1899ad[_0x5344a5(0xa9,'xQLR')]('\x0a【'+_0x5518e8+_0x5344a5(0x16d,'jx4v')+_0x229a92[_0x5344a5(0x1c2,'TgQS')]+_0x5344a5(0x142,'vc10')+_0x182251),_0xb5ff64+='\x0a【'+_0x3f4a3b+_0x5344a5(0x159,']mz(')+_0x533fc1[_0x5344a5(0x19d,'7ku]')]+_0x5344a5(0xef,'FpJP')+_0x4b72f1);else{let _0x476df3=JSON[_0x5344a5(0x23d,'7ku]')](_0x26e449);_0x476df3[_0x5344a5(0x288,')$iK')]==0x0?_0x3b6c1b[_0x5344a5(0x234,']mz(')](_0x3b6c1b[_0x5344a5(0x135,')$iK')],_0x3b6c1b[_0x5344a5(0x2b4,'Zk7n')])?console['log']('\x0a【'+Tips+_0x5344a5(0x17b,'o]O3')+_0x3605b5[_0x5344a5(0x22b,'S4IJ')]+_0x5344a5(0x15d,'zljb')+_0x476df3[_0x5344a5(0x199,'GBfn')]):_0x1d21d9(_0xc36953):_0x3b6c1b[_0x5344a5(0x1e6,'SgxK')]!==_0x5344a5(0x14f,'92E5')?(console['log']('\x0a【'+Tips+_0x5344a5(0x17b,'o]O3')+_0x3605b5[_0x5344a5(0x1d5,'taBO')]+_0x5344a5(0x1b9,'Gn2J')+_0x476df3[_0x5344a5(0x291,'P0oq')]),subTitle+='\x0a【'+Tips+'提示---账号\x20'+_0x3605b5[_0x5344a5(0x14c,'!20M')]+_0x5344a5(0x12e,'SgxK')+_0x476df3['message']):(_0x22766d[_0x5344a5(0xc4,'Zk7n')]('\x0a【'+_0x5114e7+_0x5344a5(0x155,'taBO')+_0x433c78[_0x5344a5(0x100,'jx4v')]+_0x5344a5(0x226,'FpJP')+_0x4df41c[_0x5344a5(0x297,'HEWi')]),_0x19ed8c+='\x0a【'+_0x287e2a+_0x5344a5(0x18c,'zljb')+_0x2fe6b3['num']+_0x5344a5(0x27b,'ueFR')+_0x555ccd[_0x5344a5(0xa1,'zljb')]);}}}catch(_0x37357c){}finally{if(_0x3b6c1b[_0x5344a5(0x185,'HEWi')](_0x5344a5(0x125,'WMt!'),_0x3b6c1b[_0x5344a5(0xfa,'P0oq')]))_0x3b6c1b['BuuXG'](_0x4bdc8d,_0x3605b5);else{_0x15b4a7[_0x5344a5(0x270,'u5)%')](_0x5344a5(0xe2,'Mb[3'));return;}};});}});};function addreadtime(_0x1ddc55){const _0x2c4c59=_0x132027,_0x442d11={'zfVZb':function(_0x1d0007,_0x9b605f){return _0x1d0007===_0x9b605f;},'NZKEI':function(_0x556498,_0x2bff86){return _0x556498!==_0x2bff86;},'TWPkB':'TyHtQ','knwOR':_0x2c4c59(0x15c,'7ku]'),'TJgDZ':function(_0x45e284,_0x18df77){return _0x45e284==_0x18df77;},'xKpZX':_0x2c4c59(0x22e,'SuRc'),'muqEW':_0x2c4c59(0xbb,'jx4v'),'meIzK':function(_0x1aae0d,_0x5b3c1b){return _0x1aae0d(_0x5b3c1b);},'kZJYz':'no-cache','juQWm':_0x2c4c59(0x152,'!20M'),'lsKeH':_0x2c4c59(0xe4,'ioBX'),'ruTDK':_0x2c4c59(0xbe,'jx4v'),'FmTOs':'com.sinovatech.unicom.ui','qHXVj':_0x2c4c59(0x177,'FpJP'),'ZZSFM':_0x2c4c59(0x220,'92E5'),'kdZXO':_0x2c4c59(0x19c,'jx4v'),'dxRGE':'https://10010.woread.com.cn/ng_woread/','LlYQj':_0x2c4c59(0xd8,'Yb7s'),'dvXLh':_0x2c4c59(0x114,'Mb[3')};let _0x34aecf=new Date()[_0x2c4c59(0x248,'Zk7n')](),_0xe3a984=_0x442d11[_0x2c4c59(0x1ad,'SuRc')](getRandom,0xd),_0x229596=_0x2c4c59(0xe1,'*S42')+_0x1ddc55[_0x2c4c59(0x200,'FpJP')]+'\x22}';return new Promise(_0x2e3777=>{const _0x43f13e=_0x2c4c59,_0x1fbcdb={'WLwFf':function(_0x503d06,_0x3af098){const _0x2c88b7=_0x5c5d;return _0x442d11[_0x2c88b7(0x10a,'ioBX')](_0x503d06,_0x3af098);},'wyucw':_0x43f13e(0x2b1,')$iK'),'lgNiS':function(_0x1531ee,_0x5873c3){const _0x4ffa83=_0x43f13e;return _0x442d11[_0x4ffa83(0x260,'c3G#')](_0x1531ee,_0x5873c3);},'sHmPX':_0x442d11[_0x43f13e(0x1ef,'Ohf7')],'rMajl':_0x442d11['knwOR'],'zumlr':function(_0x953414,_0x13ce42){return _0x442d11['TJgDZ'](_0x953414,_0x13ce42);},'OYcwa':_0x442d11[_0x43f13e(0x1c0,'daCS')],'DwvtN':function(_0x445b8e,_0x539f24){return _0x445b8e/_0x539f24;},'NNGCU':_0x442d11['muqEW'],'QzlEZ':function(_0x10e6c1,_0x3a5040){const _0xe362f=_0x43f13e;return _0x442d11[_0xe362f(0x24f,'SgxK')](_0x10e6c1,_0x3a5040);}};let _0x3590a1={'url':'https://10010.woread.com.cn/ng_woread_service/rest/basics/addreadtime?','headers':{'Host':'10010.woread.com.cn','content-length':_0x229596[_0x43f13e(0x9f,'VmLA')],'pragma':_0x442d11[_0x43f13e(0x21a,'E[*v')],'cache-control':_0x442d11[_0x43f13e(0x223,'ioBX')],'accept':_0x442d11['juQWm'],'accesstoken':_0x1ddc55['token'],'user-agent':_0x43f13e(0x28f,'h9U*'),'Content-Type':_0x442d11[_0x43f13e(0xa0,'Mb[3')],'origin':_0x442d11[_0x43f13e(0x21d,'xQLR')],'x-requested-with':_0x442d11[_0x43f13e(0x139,'W]dO')],'sec-fetch-site':_0x442d11[_0x43f13e(0x192,'7NyC')],'sec-fetch-mode':_0x442d11[_0x43f13e(0x256,'Ohf7')],'sec-fetch-dest':_0x442d11[_0x43f13e(0x258,'P]&r')],'referer':_0x442d11[_0x43f13e(0x235,'SgxK')],'accept-encoding':_0x442d11[_0x43f13e(0x1b5,'P0oq')],'accept-language':_0x442d11['dvXLh']},'body':_0x229596};$[_0x43f13e(0x10c,'xQLR')](_0x3590a1,async(_0x190297,_0x48f2ae,_0x2ecd3b)=>{const _0x17110c=_0x43f13e,_0x136e58={'ihSjz':'127.0.0.1'};if('hsgLk'===_0x17110c(0xc2,']mz('))_0x594d9e=_0x39b91c[_0x17110c(0xe6,'taBO')]['soy_ltgtsp_data'][_0x17110c(0xb3,'GBfn')]('\x0a');else{try{if(_0x1fbcdb['WLwFf'](_0x17110c(0x246,'HEWi'),_0x1fbcdb[_0x17110c(0xc0,']6gY')]))_0x353e43=_0x136e58[_0x17110c(0x230,'taBO')];else{if(_0x190297)console[_0x17110c(0x232,'cax#')]('\x0a【'+Tips+'提示---账号\x20'+_0x1ddc55[_0x17110c(0xcd,'E[*v')]+'\x20阅读】:\x20返回\x20'+_0x190297),subTitle+='\x0a【'+Tips+_0x17110c(0x274,'JlAW')+_0x1ddc55['num']+_0x17110c(0x237,'!64y')+_0x190297;else{if(_0x1fbcdb[_0x17110c(0xee,'pVHU')](_0x1fbcdb[_0x17110c(0xb8,'SgxK')],_0x1fbcdb[_0x17110c(0x1b3,'FpJP')])){let _0x3eddaa=JSON['parse'](_0x2ecd3b);_0x1fbcdb[_0x17110c(0x1ab,'FpJP')](_0x3eddaa['code'],0x0)?_0x1fbcdb[_0x17110c(0x137,'daCS')]!==_0x17110c(0x2a9,'cax#')?(console[_0x17110c(0x113,'7ku]')]('\x0a【'+Tips+_0x17110c(0x2cc,'SgxK')+_0x1ddc55['num']+'\x20阅读】:\x20当前时长:'+_0x1fbcdb[_0x17110c(0x218,'#rvE')](_0x3eddaa[_0x17110c(0x23b,'o]O3')][_0x17110c(0x9a,'E[*v')],0xea60)+'分钟'),_0x3eddaa[_0x17110c(0x205,'P0oq')]['num']==0x1e&&(_0x1fbcdb[_0x17110c(0x1de,'#rvE')](_0x1fbcdb['NNGCU'],_0x17110c(0xcb,'ueFR'))?(_0x33aec6['log']('\x0a【'+_0x344252+'提示---账号\x20'+_0x37abca[_0x17110c(0x1b4,'pVHU')]+_0x17110c(0x25c,'E[*v')+_0x5a2739[_0x17110c(0x105,'daCS')]),_0x6e40b6+='\x0a【'+_0x4302ac+_0x17110c(0x12c,'VmLA')+_0x459316[_0x17110c(0xc7,'h9U*')]+_0x17110c(0x1bb,'P0oq')+_0x3520c1[_0x17110c(0xaa,'JlAW')]):await _0x1fbcdb[_0x17110c(0x2a3,'K$0Z')](doDraw,_0x1ddc55))):_0x28e915[_0x52dab0]['push'](_0x4f06bd):(console[_0x17110c(0xc4,'Zk7n')]('\x0a【'+Tips+_0x17110c(0x2a5,'ueFR')+_0x1ddc55[_0x17110c(0x273,'W]dO')]+'\x20阅读】:\x20'+_0x3eddaa[_0x17110c(0x172,'WMt!')]),subTitle+='\x0a【'+Tips+_0x17110c(0x17b,'o]O3')+_0x1ddc55[_0x17110c(0xc7,'h9U*')]+_0x17110c(0xca,'*S42')+_0x3eddaa['message']);}else _0x41370e=_0xcbdf00;}}}catch(_0x583bff){}finally{_0x1fbcdb[_0x17110c(0x27a,'!20M')](_0x2e3777,_0x1ddc55);};}});});}function _0x427a(){const _0x2606e8=(function(){return[...[version_,'wMjqFtsHjFeihaQbHmDEEiV.rcOqoUfrmJ.YvRM7==','awtdKIO3','W50fD8omW5GYECoKFCkvWPVdGq3cI8ox','WObFWRO','faldHSk8WRumWPi','5O+S56sGW7DWtUI1KowoJ8kn','ou9pWRJdL8k1W5LvWPWS','WPlcOSkPr8ob','qZBdMq','suOOx04','W7RdIWujWO7dGmo5W6O','xulcQa','5O+l56ADk8kBW4JOTiNLJlxdMq','WPHFWRjgW4O','W5bnWOi','o8oOjmk3WQ4','u+AlI+wNJ+odNSoMs+I8QowzQSo2','lCo7W4ddP8kY','tHGkW7mj','mUI3MUI0Q+EiLoAaOEobJSoHhW','Cs5bzCk/','WQPwW7LtW4hdVZK','qgm2BCk1uwBcKHG1B8kw','W7hcNJhdQHJcIe8TW4ddJ3Sk','vx3dPmo9eG','W4a/vsC','W6NdU8oOutO','punlWOtdM8kQW4G','W6OHz8ofW58','rmomra','FKNcVXG2','W4KpESoEW50OA8oKA8kw','x3xcVJG','uuTbW4hdJxPzW7ZdNdDQWOJcRmo3WOvm','oxKWfNVdUXmHW4W','deykae4','WQbrW7rXW48','jmkfo8oWWOtcUh/cTW','nfWuWPW','EG3dHX9zqCovW53dGmknj3VdR0yZlmo5qCkVemoGW7DPmSoLW5hdMCoxW5mKnSky','uCobsvPn','v183rvVcMmkN','rK/cQCo6W6OkWP3dMSk4W74S','bJTN','WPfEWPuJBSk2ff97W6VdRSofWR1D','rSovWQ3dPLa','t8knWRjSW6NdMSo6WRlcTmkMWR3cON1zBMxdMmk/WRaEWQVcLN3dNf3dQ8oTwwxcPgjnWQPjWROIcSoD','W6/dGmokW5byWPjY','W4q5v8oHW4u','WPpdOLxcG00','5O2+56AYWQW6qEI1LownGHa','WOhdTNxcMMu','5O6y56ASWP3cVSoM6lsh5yYYAq','lCkVcSovWR0','WQzwW74','W4ZcQCk1feiFW77cTbFcM8oGWP7dTCo2amkgBSoMW6RcLN99W4HixmoWWRTjjbRdLmkprmkOWPe','WQ46oK8+','dmkGeN3dTa','sMxdQqxdKG','W78dWRW7WOa','WO/dP0VcTgy','5O+c56A7W5FcJW3OTBNLJkWF','u198W4dcJa','pmodWOBcTvjMW4/dQdVcKW','W6HOhSoD','W70NA13dLG','pWOsW4iJBmomWRO/p8kgoeHuhCkoW702v1BcGK7cLSkfivWBW6C','5O+056wAfIRdUoI2TUwnJ2W','jSkooq','pmovW5VdPCkQ','W4qKbG','faZdSmk/W7blWPJdKCkWW7KJfSke','j8kbo8oC','ExxcKJeS','DSoGWO7dGW','WRrxWOOFxa','zIrCBSkK','WQpdIgRcVW','WPNdLmkE','C2X7','isFdTmkSWP8','W6vSeSk/WQO','W6ZdISkuW4byWPz/W74','ymomd8oyW6i','DwRdVGRdVq','tWKfW4vK','WRr0W4vmW6e','omopWOi','W4vcWOyrea','D8oSWORdLLK','zrHQFSkr','5OYm56sqW5etWOdOTidLJAVcNW','hmkSr0ddIa','WQBdVf0LWOC','W4Sqt8obW6m','su4LqK/cJa','W5Pll8k/WO8','WOldISkIWQ1l','i8oTdW','DwGtFxe','5O+456AzdHeO6lE+5yYmW60','xCoIWQ3dPCoVoq','W5Wlymo3W5SR','W6iijG','w37cSdG3','W4KdWRKoW7yHBSkAWPddRH7cNCoT','W7emWQqoWOhcGwS3BmkIWRWUWRa','WORdTCofWOBcVq','W5ZdRCoGCXGBW5Hv','f8oQemkQWRS','WP/cUmkXjLXCW4jFW6jUsXHbW6lcNSoPWQxcOmom','bCoWW4hdVmkV','BcGkW7u9','W5f5fSkcWR0L','nLv0WRxdUG','W4mpFCoGW5uHEW','WP5ACCoQqG','W7evmwdcIa','WQr0WOO','qafpzG','W5pdHGq3WRG','WOJJGRxOHQpMNO/MJ6NNP4/JGiBVVOhMRO3OHzNMNRVLJOhOGzhPNyRPViNNJRRLO53OTlm','B8oiBCotWOS','iupdPq','DSocDCofWOriWQC','5O6D56swWQ9RDoI3QEwpKSoj','WQFLLylPH5FLSl7LHQJJG7lcGHi','tHddVe7dIW','ostdVSk+WOW','rXjcD8kHW7/cLsyy','WOFdK8kAWQf6FSoBEJS','dmkMeu7dKa','j8kstwtdVG','WRbiW7fFW40','DCoMcSoQW6hdU8o8hW','W6mhmva','F8kxWOXFW4S','WPH8WQzrW5S','w8oRtMXD','W7JdGbi','WR3dUmkqWPLp','pumdiNK','WOldUK8','Fmo0WPC','AwmTgg7dReX9WOdcSmkcWOBcVCkBWQpcHCohW6/dLdhcUSoPocbKrmk+sq','5O6s56EPAcxcQEI2HowmOmos','W6RdLWqNWPy','fCo4WPhcRgC','WRpcI8ktxSoY','W7tdJ8onW4Ht','sa9C','W6iNn2FcIq','AmoRu8oHW4dcOSo0bf9js05uWP7dRmkTm3fnrCkkWR9BWPiocCoyWPpdOmkhWR5iimo0kq','wrFdKa','punlWP3dNCkPW5Ly','W4xcLCodWPLhtSoYyIa','BEMANEIUMEodJCowtW','qSolWQ/dPha','d10F','W4ddVCoS','CxzX','W6pLLjZPHi/LSlNLH63JGQfLrEIoJow9Gq','WQddGNdcL0JdLLKAW6tdNG','rXFdJH4','jrtcN8k8FCovdeOpW6zC','W4xcSCo0pNG','BGpdLKhdVa','rW5sxCkf','WQ7dRmo8WONcTq','i8k3jd7cSSkAW6FdHZdcQuGFqdKPW6RcJCovlmkyzISgWPhcTCoqW4hcG8ovWP/dJ0S','u8oRWORdUSkNFhrcuCoMCKTO','k8k1iLJdOq','W73dMSoGuWK','pmofWPVdS0r9W5xdOJxcHSk6WQ55W7emd8oDaSk8WOVdG8oWW54x','eYP7dSo+','m8kbpCooWO4','WPVdJSku','qHRdSZr9','sxpcQsWM','nSk6eCk1WOSbamo5WPC','uooaTUIePEAFVoAnOUENVEocVo+8QUAUGoIfGUAFJownRUIbKEMEKEM9JEEpV+wHL+I1Vq','EaCsW6i6CSkt','WR1AWOXsW4rfW73dIZZdLCozW6WSWP7dOGtdK8k6gCkBW4ePW7hcVmolEbWVW6JcPW','W58Jh17cLG','eZr1','mSoRcSowW77dVCk0q0SjrK5lWPFdRSk/mI59D8ovW6afW41nh8kxWPG','dM7dGq','jmo5W5C','WOj6W49UW5i','kK1gWRFdMW'],...(function(){return[...['WR7dRLdcTNi','WRpdTMDeWPzLE8kpbNKeB8oOpaldKXPJmIfhC8o5W5q','WQVdGeRcS3i','W4tLJypLIi/OTQxOTiRJGz95DEI8I+wBQSk5','bowoOUwkM+I1NoI0HoocGCkcBa','lmo3W4tdSG','WPzbWRuLEq','rdhdUJnw','W6hdISoDW4y','WPldKKpcTLm','Dw1IW5/cHY1jtapcUwK2W7PsW5xdUSomWRfVBSoYWQFcPSoqW6jSW6pdUvOtW6tdSY9GyCk5bSkoAMddVqRdTmknjCkLWOadsGlcGvFcLZGqarFcTvdcRtSjjCkr','5O+N56wyWPbBgoI0I+wnG8os','W4WrWOmOWOK','FmocCSoWWPbdWQ7cOmkMjuG','xeG9r38','W7xcTmoUd0i','mumrW5FdJq','W6yQxNRcOKhcS8kbWOlcT8k8','fXFdRCkU','WOSbav5dW5CmbbZcOIhcRCku','j340','hxS4dvm','FdPHwYFdLJOOW5JdKSo7','WPHtpmkGW60uxCoYrCkj','WPBdT1pcL0G','WPRdHmkaWQH+FCoB','r+ocIos8VUIdMEAmVoELLEoaS++/MEMOUEIVR+IeHUADSSo6W6tcJUwNLEI3QwZORlVLIB7KVRZMLjNOHitMN7BKUPtKUBZMHBNLHylLRR4F','CeBdHmoVimo6kfONW5HcWO3dVSowW60LfCo0bSksrH/dOrOvdSoEW6HQW6TSzKerW6uD','W5iQewtcPa','WPBdPW/cVhhdSJ9Lgg3cO8oGW6FdGXxdM1NdM8oJr8ocW5FcUmoxeCk3W5BcRSkyWP8iW7y/sCkF','WQzmWQPKW48','W4GPqSoCW4u','pupdSti','sq9FyG','W53cVrxdKq/dShuJeG','e8opW7mLWQpcMmk2W7VdICoMW7u','m2n0l1dcSWW6WPtdSmkpWOBcOSksWQhcL8ogWRddPapdPCk2zN8NuSoXqSkoWQBdKHLsfdu','W64vc17cMmkg','kM4Waa','FSoSgq','ie4sWPpdVmoRW5DyW58PW53cTmkcW7RdUdxcUSkbDGpcT2JcSGZcSCkRW45oFN8EemktW6yT','vLNcSW','WPxdIwFcTMy','W63dMWiS','keDrWRtdNCkQ','ESolCK93','afrnWQBdPq','p0HC','WOv0AmoZuq','sSkCWRvVW7VcH8kW','W6NdTCoOW6zu','r+oaVos/NUIbG+AoIEENTEoaTo+/S+MRIUIVMEIgHUAFThRcKCov5Awu6lEEeUIUOUwiREs+R+AvV+IhPoADGos7O+s5IEAfQ+wfKEwSUqe','mCoFWPS','W6KBW4qjWPrVW5ddHsldQCo+','dZHVoCof','oKxdRdyRWQzFWOWIFCoVWRS','g8oSWQlcT2a','bSoJW6tdLCkF','gUI1OEI2LEEkGoAaU+odRSo4goI/NUwARWq','C8ofD8oFWPy','lSkbpW','vJLHuSkh','ESoxDSoAWOXmWQpcJCkQk1ryrNS1W4xdNLi+WRG+DSkGWQ7dS3pcP8oVW5lcRSoweGi','xLlcTG4yW5rE','5O2T56sMvCoiW6tOTAVLJOVdHG','feJdOdua','cownOEwkG+I1P+I3LoodICobW60','mmk4lxZdHq','WOJdRSoi','WQtcOSk7xSod','B8knWQ9KW6G','beye','W6qTihNcRq','x17cNsGM','rSoLWPBdQem','WRJdUmkqWQX+','eJBcT1tJGOxLHztcHW','DvRcKtik','WOtdSmkQWPHY','WPVdPKZcJ03cTZ9Or3NdRCkZ','W6XhWPuHgW','W6ZdKmou','ECoYWQ7dP8o+','m8ofWPe','WOFdPmogWPi','lwOTdq','qEwpQUwlKUI3V+I0Q+oaILxdQoI8U+wBM3i','WPj0zSourW','W7GUqgZdRKNcPa','W5PtWOmYnG','uK4WrKNdHCoTfZTbfaWaW6H7DmoXW4tcOSkxW7vqfmoBrCo2WP7dMZuPbtdcMmo1W5zgySohWPBdH8kVWOfIW7ldNupdQxVdHgGqWOOBWOVdU17dKcygWRxdTCoDW5ddO1Ldn8o7AG/dQeKthSk0iCkyWR3dHNm2WQng','W5dcHSocogK','W79jWQasja','W67dGmoxW4rnWP0','W6GBWPuCWO4','ltlcULZcO0tdHLldQZ3cNa','CrCl','A8ovB8omWOblWQFcISkG','WPbSCmoGAG','A0tdIdZdRq','sHyaWO4','W4DzfSkJWRG','FHiwW5O6FmkxW6f5yCoyjXmxxmkxWR5KrLlcNHtdMSkAibmrW6FcICkkW73cJrm','vvK0whq','v8kmWRv0','5O6M56wGlNdcOEI1H+wpSSoX','dhv7WOxdPG','W5nPfq','pr7dRmk8WOu','5OY356EZW5uCWRJOTi7LJi3dUG','gJ9ToSo4cq','n8kphCo1WPi','wSoGfmogW4q','WO7LJQJLIQ7OT4JOTAxJGzCKWRa','lSo3emkV','BSodEmo+oa','W5FcJSoFluG','ACoMCa','kgRdRGma','WQldIwC','WOVdQLBcSLBcSdb5rM8','W6FdI8op','kmo1eSkOWPu','BxHKW5ZcKq','5O+c56A5u8kpWQpOTQJLJBLm','oNS1bwO','WPynihCh','W7iUr1ldOedcTCka','W5GLEeRdHq','5O6z56sXDeeZ6lA55y6bCG','WRtdTepcN0i','gJvK','WOTeWRq','lLWyW63cRG','jCoZW4pdOmkQrSkG','BttdRt1p','W7SNqNFdGW','ru/cJbmG','kuDsWRxcN8kOW59zWOmXWO4','WPFdOmocWPVdTIeXpmk4xCo3','W7WLv3RdT2hcPW','W7VdQsSRWOq','FfzrW5xcSa','5OYa56AJj0FdIoI0QUwpOSoa','uWz5qSk7','W4CpWQC2WOm','y+wxHoMhNEwYSUwgV+odHZhdV+I+Q+wyOSoe','i8kqxvldGW','W67dNH0TWPu','W7emWQ10W6hdPbmoqW','WRf+WPT1W7K','5O6t56EAySkqW4BOT7dLJ7ZdVW','W4BcOmoQjgK','W7ldJCo3W6j3','W4GgyCo8W4y','WOJdRLBcNG','zwBcTriH','W44aj1RcNW','WRHWtSoDBtJdNCo2lG','fmksce7dGG','5O2+56wqi8k+WPNOTAdLJ6NcSa','ESo3cSosW73cTmkHq1uirK9kWONcT8kNlZL5CSkFWQ0jW48ouSkAW5NdOmoBWPacF8kOE33dSSoO','x1qY','lCoSW7hdGCkC','wSoKWO4','WQtJGBP9W7ZdJEIfNoACSUAuL+s7UowgQoI3P+wHLEAzOUodRU++Rmkj44kN5y++5BMY55Uq6iwn5P2e5Pwj5lM85y+Z5ysN5lIq5Rwk5yYi55Qw5lI45l+y6isx5PYm77Yu5lIg55sI5lU65RAR6k2L5zkK5A+m5lQn56kF56MU77YX56wh5Q2i55sT5lIr5zEi5lQv5OMG6z+G5Rc955Mh55Uf77YK5zoB5yUv5zoN5P6h6iAn6lEM776N5l2d55E06iAT5P2t6kcS5lQD5zYz5P6H5Bc35yYZ6Ao26zIU44gjW7/JGABKUOJOG4xKVBpOR7tLHRRLKyRMSBZMG4ZJGkpLHltNOytMGRhJG4BLRQJMLBhMGlZLKzFMN4hMLOhMGQJVVBZOR7/MOzJMJAVMGO/LHRBOHyVOOAlLIQZML5JJGiuv44ot5P2j6iAJ5PYH5PwW5lM9772R56w85QYf5lQ95l6t5yw75l+x5yY044kk6k2U5z6W44ou57+Y5l2U5lQC5y+j5lI35l+R5BYw5B2J55IZ6l2l6l6/44ka5y+n5BIuWQJLK6NLIBFLKOBMNi7OHzlOTORJGyjJ44cs5P6t5lMa5A2q5lUc5l2Z6iAF5P6O6zE96Aci5QsP5lIt6lwv6lwx77Y55yYt5OUe5lYf5lUY6zIg5lMy55so5lQb5lYQ6iEp5P+D6zst6k2H5AY26iwl55UV5lUS5l2x5O6I5AA65OUs5O++5A+T44kkWRRJGjFNMRhMJ7lMIyJPLihMJjhKVAtNLR3OHzhMNihLJAtMI6dKU4pPM5ZLIjJKU4pNOzpOPQBOHQpMNB7NMONKUAZKV57NLA3MI7tVVA/LJPZMIllKVOVKU6xPMyVKUBtKU7/MJypMI5RLHi/KU7ZMNz/KUiBOOONKUBpOV6lLJOhLMQFLRPm35z2U5y+n5Rci5B2t5OIL55Qc5ywW5Rgm6kwm55I95Okc5yEh5lUS6lYL6kcN5l2Y5Pol77YI5P+E5lMZ5A+55lM855Au5Q2g5B6A6lsl55UM5lMB5lYJ6zI156E75Rkg5R635OMO5yEv5lMY5zc15PYr5Qw05lMm6lwZ6lwm44oFA+obT+wMUoAFM+s5LEs/QownTos+I+AlM+s4GUs7TEITMEs5R+ITHEIgVUACTEwmOUIbM+A2K+wRN+s9MoEiLUwfLoACIUwiSU+/Q+wiUEw7KowpHEAvHUMcN+EDOUw5J+AoUUs/HoI4I+s4M+ITVUAyPEodGoAiPEADRUADToISTUAyTU++IUAkUUs5N+wWU+wCUEAxN+wlKoITU+IUJ+AuSEs4L+wrTowlHoMBO+EyJ+weREIfTUAFVooaVmkS44oE5lUW5lYe5lM15lI15lYK5PAI5B+v5P6B552H5Q2i6AgO55ME55IT5lMO5OQZ55UW5O+E5OMV6zsA5O2U5l6U55AD6k6t5lQQ5BQz55Ig5lMj5l+o6isL5P+k55Q35l6M55Eu6ios6ygx5BUk5lUG57M26zQD6k+Q5Q6T5AoW5PQG44oJ5P2W5lU15l+b55EB6zI/5PAQ5PMa5PsE5OIj6kck5yAG5Q+O5yAE6lwL5Ao+5PUq55I45PYm5yQR44ow5lUk5Ps75l6N55As5BQe5AAl5yMY5lU55lUd5lYM55QN5yA26iwz5P6z5PAp5lQW77+F5yQ96kAd5lQ95Ooa5BAV5O6T5y6u5Q6V5yAn6lAO5Acm5PMY44oj','W4FcICoaawy','qrvpWPK','W5rVnSkkWQ0O','aWtdSmk1WRKpWPNdH8k1','W7ujkglcTq','z0ddV8o+mG','D8kWWQnFW7S','WQDzW6Lx','FNz7WOhcH34idetdQc1IWQKuWOZdOmoqWR1TzCkXW6RcVmou','uCoUvM5l','lgyPggC','Fmo2eW','WR90WQ0BqG','qZZdKgJdILK','p8oZcSkOWQ0','E3NdSXNdOuRcILBdTG','jmoRlmkZWOGk','WO/dQKVcKW','W6RdRmoKwGa','5O2x56wCAbZdKEI3HEwnJXi','W5HgWOCrfhJdLW','imk1rSksW5NdVmoTjtrk','nbxdU8kMWQ4','WQlLLOhPHkVLSQZLHA3JG6qTWRS','zCkqWRXRW54'],...(function(){return['WP7dTmocWPlcQq','BqmiW5i8CG','WOeEivqK','WOJdPmobWPNcRYy','WOf/WOG/FW','W55xhCkTWPG','W7CmW4L3W4hdQtGl','wSoctvHQWRu','WPBdJmooWPtcTW','WQNdKMK','DLyDz1a','W6SjiG','k8ocW5tdLSki','WPxLLiFPHABLSA3LHkhJGi7cIg7OVAFLMzOa','y+wmOUwlR+I3PUI0UUodHZhdVW','WQCqoKWv','gUAkH+wKKUoaPWddNW','pEs4S+I0SownMoodPsPBxG','W6JdRSoOW7rH','WQ/dLCoRWQ/cOW','rCogue9KWR/cNG','WO/dQSkdWOfh','5OY856wbrqnc6lEr5y6Fqq','W6Ktka','tWRdVZnX','hHNdVCkQ','jEobIEs/OUIaIUAnRUEKI+oaGE+9TEMPK+IUTUIhI+AEOSkdW7JdPEwNLUI2NuROR6NLIPFKVRxMLkxOHRJMNi7KUypKUOtMH4hLHBNLRjVdRq','W50AySo6W4a','t2RcTJqx','aGxdSLnjWP0lW43dRq','wmo+WOq','xu/cMb4t','FmoMCMvP','gCoibCkTWRW','W7xdMGu0WPlcLmkIWQ0LW5ddQCooW6mXW4ldVvm5WPyDWRzBdfiXa8oBcxCAW7RcKwPKWQ52h8oEBftdKt8gAJZcKCoPzSkvW4uXW4pdKmkUW4yMW6VdMvhcUCkeqJ/dR8oPWOaXy8oaW6BdLConWOnFW4tcUW','WPXAsCoXW7u2Fmov','WR7cH8krzmo+','BEwnMUwlGUI2H+I0VEobVHJdO+I9OEwBSdW','nfns','p+woOowlHUI3REI2GUoaJSomWRxOV4tLM5dcLG','W7Chn0lcMq','WQjiW61AW5ddKZ4ruSk5WRf2WPJcPSkTWOukW6NdKwmfWOzrygCLz8oDpmoXW4xcQKa','gc9U','WOtcRmkrxq','mmkpnSoIWOFcOMZcQWZcJmk7W6RdMJdcVq','DN7dPW','pxfIW5VcHgrCtb3cUgK3W7TmWOZdOSorWQzRA8k4W6RcQSosWQeHW67cUa','yUwxT+MhL+wWH+whKoocS8oTW5i','vaFdLbO','WRHRv8oYrW','WPtcUCkuwmoH','WP9oumoHBG','qCotxSogca','DK/cNWWX','fKeCW5tcIhivWQ3cI2aHW50','oSosbCkyWPy','5O6D56AIt8oXW4hOTyNLJ5xdOW','W6TSc8knWOq','WPDAWQzKW7G','wSoSrhvr','AmoiF8oPWOLBWQxcJCkWnguttxW7','xCofq8ouWRe','5O+J56snW6HqvoI2LEwpJmod','F27dVJ3dVeJdGG','FmkGWOxcQSoYwCkMl8kpbSo/','uhxcVq','WONdOmoBWP3cSW','WQ9xW7O','W6f0WQqjnW','tmocv10','qsZdKW','W5isiWK','mCofW5VcVLz3W5pdQa','W51xWOasbIxcNwhcGSk0ebxdTWWFaCkNWR3cT8oTgmkxECoyiKFdIvaYh8oTW6zNW5pdNmkLWPrEiIe4pwddQcVdSCkzwadcKaFdTCk0s10Oq2ZdSmoxiSohsSoPW54Zy1byW4udWQrMxCocW54','pmo5W5VdTSkL','qaVdKWzhrmooWPFcKCogzdG','W5hcLSopduO','wNpcTdWpgGe','WPldPmo4WRhcUq','WQNdRSovWPFcTYiIESoQgSkPyImhhMldT0WFmHlcTuuIyCozWOmIWRRdR8kukW','xxBcTG','i1NdRW','WPxdJ1xcQvm','WPvqWQS/Aa','bSoVWRJcLLq','WP3dPCoWWO3cSIKT','hw/cHJ/dQunZjSkpbq','WPFcK0X5W4hOHRtMNQhMI6xOOzJdGmo0W5/LJ4tKURpMLypPLABVVlS','WPZdLSkNWP1M','W43dP8oZza','xLSWvW','W78+weFdHa','arFdT8kRWRmg','WQlPMQdORylJGRidW5xOV4pLMyxdIq','W4SxWQy','W6i0nxVcHa','ENXIW6lcNxKtf1FdUG','WRjYtSojwa','W7iUr1VdRLRcPa','oCoVWRJcH3O','WQ3cOSkuD8o/','W7Kfq8oAW78','sLS2rv8','WPPnWOq/WQjyBCkr','EUAkM+wLQEodGCkiW6C','WPBdU08iWRe','5O2s56AFWPtcJHtOT5pLJ6dcUW','W5ddGqSTWO3dGSoSWQ0HW47dQCoFW7TtW5ZdVfqKW4XzW5Lwb01WcCorbIHnWP7dJW','mUI3MoI2R+EiLoAcJ+ocN8k0ta','WOX1uCotrG','jg4Qh3/dUbm','W4xdKSoltHy','u8o0WPNdO8oc','WOjuWQ0iBmkJhq','p1NdLGis','5O+i56sXWQDeWRJOTipLJzaC','avVcJ0vSF8o3WPdcVSop','E2tdUbO','W4CkWP4rWR5K','DCosAW','WRDWWRzNW5C','DLvKW6ZcUa','owGloxK','W4tOT5ROTB7NIyJMG5RJGz95Dq','FmkOuSoTW5XbvCkSW4DlFtRcH8opWQdcICoIi8kI','AZDvzCkW','xdBdH1ddKKv3g8kSb8koW6RcSCoeW4u','jSkwkgldKa','sCkmWQS','W7ldHHm8WOS','qmknWPLVW7pcH8k7','WPS0kxyf','lmkMka','hZjqn8o2','C8omoCoyW4O','W7KKva','W4KCWQqTWR9IzCkrWPldSq','WOpcN8kHvCom','tmoBCxTa','fY1OfSoH','pEMyNoIVREocVSoon+I+SUwAVri','umosvCoviq','we3cVqKY','WQPBWRuLAW','WRtdUh4l','mSoADK7dVvZcRe3dMa','ySoIdmorW6S','l8kpka','cSoVfSk5WOa','mCk2k2ZdISonWQpcM2/dPG','WQXfWO9k','W4ldRCoVCbGA','AmogA8otW4HaWRdcKmkKlvq','EWddJgJdRa','W5TcWPKh','W6ddOSoYW65j','iLGMW6BcNG','qWvpu8k8W73dNq','W63dGqiW','sJFdNq','WR1AWOXsW4rfW73dIZZdLCozW6WSWP7dOGtdHmo5bCkFW4SUWRVcUmkAtcehW6NcVYxcPcu','bmoYW5ddR8k8psytbmk4kWK8k1VdQG','WOKvhG','BJZdP1VdKa','rCogAKzo','tvSTqG','rHDAu8kL','iuNdRceTWQC','W6JLLkBPHRxLSQJLHzZJGy3cGSkL6i+65B2N','gh0CW5dcQq','yCoRqmo6kCoOWQmIWPFdNwVdGmkautKtk8kNd1nIWOimWQ1KW6xdQ1FdV2zUBgq','W695WQCKoa','W6XaWOW2na','A8o/ASoodW','WOaEbKKBWP8','CCoqcmoFWQRcPMNcMG','ESodz8kaW5mxW7ldJmo6CGLdsgO+WPZdHXqPWRH0mmk3W6ZcQcddT8k3WPZdRmondW','WO7MIlxLP5FJGizwuG','WRlcLmklWPanW4aHWQZdKxO','W4WlWRikWQ0','usGmW4ab','psZdKSkkWPu','5O2f56wXhJlcOUI0IowmTSoi','W48AFSo/W50LF8oKz8kkWQRcIGBcJmozW63cJeWznsuBWQVdVGqeACkfW68Q','lmoAWPRcTem','W4ZdP1BcI0/cRx8Idc3cRSoGW7JdIHFdIvJcHmotDCkDWOJdPSkiuSkHWPNcPq','WQlLLOhPHkVLSQZLHA3JG6qTWRVOJz7LV5q','k8ofWP3cUfK','ELzYW5RcUa','EGWfW4qQB8kc'];}())];}())];}());_0x427a=function(){return _0x2606e8;};return _0x427a();};;function doDraw(_0x18c323){const _0x4cdb55=_0x132027,_0x53abce={'ZVPKz':function(_0x51fb03,_0x503da7){return _0x51fb03*_0x503da7;},'pkygi':function(_0x4cbc1d,_0x530459){return _0x4cbc1d-_0x530459;},'DjhFi':_0x4cdb55(0x224,'!64y'),'ZMoFo':_0x4cdb55(0x280,'EEv('),'hhMDm':_0x4cdb55(0xdf,'h9U*'),'pcRUg':function(_0x2cb0c7,_0x50fbe9,_0x3c55d6){return _0x2cb0c7(_0x50fbe9,_0x3c55d6);},'hbqis':function(_0x2aa7ff,_0x13bafd){return _0x2aa7ff(_0x13bafd);},'ifgPe':_0x4cdb55(0x1b0,'VmLA'),'hIuEN':_0x4cdb55(0x236,'taBO'),'LHPln':function(_0x3d27aa,_0x389b25){return _0x3d27aa===_0x389b25;},'NsWup':_0x4cdb55(0x227,'*S42'),'UTBgR':'no-cache','KFZmq':_0x4cdb55(0x1d4,'GBfn'),'KTDQx':'Mozilla/5.0\x20(Linux;\x20Android\x2010;)','TPgqP':_0x4cdb55(0x1d9,'!64y'),'cTdEC':_0x4cdb55(0xed,'o]O3'),'DKiVk':'cors','jJIkS':_0x4cdb55(0x166,'*S42'),'fCLOq':_0x4cdb55(0x296,'S4IJ'),'jQeRq':'gzip,\x20deflate'};let _0x1bdf2=new Date()[_0x4cdb55(0xe3,'!20M')](),_0x85a6c4=_0x53abce['hbqis'](getRandom,0xd),_0x19a4e7='acticeindex=OEJFMjJFQjhEQTBDNDFBMkU5RUI3M0Y0MTI3NzA1N0Q%3D&t='+_0x1bdf2;return new Promise(_0x390c85=>{const _0x2e610a=_0x4cdb55,_0x12584d={'nlqhL':function(_0x2743d7,_0xbae1c7){const _0x17236c=_0x5c5d;return _0x53abce[_0x17236c(0x173,'h9U*')](_0x2743d7,_0xbae1c7);},'olbyL':function(_0x48d452,_0x8392e0){return _0x48d452(_0x8392e0);},'jhXuY':function(_0x143848,_0x3b9dc9){const _0x5672c2=_0x5c5d;return _0x53abce[_0x5672c2(0xeb,'Mb[3')](_0x143848,_0x3b9dc9);},'FbEbT':function(_0x4d5adb,_0x419bb9){return _0x4d5adb!==_0x419bb9;},'vjtkj':'gwYKQ','ukQvT':_0x53abce['DjhFi'],'rYZUR':function(_0x10b64e,_0x133155){return _0x10b64e==_0x133155;},'XpjZc':_0x53abce['ZMoFo'],'nXHhx':_0x53abce['hhMDm'],'Ojlif':function(_0x54a7d9,_0x45111c,_0x5aa12e){const _0x2192e1=_0x5c5d;return _0x53abce[_0x2192e1(0x225,'jx4v')](_0x54a7d9,_0x45111c,_0x5aa12e);},'ciiGv':function(_0x29caa0,_0x1eba1c){const _0x1e36ec=_0x5c5d;return _0x53abce[_0x1e36ec(0x127,'JlAW')](_0x29caa0,_0x1eba1c);},'QVHDo':_0x53abce[_0x2e610a(0xd9,'VZ)O')],'rkhtA':_0x53abce[_0x2e610a(0x2d0,'W]dO')]};if(_0x53abce[_0x2e610a(0x269,'xQLR')](_0x2e610a(0x17d,'K$0Z'),_0x2e610a(0x1cf,']mz(')))_0xf0e980[_0x2e610a(0x113,'7ku]')]('\x0a【'+_0x40bb32+_0x2e610a(0x21e,'92E5')+_0x36bf64['num']+_0x2e610a(0xf0,'Zk7n')+_0x338f6a[_0x2e610a(0x12b,'W]dO')]),_0x23a7d8+='\x0a【'+_0x4e91e6+'提示---账号\x20'+_0x3a3d3c[_0x2e610a(0x120,'jXEc')]+'\x20参加赛跑】:\x20'+_0x234aaa[_0x2e610a(0x219,'jx4v')];else{let _0x5d2df4={'url':_0x2e610a(0xf6,'!64y'),'headers':{'Host':_0x53abce[_0x2e610a(0x2a1,'VZ)O')],'content-length':_0x19a4e7[_0x2e610a(0x15a,'taBO')],'pragma':_0x53abce[_0x2e610a(0x2c4,'Zk%r')],'cache-control':_0x53abce['UTBgR'],'accept':_0x53abce['KFZmq'],'accesstoken':_0x18c323[_0x2e610a(0x1f5,'WMt!')],'user-agent':_0x53abce[_0x2e610a(0x1be,'FpJP')],'Content-Type':_0x2e610a(0x262,'zljb'),'origin':_0x53abce[_0x2e610a(0x1cc,'*S42')],'x-requested-with':_0x53abce[_0x2e610a(0x1b7,'WMt!')],'sec-fetch-site':'same-origin','sec-fetch-mode':_0x53abce[_0x2e610a(0x284,'zljb')],'sec-fetch-dest':_0x53abce['jJIkS'],'referer':_0x53abce[_0x2e610a(0x10b,'zljb')],'accept-encoding':_0x53abce['jQeRq'],'accept-language':_0x2e610a(0x29f,'7NyC')},'body':_0x19a4e7};$[_0x2e610a(0x249,']6gY')](_0x5d2df4,async(_0x62bc26,_0x410a07,_0x464962)=>{const _0x26bf25=_0x2e610a,_0x15df48={'sSGEc':function(_0x547648,_0x92dbef){const _0x4d5a07=_0x5c5d;return _0x12584d[_0x4d5a07(0x174,'cax#')](_0x547648,_0x92dbef);},'XnWGb':function(_0x383809,_0x1f9be1){return _0x12584d['olbyL'](_0x383809,_0x1f9be1);},'YdaCn':function(_0x254151,_0x4b0aff){const _0x932f77=_0x5c5d;return _0x12584d[_0x932f77(0x17f,'Zk%r')](_0x254151,_0x4b0aff);}};try{if(_0x12584d[_0x26bf25(0x214,'o]O3')](_0x12584d[_0x26bf25(0xc3,'HEWi')],_0x12584d['vjtkj'])){let _0x3ba801=_0x33b366[_0x26bf25(0x1db,'h9U*')](_0x15df48[_0x26bf25(0x16e,'pVHU')](_0x3b5405[_0x26bf25(0x207,'c3G#')](),_0x1543f7['length'])-0x1);_0x1934cb+=_0x202d44[_0x3ba801];}else{if(_0x62bc26)_0x12584d[_0x26bf25(0x2c9,'daCS')]===_0x12584d[_0x26bf25(0x26f,']mz(')]?(console[_0x26bf25(0xde,'daCS')]('\x0a【'+Tips+_0x26bf25(0x26d,')$iK')+_0x18c323[_0x26bf25(0xc7,'h9U*')]+'\x20抽奖】:\x20返回\x20'+_0x62bc26),subTitle+='\x0a【'+Tips+_0x26bf25(0x1e3,'*S42')+_0x18c323[_0x26bf25(0x2ca,'*S42')]+_0x26bf25(0x278,'c3G#')+_0x62bc26):_0x2cbe4e=_0xbf4e35[_0x26bf25(0x111,'TgQS')]()?_0x15df48[_0x26bf25(0x14e,'#rvE')](_0x147f8f,'axios'):'';else{let _0x476c46=JSON['parse'](_0x464962);if(_0x12584d[_0x26bf25(0x129,'Zk7n')](_0x476c46['code'],0x0)){if(_0x12584d[_0x26bf25(0x1e8,'JlAW')](_0x12584d[_0x26bf25(0x2b9,'VmLA')],_0x12584d[_0x26bf25(0x15f,'P]&r')]))console[_0x26bf25(0xe9,'WMt!')]('\x0a【'+Tips+_0x26bf25(0x261,'cax#')+_0x18c323[_0x26bf25(0x13d,'HEWi')]+'\x20抽奖】:\x20获得'+_0x476c46[_0x26bf25(0x14d,'JlAW')]),await _0x12584d[_0x26bf25(0x23a,')GzI')](Sleep_time,0x1,0x2),await _0x12584d[_0x26bf25(0x28c,'GBfn')](doDraw,_0x18c323);else{let _0x168599=_0x9bac7['ceil'](_0x15df48[_0x26bf25(0x13c,'Ohf7')](_0x15df48[_0x26bf25(0xf3,'h9U*')](_0x353f6d[_0x26bf25(0x1ac,'!20M')](),_0x38cc68[_0x26bf25(0x252,'xQLR')]),0x1));_0x4be2c4+=_0x56a295[_0x168599];}}else _0x12584d[_0x26bf25(0x14a,'K$0Z')](_0x26bf25(0x134,'TgQS'),_0x12584d['QVHDo'])?_0x4d88c6=_0x3bddef['match'](/(\S*)TG_ID:@ls_soy/)[0x1]:(console['log']('\x0a【'+Tips+_0x26bf25(0x2c3,'ioBX')+_0x18c323[_0x26bf25(0x2b6,'daCS')]+_0x26bf25(0x213,'Mb[3')+_0x476c46[_0x26bf25(0x105,'daCS')]),subTitle+='\x0a【'+Tips+'提示---账号\x20'+_0x18c323[_0x26bf25(0x1d8,'92E5')]+'\x20抽奖】:\x20'+_0x476c46['message']);}}}catch(_0x2c42f5){}finally{_0x12584d[_0x26bf25(0x1a0,'*S42')]!==_0x12584d[_0x26bf25(0x12f,'VZ)O')]?(_0x543959[_0x26bf25(0xce,'!64y')]('\x0a【'+_0xf40da2+_0x26bf25(0x16d,'jx4v')+_0x187323[_0x26bf25(0xcc,'vc10')]+'\x20唤醒小兔】:\x20'+_0x23cc99['message']),_0x132c2c+='\x0a【'+_0x193a1e+_0x26bf25(0xf7,'h9U*')+_0x4579f7['num']+'\x20唤醒小兔】:\x20'+_0x36877b[_0x26bf25(0x1bf,'SgxK')]):_0x390c85(_0x18c323);};});}});};function wakeRabbit(_0x2b88e4){const _0x2ca10f=_0x132027,_0xaaf409={'IiNTN':_0x2ca10f(0x2a4,'8h3q'),'ISrhX':'zvHYh','QDFxj':function(_0xc867c6,_0x1e85a1){return _0xc867c6==_0x1e85a1;},'uisqE':'10010.woread.com.cn','NJjvR':_0x2ca10f(0x1f3,'jXEc'),'OtjIT':_0x2ca10f(0x216,']6gY'),'MvOTY':'application/json;charset=UTF-8','QLMTf':_0x2ca10f(0x19a,'!64y'),'dEmjT':'cors','GsiFV':_0x2ca10f(0x18d,'7ku]'),'opwPC':_0x2ca10f(0x2d1,'K$0Z'),'epxSr':_0x2ca10f(0x109,'8h3q'),'QyoPN':function(_0x1fea36,_0x10be88){return _0x1fea36(_0x10be88);}};let _0x2ff57d=new Date()['getTime'](),_0x912d65=_0xaaf409['QyoPN'](getRandom,0xd),_0x3aeb13='{\x22sign\x22:\x22'+_0x2b88e4[_0x2ca10f(0x22d,'S4IJ')]+'\x22}';return new Promise(_0x29b97d=>{const _0x64b33d=_0x2ca10f,_0x2b1b07={'ULTUX':function(_0x473c6b,_0x4f9493){return _0x473c6b!==_0x4f9493;},'COqiz':_0xaaf409['IiNTN'],'BSeEU':function(_0x47cf40,_0x31e830){return _0x47cf40===_0x31e830;},'TpaaM':_0xaaf409['ISrhX'],'CZHsA':function(_0x3ebaf2,_0x357168){return _0xaaf409['QDFxj'](_0x3ebaf2,_0x357168);},'njHCd':_0x64b33d(0x136,'ueFR'),'myWeZ':function(_0x5a2eda,_0x4b50bc){return _0x5a2eda(_0x4b50bc);}};let _0x290be9={'url':_0x64b33d(0x1f4,'Ohf7'),'headers':{'Host':_0xaaf409[_0x64b33d(0xe0,')$iK')],'content-length':_0x3aeb13[_0x64b33d(0x259,'SuRc')],'pragma':_0xaaf409[_0x64b33d(0x25f,'!20M')],'cache-control':_0xaaf409['NJjvR'],'accept':_0x64b33d(0x12a,'JlAW'),'accesstoken':_0x2b88e4[_0x64b33d(0xa8,'JlAW')],'user-agent':_0xaaf409[_0x64b33d(0x171,'vc10')],'Content-Type':_0xaaf409[_0x64b33d(0x11c,'#rvE')],'origin':_0x64b33d(0x2aa,'!20M'),'x-requested-with':_0xaaf409['QLMTf'],'sec-fetch-site':_0x64b33d(0x176,'Mb[3'),'sec-fetch-mode':_0xaaf409[_0x64b33d(0x22a,'VZ)O')],'sec-fetch-dest':_0x64b33d(0x2c1,'ueFR'),'referer':_0xaaf409[_0x64b33d(0x282,'E[*v')],'accept-encoding':_0xaaf409[_0x64b33d(0x145,'Ohf7')],'accept-language':_0xaaf409[_0x64b33d(0xdc,'taBO')]},'body':_0x3aeb13};$['post'](_0x290be9,async(_0x4bd931,_0x4addc3,_0x548078)=>{const _0x5bb3c3=_0x64b33d;if(_0x2b1b07['ULTUX'](_0x2b1b07['COqiz'],_0x2b1b07['COqiz']))_0x4c9748[_0x19a75b]=[_0x30489e];else{try{if(_0x4bd931){if(_0x2b1b07[_0x5bb3c3(0x286,')$iK')](_0x2b1b07[_0x5bb3c3(0x101,'jx4v')],_0x5bb3c3(0x16a,'SuRc')))console['log']('\x0a【'+Tips+_0x5bb3c3(0x29a,'E[*v')+_0x2b88e4[_0x5bb3c3(0x22f,'VZ)O')]+'\x20唤醒小兔】:\x20返回\x20'+_0x4bd931),subTitle+='\x0a【'+Tips+_0x5bb3c3(0x261,'cax#')+_0x2b88e4[_0x5bb3c3(0x157,'VmLA')]+_0x5bb3c3(0x17e,'Gn2J')+_0x4bd931;else throw new _0x44eb8d(_0x5bb3c3(0x1c5,'u5)%'));}else{let _0x45c62f=JSON[_0x5bb3c3(0x2c0,'Ohf7')](_0x548078);_0x2b1b07['CZHsA'](_0x45c62f[_0x5bb3c3(0xf4,'HEWi')],0x0)?(console[_0x5bb3c3(0x16f,'taBO')]('\x0a【'+Tips+_0x5bb3c3(0xbf,'VZ)O')+_0x2b88e4['num']+'\x20唤醒小兔】:\x20获得'+_0x45c62f[_0x5bb3c3(0x141,'jx4v')][_0x5bb3c3(0x195,'c3G#')]+','+_0x45c62f[_0x5bb3c3(0xa5,'Zk7n')][_0x5bb3c3(0x1e1,'vc10')]),subTitle+='\x0a【'+Tips+_0x5bb3c3(0xab,'xQLR')+_0x2b88e4[_0x5bb3c3(0x1d1,'Mb[3')]+_0x5bb3c3(0xcf,'GBfn')+_0x45c62f['data'][_0x5bb3c3(0x28a,'jx4v')]+','+_0x45c62f[_0x5bb3c3(0xf1,'WMt!')][_0x5bb3c3(0x13b,'8h3q')]):_0x2b1b07[_0x5bb3c3(0x108,'TgQS')](_0x2b1b07[_0x5bb3c3(0xb2,'Zk%r')],_0x5bb3c3(0xe5,'TgQS'))?(console['log']('\x0a【'+Tips+_0x5bb3c3(0x2ab,'Zk7n')+_0x2b88e4['num']+'\x20唤醒小兔】:\x20'+_0x45c62f[_0x5bb3c3(0x144,'cax#')]),subTitle+='\x0a【'+Tips+_0x5bb3c3(0x168,'7ku]')+_0x2b88e4[_0x5bb3c3(0x1fc,'xQLR')]+_0x5bb3c3(0xac,'TgQS')+_0x45c62f['message']):(_0xae78b2[_0x5bb3c3(0x285,'SgxK')]('\x0a【'+_0x4e1ac6+_0x5bb3c3(0x215,'HEWi')+_0x1b561e[_0x5bb3c3(0x2ca,'*S42')]+'\x20唤醒小兔】:\x20获得'+_0x397cb8[_0x5bb3c3(0x2b0,'Gn2J')][_0x5bb3c3(0xb0,'daCS')]+','+_0x440ff1[_0x5bb3c3(0xfe,'c3G#')]['winprizedesc']),_0x228a6b+='\x0a【'+_0xe19b7+_0x5bb3c3(0x183,'Gn2J')+_0x31579b['num']+_0x5bb3c3(0x253,'#rvE')+_0x2900f6['data']['prizedesc']+','+_0x2d170e[_0x5bb3c3(0x187,'8h3q')]['winprizedesc']);}}catch(_0x1ad0b9){}finally{_0x2b1b07[_0x5bb3c3(0x29b,'8h3q')](_0x29b97d,_0x2b88e4);};}});});};function encryptAes(_0xb2252){const _0x2b74a3=_0x132027,_0x16d4d5={'ANbbe':_0x2b74a3(0xd7,'VZ)O'),'jSYrq':_0x2b74a3(0x24c,'Yb7s')};let _0x3378c8=CryptoJs[_0x2b74a3(0xa4,')GzI')][_0x2b74a3(0x268,'!20M')](CryptoJs[_0x2b74a3(0x29e,'GBfn')][_0x2b74a3(0x150,'!20M')][_0x2b74a3(0x184,'7NyC')](_0xb2252),CryptoJs[_0x2b74a3(0x2cf,'TgQS')][_0x2b74a3(0x28e,'vc10')][_0x2b74a3(0x1d3,'TgQS')](_0x16d4d5['ANbbe']),{'iv':CryptoJs[_0x2b74a3(0xb9,']6gY')][_0x2b74a3(0x2a8,'VmLA')][_0x2b74a3(0x1fe,')GzI')](_0x16d4d5[_0x2b74a3(0x298,'zljb')]),'mode':CryptoJs[_0x2b74a3(0x1c4,'c3G#')][_0x2b74a3(0xe8,'xQLR')],'padding':CryptoJs['pad'][_0x2b74a3(0xfc,'vc10')]}),_0x25af52=CryptoJs[_0x2b74a3(0x24a,'u5)%')]['Base64']['stringify'](_0x3378c8[_0x2b74a3(0x2a7,'jXEc')]);return _0x25af52;};async function Sleep_time(_0x21b718,_0x17353e){const _0x17f111=_0x132027,_0x452c65={'JklFj':function(_0x5b5e01,_0x1b3a5e){return _0x5b5e01+_0x1b3a5e;},'fGZoe':function(_0x33c095,_0x531efd){return _0x33c095*_0x531efd;},'YENKc':function(_0x2c7fdf,_0x5589c5){return _0x2c7fdf-_0x5589c5;},'Cqnvy':function(_0x2294c3,_0x4e1896){return _0x2294c3*_0x4e1896;}};await $[_0x17f111(0x250,'P0oq')](_0x452c65[_0x17f111(0x20f,']mz(')](Math[_0x17f111(0x186,'zljb')](_0x452c65[_0x17f111(0x147,'7NyC')](Math['random'](),_0x452c65[_0x17f111(0x1ff,'jXEc')](_0x17353e*0x3e8,_0x452c65['Cqnvy'](_0x21b718,0x3e8))+0x1)),_0x452c65[_0x17f111(0x179,']6gY')](_0x21b718,0x3e8)));}function getRandom(_0x8d2587){const _0x46da26=_0x132027,_0x5b2af1={'WoMIK':_0x46da26(0x107,'EEv('),'aIBAu':function(_0x43ae81,_0x43f16c){return _0x43ae81!==_0x43f16c;},'iXkCb':_0x46da26(0x196,'TgQS'),'Mfqod':function(_0x141fe6,_0x267f15){return _0x141fe6-_0x267f15;},'yUntS':function(_0x32c062,_0x13fb85){return _0x32c062*_0x13fb85;}};let _0x1660b3=_0x5b2af1[_0x46da26(0x210,'zljb')],_0x3a5131='';for(let _0x181619=0x0;_0x181619<_0x8d2587;_0x181619++){if(_0x5b2af1[_0x46da26(0xad,'u5)%')](_0x5b2af1['iXkCb'],'DlpnG')){let _0x2ece4d=Math[_0x46da26(0x140,'FpJP')](_0x5b2af1[_0x46da26(0x9d,'WMt!')](_0x5b2af1[_0x46da26(0x254,'vc10')](Math[_0x46da26(0x118,'Mb[3')](),_0x1660b3[_0x46da26(0x242,'E[*v')]),0x1));_0x3a5131+=_0x1660b3[_0x2ece4d];}else _0x300c9b=_0x351b11[_0x46da26(0x115,'W]dO')]['soy_ltgtsp_data'][_0x46da26(0x1dd,']mz(')]('#');}return _0x3a5131;}function getnum(_0x337c5c){const _0x4ec726=_0x132027,_0x6fea4a={'eRpJx':'0123456789','DVZov':function(_0xd24165,_0x5875cb){return _0xd24165<_0x5875cb;},'iVOCK':function(_0x14ac2b,_0x41dab5){return _0x14ac2b===_0x41dab5;},'LPepA':_0x4ec726(0x119,'SgxK'),'sQYCm':function(_0x4730a7,_0x20898d){return _0x4730a7-_0x20898d;},'ZEtWO':function(_0x264b6c,_0x2728e8){return _0x264b6c*_0x2728e8;}};let _0x37c14a=_0x6fea4a[_0x4ec726(0x20a,'TgQS')],_0x2f3279='';for(let _0x1a4e69=0x0;_0x6fea4a[_0x4ec726(0xb7,'ioBX')](_0x1a4e69,_0x337c5c);_0x1a4e69++){if(_0x6fea4a['iVOCK'](_0x4ec726(0x1fd,'pVHU'),_0x6fea4a['LPepA'])){let _0x521790=Math[_0x4ec726(0x1a3,'8h3q')](_0x6fea4a[_0x4ec726(0x13a,'daCS')](_0x6fea4a[_0x4ec726(0x19e,')GzI')](Math[_0x4ec726(0x1b2,'SgxK')](),_0x37c14a[_0x4ec726(0x9f,'VmLA')]),0x1));_0x2f3279+=_0x37c14a[_0x521790];}else _0x57e9fa=_0x35d91b[_0x4ec726(0x2ac,'Gn2J')]['soy_ltgtsp_data']['split']();}return _0x2f3279;}function yyz_getip(){const _0x2e28dd=_0x132027,_0x4f8e35={'MPxru':_0x2e28dd(0x1c8,'W]dO'),'bwaTp':function(_0xb13a23,_0x28bb3a){return _0xb13a23!==_0x28bb3a;}};let _0x136d6f={'url':'https://www.bt.cn/Api/getIpAddress'};return new Promise((_0x38bf0b,_0x3b7529)=>{const _0x411745=_0x2e28dd,_0x112271={'Gcbir':_0x4f8e35['MPxru'],'zEnFq':function(_0x2d91fc,_0x16fa2c){const _0x4a76c9=_0x5c5d;return _0x4f8e35[_0x4a76c9(0x251,'Zk7n')](_0x2d91fc,_0x16fa2c);},'tCDIX':_0x411745(0x1f9,'FpJP')};$[_0x411745(0x2bf,'jXEc')](_0x136d6f,async(_0x337585,_0x38f9b5,_0x1e163c)=>{const _0x5ed408=_0x411745;try{_0x337585?IP_address=_0x112271[_0x5ed408(0x1a8,'c3G#')]:_0x112271[_0x5ed408(0x151,'VmLA')](_0x112271['tCDIX'],_0x5ed408(0x2c5,'o]O3'))?_0x2aae90(_0x120c46):IP_address=_0x1e163c;}catch(_0x53aa9e){IP_address=_0x112271['Gcbir'];}finally{_0x38bf0b();}});});}function Format_time(_0x2dbfaa){const _0x358f97=_0x132027,_0x2e3dae={'JRgqP':function(_0x530bbd,_0x547aba){return _0x530bbd+_0x547aba;},'PIeCa':function(_0x5524ea,_0x56dbe4){return _0x5524ea<_0x56dbe4;},'kPQEm':function(_0x3f8af2,_0x4591e7){return _0x3f8af2+_0x4591e7;},'aOGzD':function(_0x7fff0c,_0x32d965){return _0x7fff0c+_0x32d965;},'Htixr':function(_0x2ec256,_0x24e35f){return _0x2ec256+_0x24e35f;}};var _0x29b579=new Date(_0x2dbfaa*0x3e8),_0x18aab7=_0x2e3dae[_0x358f97(0xae,'c3G#')](_0x29b579[_0x358f97(0xf9,'JlAW')](),'-'),_0x44cbc3=_0x2e3dae[_0x358f97(0xc1,'jXEc')](_0x2e3dae[_0x358f97(0x238,'P]&r')](_0x29b579[_0x358f97(0xc8,'Mb[3')]()+0x1,0xa)?'0'+(_0x29b579[_0x358f97(0x16b,'cax#')]()+0x1):_0x2e3dae[_0x358f97(0x11e,'HEWi')](_0x29b579[_0x358f97(0x28d,'Gn2J')](),0x1),'-'),_0x21a921=_0x29b579[_0x358f97(0x20d,'cax#')]()+'\x20',_0x52c2a9=_0x29b579['getHours']()+':',_0x229519=(_0x2e3dae[_0x358f97(0x198,'S4IJ')](_0x29b579['getMinutes'](),0xa)?_0x2e3dae[_0x358f97(0x231,'7ku]')]('0',_0x29b579[_0x358f97(0x287,'zljb')]()):_0x29b579[_0x358f97(0x164,'8h3q')]())+':',_0x12aa02=_0x29b579['getSeconds']();let _0x5110e9=_0x2e3dae[_0x358f97(0x132,'S4IJ')](_0x18aab7,_0x44cbc3)+_0x21a921+_0x52c2a9+_0x229519+_0x12aa02;return _0x2e3dae[_0x358f97(0x160,'7NyC')](_0x2e3dae['JRgqP'](_0x2e3dae['kPQEm'](_0x2e3dae[_0x358f97(0x17a,'!64y')](_0x18aab7,_0x44cbc3)+_0x21a921,_0x52c2a9),_0x229519),_0x12aa02);}var version_ = 'jsjiami.com.v7';

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
