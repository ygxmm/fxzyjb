const axios = require('axios');
const HttpsProxyAgent = require("https-proxy-agent");
const fs = require('fs');
const readline = require('readline');
const events = require('events');
let notify;
try {
    notify = require('./sendNotify');
} catch (e) {}

let Version = '2.4.0';

//自定义
//Cookie
let Cookie = process.env.BingAutoSearch_MicroSoft_COOKIE1 || "webisession=%7B%22impressionId%22%3A%22a045ea6a-636e-429a-9407-5d22b2c7512c%22%2C%22sessionid%22%3A%22823a6f8f-1b5e-44f2-8e42-b2efd7a5cdfd%22%2C%22sessionNumber%22%3A2%7D; MSCC=cid=kxnlz9odf60hoj8fwh9vef2q-c1=2-c2=2-c3=2; MicrosoftApplicationsTelemetryDeviceId=0bcbbfaa-6dba-4095-adb0-f93cf987879f; MicrosoftApplicationsTelemetryFirstLaunchTime=2023-04-10T04:11:57.493Z; GRNID=270de0c3-9230-4910-9a67-0c88421be547; tifacfaatcs=CfDJ8JndbFk51uNMnlqM05n8fr2j_8eTdvZtXrXyuD827K2m9kwzIEHr0jHk8sPwO3I8Uo2Kg4Cs08JxINX8THt6TU98yczFG2D6tWxMlTktBXpQc8zxd8S-pWJuO82PMWBUXX6SWEAmIP_1a3vCK5ngFRMKTmy89H_IpEUWQ65aGlLmN0xzSq7LraGpkSklE1NSwayR0fIGXqe3BV8jfk3jDCq0pvhEvcw0I1GQaRYHUjSRT6owDothkZfC0fLv67Z6kxHcOXIULQSXfZ2z6CCnzWqPg6H6dL9F0K9c0M-CfofFII2yizJZwVqp110quDjvXK-GMAzjKgt3brefn7BBBYBIOgcVNlRgvEPtdjCF8qYZFil6OyQFSjzZzlVM52s5JgPmJm2asO_nAjKIoPBTOC3QHgH3xIfhwB1ojAgHvQo5Qt36EVPUsHoARZ9lhOSgNUcGE_EeKhpjFBySdFdOZACHFC-IdvcD0At6yZSuKD2ikQbJ5_EDDDhG26f-4IiZKbuqhkDhonT4Lt6iP1IghBJaJAxXVdkqtqecf5ee-FUqq0ivuZFipscQtWWSO4ZAWM4zG20WjzhPICEk-cIC3GR9OpDyv591dEI8OCULetEwfpl9AMXxbbAWmmfQ_unEtFNvyn9osbCcy_jZ_pu4Dg8cij8Vl14v0xWpyduVlwLjRxfTtKtc0YHWxiUF4HhUnTf1V7iXQiDgFdViqRqMA_-hQDlUNNzoyaBrkNUG04C9Yl_vL6q47li4jJlA7Q1ts3TKcXX5-qTeLr_aF5e_eC7wLPvsgo-RVCKOsBkor6tkFQU8HVCuZs2A4PitJ2fhO5lXdLNcAbp0YKDO4VvYOS90Fosvm6UHuhBfGYpbpUUaucMkinQrhNQRxrB7ZIzO4tdjQGf91PmltLeuL6Gogp-DMPLHGjbCHxtdAcfn-Kky1aKavcyouAqL0adClPlbVwneg-p6O1eb-mC66lh3Fe88ejU391TKlsGJbJJsnHbvxBKtwkDGxbsyxoasgm7ZA4Ou0NEbrTAZm0pN1h2C1ELJz2-0edE6bAmGdI_UGYDlANQt2VnenQPVP68gvE2EDPyNZlSXH5SqFhVJlwUMmrYFDwxnNCjK4bovbQfr_4ss0_e8UmV2gnwJJbKk8BY7tIrC9k5hnbh3eotXClNxzFVpvnZ-GwswLMRa6xJ9NtTp1ZYpd5E4K3xpoYFpeZxdknK6kBOb0PaDo9kbUaA2mZVfzAZyLFuOdzfoa3xJBEu8qVVkq5XvLnARa6aGjZcO5nqazyCLCJiKGoSt84JR2wzPld6_xUIBYxSQ6TmetGT2OF0h6zA-0HG_kRZr-FU09oATzYjQ7ZGxMNk69MjcpgPSzYCbClVhuGEifg5T-kYUbhkXYieVPWIaifRHCgFdLqLDxgk5wsNzOlDt48q09Z2fLKcRr2dlYGEy4zwf0szR4i9LIYdfKO6TWDQU8e51s7U2bq304nMWBzKcokY78VAfLU2vKQB2dHIpQjM2i5ZfqwpeOVMv4KqPeW_fc3Z_hO1KU-EQQjqFUi51Guw9Tcq6BqpEF2RFg8uKWRJoeEmS5PIWSS-z4mLMT7Qltr2qXhEgSQY_1DWAPcYjYXH4X-4uaZWaEcBWO5FciaEXZsxE6ZJJqHhw3BvBi1Jy9dlZ8ne9rMPn0B6jEPen7J-ODhxRl_qVIuMZpKe3x0jmRGLUChRBZhNitefziDWpX9fyQLXJmmV183DQDvn7EJ8yGbSCEH3XUYM5SZXBQMv72mx8oHqQ2Y5oCjsEJd3fa_Dz3K3gXOqZJ94aMPbBFCCt_1Y4CB-mXe29-ugZGepQQb5yd4A0DzNaMCoLQq_cbrToI7F7mzK56fCfUwACa19FghE5gQphd0k3Dhp7WiA5iYiXKFIbRPZerG03IncvWaIVMIahuI_7hXtv_GPv5L4ZGEntwjccdruqgD8BRfPINa0VpKS2Z7n5bGFVD_vVeRO2szizP526rs_0d7vfaRwVvUsPu9ZO_rFDgQF0HA7t2zg4t6FxrLysz3PJnJw8K215glOSNbyc4ALZnuocfL_0y5J98ldS8OE_rR7zCfp612s4dLkCQvCEQPXtyWyHM3hul6_KyHalr8yDkvVuOfhhZRaAE1PVzF3lcvjXLEXGP-0X6OqIWtZeOqvF1bVb2UZkH-8Cy_1CYSgCdfPps3SCoJfStCHut6DOKlRRosAyDZReZ_DAWC5HZ36teGREzTcLVSO65wBF_sQyp1p8KmWFHIUg2bAcTrFYfgWs7Y5faLC4kUSZj_g6TycRbqs0DqxTncD9ehtEmK9nRqeGljNviFjAKhY2zQ2Htvb2oncgHMoTGfPt3JO_rFSnmqd49y0rLRP8-RSFA5ffsWA4kzlwSJSRzLqWGBsqXI5FXPkbQhvEZkEwtkKvrFCadl05F4ASqaz6nP8E9JByZvDwFyO8WXzd8fqTcclJgCwz08b7gIi6_xFBsl41waNoTpRcTNztqpLSTt7z0HmnRu2qwKXukbKk81J6sdmvN-WNAkRqteWDQXklg3YP7sWtzsYomCUZUuhOUYN5INVEr4OQQwAXQjduN5n33mUDeYcYm5AMigQVz4MtRQR_GZ8ADBO4utJZG_dfqPkoyPg21cgh7YnJ-4IrRNH9jM5K1bK7CzdTjQOfNckQO05bxbE_pVNqM3essWHOfZixg_-Y6ZDQhG-89v7cvQqsWWrDimpB51PaQOUX91eWmq6PEsljn0Q8XQSD1coAUuej1tJvLc0lkfZAEmwGBdrcLwMCm28KMhQel3uWKMyhFdcfZF0YXqSJCmXxETHca57ByFS9IppbGq_J__0R5rxHkfG-Y0TmKGeYGpQMnC-LIOnKL7BKgvXtvnqJjGkrvamtwmU2J-Rw47cLsVdlcEkCCb17cAGJ3IibwTTUwfx0Qq81i8ND3ax3f2t5VlfMfJsjqueKP0_pHIb7zua9uSnG74iR3uZ_HYen-q97b3uPHRVXkGnxVFfiRQBqSo0Yc5qP1VXt0-K22TzaDEnatVuW_Sr73l8E_mQ81Whz0nvtta5462ACMN3tVjE251Pdwtn64R06qVSQn8pi3I0vLIDSG3djL0BdnqUNJn1cJ4-9pPl8IyCHNrku2RdfzW_mjT--YLSBlrgm2_Z1W94jSaZvSxssP0qlzFlRNLxIW8UBBMFEMm5F9qJQ1TtGunuv4RhP6cidkVJGMSJD8B-T2XWVMNapgxvsWh1XISx9OLYQJsOx8ppy3mz98q7YhmC5HgDH2pRmzcp-TqP1hDHfgWr2jwDR8sjkh4Ks1AIryjA1qzaPqgnIB33lR_tGkB92bfzECHm-pWc14CY0j_ytDLCP0PkS_n7iJzewA-iTB5k3U6a7uv_BFnRKz8QzqMroYhBlyW7gJp1dYHzr3Gfolxs6LnFpKFDmrnvocqjGtW-PsagkXFrJT7Ae_XkCbbYEBNYhXqqbOGCa48NSf6nSl-x9aRnAG5S660dfpgS50hOC_ZcpX0uxt5K6X8fbYdk8f2WjK4F_PRE-EgDLrNK9qBO0VPypOPc_a4op3zssANiAHVKBWFUuOM32rY8TbA; vdp=%7B%22ex%22%3Atrue%2C%22red%22%3Afalse%7D; MUIDB=266866C71676612924087428171060B5; _HPVN=CS=eyJQbiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiUCJ9LCJTYyI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiSCJ9LCJReiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiVCJ9LCJBcCI6dHJ1ZSwiTXV0ZSI6dHJ1ZSwiTGFkIjoiMjAyMy0wNC0xMFQwMDowMDowMFoiLCJJb3RkIjowLCJHd2IiOjAsIkRmdCI6bnVsbCwiTXZzIjowLCJGbHQiOjAsIkltcCI6MTB9; _RwBf=ilt=4&ihpd=4&ispd=0&rc=0&rb=0&gb=0&rg=0&pc=0&mtu=0&rbb=0&g=0&cid=&clo=0&v=4&l=2023-04-09T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=2&p=&c=&t=0&s=0001-01-01T00:00:00.0000000+00:00&ts=2023-04-10T04:11:47.5174236+00:00&rwred=0&wls=&lka=0&lkt=0&TH=; _SS=SID=33E87B68CAAD65F61BAC6987CBCB6453&R=0&RB=0&GB=0&RG=0&RP=0; _UR=QS=0&TQS=0; ENSEARCH=BENVER=1; SRCHHPGUSR=SRCHLANG=en&CW=375&CH=685&SCW=375&SCH=685&BRW=MW&BRH=MT&DPR=3.0&UTC=480&DM=0&HV=1681099906&HBOPEN=2&PRVCW=375&PRVCH=685; ANON=A=7AE1C3592B439FE81ED39629FFFFFFFF&E=1c33&W=1; KievRPSSecAuth=FACSBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACMI1X4Co+5ArUAS6TovyadDUi00chhRjFPXgEZm5Qc2Jz2zNXf29OpbhAZ+XJ/zo7sGTbcLXTmGpU0NpAVxThk9Xt91PDtm3wGZpuzyc0z0D7ii9WBRW3Rdi36rpXeES5amZZNi8XMmuyNzGGa0N4JLPBrm6m6uLrHXAFFSKTy8VfVW6vPz14jPgRtSRGBh2Srx7mJehotD3ySgtWc/PjqyUArf3HnlE7hl+EeDwPOPDG7coRcUnCA9Cq6yME/lhsF/Jxek/tBX4HquNd8m9m09f9SHBbPWk8JgQefDOs/6/lzfWmLjADxDAomGiKJHKx8+KdnwpFLTlS5p7dQWN1XwCDTQ2XX8E/egBgS02Ycy2Jo7/rUy2UBw0Na60+9AZ2TcZfu3I+e3QXrnFnnyYNMyypLVUSC6jZvvA2Hqzrh/eHc76+ZQJJ3aDFCf9S5Gx1Pr1vapnRPDjGDO5eTiDa+KCnsWESFxQdtUvNimH1oDdV3q/KuoQ+92e93KXMPjQxT2XWkFfMC3sby4dQh/wgxwaUAd0MBNV95Qei9NiJ8qb0zUSlmHwR9rQpnbVo3MzXv5xiFpQfYW37jQgvRAGGd5JcyABd2u4oQSHQWUK/a0l9rSP+jcWfl6wEKHjZUpUGqFQL4hFQHDTW9Al2RsYnjfd5OmC1A4tXavp5wRIRZAgYYNS1wAodwXrM6rALmXzK161hLuId+jhOJLVsYJl/aZDVz2xkXz1tKNrkieQvBXCVT6jSIhnGBRO1FMRwmeOF2WGT69EuflEqJGbMRqRN1Ir+EJ/Nz6KStjgas3L3LAe51lW1ad5lllDoq8joSs9UiL3kDopy7chSahNwCPH3bhDI4S7rpzSBdkakbYOI5j5ltH04HroCA/7ChPrs4KdixW0l+t0I2bnqeP4vD+j3cqT7cPG67b4stoNI/u9XaYs6BNHdfUQpKhgMg2JCbzLarJTjP9utUrLOHV7yvwU5BG1GT8QOcbl43FekD0CKRzDC7bnvyS9t1jjuGVcvMet//kum/KpJ+8qn7xkN2HCi/+WGrXFNF9zj4QDDTwGX3Q+kh9Kn6WuQYmB2ZAPuxp2g9iY9L2dqvpw+0lWMTg9VRy9qW9mjfMx+YLszx6PSAnoSmq+zrFRbxZ9hUfVDRMzx+inQ2DZm8YCj0v8aFKRyY6wFZeJ8gWllAJ8nnzFcUq1M8Ktdi+8de/RooHv2UHMz73Q3vdbATtmo0URgTJW9sYd97GVjog/Cv/iQDDqpWe9YCItLY0AIFch0VkxMlvBny/uxRQcjG/wdDx/TLLmK9KtpaxsRTIYt6hHTUYHxDHbZrAnGPP5X4+8On8zIJPyNTfrwsy3Vmb4CcX/h6idGUjNoODvJe5AVd4uUL/KmSOhEkyMYBSEYpxMU3W5P7s7wwjaX21xCabfhwgtX/OLVjZgau+vp8Qrp6TTkoXUeWRrC50lV83RG1/xUEqhFqe9jXCuCoN/iSs9bCEUALdYy7r05TTt/wuH/mm6NxBVc29F; NAP=V=1.9&E=1bd9&C=7hbixTUEcyQYWOW9lfFddcOd4gQ84BTjk1Ktfh3LlfLwmPgctlfmjg&W=1; PPLState=1; SUID=A; WLID=pNzVJ0pTgNtKfHrXim6BxoJxGtfXp+IzyInfMuA/XORxpzeQmZ9ARzvY1jvGf+FVCmhE4fytRZWsBGlyZ3GHU0qAcZTWiJ045gHKyeXFYyA=; WLS=C=37c7151c18ed096f&N=%e5%9b%bd%e5%bc%ba; _U=1x-QDsoB1eQoOa5wJaPhjC8QzCKFfarf0aoKmI78luU1humCoS_iI5D3IaTTr9WU99WL-d2uu6WP0lx6zELHuCNtJHotuSuzPH9QZ8mZleigVyn1hfV4TN2aROQI1TU76e6w_MVqQK5I6aOWfoRbOMqIe7EoaOZrLk3siW3GD0sSqNBgMyRQ7bRjp83IRM8Lj07iEVgV9L5d12D3PuFWDvP_Th0oySLNvnD-ptFmX4ww; CSRFCookie=f13a6304-c47d-4213-a81a-90c453fcfb0f; SRCHUSR=DOB=20230410&POEX=W; MUID=266866C71676612924087428171060B5; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=1C8205C41DE247ABAC9332C71E76F7AE&dmnchg=1; _EDGE_S=F=1&SID=33E87B68CAAD65F61BAC6987CBCB6453; _EDGE_V=1";
Cookie = Cookie.replace(/[^\x00-\xff]/g, '');

//每次搜索间隔秒数
let sleep_sec = process.env.BingAutoSearch_sleep_sec || 5;

//HTTP proxy
let proxy = process.env.BingAutoSearch_proxy || "";

//User-Agent
let edgeUserAgent = process.env.BingAutoSearch_edgeUserAgent || "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.46";
let mobileUserAgent = process.env.BingAutoSearch_mobileUserAgent || "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1";

//搜索内容
const wordlists = process.env.BingAutoSearch_wordlists || ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"];

let isCN = process.env.BingAutoSearch_isCN || 1;


console.log("\nBing Auto Search\nVersion " + Version + "\n")


// 创建axios实例
let axios_bing;
if (proxy && isCN == 0) {
    const httpsAgent = new HttpsProxyAgent(proxy);
    axios_bing = axios.create({
        baseURL: 'https://www.bing.com/',
        timeout: 7000,
        headers: {
            "Cookie": Cookie,
            "Accept-Encoding": 'gzip, deflate, br'
        },
        withCredentials: true,
        proxy: false,
        httpsAgent
    });
} else if(!proxy && isCN == 0){
    axios_bing = axios.create({
        baseURL: 'https://www.bing.com/',
        timeout: 7000,
        headers: {
            "Cookie": Cookie,
            "Accept-Encoding": 'gzip, deflate, br'
        },
        withCredentials: true
    });
} else if(proxy && isCN == 1){
    axios_bing = axios.create({
        baseURL: 'https://cn.bing.com/',
        timeout: 7000,
        headers: {
            "Cookie": Cookie,
            "Accept-Encoding": 'gzip, deflate, br'
        },
        withCredentials: true,
        proxy: false,
        httpsAgent
    });
} else if(!proxy && isCN == 1){
    axios_bing = axios.create({
        baseURL: 'https://cn.bing.com/',
        timeout: 7000,
        headers: {
            "Cookie": Cookie,
            "Accept-Encoding": 'gzip, deflate, br'
        },
        withCredentials: true
    });
}


login();


// 判断是否登录 
var username = '';
var flag1 = 1;
var flag2 = 1;
async function login() {
    axios_bing.get('/', {
            headers: {
                "User-Agent": edgeUserAgent,
            }
        })
        .then(function(response) {
            if (response.status == 200) {
                // console.log(response.data);
                // console.log(response.headers['set-cookie']);
                username_temp = /<span id="id_n" title="(.*?)"/.exec(response.data);
                if (username_temp) {
                    username = username_temp[1];
                    console.log('已登录账号: ' + username + '\n');
                    login2();
                } else {
                    login2();
                }
            } else {
                console.log('未知错误');
                // console.log(response.data);
                // process.exit();
            }
        })
        .catch(function(error) {
            catcherror(error);
            if (flag1 < 5) {
                login();
                flag1++;
            } else {
                console.log('\n网络错误\n');
                if (notify) {
                    notify.sendNotify('Bing Auto Search', '网络错误');
                }
                status(-1, '网络错误');
            }
        });
}
async function login2() {
    axios_bing.get('https://rewards.bing.com/', {
            headers: {
                "User-Agent": edgeUserAgent,
            }
        })
        .then(function(response) {
            if (response.status == 200) {
                // console.log(response.data);
                username_temp = /email: "(.*?)"/.exec(response.data);
                if (username_temp) {
                    username = username_temp[1];
                    console.log('已登录账号: ' + username + '\n');
                    getPoints(1);
                } else {
                    console.log('未获取到登录信息\n');
                    getPoints(1);
                }
            } else {
                console.log('未知错误');
                // console.log(response.data);
                // process.exit();
            }
        })
        .catch(function(error) {
            catcherror(error);
            if (flag2 < 5) {
                login2();
                flag2++;
            } else {
                console.log('\n网络错误\n');
                if (notify) {
                    notify.sendNotify('Bing Auto Search', '网络错误');
                }
                status(-1, '网络错误');
            }
        });
}

// 主函数
var flag = 0;
async function main(Terminal, terminal, UserAgent) {
    await sleep(sleep_sec * 1000);

    ret(Terminal, wordlists[Math.floor(Math.random() * wordlists.length)], UserAgent);
    let loop = await getuserinfo(terminal);
    if (!loop & Terminal == 'PC' & flag == 0) {
        await main('Mobile', 'mobile', mobileUserAgent);
    } else if (!loop & Terminal == 'Mobile' & flag == 0) {
        await main('PC', 'pc', edgeUserAgent);
    } else if (loop & Terminal == 'PC' & flag == 0) {
        flag += 1;
        await main('Mobile', 'mobile', mobileUserAgent);
    } else if (loop & Terminal == 'Mobile' & flag == 0) {
        flag += 1;
        await main('PC', 'pc', edgeUserAgent);
    } else if (!loop & Terminal == 'Mobile' & flag == 1) {
        await main('Mobile', 'mobile', mobileUserAgent);
    } else if (!loop & Terminal == 'PC' & flag == 1) {
        await main('PC', 'pc', edgeUserAgent);
    } else {
        getPoints(2);
    }
}

// 获取积分
var Points_temp = 0;
var flag3 = 1;
function getPoints(flag) {
    axios_bing.get('https://rewards.bing.com/api/getuserinfo?type=1', {})
        .then(function(response) {
            if (response.status == 200) {
                let Points = response.data.dashboard.userStatus.availablePoints;
                Points_temp = Points - Points_temp;
                console.log('当前积分：' + Points + '\n');
                if (flag == 1) {
                    console.log('当前Rewards区域: ' + response.data.dashboard.userStatus.counters.pcSearch[0].name.substring(0, 4) + '\n');
                    main('PC', 'pc', edgeUserAgent);
                } else if (flag == 2 & username != '') {
                    if (notify) {
                        notify.sendNotify('Bing Auto Search', username + '\n当前分数：' + Points + ' 新增分数：' + Points_temp);
                    }
                    status(Points, Points_temp);
                } else if (flag == 2) {
                    if (notify) {
                        notify.sendNotify('Bing Auto Search', '当前分数：' + Points + '\n新增分数：' + Points_temp);
                    }
                    status(Points, Points_temp);
                }
            } else {
                console.log('未知错误');
                console.log(response.data);
                // process.exit();
            }
        })
        .catch(function(error) {
            catcherror(error);
            if (flag3 < 7) {
                getPoints(flag);
                flag3++;
            } else if (flag3 < 17 & flag == 2){
                getPoints(flag);
                flag3++;
            } else {
                console.log('\n登录失败，请尝试重新获取cookie\n');
                if (notify) {
                    notify.sendNotify('Bing Auto Search', '登录失败');
                }
                status(-1, '登录失败');
            }
        });
};

// 搜索函数
function ret(Terminal, q, UserAgent) {
    axios_bing.get('/search', {
            params: {
                q: q
            },
            headers: {
                "User-Agent": UserAgent,
            },
        })
        .then(function(response) {
            if (response.status == 200) {
                console.log(Terminal + ' search: ' + q);
            } else {
                console.log('未知错误');
                console.log(response.data);
                // process.exit();
            }
        })
        .catch(function(error) {
            catcherror(error);
        });
};

// 获取进度
function getuserinfo(terminal) {
    return axios_bing.get('https://rewards.bing.com/api/getuserinfo?type=1', {})
        .then(function(response) {
            if (response.status == 200) {
                try {
                    let progress = response.data.dashboard.userStatus.counters[terminal + 'Search'][0].attributes.progress;
                    let max = response.data.dashboard.userStatus.counters[terminal + 'Search'][0].attributes.max;
                    console.log('(' + progress + '/' + max + ')');
                    if (progress == max) {
                        return true;
                    } else {
                        return false;
                    }
                } catch (error) {
                    console.log('不存在 ' + terminal + ' 任务');
                    return true;
                }
            } else {
                console.log('未知错误');
                console.log(response.data);
                // process.exit();
            }
        })
        .catch(function(error) {
            catcherror(error);
        });
};

// 睡眠函数
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, Math.random() * ms + ms / 2));
}

// 错误处理
function catcherror(error) {
    if (error.toString().indexOf("AxiosError: timeout") != -1) {
        console.error("AxiosError: timeout");
    } else if (error.toString().indexOf("Error: aborted") != -1) {
        console.error("AxiosError: aborted");
    } else if (error.toString().indexOf("AxiosError: Request failed with status code 503") != -1) {
        console.error("AxiosError: Request failed with status code 503");
    } else if (error.toString().indexOf("AxiosError: Request failed with status code 500") != -1) {
        console.error("AxiosError: Request failed with status code 500");
    } else if (error.toString().indexOf("AxiosError: getaddrinfo EAI_AGAIN") != -1) {
        console.error("AxiosError: getaddrinfo EAI_AGAIN");
    } else if (error.toString().indexOf("AxiosError: maxContentLength size") != -1) {
        console.error("AxiosError: maxContentLength size");
    } else if (error.toString().indexOf("AxiosError: read ECONNRESET") != -1) {
        console.error("AxiosError: read ECONNRESET");
    } else if (error.toString().indexOf("Error: Client network socket disconnected before secure TLS connection was established") != -1) {
        console.error("AxiosError: Client network socket disconnected before secure TLS connection was established");
    } else if (error.toString().indexOf("TypeError [ERR_INVALID_CHAR]: Invalid character in header content [\"Cookie\"]") != -1) {
        console.error("TypeError [ERR_INVALID_CHAR]: Invalid character in header content [\"Cookie\"]");
    } else if (error.toString().indexOf("Error: socket hang up") != -1) {
        console.error("AxiosError: socket hang up");
    } else if (error.toString().indexOf("AxiosError") != -1) {
        console.error('AxiosError');
        // console.error(error);
    } else {
        console.error(error.toString());
    }
}

// 汇总
async function status(Points, Points_temp) {
    if (fs.existsSync('status.txt')) {
        let arr = [];
        let output = '';
        const rl = readline.createInterface({
            input: fs.createReadStream('status.txt'),
            output: process.stdout,
            terminal: false
        });

        rl.on('line', (line) => {
            if (line.indexOf('r_') != -1) {
                arr[/r_([0-9]*)/.exec(line)[1]] = line;
            }
        });

        await events.once(rl, 'close');

        let today = new Date();
        let now = today.toLocaleString('en-US');
        let temp = 'BingAutoSearch_MicroSoft_COOKIE1';
        let r = /_[0]*([0-9]+)/.exec(temp)[1];
        let gotcha;
        if (Points >= 9600){
            gotcha = '收菜!';
        } else if (Points > 0 ){
            gotcha = Math.ceil((9600 - Points) / 270) + '天';
        } else if (Points == -1) {
            gotcha = '';
        } else {
            gotcha = '';
        }
        arr[r] = 'r_' + r + '  ' + Points + '  ' + Points_temp + '  ' + now + '  ' + gotcha;

        for (const v of arr) {
            if (v != undefined) {
                output += v + '\n';
                fs.writeFileSync('status.txt', output)
            }
        }
    }
}
