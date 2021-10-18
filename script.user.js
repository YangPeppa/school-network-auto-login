// ==UserScript==
// @name         西南石油大学校园网（深澜）自动登陆
// @namespace
// @version      0.1
// @description  仅仅提供西南石油大学校园网的保存密码及自动登陆。
// @author       yangl
// @match        http://172.16.245.50/*
// @icon         https://www.swpu.edu.cn/__local/1/18/7A/9B8BCCC340CAC9008E20432670E_D01F5F6D_DE7D.jpg
// @icon64URL    https://www.swpu.edu.cn/__local/1/18/7A/9B8BCCC340CAC9008E20432670E_D01F5F6D_DE7D.jpg
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    //用户自定义
    var usr="202122000552@stu"//账号
    var pwd="252439"//密码

    //↓重要代码，请勿修改。↓
if (usr === "这里填账号" || pwd == "这里填密码") {
    alert("请去用户脚本管理器中，找到此脚本的第 13、14 行代码，添加自己的账号与密码");
} else{
		document.querySelector("#username").value=usr
		document.querySelector("#password").value=pwd
		document.querySelector("#login").click();
      }
})();
