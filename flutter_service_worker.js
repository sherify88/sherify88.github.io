'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "abc934556d3c19baaaceda1e66aa9c7c",
"index.html": "cb76a5afa2003f814b4da6aca57247de",
"/": "cb76a5afa2003f814b4da6aca57247de",
"main.dart.js": "1eaff56dcbb634594d65e6c904e24910",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "75f1d1e8d9ea845ea993dbb41863107e",
".git/config": "637e60f35ec3194bd0bdafd551c89aac",
".git/objects/95/3ef1e31e3e43660e71778cd2033c7fbcf632e3": "ab24ef0fa55c90985c18ec6ea21b10fd",
".git/objects/95/ba0d9d13bdae4c68f7f9dbd2dedb81640bc0f5": "a2609d418461329a738359bf648fdb03",
".git/objects/59/8034fd4868fb3cd17cf82c12353afac025a8a6": "80fb6e0c28b5b6a480ae554694ec6691",
".git/objects/92/9c1977568ac126ea81e6d2a667e1e53209d6ee": "77216a54b7992623b2317bb1236915ff",
".git/objects/0c/d1d5244f9c773f56993567a358063089f2d34e": "134bff5ef75f5bf1ccbc9ea61e253271",
".git/objects/50/3a57edea12627b334c4fec9e5d0def9500cdde": "be838d08bef852fd0423b627a134ed48",
".git/objects/57/065d66345d03b878f4478aa074c9510c7b5364": "dbb1f81b5dbb97da6fdfe45b24483874",
".git/objects/03/93458e11b0873677f875b9d5e10b6ad47b8484": "7a333347c2b152f64cdf96b0131a4d36",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/5eaa3a6789370e27bdd8e71950fafaaa2c655e": "fd08f19fdd24deabfbf9bfae34405c4d",
".git/objects/04/26a804671e1d1430d4c4511afa4e909aee5c2d": "58784a69f671b15fbd1c949050661dc2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/a238c5382951f59c210afb784c03b7df958f61": "8ebbc4d10ee446998cb28a502286682a",
".git/objects/3c/21b44488334dc2da42173bbe570d830f1d1560": "7aa64c944f846701f7ca1d33e8db37ae",
".git/objects/3c/726ba78299a1e8c82fe7f93b1ac40a2b1ae2cf": "16cd22579a20d33e87553e028e0eadbc",
".git/objects/3c/a8038ba47558a21c61142f15e957cacb4addf8": "2a418dd084e1393a3a05d0e1ab00cfef",
".git/objects/51/f63e62e160b480e32b3e15d5e46ac147d3e4ea": "ec966e47d0837447216980149ecbb96c",
".git/objects/58/78c1b5982b9dee7d580044473568edf10a9b1b": "177de58db9970c9730dfc4a13e8a4511",
".git/objects/94/3ac24d76599551b57ac36c7c6f1958c6639f12": "2bbf21bed8c25305b2411470cb3e04a6",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/5a/e341f8d5b1bea9bb5a3771878fa38ae395ea8a": "a128ea34b1cd9761383a16495e001df9",
".git/objects/5f/d4895e53a9f48c1bf5bbe97f683e5ba556bb27": "b7fbc42adae36d07f38eec14e6358556",
".git/objects/05/60573d6080e4345b5e4dc3d82decd31d2c9a36": "5a217dbd76ec374f5a1d49c10441d437",
".git/objects/9d/74fa4edf09bd3c637fda5c9d7c14075e2bd18d": "05e921b0a2c089a5c84b622a05c415fe",
".git/objects/9d/7dbff2d65052e83a1e92c93537641da3e73cda": "30d6851bd2d297014c06c70725948090",
".git/objects/9c/fb65b7d91f96a0652a0aaecd86628fa67ab711": "9f2bdadd968bff56393d36f267bfc14f",
".git/objects/02/992576ff983e4a444dddc9d0a56477b77edc35": "a10c51be3cec716ba9b4b4f563f9ec9d",
".git/objects/a4/5e8ed2911cb2fe7fc6279bac1ff5313155c9c5": "5538ed4285841874600700caa1da673b",
".git/objects/b2/c68a0f8d11b53971d7e4894f5f0a870be61e63": "bdd398d92fcde24c93075742a6d9b23b",
".git/objects/b2/690ca4732e746a53aa36fe2480af83f2642645": "907355cd58ceca4ee2f0213ba44eeb6d",
".git/objects/d9/9aa8e7d86fcc113fa077c72a29e6f798c0b3cd": "209cfa894282a02a688e0d34f4f85f92",
".git/objects/d9/4833e26ae5d5ba8b0b7f0d8cd249054d4c0ab7": "850f3c2cd43a3faae2b8c4c78e6b3f47",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/d0/591bc3d3cf581527ef0abd60aee933d903f1c0": "ad6011280fae394a2adeb989328b5850",
".git/objects/be/a55b1535f63e400c14b7ea4c71a8bf5385119f": "e4edff808fb0a418d4f28759d2a2c8de",
".git/objects/be/b02527bbe5480156f8107d0ce31b6d2bfe9a74": "d755825f7840e36f17cc5c3111380b7f",
".git/objects/be/d2e286d8b021fa9496abd5b9d73fe14519b97e": "36eaf5808c81e111589daf44dc62409e",
".git/objects/df/097b9bf2aff4307d9327ff43ed46eab251c53d": "da710cde4dedd85f215c05a097a73e9c",
".git/objects/da/4f1073b3f80335816792433c00fc27cd669f63": "0ce1eac972ab6319f973930d0f588450",
".git/objects/b4/3a0516d6f6a82f62397021a696ac8b8c858684": "9135a7e54dd8d3586e3a4e4f523ada6d",
".git/objects/a2/d20eafdf47800ff454c2efac017d2314dd68b9": "7208cf41f2c381420fda7153056d0162",
".git/objects/a5/06eb6c0d210f1bf74870e33f70b69211a61f30": "387c97b3ea636caf6e0f3956e610aad4",
".git/objects/a5/1b35cb373d976ba7a7852e9cbac7b4925974f3": "d3cef4b8272e4a744cc5c0d2e9957b3e",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/c21ace80cb0b3fd4ed359de40fc55acb42df21": "9aecb3429eaf8507e8694fbb1cfd2192",
".git/objects/d8/7f01dddea95f69157f4aa45fd765e10c7250fd": "05630634f7b9c42d111c5424f6eabf87",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/7b6dd445fb1ced2d09707a73d242ccfc94b99e": "de1c6bb7b84354290c437bd131b0150a",
".git/objects/e2/b2ee0c874ba5c447dff47f6e28d69ceaa7e491": "66529137e6444961e6ce3ff4aef90917",
".git/objects/f4/fe7c82e6e7715e1a53e52c6d56319c36ba72dc": "439ef669000622549149b289e849eda6",
".git/objects/eb/de5caea3f5b6e5a6695ff3dcb6eb8c1b11d65b": "d4e839a4b8895d8c65a247b6eca0e9a2",
".git/objects/eb/afd094db411af05442a3ac25605b40573ac409": "2c55b4c6e8cf9a2f4874016d0d06b8a7",
".git/objects/c7/2869b9bf51c90c4bfa78cea9f9b8dbc9187463": "514467cf300b20f56d7a978cc4a5cfb0",
".git/objects/ee/9d0556a3e564f4f2a568a92d752649b4e20803": "0f7e3446a77a819267ac111f586638a3",
".git/objects/ee/d70ab5422020b2a093a9c29a860732efc0124f": "f70b786c590c315733b9d6346edae038",
".git/objects/c9/78406536fdd4242883e7a5dd1e00b75d43b258": "46218ab67b85b1a7fb5bd60f8fa63763",
".git/objects/fc/1033c6d12f13b6d19443aff03006ce219ffbe3": "e1413bfda2b889501ec306b54e68af79",
".git/objects/fc/9aedc9a88ff80bf051bd7da47ae479d6061477": "14d6404d229e7f3c21047b1ca2e8412d",
".git/objects/fc/80b6595397e9fa077bad5545f1e1ae6f12b8b8": "bdf8f6546999f4253f3d9ba0890a858b",
".git/objects/f5/0bd4b065dc7f03e7fc4fa2ffaadf368619fccf": "fe9906bcfdf46bcc2bb5467cfc977c60",
".git/objects/e3/e449ea697e046e76e66650a50588b06d57b300": "0b287b6dbec1d8b23c392ac58f9c28d5",
".git/objects/e3/979c7d2b37d9018ec5f5dba78e07b20345143f": "572d367ecada3541a938f3625720c559",
".git/objects/cf/ef60eb0fe7014bba6a2b60016f842c553dc147": "f42aba4c242d3d4227c58f2bfd2b1dba",
".git/objects/ca/2f9e4bd30aa2c8cb009b1e5854e6a2149bb1d0": "034eaf8948330ce9f03dd5ca5365ff14",
".git/objects/e4/0813977a33bd835afb574784eb802993d66c63": "d1720d852f086b8bbf6a73b0f3c8904a",
".git/objects/fe/0e9fd98f1fe45c67981a5de6d695e42c98828c": "86b3910e5e24f41b8a03a2b9dd2b4bba",
".git/objects/fe/4a67b4b68ffd712c132e32122d76694fc24bee": "83e115bfdea3e773c2f3a5722668bab9",
".git/objects/ed/1f7c759747c1d0c7cec01449d0f72428417c0c": "f94a756ad97f6be04359d323abaada6a",
".git/objects/c1/8139a7ccfa69cd4db431352ded5a3b15bc54a6": "0eb6aeed3cecbfed372df39430f83ad4",
".git/objects/20/c0ff7a2cc339677a4ad9b9787a05cb484f7ebf": "160ddec5ec7c98b51d90b8fa00b1d246",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/5de6bbd9093e8c0fdd3bcfa955b0bdef7c25b3": "6052832c6ade61cc7fe115c2aa224929",
".git/objects/4b/d7f1449fd0a3eeb2f711cd4168fce9377644d4": "64136164d00a8a9aeb110c959e3ad291",
".git/objects/11/7b90d995659f0957f911c62cf0f391742a3ac6": "7bcd364c0813b4097a410f78ae7c3812",
".git/objects/29/bc5d5b96ad3216b256452bcc3d731c37a79484": "f15efaedb1007aa2d53bc166bbea3676",
".git/objects/89/8d1635d025bb2916fb08fed85c18fdea194043": "07fa1fc679c0f4996187eaaa827768a5",
".git/objects/45/d8bdb1e4655d17781245d55e5c178765972064": "42cb700bd8b4fef2cb3bf169c78952f4",
".git/objects/73/cff556b22655e4bbc630b52811dcee66013705": "38dc54ed6901d4aaa8f5cfa3b5a004c9",
".git/objects/74/8d09e3f452421b3483e5534565ac6d8eb24021": "1a01471df11a690e8141cdd953c0daa5",
".git/objects/1a/0720216578a7a06c9d4449ca7f8248fe39a720": "dd1edaf068ecf81fb2f17b71279ee0eb",
".git/objects/28/2c75383b31bc04615c6f5cf8344dbf0fa3cd5e": "563bdb37f1729cd132da1f28e6ea4fa6",
".git/objects/17/f427ac87f1fc5171a7964f608720cde88994f5": "1075aa8adfbcd6a6d8b7b38dd8b2137f",
".git/objects/8f/b4cbd9f9f5d5bec01e9737ea6065b22b714204": "df6a100abc6090a03b56822027ac4dca",
".git/objects/8f/c73d381e2cd205f54ffd8ef648fcab8d8840f9": "517aaa09f410ebd9e982e2a315d7f106",
".git/objects/8a/a88126995dc45d609c75714e26236d4ccb2c63": "c225d43e50801578b20af803bc2a745e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c5645936d7481f5f5c84cf496ddc13f2172cce": "71b002fd4c442bbcbc1750f080e34074",
".git/objects/19/4874a7c302d0eb7b9a5ee988777a8bfcb94bd2": "abcaaafdd7892e387f522fc28a32c435",
".git/objects/19/f71876dc295dec2f96e6fc6ed208e442d40093": "21a2354d10c8cd1dd9dbea039b4c80ac",
".git/objects/19/c6433dab533af55cddf51130bdd35f7a5c930a": "1014feb375276e4a81a277942664f1e1",
".git/objects/21/0118a6f551fa33010fe3a0ab0b60f4fcd5d06d": "e00792c6abaa972a605e63d435aa60e1",
".git/objects/21/4d59af2d6d6b08b3ea3889267a505da6655208": "f0f4ced04966099586a2deec2709fd0b",
".git/objects/4d/68ff3475c03c6a10339d129922c035fa78d2a5": "a6e3c4d5605dd8c4af3382d0a72cc165",
".git/objects/75/0d9291c41e1adac3eeb50aee6b6adec7a7b556": "83098850585f63ea29d5069ebb5ebfd7",
".git/objects/72/676dc55bf518d51de7b2af9f241872b093e89f": "4e813204d9ab124725c18fd5413529c0",
".git/objects/44/b8f9a5ef265a76cd81faae7f5e18365c2b4b1b": "beb042a21d9b6423ca66fe9718230edf",
".git/objects/88/78e3dbd29a22995752a8e5e6707ac5643b7ef3": "9cf10f50514b13adc725aa96cb538124",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f4d40f3514ebdb30548f32bd45ca63edbea8b5": "55e1f7cead853cc8a755a19c0c5fb7b9",
".git/objects/6b/7a49547333cdcf289399f7e78636967fc14d07": "7f7835d929214893203e9d3fa3bae912",
".git/objects/07/8214d4b0ee49fcd0405fb9df6d6cfe53cf242d": "b687063168c82505f74dfd4b7965af97",
".git/objects/07/0b607355bc56be6b6854bd3633a6c5880aeb07": "935012365424cf6fc823431440775133",
".git/objects/38/627696c43925b9be21dbfef558e493f9f0b7c7": "5a7f5e7d0bcdf3ca95fecf09fd1e9907",
".git/objects/6e/148ba75768bf74b81a80184c7bb1c911c54aec": "9886e1c28d5499f703079d7421bd6825",
".git/objects/9a/9f1307dc27694cc214b787def3115222a21d12": "cdabe9801a2ac481766347cb2b21a18e",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/5d/4b470b57b00398cfb8fc4b25b52a6c8c98e657": "e132a7950c06ffac75895e1c64568618",
".git/objects/65/a835b5941538647625b3f7b3f869deeccd12e4": "24119f072573c8f831b13bf43df09165",
".git/objects/54/747bce96bef7506967f2566c327a5c1b2168dc": "a12a6755919fae8b4f2a8a3807a35e4d",
".git/objects/53/6cdd379f5dfe19c3635e834ee3c34c1c1c454e": "382b67e51da7d48ecb1a2be806592f37",
".git/objects/3f/0cab27ee8128a6779f48131d568f1f91119907": "41fed328db67b51c3a727c86cc7e00bf",
".git/objects/5b/afa08d54a3d9c69ff6171d32312acd6255d9ff": "0d3072be1b261aa0589b213faf0d9fcb",
".git/objects/01/6443f96a1f7edc8a553a7c4343ea82e273e4b8": "698f1a23a604017dc59a73281188b80f",
".git/objects/39/56e1a13c3cd833e200f3c517a55d83941f6ecf": "f4e0ba3d42cda217649c22bf331572dc",
".git/objects/55/b3be5758306de3385ba3642ac9d43aa3feecf5": "354f796bf59c22cd64973af48768430a",
".git/objects/97/69d74c522a1692768d713b2c30cc37d16161fd": "9460b1b2a0c4c64f5d6c650ea4013652",
".git/objects/90/7b75a0598733970cf7aed7d51dc9b0f6748f43": "7b03b7f34bbd3997acf173fc5e7e8812",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/ba/d196434d5c147cd15b7a6f576301bb96063077": "782a2597a702e6310868bfcdb129b5a5",
".git/objects/ba/392fb5f2b5fb52b9f666bdd9f864244b2fa371": "856a8b8c8a2562a79d465aeefa15c0e4",
".git/objects/a0/e1ee7ba284bbeae90d876b5e95d388924a3ced": "6269a7c4316ca29ce164cb34bce88eba",
".git/objects/a0/e753d5d3cd633f767f98cd93bd8d34726fc0cc": "94bbc900b592d036e39e7c3e7ae9f5d2",
".git/objects/b8/73a51ab2344029abd6407c64ef57bbecbcfb65": "57db06014c008d4fa788ef076b244402",
".git/objects/dc/ce0afcf45ad58f6334e533300284d06295a8fa": "422aaf829c8ce5486949dea8e887cdc6",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/a9/47887e9e6c8c1c0a11b0f4afecf4673570ac79": "2adcecc180017102f64f965f576efeea",
".git/objects/a9/e82e4b43606eeaa8aef6e9ec663aa81fa2f9f6": "f6f29ee029c70c89c0085d3429232803",
".git/objects/a9/038d9236dc20debffcd2875607f5ed0d6f1da6": "fefe112fd6d1b2c3cd55b2c72703fc0c",
".git/objects/d2/c4b15e384f6147f648c02fe7e1493388f6d488": "cda1d6eceb2e61e03bde60b56c62c098",
".git/objects/d2/25c287a3dc5abf8087e770d8f910e5076d35a7": "2a34f16b1c1ecf0ce638b375e97fae8d",
".git/objects/af/2090acc18b5530028da70a6826be2a231347da": "22bc91d1fe531625f4be8cfd1e32184c",
".git/objects/af/d0da1812419a0b8ba8f06576e9d227e28a55dc": "77293a1ffca425ac5ebba3a71f89be09",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/dd9d880f93608fdff01573cf36da7c8682ceee": "e47af9314fe12d8698eea92301a0ba08",
".git/objects/b9/3db843b966e8f952013b2a9c2ce3f5b0d4d456": "1f8c1d4466dc86e31be2db407b622b81",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/c116439d6c76654c62047e80422d01d3092693": "42f59bc1e7b3cc562a34e0cecf4dc319",
".git/objects/ef/b28c48e2ed9f205b6f6d7dc09c7c7b31ef7558": "a7ef7ea4229c894db0977213ce9e364d",
".git/objects/ef/1c69f5e7dc598d9767d63bc8f0552a7f470b20": "ca75b096b25f25b0c463cbdc5716184c",
".git/objects/ef/a8b7fd4db1b231b8a6636fbe8df3382ac04c22": "f19893eca5cca0f7a3e3ae8f0448ecd4",
".git/objects/ef/3db0ee12528fe6b027096fa53ff93f994b9b23": "3d1a7967074d93dcd78b50eddf68e515",
".git/objects/ea/e753f256e02ade5dc668f96083446c652602dd": "7ae159ad94b38374577ba3a56142dae3",
".git/objects/ea/b3556b45f7363628e36ada57806933f8e0b0d1": "0351f91d2a41fac0c63db7de8af1dc7c",
".git/objects/e1/9f6ba14b671b460e0cf2fe713687153425f446": "e60599479c095ed6dd1069c4f080aeaa",
".git/objects/cd/7c50b6779741e3d5c1d326a4065e0e1d25e80d": "3f7d55c6fc8ea3dd3838a353536b5353",
".git/objects/e6/8ddd7721b19ee89ce41e6b510be9d22770a679": "9b43c2da480c123ee1578ec29aa9454d",
".git/objects/f7/60964567f5f9320282f1f4c03bc1c9e00ee727": "ca9e42af414aeeb74728579078ce2818",
".git/objects/fa/b0542993c5d9ae89c30c1a88d88e7589816e24": "3428aea3c8e63e64f268cbfa84eaf5bb",
".git/objects/fa/b3a213d17a42ccac18b9f90f8bdb7043591a46": "79a71565b04e63759e772e6c3719f51b",
".git/objects/ff/094ecbcdb75f1173a8f3176ff262213c1ef98a": "496d12e2a15999995de6422f8c72e942",
".git/objects/c2/6b2215693af0811f3c5a5f68182eda30f82739": "4518bd56aec38fd99b747cc689a72cd3",
".git/objects/c2/111bda50d68c9d32632e6de3f9333511f47ce1": "e1cd1ad089c6b3057e5f8b0e0a449b35",
".git/objects/f8/1a8165a1f06e510f60ff7a926a27fa86fb74c5": "55cc75b1d3bec38e3b77252f78d47b2d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/c337f35050bd049de3af116f9330cd1761cbed": "62cf0486e81a75d459b219e3471dc8b7",
".git/objects/1b/1776e985d56c3a8dd7c6009d516c01dfa418be": "d4c27326ed31034f6fdb7c5af21b4742",
".git/objects/1b/3508e3b6463faa98d53e066aaafc405d95f802": "a2e265e0256e15abfb5d2191c6850289",
".git/objects/1e/8c4753659dadc38065ab285b1b5c77b52dcc1b": "7586e1489d66c672a41841725c72eef6",
".git/objects/8d/a79842aeb18aa2b131c25a80f02f444c09f265": "c6541fcf465fff98f0f26d5be8dda6a6",
".git/objects/12/81583856bdaafbb52cabacc554239ff026afa1": "36bdef7eba7b697f4f76667ef8f38aff",
".git/objects/85/543eedd16d5c20cfc732dac9a5f3a03e97e244": "b66ee78586923bc9ed168729a05c062f",
".git/objects/40/cef897746370a4b3407d2364316e58cc076ca6": "e2cba2b879680906f42db9a4598ee1b5",
".git/objects/2e/d15eafd94d6e547b0cc536fae1187081bbc1d2": "e241573fa68c0bda8460edefe0113d88",
".git/objects/7a/e92005d1c18b3fec4ac1f5b7a0b26a671830d9": "bd328d591556e27015b2b242335439d9",
".git/objects/25/58629421d11da728f787b5ee62afbf9ac449ce": "942df9df0535af7832e0fda4f570b25f",
".git/objects/25/8c410cc3f16d3ef7cead801dcebebf6b01b787": "639d8e964bf5b4d22f8c2cbfe48ff01e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f7035c936bd27cb00b845524696a6a5a",
".git/logs/refs/heads/main": "89a7ca03f2b10dfa92c7c4f026f67f61",
".git/logs/refs/remotes/origin/main": "793af671993eaed60a220a6f65a2d89e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e795b0591e4de392b2c877adefa740a2",
".git/refs/remotes/origin/main": "e795b0591e4de392b2c877adefa740a2",
".git/index": "65bb48b8bbadf899554a4f141bf726e0",
".git/COMMIT_EDITMSG": "8ebd87aab0d8344adaf2a9760b19d747",
"assets/AssetManifest.json": "2d069b2bb95e784f7393b9a99b113025",
"assets/NOTICES": "16569064c6b62d2fbbcd0f6867daeeb2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/reserved_point.png": "b61d0ee6c5a85fa7ee01cab867ea1a62",
"assets/assets/images/marker_pos_4.png": "3dd08f88c36a5ab41bc3d100b6783629",
"assets/assets/images/marker_pos_16.png": "4c82827a42f47a51c74b1e340c227640",
"assets/assets/images/marker_pos_17.png": "784020b6f1b2a7132f104eb219769bda",
"assets/assets/images/english_flag.png": "b015d31c08a32886633b0b87cdb882d0",
"assets/assets/images/marker_pos_5.png": "0997902c0337197cac13065cb6846d88",
"assets/assets/images/marker_pos_7.png": "2809844781f91fe34e2ac5aa70fe090f",
"assets/assets/images/marker_pos_15.png": "9a313b7bfc6e5af5c29cb90e4ccd3628",
"assets/assets/images/marker_pos_14.png": "66ce60b79b2f46897ae982eccced2b1c",
"assets/assets/images/marker_pos_6.png": "c0abf8d20119ca6e5199425c13b5358b",
"assets/assets/images/marker_pos_2.png": "29965776a9924131e84ca9581786e327",
"assets/assets/images/marker_pos_10.png": "2fc1ec8f348acbd9838ce7b72149157b",
"assets/assets/images/marker_pos_11.png": "4ff01e001c7364c5dcae8192377f3279",
"assets/assets/images/marker_pos_3.png": "98a99d3fabdf6e72d7890fafde467f84",
"assets/assets/images/marker_pos_1.png": "c28efa6a6b4472c66bdacfc87a5f7f59",
"assets/assets/images/money_vector.png": "65de818f3b4262dd78827a3e94de99a0",
"assets/assets/images/marker_pos_13.png": "950931c1017f9f11cdc39bc6f749b7cd",
"assets/assets/images/marker_pos_12.png": "d963dbf17391ad884db70c3240ace301",
"assets/assets/images/warehouse_icon.png": "4dca7c5311ee1a9bd34e220edd4d5e7f",
"assets/assets/images/marker_pos_20.png": "6d404b5bfe2b09159edb469225d247c4",
"assets/assets/images/logo.png": "6ef39a71c50805cc974509d449c13d96",
"assets/assets/images/marker_pos_19.png": "13fa1bcb255e14666a25c2218e5637e9",
"assets/assets/images/marker_pos_18.png": "a584af41e6ed530e3a988914bb1fbad6",
"assets/assets/images/marker_pos_8.png": "53785a36a43a18620fb760c71b675147",
"assets/assets/images/marker_pos_9.png": "091b4b1949a454bfa1c8a02d4a21dd62",
"assets/assets/images/green_marker.png": "588786428f414218930b53b84c8c9587",
"assets/assets/images/survey_marker_blue.png": "50a60d0b6239e52985937e76034bc83c",
"assets/assets/images/marker_for_merchant.png": "37d9f07086e978091ebe58d54017f086",
"assets/assets/images/gold.png": "0c46416777a233bf3eed2e99d9683e7f",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
