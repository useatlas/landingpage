(self.webpackChunkgatsby_starter_lander=self.webpackChunkgatsby_starter_lander||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!a(e[u[s]],i[u[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},576:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Pe}});var n,o,a,i,c=r(5785),s=r(7294),u=r(6434),l=r(5539),f=function(e){var t=e.className,r=e.children;return(0,l.tZ)("div",{className:"p-12 rounded-lg border border-solid border-gray-200 "+t,style:{boxShadow:"0 10px 28px rgba(0,0,0,.08)"}},r)},p=function(e){var t=e.customer;return(0,l.tZ)(f,{className:"mb-8"},(0,l.tZ)("p",{className:"text-xl font-semibold"},t.title),(0,l.tZ)("p",{className:"mt-6"},t.content),(0,l.tZ)("div",{className:"flex items-center mt-8"},(0,l.tZ)("img",{className:"w-12 h-12 mr-4 rounded-full",src:t.customerImage,alt:t.customerName}),(0,l.tZ)("div",null,(0,l.tZ)("p",null,t.customerName),(0,l.tZ)("p",{className:"text-sm text-gray-600"},t.customerTitle))))},d=function(e){var t=e.children,r=e.className,n=void 0===r?"":r;return(0,l.tZ)("p",{className:"uppercase tracking-wider "+n},t)},m=r(8665),h=r.p+"static/yury-ab3dd411ff94ecd22ff8e5dda059835e.jpeg",y=[{title:"Skip a month's rent!",content:"The idea of skipping a month of rent is a hit with our employees!",customerName:"Greg Miaskiewicz",customerTitle:"Co-Founder / CEO at Capbase",customerImage:r.p+"static/greg-e346553b58c871ce38d23cf8d90fb4ac.jpeg"},{title:"Rewards are sexy",content:"What could be sexier than getting cashback back on rent?",customerName:"Yury Lifshits",customerTitle:"Superdao CEO",customerImage:h}],b=r.p+"static/house-fc943958e31b2be13f25100c3faa578d.jpg",g=function(){return(0,l.tZ)("img",{src:b})},v=(r.p,r(5697)),T=r.n(v),w=r(4839),x=r.n(w),C=r(2993),A=r.n(C),O=r(6494),S=r.n(O),N="bodyAttributes",E="htmlAttributes",k="titleAttributes",j={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Z=(Object.keys(j).map((function(e){return j[e]})),"charset"),P="cssText",I="href",L="http-equiv",M="innerHTML",R="itemprop",_="name",F="property",Y="rel",B="src",q="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},H="defaultTitle",z="defer",U="encodeSpecialCharacters",G="onChangeClientState",K="titleTemplate",W=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),V=[j.NOSCRIPT,j.SCRIPT,j.STYLE],X="data-react-helmet",$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},te=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},re=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ne=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},oe=function(e){var t=ue(e,j.TITLE),r=ue(e,K);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ue(e,H);return t||n||void 0},ae=function(e){return ue(e,G)||function(){}},ie=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ee({},e,t)}),{})},ce=function(e,t){return t.filter((function(e){return void 0!==e[j.BASE]})).map((function(e){return e[j.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},se=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&me("Helmet: "+e+' should be of type "Array". Instead found type "'+$(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||r===Y&&"canonical"===e[r].toLowerCase()||s===Y&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==M&&c!==P&&c!==R||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=S()({},n[c],o[c]);n[c]=s}return e}),[]).reverse()},ue=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},le=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){le(e)}),0)}),fe=function(e){return clearTimeout(e)},pe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||le:r.g.requestAnimationFrame||le,de="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||fe:r.g.cancelAnimationFrame||fe,me=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},he=null,ye=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ve(j.BODY,n),ve(j.HTML,o),ge(f,p);var d={baseTag:Te(j.BASE,r),linkTags:Te(j.LINK,a),metaTags:Te(j.META,i),noscriptTags:Te(j.NOSCRIPT,c),scriptTags:Te(j.SCRIPT,u),styleTags:Te(j.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},be=function(e){return Array.isArray(e)?e.join(""):e},ge=function(e,t){void 0!==e&&document.title!==e&&(document.title=be(e)),ve(j.TITLE,t)},ve=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(X),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=a.indexOf(s);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(X):r.getAttribute(X)!==i.join(",")&&r.setAttribute(X,i.join(","))}},Te=function(e,t){var r=document.head||document.querySelector(j.HEAD),n=r.querySelectorAll(e+"["+X+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===M)r.innerHTML=t.innerHTML;else if(n===P)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(X,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},we=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)},Ce=function(e,t,r){switch(e){case j.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[X]=!0,o=xe(r,n),[s.createElement(j.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=we(r),a=be(t);return o?"<"+e+" "+X+'="true" '+o+">"+ne(a,n)+"</"+e+">":"<"+e+" "+X+'="true">'+ne(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case N:case E:return{toComponent:function(){return xe(t)},toString:function(){return we(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[X]=!0,n);return Object.keys(t).forEach((function(e){var r=D[e]||e;if(r===M||r===P){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===M||e===P)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+ne(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===V.indexOf(e);return t+"<"+e+" "+X+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},Ae=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:Ce(j.BASE,t,n),bodyAttributes:Ce(N,r,n),htmlAttributes:Ce(E,o,n),link:Ce(j.LINK,a,n),meta:Ce(j.META,i,n),noscript:Ce(j.NOSCRIPT,c,n),script:Ce(j.SCRIPT,s,n),style:Ce(j.STYLE,u,n),title:Ce(j.TITLE,{title:f,titleAttributes:p},n)}},Oe=x()((function(e){return{baseTag:ce([I,q],e),bodyAttributes:ie(N,e),defer:ue(e,z),encode:ue(e,U),htmlAttributes:ie(E,e),linkTags:se(j.LINK,[Y,I],e),metaTags:se(j.META,[_,Z,L,F,R],e),noscriptTags:se(j.NOSCRIPT,[M],e),onChangeClientState:ae(e),scriptTags:se(j.SCRIPT,[B,M],e),styleTags:se(j.STYLE,[P],e),title:oe(e),titleAttributes:ie(k,e)}}),(function(e){he&&de(he),e.defer?he=pe((function(){ye(e,(function(){he=null}))})):(ye(e),he=null)}),Ae)((function(){return null})),Se=(o=Oe,i=a=function(e){function t(){return J(this,t),re(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!A()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case j.SCRIPT:case j.NOSCRIPT:return{innerHTML:t};case j.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return ee({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ee({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case j.TITLE:return ee({},o,((t={})[n.type]=i,t.titleAttributes=ee({},a),t));case j.BODY:return ee({},o,{bodyAttributes:ee({},a)});case j.HTML:return ee({},o,{htmlAttributes:ee({},a)})}return ee({},o,((r={})[n.type]=ee({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ee({},t);return Object.keys(e).forEach((function(t){var n;r=ee({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[W[r]||r]=e[r],t}),t)}(te(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case j.LINK:case j.META:case j.NOSCRIPT:case j.SCRIPT:case j.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=te(e,["children"]),n=ee({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(o,n)},Q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(s.Component),a.propTypes={base:T().object,bodyAttributes:T().object,children:T().oneOfType([T().arrayOf(T().node),T().node]),defaultTitle:T().string,defer:T().bool,encodeSpecialCharacters:T().bool,htmlAttributes:T().object,link:T().arrayOf(T().object),meta:T().arrayOf(T().object),noscript:T().arrayOf(T().object),onChangeClientState:T().func,script:T().arrayOf(T().object),style:T().arrayOf(T().object),title:T().string,titleAttributes:T().object,titleTemplate:T().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=Ae({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);Se.renderStatic=Se.rewind;var Ne=r.p+"static/first-8c2ad79f355df14606f253cf5ad511b8.png",Ee=r.p+"static/skip-d305be2d70f33951dae39039c7f2d803.png",ke=["while paying rent.","while paying rent.","while paying rent."],je=["Skip a month's rent","Get Cashback"],Ze=function(e){var t=s.useState({left:"",right:"",texts:e.texts,current:e.texts[0]}),r=t[0],n=t[1],o=s.useRef(!1),a=s.useRef(!1),i=s.useCallback((function(){0===r.texts[0].length?(o.current=!1,""===r.left?function(){o.current=!1,a.current=!1;var e=r.texts[1];n(Object.assign({},r,{left:e.slice(0,1),right:e.slice(1),texts:[].concat((0,c.Z)(r.texts.slice(1).map((function(e,t){return 0===t?e.slice(1):e}))),[r.current]),current:e}))}():(""===r.left.slice(0,-1)&&(o.current=!0,a.current=!0),n(Object.assign({},r,{left:r.left.slice(0,-1),right:r.left.slice(-1)+r.right})))):n(Object.assign({},r,{left:r.left+r.texts[0].slice(0,1),right:r.texts[0].slice(1),texts:r.texts.map((function(e,t){return 0===t?e.slice(1):e}))}))}),[o,a,n,r]);return s.useEffect((function(){setTimeout((function(){1===r.texts[0].length&&(o.current=!0),window.requestAnimationFrame(i)}),o.current?a.current?e.waitbt||30:e.wait||3e3:e.speed||30)}),[i]),(0,l.tZ)("span",{className:e.className},r.left,(0,l.tZ)("span",null,r.right))},Pe=function(){var e=(0,s.useState)("Get Cashback"),t=e[0],r=e[1],n=(0,s.useCallback)((function(){var e=Math.floor(Math.random()*je.length);r(je[e])}),[]);return(0,s.useEffect)((function(){var e=setInterval(n,2e3);return function(){return clearInterval(e)}}),[n]),(0,l.tZ)(m.Z,null,(0,l.tZ)(Se,null,(0,l.tZ)("script",{src:"//embed.typeform.com/next/embed.js"})),(0,l.tZ)("section",{className:"pt-20"},(0,l.tZ)("div",{className:"container mx-auto px-8 lg:flex"},(0,l.tZ)("div",{className:"text-center lg:text-left w-full"},(0,l.tZ)("h2",{className:"header-text"},t),(0,l.tZ)(Ze,{className:"texts",waitbt:50,wait:2e3,speed:27,texts:ke}),(0,l.tZ)("p",{className:"mt-8 md:mt-12"},(0,l.tZ)(u.Z,{size:"lg",className:"hover:bg-yellow-dark"},(0,l.tZ)("a",{href:"#",className:"text-white hover:text-white","data-tf-popup":"oxc6Y5MX","data-tf-iframe-props":"title=Atlas: Cash back each month you pay rent! ","data-tf-medium":"snippet"},"Get Started")))),(0,l.tZ)("div",{className:""},(0,l.tZ)(g,null)))),(0,l.tZ)("section",{id:"features",className:"py-20 pb-10"},(0,l.tZ)("div",{className:"container mx-auto text-center"},(0,l.tZ)("h2",{className:"text-3xl lg:text-5xl font-semibold"},"Main Features"),(0,l.tZ)("div",{className:"flex flex-col sm:flex-row sm:-mx-3 mt-12"},(0,l.tZ)("div",{className:"flex-1 px-3"},(0,l.tZ)(f,{className:"mb-8"},(0,l.tZ)("h3",{className:"font-semibold text-2xl mb-100"}," Get Cash Back Monthly "),(0,l.tZ)("img",{src:Ne,style:{width:"100%",height:"600px",objectFit:"cover",objectPosition:"50% 0"}}),(0,l.tZ)("p",{className:"mt-4 text-xl"},"Get rewarded for paying rent. Earn points towards a free month of rent every month you pay rent through Atlas."))),(0,l.tZ)("div",{className:"flex-1 px-3"},(0,l.tZ)(f,{className:"mb-8"},(0,l.tZ)("h3",{className:"font-semibold text-2xl mb-100"}," Skip a Month When You Need It "),(0,l.tZ)("p",{className:"mt-4 text-xl"},(0,l.tZ)("img",{className:"w-full",src:Ee,style:{width:"100%",height:"600px",objectFit:"cover",objectPosition:"50% 0"}}),"Skip a month of rent when you need to and pay it back over 3 months.",(0,l.tZ)("br",null))))))),(0,l.tZ)("section",{id:"testimonials",className:"py-10 lg:py-5"},(0,l.tZ)("div",{className:"container mx-auto"},(0,l.tZ)(d,{className:"mb-8 text-gray-600 text-center"},"What renters are saying"),(0,l.tZ)("div",{className:"flex flex-col md:flex-row md:-mx-3"},y.map((function(e){return(0,l.tZ)("div",{key:e.customerName,className:"flex-1 px-3"},(0,l.tZ)(p,{customer:e}))}))))),(0,l.tZ)("section",{className:"container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"},(0,l.tZ)("h3",{className:"text-5xl font-semibold"},"Ready to earn points towards a free month of rent?"),(0,l.tZ)("p",{className:"mt-8"},(0,l.tZ)(u.Z,{size:"xl",className:"hover:bg-white"},(0,l.tZ)("a",{href:"#",className:"text-white hover:text-white","data-tf-popup":"oxc6Y5MX","data-tf-iframe-props":"title=Atlas: Cash back each month you pay rent! ","data-tf-medium":"snippet"},"Get Started Now ")))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-19fb39a5c4340f0e90cd.js.map