const tencentcloud = require("tencentcloud-sdk-nodejs");
const ScfClient = tencentcloud.scf.v20180416.Client;
let cookiesArr = [];
const jdCookieNode = require('./jdCookie.js')
Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
})
let tencent_secretId, tencent_secretKey, tencent_function_name, QQ_uid, region


!(async () => {
    if (!process.env.tencent_secretId || !process.env.tencent_secretKey) {
        console.log("没有配置环境变量 [tencent_secretId] 或 [tencent_secretKey] \n查看 https://console.cloud.tencent.com/cam/capi")
        return;
    } else {
        tencent_secretId = process.env.tencent_secretId
        tencent_secretKey = process.env.tencent_secretKey
    }
    if (!process.env.TT_tencent_function_name_1600_common) {
        console.log("没有配置环境变量 [TT_tencent_function_name_1600_common]");
        return
    } else {
        tencent_function_name = process.env.TT_tencent_function_name_1600_common
    }

    if (!process.env.TT_tencent_function_region) {
        console.log("没有配置环境变量 [TT_tencent_function_region]");
        return
    } else {
        region = process.env.TT_tencent_function_region
    }
    QQ_uid = process.env.QQ_uid


    const clientConfig = {
        credential: {
            secretId: tencent_secretId,
            secretKey: tencent_secretKey,
        },
        region: region,
        profile: {
            httpProfile: {
                endpoint: "scf.tencentcloudapi.com",
            },
        },
    };

    const client = new ScfClient(clientConfig);
    const params = {
        "FunctionName": tencent_function_name,
        "InvocationType": "Event",
        "ClientContext": JSON.stringify({
            "RUN_SCRIPT": "jd_opencard_teamBean_1600_common_enc",
            "JD_COOKIE": cookiesArr.join('&'),
            // "env": process.env
            "env": {
                "QQ_uid":QQ_uid
            }
        })
    };
    // client.Invoke(params).then(
    //     (data) => {
    //         console.log(data);
    //     },
    //     (err) => {
    //         console.error("error", err);
    //     }
    // );

    let invokeResp = await client.Invoke(params)

    console.log(invokeResp)


})().catch((e) => {
    console.log(e)
}).finally(() => {
})

