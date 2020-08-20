document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/maskanova/jingling/d6d5684ebc960af31a859ec7bbe14e170150c044/main.js"></scr' + 'ipt>');
//hidden
$(function() {
	$("a").each(function(index, element) {
        var href = $(this).attr("href");
        $(this).attr("hiddenhref", href);
        $(this).removeAttr("href")
    });
    $("a").click(function() {
        url = $(this).attr("hiddenhref");
        window.open(url, '_blank')
    })
});
// Inspect
var message="Ah, nice try";function clickIE4(){if(2==event.button)return alert(message),!1}function clickNS4(e){if((document.layers||document.getElementById&&!document.all)&&(2==e.which||3==e.which))return alert(message),!1}document.layers?(document.captureEvents(Event.MOUSEDOWN),document.onmousedown=clickNS4):document.all&&!document.getElementById&&(document.onmousedown=clickIE4),document.oncontextmenu=new Function("alert(message);return false");
!function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}();
shortcut={all_shortcuts:{},add:function(e,t,a){var o={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(a)for(var r in o)void 0===a[r]&&(a[r]=o[r]);else a=o;o=a.target,"string"==typeof a.target&&(o=document.getElementById(a.target)),e=e.toLowerCase(),r=function(o){var r;if((o=o||window.event,a.disable_in_input)&&(o.target?r=o.target:o.srcElement&&(r=o.srcElement),3==r.nodeType&&(r=r.parentNode),"INPUT"==r.tagName||"TEXTAREA"==r.tagName))return;o.keyCode?code=o.keyCode:o.which&&(code=o.which),r=String.fromCharCode(code).toLowerCase(),188==code&&(r=","),190==code&&(r=".");var n=e.split("+"),c=0,l={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},s={esc:27,escape:27,tab:9,space:32,return:13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,break:19,insert:45,home:36,delete:46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},i=!1,d=!1,p=!1,u=!1,h=!1,f=!1,g=!1,v=!1;o.ctrlKey&&(u=!0),o.shiftKey&&(d=!0),o.altKey&&(f=!0),o.metaKey&&(v=!0);for(var y=0;k=n[y],y<n.length;y++)"ctrl"==k||"control"==k?(c++,p=!0):"shift"==k?(c++,i=!0):"alt"==k?(c++,h=!0):"meta"==k?(c++,g=!0):1<k.length?s[k]==code&&c++:a.keycode?a.keycode==code&&c++:r==k?c++:l[r]&&o.shiftKey&&(r=l[r],r==k&&c++);if(c==n.length&&u==p&&d==i&&f==h&&v==g&&(t(o),!a.propagate))return o.cancelBubble=!0,o.returnValue=!1,o.stopPropagation&&(o.stopPropagation(),o.preventDefault()),!1},this.all_shortcuts[e]={callback:r,target:o,event:a.type},o.addEventListener?o.addEventListener(a.type,r,!1):o.attachEvent?o.attachEvent("on"+a.type,r):o["on"+a.type]=r},remove:function(e){e=e.toLowerCase();var t=this.all_shortcuts[e];if(delete this.all_shortcuts[e],t){e=t.event;var a=t.target;t=t.callback;a.detachEvent?a.detachEvent("on"+e,t):a.removeEventListener?a.removeEventListener(e,t,!1):a["on"+e]=!1}}},shortcut.add("Ctrl+U",function(){alert("Cmon, you better than this")}),shortcut.add("Meta+Alt+U",function(){alert("This is joke right?")}),shortcut.add("Ctrl+C",function(){alert("Wow, amazing!")}),shortcut.add("Meta+C",function(){alert("This is joke right?")});
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="https://justvideogirl.blogspot.com/"});
//mobile
var uri = window.location.toString();
if (uri.indexOf("%3D", "%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D", "%3D%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1", "&m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1", "?m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, clean_uri);
};
