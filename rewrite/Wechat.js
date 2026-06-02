/*
微信公众号文章底部广告过滤
原始脚本：NobyDa/Script QuantumultX/File/Wechat.js
用途：配合 Quantumult X rewrite，处理 mp.weixin.qq.com/mp/getappmsgad 响应体
*/

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)});
