/*
TT快快变大
 */
const $ = new Env('TT快快变大');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let jdNotify = true;//是否关闭通知，false打开通知推送，true关闭通知推送
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;
$.shareCodes = []

// ******************************
//抓包的body
$.body = '{"redPacketId":"442447530","followShop":0,"random":"42548711","log":"1647218554273~1AMJSp8mk37MDFlREFBejAyMQ==.VHJ1dkhUfHR0SF11dz9KVXYmNU4sHSMIBFRod21MSXU/cwRUOj8=.72e1d68d~6,1~99D35B8D9C8FF6341C5652F782699F4C5D31D61A~10rqhir~C~TBdBWBcObmoZF0FbWRcNbhdRABkDbxlwfhkFe3sZBRsGDAUbQRcZF1ACGgNtGXB/GQZlYRkFGgYPBRlBFxgXUwQYA20YcHwZBGNwGEAbQRdoGRZSRVsXDwQYF0RGFw8XBQMDAgcEDQEABg0EBAwFBA8XGRdCUVEVDxdBQUBBQ1NAUxcYF0BQVBcPFlNRQUFBQUFUFRkXRVFaFw1uARkCBAcbDBkEBRgEGwBoGRdeXxUPBBkXV0YVDxcCBlBRD1cHV1YEVgNWA1MGVw0AVgxWDQwCUwUNUFFVDRUZF1tFFg8VXGVdWlpQFRkXQRcOBAEBAgcEDAACAQcCBhgXXV4XDxcFDARTUVMFVw1WVwUBDQQFAVNRUVQMVFQGUQJXUAxTBANTDAcDBVcHFxkWU0dXFw8XFhkVW0MXDxZ0R0VZUBV3WlpFQEFQRhkXfFtWGxYZFVtUQxcOFwYDAgwNARcbF0ZWRxYPbA0EBxkHAgJoGRdHWxcNbhdcZVxaWVAEBRkHFxsXXHpmFhkVBAEbABYZFQQFGwEaBhUZFwQDAwwPABcZFwUMBFNRUwVXDVZXBQENBAUBU1FRVAxUVAZRAldQDFMEA1MMBwMFVwcXGRZUFWgZF1xbVBUPF1NTUlNRU0FBFxgXVl8XDxdBFxsXVlwXDhdABhsHGwAXGxdWU2pCFw0XBQcXGBdVURcPF0ZUWVFaWAgABwIBDQIEBRcbF1hfFw5uBhkFGQVpGRVXWVpSFg8VBAMBAgYEDwAABAcADUkEemcMZ3l7RkRaDHlxcQRmWXdfZ110TXt0CQgZZ31NXmEGZXBWWGNlVgdNAG9nWwV9dm9YYHV0Y3Fie2J7dHlYfl5dR2JvRkBgX1xweXFWeHYEcHVvdmB9fU96ZXx0fFp6XnhheU8BA3VkXkBwYEZ/cGdWbH4HfnZ2BVZGVGV4HndbDFZ2cVZCf2V8AH53eGF3d24EZ2QEU31QXmdxXF9NcnddGn9DVnJwcVlfcAdEfXRcVlx5XQVkcl9xfn9SdAV3Q3gOdnJ4RHVhVEZwZl57fGQNcHFfQ0RzdnhMc2FkAnNfVgR9XXlecU9/cH5jf2d0BWV6fU8BZGF1cFl2fWBscE1mDXlkeFx7YXBfcX1DWHlSDXtlZgUGe09acHNzZh5lZwRddk9sUHBNX3t7X15kf00NUXhkAVZ5dHZCf3dRZ3ZfRnZwYX0aflxCZ3xMZHsbB1QDAAxRAgVLTBgESUtLd0tnXXlnYl18eHBheHF9ZH1nf2d3YnBlRmZid3xTc1lPd3B0XmdwTw1mZ3dxfnJkdHR0ZUZjfV17YWJiU31wQlJmdHZ0Z313fndyUl5hcHZeZWJwdGF3XXJ/fWR0cHRAdGF9TX5ncmRaZ3AEDQpLBEBeA1tVBhcZF1lGUBcPFxdJ~1hzgwtg","sceneid":"JLHBhPageh5"}'
//抓包的UA
$.UA = 'jdappiPhone10.4.3M/5.0appBuild/167985jdSupportDarkMode/0ef/1ep/{"ciphertype":5,"cipher":{"ud":"DJOyDNdsEJK1ZJvvEJHsYtvuZNduZJq4DwPrYtVwCtG1DzVtEQPrCm==","sv":"CJGkDG==","iad":"HNGnCUDQGtujGUC3Hs00GJO5BJu4DtujDJS1GuZOCtOnGtDQ"},"ts":1646881254,"hdid":"JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=","version":"1.0.3","appname":"com.360buy.jdmobile","ridx":-1}Mozilla/5.0 (iPhone CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148supportJDSHWK/1'
//从哪个pin开始
$.startPin = '1784339854_m'
// ******************************

$.url = ""
$.stop = false
$.c = true
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      // await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if ($.startPin !== $.UserName && $.c) {
        continue
      }
      $.c = false
      if ($.stop) {
        break
      }
      await main();
      await $.wait(60000)
    }
  }
})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

async function main() {
  console.log(`TT大帅比！！！！！！！！！！！！！！！`)
  await TT()

}

function TT() {
  return new Promise(resolve => {
    $.post({
      url: `https://api.m.jd.com/api?appid=jinlihongbao&functionId=jinli_h5assist&loginType=2&client=jinlihongbao&t=${new Date().getTime()}&clientVersion=10.4.0&osVersion=-1`,
      body: `body=${encodeURIComponent($.body)}&`,
      headers: {
        'User-Agent': $.UA,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'api.m.jd.com',
        'Origin': 'https://happy.m.jd.com',
        'Cookie': cookie,
      },
      timeout: 20000,
      retry: {limit: 20, methods: ["GET", "POST"], statusCodes: [493,504], calculateDelay: ({attemptCount, error, computedValue}) => {if (computedValue) {if (error.code === 'ETIMEDOUT') {$.log(`ETIMEDOUT重试 第${attemptCount}次`);return 1000;} else {$.log(`493重试 第${attemptCount}次`);return 62000;}}return 0;}},
      https:{
        rejectUnauthorized: false
      },
    }, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试 status:${resp.status} status:${resp.statusCode} `)
        } else {
          $.log(data)
          data = JSON.parse(data);
          if (data.rtn_code && data.rtn_code === 403) {
            $.stop = true
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }