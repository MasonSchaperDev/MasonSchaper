(function(){var a;
var i;
var c="cmp";
var k="carousel";
var f={SPACE:32,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40};
var j={self:"[data-"+c+'-is="'+k+'"]'};
var g={autoplay:{"default":false,transform:function(l){return !(l===null||typeof l==="undefined")
}},delay:{"default":5000,transform:function(l){l=parseFloat(l);
return !isNaN(l)?l:null
}},autopauseDisabled:{"default":false,transform:function(l){return !(l===null||typeof l==="undefined")
}}};
function h(G){var u=this;
if(G&&G.element){B(G)
}function B(I){I.element.removeAttribute("data-"+c+"-is");
s(I.options);
l(I.element);
u._active=0;
u._paused=false;
if(u._elements.item){w();
m();
D();
q()
}if(window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel){window.CQ=window.CQ||{};
window.CQ.CoreComponents=window.CQ.CoreComponents||{};
window.CQ.CoreComponents.MESSAGE_CHANNEL=window.CQ.CoreComponents.MESSAGE_CHANNEL||new window.Granite.author.MessageChannel("cqauthor",window);
window.CQ.CoreComponents.MESSAGE_CHANNEL.subscribeRequestMessage("cmp.panelcontainer",function(J){if(J.data&&J.data.type==="cmp-carousel"&&J.data.id===u._elements.self.dataset.cmpPanelcontainerId){if(J.data.operation==="navigate"){C(J.data.index)
}}})
}}function l(O){u._elements={};
u._elements.self=O;
var I=u._elements.self.querySelectorAll("[data-"+c+"-hook-"+k+"]");
for(var L=0;
L<I.length;
L++){var M=I[L];
var N=k;
N=N.charAt(0).toUpperCase()+N.slice(1);
var K=M.dataset[c+"Hook"+N];
if(u._elements[K]){if(!Array.isArray(u._elements[K])){var J=u._elements[K];
u._elements[K]=[J]
}u._elements[K].push(M)
}else{u._elements[K]=M
}}}function s(I){u._properties={};
for(var J in g){if(g.hasOwnProperty(J)){var L=g[J];
var K=null;
if(I&&I[J]!=null){K=I[J];
if(L&&typeof L.transform==="function"){K=L.transform(K)
}}if(K===null){K=g[J]["default"]
}u._properties[J]=K
}}}function m(){if(u._elements.previous){u._elements.previous.addEventListener("click",function(){var M=o();
C(M);
if(a){i.push({event:"cmp:show",eventInfo:{path:"component."+e(u._elements.item[M])}})
}})
}if(u._elements.next){u._elements.next.addEventListener("click",function(){var M=z();
C(M);
if(a){i.push({event:"cmp:show",eventInfo:{path:"component."+e(u._elements.item[M])}})
}})
}var L=u._elements.indicator;
if(L){for(var K=0;
K<L.length;
K++){(function(M){L[K].addEventListener("click",function(N){E(M)
})
})(K)
}}if(u._elements.pause){if(u._properties.autoplay){u._elements.pause.addEventListener("click",t)
}}if(u._elements.play){if(u._properties.autoplay){u._elements.play.addEventListener("click",A)
}}u._elements.self.addEventListener("keydown",p);
if(!u._properties.autopauseDisabled){u._elements.self.addEventListener("mouseenter",x);
u._elements.self.addEventListener("mouseleave",H)
}var I=u._elements.item;
if(I){for(var J=0;
J<I.length;
J++){I[J].addEventListener("focusin",x);
I[J].addEventListener("focusout",H)
}}}function p(J){var I=u._active;
var K=u._elements.indicator.length-1;
switch(J.keyCode){case f.ARROW_LEFT:case f.ARROW_UP:J.preventDefault();
if(I>0){E(I-1)
}break;
case f.ARROW_RIGHT:case f.ARROW_DOWN:J.preventDefault();
if(I<K){E(I+1)
}break;
case f.HOME:J.preventDefault();
E(0);
break;
case f.END:J.preventDefault();
E(K);
break;
case f.SPACE:if(u._properties.autoplay&&(J.target!==u._elements.previous&&J.target!==u._elements.next)){J.preventDefault();
if(!u._paused){r()
}else{F()
}}if(J.target===u._elements.pause){u._elements.play.focus()
}if(J.target===u._elements.play){u._elements.pause.focus()
}break;
default:return
}}function x(I){n()
}function H(I){D()
}function t(I){r();
u._elements.play.focus()
}function A(){F();
u._elements.pause.focus()
}function r(){u._paused=true;
n();
q()
}function F(){u._paused=false;
var I=false;
if(u._elements.self.parentElement){I=u._elements.self.parentElement.querySelector(":hover")===u._elements.self
}if(u._properties.autopauseDisabled||!I){D()
}q()
}function q(){y(u._elements.pause,u._paused);
y(u._elements.play,!u._paused)
}function w(){var I=u._elements.item;
var K=u._elements.indicator;
if(I){if(Array.isArray(I)){for(var J=0;
J<I.length;
J++){if(J===parseInt(u._active)){I[J].classList.add("cmp-carousel__item--active");
I[J].removeAttribute("aria-hidden");
K[J].classList.add("cmp-carousel__indicator--active");
K[J].setAttribute("aria-selected",true);
K[J].setAttribute("tabindex","0")
}else{I[J].classList.remove("cmp-carousel__item--active");
I[J].setAttribute("aria-hidden",true);
K[J].classList.remove("cmp-carousel__indicator--active");
K[J].setAttribute("aria-selected",false);
K[J].setAttribute("tabindex","-1")
}}}else{I.classList.add("cmp-carousel__item--active");
K.classList.add("cmp-carousel__indicator--active")
}}}function v(J){var I=window.scrollX||window.pageXOffset;
var K=window.scrollY||window.pageYOffset;
J.focus();
window.scrollTo(I,K)
}function z(){return u._active===(u._elements.item.length-1)?0:u._active+1
}function o(){return u._active===0?(u._elements.item.length-1):u._active-1
}function C(I){if(I<0||I>(u._elements.item.length-1)){return
}u._active=I;
w();
if(a){var K=u._elements.self.id;
var M=e(u._elements.item[I]);
var L={component:{}};
L.component[K]={shownItems:[M]};
var J={component:{}};
J.component[K]={shownItems:undefined};
i.push(J);
i.push(L)
}if(u._elements.self.parentElement){if(u._elements.self.parentElement.querySelector(":hover")!==u._elements.self){D()
}}}function E(I){C(I);
v(u._elements.indicator[I]);
if(a){i.push({event:"cmp:show",eventInfo:{path:"component."+e(u._elements.item[I])}})
}}function D(){if(u._paused||!u._properties.autoplay){return
}n();
u._autoplayIntervalId=window.setInterval(function(){if(document.visibilityState&&document.hidden){return
}var I=u._elements.indicators;
if(I!==document.activeElement&&I.contains(document.activeElement)){E(z())
}else{C(z())
}},u._properties.delay)
}function n(){window.clearInterval(u._autoplayIntervalId);
u._autoplayIntervalId=null
}function y(J,I){if(!J){return
}if(I!==false){J.disabled=true;
J.classList.add("cmp-carousel__action--disabled")
}else{J.disabled=false;
J.classList.remove("cmp-carousel__action--disabled")
}}}function b(o){var q=o.dataset;
var m=[];
var r=k;
r=r.charAt(0).toUpperCase()+r.slice(1);
var l=["is","hook"+r];
for(var n in q){if(q.hasOwnProperty(n)){var p=q[n];
if(n.indexOf(c)===0){n=n.slice(c.length);
n=n.charAt(0).toLowerCase()+n.substring(1);
if(l.indexOf(n)===-1){m[n]=p
}}}}return m
}function e(l){if(l&&l.dataset.cmpDataLayer){return Object.keys(JSON.parse(l.dataset.cmpDataLayer))[0]
}else{return l.id
}}function d(){a=document.body.hasAttribute("data-cmp-data-layer-enabled");
i=(a)?window.adobeDataLayer=window.adobeDataLayer||[]:undefined;
var p=document.querySelectorAll(j.self);
for(var n=0;
n<p.length;
n++){new h({element:p[n],options:b(p[n])})
}var o=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
var l=document.querySelector("body");
var m=new o(function(q){q.forEach(function(r){var s=[].slice.call(r.addedNodes);
if(s.length>0){s.forEach(function(t){if(t.querySelectorAll){var u=[].slice.call(t.querySelectorAll(j.self));
u.forEach(function(v){new h({element:v,options:b(v)})
})
}})
}})
});
m.observe(l,{subtree:true,childList:true,characterData:true})
}if(document.readyState!=="loading"){d()
}else{document.addEventListener("DOMContentLoaded",d)
}}());