(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1354)}])},3901:function(e,t,n){"use strict";var r,o;void 0!==(r="function"==typeof(o=function(){var e,t,n,r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"linear",positionUsing:"",speed:200,trickle:!0,trickleSpeed:200,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&1===e.nodeType&&"string"==typeof e.nodeName}r.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(o[t]=n);return this},r.status=null,r.set=function(e){var t,n,s=r.isStarted();e=(t=e)<(n=o.minimum)?n:t>1?1:t,r.status=1===e?null:e;var l=r.render(!s),c=l.querySelector(o.barSelector),u=o.speed,f=o.easing;return l.offsetWidth,a(function(t){var n,s;""===o.positionUsing&&(o.positionUsing=r.getPositioningCSS()),i(c,(n=e,(s="translate3d"===o.positionUsing?{transform:"translate3d("+(-1+n)*100+"%,0,0)"}:"translate"===o.positionUsing?{transform:"translate("+(-1+n)*100+"%,0)"}:{"margin-left":(-1+n)*100+"%"}).transition="all "+u+"ms "+f,s)),1===e?(i(l,{transition:"none",opacity:1}),l.offsetWidth,setTimeout(function(){i(l,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){r.remove(),t()},u)},u)):setTimeout(t,u)}),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){r.status&&(r.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(e){var t,n=r.status;return n?n>1?void 0:("number"!=typeof e&&(e=n>=0&&n<.2?.1:n>=.2&&n<.5?.04:n>=.5&&n<.8?.02:n>=.8&&n<.99?.005:0),n=(t=n+e)<0?0:t>.994?.994:t,r.set(n)):r.start()},r.trickle=function(){return r.inc()},e=0,t=0,r.promise=function(n){return n&&"resolved"!==n.state()&&(0===t&&r.start(),e++,t++,n.always(function(){0==--t?(e=0,r.done()):r.set((e-t)/e)})),this},r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=o.template;var n,a,l=t.querySelector(o.barSelector),u=e?"-100":(-1+(r.status||0))*100,f=s(o.parent)?o.parent:document.querySelector(o.parent);return i(l,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),!o.showSpinner&&(a=t.querySelector(o.spinnerSelector))&&d(a),f!=document.body&&c(f,"nprogress-custom-parent"),f.appendChild(t),t},r.remove=function(){u(document.documentElement,"nprogress-busy"),u(s(o.parent)?o.parent:document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&d(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var a=(n=[],function(e){n.push(e),1==n.length&&function e(){var t=n.shift();t&&t(e)}()}),i=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,r,o){var s;r=t[s=(s=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[s]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+s)in n)return r;return t}(s)),n.style[r]=o}return function(e,t){var r,o,s=arguments;if(2==s.length)for(r in t)void 0!==(o=t[r])&&t.hasOwnProperty(r)&&n(e,r,o);else n(e,s[1],s[2])}}();function l(e,t){return("string"==typeof e?e:f(e)).indexOf(" "+t+" ")>=0}function c(e,t){var n=f(e);l(n,t)||(e.className=(n+t).substring(1))}function u(e,t){var n,r=f(e);l(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function f(e){return(" "+(e&&e.className||"")+" ").replace(/\s+/gi," ")}function d(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r})?o.call(t,n,t,e):o)&&(e.exports=r)},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,s=r(n(7294)),a=n(1003),i=n(7795),l=n(4465),c=n(2692),u=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function m(e,t,n,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,s=t+"%"+n+"%"+o;if(h.has(s))return;h.add(s)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let v=s.default.forwardRef(function(e,t){let n,r;let{href:i,as:h,children:v,prefetch:y,passHref:x,replace:b,shallow:j,scroll:_,locale:k,onClick:w,onMouseEnter:C,onTouchStart:N,legacyBehavior:S=!1}=e,E=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,S&&("string"==typeof n||"number"==typeof n)&&(n=s.default.createElement("a",null,n));let M=!1!==y,T=s.default.useContext(c.RouterContext),P=s.default.useContext(u.AppRouterContext),R=null!=T?T:P,O=!T,{href:L,as:z}=s.default.useMemo(()=>{if(!T){let e=g(i);return{href:e,as:h?g(h):e}}let[e,t]=a.resolveHref(T,i,!0);return{href:e,as:h?a.resolveHref(T,h):t||e}},[T,i,h]),I=s.default.useRef(L),U=s.default.useRef(z);S&&(r=s.default.Children.only(n));let B=S?r&&"object"==typeof r&&r.ref:t,[H,q,D]=f.useIntersection({rootMargin:"200px"}),W=s.default.useCallback(e=>{(U.current!==z||I.current!==L)&&(D(),U.current=z,I.current=L),H(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[z,B,L,D,H]);s.default.useEffect(()=>{R&&q&&M&&m(R,L,z,{locale:k})},[z,L,q,k,M,null==T?void 0:T.locale,R]);let A={ref:W,onClick(e){S||"function"!=typeof w||w(e),S&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,o,i,l,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:l}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};u?s.default.startTransition(h):h()}(e,R,L,z,b,j,_,k,O,M)},onMouseEnter(e){S||"function"!=typeof C||C(e),S&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(M||!O)&&m(R,L,z,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){S||"function"!=typeof N||N(e),S&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(M||!O)&&m(R,L,z,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!S||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&d.getDomainLocale(z,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);A.href=t||p.addBasePath(l.addLocale(z,e,null==T?void 0:T.defaultLocale))}return S?s.default.cloneElement(r,A):s.default.createElement("a",Object.assign({},E,A),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:l}=e,c=l||!s,[u,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(s){if(c||u)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:s}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:s,elements:o},i.push(n),a.set(n,t),t}(n);return s.set(e,t),o.observe(e),function(){if(s.delete(e),o.unobserve(e),0===s.size){o.disconnect(),a.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[c,n,t,u,d.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,u,h]};var r=n(7294),o=n(4686);let s="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1354:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),o=n(9008),s=n.n(o),a=n(1664),i=n.n(a),l=n(1163);function c(e){let t=(0,l.useRouter)(),n=RegExp("".concat(e,"*"));if(n.test(t.asPath))return"text-ajwa-green"}function u(){return(0,r.jsxs)("header",{className:"pt-8 md:pt-12",children:[(0,r.jsxs)(i(),{className:"inline-flex no-underline",href:"/",children:[(0,r.jsx)("img",{src:"/Reza logo.svg",width:35,height:35,alt:"Reza logo",loading:"lazy",decoding:"async"}),(0,r.jsxs)("div",{className:"ml-4",children:[(0,r.jsx)("span",{className:"text-xl text-gray-800 font-bold block leading-none",children:"Reza Sariful Fikri"}),(0,r.jsx)("span",{className:"text-gray-500 leading-none",children:"Web Developer"})]})]}),(0,r.jsx)("nav",{className:"mt-5 text-gray-700 font-medium",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"inline-block pr-8",children:(0,r.jsx)(i(),{href:"/about",className:"hover:text-ajwa-green no-underline ".concat(c("/about")),children:"Tentang"})}),(0,r.jsx)("li",{className:"inline-block pr-8",children:(0,r.jsx)(i(),{href:"/blogs",className:"hover:text-ajwa-green no-underline ".concat(c("/blogs")),children:"Blog"})}),(0,r.jsx)("li",{className:"inline-block pr-8",children:(0,r.jsx)(i(),{href:"/projects",className:"hover:text-ajwa-green no-underline ".concat(c("/projects")),children:"Projek"})}),(0,r.jsx)("li",{className:"inline-block",children:(0,r.jsxs)(i(),{href:"https://github.com/rezafikkri",className:"group hover:text-ajwa-green no-underline",rel:"noopener noreferrer",target:"_blank",children:[(0,r.jsx)("span",{className:"mr-1.5",children:"Github"}),(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",className:"inline-block align-baseline stroke-gray-700 group-hover:stroke-green-500",viewBox:"0 0 16 16",children:[(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),(0,r.jsx)("path",{fillRule:"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"})]})]})})]})})]})}function f(){return(0,r.jsxs)("footer",{className:"mt-20 md:mt-28 flex flex-col md:flex-row md:justify-between py-4 text-sm text-gray-400",children:[(0,r.jsx)("p",{children:"Copyright \xa9 2023"}),(0,r.jsxs)("p",{children:["Dibuat dengan ",(0,r.jsx)(i(),{href:"https://nextjs.org",children:"Next.js"}),", ",(0,r.jsx)(i(),{href:"https://tailwindcss.com",children:"Tailwind CSS"})," dan ",(0,r.jsx)(i(),{href:"https://rstacruz.github.io/nprogress",children:"NProgress.js"})]})]})}var d=n(2148),p=n.n(d),h=n(3901),m=n.n(h),g=n(7294);function v(e){let{Component:t,pageProps:n}=e,o=(0,l.useRouter)();return(0,g.useEffect)(()=>{let e=e=>{console.log("Loading: ".concat(e)),m().start()},t=()=>{m().done()};return o.events.on("routeChangeStart",e),o.events.on("routeChangeComplete",t),o.events.on("routeChangeError",t),()=>{o.events.off("routeChangeStart",e),o.events.off("routeChangeComplete",t),o.events.off("routeChangeError",t)}},[o]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto px-4 sm:px-8 ".concat(p().className),children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"http://localhost:3000/favicon.ico"})]}),(0,r.jsx)(u,{}),(0,r.jsx)("main",{children:(0,r.jsx)(t,{...n,name:"Reza Sariful Fikri"})}),(0,r.jsx)(f,{})]})})}n(4744),n(2190),n(5281)},4744:function(){},5281:function(){},2190:function(){},2148:function(e){e.exports={style:{fontFamily:"'__Roboto_2e19c6', '__Roboto_Fallback_2e19c6', system-ui, sans-serif"},className:"__className_2e19c6"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);