// auther 烟花小神 killall-love
const $ = new Env('带图评价-解密版-自定义Sign');
// 你的Cookie
cookiesArr = []
// 兼容Xposed 脚本执行
cookiesArr[cookiesArr.length] = process.env.APP_COOKIE;
//用户过滤关键字环境变量！
let userKeyWords = process.env.userKeyWords && process.env.userKeyWords.split('@') || [];
//获取评论内容的最少字数环境变量，默认6！
let wordcount = process.env.wordcount ?? 6;

// 提供一个sign地址
// https://wwi.lanzoup.com/i4Hji05phv5e
// 京东sign地址
let jdSignUrl = 'https://video.app.9x6.cn/jd/sign'
// 是否执行 默认不执行
let isComment = true;

let defKeyWords = ['质量差', '此用户未填写评价内容'];
let defcommentlist = ['网上购物这么激烈，没想到店家的服务这么好，商品质量好而价低廉，我太感谢你了。', '质量非常好，真出乎我的意料，包装非常仔细，非常感谢，祝生意兴隆。', '这家店还好吧，来买过几次了，服务老客户非常周到，以后还常来。', '卖家的服务态度真好，发货很快。商品质量也相当不错。太喜欢了，谢谢。', '几以前几乎从未认真评价过，也不知道浪费了多少分。我听说评价中有100多个单词，基本上是每周访问一次。在京东购物太方便了，根本停不下来。从那时起，购买日用品时首先想到的就是京东，它是真正的。起初我很担心。现在我习惯了，这真的很好。现在我必须给更多的折扣。我下次会再来。我一直在购物。它仍然是一个非常好的宝贝。真的很好。这是值得的。网上买一次也没用。它还没有安装。我一次买了两个。大品牌值得信赖。', '我真的非常喜欢它，非常支持它，质量非常好，和卖家描述的一模一样，我非常满意。我真的很喜欢它，它完全超出了预期的价值，交货速度非常快，包装非常仔细和紧凑，物流公司有一个良好的服务态度，交货速度非常快，我非常满意购物', '质量非常好，与卖家描述的完全一致，非常满意，真 的很喜欢，完全超出期望值，发货速度非常快，包 装非常仔细、严实，物流公司服务态度很好，运送 速度很快，很满意的一次购质量很好，希望更多的 朋友信赖．店主态度特好，我会再次光顾的，可不 可以再便宜点，我带朋友来你家', '东西收到，很满意！！京东平台真的是超级好的卖家，解答疑问不厌其烦，细致认真，关键是东西好，而且货物发得超快，包装仔细，值得信赖！', '这个价格仍然很划算。经济、便宜、质量非常好，与卖方描述的完全一样。非常满意，完全出乎意料，超划算，划算，购物比实体店便宜多了，非常满意网上购物。我希望卖家的生意会越来越红火，物流会越来越快，包装会越来越结实。六星表扬，多一星不怕你骄傲，犹豫不决的朋友会很快下单，这是良心的推荐。它真的很好，而且价格也很高，所以你将来可以在这里买。给三个好评就满足了！满意了！满意了', '让我们先说说商品的质量：产品总体上是好的，包装很紧。让我们来谈谈商家服务：喜欢它。最后，快递：快递非常快。毕竟，廉价商品更真实。我希望商店能提供更多的折扣，及时通知老客户，并促进回购。祝你生意兴隆。'];
!(async () => {
    var dmaya = {
        iBARi: function (marshal, kellisa) {
            return marshal(kellisa);
        }, sKxSN: function (charlette, shaeli) {
            return charlette || shaeli;
        }, kAweH: function (leoria, diena) {
            return leoria * diena;
        }, pAEvC: function (aliecia, deltina) {
            return aliecia === deltina;
        }, SjSdY: 'gSbIT', PynrT: '【提示】请先获取京东账号一cookie直接使用NobyDa的京东签到获取', EcXhI: 'https://bean.m.jd.com/bean/signIndex.action', eoUnk: 'oarRv', eOgpm: '默认不执行, 需要执行请环境变量设置 isCommentPic 为 true', flKHH: function (angelyce, ellamarie) {
            return angelyce > ellamarie;
        }, viyfP: function (emmi, juli) {
            return emmi !== juli;
        }, MMzvN: 'PctYq', pYVUu: 'DrLiQ', kQCxE: function (mahadev, nobuyoshi) {
            return mahadev < nobuyoshi;
        }, sPxrN: function (stazia, diep) {
            return stazia(diep);
        }, lAwUF: function (mounir, teshon) {
            return mounir + teshon;
        }, kWTWb: function (shonett) {
            return shonett();
        }, sCeyD: 'jPRlD', UTVdW: function (alyka) {
            return alyka();
        }
    };
    if (!cookiesArr[0]) {
        if (dmaya['pAEvC'](dmaya['SjSdY'], dmaya['SjSdY'])) {
            $['msg']($['name'], dmaya['PynrT'], dmaya['EcXhI'], { "open-url": dmaya['EcXhI'] });
            return;
        } else {
            dmaya['iBARi'](n, dmaya['sKxSN'](o, ""));
        }
    }
    if (dmaya['pAEvC'](isComment, false)) {
        if (dmaya['eoUnk'] !== 'iyrbc') {
            console['log'](dmaya['eOgpm']);
            return;
        } else {
            picURL = t['picURL']['replace'](/s[0-9]{3}x[0-9]{3}_(.*).dpg/g, "$1");
        }
    }
    let brandasia = 0;
    if (dmaya['flKHH'](cookiesArr['length'], 10)) {
        if (dmaya['viyfP']('vwKkw', 'CnBsL')) {
            brandasia = 10;
        } else {
            $['log']("", "❌ " + $['name'] + ', 失败! 原因: ' + e + "!", "");
        }
    } else {
        if (dmaya['MMzvN'] !== dmaya['pYVUu']) {
            brandasia = cookiesArr['length'];
        } else {
            return arr[Math['floor'](dmaya['kAweH'](Math['random'](), arr['length']))];
        }
    }
    for (let rashidah = 0; dmaya['kQCxE'](rashidah, brandasia); rashidah++) {
        UA = 'jdapp;iPhone;10.0.8;14.6;' + uuidRandom() + ';network/wifi;JDEbook/openapp.jdreader;model/iPhone9,2;addressid/2214222493;appBuild/168841;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16E158;supportJDSHWK/1';
        if (cookiesArr[rashidah]) {
            cookie = cookiesArr[rashidah];
            $['UserName'] = dmaya['sPxrN'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[1]);
            $['index'] = dmaya['lAwUF'](rashidah, 1);
            $['isLogin'] = true;
            $['nickName'] = "";
            $['commentWareList'] = "";
            $['commentInfoList'] = "";
            await dmaya['kWTWb'](TotalBean);
            console['log']('******开始【京东账号' + $['index'] + "】" + ($['nickName'] || $['UserName']) + '*********');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + " " + ($['nickName'] || $['UserName']) + '请重新登录获取https://bean.m.jd.com/bean/signIndex.action', { "open-url": dmaya['EcXhI'] });
                if ($['isNode']()) {
                    if (dmaya['pAEvC'](dmaya['sCeyD'], 'jPRlD')) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + " " + $['UserName'] + '请重新登录获取cookie');
                    } else {
                        console['log'](e);
                    }
                }
                continue;
            }
            await dmaya['UTVdW'](main);
            console['log']('等待...');
            await $['wait'](2e4);
        }
    }
})()['catch'](donnae => {
    $['log']("", "❌ " + $['name'] + ', 失败! 原因: ' + donnae + "!", "");
})['finally'](() => {
    $['done']();
});
async function main() {
    var rishik = {
        yaKhM: '没有待评价!!', sfbKm: function (selden, maddock) {
            return selden === maddock;
        }, Pjcxq: 'userInfo', oYPLZ: 'assetInfo', XjOOq: 'beanNum', AZYsb: '京东服务器返回空数据', otNmV: function (laliana, meridee) {
            return laliana === meridee;
        }, KmUrp: function (haneef) {
            return haneef();
        }, hsnIL: function (kamora, jakyia) {
            return kamora(jakyia);
        }, xxHbo: function (tayshon, ater) {
            return tayshon !== ater;
        }, nhwev: 'cWwhj', sYEBT: function (gaege, tanyla) {
            return gaege(tanyla);
        }, DGqzN: 'fmxaa', ZvCnl: function (elmerine, verva) {
            return elmerine !== verva;
        }, veaKu: 'dpg', ruyYK: function (christiaan, elysha) {
            return christiaan !== elysha;
        }, GMWcG: 'webp', seAkx: 'avif', xrlPB: function (maretha, marcellyn) {
            return maretha === marcellyn;
        }, dCdbX: 'mYdhY', TfjLG: 'ZADpW', TCtht: function (onesha, taeven) {
            return onesha >= taeven;
        }, PaYix: 'pubComment', VLtwA: '1699', FXQho: function (jaielle, germayne) {
            return jaielle >= germayne;
        }, nHHsn: function (raheel, alhena) {
            return raheel < alhena;
        }, YGpAY: function (lavert, brehea, raland) {
            return lavert(brehea, raland);
        }, RVJSm: '[{"VideoIsEditCover":"0","ImagePropId":"0","ImageTakePhotoFilterId":"0","ImageIsCrop":"0","VideoIsEditCrop":"0","VideoEditFilterId":"0","VideoMusicId":"0","ImageEditFilterId":"0","VideoPropId":"0","TakeRate":"0","VideoRecordIsMakup":"0","ImageTakePhotoIsMakup":"0","VideoRecordFilterId":"0","ImageFontId":"0","FromType":"1","ImageStrickId":"0"},{"VideoIsEditCover":"0","ImagePropId":"0","ImageTakePhotoFilterId":"0","ImageIsCrop":"0","VideoIsEditCrop":"0","VideoEditFilterId":"0","VideoMusicId":"0","ImageEditFilterId":"0","VideoPropId":"0","TakeRate":"0","VideoRecordIsMakup":"0","ImageTakePhotoIsMakup":"0","VideoRecordFilterId":"0","ImageFontId":"0","FromType":"1","ImageStrickId":"0"}]', iGyNo: function (kennidi, lashundra, daundra) {
            return kennidi(lashundra, daundra);
        }, MCNNs: 'gsVDp', BYzyy: 'SKVOq'
    };
    let franka = [];
    let sarika = [];
    let audreigh = [];
    await rishik['KmUrp'](getCommentWareList);
    await $['wait'](2e3);
    await rishik['hsnIL'](getCommentWareList, $['maxPage']);
    let jacqlene = $['commentWareList'];
    if (jacqlene) {
        if (rishik['xxHbo'](rishik['nhwev'], 'WnBtw')) {
            await rishik['sYEBT'](getCommentListWithCard, jacqlene['wareId']);
            await $['wait'](2e3);
            let christopherryan = $['commentInfoList'];
            for (const abduljaleel of christopherryan) {
                if (rishik['xxHbo']('fmxaa', rishik['DGqzN'])) {
                    console['log'](rishik['yaKhM']);
                } else {
                    if (abduljaleel['commentInfo']['pictureInfoList']) {
                        for (const chaneta of abduljaleel['commentInfo']['pictureInfoList'] || {}) {
                            if (chaneta['mediaType'] != "2") {
                                if (rishik['ZvCnl'](chaneta['picURL']['indexOf'](rishik['veaKu']), -1)) {
                                    picURL = chaneta['picURL']['replace'](/s[0-9]{3}x[0-9]{3}_(.*).dpg/g, "$1");
                                } else if (rishik['ruyYK'](chaneta['picURL']['indexOf'](rishik['GMWcG']), -1)) {
                                    picURL = chaneta['picURL']['replace'](/s[0-9]{3}x[0-9]{3}_(.*).webp/g, "$1");
                                } else if (rishik['ruyYK'](chaneta['picURL']['indexOf'](rishik['seAkx']), -1)) {
                                    if (rishik['xrlPB'](rishik['dCdbX'], 'kRkjT')) {
                                        if (n) $['logErr'](n); else if (a) {
                                            if (rishik['sfbKm'](1001, (a = JSON['parse'](a))['retcode'])) return void ($['isLogin'] = false);
                                            0 === a['retcode'] && a['data'] && a['data']['hasOwnProperty'](rishik['Pjcxq']) && ($['nickName'] = a['data']['userInfo']['baseInfo']['nickname']), rishik['sfbKm'](0, a['retcode']) && a['data'] && a['data'][rishik['oYPLZ']] && ($['beanCount'] = a['data'] && a['data']['assetInfo'][rishik['XjOOq']]);
                                        } else console['log'](rishik['AZYsb']);
                                    } else {
                                        picURL = chaneta['picURL']['replace'](/s[0-9]{3}x[0-9]{3}_(.*).avif/g, "$1");
                                    }
                                }
                                franka['push'](picURL);
                            }
                            ;
                        }
                        ;
                    }
                    ;
                    if (rishik['xrlPB'](abduljaleel['commentInfo']['commentScore'], "5") && abduljaleel['commentInfo']['commentData']['length'] > wordcount) {
                        sarika['push'](abduljaleel['commentInfo']['commentData']);
                    }
                    ;
                }
            }
            ;
            nullKeyword = "";
            for (let kyliyah of defKeyWords) userKeyWords['push'](kyliyah);
            for (let aliezah of sarika) {
                if (userKeyWords['some'](aishwarya => aliezah['includes'](aishwarya) ? nullKeyword = aishwarya : "")) {
                    if (rishik['xrlPB'](rishik['TfjLG'], rishik['TfjLG'])) {
                        console['log']('评价内容被过滤，含有关键词-【' + nullKeyword + "】");
                    } else {
                        cklen = 10;
                    }
                } else {
                    audreigh['push'](aliezah);
                }
                ;
            }
            ;
            let yaquelin = rishik['sYEBT'](random, audreigh);
            let waylen = [{ picUrl: franka[0] }, { picUrl: franka[1] }];
            let lesly = rishik['sYEBT'](random, defcommentlist);
            if (franka['length'] >= 2 && rishik['TCtht'](audreigh['length'], 2)) {
                console['log']('去评价 ---> ' + jacqlene['wname'] + '成功获取到图片，去带图评价!');
                await task(rishik['PaYix'], { productId: jacqlene['wareId'], kocSynFlag: "0", categoryList: jacqlene['categoryList'], voucherStatus: "0", extInfo: { mediasExt: '[{"VideoIsEditCover":"0","ImagePropId":"0","ImageTakePhotoFilterId":"0","ImageIsCrop":"0","VideoIsEditCrop":"0","VideoEditFilterId":"0","VideoMusicId":"0","ImageEditFilterId":"0","VideoPropId":"0","TakeRate":"0","VideoRecordIsMakup":"0","ImageTakePhotoIsMakup":"0","VideoRecordFilterId":"0","ImageFontId":"0","FromType":"1","ImageStrickId":"0"},{"VideoIsEditCover":"0","ImagePropId":"0","ImageTakePhotoFilterId":"0","ImageIsCrop":"0","VideoIsEditCrop":"0","VideoEditFilterId":"0","VideoMusicId":"0","ImageEditFilterId":"0","VideoPropId":"0","TakeRate":"0","VideoRecordIsMakup":"0","ImageTakePhotoIsMakup":"0","VideoRecordFilterId":"0","ImageFontId":"0","FromType":"1","ImageStrickId":"0"}]' }, officerScore: rishik['VLtwA'], anonymousFlag: "1", commentScore: "5", shopType: "0", orderId: jacqlene['orderId'], shopId: jacqlene['shopId'], addPictureFlag: "0", commentData: lesly, pictureInfoList: waylen, officerLevel: "3", isCommentTagContent: "0" });
            } else if (rishik['FXQho'](franka['length'], 2) && rishik['nHHsn'](audreigh['length'], 2)) {
                console['log']('去评价 ---> ' + jacqlene['wname'] + '成功获取到图片，且没有获取到评价内容，采用脚本自带评价，去带图评价!');
                await rishik['YGpAY'](task, 'pubComment', { productId: jacqlene['wareId'], kocSynFlag: "0", categoryList: jacqlene['categoryList'], voucherStatus: "0", extInfo: { mediasExt: rishik['RVJSm'] }, officerScore: '1699', anonymousFlag: "1", commentScore: "5", shopType: "0", orderId: jacqlene['orderId'], shopId: jacqlene['shopId'], addPictureFlag: "0", commentData: lesly, pictureInfoList: waylen, officerLevel: "3", isCommentTagContent: "0" });
            } else if (franka['length'] < 2 && rishik['FXQho'](audreigh['length'], 2)) {
                console['log']('去评价 ---> ' + jacqlene['wname'] + '没有获取到图片，且获取到评价，去评价!');
                await rishik['iGyNo'](task, rishik['PaYix'], { productId: jacqlene['wareId'], kocSynFlag: "0", categoryList: jacqlene['ategoryList'], voucherStatus: "0", officerScore: rishik['VLtwA'], anonymousFlag: "1", commentScore: "5", shopType: "0", orderId: jacqlene['orderId'], shopId: jacqlene['shopId'], addPictureFlag: "0", commentData: lesly, pictureInfoList: "", officerLevel: "3", isCommentTagContent: "0" });
            } else if (christopherryan['length'] <= 1) {
                if (rishik['xrlPB'](rishik['MCNNs'], 'gsVDp')) {
                    console['log']('去评价 ---> ' + jacqlene['wname'] + '没有获取到评价内容,采用脚本自带评价');
                    await task(rishik['PaYix'], { productId: jacqlene['wareId'], kocSynFlag: "0", categoryList: jacqlene['ategoryList'], voucherStatus: "0", officerScore: rishik['VLtwA'], anonymousFlag: "1", commentScore: "5", shopType: "0", orderId: jacqlene['orderId'], shopId: jacqlene['shopId'], addPictureFlag: "0", commentData: lesly, pictureInfoList: "", officerLevel: "3", isCommentTagContent: "0" });
                } else {
                    picURL = t['picURL']['replace'](/s[0-9]{3}x[0-9]{3}_(.*).webp/g, "$1");
                }
            }
            ;
        } else {
            if (userKeyWords['some'](trashawn => e['includes'](trashawn) ? nullKeyword = trashawn : "")) {
                console['log']('评价内容被过滤，含有关键词-【' + nullKeyword + "】");
            } else {
                audreigh['push'](e);
            }
            ;
        }
    } else {
        if (rishik['xrlPB'](rishik['BYzyy'], rishik['BYzyy'])) {
            console['log'](rishik['yaKhM']);
        } else {
            if (rishik['sfbKm'](1001, (a = JSON['parse'](a))['retcode'])) return void ($['isLogin'] = false);
            rishik['sfbKm'](0, a['retcode']) && a['data'] && a['data']['hasOwnProperty'](rishik['Pjcxq']) && ($['nickName'] = a['data']['userInfo']['baseInfo']['nickname']), rishik['otNmV'](0, a['retcode']) && a['data'] && a['data']['assetInfo'] && ($['beanCount'] = a['data'] && a['data'][rishik['oYPLZ']][rishik['XjOOq']]);
        }
    }
}
async function getCommentListWithCard(reyon) {
    s = await task('getCommentListWithCard', { sortType: "5", isCurrentSku: false, sku: reyon, pictureCommentType: "A", shieldCurrentComment: "1", shopType: "0", type: "4", shadowMainSku: "0", offset: "1", num: "10" });
    $['commentInfoList'] = s['commentInfoList'];
    console['log']('准备获取评价...');
}
async function getCommentWareList(_0x1fd34f = "1") {
    var burnice = {
        PImfL: function (alleyah, sharonn, nerida) {
            return alleyah(sharonn, nerida);
        }
    };
    s = await burnice['PImfL'](task, 'getCommentWareList', { status: "1", planType: "1", pageIndex: _0x1fd34f, pageSize: "10" });
    if(s['commentWareListInfo'] == undefined){
        return
    }
    $['maxPage'] = s['commentWareListInfo']['maxPage'];
    $['commentWareList'] = s['commentWareListInfo']['commentWareList']['reverse']()[0];
}
async function task(olisaemeka, miryah) {
    var kulsum = {
        HfqED: 'pubComment', XzsDG: function (ahliana, kyrion) {
            return ahliana(kyrion);
        }, JWpiv: function (bernadine, shiah) {
            return bernadine !== shiah;
        }, udEvC: async function (tammis, mrinalini, shervon) {
            a = await tammis(mrinalini, shervon)
            console.log(a)
            return {
                "body": a['data']['convertUrlNew']
            };
        }, oweAb: 'api.m.jd.com', Cdwkk: 'application/x-www-form-urlencoded', VHjEZ: '*/*'
    };
    return s = await kulsum['udEvC'](getSign, olisaemeka, miryah), opt = { url: 'https://api.m.jd.com/client.action?functionId=' + olisaemeka, body: s['body'], headers: { Host: kulsum['oweAb'], "content-type": kulsum['Cdwkk'], accept: kulsum['VHjEZ'], "user-agent": UA, "accept-language": 'zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6', Cookie: cookie } }, new Promise(tonetta => {
        var niaya = {
            ZJeSF: kulsum['HfqED'], aNuUq: function (tajsa, eldrich) {
                return kulsum['XzsDG'](tajsa, eldrich);
            }
        };
        if (kulsum['JWpiv']('quhDL', 'quhDL')) {
            cklen = cookiesArr['length'];
        } else {
            $['post'](opt, (kenlyn, lovick, parvaneh) => {
                try {
                    kenlyn ? console['log'](kenlyn) : parvaneh = JSON['parse'](parvaneh);
                    switch (olisaemeka) {
                        case niaya['ZJeSF']:
                            if (parvaneh['message']) {
                                console['log'](parvaneh['message']);
                            }
                            break;
                        default:
                            break;
                    }
                } catch (klowi) {
                    console['log'](klowi);
                } finally {
                    niaya['aNuUq'](tonetta, parvaneh);
                }
            });
        }
    });
}
function uuidRandom() {
    var traylen = {
        QZRDH: function (yunuen, laureano) {
            return yunuen + laureano;
        }
    };
    return traylen['QZRDH'](traylen['QZRDH'](Math['random']()['toString'](16)['slice'](2, 10), Math['random']()['toString'](16)['slice'](2, 10)) + Math['random']()['toString'](16)['slice'](2, 10) + Math['random']()['toString'](16)['slice'](2, 10), Math['random']()['toString'](16)['slice'](2, 10));
}
function random(kiryn) {
    var byrant = {
        fLFJL: function (bryce, zaleah) {
            return bryce * zaleah;
        }
    };
    return kiryn[Math['floor'](byrant['fLFJL'](Math['random'](), kiryn['length']))];
}
function getSign(emerito, reshmi) {
    var malayla = {
        toCTY: function (ladreama, skii) {
            return ladreama + skii;
        }, ecSCV: 'tAfyV', Ggpcp: function (anaylah, daylynn) {
            return anaylah !== daylynn;
        }, kLTrc: 'Izfft', Tvnnn: function (kinnidi, marsalis) {
            return kinnidi(marsalis);
        }, yroou: "", Sruwe: 'application/x-www-form-urlencoded'
    };
    const leighanne = { url: jdSignUrl, body: `functionId=${emerito}&body=${JSON.stringify(reshmi)}`, headers: { "Content-Type": malayla['Sruwe'] } };
    return new Promise(tykeyah => {
        var reynoldo = {
            oyeAX: function (jaycek, izrael) {
                return jaycek + izrael;
            }, qLmne: function (theodric, tsega) {
                return malayla['toCTY'](theodric, tsega);
            }, IBiXP: malayla['ecSCV'], qGNAl: function (lynk, safeya) {
                return malayla['Ggpcp'](lynk, safeya);
            }, nJsaa: malayla['kLTrc'], pInvh: function (wintress, kaydrian) {
                return malayla['Tvnnn'](wintress, kaydrian);
            }, FpxRo: function (samarrah, knolyn) {
                return samarrah || knolyn;
            }
        };
        $['post'](leighanne, async (zavery, pedrojose, ila) => {
            try {
                zavery ? console['log'](zavery) : ila = JSON['parse'](ila);
            } catch (aryela) {
                if (reynoldo['IBiXP'] === reynoldo['IBiXP']) {
                    $['logErr'](aryela, pedrojose);
                } else {
                    try {
                        zavery ? console['log'](zavery) : ila = JSON['parse'](ila);
                    } catch (guinn) {
                        $['logErr'](guinn, pedrojose);
                    } finally {
                        aryela(ila || "");
                    }
                }
            } finally {
                if (reynoldo['qGNAl'](reynoldo['nJsaa'], reynoldo['nJsaa'])) {
                    return reynoldo['oyeAX'](reynoldo['qLmne'](Math['random']()['toString'](16)['slice'](2, 10) + Math['random']()['toString'](16)['slice'](2, 10) + Math['random']()['toString'](16)['slice'](2, 10), Math['random']()['toString'](16)['slice'](2, 10)), Math['random']()['toString'](16)['slice'](2, 10));
                } else {
                    reynoldo['pInvh'](tykeyah, reynoldo['FpxRo'](ila, ""));
                }
            }
        });
    });
}
function TotalBean() {
    var khleo = {
        dyqrV: function (camecia, alieah) {
            return camecia === alieah;
        }, AWZZp: 'retcode', hexrP: 'beanNum', haxnd: 'sHjVE', sigGd: function (rade) {
            return rade();
        }, cZLsf: 'https://wq.jd.com/user_new/info/GetJDUserInfoUnion?sceneval=2', YJbys: '*/*', MVZHt: 'keep-alive', CHndV: 'gzip, deflate, br'
    };
    return new Promise(async rudell => {
        var ilda = {
            IQsSc: function (syiah, taleyah) {
                return khleo['dyqrV'](syiah, taleyah);
            }, idXbN: khleo['AWZZp'], bOGMJ: 'assetInfo', NOQPE: khleo['hexrP'], fURBp: '京东服务器返回空数据', DPrhB: khleo['haxnd'], VXKlD: function (daxston) {
                return khleo['sigGd'](daxston);
            }
        };
        const melvonia = { url: khleo['cZLsf'], headers: { Host: 'wq.jd.com', Accept: khleo['YJbys'], Connection: khleo['MVZHt'], Cookie: cookie, "User-Agent": UA, "Accept-Language": 'zh-cn', Referer: 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&', "Accept-Encoding": khleo['CHndV'] } };
        $['get'](melvonia, (oreatha, nathaya, ginell) => {
            try {
                if (oreatha) $['logErr'](oreatha); else if (ginell) {
                    if (ilda['IQsSc'](1001, (ginell = JSON['parse'](ginell))[ilda['idXbN']])) return void ($['isLogin'] = false);
                    ilda['IQsSc'](0, ginell[ilda['idXbN']]) && ginell['data'] && ginell['data']['hasOwnProperty']('userInfo') && ($['nickName'] = ginell['data']['userInfo']['baseInfo']['nickname']), ilda['IQsSc'](0, ginell['retcode']) && ginell['data'] && ginell['data'][ilda['bOGMJ']] && ($['beanCount'] = ginell['data'] && ginell['data'][ilda['bOGMJ']][ilda['NOQPE']]);
                } else console['log'](ilda['fURBp']);
            } catch (iszac) {
                if (ilda['DPrhB'] !== ilda['DPrhB']) {
                    defcommentInfolist['push'](vo['commentInfo']['commentData']);
                } else {
                    $['logErr'](iszac);
                }
            } finally {
                ilda['VXKlD'](rudell);
            }
        });
    });
}
;
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }