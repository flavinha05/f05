(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["environment"],{48359:()=>{if(!("ariaNotify"in Element.prototype)){let e=`${Date.now()}`;try{e=crypto.randomUUID()}catch{}let t=Symbol(),o=`live-region-${e}`;let Message=class Message{element;message;priority="none";interrupt="none";get #e(){return"all"===this.interrupt||"pending"===this.interrupt}constructor({element:e,message:t,priority:o="none",interrupt:r="none"}){this.element=e,this.message=t,this.priority=o,this.interrupt=r}matches(e){return this.element===e.element&&this.priority===e.priority&&this.interrupt===e.interrupt}#t(){return this.element.isConnected&&!this.element.closest("[inert]")&&(this.element.ownerDocument.querySelector(":modal")?.contains(this.element)??!0)}async announce(){if(!this.#t())return;let e=this.element.closest("dialog")||this.element.getRootNode();(!e||e instanceof Document)&&(e=document.body);let r=e.querySelector(o);this.#e&&r&&(r.remove(),r=null),r||(r=document.createElement(o),e.append(r)),await new Promise(e=>setTimeout(e,250)),r.handleMessage(t,this.message)}};let r=new class MessageQueue{#o=[];#r;enqueue(e){let{priority:t,interrupt:o}=e;if(("all"===o||"pending"===o)&&(this.#o=this.#o.filter(e=>!e.matches(e))),"important"===t){let t=this.#o.findLastIndex(e=>"important"===e.priority);this.#o.splice(t+1,0,e)}else this.#o.push(e);this.#r||this.#l()}async #l(){this.#r=this.#o.shift(),this.#r&&(await this.#r.announce(),this.#l())}};let LiveRegionCustomElement=class LiveRegionCustomElement extends HTMLElement{#s=this.attachShadow({mode:"closed"});connectedCallback(){this.ariaLive="polite",this.ariaAtomic="true",this.style.marginLeft="-1px",this.style.marginTop="-1px",this.style.position="absolute",this.style.width="1px",this.style.height="1px",this.style.overflow="hidden",this.style.clipPath="rect(0 0 0 0)",this.style.overflowWrap="normal"}handleMessage(e=null,o=""){t===e&&(this.#s.textContent==o&&(o+="\xa0"),this.#s.textContent=o)}};customElements.define(o,LiveRegionCustomElement),Element.prototype.ariaNotify=function(e,{priority:t="none",interrupt:o="none"}={}){r.enqueue(new Message({element:this,message:e,priority:t,interrupt:o}))}}},31196:e=>{e.exports={polyfill:function(){var e,t=window,o=document;if(!("scrollBehavior"in o.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var r=t.HTMLElement||t.Element,l={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||n,scrollIntoView:r.prototype.scrollIntoView},s=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(e=t.navigator.userAgent,RegExp("MSIE |Trident/|Edge/").test(e))?1:0;t.scroll=t.scrollTo=function(){if(void 0!==arguments[0]){if(!0===c(arguments[0])){l.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset);return}p.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset)}},t.scrollBy=function(){if(void 0!==arguments[0]){if(c(arguments[0])){l.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0);return}p.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))}},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0===c(arguments[0])){if("number"==typeof arguments[0]&&void 0===arguments[1])throw SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop);return}var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}},r.prototype.scrollBy=function(){if(void 0!==arguments[0]){if(!0===c(arguments[0])){l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},r.prototype.scrollIntoView=function(){if(!0===c(arguments[0])){l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);return}var e=function(e){for(var t,r,l;e!==o.body&&!1===(r=a(t=e,"Y")&&h(t,"Y"),l=a(t,"X")&&h(t,"X"),r||l);)e=e.parentNode||e.host;return e}(this),r=e.getBoundingClientRect(),s=this.getBoundingClientRect();e!==o.body?(p.call(this,e,e.scrollLeft+s.left-r.left,e.scrollTop+s.top-r.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:s.left,top:s.top,behavior:"smooth"})}}function n(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function h(e,o){var r=t.getComputedStyle(e,null)["overflow"+o];return"auto"===r||"scroll"===r}function p(e,r,i){var c,a,h,p,u=s();e===o.body?(c=t,a=t.scrollX||t.pageXOffset,h=t.scrollY||t.pageYOffset,p=l.scroll):(c=e,a=e.scrollLeft,h=e.scrollTop,p=n),function e(o){var r,l,i,n=(s()-o.startTime)/468;r=.5*(1-Math.cos(Math.PI*(n=n>1?1:n))),l=o.startX+(o.x-o.startX)*r,i=o.startY+(o.y-o.startY)*r,o.method.call(o.scrollable,l,i),(l!==o.x||i!==o.y)&&t.requestAnimationFrame(e.bind(t,o))}({scrollable:c,method:p,startTime:u,startX:a,startY:h,x:r,y:i})}}}},55190:(e,t,o)=>{"use strict";var r=o(42445),l=o(47584);l.cg?.addEventListener("error",e=>{e.error&&r.N7(e.error)}),l.cg?.addEventListener("unhandledrejection",async e=>{if(e.promise)try{await e.promise}catch(e){r.N7(e)}}),l.cg?.location.hash==="#b00m"&&setTimeout(()=>{throw Error("b00m")}),o(31196),o(48359);var s=o(75632),i=o(77065);o(26964),(0,i.Bb)(),"undefined"!=typeof document&&((()=>{if((0,s.G7)("remove_child_patch")&&"function"==typeof Node&&Node.prototype){let e=Node.prototype.removeChild;Node.prototype.removeChild=function(t){try{return e.apply(this,[t])}catch(e){if(e instanceof Error&&e.stack?.includes("react-lib"))return t;throw e}}}})(),(()=>{if((0,s.G7)("insert_before_patch")&&"function"==typeof Node&&Node.prototype){let e=Node.prototype.insertBefore;Node.prototype.insertBefore=function(t,o){try{return e.apply(this,[t,o])}catch(e){if(e instanceof Error&&(e.stack?.includes("react-lib")||e.stack?.includes("react-dom")))return t;throw e}}}})())},26964:()=>{let e=window.fetch,t=(t,o)=>{if(t instanceof Request){let o={...Object.fromEntries(t.headers.entries()),"X-Requested-With":"XMLHttpRequest"};return e(new Request(t,{headers:o}))}{let r={...o?.headers??{},"X-Requested-With":"XMLHttpRequest"};return e(new Request(t,{...o,headers:r}))}};document.documentElement.hasAttribute("override-fetch")&&window.fetch!==t&&(window.fetch=t)}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-1d3d52","ui_packages_failbot_failbot_ts"],()=>t(55190)),e.O()}]);
//# sourceMappingURL=environment-c56583bcb5e9.js.map