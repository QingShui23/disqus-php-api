!function(e){function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){},function(e,t,a){"use strict";function o(e){var t={prefix:"",suffix:"前",seconds:"几秒",minute:"1 分钟",minutes:"%d 分钟",hour:"1 小时",hours:"%d 小时",day:"1 天",days:"%d 天",month:"1 个月",months:"%d 个月",year:"1 年",years:"%d 年"},a=function(e,a){return t[e]&&t[e].replace(/%d/i,Math.abs(Math.round(a)))},n=document.querySelectorAll(".timeago");for(var i in n){var c=n[i];"object"==typeof c&&(c.innerHTML=function(e){if(e){e=e.replace(/\.\d+/,""),e=e.replace(/-/,"/").replace(/-/,"/"),e=e.replace(/T/," ").replace(/Z/," UTC"),e=e.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),e=new Date(1e3*e||e);var o=new Date,n=.001*(o.getTime()-e)>>0,i=n/60,c=i/60,m=c/24,s=m/365;return t.prefix+(n<45&&a("seconds",n)||n<90&&a("minute",1)||i<45&&a("minutes",i)||i<90&&a("hour",1)||c<24&&a("hours",c)||c<42&&a("day",1)||m<30&&a("days",m)||m<45&&a("month",1)||m<365&&a("months",m/30)||s<1.5&&a("year",1)||a("years",s))+t.suffix}}(c.getAttribute("title")||c.getAttribute("datetime")))}setTimeout(o,6e4)}function n(){this.init()}function i(){this.imagesize=[],this.init(),this.box=document.querySelector(".comment-box").outerHTML}Object.defineProperty(t,"__esModule",{value:!0});var c=a(0),m=(a.n(c),document.querySelector('[src$="disqus-api.js"]').src),s={apipath:m.substring(0,m.lastIndexOf("/"))+"/api",origin:location.origin},l={title:document.title,url:location.pathname,desc:document.querySelector('meta[name="description"]').content};document.getElementById("comment").dataset.forum;if(n.prototype={init:function(){this.load();var e=document.getElementsByClassName("comment-box"),t=this;"true"==t.logged_in?[].forEach.call(e,function(e,a){e.querySelector(".comment-form-wrapper").classList.add("logged-in"),e.querySelector(".comment-avatar-image").setAttribute("src",t.avatar),e.querySelector(".comment-form-name").value=t.name,e.querySelector(".comment-form-email").value=t.email,e.querySelector(".comment-form-url").value=t.url}):([].forEach.call(e,function(e,t){e.querySelector(".comment-form-wrapper").classList.remove("logged-in")}),localStorage.setItem("logged_in","false"))},load:function(){this.name=localStorage.getItem("name"),this.email=localStorage.getItem("email"),this.url=localStorage.getItem("url"),this.avatar=localStorage.getItem("avatar"),this.logged_in=localStorage.getItem("logged_in")},clear:function(){localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("url"),localStorage.removeItem("avatar"),localStorage.setItem("logged_in","false"),d.init()},submit:function(e){if("false"==d.logged_in){var t=e.currentTarget.closest(".comment-item")||e.currentTarget.closest(".comment-box"),a=t.querySelector(".comment-form-name").value,o=t.querySelector(".comment-form-email").value,n=t.querySelector(".comment-avatar-image").getAttribute("src"),i=t.querySelector(".comment-form-url").value;if(!/\S/i.test(a)||!/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i.test(o))return void alert("请正确填写必填项");localStorage.setItem("name",a),localStorage.setItem("email",o),localStorage.setItem("url",i),localStorage.setItem("avatar",n),localStorage.setItem("logged_in","true"),d.init()}}},i.prototype={init:function(){this.getlist()},form:function(){var e="";u.emoji.forEach(function(t,a){e+='<li class="emojione-item" title="'+t.title+'" data-code="'+t.code+'"><img class="emojione-item-image" src="'+t.url+'" /></li>'});var t=document.getElementsByClassName("emojione-list");[].forEach.call(t,function(t,a){t.innerHTML=e});var a=document.getElementsByClassName("emojione-item");[].forEach.call(a,function(e,t){e.addEventListener("click",u.field,!1)});var o=document.getElementsByClassName("comment-item-reply");[].forEach.call(o,function(e,t){e.addEventListener("click",u.show,!1)});var n=document.getElementsByClassName("comment-form-textarea");[].forEach.call(n,function(e,t){e.addEventListener("focus",u.focus,!1),e.addEventListener("blur",u.focus,!1)});var i=document.getElementsByClassName("comment-form-email");[].forEach.call(i,function(e,t){e.addEventListener("blur",u.verify,!1)});var c=document.getElementsByClassName("exit");[].forEach.call(c,function(e,t){e.addEventListener("click",d.clear,!1)});var m=document.getElementsByClassName("comment-form-submit");[].forEach.call(m,function(e,t){e.addEventListener("click",d.submit,!1),e.addEventListener("click",u.post,!1)});var s=document.getElementsByClassName("comment-image-input");[].forEach.call(s,function(e,t){e.addEventListener("change",u.upload,!1)})},focus:function(e){var t=e.currentTarget.closest(".comment-form-wrapper");t.classList.add("editing"),t.classList.contains("focus")?t.classList.remove("focus"):t.classList.add("focus")},field:function(e){var t=e.currentTarget,a=t.closest(".comment-form").querySelector(".comment-form-textarea");a.value+=t.dataset.code,a.focus()},emoji:[{code:":grin:",title:"露齿笑",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f601.png"},{code:":joy:",title:"破涕为笑",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f602.png"},{code:":heart_eyes:",title:"色",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f60d.png"},{code:":sweat:",title:"汗",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f613.png"},{code:":unamused:",title:"无语",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f612.png"},{code:":smirk:",title:"得意",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f60f.png"},{code:":relieved:",title:"满意",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f60c.png"},{code:":wx_smirk:",title:"奸笑",url:s.apipath+"/emoticons/2_02.png"},{code:":wx_hey:",title:"嘿哈",url:s.apipath+"/emoticons/2_04.png"},{code:":wx_facepalm:",title:"捂脸",url:s.apipath+"/emoticons/2_05.png"},{code:":wx_smart:",title:"机智",url:s.apipath+"/emoticons/2_06.png"},{code:":wx_tea:",title:"茶",url:s.apipath+"/emoticons/2_07.png"},{code:":wx_yeah:",title:"耶",url:s.apipath+"/emoticons/2_11.png"},{code:":wx_moue:",title:"皱眉",url:s.apipath+"/emoticons/2_12.png"},{code:":doge:",title:"doge",url:s.apipath+"/emoticons/doge.png"},{code:":tanshou:",title:"摊手",url:s.apipath+"/emoticons/tanshou.png"}],verify:function(e){var t=e.currentTarget,a=t.closest(".comment-box"),o=a.querySelector(".comment-avatar-image"),n=a.querySelector(".comment-form-name");if(""!=n.value&&/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i.test(t.value)){var i=new XMLHttpRequest;i.open("GET",s.apipath+"/getgravatar.php?email="+t.value+"&name="+n.value,!0),i.send(),i.onreadystatechange=function(){4==i.readyState&&200==i.status&&("false"==i.responseText?alert("您所填写的邮箱地址有误！"):o.src=i.responseText)}}},post:function(e){var t=e.currentTarget.closest(".comment-item")||e.currentTarget.closest(".comment-box"),a=t.querySelector(".comment-form-textarea").value,n=t.dataset.id?t.dataset.id:"",i=(new Date).toJSON(),c=t.getElementsByClassName("comment-image-item"),m=[],r="";if([].forEach.call(c,function(e,t){m[t]=e.dataset.imageUrl,r+=" "+e.dataset.imageUrl}),d.name||d.email){if(0==m.length&&""==a)return alert("无法发送空消息"),void t.querySelector(".comment-form-textarea").focus();var p=a;u.emoji.forEach(function(e,t){p=p.replace(e.code,'<img class="emojione" src="'+e.url+'" />')}),d.url=d.url?d.url:"";var g={url:d.url,name:d.name,avatar:d.avatar,id:"preview",parent:n,createdAt:i,message:"<p>"+p+"</p>",media:m};u.load(g,u.count),o(),a+=r,u.message=a,n?t.querySelector(".comment-item-cancel").click():(t.querySelector(".comment-form-textarea").value="",t.querySelector(".comment-image-list").innerHTML="",t.querySelector(".comment-form-wrapper").classList.remove("expanded","editing"));var f="thread="+u.thread+"&parent="+n+"&message="+a+"&name="+d.name+"&email="+d.email+"&url="+d.url+"&link="+l.url+"&title="+l.title,v=new XMLHttpRequest;v.open("POST",s.apipath+"/postcomment.php",!0),v.setRequestHeader("Content-type","application/x-www-form-urlencoded"),v.send(f),v.onreadystatechange=function(){if(4==v.readyState&&200==v.status){var e=JSON.parse(v.responseText);if(0===e.code){var t=document.querySelector('.comment-item[data-id="preview"]');t.parentNode.removeChild(t),u.count+=1,document.getElementById("comment-count").innerHTML=u.count+" 条评论",u.load(e.response,u.count),o(),u.form()}else if(2===e.code){if(e.response.indexOf("email")>-1)return void alert("请输入正确的名字或邮箱！");if(e.response.indexOf("message")>-1)return void alert("评论不能为空！")}}}}},load:function(e,t){e.url=e.url?e.url:"javascript:;",e.createdAt=new Date(e.createdAt).getTime().toString().slice(0,-3);var a=e.parent?{name:document.querySelector('.comment-item[data-id="'+e.parent+'"]')?'<a class="at" href="#'+document.querySelector('.comment-item[data-id="'+e.parent+'"]').getAttribute("id")+'">@'+document.querySelector('.comment-item[data-id="'+e.parent+'"]').dataset.name+"</a>":"",dom:document.querySelector('.comment-item[data-id="'+e.parent+'"] .comment-item-children'),insert:"beforeend"}:{name:"",dom:document.querySelector(".comment-list"),insert:"afterbegin"};e.message=e.message.replace(/(.{3})/,"$1"+a.name);var o=e.media;e.media="",o.forEach(function(t,a){e.media+='<a class="comment-item-imagelink" target="_blank" href="'+t+'" ><img class="comment-item-image" src="'+t+'"></a>'}),e.media='<div class="comment-item-images">'+e.media+"</div>";var n='<li class="comment-item" data-index="'+(t+1)+'" data-id="'+e.id+'" data-name="'+e.name+'" id="comment-'+e.id+'">';n+='<div class="comment-item-avatar"><img src="'+e.avatar+'"></div>',n+='<div class="comment-item-main">',n+='<div class="comment-item-header"><a class="comment-item-name" rel="nofollow" target="_blank" href="'+e.url+'">'+e.name+'</a><span class="comment-item-bullet"> • </span><span class="comment-item-time timeago" datetime="'+e.createdAt+'"></span><span class="comment-item-bullet"> • </span><a class="comment-item-reply" href="javascript:;">回复</a></div>',n+='<div class="comment-item-content">'+e.message+e.media+"</div>",n+='<ul class="comment-item-children"></ul>',n+="</div>",n+="</li>",a.dom&&a.dom.insertAdjacentHTML(a.insert,n)},getlist:function(){var e=new XMLHttpRequest;e.open("GET",s.apipath+"/getcomments.php?link="+encodeURIComponent(l.url),!0),e.send(),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var t=JSON.parse(e.responseText);if(0===t.code){if(u.thread=t.thread,u.count=t.posts,document.getElementById("comment-count").innerHTML=t.posts+" 条评论",document.querySelector(".comment-tips-link").setAttribute("href",t.link),document.getElementById("comment").classList.remove("loading"),null==t.response)return;t.response.forEach(function(e,t){u.load(e,t)}),o()}else if(2===t.code){var a='<div class="comment-header">';a+='    <span class="comment-header-item">创建 Thread</span>',a+="</div>",a+='<div class="comment-thread-form">',a+="<p>由于 Disqus 没有本文的相关 Thread，故需先创建 Thread</p>",a+='<div class="comment-form-item"><label class="comment-form-label">url:</label><input class="comment-form-input" id="thread-url" name="url" value="'+s.origin+l.url+'" /></div>',a+='<div class="comment-form-item"><label class="comment-form-label">title:</label><input class="comment-form-input" id="thread-title" name="title" value="'+l.title+'" /></div>',a+='<div class="comment-form-item"><label class="comment-form-label">slug:</label><input class="comment-form-input" id="thread-slug" name="slug" placeholder="（别名，选填）" /></div>',a+='<div class="comment-form-item"><label class="comment-form-label">message:</label><textarea class="comment-form-textarea" id="thread-message" name="message">'+l.desc+"</textarea></div>",a+='<button id="thread-submit" class="comment-form-submit">提交</button></div>',document.getElementById("comment").classList.remove("loading"),document.getElementById("comment").innerHTML=a,document.getElementById("thread-submit").addEventListener("click",function(){var e="url="+document.getElementById("thread-url").value+"&title="+document.getElementById("thread-title").value+"&slug="+document.getElementById("thread-slug").value+"&message="+document.getElementById("thread-message").value,t=new XMLHttpRequest;t.open("POST",s.apipath+"/createthread.php",!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send(e),t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){0===JSON.parse(t.responseText).code&&(alert("创建 Thread 成功！"),location.reload())}}},!0)}/^#disqus|^#comment/.test(location.hash)&&window.scrollTo(0,document.querySelector(location.hash).offsetTop)}},e.onload=function(){u.form()}},show:function(e){var t=document.querySelector(".comment-item .comment-box");if(t){t.parentNode.removeChild(t);var a=document.querySelector(".comment-item-cancel");a.outerHTML=a.outerHTML.replace("cancel","reply")}var o=e.currentTarget,n=o.closest(".comment-item"),i=n.dataset.id,c=n.dataset.name,m=u.box.replace(/emoji-input/g,"emoji-input-"+i).replace(/upload-input/g,"upload-input-"+i).replace(/加入讨论……|写条留言……/,"@"+c).replace(/加入讨论……|写条留言……/,"").replace(/<label class="comment-actions-label exit"(.|\n)*<\/label>\n/,"").replace(/<input id="tips-input"(.|\n)*<\/label>\n/,"");n.querySelector(".comment-item-main .comment-item-children").insertAdjacentHTML("beforebegin",m),o.outerHTML=o.outerHTML.replace("reply","cancel"),d.init(),n.querySelector(".comment-item-cancel").addEventListener("click",function(){var e=n.querySelector(".comment-box");e.parentNode.removeChild(e),this.outerHTML=this.outerHTML.replace("cancel","reply"),u.form()},!1),u.form()},upload:function(e){var t=e.currentTarget,a=t.closest(".comment-box"),o=a.querySelector(".comment-image-progress"),n=a.querySelector(".comment-image-loaded"),i=a.querySelector(".comment-form-wrapper");if(0!==t.files.length){var c=t.files[0].size;if(-1!=u.imagesize.indexOf(c))return void console.info("请勿选择已存在的图片！");u.imagesize.push(c),o.style.width="80px",i.classList.add("expanded");var m=new FormData;m.append("file",t.files[0]);var l=t.files[0].name,r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==r.readyState&&200==r.status)try{var e=JSON.parse(r.responseText);if(0==e.code){var t=e.response[l].url,o=new Image;o.src=t,o.onload=function(){a.querySelector('[data-image-size="'+c+'"] .comment-image-object').setAttribute("src",o.src),a.querySelector('[data-image-size="'+c+'"]').dataset.imageUrl=o.src,a.querySelector('[data-image-size="'+c+'"]').classList.remove("loading"),a.querySelector('[data-image-size="'+c+'"]').addEventListener("click",u.remove,!1)}}}catch(t){var e={status:"error",data:"Unknown error occurred: ["+r.responseText+"]"}}},r.upload.addEventListener("progress",function(e){n.style.width=Math.ceil(e.loaded/e.total*100)+"%"},!1),r.upload.addEventListener("load",function(e){n.style.width=0,o.style.width=0;var t='<li class="comment-image-item loading" data-image-size="'+c+'"><img class="comment-image-object" src="/assets/svg/loading.svg" /></li>';a.querySelector(".comment-image-list").insertAdjacentHTML("beforeend",t)},!1),r.open("POST",s.apipath+"/upload.php",!0),r.send(m)}},remove:function(e){var t=e.currentTarget.closest(".comment-image-item"),a=e.currentTarget.closest(".comment-form-wrapper");t.parentNode.removeChild(t),u.imagesize=[];var o=document.getElementsByClassName("comment-image-item");[].forEach.call(o,function(e,t){u.imagesize[t]=e.dataset.imageSize}),0==u.imagesize.length&&a.classList.remove("expanded")}},document.getElementById("comment")){var r='    <div class="comment-header">';r+='        <span class="comment-header-item" id="comment-count">评论</span>',r+="    </div>",r+='    <div class="comment-box">',r+='        <div class="comment-avatar avatar">',r+='            <img class="comment-avatar-image" src="https://a.disquscdn.com/images/noavatar92.png" />',r+="        </div>",r+='        <div class="comment-form">',r+='            <div class="comment-form-wrapper">',r+='                <textarea class="comment-form-textarea" placeholder="加入讨论……"></textarea>',r+='                <div class="comment-image">',r+='                    <ul class="comment-image-list">',r+="                    </ul>",r+='                    <div class="comment-image-progress">',r+='                        <div class="comment-image-loaded">',r+="                        </div>",r+="                    </div>",r+="                </div>",r+='                <div class="comment-actions">',r+='                    <div class="comment-actions-group">',r+='                        <input id="emoji-input" class="comment-actions-input" type="checkbox"/>',r+='                        <label class="comment-actions-label emojione" for="emoji-input" title="选择表情"><svg class="icon" fill="#c2c6cc" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M512 1024c-282.713043 0-512-229.286957-512-512s229.286957-512 512-512c282.713043 0 512 229.286957 512 512S792.486957 1024 512 1024zM512 44.521739c-258.226087 0-467.478261 209.252174-467.478261 467.478261 0 258.226087 209.252174 467.478261 467.478261 467.478261s467.478261-209.252174 467.478261-467.478261C979.478261 253.773913 768 44.521739 512 44.521739z"></path><path d="M801.391304 554.295652c0 160.278261-129.113043 289.391304-289.391304 289.391304s-289.391304-129.113043-289.391304-289.391304L801.391304 554.295652z"></path><path d="M674.504348 349.495652m-57.878261 0a2.6 2.6 0 1 0 115.756522 0 2.6 2.6 0 1 0-115.756522 0Z"></path><path d="M347.269565 349.495652m-57.878261 0a2.6 2.6 0 1 0 115.756522 0 2.6 2.6 0 1 0-115.756522 0Z"></path></svg>',r+='<ul class="emojione-list"></ul></label>',r+='                        <input id="upload-input" class="comment-actions-input comment-image-input" type="file" accept="image/*" name="file"/>',r+='                        <label class="comment-actions-label" for="upload-input" title="上传图片"><svg class="icon" fill="#c2c6cc" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M15.515152 15.515152 15.515152 15.515152 15.515152 15.515152Z"></path><path d="M15.515152 139.636364l0 806.787879 992.969697 0 0-806.787879-992.969697 0zM946.424242 884.363636l-868.848485 0 0-682.666667 868.848485 0 0 682.666667zM698.181818 356.848485c0-51.417212 41.673697-93.090909 93.090909-93.090909s93.090909 41.673697 93.090909 93.090909c0 51.417212-41.673697 93.090909-93.090909 93.090909s-93.090909-41.673697-93.090909-93.090909zM884.363636 822.30303l-744.727273 0 186.181818-496.484848 248.242424 310.30303 124.121212-93.090909z"></path></svg>',r+="</label>",r+="                    </div>",r+='                    <div class="comment-actions-form">',r+='                        <input id="tips-input" class="comment-actions-input" type="checkbox"/>',r+='                        <label class="comment-actions-label tips" title="提示" for="tips-input"><svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M511.999488 300.468283c-26.749224 0-48.479131 21.73093-48.479131 48.479131 0 26.796296 21.729907 48.479131 48.479131 48.479131 26.797319 0 48.479131-21.682835 48.479131-48.479131C560.478619 322.199213 538.796808 300.468283 511.999488 300.468283zM511.999488 106.551758c-214.177987 0-387.833049 173.654039-387.833049 387.833049 0 214.228129 173.655062 387.833049 387.833049 387.833049 214.181057 0 387.833049-173.60492 387.833049-387.833049C899.832538 280.205796 726.180546 106.551758 511.999488 106.551758zM511.999488 833.738725c-187.429787 0-339.353918-151.923108-339.353918-339.353918S324.569702 155.030889 511.999488 155.030889c187.43081 0 339.353918 151.923108 339.353918 339.353918S699.430298 833.738725 511.999488 833.738725zM536.239566 445.905676l-48.479131 0c-13.397125 0-24.240077 10.841929-24.240077 24.240077l0 193.916525c0 13.398148 10.842952 24.240077 24.240077 24.240077l48.479131 0c13.399171 0 24.240077-10.841929 24.240077-24.240077l0-193.916525C560.478619 456.747605 549.638737 445.905676 536.239566 445.905676z"></path></svg>',r+="",r+='                            <div class="comment-tips">',r+='                                本评论框利用 Disqus API 实现访客评论，登录请自带梯子 <a target="_blank" title="科学使用 Disqus" class="comment-tips-link">前往 Disqus</a>',r+="                            </div>",r+="                        </label>",r+='                        <label class="comment-actions-label exit" title="重置访客信息"><svg class="icon" fill="#c2c6cc" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48"><defs><style type="text/css"></style></defs><path d="M348.870666 210.685443l378.570081 0c32.8205 0 58.683541 26.561959 58.683541 58.683541 0 162.043606 0 324.804551 0 486.848157 0 32.81129-26.561959 58.674331-58.683541 58.674331L348.870666 814.891472c-10.477632 0-18.850323-8.363482-18.850323-18.841114l0-37.728276c0-10.477632 8.372691-18.841114 18.850323-18.841114l343.645664 0c10.477632 0 18.850323-8.372691 18.850323-18.850323L711.366653 304.983109c0-10.477632-8.372691-18.841114-18.850323-18.841114L348.870666 286.141996c-10.477632 0-18.850323-8.363482-18.850323-18.841114l0-37.728276C329.98248 219.095997 338.393034 210.685443 348.870666 210.685443z"></path><path d="M128.152728 526.436804l112.450095 112.450095c6.985088 6.985088 19.567661 6.985088 26.552749 0l26.561959-26.561959c6.985088-6.985088 6.985088-19.567661 0-26.552749l-34.925441-34.925441L494.168889 550.84675c10.477632 0 18.850323-8.372691 18.850323-18.850323l0-37.719066c0-10.477632-8.372691-18.850323-18.850323-18.850323L258.754229 475.427036l34.925441-34.925441c6.985088-6.985088 6.985088-19.567661 0-26.552749l-26.561959-26.524097c-6.985088-6.985088-19.567661-6.985088-26.552749 0L128.152728 499.875868C120.431883 506.859933 120.431883 519.451716 128.152728 526.436804z"></path></svg>',r+="</label>",r+='                        <button class="comment-form-submit"><svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M565.747623 792.837176l260.819261 112.921839 126.910435-845.424882L66.087673 581.973678l232.843092 109.933785 562.612725-511.653099-451.697589 563.616588-5.996574 239.832274L565.747623 792.837176z" fill="#ffffff"></path></svg>',r+="</button>",r+="                    </div>",r+="                </div>",r+="            </div>",r+='            <div class="comment-login">',r+='                <input class="comment-form-input comment-form-name" type="text" placeholder="名字（必填）" autocomplete="name" required>',r+='                <input class="comment-form-input comment-form-email" type="email" placeholder="邮箱（必填）" autocomplete="email" required>',r+='                <input class="comment-form-input comment-form-url" type="url" placeholder="网址（可选）" autocomplete="url">',r+="            </div>",r+="        </div>",r+="    </div>",r+='    <ul id="comments" class="comment-list">',r+="    </ul>",document.getElementById("comment").classList.add("comment"),document.getElementById("comment").classList.add("loading"),document.getElementById("comment").innerHTML=r;var d=new n,u=new i}}]);