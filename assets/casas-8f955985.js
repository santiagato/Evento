(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Ku=function(){function e(t,n){n===void 0&&(n=[]),this._eventType=t,this._eventFunctions=n}return e.prototype.init=function(){var t=this;this._eventFunctions.forEach(function(n){typeof window<"u"&&window.addEventListener(t._eventType,n)})},e}(),Ei=globalThis&&globalThis.__assign||function(){return Ei=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ei.apply(this,arguments)},_i={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},oc=function(){function e(t,n){t===void 0&&(t=[]),n===void 0&&(n=_i),this._items=t,this._options=Ei(Ei({},_i),n),this._init()}return e.prototype._init=function(){var t=this;this._items.length&&this._items.map(function(n){n.active&&t.open(n.id),n.triggerEl.addEventListener("click",function(){t.toggle(n.id)})})},e.prototype.getItem=function(t){return this._items.filter(function(n){return n.id===t})[0]},e.prototype.open=function(t){var n,i,r=this,s=this.getItem(t);this._options.alwaysOpen||this._items.map(function(o){var a,c;o!==s&&((a=o.triggerEl.classList).remove.apply(a,r._options.activeClasses.split(" ")),(c=o.triggerEl.classList).add.apply(c,r._options.inactiveClasses.split(" ")),o.targetEl.classList.add("hidden"),o.triggerEl.setAttribute("aria-expanded","false"),o.active=!1,o.iconEl&&o.iconEl.classList.remove("rotate-180"))}),(n=s.triggerEl.classList).add.apply(n,this._options.activeClasses.split(" ")),(i=s.triggerEl.classList).remove.apply(i,this._options.inactiveClasses.split(" ")),s.triggerEl.setAttribute("aria-expanded","true"),s.targetEl.classList.remove("hidden"),s.active=!0,s.iconEl&&s.iconEl.classList.add("rotate-180"),this._options.onOpen(this,s)},e.prototype.toggle=function(t){var n=this.getItem(t);n.active?this.close(t):this.open(t),this._options.onToggle(this,n)},e.prototype.close=function(t){var n,i,r=this.getItem(t);(n=r.triggerEl.classList).remove.apply(n,this._options.activeClasses.split(" ")),(i=r.triggerEl.classList).add.apply(i,this._options.inactiveClasses.split(" ")),r.targetEl.classList.add("hidden"),r.triggerEl.setAttribute("aria-expanded","false"),r.active=!1,r.iconEl&&r.iconEl.classList.remove("rotate-180"),this._options.onClose(this,r)},e}();typeof window<"u"&&(window.Accordion=oc);function Gu(){document.querySelectorAll("[data-accordion]").forEach(function(e){var t=e.getAttribute("data-accordion"),n=e.getAttribute("data-active-classes"),i=e.getAttribute("data-inactive-classes"),r=[];e.querySelectorAll("[data-accordion-target]").forEach(function(s){var o={id:s.getAttribute("data-accordion-target"),triggerEl:s,targetEl:document.querySelector(s.getAttribute("data-accordion-target")),iconEl:s.querySelector("[data-accordion-icon]"),active:s.getAttribute("aria-expanded")==="true"};r.push(o)}),new oc(r,{alwaysOpen:t==="open",activeClasses:n||_i.activeClasses,inactiveClasses:i||_i.inactiveClasses})})}var bi=globalThis&&globalThis.__assign||function(){return bi=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},bi.apply(this,arguments)},Uo={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},ac=function(){function e(t,n,i){t===void 0&&(t=null),n===void 0&&(n=null),i===void 0&&(i=Uo),this._targetEl=t,this._triggerEl=n,this._options=bi(bi({},Uo),i),this._visible=!1,this._init()}return e.prototype._init=function(){var t=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){t.toggle()}))},e.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},e.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},e.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},e}();typeof window<"u"&&(window.Collapse=ac);function Wu(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(e){var t=e.getAttribute("data-collapse-toggle"),n=document.getElementById(t);n?new ac(n,e):console.error('The target element with id "'.concat(t,'" does not exist. Please check the data-collapse-toggle attribute.'))})}var oe=globalThis&&globalThis.__assign||function(){return oe=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},oe.apply(this,arguments)},gi={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},cc=function(){function e(t,n){t===void 0&&(t=[]),n===void 0&&(n=gi),this._items=t,this._options=oe(oe(oe({},gi),n),{indicators:oe(oe({},gi.indicators),n.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._init()}return e.prototype._init=function(){var t=this;this._items.map(function(n){n.el.classList.add("absolute","inset-0","transition-transform","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(n,i){n.el.addEventListener("click",function(){t.slideTo(i)})})},e.prototype.getItem=function(t){return this._items[t]},e.prototype.slideTo=function(t){var n=this._items[t],i={left:n.position===0?this._items[this._items.length-1]:this._items[n.position-1],middle:n,right:n.position===this._items.length-1?this._items[0]:this._items[n.position+1]};this._rotate(i),this._setActiveItem(n),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},e.prototype.next=function(){var t=this._getActiveItem(),n=null;t.position===this._items.length-1?n=this._items[0]:n=this._items[t.position+1],this.slideTo(n.position),this._options.onNext(this)},e.prototype.prev=function(){var t=this._getActiveItem(),n=null;t.position===0?n=this._items[this._items.length-1]:n=this._items[t.position-1],this.slideTo(n.position),this._options.onPrev(this)},e.prototype._rotate=function(t){this._items.map(function(n){n.el.classList.add("hidden")}),t.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),t.left.el.classList.add("-translate-x-full","z-10"),t.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),t.middle.el.classList.add("translate-x-0","z-20"),t.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),t.right.el.classList.add("translate-x-full","z-10")},e.prototype.cycle=function(){var t=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){t.next()},this._intervalDuration))},e.prototype.pause=function(){clearInterval(this._intervalInstance)},e.prototype._getActiveItem=function(){return this._activeItem},e.prototype._setActiveItem=function(t){var n,i,r=this;this._activeItem=t;var s=t.position;this._indicators.length&&(this._indicators.map(function(o){var a,c;o.el.setAttribute("aria-current","false"),(a=o.el.classList).remove.apply(a,r._options.indicators.activeClasses.split(" ")),(c=o.el.classList).add.apply(c,r._options.indicators.inactiveClasses.split(" "))}),(n=this._indicators[s].el.classList).add.apply(n,this._options.indicators.activeClasses.split(" ")),(i=this._indicators[s].el.classList).remove.apply(i,this._options.indicators.inactiveClasses.split(" ")),this._indicators[s].el.setAttribute("aria-current","true"))},e}();typeof window<"u"&&(window.Carousel=cc);function Qu(){document.querySelectorAll("[data-carousel]").forEach(function(e){var t=e.getAttribute("data-carousel-interval"),n=e.getAttribute("data-carousel")==="slide",i=[],r=0;e.querySelectorAll("[data-carousel-item]").length&&Array.from(e.querySelectorAll("[data-carousel-item]")).map(function(l,u){i.push({position:u,el:l}),l.getAttribute("data-carousel-item")==="active"&&(r=u)});var s=[];e.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(e.querySelectorAll("[data-carousel-slide-to]")).map(function(l){s.push({position:parseInt(l.getAttribute("data-carousel-slide-to")),el:l})});var o=new cc(i,{defaultPosition:r,indicators:{items:s},interval:t||gi.interval});n&&o.cycle();var a=e.querySelector("[data-carousel-next]"),c=e.querySelector("[data-carousel-prev]");a&&a.addEventListener("click",function(){o.next()}),c&&c.addEventListener("click",function(){o.prev()})})}var Ti=globalThis&&globalThis.__assign||function(){return Ti=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ti.apply(this,arguments)},qo={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},lc=function(){function e(t,n,i){t===void 0&&(t=null),n===void 0&&(n=null),i===void 0&&(i=qo),this._targetEl=t,this._triggerEl=n,this._options=Ti(Ti({},qo),i),this._init()}return e.prototype._init=function(){var t=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){t.hide()})},e.prototype.hide=function(){var t=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){t._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},e}();typeof window<"u"&&(window.Dismiss=lc);function Xu(){document.querySelectorAll("[data-dismiss-target]").forEach(function(e){var t=e.getAttribute("data-dismiss-target"),n=document.querySelector(t);n?new lc(n,e):console.error('The dismiss element with id "'.concat(t,'" does not exist. Please check the data-dismiss-target attribute.'))})}var pt="top",Et="bottom",_t="right",gt="left",Cs="auto",Ln=[pt,Et,_t,gt],Me="start",yn="end",Yu="clippingParents",uc="viewport",nn="popper",Ju="reference",zo=Ln.reduce(function(e,t){return e.concat([t+"-"+Me,t+"-"+yn])},[]),hc=[].concat(Ln,[Cs]).reduce(function(e,t){return e.concat([t,t+"-"+Me,t+"-"+yn])},[]),Zu="beforeRead",th="read",eh="afterRead",nh="beforeMain",ih="main",rh="afterMain",sh="beforeWrite",oh="write",ah="afterWrite",ch=[Zu,th,eh,nh,ih,rh,sh,oh,ah];function Lt(e){return e?(e.nodeName||"").toLowerCase():null}function bt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function me(e){var t=bt(e).Element;return e instanceof t||e instanceof Element}function wt(e){var t=bt(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ss(e){if(typeof ShadowRoot>"u")return!1;var t=bt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function lh(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var i=t.styles[n]||{},r=t.attributes[n]||{},s=t.elements[n];!wt(s)||!Lt(s)||(Object.assign(s.style,i),Object.keys(r).forEach(function(o){var a=r[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function uh(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(i){var r=t.elements[i],s=t.attributes[i]||{},o=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:n[i]),a=o.reduce(function(c,l){return c[l]="",c},{});!wt(r)||!Lt(r)||(Object.assign(r.style,a),Object.keys(s).forEach(function(c){r.removeAttribute(c)}))})}}const hh={name:"applyStyles",enabled:!0,phase:"write",fn:lh,effect:uh,requires:["computeStyles"]};function Dt(e){return e.split("-")[0]}var de=Math.max,Ai=Math.min,Pe=Math.round;function jr(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function dc(){return!/^((?!chrome|android).)*safari/i.test(jr())}function Fe(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var i=e.getBoundingClientRect(),r=1,s=1;t&&wt(e)&&(r=e.offsetWidth>0&&Pe(i.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Pe(i.height)/e.offsetHeight||1);var o=me(e)?bt(e):window,a=o.visualViewport,c=!dc()&&n,l=(i.left+(c&&a?a.offsetLeft:0))/r,u=(i.top+(c&&a?a.offsetTop:0))/s,h=i.width/r,f=i.height/s;return{width:h,height:f,top:u,right:l+h,bottom:u+f,left:l,x:l,y:u}}function ks(e){var t=Fe(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function fc(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Ss(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function Mt(e){return bt(e).getComputedStyle(e)}function dh(e){return["table","td","th"].indexOf(Lt(e))>=0}function Yt(e){return((me(e)?e.ownerDocument:e.document)||window.document).documentElement}function Wi(e){return Lt(e)==="html"?e:e.assignedSlot||e.parentNode||(Ss(e)?e.host:null)||Yt(e)}function Ho(e){return!wt(e)||Mt(e).position==="fixed"?null:e.offsetParent}function fh(e){var t=/firefox/i.test(jr()),n=/Trident/i.test(jr());if(n&&wt(e)){var i=Mt(e);if(i.position==="fixed")return null}var r=Wi(e);for(Ss(r)&&(r=r.host);wt(r)&&["html","body"].indexOf(Lt(r))<0;){var s=Mt(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function On(e){for(var t=bt(e),n=Ho(e);n&&dh(n)&&Mt(n).position==="static";)n=Ho(n);return n&&(Lt(n)==="html"||Lt(n)==="body"&&Mt(n).position==="static")?t:n||fh(e)||t}function xs(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function un(e,t,n){return de(e,Ai(t,n))}function ph(e,t,n){var i=un(e,t,n);return i>n?n:i}function pc(){return{top:0,right:0,bottom:0,left:0}}function gc(e){return Object.assign({},pc(),e)}function mc(e,t){return t.reduce(function(n,i){return n[i]=e,n},{})}var gh=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,gc(typeof t!="number"?t:mc(t,Ln))};function mh(e){var t,n=e.state,i=e.name,r=e.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Dt(n.placement),c=xs(a),l=[gt,_t].indexOf(a)>=0,u=l?"height":"width";if(!(!s||!o)){var h=gh(r.padding,n),f=ks(s),d=c==="y"?pt:gt,_=c==="y"?Et:_t,v=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],E=o[c]-n.rects.reference[c],S=On(s),x=S?c==="y"?S.clientHeight||0:S.clientWidth||0:0,k=v/2-E/2,I=h[d],D=x-f[u]-h[_],R=x/2-f[u]/2+k,V=un(I,R,D),q=c;n.modifiersData[i]=(t={},t[q]=V,t.centerOffset=V-R,t)}}function vh(e){var t=e.state,n=e.options,i=n.element,r=i===void 0?"[data-popper-arrow]":i;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||fc(t.elements.popper,r)&&(t.elements.arrow=r))}const yh={name:"arrow",enabled:!0,phase:"main",fn:mh,effect:vh,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ve(e){return e.split("-")[1]}var wh={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Eh(e){var t=e.x,n=e.y,i=window,r=i.devicePixelRatio||1;return{x:Pe(t*r)/r||0,y:Pe(n*r)/r||0}}function Ko(e){var t,n=e.popper,i=e.popperRect,r=e.placement,s=e.variation,o=e.offsets,a=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,h=e.isFixed,f=o.x,d=f===void 0?0:f,_=o.y,v=_===void 0?0:_,E=typeof u=="function"?u({x:d,y:v}):{x:d,y:v};d=E.x,v=E.y;var S=o.hasOwnProperty("x"),x=o.hasOwnProperty("y"),k=gt,I=pt,D=window;if(l){var R=On(n),V="clientHeight",q="clientWidth";if(R===bt(n)&&(R=Yt(n),Mt(R).position!=="static"&&a==="absolute"&&(V="scrollHeight",q="scrollWidth")),R=R,r===pt||(r===gt||r===_t)&&s===yn){I=Et;var Q=h&&R===D&&D.visualViewport?D.visualViewport.height:R[V];v-=Q-i.height,v*=c?1:-1}if(r===gt||(r===pt||r===Et)&&s===yn){k=_t;var G=h&&R===D&&D.visualViewport?D.visualViewport.width:R[q];d-=G-i.width,d*=c?1:-1}}var it=Object.assign({position:a},l&&wh),Tt=u===!0?Eh({x:d,y:v}):{x:d,y:v};if(d=Tt.x,v=Tt.y,c){var ht;return Object.assign({},it,(ht={},ht[I]=x?"0":"",ht[k]=S?"0":"",ht.transform=(D.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",ht))}return Object.assign({},it,(t={},t[I]=x?v+"px":"",t[k]=S?d+"px":"",t.transform="",t))}function _h(e){var t=e.state,n=e.options,i=n.gpuAcceleration,r=i===void 0?!0:i,s=n.adaptive,o=s===void 0?!0:s,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:Dt(t.placement),variation:Ve(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ko(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ko(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const bh={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:_h,data:{}};var Zn={passive:!0};function Th(e){var t=e.state,n=e.instance,i=e.options,r=i.scroll,s=r===void 0?!0:r,o=i.resize,a=o===void 0?!0:o,c=bt(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach(function(u){u.addEventListener("scroll",n.update,Zn)}),a&&c.addEventListener("resize",n.update,Zn),function(){s&&l.forEach(function(u){u.removeEventListener("scroll",n.update,Zn)}),a&&c.removeEventListener("resize",n.update,Zn)}}const Ah={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Th,data:{}};var Ih={left:"right",right:"left",bottom:"top",top:"bottom"};function mi(e){return e.replace(/left|right|bottom|top/g,function(t){return Ih[t]})}var Ch={start:"end",end:"start"};function Go(e){return e.replace(/start|end/g,function(t){return Ch[t]})}function Ds(e){var t=bt(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function Ls(e){return Fe(Yt(e)).left+Ds(e).scrollLeft}function Sh(e,t){var n=bt(e),i=Yt(e),r=n.visualViewport,s=i.clientWidth,o=i.clientHeight,a=0,c=0;if(r){s=r.width,o=r.height;var l=dc();(l||!l&&t==="fixed")&&(a=r.offsetLeft,c=r.offsetTop)}return{width:s,height:o,x:a+Ls(e),y:c}}function kh(e){var t,n=Yt(e),i=Ds(e),r=(t=e.ownerDocument)==null?void 0:t.body,s=de(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=de(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+Ls(e),c=-i.scrollTop;return Mt(r||n).direction==="rtl"&&(a+=de(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Os(e){var t=Mt(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function vc(e){return["html","body","#document"].indexOf(Lt(e))>=0?e.ownerDocument.body:wt(e)&&Os(e)?e:vc(Wi(e))}function hn(e,t){var n;t===void 0&&(t=[]);var i=vc(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),s=bt(i),o=r?[s].concat(s.visualViewport||[],Os(i)?i:[]):i,a=t.concat(o);return r?a:a.concat(hn(Wi(o)))}function Ur(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function xh(e,t){var n=Fe(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Wo(e,t,n){return t===uc?Ur(Sh(e,n)):me(t)?xh(t,n):Ur(kh(Yt(e)))}function Dh(e){var t=hn(Wi(e)),n=["absolute","fixed"].indexOf(Mt(e).position)>=0,i=n&&wt(e)?On(e):e;return me(i)?t.filter(function(r){return me(r)&&fc(r,i)&&Lt(r)!=="body"}):[]}function Lh(e,t,n,i){var r=t==="clippingParents"?Dh(e):[].concat(t),s=[].concat(r,[n]),o=s[0],a=s.reduce(function(c,l){var u=Wo(e,l,i);return c.top=de(u.top,c.top),c.right=Ai(u.right,c.right),c.bottom=Ai(u.bottom,c.bottom),c.left=de(u.left,c.left),c},Wo(e,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function yc(e){var t=e.reference,n=e.element,i=e.placement,r=i?Dt(i):null,s=i?Ve(i):null,o=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,c;switch(r){case pt:c={x:o,y:t.y-n.height};break;case Et:c={x:o,y:t.y+t.height};break;case _t:c={x:t.x+t.width,y:a};break;case gt:c={x:t.x-n.width,y:a};break;default:c={x:t.x,y:t.y}}var l=r?xs(r):null;if(l!=null){var u=l==="y"?"height":"width";switch(s){case Me:c[l]=c[l]-(t[u]/2-n[u]/2);break;case yn:c[l]=c[l]+(t[u]/2-n[u]/2);break}}return c}function wn(e,t){t===void 0&&(t={});var n=t,i=n.placement,r=i===void 0?e.placement:i,s=n.strategy,o=s===void 0?e.strategy:s,a=n.boundary,c=a===void 0?Yu:a,l=n.rootBoundary,u=l===void 0?uc:l,h=n.elementContext,f=h===void 0?nn:h,d=n.altBoundary,_=d===void 0?!1:d,v=n.padding,E=v===void 0?0:v,S=gc(typeof E!="number"?E:mc(E,Ln)),x=f===nn?Ju:nn,k=e.rects.popper,I=e.elements[_?x:f],D=Lh(me(I)?I:I.contextElement||Yt(e.elements.popper),c,u,o),R=Fe(e.elements.reference),V=yc({reference:R,element:k,strategy:"absolute",placement:r}),q=Ur(Object.assign({},k,V)),Q=f===nn?q:R,G={top:D.top-Q.top+S.top,bottom:Q.bottom-D.bottom+S.bottom,left:D.left-Q.left+S.left,right:Q.right-D.right+S.right},it=e.modifiersData.offset;if(f===nn&&it){var Tt=it[r];Object.keys(G).forEach(function(ht){var te=[_t,Et].indexOf(ht)>=0?1:-1,ee=[pt,Et].indexOf(ht)>=0?"y":"x";G[ht]+=Tt[ee]*te})}return G}function Oh(e,t){t===void 0&&(t={});var n=t,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?hc:c,u=Ve(i),h=u?a?zo:zo.filter(function(_){return Ve(_)===u}):Ln,f=h.filter(function(_){return l.indexOf(_)>=0});f.length===0&&(f=h);var d=f.reduce(function(_,v){return _[v]=wn(e,{placement:v,boundary:r,rootBoundary:s,padding:o})[Dt(v)],_},{});return Object.keys(d).sort(function(_,v){return d[_]-d[v]})}function Nh(e){if(Dt(e)===Cs)return[];var t=mi(e);return[Go(e),t,Go(t)]}function Rh(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var r=n.mainAxis,s=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,_=d===void 0?!0:d,v=n.allowedAutoPlacements,E=t.options.placement,S=Dt(E),x=S===E,k=c||(x||!_?[mi(E)]:Nh(E)),I=[E].concat(k).reduce(function(be,$t){return be.concat(Dt($t)===Cs?Oh(t,{placement:$t,boundary:u,rootBoundary:h,padding:l,flipVariations:_,allowedAutoPlacements:v}):$t)},[]),D=t.rects.reference,R=t.rects.popper,V=new Map,q=!0,Q=I[0],G=0;G<I.length;G++){var it=I[G],Tt=Dt(it),ht=Ve(it)===Me,te=[pt,Et].indexOf(Tt)>=0,ee=te?"width":"height",mt=wn(t,{placement:it,boundary:u,rootBoundary:h,altBoundary:f,padding:l}),At=te?ht?_t:gt:ht?Et:pt;D[ee]>R[ee]&&(At=mi(At));var Wn=mi(At),ne=[];if(s&&ne.push(mt[Tt]<=0),a&&ne.push(mt[At]<=0,mt[Wn]<=0),ne.every(function(be){return be})){Q=it,q=!1;break}V.set(it,ne)}if(q)for(var Qn=_?3:1,wr=function($t){var en=I.find(function(Yn){var ie=V.get(Yn);if(ie)return ie.slice(0,$t).every(function(Er){return Er})});if(en)return Q=en,"break"},tn=Qn;tn>0;tn--){var Xn=wr(tn);if(Xn==="break")break}t.placement!==Q&&(t.modifiersData[i]._skip=!0,t.placement=Q,t.reset=!0)}}const Mh={name:"flip",enabled:!0,phase:"main",fn:Rh,requiresIfExists:["offset"],data:{_skip:!1}};function Qo(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Xo(e){return[pt,_t,Et,gt].some(function(t){return e[t]>=0})}function Ph(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,o=wn(t,{elementContext:"reference"}),a=wn(t,{altBoundary:!0}),c=Qo(o,i),l=Qo(a,r,s),u=Xo(c),h=Xo(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const Fh={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ph};function Vh(e,t,n){var i=Dt(e),r=[gt,pt].indexOf(i)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*r,[gt,_t].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function Bh(e){var t=e.state,n=e.options,i=e.name,r=n.offset,s=r===void 0?[0,0]:r,o=hc.reduce(function(u,h){return u[h]=Vh(h,t.rects,s),u},{}),a=o[t.placement],c=a.x,l=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=o}const $h={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Bh};function jh(e){var t=e.state,n=e.name;t.modifiersData[n]=yc({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Uh={name:"popperOffsets",enabled:!0,phase:"read",fn:jh,data:{}};function qh(e){return e==="x"?"y":"x"}function zh(e){var t=e.state,n=e.options,i=e.name,r=n.mainAxis,s=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,f=n.tether,d=f===void 0?!0:f,_=n.tetherOffset,v=_===void 0?0:_,E=wn(t,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),S=Dt(t.placement),x=Ve(t.placement),k=!x,I=xs(S),D=qh(I),R=t.modifiersData.popperOffsets,V=t.rects.reference,q=t.rects.popper,Q=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,G=typeof Q=="number"?{mainAxis:Q,altAxis:Q}:Object.assign({mainAxis:0,altAxis:0},Q),it=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,Tt={x:0,y:0};if(R){if(s){var ht,te=I==="y"?pt:gt,ee=I==="y"?Et:_t,mt=I==="y"?"height":"width",At=R[I],Wn=At+E[te],ne=At-E[ee],Qn=d?-q[mt]/2:0,wr=x===Me?V[mt]:q[mt],tn=x===Me?-q[mt]:-V[mt],Xn=t.elements.arrow,be=d&&Xn?ks(Xn):{width:0,height:0},$t=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:pc(),en=$t[te],Yn=$t[ee],ie=un(0,V[mt],be[mt]),Er=k?V[mt]/2-Qn-ie-en-G.mainAxis:wr-ie-en-G.mainAxis,$u=k?-V[mt]/2+Qn+ie+Yn+G.mainAxis:tn+ie+Yn+G.mainAxis,_r=t.elements.arrow&&On(t.elements.arrow),ju=_r?I==="y"?_r.clientTop||0:_r.clientLeft||0:0,No=(ht=it?.[I])!=null?ht:0,Uu=At+Er-No-ju,qu=At+$u-No,Ro=un(d?Ai(Wn,Uu):Wn,At,d?de(ne,qu):ne);R[I]=Ro,Tt[I]=Ro-At}if(a){var Mo,zu=I==="x"?pt:gt,Hu=I==="x"?Et:_t,re=R[D],Jn=D==="y"?"height":"width",Po=re+E[zu],Fo=re-E[Hu],br=[pt,gt].indexOf(S)!==-1,Vo=(Mo=it?.[D])!=null?Mo:0,Bo=br?Po:re-V[Jn]-q[Jn]-Vo+G.altAxis,$o=br?re+V[Jn]+q[Jn]-Vo-G.altAxis:Fo,jo=d&&br?ph(Bo,re,$o):un(d?Bo:Po,re,d?$o:Fo);R[D]=jo,Tt[D]=jo-re}t.modifiersData[i]=Tt}}const Hh={name:"preventOverflow",enabled:!0,phase:"main",fn:zh,requiresIfExists:["offset"]};function Kh(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Gh(e){return e===bt(e)||!wt(e)?Ds(e):Kh(e)}function Wh(e){var t=e.getBoundingClientRect(),n=Pe(t.width)/e.offsetWidth||1,i=Pe(t.height)/e.offsetHeight||1;return n!==1||i!==1}function Qh(e,t,n){n===void 0&&(n=!1);var i=wt(t),r=wt(t)&&Wh(t),s=Yt(t),o=Fe(e,r,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&((Lt(t)!=="body"||Os(s))&&(a=Gh(t)),wt(t)?(c=Fe(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=Ls(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Xh(e){var t=new Map,n=new Set,i=[];e.forEach(function(s){t.set(s.name,s)});function r(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=t.get(a);c&&r(c)}}),i.push(s)}return e.forEach(function(s){n.has(s.name)||r(s)}),i}function Yh(e){var t=Xh(e);return ch.reduce(function(n,i){return n.concat(t.filter(function(r){return r.phase===i}))},[])}function Jh(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Zh(e){var t=e.reduce(function(n,i){var r=n[i.name];return n[i.name]=r?Object.assign({},r,i,{options:Object.assign({},r.options,i.options),data:Object.assign({},r.data,i.data)}):i,n},{});return Object.keys(t).map(function(n){return t[n]})}var Yo={placement:"bottom",modifiers:[],strategy:"absolute"};function Jo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function td(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,i=n===void 0?[]:n,r=t.defaultOptions,s=r===void 0?Yo:r;return function(a,c,l){l===void 0&&(l=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Yo,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],f=!1,d={state:u,setOptions:function(S){var x=typeof S=="function"?S(u.options):S;v(),u.options=Object.assign({},s,u.options,x),u.scrollParents={reference:me(a)?hn(a):a.contextElement?hn(a.contextElement):[],popper:hn(c)};var k=Yh(Zh([].concat(i,u.options.modifiers)));return u.orderedModifiers=k.filter(function(I){return I.enabled}),_(),d.update()},forceUpdate:function(){if(!f){var S=u.elements,x=S.reference,k=S.popper;if(Jo(x,k)){u.rects={reference:Qh(x,On(k),u.options.strategy==="fixed"),popper:ks(k)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(G){return u.modifiersData[G.name]=Object.assign({},G.data)});for(var I=0;I<u.orderedModifiers.length;I++){if(u.reset===!0){u.reset=!1,I=-1;continue}var D=u.orderedModifiers[I],R=D.fn,V=D.options,q=V===void 0?{}:V,Q=D.name;typeof R=="function"&&(u=R({state:u,options:q,name:Q,instance:d})||u)}}}},update:Jh(function(){return new Promise(function(E){d.forceUpdate(),E(u)})}),destroy:function(){v(),f=!0}};if(!Jo(a,c))return d;d.setOptions(l).then(function(E){!f&&l.onFirstUpdate&&l.onFirstUpdate(E)});function _(){u.orderedModifiers.forEach(function(E){var S=E.name,x=E.options,k=x===void 0?{}:x,I=E.effect;if(typeof I=="function"){var D=I({state:u,name:S,instance:d,options:k}),R=function(){};h.push(D||R)}})}function v(){h.forEach(function(E){return E()}),h=[]}return d}}var ed=[Ah,Uh,bh,hh,$h,Mh,Hh,yh,Fh],Ns=td({defaultModifiers:ed}),jt=globalThis&&globalThis.__assign||function(){return jt=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},jt.apply(this,arguments)},ti=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,s;i<r;i++)(s||!(i in t))&&(s||(s=Array.prototype.slice.call(t,0,i)),s[i]=t[i]);return e.concat(s||Array.prototype.slice.call(t))},ae={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,onShow:function(){},onHide:function(){},onToggle:function(){}},wc=function(){function e(t,n,i){t===void 0&&(t=null),n===void 0&&(n=null),i===void 0&&(i=ae),this._targetEl=t,this._triggerEl=n,this._options=jt(jt({},ae),i),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return e.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},e.prototype._setupEventListeners=function(){var t=this,n=this._getTriggerEvents();this._options.triggerType==="click"&&n.showEvents.forEach(function(i){t._triggerEl.addEventListener(i,function(){t.toggle()})}),this._options.triggerType==="hover"&&(n.showEvents.forEach(function(i){t._triggerEl.addEventListener(i,function(){i==="click"?t.toggle():setTimeout(function(){t.show()},t._options.delay)}),t._targetEl.addEventListener(i,function(){t.show()})}),n.hideEvents.forEach(function(i){t._triggerEl.addEventListener(i,function(){setTimeout(function(){t._targetEl.matches(":hover")||t.hide()},t._options.delay)}),t._targetEl.addEventListener(i,function(){setTimeout(function(){t._triggerEl.matches(":hover")||t.hide()},t._options.delay)})}))},e.prototype._createPopperInstance=function(){return Ns(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},e.prototype._setupClickOutsideListener=function(){var t=this;this._clickOutsideEventListener=function(n){t._handleClickOutside(n,t._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},e.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},e.prototype._handleClickOutside=function(t,n){var i=t.target;i!==n&&!n.contains(i)&&!this._triggerEl.contains(i)&&this.isVisible()&&this.hide()},e.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["click"],hideEvents:[]}}},e.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},e.prototype.isVisible=function(){return this._visible},e.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(t){return jt(jt({},t),{modifiers:ti(ti([],t.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},e.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(t){return jt(jt({},t),{modifiers:ti(ti([],t.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},e}();typeof window<"u"&&(window.Dropdown=wc);function nd(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(e){var t=e.getAttribute("data-dropdown-toggle"),n=document.getElementById(t);if(n){var i=e.getAttribute("data-dropdown-placement"),r=e.getAttribute("data-dropdown-offset-skidding"),s=e.getAttribute("data-dropdown-offset-distance"),o=e.getAttribute("data-dropdown-trigger"),a=e.getAttribute("data-dropdown-delay");new wc(n,e,{placement:i||ae.placement,triggerType:o||ae.triggerType,offsetSkidding:r?parseInt(r):ae.offsetSkidding,offsetDistance:s?parseInt(s):ae.offsetDistance,delay:a?parseInt(a):ae.delay})}else console.error('The dropdown element with id "'.concat(t,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}var Ii=globalThis&&globalThis.__assign||function(){return Ii=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ii.apply(this,arguments)},Ce={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},qr=function(){function e(t,n){t===void 0&&(t=null),n===void 0&&(n=Ce),this._targetEl=t,this._options=Ii(Ii({},Ce),n),this._isHidden=!0,this._backdropEl=null,this._init()}return e.prototype._init=function(){var t=this;this._targetEl&&this._getPlacementClasses().map(function(n){t._targetEl.classList.add(n)})},e.prototype._createBackdrop=function(){var t;if(this._isHidden){var n=document.createElement("div");n.setAttribute("modal-backdrop",""),(t=n.classList).add.apply(t,this._options.backdropClasses.split(" ")),document.querySelector("body").append(n),this._backdropEl=n}},e.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},e.prototype._setupModalCloseEventListeners=function(){var t=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(n){t._handleOutsideClick(n.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(n){n.key==="Escape"&&t.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},e.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},e.prototype._handleOutsideClick=function(t){(t===this._targetEl||t===this._backdropEl&&this.isVisible())&&this.hide()},e.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},e.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},e.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.closable&&this._setupModalCloseEventListeners(),this._options.onShow(this))},e.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},e.prototype.isVisible=function(){return!this._isHidden},e.prototype.isHidden=function(){return this._isHidden},e}();typeof window<"u"&&(window.Modal=qr);var ei=function(e,t){return t.some(function(n){return n.id===e})?t.find(function(n){return n.id===e}):null};function id(){var e=[];document.querySelectorAll("[data-modal-target]").forEach(function(t){var n=t.getAttribute("data-modal-target"),i=document.getElementById(n);if(i){var r=i.getAttribute("data-modal-placement"),s=i.getAttribute("data-modal-backdrop");ei(n,e)||e.push({id:n,object:new qr(i,{placement:r||Ce.placement,backdrop:s||Ce.backdrop})})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(t){var n=t.getAttribute("data-modal-toggle"),i=document.getElementById(n);if(i){var r=i.getAttribute("data-modal-placement"),s=i.getAttribute("data-modal-backdrop"),o=ei(n,e);o||(o={id:n,object:new qr(i,{placement:r||Ce.placement,backdrop:s||Ce.backdrop})},e.push(o)),t.addEventListener("click",function(){o.object.toggle()})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(t){var n=t.getAttribute("data-modal-show"),i=document.getElementById(n);if(i){var r=ei(n,e);r?t.addEventListener("click",function(){r.object.isHidden&&r.object.show()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(t){var n=t.getAttribute("data-modal-hide"),i=document.getElementById(n);if(i){var r=ei(n,e);r?t.addEventListener("click",function(){r.object.isVisible&&r.object.hide()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}var Ci=globalThis&&globalThis.__assign||function(){return Ci=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ci.apply(this,arguments)},ce={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},Ec=function(){function e(t,n){t===void 0&&(t=null),n===void 0&&(n=ce),this._targetEl=t,this._options=Ci(Ci({},ce),n),this._visible=!1,this._init()}return e.prototype._init=function(){var t=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(n){t._targetEl.classList.add(n)}),document.addEventListener("keydown",function(n){n.key==="Escape"&&t.isVisible()&&t.hide()})},e.prototype.hide=function(){var t=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){t._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){t._targetEl.classList.add(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){t._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){t._targetEl.classList.add(n)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},e.prototype.show=function(){var t=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){t._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){t._targetEl.classList.remove(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){t._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){t._targetEl.classList.remove(n)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},e.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},e.prototype._createBackdrop=function(){var t,n=this;if(!this._visible){var i=document.createElement("div");i.setAttribute("drawer-backdrop",""),(t=i.classList).add.apply(t,this._options.backdropClasses.split(" ")),document.querySelector("body").append(i),i.addEventListener("click",function(){n.hide()})}},e.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},e.prototype._getPlacementClasses=function(t){switch(t){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]};default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]}}},e.prototype.isHidden=function(){return!this._visible},e.prototype.isVisible=function(){return this._visible},e}();typeof window<"u"&&(window.Drawer=Ec);var ni=function(e,t){if(t.some(function(n){return n.id===e}))return t.find(function(n){return n.id===e})};function rd(){var e=[];document.querySelectorAll("[data-drawer-target]").forEach(function(t){var n=t.getAttribute("data-drawer-target"),i=document.getElementById(n);if(i){var r=t.getAttribute("data-drawer-placement"),s=t.getAttribute("data-drawer-body-scrolling"),o=t.getAttribute("data-drawer-backdrop"),a=t.getAttribute("data-drawer-edge"),c=t.getAttribute("data-drawer-edge-offset");ni(n,e)||e.push({id:n,object:new Ec(i,{placement:r||ce.placement,bodyScrolling:s?s==="true":ce.bodyScrolling,backdrop:o?o==="true":ce.backdrop,edge:a?a==="true":ce.edge,edgeOffset:c||ce.edgeOffset})})}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(t){var n=t.getAttribute("data-drawer-toggle"),i=document.getElementById(n);if(i){var r=ni(n,e);r?t.addEventListener("click",function(){r.object.toggle()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(t){var n=t.getAttribute("data-drawer-dismiss")?t.getAttribute("data-drawer-dismiss"):t.getAttribute("data-drawer-hide"),i=document.getElementById(n);if(i){var r=ni(n,e);r?t.addEventListener("click",function(){r.object.hide()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(t){var n=t.getAttribute("data-drawer-show"),i=document.getElementById(n);if(i){var r=ni(n,e);r?t.addEventListener("click",function(){r.object.show()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}var Si=globalThis&&globalThis.__assign||function(){return Si=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Si.apply(this,arguments)},Zo={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},_c=function(){function e(t,n){t===void 0&&(t=[]),n===void 0&&(n=Zo),this._items=t,this._activeTab=n?this.getTab(n.defaultTabId):null,this._options=Si(Si({},Zo),n),this._init()}return e.prototype._init=function(){var t=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(n){n.triggerEl.addEventListener("click",function(){t.show(n.id)})}))},e.prototype.getActiveTab=function(){return this._activeTab},e.prototype._setActiveTab=function(t){this._activeTab=t},e.prototype.getTab=function(t){return this._items.filter(function(n){return n.id===t})[0]},e.prototype.show=function(t,n){var i,r,s=this;n===void 0&&(n=!1);var o=this.getTab(t);o===this._activeTab&&!n||(this._items.map(function(a){var c,l;a!==o&&((c=a.triggerEl.classList).remove.apply(c,s._options.activeClasses.split(" ")),(l=a.triggerEl.classList).add.apply(l,s._options.inactiveClasses.split(" ")),a.targetEl.classList.add("hidden"),a.triggerEl.setAttribute("aria-selected","false"))}),(i=o.triggerEl.classList).add.apply(i,this._options.activeClasses.split(" ")),(r=o.triggerEl.classList).remove.apply(r,this._options.inactiveClasses.split(" ")),o.triggerEl.setAttribute("aria-selected","true"),o.targetEl.classList.remove("hidden"),this._setActiveTab(o),this._options.onShow(this,o))},e}();typeof window<"u"&&(window.Tabs=_c);function sd(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(e){var t=[],n=null;e.querySelectorAll('[role="tab"]').forEach(function(i){var r=i.getAttribute("aria-selected")==="true",s={id:i.getAttribute("data-tabs-target"),triggerEl:i,targetEl:document.querySelector(i.getAttribute("data-tabs-target"))};t.push(s),r&&(n=s.id)}),new _c(t,{defaultTabId:n})})}var Ut=globalThis&&globalThis.__assign||function(){return Ut=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ut.apply(this,arguments)},ii=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,s;i<r;i++)(s||!(i in t))&&(s||(s=Array.prototype.slice.call(t,0,i)),s[i]=t[i]);return e.concat(s||Array.prototype.slice.call(t))},ki={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},bc=function(){function e(t,n,i){t===void 0&&(t=null),n===void 0&&(n=null),i===void 0&&(i=ki),this._targetEl=t,this._triggerEl=n,this._options=Ut(Ut({},ki),i),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return e.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},e.prototype._setupEventListeners=function(){var t=this,n=this._getTriggerEvents();n.showEvents.forEach(function(i){t._triggerEl.addEventListener(i,function(){t.show()})}),n.hideEvents.forEach(function(i){t._triggerEl.addEventListener(i,function(){t.hide()})})},e.prototype._createPopperInstance=function(){return Ns(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},e.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},e.prototype._setupKeydownListener=function(){var t=this;this._keydownEventListener=function(n){n.key==="Escape"&&t.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},e.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},e.prototype._setupClickOutsideListener=function(){var t=this;this._clickOutsideEventListener=function(n){t._handleClickOutside(n,t._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},e.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},e.prototype._handleClickOutside=function(t,n){var i=t.target;i!==n&&!n.contains(i)&&!this._triggerEl.contains(i)&&this.isVisible()&&this.hide()},e.prototype.isVisible=function(){return this._visible},e.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},e.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(t){return Ut(Ut({},t),{modifiers:ii(ii([],t.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},e.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(t){return Ut(Ut({},t),{modifiers:ii(ii([],t.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},e}();typeof window<"u"&&(window.Tooltip=bc);function od(){document.querySelectorAll("[data-tooltip-target]").forEach(function(e){var t=e.getAttribute("data-tooltip-target"),n=document.getElementById(t);if(n){var i=e.getAttribute("data-tooltip-trigger"),r=e.getAttribute("data-tooltip-placement");new bc(n,e,{placement:r||ki.placement,triggerType:i||ki.triggerType})}else console.error('The tooltip element with id "'.concat(t,'" does not exist. Please check the data-tooltip-target attribute.'))})}var qt=globalThis&&globalThis.__assign||function(){return qt=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qt.apply(this,arguments)},ri=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,s;i<r;i++)(s||!(i in t))&&(s||(s=Array.prototype.slice.call(t,0,i)),s[i]=t[i]);return e.concat(s||Array.prototype.slice.call(t))},dn={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Tc=function(){function e(t,n,i){t===void 0&&(t=null),n===void 0&&(n=null),i===void 0&&(i=dn),this._targetEl=t,this._triggerEl=n,this._options=qt(qt({},dn),i),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return e.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},e.prototype._setupEventListeners=function(){var t=this,n=this._getTriggerEvents();n.showEvents.forEach(function(i){t._triggerEl.addEventListener(i,function(){t.show()}),t._targetEl.addEventListener(i,function(){t.show()})}),n.hideEvents.forEach(function(i){t._triggerEl.addEventListener(i,function(){setTimeout(function(){t._targetEl.matches(":hover")||t.hide()},100)}),t._targetEl.addEventListener(i,function(){setTimeout(function(){t._triggerEl.matches(":hover")||t.hide()},100)})})},e.prototype._createPopperInstance=function(){return Ns(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},e.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},e.prototype._setupKeydownListener=function(){var t=this;this._keydownEventListener=function(n){n.key==="Escape"&&t.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},e.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},e.prototype._setupClickOutsideListener=function(){var t=this;this._clickOutsideEventListener=function(n){t._handleClickOutside(n,t._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},e.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},e.prototype._handleClickOutside=function(t,n){var i=t.target;i!==n&&!n.contains(i)&&!this._triggerEl.contains(i)&&this.isVisible()&&this.hide()},e.prototype.isVisible=function(){return this._visible},e.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},e.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(t){return qt(qt({},t),{modifiers:ri(ri([],t.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},e.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(t){return qt(qt({},t),{modifiers:ri(ri([],t.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},e}();typeof window<"u"&&(window.Popover=Tc);function ad(){document.querySelectorAll("[data-popover-target]").forEach(function(e){var t=e.getAttribute("data-popover-target"),n=document.getElementById(t);if(n){var i=e.getAttribute("data-popover-trigger"),r=e.getAttribute("data-popover-placement"),s=e.getAttribute("data-popover-offset");new Tc(n,e,{placement:r||dn.placement,offset:s?parseInt(s):dn.offset,triggerType:i||dn.triggerType})}else console.error('The popover element with id "'.concat(t,'" does not exist. Please check the data-popover-target attribute.'))})}var xi=globalThis&&globalThis.__assign||function(){return xi=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xi.apply(this,arguments)},zr={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Ac=function(){function e(t,n,i,r){t===void 0&&(t=null),n===void 0&&(n=null),i===void 0&&(i=null),r===void 0&&(r=zr),this._parentEl=t,this._triggerEl=n,this._targetEl=i,this._options=xi(xi({},zr),r),this._visible=!1,this._init()}return e.prototype._init=function(){var t=this;if(this._triggerEl){var n=this._getTriggerEventTypes(this._options.triggerType);n.showEvents.forEach(function(i){t._triggerEl.addEventListener(i,function(){t.show()}),t._targetEl.addEventListener(i,function(){t.show()})}),n.hideEvents.forEach(function(i){t._parentEl.addEventListener(i,function(){t._parentEl.matches(":hover")||t.hide()})})}},e.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},e.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},e.prototype.toggle=function(){this._visible?this.hide():this.show()},e.prototype.isHidden=function(){return!this._visible},e.prototype.isVisible=function(){return this._visible},e.prototype._getTriggerEventTypes=function(t){switch(t){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},e}();typeof window<"u"&&(window.Dial=Ac);function cd(){document.querySelectorAll("[data-dial-init]").forEach(function(e){var t=e.querySelector("[data-dial-toggle]");if(t){var n=t.getAttribute("data-dial-toggle"),i=document.getElementById(n);if(i){var r=t.getAttribute("data-dial-trigger");new Ac(e,t,i,{triggerType:r||zr.triggerType})}else console.error("Dial with id ".concat(n," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(e.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}var ld=new Ku("load",[Gu,Wu,Qu,Xu,nd,id,rd,sd,od,ad,cd]);ld.init();let ud=document.getElementById("barra");ud.innerHTML=`

<div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-red border border-red-500 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 ">
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        <a data-tooltip-target="tooltip-home" href="index.html" class="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span class="sr-only">Home</span>
        </a>
        <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Home
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a data-tooltip-target="tooltip-wallet" href="" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>      
            <span class="sr-only">Wallet</span>
        </a>
        <div id="tooltip-wallet" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Wallet
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div class="flex items-center justify-center">
            <a data-tooltip-target="tooltip-new" href="editar-index.html" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>          
                <span class="sr-only">New item</span>
            </a>
        </div>
        <div id="tooltip-new" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Create new item
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a data-tooltip-target="tooltip-settings" href="" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
      </svg>      
            <span class="sr-only">Settings</span>
        </a>
        <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Settings
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a data-tooltip-target="tooltip-profile" href="" class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>      
            <span class="sr-only">Profile</span>
        </a>
        <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>
`;let hd=document.getElementById("header");hd.innerHTML=`
<header class="flex flex-row justify-between items-center p-4 bg-red">
<div>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg>

</div>
<div>casas en la zona</div> 
<div>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>

</div>
</header>`;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},dd=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ic(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):dd(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||a==null||l==null||h==null)throw new fd;const f=s<<2|a>>4;if(i.push(f),l!==64){const d=a<<4&240|l>>2;if(i.push(d),h!==64){const _=l<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class fd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pd=function(e){const t=Ic(e);return Cc.encodeByteArray(t,!0)},Di=function(e){return pd(e).replace(/\./g,"")},gd=function(e){try{return Cc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=()=>md().__FIREBASE_DEFAULTS__,yd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},wd=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gd(e[1]);return t&&JSON.parse(t)},Sc=()=>{try{return vd()||yd()||wd()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ed=e=>{var t,n;return(n=(t=Sc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},_d=e=>{const t=Ed(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},bd=()=>{var e;return(e=Sc())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Di(JSON.stringify(n)),Di(JSON.stringify(o)),a].join(".")}function Id(){try{return typeof indexedDB=="object"}catch{return!1}}function Cd(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="FirebaseError";class Ge extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=Sd,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kc.prototype.create)}}class kc{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?kd(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ge(r,a,i)}}function kd(e,t){return e.replace(xd,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const xd=/\{\$([^}]+)}/g;function Hr(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],o=t[r];if(ta(s)&&ta(o)){if(!Hr(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function ta(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e){return e&&e._delegate?e._delegate:e}class En{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Td;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t?.identifier),r=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Od(t))try{this.getOrInitializeService({instanceIdentifier:se})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=se){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=se){return this.instances.has(t)}getOptions(t=se){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ld(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=se){return this.component?this.component.multipleInstances?t:se:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ld(e){return e===se?void 0:e}function Od(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Dd(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(M||(M={}));const Rd={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Md=M.INFO,Pd={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Fd=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=Pd[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xc{constructor(t){this.name=t,this._logLevel=Md,this._logHandler=Fd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in M))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...t),this._logHandler(this,M.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...t),this._logHandler(this,M.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,M.INFO,...t),this._logHandler(this,M.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,M.WARN,...t),this._logHandler(this,M.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...t),this._logHandler(this,M.ERROR,...t)}}const Vd=(e,t)=>t.some(n=>e instanceof n);let ea,na;function Bd(){return ea||(ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $d(){return na||(na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dc=new WeakMap,Kr=new WeakMap,Lc=new WeakMap,Tr=new WeakMap,Rs=new WeakMap;function jd(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Kt(e.result)),r()},o=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Dc.set(n,e)}).catch(()=>{}),Rs.set(t,e),t}function Ud(e){if(Kr.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Kr.set(e,t)}let Gr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Kr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Lc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function qd(e){Gr=e(Gr)}function zd(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Ar(this),t,...n);return Lc.set(i,t.sort?t.sort():[t]),Kt(i)}:$d().includes(e)?function(...t){return e.apply(Ar(this),t),Kt(Dc.get(this))}:function(...t){return Kt(e.apply(Ar(this),t))}}function Hd(e){return typeof e=="function"?zd(e):(e instanceof IDBTransaction&&Ud(e),Vd(e,Bd())?new Proxy(e,Gr):e)}function Kt(e){if(e instanceof IDBRequest)return jd(e);if(Tr.has(e))return Tr.get(e);const t=Hd(e);return t!==e&&(Tr.set(e,t),Rs.set(t,e)),t}const Ar=e=>Rs.get(e);function Kd(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Kt(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Kt(o.result),c.oldVersion,c.newVersion,Kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Gd=["get","getKey","getAll","getAllKeys","count"],Wd=["put","add","delete","clear"],Ir=new Map;function ia(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ir.get(t))return Ir.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Wd.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Gd.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ir.set(t,s),s}qd(e=>({...e,get:(t,n,i)=>ia(t,n)||e.get(t,n,i),has:(t,n)=>!!ia(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xd(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Xd(e){const t=e.getComponent();return t?.type==="VERSION"}const Wr="@firebase/app",ra="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new xc("@firebase/app"),Yd="@firebase/app-compat",Jd="@firebase/analytics-compat",Zd="@firebase/analytics",tf="@firebase/app-check-compat",ef="@firebase/app-check",nf="@firebase/auth",rf="@firebase/auth-compat",sf="@firebase/database",of="@firebase/database-compat",af="@firebase/functions",cf="@firebase/functions-compat",lf="@firebase/installations",uf="@firebase/installations-compat",hf="@firebase/messaging",df="@firebase/messaging-compat",ff="@firebase/performance",pf="@firebase/performance-compat",gf="@firebase/remote-config",mf="@firebase/remote-config-compat",vf="@firebase/storage",yf="@firebase/storage-compat",wf="@firebase/firestore",Ef="@firebase/firestore-compat",_f="firebase",bf="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]",Tf={[Wr]:"fire-core",[Yd]:"fire-core-compat",[Zd]:"fire-analytics",[Jd]:"fire-analytics-compat",[ef]:"fire-app-check",[tf]:"fire-app-check-compat",[nf]:"fire-auth",[rf]:"fire-auth-compat",[sf]:"fire-rtdb",[of]:"fire-rtdb-compat",[af]:"fire-fn",[cf]:"fire-fn-compat",[lf]:"fire-iid",[uf]:"fire-iid-compat",[hf]:"fire-fcm",[df]:"fire-fcm-compat",[ff]:"fire-perf",[pf]:"fire-perf-compat",[gf]:"fire-rc",[mf]:"fire-rc-compat",[vf]:"fire-gcs",[yf]:"fire-gcs-compat",[wf]:"fire-fst",[Ef]:"fire-fst-compat","fire-js":"fire-js",[_f]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Map,Xr=new Map;function Af(e,t){try{e.container.addComponent(t)}catch(n){ve.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ni(e){const t=e.name;if(Xr.has(t))return ve.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,e);for(const n of Oi.values())Af(n,e);return!0}function If(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new kc("app","Firebase",Cf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=bf;function Oc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Qr,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw Gt.create("bad-app-name",{appName:String(r)});if(n||(n=bd()),!n)throw Gt.create("no-options");const s=Oi.get(r);if(s){if(Hr(n,s.options)&&Hr(i,s.config))return s;throw Gt.create("duplicate-app",{appName:r})}const o=new Nd(r);for(const c of Xr.values())o.addComponent(c);const a=new Sf(n,i,o);return Oi.set(r,a),a}function xf(e=Qr){const t=Oi.get(e);if(!t&&e===Qr)return Oc();if(!t)throw Gt.create("no-app",{appName:e});return t}function ke(e,t,n){var i;let r=(i=Tf[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ve.warn(a.join(" "));return}Ni(new En(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="firebase-heartbeat-database",Lf=1,_n="firebase-heartbeat-store";let Cr=null;function Nc(){return Cr||(Cr=Kd(Df,Lf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_n)}}}).catch(e=>{throw Gt.create("idb-open",{originalErrorMessage:e.message})})),Cr}async function Of(e){try{return(await Nc()).transaction(_n).objectStore(_n).get(Rc(e))}catch(t){if(t instanceof Ge)ve.warn(t.message);else{const n=Gt.create("idb-get",{originalErrorMessage:t?.message});ve.warn(n.message)}}}async function sa(e,t){try{const i=(await Nc()).transaction(_n,"readwrite");return await i.objectStore(_n).put(t,Rc(e)),i.done}catch(n){if(n instanceof Ge)ve.warn(n.message);else{const i=Gt.create("idb-set",{originalErrorMessage:n?.message});ve.warn(i.message)}}}function Rc(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=1024,Rf=30*24*60*60*1e3;class Mf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ff(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=oa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Rf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oa(),{heartbeatsToSend:n,unsentEntries:i}=Pf(this._heartbeatsCache.heartbeats),r=Di(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function oa(){return new Date().toISOString().substring(0,10)}function Pf(e,t=Nf){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),aa(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),aa(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ff{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Id()?Cd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Of(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return sa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return sa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function aa(e){return Di(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e){Ni(new En("platform-logger",t=>new Qd(t),"PRIVATE")),Ni(new En("heartbeat",t=>new Mf(t),"PRIVATE")),ke(Wr,ra,e),ke(Wr,ra,"esm2017"),ke("fire-js","")}Vf("");var Bf="firebase",$f="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke(Bf,$f,"app");var jf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,Ms=Ms||{},T=jf||self;function Ri(){}function Qi(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Nn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Uf(e){return Object.prototype.hasOwnProperty.call(e,Sr)&&e[Sr]||(e[Sr]=++qf)}var Sr="closure_uid_"+(1e9*Math.random()>>>0),qf=0;function zf(e,t,n){return e.call.apply(e.bind,arguments)}function Hf(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function at(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=zf:at=Hf,at.apply(null,arguments)}function si(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function Z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(i,o)}}function Jt(){this.s=this.s,this.o=this.o}var Kf=0;Jt.prototype.s=!1;Jt.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Kf!=0)&&Uf(this)};Jt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ps(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function ca(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Qi(i)){const r=e.length||0,s=i.length||0;e.length=r+s;for(let o=0;o<s;o++)e[r+o]=i[o]}else e.push(i)}}function ct(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var Gf=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",Ri,t),T.removeEventListener("test",Ri,t)}catch{}return e}();function Mi(e){return/^[\s\xa0]*$/.test(e)}var la=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function kr(e,t){return e<t?-1:e>t?1:0}function Xi(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function St(e){return Xi().indexOf(e)!=-1}function Fs(e){return Fs[" "](e),e}Fs[" "]=Ri;function Pc(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var Wf=St("Opera"),Be=St("Trident")||St("MSIE"),Fc=St("Edge"),Yr=Fc||Be,Vc=St("Gecko")&&!(Xi().toLowerCase().indexOf("webkit")!=-1&&!St("Edge"))&&!(St("Trident")||St("MSIE"))&&!St("Edge"),Qf=Xi().toLowerCase().indexOf("webkit")!=-1&&!St("Edge");function Bc(){var e=T.document;return e?e.documentMode:void 0}var Pi;t:{var xr="",Dr=function(){var e=Xi();if(Vc)return/rv:([^\);]+)(\)|;)/.exec(e);if(Fc)return/Edge\/([\d\.]+)/.exec(e);if(Be)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Qf)return/WebKit\/(\S+)/.exec(e);if(Wf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Dr&&(xr=Dr?Dr[1]:""),Be){var Lr=Bc();if(Lr!=null&&Lr>parseFloat(xr)){Pi=String(Lr);break t}}Pi=xr}var Xf={};function Yf(){return Pc(Xf,9,function(){let e=0;const t=la(String(Pi)).split("."),n=la("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;e=kr(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||kr(r[2].length==0,s[2].length==0)||kr(r[2],s[2]),r=r[3],s=s[3]}while(e==0)}return 0<=e})}var Jr;if(T.document&&Be){var ua=Bc();Jr=ua||parseInt(Pi,10)||void 0}else Jr=void 0;var Jf=Jr;function bn(e,t){if(ct.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Vc){t:{try{Fs(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Zf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&bn.$.h.call(this)}}Z(bn,ct);var Zf={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Rn="closure_listenable_"+(1e6*Math.random()|0),tp=0;function ep(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++tp,this.fa=this.ia=!1}function Yi(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Vs(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function $c(e){const t={};for(const n in e)t[n]=e[n];return t}const ha="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jc(e,t){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)e[n]=i[n];for(let s=0;s<ha.length;s++)n=ha[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Ji(e){this.src=e,this.g={},this.h=0}Ji.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ts(e,t,i,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new ep(t,this.src,s,!!i,r),t.ia=n,e.push(t)),t};function Zr(e,t){var n=t.type;if(n in e.g){var i=e.g[n],r=Mc(i,t),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Yi(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ts(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==i)return r}return-1}var Bs="closure_lm_"+(1e6*Math.random()|0),Or={};function Uc(e,t,n,i,r){if(i&&i.once)return zc(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Uc(e,t[s],n,i,r);return null}return n=Us(n),e&&e[Rn]?e.O(t,n,Nn(i)?!!i.capture:!!i,r):qc(e,t,n,!1,i,r)}function qc(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=Nn(r)?!!r.capture:!!r,a=js(e);if(a||(e[Bs]=a=new Ji(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=np(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Gf||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(Kc(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function np(){function e(n){return t.call(e.src,e.listener,n)}const t=ip;return e}function zc(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)zc(e,t[s],n,i,r);return null}return n=Us(n),e&&e[Rn]?e.P(t,n,Nn(i)?!!i.capture:!!i,r):qc(e,t,n,!0,i,r)}function Hc(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)Hc(e,t[s],n,i,r);else i=Nn(i)?!!i.capture:!!i,n=Us(n),e&&e[Rn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ts(s,n,i,r),-1<n&&(Yi(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=js(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ts(t,n,i,r)),(n=-1<e?t[e]:null)&&$s(n))}function $s(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Rn])Zr(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Kc(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=js(t))?(Zr(n,e),n.h==0&&(n.src=null,t[Bs]=null)):Yi(e)}}}function Kc(e){return e in Or?Or[e]:Or[e]="on"+e}function ip(e,t){if(e.fa)e=!0;else{t=new bn(t,this);var n=e.listener,i=e.la||e.src;e.ia&&$s(e),e=n.call(i,t)}return e}function js(e){return e=e[Bs],e instanceof Ji?e:null}var Nr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Us(e){return typeof e=="function"?e:(e[Nr]||(e[Nr]=function(t){return e.handleEvent(t)}),e[Nr])}function J(){Jt.call(this),this.i=new Ji(this),this.S=this,this.J=null}Z(J,Jt);J.prototype[Rn]=!0;J.prototype.removeEventListener=function(e,t,n,i){Hc(this,e,t,n,i)};function nt(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new ct(t,e);else if(t instanceof ct)t.target=t.target||e;else{var r=t;t=new ct(i,e),jc(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=oi(o,i,!0,t)&&r}if(o=t.g=e,r=oi(o,i,!0,t)&&r,r=oi(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=oi(o,i,!1,t)&&r}J.prototype.N=function(){if(J.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Yi(n[i]);delete e.g[t],e.h--}}this.J=null};J.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};J.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function oi(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Zr(e.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var qs=T.JSON.stringify;function rp(){var e=Qc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class sp{constructor(){this.h=this.g=null}add(t,n){const i=Gc.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Gc=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new op,e=>e.reset());class op{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ap(e){T.setTimeout(()=>{throw e},0)}function Wc(e,t){es||cp(),ns||(es(),ns=!0),Qc.add(e,t)}var es;function cp(){var e=T.Promise.resolve(void 0);es=function(){e.then(lp)}}var ns=!1,Qc=new sp;function lp(){for(var e;e=rp();){try{e.h.call(e.g)}catch(n){ap(n)}var t=Gc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ns=!1}function Zi(e,t){J.call(this),this.h=e||1,this.g=t||T,this.j=at(this.qb,this),this.l=Date.now()}Z(Zi,J);m=Zi.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(zs(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){Zi.$.N.call(this),zs(this),delete this.g};function Hs(e,t,n){if(typeof e=="function")n&&(e=at(e,n));else if(e&&typeof e.handleEvent=="function")e=at(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function Xc(e){e.g=Hs(()=>{e.g=null,e.i&&(e.i=!1,Xc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class up extends Jt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Xc(this)}N(){super.N(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tn(e){Jt.call(this),this.h=e,this.g={}}Z(Tn,Jt);var da=[];function Yc(e,t,n,i){Array.isArray(n)||(n&&(da[0]=n.toString()),n=da);for(var r=0;r<n.length;r++){var s=Uc(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Jc(e){Vs(e.g,function(t,n){this.g.hasOwnProperty(n)&&$s(t)},e),e.g={}}Tn.prototype.N=function(){Tn.$.N.call(this),Jc(this)};Tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tr(){this.g=!0}tr.prototype.Ea=function(){this.g=!1};function hp(e,t,n,i,r,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function dp(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+`
`+n+`
`+s+" "+o})}function Se(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+pp(e,n)+(i?" "+i:"")})}function fp(e,t){e.info(function(){return"TIMEOUT: "+t})}tr.prototype.info=function(){};function pp(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return qs(n)}catch{return t}}var _e={},fa=null;function er(){return fa=fa||new J}_e.Ta="serverreachability";function Zc(e){ct.call(this,_e.Ta,e)}Z(Zc,ct);function An(e){const t=er();nt(t,new Zc(t))}_e.STAT_EVENT="statevent";function tl(e,t){ct.call(this,_e.STAT_EVENT,e),this.stat=t}Z(tl,ct);function ft(e){const t=er();nt(t,new tl(t,e))}_e.Ua="timingevent";function el(e,t){ct.call(this,_e.Ua,e),this.size=t}Z(el,ct);function Mn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var nr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ks(){}Ks.prototype.h=null;function pa(e){return e.h||(e.h=e.i())}function il(){}var Pn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Gs(){ct.call(this,"d")}Z(Gs,ct);function Ws(){ct.call(this,"c")}Z(Ws,ct);var is;function ir(){}Z(ir,Ks);ir.prototype.g=function(){return new XMLHttpRequest};ir.prototype.i=function(){return{}};is=new ir;function Fn(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Tn(this),this.P=gp,e=Yr?125:void 0,this.V=new Zi(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new rl}function rl(){this.i=null,this.g="",this.h=!1}var gp=45e3,rs={},Fi={};m=Fn.prototype;m.setTimeout=function(e){this.P=e};function ss(e,t,n){e.L=1,e.v=sr(Pt(t)),e.s=n,e.S=!0,sl(e,null)}function sl(e,t){e.G=Date.now(),Vn(e),e.A=Pt(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),fl(n.i,"t",i),e.C=0,n=e.l.I,e.h=new rl,e.g=Rl(e.l,n?t:null,!e.s),0<e.O&&(e.M=new up(at(e.Pa,e,e.g),e.O)),Yc(e.U,e.g,"readystatechange",e.nb),t=e.I?$c(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),An(),hp(e.j,e.u,e.A,e.m,e.W,e.s)}m.nb=function(e){e=e.target;const t=this.M;t&&Nt(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const u=Nt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Yr||this.g&&(this.h.h||this.g.ja()||ya(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?An(3):An(2)),rr(this);var n=this.g.da();this.aa=n;e:if(ol(this)){var i=ya(this.g);e="";var r=i.length,s=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){le(this),fn(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,dp(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mi(a)){var l=a;break e}}l=null}if(n=l)Se(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,os(this,n);else{this.i=!1,this.o=3,ft(12),le(this),fn(this);break t}}this.S?(al(this,u,o),Yr&&this.i&&u==3&&(Yc(this.U,this.V,"tick",this.mb),this.V.start())):(Se(this.j,this.m,o,null),os(this,o)),u==4&&le(this),this.i&&!this.J&&(u==4?Dl(this.l,this):(this.i=!1,Vn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),le(this),fn(this)}}}catch{}finally{}};function ol(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function al(e,t,n){let i=!0,r;for(;!e.J&&e.C<n.length;)if(r=mp(e,n),r==Fi){t==4&&(e.o=4,ft(14),i=!1),Se(e.j,e.m,null,"[Incomplete Response]");break}else if(r==rs){e.o=4,ft(15),Se(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Se(e.j,e.m,r,null),os(e,r);ol(e)&&r!=Fi&&r!=rs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ft(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),eo(t),t.L=!0,ft(11))):(Se(e.j,e.m,n,"[Invalid Chunked Response]"),le(e),fn(e))}m.mb=function(){if(this.g){var e=Nt(this.g),t=this.g.ja();this.C<t.length&&(rr(this),al(this,e,t),this.i&&e!=4&&Vn(this))}};function mp(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Fi:(n=Number(t.substring(n,i)),isNaN(n)?rs:(i+=1,i+n>t.length?Fi:(t=t.substr(i,n),e.C=i+n,t)))}m.cancel=function(){this.J=!0,le(this)};function Vn(e){e.Y=Date.now()+e.P,cl(e,e.P)}function cl(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Mn(at(e.lb,e),t)}function rr(e){e.B&&(T.clearTimeout(e.B),e.B=null)}m.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(fp(this.j,this.A),this.L!=2&&(An(),ft(17)),le(this),this.o=2,fn(this)):cl(this,this.Y-e)};function fn(e){e.l.H==0||e.J||Dl(e.l,e)}function le(e){rr(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,zs(e.V),Jc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function os(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||as(n.h,e))){if(!e.K&&as(n.h,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)$i(n),cr(n);else break t;to(n),ft(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Mn(at(n.ib,n),6e3));if(1>=ml(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else ue(n,11)}else if((e.K||n.g==e)&&$i(n),!Mi(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=e.g;if(d){const _=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=i.h;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Qs(s,s.h),s.h=null))}if(i.F){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,B(i.G,i.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=Nl(i,i.I?i.oa:null,i.Y),o.K){vl(i.h,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(rr(a),Vn(a)),i.g=o}else kl(i);0<n.i.length&&lr(n)}else l[0]!="stop"&&l[0]!="close"||ue(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ue(n,7):Zs(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}An(4)}catch{}}function vp(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Qi(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function yp(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Qi(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function ll(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Qi(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=yp(e),i=vp(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}var ul=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wp(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function fe(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof fe){this.h=t!==void 0?t:e.h,Vi(this,e.j),this.s=e.s,this.g=e.g,Bi(this,e.m),this.l=e.l,t=e.i;var n=new In;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ga(this,n),this.o=e.o}else e&&(n=String(e).match(ul))?(this.h=!!t,Vi(this,n[1]||"",!0),this.s=on(n[2]||""),this.g=on(n[3]||"",!0),Bi(this,n[4]),this.l=on(n[5]||"",!0),ga(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.h=!!t,this.i=new In(null,this.h))}fe.prototype.toString=function(){var e=[],t=this.j;t&&e.push(an(t,ma,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(an(t,ma,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(an(n,n.charAt(0)=="/"?bp:_p,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",an(n,Ap)),e.join("")};function Pt(e){return new fe(e)}function Vi(e,t,n){e.j=n?on(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ga(e,t,n){t instanceof In?(e.i=t,Ip(e.i,e.h)):(n||(t=an(t,Tp)),e.i=new In(t,e.h))}function B(e,t,n){e.i.set(t,n)}function sr(e){return B(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function on(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function an(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ep),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ep(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ma=/[#\/\?@]/g,_p=/[#\?:]/g,bp=/[#\?]/g,Tp=/[#\?@]/g,Ap=/#/g;function In(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Zt(e){e.g||(e.g=new Map,e.h=0,e.i&&wp(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=In.prototype;m.add=function(e,t){Zt(this),this.i=null,e=We(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function hl(e,t){Zt(e),t=We(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function dl(e,t){return Zt(e),t=We(e,t),e.g.has(t)}m.forEach=function(e,t){Zt(this),this.g.forEach(function(n,i){n.forEach(function(r){e.call(t,r,i,this)},this)},this)};m.sa=function(){Zt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let s=0;s<r.length;s++)n.push(t[i])}return n};m.Z=function(e){Zt(this);let t=[];if(typeof e=="string")dl(this,e)&&(t=t.concat(this.g.get(We(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Zt(this),this.i=null,e=We(this,e),dl(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function fl(e,t,n){hl(e,t),0<n.length&&(e.i=null,e.g.set(We(e,t),Ps(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};function We(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ip(e,t){t&&!e.j&&(Zt(e),e.i=null,e.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(hl(this,i),fl(this,r,n))},e)),e.j=t}var Cp=class{constructor(e,t){this.h=e,this.g=t}};function pl(e){this.l=e||Sp,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ka&&T.g.Ka()&&T.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sp=10;function gl(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ml(e){return e.h?1:e.g?e.g.size:0}function as(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Qs(e,t){e.g?e.g.add(t):e.h=t}function vl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}pl.prototype.cancel=function(){if(this.i=yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function yl(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ps(e.i)}function Xs(){}Xs.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Xs.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function kp(){this.g=new Xs}function xp(e,t,n){const i=n||"";try{ll(e,function(r,s){let o=r;Nn(r)&&(o=qs(r)),t.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function Dp(e,t){const n=new tr;if(T.Image){const i=new Image;i.onload=si(ai,n,i,"TestLoadImage: loaded",!0,t),i.onerror=si(ai,n,i,"TestLoadImage: error",!1,t),i.onabort=si(ai,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=si(ai,n,i,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function ai(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch{}}function Bn(e){this.l=e.fc||null,this.j=e.ob||!1}Z(Bn,Ks);Bn.prototype.g=function(){return new or(this.l,this.j)};Bn.prototype.i=function(e){return function(){return e}}({});function or(e,t){J.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ys,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Z(or,J);var Ys=0;m=or.prototype;m.open=function(e,t){if(this.readyState!=Ys)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cn(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||T).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=Ys};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wl(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function wl(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?$n(this):Cn(this),this.readyState==3&&wl(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,$n(this))};m.Ya=function(e){this.g&&(this.response=e,$n(this))};m.ka=function(){this.g&&$n(this)};function $n(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cn(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Lp=T.JSON.parse;function j(e){J.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=El,this.L=this.M=!1}Z(j,J);var El="",Op=/^https?$/i,Np=["POST","PUT"];m=j.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():is.g(),this.C=this.u?pa(this.u):pa(is),this.g.onreadystatechange=at(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){va(this,s);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=T.FormData&&e instanceof T.FormData,!(0<=Mc(Np,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Tl(this),0<this.B&&((this.L=Rp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.ua,this)):this.A=Hs(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){va(this,s)}};function Rp(e){return Be&&Yf()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof Ms<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function va(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,_l(e),ar(e)}function _l(e){e.F||(e.F=!0,nt(e,"complete"),nt(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,nt(this,"complete"),nt(this,"abort"),ar(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ar(this,!0)),j.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?bl(this):this.kb())};m.kb=function(){bl(this)};function bl(e){if(e.h&&typeof Ms<"u"&&(!e.C[1]||Nt(e)!=4||e.da()!=2)){if(e.v&&Nt(e)==4)Hs(e.La,0,e);else if(nt(e,"readystatechange"),Nt(e)==4){e.h=!1;try{const a=e.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var r=String(e.I).match(ul)[1]||null;if(!r&&T.self&&T.self.location){var s=T.self.location.protocol;r=s.substr(0,s.length-1)}i=!Op.test(r?r.toLowerCase():"")}n=i}if(n)nt(e,"complete"),nt(e,"success");else{e.m=6;try{var o=2<Nt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",_l(e)}}finally{ar(e)}}}}function ar(e,t){if(e.g){Tl(e);const n=e.g,i=e.C[0]?Ri:null;e.g=null,e.C=null,t||nt(e,"ready");try{n.onreadystatechange=i}catch{}}}function Tl(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function Nt(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Lp(t)}};function ya(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case El:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Al(e){let t="";return Vs(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Js(e,t,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Al(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):B(e,t,n))}function rn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Il(e){this.Ga=0,this.i=[],this.j=new tr,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=rn("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=rn("baseRetryDelayMs",5e3,e),this.hb=rn("retryDelaySeedMs",1e4,e),this.eb=rn("forwardChannelMaxRetries",2,e),this.xa=rn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new pl(e&&e.concurrentRequestLimit),this.Ja=new kp,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}m=Il.prototype;m.qa=8;m.H=1;function Zs(e){if(Cl(e),e.H==3){var t=e.W++,n=Pt(e.G);B(n,"SID",e.J),B(n,"RID",t),B(n,"TYPE","terminate"),jn(e,n),t=new Fn(e,e.j,t,void 0),t.L=2,t.v=sr(Pt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=Rl(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Vn(t)}Ol(e)}function cr(e){e.g&&(eo(e),e.g.cancel(),e.g=null)}function Cl(e){cr(e),e.u&&(T.clearTimeout(e.u),e.u=null),$i(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function lr(e){gl(e.h)||e.m||(e.m=!0,Wc(e.Na,e),e.C=0)}function Mp(e,t){return ml(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Mn(at(e.Na,e,t),Ll(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new Fn(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=$c(s),jc(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Sl(this,r,t),n=Pt(this.G),B(n,"RID",e),B(n,"CVER",22),this.F&&B(n,"X-HTTP-Session-Id",this.F),jn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Al(s)))+"&"+t:this.o&&Js(n,this.o,s)),Qs(this.h,r),this.bb&&B(n,"TYPE","init"),this.P?(B(n,"$req",t),B(n,"SID","null"),r.ba=!0,ss(r,n,null)):ss(r,n,t),this.H=2}}else this.H==3&&(e?wa(this,e):this.i.length==0||gl(this.h)||wa(this))};function wa(e,t){var n;t?n=t.m:n=e.W++;const i=Pt(e.G);B(i,"SID",e.J),B(i,"RID",n),B(i,"AID",e.V),jn(e,i),e.o&&e.s&&Js(i,e.o,e.s),n=new Fn(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=Sl(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Qs(e.h,n),ss(n,i,t)}function jn(e,t){e.ma&&Vs(e.ma,function(n,i){B(t,i,n)}),e.l&&ll({},function(n,i){B(t,i,n)})}function Sl(e,t,n){n=Math.min(e.i.length,n);var i=e.l?at(e.l.Va,e.l,e):null;t:{var r=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=s,0>l)s=Math.max(0,r[c].h-100),a=!1;else try{xp(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break t}}}return e=e.i.splice(0,n),t.F=e,i}function kl(e){e.g||e.u||(e.ba=1,Wc(e.Ma,e),e.A=0)}function to(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Mn(at(e.Ma,e),Ll(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,xl(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Mn(at(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ft(10),cr(this),xl(this))};function eo(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function xl(e){e.g=new Fn(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Pt(e.wa);B(t,"RID","rpc"),B(t,"SID",e.J),B(t,"CI",e.M?"0":"1"),B(t,"AID",e.V),B(t,"TYPE","xmlhttp"),jn(e,t),e.o&&e.s&&Js(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=sr(Pt(t)),n.s=null,n.S=!0,sl(n,e)}m.ib=function(){this.v!=null&&(this.v=null,cr(this),to(this),ft(19))};function $i(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Dl(e,t){var n=null;if(e.g==t){$i(e),eo(e),e.g=null;var i=2}else if(as(e.h,t))n=t.F,vl(e.h,t),i=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;i=er(),nt(i,new el(i,n)),lr(e)}else kl(e);else if(r=t.o,r==3||r==0&&0<e.ta||!(i==1&&Mp(e,t)||i==2&&to(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:ue(e,5);break;case 4:ue(e,10);break;case 3:ue(e,6);break;default:ue(e,2)}}}function Ll(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function ue(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var i=at(e.pb,e);n||(n=new fe("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Vi(n,"https"),sr(n)),Dp(n.toString(),i)}else ft(2);e.H=0,e.l&&e.l.za(t),Ol(e),Cl(e)}m.pb=function(e){e?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Ol(e){if(e.H=0,e.pa=[],e.l){const t=yl(e.h);(t.length!=0||e.i.length!=0)&&(ca(e.pa,t),ca(e.pa,e.i),e.h.i.length=0,Ps(e.i),e.i.length=0),e.l.ya()}}function Nl(e,t,n){var i=n instanceof fe?Pt(n):new fe(n,void 0);if(i.g!="")t&&(i.g=t+"."+i.g),Bi(i,i.m);else{var r=T.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new fe(null,void 0);i&&Vi(s,i),t&&(s.g=t),r&&Bi(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&B(i,n,t),B(i,"VER",e.qa),jn(e,i),i}function Rl(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new j(new Bn({ob:!0})):new j(e.va),t.Oa(e.I),t}function Ml(){}m=Ml.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.Va=function(){};function ji(){if(Be&&!(10<=Number(Jf)))throw Error("Environmental error: no available transport.")}ji.prototype.g=function(e,t){return new vt(e,t)};function vt(e,t){J.call(this),this.g=new Il(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Mi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Mi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Qe(this)}Z(vt,J);vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;ft(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=Nl(e,null,e.Y),lr(e)};vt.prototype.close=function(){Zs(this.g)};vt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=qs(e),e=n);t.i.push(new Cp(t.fb++,e)),t.H==3&&lr(t)};vt.prototype.N=function(){this.g.l=null,delete this.j,Zs(this.g),delete this.g,vt.$.N.call(this)};function Pl(e){Gs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Z(Pl,Gs);function Fl(){Ws.call(this),this.status=1}Z(Fl,Ws);function Qe(e){this.g=e}Z(Qe,Ml);Qe.prototype.Ba=function(){nt(this.g,"a")};Qe.prototype.Aa=function(e){nt(this.g,new Pl(e))};Qe.prototype.za=function(e){nt(this.g,new Fl)};Qe.prototype.ya=function(){nt(this.g,"b")};function Pp(){this.blockSize=-1}function It(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Z(It,Pp);It.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Rr(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^s)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}It.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(r==0)for(;s<=n;)Rr(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){Rr(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){Rr(this,i),r=0;break}}this.h=r,this.i+=t};It.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function F(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=e[r]|0;i&&s==t||(n[r]=s,i=!1)}this.g=n}var Fp={};function no(e){return-128<=e&&128>e?Pc(Fp,e,function(t){return new F([t|0],0>t?-1:0)}):new F([e|0],0>e?-1:0)}function xt(e){if(isNaN(e)||!isFinite(e))return xe;if(0>e)return et(xt(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=cs;return new F(t,0)}function Vl(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return et(Vl(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xt(Math.pow(t,8)),i=xe,r=0;r<e.length;r+=8){var s=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+s),t);8>s?(s=xt(Math.pow(t,s)),i=i.R(s).add(xt(o))):(i=i.R(n),i=i.add(xt(o)))}return i}var cs=4294967296,xe=no(0),ls=no(1),Ea=no(16777216);m=F.prototype;m.ea=function(){if(yt(this))return-et(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:cs+i)*t,t*=cs}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Rt(this))return"0";if(yt(this))return"-"+et(this).toString(e);for(var t=xt(Math.pow(e,6)),n=this,i="";;){var r=qi(n,t).g;n=Ui(n,r.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,Rt(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Rt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function yt(e){return e.h==-1}m.X=function(e){return e=Ui(this,e),yt(e)?-1:Rt(e)?0:1};function et(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new F(n,~e.h).add(ls)}m.abs=function(){return yt(this)?et(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(this.D(r)&65535)+(e.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new F(n,n[n.length-1]&-2147483648?-1:0)};function Ui(e,t){return e.add(et(t))}m.R=function(e){if(Rt(this)||Rt(e))return xe;if(yt(this))return yt(e)?et(this).R(et(e)):et(et(this).R(e));if(yt(e))return et(this.R(et(e)));if(0>this.X(Ea)&&0>e.X(Ea))return xt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=e.D(r)>>>16,c=e.D(r)&65535;n[2*i+2*r]+=o*c,ci(n,2*i+2*r),n[2*i+2*r+1]+=s*c,ci(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,ci(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,ci(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new F(n,0)};function ci(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function sn(e,t){this.g=e,this.h=t}function qi(e,t){if(Rt(t))throw Error("division by zero");if(Rt(e))return new sn(xe,xe);if(yt(e))return t=qi(et(e),t),new sn(et(t.g),et(t.h));if(yt(t))return t=qi(e,et(t)),new sn(et(t.g),t.h);if(30<e.g.length){if(yt(e)||yt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ls,i=t;0>=i.X(e);)n=_a(n),i=_a(i);var r=Te(n,1),s=Te(i,1);for(i=Te(i,2),n=Te(n,2);!Rt(i);){var o=s.add(i);0>=o.X(e)&&(r=r.add(n),s=o),i=Te(i,1),n=Te(n,1)}return t=Ui(e,r.R(t)),new sn(r,t)}for(r=xe;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=xt(n),o=s.R(t);yt(o)||0<o.X(e);)n-=i,s=xt(n),o=s.R(t);Rt(s)&&(s=ls),r=r.add(s),e=Ui(e,o)}return new sn(r,e)}m.gb=function(e){return qi(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new F(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new F(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new F(n,this.h^e.h)};function _a(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new F(n,e.h)}function Te(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new F(r,e.h)}ji.prototype.createWebChannel=ji.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;nr.NO_ERROR=0;nr.TIMEOUT=8;nr.HTTP_ERROR=6;nl.COMPLETE="complete";il.EventType=Pn;Pn.OPEN="a";Pn.CLOSE="b";Pn.ERROR="c";Pn.MESSAGE="d";J.prototype.listen=J.prototype.O;j.prototype.listenOnce=j.prototype.P;j.prototype.getLastError=j.prototype.Sa;j.prototype.getLastErrorCode=j.prototype.Ia;j.prototype.getStatus=j.prototype.da;j.prototype.getResponseJson=j.prototype.Wa;j.prototype.getResponseText=j.prototype.ja;j.prototype.send=j.prototype.ha;j.prototype.setWithCredentials=j.prototype.Oa;It.prototype.digest=It.prototype.l;It.prototype.reset=It.prototype.reset;It.prototype.update=It.prototype.j;F.prototype.add=F.prototype.add;F.prototype.multiply=F.prototype.R;F.prototype.modulo=F.prototype.gb;F.prototype.compare=F.prototype.X;F.prototype.toNumber=F.prototype.ea;F.prototype.toString=F.prototype.toString;F.prototype.getBits=F.prototype.D;F.fromNumber=xt;F.fromString=Vl;var Vp=function(){return new ji},Bp=function(){return er()},Mr=nr,$p=nl,jp=_e,ba={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Up=Bn,li=il,qp=j,zp=It,De=F;const Ta="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xe="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new xc("@firebase/firestore");function Aa(){return ye.logLevel}function y(e,...t){if(ye.logLevel<=M.DEBUG){const n=t.map(io);ye.debug(`Firestore (${Xe}): ${e}`,...n)}}function Ft(e,...t){if(ye.logLevel<=M.ERROR){const n=t.map(io);ye.error(`Firestore (${Xe}): ${e}`,...n)}}function $e(e,...t){if(ye.logLevel<=M.WARN){const n=t.map(io);ye.warn(`Firestore (${Xe}): ${e}`,...n)}}function io(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e="Unexpected state"){const t=`FIRESTORE (${Xe}) INTERNAL ASSERTION FAILED: `+e;throw Ft(t),new Error(t)}function W(e,t){e||C()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Ge{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class Kp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gp{constructor(t){this.t=t,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new pe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pe,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pe)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(W(typeof i.accessToken=="string"),new Bl(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new st(t)}}class Wp{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=st.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Qp{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new Wp(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yp{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=s=>{s.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(W(typeof n.token=="string"),this.T=n.token,new Xp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=Jp(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function P(e,t){return e<t?-1:e>t?1:0}function je(e,t,n){return e.length===t.length&&e.every((i,r)=>n(i,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new Y(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new Y(0,0))}static max(){return new A(new Y(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,n,i){n===void 0?n=0:n>t.length&&C(),i===void 0?i=t.length-n:i>t.length-n&&C(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Sn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Sn?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let r=0;r<i;r++){const s=t.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class $ extends Sn{construct(t,n,i){return new $(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new w(g.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new $(n)}static emptyPath(){return new $([])}}const tg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Sn{construct(t,n,i){return new dt(t,n,i)}static isValidIdentifier(t){return tg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(t){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new w(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new w(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.path=t}static fromPath(t){return new b($.fromString(t))}static fromName(t){return new b($.fromString(t).popFirst(5))}static empty(){return new b($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&$.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return $.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new b(new $(t.slice()))}}function eg(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=A.fromTimestamp(i===1e9?new Y(n+1,0):new Y(n,i));return new Wt(r,b.empty(),t)}function ng(e){return new Wt(e.readTime,e.key,-1)}class Wt{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new Wt(A.min(),b.empty(),-1)}static max(){return new Wt(A.max(),b.empty(),-1)}}function ig(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=b.comparator(e.documentKey,t.documentKey),n!==0?n:P(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==rg)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,i)=>{n(t)})}static reject(t){return new p((n,i)=>{i(t)})}static waitFor(t){return new p((n,i)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(t){let n=p.resolve(!1);for(const i of t)n=n.next(r=>r?p.resolve(r):i());return n}static forEach(t,n){const i=[];return t.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(t,n){return new p((i,r)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(t,n){return new p((i,r)=>{const s=()=>{t()===!0?n().next(()=>{s()},r):i()};s()})}}function Un(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}so.ct=-1;function ur(e){return e==null}function zi(e){return e===0&&1/e==-1/0}function og(e){return typeof e=="number"&&Number.isInteger(e)&&!zi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function qn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function $l(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){this.comparator=t,this.root=n||tt.EMPTY}insert(t,n){return new U(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,tt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ui(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ui(this.root,t,this.comparator,!1)}getReverseIterator(){return new ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ui(this.root,t,this.comparator,!0)}}class ui{constructor(t,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,n&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class tt{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??tt.RED,this.left=r??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,r,s){return new tt(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return tt.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const t=this.left.check();if(t!==this.right.check())throw C();return t+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,n,i,r){return this}insert(e,t,n){return new tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ca(this.data.getIterator())}getIteratorFrom(t){return new Ca(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new lt(this.comparator);return n.data=t,n}}class Ca{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new zt([])}unionWith(t){let n=new lt(dt.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new zt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return je(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new jl("Invalid base64 string: "+r):r}}(t);return new ut(n)}static fromUint8Array(t){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(t);return new ut(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const ag=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(e){if(W(!!e),typeof e=="string"){let t=0;const n=ag.exec(e);if(W(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:H(e.seconds),nanos:H(e.nanos)}}function H(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function we(e){return typeof e=="string"?ut.fromBase64String(e):ut.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ao(e){const t=e.mapValue.fields.__previous_value__;return oo(t)?ao(t):t}function kn(e){const t=Qt(e.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,n,i,r,s,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class xn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ee(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?oo(e)?4:lg(e)?9007199254740991:10:C()}function Ot(e,t){if(e===t)return!0;const n=Ee(e);if(n!==Ee(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return kn(e).isEqual(kn(t));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Qt(i.timestampValue),o=Qt(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,r){return we(i.bytesValue).isEqual(we(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,r){return H(i.geoPointValue.latitude)===H(r.geoPointValue.latitude)&&H(i.geoPointValue.longitude)===H(r.geoPointValue.longitude)}(e,t);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return H(i.integerValue)===H(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=H(i.doubleValue),o=H(r.doubleValue);return s===o?zi(s)===zi(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return je(e.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Ia(s)!==Ia(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ot(s[a],o[a])))return!1;return!0}(e,t);default:return C()}}function Dn(e,t){return(e.values||[]).find(n=>Ot(n,t))!==void 0}function Ue(e,t){if(e===t)return 0;const n=Ee(e),i=Ee(t);if(n!==i)return P(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(r,s){const o=H(r.integerValue||r.doubleValue),a=H(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Sa(e.timestampValue,t.timestampValue);case 4:return Sa(kn(e),kn(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(r,s){const o=we(r),a=we(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=P(o[c],a[c]);if(l!==0)return l}return P(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,s){const o=P(H(r.latitude),H(s.latitude));return o!==0?o:P(H(r.longitude),H(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ue(o[c],a[c]);if(l)return l}return P(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,s){if(r===hi.mapValue&&s===hi.mapValue)return 0;if(r===hi.mapValue)return 1;if(s===hi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=P(a[u],l[u]);if(h!==0)return h;const f=Ue(o[a[u]],c[l[u]]);if(f!==0)return f}return P(a.length,l.length)}(e.mapValue,t.mapValue);default:throw C()}}function Sa(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return P(e,t);const n=Qt(e),i=Qt(t),r=P(n.seconds,i.seconds);return r!==0?r:P(n.nanos,i.nanos)}function qe(e){return us(e)}function us(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(i){const r=Qt(i);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?we(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,b.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=us(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${us(i.fields[a])}`;return s+"}"}(e.mapValue):C();var t,n}function ka(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function hs(e){return!!e&&"integerValue"in e}function co(e){return!!e&&"arrayValue"in e}function xa(e){return!!e&&"nullValue"in e}function Da(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Pr(e){return!!e&&"mapValue"in e}function pn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return qn(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=pn(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=pn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function lg(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.value=t}static empty(){return new kt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Pr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=pn(n)}setAll(t){let n=dt.emptyPath(),i={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=pn(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(t){const n=this.field(t.popLast());Pr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=n.mapValue.fields[t.get(i)];Pr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,i){qn(n,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new kt(pn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n,i,r,s,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ot(t,0,A.min(),A.min(),A.min(),kt.empty(),0)}static newFoundDocument(t,n,i,r){return new ot(t,1,n,A.min(),i,r,0)}static newNoDocument(t,n){return new ot(t,2,n,A.min(),A.min(),kt.empty(),0)}static newUnknownDocument(t,n){return new ot(t,3,n,A.min(),A.min(),kt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ot&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,n){this.position=t,this.inclusive=n}}function La(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(s.field.isKeyField()?i=b.comparator(b.fromName(o.referenceValue),n.key):i=Ue(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Oa(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ot(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,n="asc"){this.field=t,this.dir=n}}function ug(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{}class K extends Ul{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new dg(t,n,i):n==="array-contains"?new gg(t,i):n==="in"?new mg(t,i):n==="not-in"?new vg(t,i):n==="array-contains-any"?new yg(t,i):new K(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new fg(t,i):new pg(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ue(n,this.value)):n!==null&&Ee(this.value)===Ee(n)&&this.matchesComparison(Ue(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ct extends Ul{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Ct(t,n)}matches(t){return ql(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function ql(e){return e.op==="and"}function zl(e){return hg(e)&&ql(e)}function hg(e){for(const t of e.filters)if(t instanceof Ct)return!1;return!0}function ds(e){if(e instanceof K)return e.field.canonicalString()+e.op.toString()+qe(e.value);if(zl(e))return e.filters.map(t=>ds(t)).join(",");{const t=e.filters.map(n=>ds(n)).join(",");return`${e.op}(${t})`}}function Hl(e,t){return e instanceof K?function(n,i){return i instanceof K&&n.op===i.op&&n.field.isEqual(i.field)&&Ot(n.value,i.value)}(e,t):e instanceof Ct?function(n,i){return i instanceof Ct&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&Hl(s,i.filters[o]),!0):!1}(e,t):void C()}function Kl(e){return e instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${qe(t.value)}`}(e):e instanceof Ct?function(t){return t.op.toString()+" {"+t.getFilters().map(Kl).join(" ,")+"}"}(e):"Filter"}class dg extends K{constructor(t,n,i){super(t,n,i),this.key=b.fromName(i.referenceValue)}matches(t){const n=b.comparator(t.key,this.key);return this.matchesComparison(n)}}class fg extends K{constructor(t,n){super(t,"in",n),this.keys=Gl("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class pg extends K{constructor(t,n){super(t,"not-in",n),this.keys=Gl("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Gl(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>b.fromName(i.referenceValue))}class gg extends K{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return co(n)&&Dn(n.arrayValue,this.value)}}class mg extends K{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Dn(this.value.arrayValue,n)}}class vg extends K{constructor(t,n){super(t,"not-in",n)}matches(t){if(Dn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Dn(this.value.arrayValue,n)}}class yg extends K{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!co(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Dn(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,n=null,i=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Na(e,t=null,n=[],i=[],r=null,s=null,o=null){return new wg(e,t,n,i,r,s,o)}function lo(e){const t=N(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>ds(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),ur(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>qe(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>qe(i)).join(",")),t.ft=n}return t.ft}function uo(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ug(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Hl(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Oa(e.startAt,t.startAt)&&Oa(e.endAt,t.endAt)}function fs(e){return b.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Eg(e,t,n,i,r,s,o,a){return new zn(e,t,n,i,r,s,o,a)}function Wl(e){return new zn(e)}function Ra(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ql(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ho(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Xl(e){return e.collectionGroup!==null}function Le(e){const t=N(e);if(t.dt===null){t.dt=[];const n=ho(t),i=Ql(t);if(n!==null&&i===null)n.isKeyField()||t.dt.push(new gn(n)),t.dt.push(new gn(dt.keyField(),"asc"));else{let r=!1;for(const s of t.explicitOrderBy)t.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new gn(dt.keyField(),s))}}}return t.dt}function Vt(e){const t=N(e);if(!t._t)if(t.limitType==="F")t._t=Na(t.path,t.collectionGroup,Le(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Le(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new gn(s.field,o))}const i=t.endAt?new Hi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Hi(t.startAt.position,t.startAt.inclusive):null;t._t=Na(t.path,t.collectionGroup,n,t.filters,t.limit,i,r)}return t._t}function ps(e,t){t.getFirstInequalityField(),ho(e);const n=e.filters.concat([t]);return new zn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function gs(e,t,n){return new zn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function hr(e,t){return uo(Vt(e),Vt(t))&&e.limitType===t.limitType}function Yl(e){return`${lo(Vt(e))}|lt:${e.limitType}`}function ms(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Kl(i)).join(", ")}]`),ur(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>qe(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>qe(i)).join(",")),`Target(${n})`}(Vt(e))}; limitType=${e.limitType})`}function dr(e,t){return t.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):b.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,i){for(const r of Le(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(e,t)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=La(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,Le(n),i)||n.endAt&&!function(r,s,o){const a=La(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,Le(n),i))}(e,t)}function _g(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Jl(e){return(t,n)=>{let i=!1;for(const r of Le(e)){const s=bg(r,t,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function bg(e,t,n){const i=e.field.isKeyField()?b.comparator(t.key,n.key):function(r,s,o){const a=s.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ue(a,c):C()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return C()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){qn(this.inner,(n,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return $l(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=new U(b.comparator);function Xt(){return Tg}const Zl=new U(b.comparator);function cn(...e){let t=Zl;for(const n of e)t=t.insert(n.key,n);return t}function Ag(e){let t=Zl;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function he(){return mn()}function tu(){return mn()}function mn(){return new Ye(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ig=new lt(b.comparator);function O(...e){let t=Ig;for(const n of e)t=t.add(n);return t}const Cg=new lt(P);function Sg(){return Cg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(t)?"-0":t}}function nu(e){return{integerValue:""+e}}function kg(e,t){return og(t)?nu(t):eu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this._=void 0}}function xg(e,t,n){return e instanceof vs?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&oo(r)&&(r=ao(r)),r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,t):e instanceof Ki?iu(e,t):e instanceof Gi?ru(e,t):function(i,r){const s=Lg(i,r),o=Ma(s)+Ma(i.wt);return hs(s)&&hs(i.wt)?nu(o):eu(i.serializer,o)}(e,t)}function Dg(e,t,n){return e instanceof Ki?iu(e,t):e instanceof Gi?ru(e,t):n}function Lg(e,t){return e instanceof ys?hs(n=t)||function(i){return!!i&&"doubleValue"in i}(n)?t:{integerValue:0}:null;var n}class vs extends fr{}class Ki extends fr{constructor(t){super(),this.elements=t}}function iu(e,t){const n=su(t);for(const i of e.elements)n.some(r=>Ot(r,i))||n.push(i);return{arrayValue:{values:n}}}class Gi extends fr{constructor(t){super(),this.elements=t}}function ru(e,t){let n=su(t);for(const i of e.elements)n=n.filter(r=>!Ot(r,i));return{arrayValue:{values:n}}}class ys extends fr{constructor(t,n){super(),this.serializer=t,this.wt=n}}function Ma(e){return H(e.integerValue||e.doubleValue)}function su(e){return co(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Og(e,t){return e.field.isEqual(t.field)&&function(n,i){return n instanceof Ki&&i instanceof Ki||n instanceof Gi&&i instanceof Gi?je(n.elements,i.elements,Ot):n instanceof ys&&i instanceof ys?Ot(n.wt,i.wt):n instanceof vs&&i instanceof vs}(e.transform,t.transform)}class ge{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ge}static exists(t){return new ge(void 0,t)}static updateTime(t){return new ge(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class fo{}function ou(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Rg(e.key,ge.none()):new po(e.key,e.data,ge.none());{const n=e.data,i=kt.empty();let r=new lt(dt.comparator);for(let s of t.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new pr(e.key,i,new zt(r.toArray()),ge.none())}}function Ng(e,t,n){e instanceof po?function(i,r,s){const o=i.value.clone(),a=Fa(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof pr?function(i,r,s){if(!vi(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Fa(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(au(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function vn(e,t,n,i){return e instanceof po?function(r,s,o,a){if(!vi(r.precondition,s))return o;const c=r.value.clone(),l=Va(r.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(e,t,n,i):e instanceof pr?function(r,s,o,a){if(!vi(r.precondition,s))return o;const c=Va(r.fieldTransforms,a,s),l=s.data;return l.setAll(au(r)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(e,t,n,i):function(r,s,o){return vi(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function Pa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&je(n,i,(r,s)=>Og(r,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class po extends fo{constructor(t,n,i,r=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class pr extends fo{constructor(t,n,i,r,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function au(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Fa(e,t,n){const i=new Map;W(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,Dg(o,a,n[r]))}return i}function Va(e,t,n){const i=new Map;for(const r of e){const s=r.transform,o=n.data.field(r.field);i.set(r.field,xg(s,o,t))}return i}class Rg extends fo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t,n,i,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&Ng(s,t,i[r])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=vn(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=vn(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=tu();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const c=ou(o,a);c!==null&&i.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),O())}isEqual(t){return this.batchId===t.batchId&&je(this.mutations,t.mutations,(n,i)=>Pa(n,i))&&je(this.baseMutations,t.baseMutations,(n,i)=>Pa(n,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,L;function cu(e){if(e===void 0)return Ft("GRPC error has no .code"),g.UNKNOWN;switch(e){case z.OK:return g.OK;case z.CANCELLED:return g.CANCELLED;case z.UNKNOWN:return g.UNKNOWN;case z.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case z.INTERNAL:return g.INTERNAL;case z.UNAVAILABLE:return g.UNAVAILABLE;case z.UNAUTHENTICATED:return g.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case z.NOT_FOUND:return g.NOT_FOUND;case z.ALREADY_EXISTS:return g.ALREADY_EXISTS;case z.PERMISSION_DENIED:return g.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case z.ABORTED:return g.ABORTED;case z.OUT_OF_RANGE:return g.OUT_OF_RANGE;case z.UNIMPLEMENTED:return g.UNIMPLEMENTED;case z.DATA_LOSS:return g.DATA_LOSS;default:return C()}}(L=z||(z={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return di}static getOrCreateInstance(){return di===null&&(di=new go),di}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let di=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new De([4294967295,4294967295],0);function Ba(e){const t=Vg().encode(e),n=new zp;return n.update(t),new Uint8Array(n.digest())}function $a(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new De([n,i],0),new De([r,s],0)]}class mo{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new ln(`Invalid padding: ${n}`);if(i<0)throw new ln(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new ln(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new ln(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*t.length-n,this.It=De.fromNumber(this.yt)}Tt(t,n,i){let r=t.add(n.multiply(De.fromNumber(i)));return r.compare(Bg)===1&&(r=new De([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}At(t){if(this.yt===0)return!1;const n=Ba(t),[i,r]=$a(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(i,r,s);if(!this.Et(o))return!1}return!0}static create(t,n,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new mo(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(t){if(this.yt===0)return;const n=Ba(t),[i,r]=$a(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(i,r,s);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,n,i,r,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const r=new Map;return r.set(t,Hn.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new gr(A.min(),r,new U(P),Xt(),O())}}class Hn{constructor(t,n,i,r,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new Hn(i,n,O(),O(),O())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,n,i,r){this.vt=t,this.removedTargetIds=n,this.key=i,this.Pt=r}}class lu{constructor(t,n){this.targetId=t,this.bt=n}}class uu{constructor(t,n,i=ut.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=r}}class ja{constructor(){this.Vt=0,this.St=qa(),this.Dt=ut.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=O(),n=O(),i=O();return this.St.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:C()}}),new Hn(this.Dt,this.Ct,t,n,i)}$t(){this.xt=!1,this.St=qa()}Ft(t,n){this.xt=!0,this.St=this.St.insert(t,n)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class $g{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=Xt(),this.jt=Ua(),this.zt=new U(P)}Wt(t){for(const n of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(n,t.Pt):this.Jt(n,t.key,t.Pt);for(const n of t.removedTargetIds)this.Jt(n,t.key,t.Pt)}Yt(t){this.forEachTarget(t,n=>{const i=this.Xt(n);switch(t.state){case 0:this.Zt(n)&&i.Mt(t.resumeToken);break;case 1:i.qt(),i.Nt||i.$t(),i.Mt(t.resumeToken);break;case 2:i.qt(),i.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(i.Ut(),i.Mt(t.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),i.Mt(t.resumeToken));break;default:C()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Gt.forEach((i,r)=>{this.Zt(r)&&n(r)})}ee(t){var n;const i=t.targetId,r=t.bt.count,s=this.ne(i);if(s){const o=s.target;if(fs(o))if(r===0){const a=new b(o.path);this.Jt(i,a,ot.newNoDocument(a,A.min()))}else W(r===1);else{const a=this.se(i);if(a!==r){const c=this.ie(t,a);if(c!==0){this.te(i);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(i,l)}(n=go.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var f,d,_,v,E,S;const x={localCacheCount:u,existenceFilterCount:h.count},k=h.unchangedNames;return k&&(x.bloomFilter={applied:l===0,hashCount:(f=k?.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(v=(_=(d=k?.bits)===null||d===void 0?void 0:d.bitmap)===null||_===void 0?void 0:_.length)!==null&&v!==void 0?v:0,padding:(S=(E=k?.bits)===null||E===void 0?void 0:E.padding)!==null&&S!==void 0?S:0}),x}(c,a,t.bt))}}}}ie(t,n){const{unchangedNames:i,count:r}=t.bt;if(!i||!i.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=i;let c,l;try{c=we(s).toUint8Array()}catch(u){if(u instanceof jl)return $e("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new mo(c,o,a)}catch(u){return $e(u instanceof ln?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.yt===0?1:r!==n-this.re(t.targetId,l)?2:0}re(t,n){const i=this.Kt.getRemoteKeysForTarget(t);let r=0;return i.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(t,s,null),r++)}),r}ue(t){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&fs(a.target)){const c=new b(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,ot.newNoDocument(c,t))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let i=O();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.ne(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(t));const r=new gr(t,n,this.zt,this.Qt,i);return this.Qt=Xt(),this.jt=Ua(),this.zt=new U(P),r}Ht(t,n){if(!this.Zt(t))return;const i=this.ce(t,n.key)?2:0;this.Xt(t).Ft(n.key,i),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(t))}Jt(t,n,i){if(!this.Zt(t))return;const r=this.Xt(t);this.ce(t,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(t)),i&&(this.Qt=this.Qt.insert(n,i))}removeTarget(t){this.Gt.delete(t)}se(t){const n=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let n=this.Gt.get(t);return n||(n=new ja,this.Gt.set(t,n)),n}ae(t){let n=this.jt.get(t);return n||(n=new lt(P),this.jt=this.jt.insert(t,n)),n}Zt(t){const n=this.ne(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}ne(t){const n=this.Gt.get(t);return n&&n.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new ja),this.Kt.getRemoteKeysForTarget(t).forEach(n=>{this.Jt(t,n,null)})}ce(t,n){return this.Kt.getRemoteKeysForTarget(t).has(n)}}function Ua(){return new U(b.comparator)}function qa(){return new U(b.comparator)}const jg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ug=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qg=(()=>({and:"AND",or:"OR"}))();class zg{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ws(e,t){return e.useProto3Json||ur(t)?t:{value:t}}function Es(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Oe(e){return W(!!e),A.fromTimestamp(function(t){const n=Qt(t);return new Y(n.seconds,n.nanos)}(e))}function du(e,t){return function(n){return new $(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function fu(e){const t=$.fromString(e);return W(vu(t)),t}function Fr(e,t){const n=fu(t);if(n.get(1)!==e.databaseId.projectId)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new b(pu(n))}function _s(e,t){return du(e.databaseId,t)}function Hg(e){const t=fu(e);return t.length===4?$.emptyPath():pu(t)}function za(e){return new $(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pu(e){return W(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Kg(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:C()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(W(l===void 0||typeof l=="string"),ut.fromBase64String(l||"")):(W(l===void 0||l instanceof Uint8Array),ut.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?g.UNKNOWN:cu(c.code);return new w(l,c.message||"")}(o);n=new uu(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Fr(e,i.document.name),s=Oe(i.document.updateTime),o=i.document.createTime?Oe(i.document.createTime):A.min(),a=new kt({mapValue:{fields:i.document.fields}}),c=ot.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new yi(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Fr(e,i.document),s=i.readTime?Oe(i.readTime):A.min(),o=ot.newNoDocument(r,s),a=i.removedTargetIds||[];n=new yi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Fr(e,i.document),s=i.removedTargetIds||[];n=new yi([],s,r,null)}else{if(!("filter"in t))return C();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new Fg(r,s),a=i.targetId;n=new lu(a,o)}}return n}function Gg(e,t){return{documents:[_s(e,t.path)]}}function Wg(e,t){const n={structuredQuery:{}},i=t.path;t.collectionGroup!==null?(n.parent=_s(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=_s(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(c){if(c.length!==0)return mu(Ct.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ae(u.field),direction:Yg(u.dir)}}(l))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ws(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Qg(e){let t=Hg(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){W(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=gu(u);return h instanceof Ct&&zl(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new gn(Ie(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ur(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Hi(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Hi(f,h)}(n.endAt)),Eg(t,r,o,s,a,"F",c,l)}function Xg(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function gu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ie(t.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ie(t.unaryFilter.field);return K.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ie(t.unaryFilter.field);return K.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ie(t.unaryFilter.field);return K.create(s,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(e):e.fieldFilter!==void 0?function(t){return K.create(Ie(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Ct.create(t.compositeFilter.filters.map(n=>gu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return C()}}(t.compositeFilter.op))}(e):C()}function Yg(e){return jg[e]}function Jg(e){return Ug[e]}function Zg(e){return qg[e]}function Ae(e){return{fieldPath:e.canonicalString()}}function Ie(e){return dt.fromServerFormat(e.fieldPath)}function mu(e){return e instanceof K?function(t){if(t.op==="=="){if(Da(t.value))return{unaryFilter:{field:Ae(t.field),op:"IS_NAN"}};if(xa(t.value))return{unaryFilter:{field:Ae(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Da(t.value))return{unaryFilter:{field:Ae(t.field),op:"IS_NOT_NAN"}};if(xa(t.value))return{unaryFilter:{field:Ae(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ae(t.field),op:Jg(t.op),value:t.value}}}(e):e instanceof Ct?function(t){const n=t.getFilters().map(i=>mu(i));return n.length===1?n[0]:{compositeFilter:{op:Zg(t.op),filters:n}}}(e):C()}function vu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,n,i,r,s=A.min(),o=A.min(),a=ut.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t){this.le=t}}function em(e){const t=Qg({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?gs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.sn=new im}addToCollectionParentIndex(t,n){return this.sn.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Wt.min())}updateCollectionGroup(t,n,i){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class im{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n]||new lt($.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(t){return(this.index[t]||new lt($.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static Nn(){return new ze(0)}static kn(){return new ze(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.changes=new Ye(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ot.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?p.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t,n,i,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(i!==null&&vn(i.mutation,r,zt.empty(),Y.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,O()).next(()=>i))}getLocalViewOfDocuments(t,n,i=O()){const r=he();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,i).next(s=>{let o=cn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=he();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,O()))}populateOverlays(t,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,r){let s=Xt();const o=mn(),a=mn();return n.forEach((c,l)=>{const u=i.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof pr)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),vn(u.mutation,l,u.mutation.getFieldMask(),Y.now())):o.set(l.key,zt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new sm(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const i=mn();let r=new U((o,a)=>o-a),s=O();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||zt.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(r.get(a.batchId)||O()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=tu();u.forEach(f=>{if(!s.has(f)){const d=ou(n.get(f),i.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return p.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i){return function(r){return b.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Xl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i):this.getDocumentsMatchingCollectionQuery(t,n,i)}getNextDocuments(t,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,r-s.size):p.resolve(he());let a=-1,c=s;return o.next(l=>p.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?p.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,c,l,O())).next(u=>({batchId:a,changes:Ag(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new b(n)).next(i=>{let r=cn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,i){const r=n.collectionGroup;let s=cn();return this.indexManager.getCollectionParents(t,r).next(o=>p.forEach(o,a=>{const c=function(l,u){return new zn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,i).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,r))).next(s=>{r.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,ot.newInvalidDocument(l)))});let o=cn();return s.forEach((a,c)=>{const l=r.get(a);l!==void 0&&vn(l.mutation,c,zt.empty(),Y.now()),dr(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,n){return p.resolve(this.us.get(n))}saveBundleMetadata(t,n){var i;return this.us.set(n.id,{id:(i=n).id,version:i.version,createTime:Oe(i.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.cs.get(n))}saveNamedQuery(t,n){return this.cs.set(n.name,function(i){return{name:i.name,query:em(i.bundledQuery),readTime:Oe(i.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.overlays=new U(b.comparator),this.hs=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const i=he();return p.forEach(n,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((r,s)=>{this.de(t,n,s)}),p.resolve()}removeOverlaysForBatchId(t,n,i){const r=this.hs.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(i)),p.resolve()}getOverlaysForCollection(t,n,i){const r=he(),s=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(t,n,i,r){let s=new U((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=s.get(l.largestBatchId);u===null&&(u=he(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=he(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return p.resolve(a)}de(t,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(i.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Pg(n,i));let s=this.hs.get(n);s===void 0&&(s=O(),this.hs.set(n,s)),this.hs.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.ls=new lt(X.fs),this.ds=new lt(X._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,n){const i=new X(t,n);this.ls=this.ls.add(i),this.ds=this.ds.add(i)}ws(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.gs(new X(t,n))}ys(t,n){t.forEach(i=>this.removeReference(i,n))}ps(t){const n=new b(new $([])),i=new X(n,t),r=new X(n,t+1),s=[];return this.ds.forEachInRange([i,r],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(t=>this.gs(t))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const n=new b(new $([])),i=new X(n,t),r=new X(n,t+1);let s=O();return this.ds.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new X(t,0),i=this.ls.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class X{constructor(t,n){this.key=t,this.Es=n}static fs(t,n){return b.comparator(t.key,n.key)||P(t.Es,n.Es)}static _s(t,n){return P(t.Es,n.Es)||b.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new lt(X.fs)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,r){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mg(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new X(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,r=this.Ps(i),s=r<0?0:r;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new X(n,0),r=new X(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([i,r],o=>{const a=this.vs(o.Es);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new lt(P);return n.forEach(r=>{const s=new X(r,0),o=new X(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{i=i.add(a.Es)})}),p.resolve(this.bs(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,r=i.length+1;let s=i;b.isDocumentKey(s)||(s=s.child(""));const o=new X(new b(s),0);let a=new lt(P);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Es)),!0)},o),p.resolve(this.bs(a))}bs(t){const n=[];return t.forEach(i=>{const r=this.vs(i);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){W(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return p.forEach(n.mutations,r=>{const s=new X(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=i})}Dn(t){}containsKey(t,n){const i=new X(n,0),r=this.Rs.firstAfterOrEqual(i);return p.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Vs(t,n){return this.Ps(t)}Ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}vs(t){const n=this.Ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t){this.Ss=t,this.docs=new U(b.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return p.resolve(i?i.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(t,n){let i=Xt();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():ot.newInvalidDocument(r))}),p.resolve(i)}getDocumentsMatchingQuery(t,n,i,r){let s=Xt();const o=n.path,a=new b(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||ig(ng(u),i)<=0||(r.has(u.key)||dr(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(t,n,i,r){C()}Ds(t,n){return p.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new hm(this)}getSize(t){return p.resolve(this.size)}}class hm extends rm{constructor(t){super(),this.rs=t}applyChanges(t){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(t,r)):this.rs.removeEntry(i)}),p.waitFor(n)}getFromCache(t,n){return this.rs.getEntry(t,n)}getAllFromCache(t,n){return this.rs.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t){this.persistence=t,this.Cs=new Ye(n=>lo(n),uo),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.xs=0,this.Ns=new vo,this.targetCount=0,this.ks=ze.Nn()}forEachTarget(t,n){return this.Cs.forEach((i,r)=>n(r)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.xs&&(this.xs=n),p.resolve()}$n(t){this.Cs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ks=new ze(n),this.highestTargetId=n),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,n){return this.$n(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.$n(n),p.resolve()}removeTargetData(t,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,i){let r=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),p.waitFor(s).next(()=>r)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const i=this.Cs.get(n)||null;return p.resolve(i)}addMatchingKeys(t,n,i){return this.Ns.ws(n,i),p.resolve()}removeMatchingKeys(t,n,i){this.Ns.ys(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ns.ps(n),p.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Ns.Ts(n);return p.resolve(i)}containsKey(t,n){return p.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t,n){this.Ms={},this.overlays={},this.Os=new so(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new dm(this),this.indexManager=new nm,this.remoteDocumentCache=function(i){return new um(i)}(i=>this.referenceDelegate.Bs(i)),this.serializer=new tm(n),this.Ls=new am(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new cm,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.Ms[t.toKey()];return i||(i=new lm(n,this.referenceDelegate),this.Ms[t.toKey()]=i),i}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,n,i){y("MemoryPersistence","Starting transaction:",t);const r=new pm(this.Os.next());return this.referenceDelegate.qs(),i(r).next(s=>this.referenceDelegate.Us(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ks(t,n){return p.or(Object.values(this.Ms).map(i=>()=>i.containsKey(t,n)))}}class pm extends sg{constructor(t){super(),this.currentSequenceNumber=t}}class yo{constructor(t){this.persistence=t,this.Gs=new vo,this.Qs=null}static js(t){return new yo(t)}get zs(){if(this.Qs)return this.Qs;throw C()}addReference(t,n,i){return this.Gs.addReference(i,n),this.zs.delete(i.toString()),p.resolve()}removeReference(t,n,i){return this.Gs.removeReference(i,n),this.zs.add(i.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.zs.add(n.toString()),p.resolve()}removeTarget(t,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(s=>this.zs.add(s.toString()))}).next(()=>i.removeTargetData(t,n))}qs(){this.Qs=new Set}Us(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.zs,i=>{const r=b.fromPath(i);return this.Ws(t,r).next(s=>{s||n.removeEntry(r,A.min())})}).next(()=>(this.Qs=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ws(t,n).next(i=>{i?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(t){return 0}Ws(t,n){return p.or([()=>p.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ks(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,n,i,r){this.targetId=t,this.fromCache=n,this.$i=i,this.Fi=r}static Bi(t,n){let i=O(),r=O();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new wo(t,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.Li=!1}initialize(t,n){this.qi=t,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(t,n,i,r){return this.Ui(t,n).next(s=>s||this.Ki(t,n,r,i)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(Ra(n))return p.resolve(null);let i=Vt(n);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=gs(n,null,"F"),i=Vt(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const o=O(...s);return this.qi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(t,gs(n,null,"F")):this.zi(t,l,n,c)}))})))}Ki(t,n,i,r){return Ra(n)||r.isEqual(A.min())?this.Gi(t,n):this.qi.getDocuments(t,i).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,i,r)?this.Gi(t,n):(Aa()<=M.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ms(n)),this.zi(t,o,n,eg(r,-1)))})}Qi(t,n){let i=new lt(Jl(t));return n.forEach((r,s)=>{dr(t,s)&&(i=i.add(s))}),i}ji(t,n,i,r){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Gi(t,n){return Aa()<=M.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",ms(n)),this.qi.getDocumentsMatchingQuery(t,n,Wt.min())}zi(t,n,i,r){return this.qi.getDocumentsMatchingQuery(t,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(t,n,i,r){this.persistence=t,this.Wi=n,this.serializer=r,this.Hi=new U(P),this.Ji=new Ye(s=>lo(s),uo),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(i)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new om(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Hi))}}function vm(e,t,n,i){return new mm(e,t,n,i)}async function yu(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Zi(t),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=O();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function wu(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Fs.getLastRemoteSnapshotVersion(n))}function ym(e,t){const n=N(e),i=t.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];t.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Fs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(ut.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),r=r.insert(h,d),function(_,v,E){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,d,u)&&a.push(n.Fs.updateTargetData(s,d))});let c=Xt(),l=O();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(wm(s,o,t.documentUpdates).next(u=>{c=u.er,l=u.nr})),!i.isEqual(A.min())){const u=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Hi=r,s))}function wm(e,t,n){let i=O(),r=O();return n.forEach(s=>i=i.add(s)),t.getEntries(e,i).next(s=>{let o=Xt();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{er:o,nr:r}})}function Em(e,t){const n=N(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Fs.getTargetData(i,t).next(s=>s?(r=s,p.resolve(r)):n.Fs.allocateTargetId(i).next(o=>(r=new Ht(t,o,"TargetPurposeListen",i.currentSequenceNumber),n.Fs.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Hi.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(i.targetId,i),n.Ji.set(t,i.targetId)),i})}async function bs(e,t,n){const i=N(e),r=i.Hi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Un(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}i.Hi=i.Hi.remove(t),i.Ji.delete(r.target)}function Ha(e,t,n){const i=N(e);let r=A.min(),s=O();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=N(a),h=u.Ji.get(l);return h!==void 0?p.resolve(u.Hi.get(h)):u.Fs.getTargetData(c,l)}(i,o,Vt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>i.Wi.getDocumentsMatchingQuery(o,t,n?r:A.min(),n?s:O())).next(a=>(_m(i,_g(t),a),{documents:a,sr:s})))}function _m(e,t,n){let i=e.Yi.get(t)||A.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),e.Yi.set(t,i)}class Ka{constructor(){this.activeTargetIds=Sg()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bm{constructor(){this.Wr=new Ka,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,n,i){this.Hr[t]=n}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new Ka,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{Jr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi=null;function Vr(){return fi===null?fi=268435456+Math.round(2147483648*Math.random()):fi++,"0x"+fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class Cm extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.wo=n+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,n,i,r,s){const o=Vr(),a=this.Io(t,n);y("RestConnection",`Sending RPC '${t}' ${o}:`,a,i);const c={};return this.To(c,r,s),this.Eo(t,a,c,i).then(l=>(y("RestConnection",`Received RPC '${t}' ${o}: `,l),l),l=>{throw $e("RestConnection",`RPC '${t}' ${o} failed with error: `,l,"url: ",a,"request:",i),l})}Ao(t,n,i,r,s,o){return this.po(t,n,i,r,s)}To(t,n,i){t["X-Goog-Api-Client"]="gl-js/ fire/"+Xe,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>t[s]=r),i&&i.headers.forEach((r,s)=>t[s]=r)}Io(t,n){const i=Am[t];return`${this.wo}/v1/${n}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,n,i,r){const s=Vr();return new Promise((o,a)=>{const c=new qp;c.setWithCredentials(!0),c.listenOnce($p.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Mr.NO_ERROR:const u=c.getResponseJson();y(rt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case Mr.TIMEOUT:y(rt,`RPC '${t}' ${s} timed out`),a(new w(g.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const h=c.getStatus();if(y(rt,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f?.error;if(d&&d.status&&d.message){const _=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(E)>=0?E:g.UNKNOWN}(d.status);a(new w(_,d.message))}else a(new w(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(g.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{y(rt,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(r);y(rt,`RPC '${t}' ${s} sending request:`,r),c.send(n,"POST",l,i,15)})}Ro(t,n,i){const r=Vr(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Vp(),a=Bp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Up({})),this.To(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const l=s.join("");y(rt,`Creating RPC '${t}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const d=new Im({io:v=>{f?y(rt,`Not sending because RPC '${t}' stream ${r} is closed:`,v):(h||(y(rt,`Opening RPC '${t}' stream ${r} transport.`),u.open(),h=!0),y(rt,`RPC '${t}' stream ${r} sending:`,v),u.send(v))},ro:()=>u.close()}),_=(v,E,S)=>{v.listen(E,x=>{try{S(x)}catch(k){setTimeout(()=>{throw k},0)}})};return _(u,li.EventType.OPEN,()=>{f||y(rt,`RPC '${t}' stream ${r} transport opened.`)}),_(u,li.EventType.CLOSE,()=>{f||(f=!0,y(rt,`RPC '${t}' stream ${r} transport closed`),d.fo())}),_(u,li.EventType.ERROR,v=>{f||(f=!0,$e(rt,`RPC '${t}' stream ${r} transport errored:`,v),d.fo(new w(g.UNAVAILABLE,"The operation could not be completed")))}),_(u,li.EventType.MESSAGE,v=>{var E;if(!f){const S=v.data[0];W(!!S);const x=S,k=x.error||((E=x[0])===null||E===void 0?void 0:E.error);if(k){y(rt,`RPC '${t}' stream ${r} received error:`,k);const I=k.status;let D=function(V){const q=z[V];if(q!==void 0)return cu(q)}(I),R=k.message;D===void 0&&(D=g.INTERNAL,R="Unknown error status: "+I+" with message "+k.message),f=!0,d.fo(new w(D,R)),u.close()}else y(rt,`RPC '${t}' stream ${r} received:`,S),d._o(S)}}),_(a,jp.STAT_EVENT,v=>{v.stat===ba.PROXY?y(rt,`RPC '${t}' stream ${r} detected buffering proxy`):v.stat===ba.NOPROXY&&y(rt,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.lo()},0),d}}function Br(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e){return new zg(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n,i=1e3,r=1.5,s=6e4){this.si=t,this.timerId=n,this.vo=i,this.Po=r,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),i=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-i);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t,n,i,r,s,o,a,c){this.si=t,this.Mo=i,this.Oo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Eu(t,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,t!==4?this.Lo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Ft(n.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.$o===n&&this.Xo(i,r)},i=>{t(()=>{const r=new w(g.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Zo(r)})})}Xo(t,n){const i=this.Yo(this.$o);this.stream=this.tu(t,n),this.stream.oo(()=>{i(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{i(()=>this.Zo(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return n=>{this.si.enqueueAndForget(()=>this.$o===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class km extends Sm{constructor(t,n,i,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}tu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.Lo.reset();const n=Kg(this.serializer,t),i=function(r){if(!("targetChange"in r))return A.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?A.min():s.readTime?Oe(s.readTime):A.min()}(t);return this.listener.eu(n,i)}nu(t){const n={};n.database=za(this.serializer),n.addTarget=function(r,s){let o;const a=s.target;if(o=fs(a)?{documents:Gg(r,a)}:{query:Wg(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=hu(r,s.resumeToken);const c=ws(r,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(A.min())>0){o.readTime=Es(r,s.snapshotVersion.toTimestamp());const c=ws(r,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,t);const i=Xg(this.serializer,t);i&&(n.labels=i),this.zo(n)}su(t){const n={};n.database=za(this.serializer),n.removeTarget=t,this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm extends class{}{constructor(t,n,i,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,n,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.po(t,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(g.UNKNOWN,r.toString())})}Ao(t,n,i,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(t,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(g.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class Dm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(t){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,t==="Online"&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Ft(n),this.wu=!1):y("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,n,i,r,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{i.enqueueAndForget(async()=>{Gn(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=N(a);c.Au.add(4),await Kn(c),c.Pu.set("Unknown"),c.Au.delete(4),await vr(c)}(this))})}),this.Pu=new Dm(i,r)}}async function vr(e){if(Gn(e))for(const t of e.Ru)await t(!0)}async function Kn(e){for(const t of e.Ru)await t(!1)}function _u(e,t){const n=N(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),bo(n)?_o(n):Je(n).Uo()&&Eo(n,t))}function bu(e,t){const n=N(e),i=Je(n);n.Eu.delete(t),i.Uo()&&Tu(n,t),n.Eu.size===0&&(i.Uo()?i.Qo():Gn(n)&&n.Pu.set("Unknown"))}function Eo(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(A.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Je(e).nu(t)}function Tu(e,t){e.bu.Lt(t),Je(e).su(t)}function _o(e){e.bu=new $g({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),Je(e).start(),e.Pu.mu()}function bo(e){return Gn(e)&&!Je(e).qo()&&e.Eu.size>0}function Gn(e){return N(e).Au.size===0}function Au(e){e.bu=void 0}async function Om(e){e.Eu.forEach((t,n)=>{Eo(e,t)})}async function Nm(e,t){Au(e),bo(e)?(e.Pu.pu(t),_o(e)):e.Pu.set("Unknown")}async function Rm(e,t,n){if(e.Pu.set("Online"),t instanceof uu&&t.state===2&&t.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.Eu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.Eu.delete(o),i.bu.removeTarget(o))}(e,t)}catch(i){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Wa(e,i)}else if(t instanceof yi?e.bu.Wt(t):t instanceof lu?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(A.min()))try{const i=await wu(e.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.bu.ue(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Eu.get(c);l&&r.Eu.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Eu.get(a);if(!l)return;r.Eu.set(a,l.withResumeToken(ut.EMPTY_BYTE_STRING,l.snapshotVersion)),Tu(r,a);const u=new Ht(l.target,a,c,l.sequenceNumber);Eo(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(i){y("RemoteStore","Failed to raise snapshot:",i),await Wa(e,i)}}async function Wa(e,t,n){if(!Un(t))throw t;e.Au.add(1),await Kn(e),e.Pu.set("Offline"),n||(n=()=>wu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await vr(e)})}async function Qa(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const i=Gn(n);n.Au.add(3),await Kn(n),i&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await vr(n)}async function Mm(e,t){const n=N(e);t?(n.Au.delete(2),await vr(n)):t||(n.Au.add(2),await Kn(n),n.Pu.set("Unknown"))}function Je(e){return e.Vu||(e.Vu=function(t,n,i){const r=N(t);return r.lu(),new km(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(e.datastore,e.asyncQueue,{oo:Om.bind(null,e),co:Nm.bind(null,e),eu:Rm.bind(null,e)}),e.Ru.push(async t=>{t?(e.Vu.Go(),bo(e)?_o(e):e.Pu.set("Unknown")):(await e.Vu.stop(),Au(e))})),e.Vu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,a=new To(t,n,o,r,s);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iu(e,t){if(Ft("AsyncQueue",`${t}: ${e}`),Un(e))return new w(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.comparator=t?(n,i)=>t(n,i)||b.comparator(n.key,i.key):(n,i)=>b.comparator(n.key,i.key),this.keyedMap=cn(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new Ne(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ne)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Ne;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.Du=new U(b.comparator)}track(t){const n=t.doc.key,i=this.Du.get(n);i?t.type!==0&&i.type===3?this.Du=this.Du.insert(n,t):t.type===3&&i.type!==1?this.Du=this.Du.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.Du=this.Du.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.Du=this.Du.remove(n):t.type===1&&i.type===2?this.Du=this.Du.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):C():this.Du=this.Du.insert(n,t)}Cu(){const t=[];return this.Du.inorderTraversal((n,i)=>{t.push(i)}),t}}class He{constructor(t,n,i,r,s,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new He(t,n,Ne.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.xu=void 0,this.listeners=[]}}class Fm{constructor(){this.queries=new Ye(t=>Yl(t),hr),this.onlineState="Unknown",this.Nu=new Set}}async function Vm(e,t){const n=N(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Pm),r)try{s.xu=await n.onListen(i)}catch(o){const a=Iu(o,`Initialization of query '${ms(t.query)}' failed`);return void t.onError(a)}n.queries.set(i,s),s.listeners.push(t),t.ku(n.onlineState),s.xu&&t.Mu(s.xu)&&Ao(n)}async function Bm(e,t){const n=N(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function $m(e,t){const n=N(e);let i=!1;for(const r of t){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(r)&&(i=!0);o.xu=r}}i&&Ao(n)}function jm(e,t,n){const i=N(e),r=i.queries.get(t);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(t)}function Ao(e){e.Nu.forEach(t=>{t.next()})}class Um{constructor(t,n,i){this.query=t,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=i||{}}Mu(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new He(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),n=!0):this.Lu(t,this.onlineState)&&(this.qu(t),n=!0),this.Fu=t,n}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),n=!0),n}Lu(t,n){if(!t.fromCache)return!0;const i=n!=="Offline";return(!this.options.Uu||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Bu(t){if(t.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(t){t=He.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t){this.key=t}}class Su{constructor(t){this.key=t}}class qm{constructor(t,n){this.query=t,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=O(),this.mutatedKeys=O(),this.Zu=Jl(t),this.tc=new Ne(this.Zu)}get ec(){return this.Ju}nc(t,n){const i=n?n.sc:new Xa,r=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((u,h)=>{const f=r.get(u),d=dr(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let E=!1;f&&d?f.data.isEqual(d.data)?_!==v&&(i.track({type:3,doc:d}),E=!0):this.ic(f,d)||(i.track({type:2,doc:d}),E=!0,(c&&this.Zu(d,c)>0||l&&this.Zu(d,l)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),E=!0):f&&!d&&(i.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(d?(o=o.add(d),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{tc:o,sc:i,ji:a,mutatedKeys:s}}ic(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i){const r=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const s=t.sc.Cu();s.sort((l,u)=>function(h,f){const d=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return d(h)-d(f)}(l.type,u.type)||this.Zu(l.doc,u.doc)),this.rc(i);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,s.length!==0||c?{snapshot:new He(this.query,t.tc,r,s,t.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Xa,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=O(),this.tc.forEach(i=>{this.cc(i.key)&&(this.Xu=this.Xu.add(i.key))});const n=[];return t.forEach(i=>{this.Xu.has(i)||n.push(new Su(i))}),this.Xu.forEach(i=>{t.has(i)||n.push(new Cu(i))}),n}ac(t){this.Ju=t.sr,this.Xu=O();const n=this.nc(t.documents);return this.applyChanges(n,!0)}hc(){return He.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class zm{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class Hm{constructor(t){this.key=t,this.lc=!1}}class Km{constructor(t,n,i,r,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Ye(a=>Yl(a),hr),this._c=new Map,this.wc=new Set,this.mc=new U(b.comparator),this.gc=new Map,this.yc=new vo,this.Ic={},this.Tc=new Map,this.Ec=ze.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Gm(e,t){const n=tv(e);let i,r;const s=n.dc.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.hc();else{const o=await Em(n.localStore,Vt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await Wm(n,t,i,a==="current",o.resumeToken),n.isPrimaryClient&&_u(n.remoteStore,o)}return r}async function Wm(e,t,n,i,r){e.Rc=(h,f,d)=>async function(_,v,E,S){let x=v.view.nc(E);x.ji&&(x=await Ha(_.localStore,v.query,!1).then(({documents:D})=>v.view.nc(D,x)));const k=S&&S.targetChanges.get(v.targetId),I=v.view.applyChanges(x,_.isPrimaryClient,k);return Ja(_,v.targetId,I.uc),I.snapshot}(e,h,f,d);const s=await Ha(e.localStore,t,!0),o=new qm(t,s.sr),a=o.nc(s.documents),c=Hn.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",r),l=o.applyChanges(a,e.isPrimaryClient,c);Ja(e,n,l.uc);const u=new zm(t,n,o);return e.dc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),l.snapshot}async function Qm(e,t){const n=N(e),i=n.dc.get(t),r=n._c.get(i.targetId);if(r.length>1)return n._c.set(i.targetId,r.filter(s=>!hr(s,t))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await bs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),bu(n.remoteStore,i.targetId),Ts(n,i.targetId)}).catch(ro)):(Ts(n,i.targetId),await bs(n.localStore,i.targetId,!0))}async function ku(e,t){const n=N(e);try{const i=await ym(n.localStore,t);t.targetChanges.forEach((r,s)=>{const o=n.gc.get(s);o&&(W(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?W(o.lc):r.removedDocuments.size>0&&(W(o.lc),o.lc=!1))}),await Du(n,i,t)}catch(i){await ro(i)}}function Ya(e,t,n){const i=N(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.dc.forEach((s,o)=>{const a=o.view.ku(t);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=N(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ku(o)&&(c=!0)}),c&&Ao(a)}(i.eventManager,t),r.length&&i.fc.eu(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Xm(e,t,n){const i=N(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.gc.get(t),s=r&&r.key;if(s){let o=new U(b.comparator);o=o.insert(s,ot.newNoDocument(s,A.min()));const a=O().add(s),c=new gr(A.min(),new Map,new U(P),o,a);await ku(i,c),i.mc=i.mc.remove(s),i.gc.delete(t),Io(i)}else await bs(i.localStore,t,!1).then(()=>Ts(i,t,n)).catch(ro)}function Ts(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e._c.get(t))e.dc.delete(i),n&&e.fc.vc(i,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(i=>{e.yc.containsKey(i)||xu(e,i)})}function xu(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);n!==null&&(bu(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),Io(e))}function Ja(e,t,n){for(const i of n)i instanceof Cu?(e.yc.addReference(i.key,t),Ym(e,i)):i instanceof Su?(y("SyncEngine","Document no longer in limbo: "+i.key),e.yc.removeReference(i.key,t),e.yc.containsKey(i.key)||xu(e,i.key)):C()}function Ym(e,t){const n=t.key,i=n.path.canonicalString();e.mc.get(n)||e.wc.has(i)||(y("SyncEngine","New document in limbo: "+n),e.wc.add(i),Io(e))}function Io(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new b($.fromString(t)),i=e.Ec.next();e.gc.set(i,new Hm(n)),e.mc=e.mc.insert(n,i),_u(e.remoteStore,new Ht(Vt(Wl(n.path)),i,"TargetPurposeLimboResolution",so.ct))}}async function Du(e,t,n){const i=N(e),r=[],s=[],o=[];i.dc.isEmpty()||(i.dc.forEach((a,c)=>{o.push(i.Rc(c,t,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l?.fromCache?"not-current":"current"),l){r.push(l);const u=wo.Bi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),i.fc.eu(r),await async function(a,c){const l=N(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>p.forEach(c,h=>p.forEach(h.$i,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>p.forEach(h.Fi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Un(u))throw u;y("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Hi.get(h),d=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(d);l.Hi=l.Hi.insert(h,_)}}}(i.localStore,s))}async function Jm(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const i=await yu(n.localStore,t);n.currentUser=t,function(r,s){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new w(g.CANCELLED,s))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Du(n,i.tr)}}function Zm(e,t){const n=N(e),i=n.gc.get(t);if(i&&i.lc)return O().add(i.key);{let r=O();const s=n._c.get(t);if(!s)return r;for(const o of s){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function tv(e){const t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ku.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Xm.bind(null,t),t.fc.eu=$m.bind(null,t.eventManager),t.fc.vc=jm.bind(null,t.eventManager),t}class Za{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=mr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return vm(this.persistence,new gm,t.initialUser,this.serializer)}createPersistence(t){return new fm(yo.js,this.serializer)}createSharedClientState(t){return new bm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ev{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ya(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jm.bind(null,this.syncEngine),await Mm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Fm}createDatastore(t){const n=mr(t.databaseInfo.databaseId),i=(r=t.databaseInfo,new Cm(r));var r;return function(s,o,a,c){return new xm(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return n=this.localStore,i=this.datastore,r=t.asyncQueue,s=a=>Ya(this.syncEngine,a,0),o=Ga.D()?new Ga:new Tm,new Lm(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(t,n){return function(i,r,s,o,a,c,l){const u=new Km(i,r,s,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=N(t);y("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Kn(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=st.UNAUTHENTICATED,this.clientId=Zp.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Iu(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function $r(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async r=>{i.isEqual(r)||(await yu(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function tc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await sv(e);y("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(r=>Qa(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Qa(t.remoteStore,s)),e._onlineComponents=t}function rv(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function sv(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await $r(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!rv(n))throw n;$e("Error using user provided cache. Falling back to memory cache: "+n),await $r(e,new Za)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await $r(e,new Za);return e._offlineComponents}async function ov(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await tc(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await tc(e,new ev))),e._onlineComponents}async function av(e){const t=await ov(e),n=t.eventManager;return n.onListen=Gm.bind(null,t.syncEngine),n.onUnlisten=Qm.bind(null,t.syncEngine),n}function cv(e,t,n={}){const i=new pe;return e.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const l=new nv({next:h=>{s.enqueueAndForget(()=>Bm(r,u)),h.fromCache&&a.source==="server"?c.reject(new w(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Um(o,l,{includeMetadataChanges:!0,Uu:!0});return Vm(r,u)}(await av(e),e.asyncQueue,t,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(e,t,n){if(!n)throw new w(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function uv(e,t,n,i){if(t===!0&&i===!0)throw new w(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function nc(e){if(b.isDocumentKey(e))throw new w(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function yr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":C()}function As(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yr(e);throw new w(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}uv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ic({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ic(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Hp;switch(n.type){case"firstParty":return new Qp(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ec.get(t);n&&(y("ComponentProvider","Removing Datastore"),ec.delete(t),n.terminate())}(this),Promise.resolve()}}function hv(e,t,n,i={}){var r;const s=(e=As(e,Co))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&$e("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=st.MOCK_USER;else{o=Ad(i.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new w(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new st(c)}e._authCredentials=new Kp(new Bl(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Re(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}}class Ze{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Ze(this.firestore,t,this._query)}}class Re extends Ze{constructor(t,n,i){super(t,n,Wl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new b(t))}withConverter(t){return new Re(this.firestore,t,this._path)}}function dv(e,t,...n){if(e=Li(e),lv("collection","path",t),e instanceof Co){const i=$.fromString(t,...n);return nc(i),new Re(e,null,i)}{if(!(e instanceof Bt||e instanceof Re))throw new w(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child($.fromString(t,...n));return nc(i),new Re(e.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Eu(this,"async_queue_retry"),this.Yc=()=>{const n=Br();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=Br();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=Br();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new pe;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!Un(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(i=>{this.zc=i,this.Wc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Ft("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Wc=!1,i))));return this.Kc=n,n}enqueueAfterDelay(t,n,i){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const r=To.createAndSchedule(this,t,n,i,s=>this.ea(s));return this.jc.push(r),r}Xc(){this.zc&&C()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}class Lu extends Co{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=new fv,this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ou(this),this._firestoreClient.terminate()}}function pv(e,t){const n=typeof e=="object"?e:xf(),i=typeof e=="string"?e:t||"(default)",r=If(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=_d("firestore");s&&hv(r,...s)}return r}function gv(e){return e._firestoreClient||Ou(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ou(e){var t,n,i;const r=e._freezeSettings(),s=function(o,a,c,l){return new cg(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new iv(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ke(ut.fromBase64String(t))}catch(n){throw new w(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ke(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=/^__.*__$/;function Mu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class ko{constructor(t,n,i,r,s,o){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new ko(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ca({path:i,ha:!1});return r.la(t),r}fa(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ca({path:i,ha:!1});return r.oa(),r}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return Is(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Mu(this.ua)&&mv.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class vv{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||mr(t)}ga(t,n,i,r=!1){return new ko({ua:t,methodName:n,ma:i,path:dt.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yv(e){const t=e._freezeSettings(),n=mr(e._databaseId);return new vv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wv(e,t,n,i=!1){return xo(n,e.ga(i?4:3,t))}function xo(e,t){if(Pu(e=Li(e)))return _v("Unsupported field value:",t,e),Ev(e,t);if(e instanceof Ru)return function(n,i){if(!Mu(i.ua))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&t.ua!==4)throw t._a("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=xo(o,i.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(e,t)}return function(n,i){if((n=Li(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kg(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Y.fromDate(n);return{timestampValue:Es(i.serializer,r)}}if(n instanceof Y){const r=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Es(i.serializer,r)}}if(n instanceof So)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ke)return{bytesValue:hu(i.serializer,n._byteString)};if(n instanceof Bt){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:du(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${yr(n)}`)}(e,t)}function Ev(e,t){const n={};return $l(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qn(e,(i,r)=>{const s=xo(r,t.aa(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function Pu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Y||e instanceof So||e instanceof Ke||e instanceof Bt||e instanceof Ru)}function _v(e,t,n){if(!Pu(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=yr(n);throw i==="an object"?t._a(e+" a custom object"):t._a(e+" "+i)}}const bv=new RegExp("[~\\*/\\[\\]]");function Tv(e,t,n){if(t.search(bv)>=0)throw Is(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Nu(...t.split("."))._internalPath}catch{throw Is(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Is(e,t,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new w(g.INVALID_ARGUMENT,a+e+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,n,i,r,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Av(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Vu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Av extends Fu{data(){return super.data()}}function Vu(e,t){return typeof t=="string"?Tv(e,t):t instanceof Nu?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Do{}class Cv extends Do{}function Sv(e,t,...n){let i=[];t instanceof Do&&i.push(t),i=i.concat(n),function(r){const s=r.filter(a=>a instanceof Oo).length,o=r.filter(a=>a instanceof Lo).length;if(s>1||s>0&&o>0)throw new w(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)e=r._apply(e);return e}class Lo extends Cv{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new Lo(t,n,i)}_apply(t){const n=this._parse(t);return Bu(t._query,n),new Ze(t.firestore,t.converter,ps(t._query,n))}_parse(t){const n=yv(t.firestore);return function(r,s,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){sc(u,l);const f=[];for(const d of u)f.push(rc(a,r,d));h={arrayValue:{values:f}}}else h=rc(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||sc(u,l),h=wv(o,s,u,l==="in"||l==="not-in");return K.create(c,l,h)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Oo extends Do{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Oo(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Ct.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,r){let s=i;const o=r.getFlattenedFilters();for(const a of o)Bu(s,a),s=ps(s,a)}(t._query,n),new Ze(t.firestore,t.converter,ps(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function rc(e,t,n){if(typeof(n=Li(n))=="string"){if(n==="")throw new w(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xl(t)&&n.indexOf("/")!==-1)throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child($.fromString(n));if(!b.isDocumentKey(i))throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ka(e,new b(i))}if(n instanceof Bt)return ka(e,n._key);throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yr(n)}.`)}function sc(e,t){if(!Array.isArray(e)||e.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Bu(e,t){if(t.isInequality()){const i=ho(e),r=t.field;if(i!==null&&!i.isEqual(r))throw new w(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${r.toString()}'`);const s=Ql(e);s!==null&&kv(e,r,s)}const n=function(i,r){for(const s of i)for(const o of s.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new w(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new w(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function kv(e,t,n){if(!n.isEqual(t))throw new w(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class xv{convertValue(t,n="none"){switch(Ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return H(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(we(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw C()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return qn(t,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(t){return new So(H(t.latitude),H(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=ao(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(kn(t));default:return null}}convertTimestamp(t){const n=Qt(t);return new Y(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=$.fromString(t);W(vu(i));const r=new xn(i.get(1),i.get(3)),s=new b(i.popFirst(5));return r.isEqual(n)||Ft(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Dv extends Fu{constructor(t,n,i,r,s,o){super(t,n,i,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new wi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(Vu("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class wi extends Dv{data(t={}){return super.data(t)}}class Lv{constructor(t,n,i,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new pi(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new wi(this._firestore,this._userDataWriter,i.key,i,new pi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new wi(i._firestore,i._userDataWriter,o.doc.key,o.doc,new pi(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new wi(i._firestore,i._userDataWriter,o.doc.key,o.doc,new pi(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:Ov(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ov(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}class Nv extends xv{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ke(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function Rv(e){e=As(e,Ze);const t=As(e.firestore,Lu),n=gv(t),i=new Nv(t);return Iv(e._query),cv(n,e._query).then(r=>new Lv(t,i,e,r))}(function(e,t=!0){(function(n){Xe=n})(kf),Ni(new En("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new Lu(new Gp(n.getProvider("auth-internal")),new Yp(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(a.options.projectId,c)}(s,i),s);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ke(Ta,"3.11.0",e),ke(Ta,"3.11.0","esm2017")})();const Mv={apiKey:"AIzaSyBcqmPli6YqU55kv59pokPojUXbAWeVp5E",authDomain:"alquiler-f9a38.firebaseapp.com",projectId:"alquiler-f9a38",storageBucket:"alquiler-f9a38.appspot.com",messagingSenderId:"711506937678",appId:"1:711506937678:web:080aa9f17a414e7760c01f"},Pv=Oc(Mv),Fv=pv(Pv),Vv=Sv(dv(Fv,"casas")),Bv=await Rv(Vv);let $v=document.getElementById("casas");Bv.forEach(e=>{let t=e.data();$v.innerHTML+=`<li> <main> 
    <div class="w-80 h-full mx-auto   bg-white  mb-10 pb-2 rounded-md"> 
    <div class="img"> 
        <img src="${t.imagen}" alt="${t.nombre}" class="h-50 rounded-md mx-auto pt-4 pl-4 pr-4 "> 
        
        </div> 
        <div class="descripcion"> 
        <div class="text-center pb-2"> ${t.precio}</div>  
        <div class="text-center mb-2"> ${t.baños} ${t.camas} </div> 
        <div class="text-left absolute ml-4 mb-8">  
        
</div> 
        <div class="text-left absolute ml-12 "> </div> 
        <div class="text-right mr-4 pb-2">${t.direccion} </div> 
         
        </div> 
        </div> 
        <div class="pb-6"></div> 
        </main> 
    </li>`});
