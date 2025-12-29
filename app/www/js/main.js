// 尝试获取当前父级 iframe 元素
let iframe = window.frameElement;
let targetURL='https://g2.igroutka.ru/games/6/murder/6qidqpxlp5b2ewkjwh3a8ggt0sg0cepi/';

if(iframe){
    iframe.sandbox ="allow-same-origin allow-scripts allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-downloads";
    iframe.src = targetURL;
    console.log('✅ 修改iframe成功！');
}else{
//飞牛APP因跨源（cross-origin)获取不了，则直接跳转
//window.location.href = targetURL;
window.open(targetURL, '_top');
window.alert(5 + 6);
}











