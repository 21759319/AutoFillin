// ==UserScript==
// @name         问卷星
// @namespace    none
// @version      0.1
// @description  自动填写问卷星
// @author       小健
// @match        https://www.wjx.top/*/*.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    if($("div1")==null){setTimeout(function(){location.reload()},100);return;}
    var hash=[
        ["小明",/(姓名)|(名字)/],
        ["123",/(学号)/],
        ["123",/(电话)|(联系)|(手机)/],
        ["xx学院",/(学院)/],
        ["xx",/(专业)/],
        ["123",/(QQ)|(qq)/],
        ["男",/(性别)/]
    ]
    function $(a){return document.getElementById(a)}
    for(var i=1;;i++){
        if($("div"+i)==null)break;
        if(!$("q"+i))continue;//不为<input>类型则跳过
        var tit=$("div"+i).innerHTML;
        for(var j=0;j<hash.length;j++){
            if(hash[j][1].test(tit)){$("q"+i).value=hash[j][0];break;}
        }
    }
})();
