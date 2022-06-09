var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function u(t,e,n){return t.set(n),e}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function p(){return $(" ")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function v(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let x;function y(t){x=t}const k=[],_=[],E=[],T=[],w=Promise.resolve();let S=!1;function A(t){E.push(t)}const C=new Set;let L=0;function N(){const t=x;do{for(;L<k.length;){const t=k[L];L++,y(t),O(t.$$)}for(y(null),k.length=0,L=0;_.length;)_.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];C.has(e)||(C.add(e),e())}E.length=0}while(k.length);for(;T.length;)T.pop()();S=!1,C.clear(),y(t)}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const I=new Set;function P(t,e){t&&t.i&&(I.delete(t),t.i(e))}function U(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),undefined.c.push((()=>{I.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function B(t){t&&t.c()}function H(t,n,c,s){const{fragment:u,on_mount:i,on_destroy:l,after_update:f}=t.$$;u&&u.m(n,c),s||A((()=>{const n=i.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(A)}function V(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&(k.push(t),S||(S=!0,w.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,o,c,s,u,i,l,a=[-1]){const d=x;y(e);const $=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:a,skip_bound:!1,root:o.target||d.$$.root};l&&l($.root);let p=!1;if($.ctx=c?c(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return $.ctx&&u($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),p&&j(e,t)),n})):[],$.update(),p=!0,r($.before_update),$.fragment=!!s&&s($.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();o.intro&&P(e.$$.fragment),H(e,o.target,o.anchor,o.customElement),N()}y(d)}class M{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(t,e,n){const r=t.slice();return r[5]=e[n],r}function F(t){let e,n,r=t[5]+"";return{c(){e=d("li"),n=$(r)},m(t,r){l(t,e,r),i(e,n)},p(t,e){1&e&&r!==(r=t[5]+"")&&h(n,r)},d(t){t&&f(e)}}}function R(e){let n,r,o,c,s,u=e[0],g=[];for(let t=0;t<u.length;t+=1)g[t]=F(z(e,u,t));return{c(){n=d("h2"),r=$("Fruits "),o=$(e[1]),c=p(),s=d("ul");for(let t=0;t<g.length;t+=1)g[t].c()},m(t,e){l(t,n,e),i(n,r),i(n,o),l(t,c,e),l(t,s,e);for(let t=0;t<g.length;t+=1)g[t].m(s,null)},p(t,[e]){if(2&e&&h(o,t[1]),1&e){let n;for(u=t[0],n=0;n<u.length;n+=1){const r=z(t,u,n);g[n]?g[n].p(r,e):(g[n]=F(r),g[n].c(),g[n].m(s,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=u.length}},i:t,o:t,d(t){t&&f(n),t&&f(c),t&&f(s),a(g,t)}}}function q(t,e,n){let{fruits:r}=e,{reverse:o}=e,{bindText:c}=e,{slice:s}=e,u="";return o?(r=[...r].reverse(),u="Reverse"):s&&(r=[...r].slice(...s.split(",")),u="Slice"),t.$$set=t=>{"fruits"in t&&n(0,r=t.fruits),"reverse"in t&&n(2,o=t.reverse),"bindText"in t&&n(3,c=t.bindText),"slice"in t&&n(4,s=t.slice)},[r,u,o,c,s]}class W extends M{constructor(t){super(),D(this,t,q,R,c,{fruits:0,reverse:2,bindText:3,slice:4})}}const G=[];let J=function(e,n=t){let r;const o=new Set;function s(t){if(c(e,t)&&(e=t,r)){const t=!G.length;for(const t of o)t[1](),G.push(t,e);if(t){for(let t=0;t<G.length;t+=2)G[t][0](G[t+1]);G.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,u=t){const i=[c,u];return o.add(i),1===o.size&&(r=n(s)||t),c(e),()=>{o.delete(i),0===o.size&&(r(),r=null)}}}}("");function K(e){let n,r,o;return{c(){n=d("div"),r=$("CHILD.SVELTE AND VALUE IS "),o=$(e[0])},m(t,e){l(t,n,e),i(n,r),i(n,o)},p(t,[e]){1&e&&h(o,t[0])},i:t,o:t,d(t){t&&f(n)}}}function Q(t,e,n){let r;return s(t,J,(t=>n(0,r=t))),u(J,r="tststst",r),[r]}class X extends M{constructor(t){super(),D(this,t,Q,K,c,{})}}function Y(e){let n,r,o,c;return o=new X({}),{c(){n=d("div"),n.textContent="PARENT.SVLELTE",r=p(),B(o.$$.fragment)},m(t,e){l(t,n,e),l(t,r,e),H(o,t,e),c=!0},p:t,i(t){c||(P(o.$$.fragment,t),c=!0)},o(t){U(o.$$.fragment,t),c=!1},d(t){t&&f(n),t&&f(r),V(o,t)}}}class Z extends M{constructor(t){super(),D(this,t,null,Y,c,{})}}function tt(t,e,n){const r=t.slice();return r[15]=e[n],r}function et(e){let n;return{c(){n=d("h1"),n.textContent="NONO",m(n,"class","svelte-1coks24")},m(t,e){l(t,n,e)},p:t,d(t){t&&f(n)}}}function nt(t){let e,n,r,o;return{c(){e=d("h1"),n=$("Hello\n            "),r=$(t[0]),o=$("!"),m(e,"class","svelte-1coks24")},m(t,c){l(t,e,c),i(e,n),i(e,r),i(e,o)},p(t,e){1&e&&h(r,t[0])},d(t){t&&f(e)}}}function rt(t){let e,n,r=t[15]+"";return{c(){e=d("li"),n=$(r)},m(t,r){l(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[15]+"")&&h(n,r)},d(t){t&&f(e)}}}function ot(t){let e,n,o,c,s,u,x,y,k,_,E,T,w,S,A,C,L,N,O,I,j,D,M,z,F,R,q,G,J,K,Q,X,Y,ot,st,ut,it,lt,ft,at,dt,$t;function pt(t,e){return t[2]?nt:et}let gt=pt(t),mt=gt(t),ht=t[1],bt=[];for(let e=0;e<ht.length;e+=1)bt[e]=rt(tt(t,ht,e));return R=new W({props:{fruits:t[1],bindText:ct}}),G=new W({props:{fruits:t[1],reverse:!0,bindText:ct}}),K=new W({props:{fruits:t[1],bindText:ct,slice:"2"}}),X=new W({props:{fruits:t[1],bindText:ct,slice:"0,1"}}),st=new Z({}),{c(){e=d("main"),mt.c(),n=p(),o=d("button"),o.textContent="Toggle",c=p(),s=d("main"),u=d("h1"),x=$(t[0]),y=p(),k=d("ul");for(let t=0;t<bt.length;t+=1)bt[t].c();_=p(),E=d("button"),E.textContent="Eat it!",T=p(),w=d("div"),S=$("Box"),A=p(),C=d("div"),L=d("h2"),N=$(t[4]),O=p(),I=d("input"),j=p(),D=d("input"),M=p(),z=d("button"),z.textContent="SUBMIT",F=p(),B(R.$$.fragment),q=p(),B(G.$$.fragment),J=p(),B(K.$$.fragment),Q=p(),B(X.$$.fragment),Y=p(),ot=d("div"),B(st.$$.fragment),ut=p(),it=d("div"),lt=$("WHAT IS THIS? "),ft=$(t[5]),m(e,"class","svelte-1coks24"),m(u,"class","svelte-1coks24"),m(s,"class","svelte-1coks24"),m(w,"class","box svelte-1coks24"),v(w,"background-color",t[3]?"red":"orange"),m(D,"type","text")},m(r,f){l(r,e,f),mt.m(e,null),i(e,n),i(e,o),l(r,c,f),l(r,s,f),i(s,u),i(u,x),i(s,y),i(s,k);for(let t=0;t<bt.length;t+=1)bt[t].m(k,null);i(s,_),i(s,E),l(r,T,f),l(r,w,f),i(w,S),l(r,A,f),l(r,C,f),i(C,L),i(L,N),i(C,O),i(C,I),i(C,j),i(C,D),b(D,t[4]),i(C,M),i(C,z),l(r,F,f),H(R,r,f),l(r,q,f),H(G,r,f),l(r,J,f),H(K,r,f),l(r,Q,f),H(X,r,f),l(r,Y,f),l(r,ot,f),H(st,ot,null),i(ot,ut),i(ot,it),i(it,lt),i(it,ft),at=!0,dt||($t=[g(o,"click",t[9]),g(E,"click",t[6]),g(w,"click",t[10]),g(w,"mouseenter",t[11]),g(w,"mouseleave",t[7]),g(I,"input",t[12]),g(D,"input",t[13]),g(D,"input",t[14]),g(z,"click",t[8])],dt=!0)},p(t,[r]){if(gt===(gt=pt(t))&&mt?mt.p(t,r):(mt.d(1),mt=gt(t),mt&&(mt.c(),mt.m(e,n))),(!at||1&r)&&h(x,t[0]),2&r){let e;for(ht=t[1],e=0;e<ht.length;e+=1){const n=tt(t,ht,e);bt[e]?bt[e].p(n,r):(bt[e]=rt(n),bt[e].c(),bt[e].m(k,null))}for(;e<bt.length;e+=1)bt[e].d(1);bt.length=ht.length}(!at||8&r)&&v(w,"background-color",t[3]?"red":"orange"),(!at||16&r)&&h(N,t[4]),16&r&&D.value!==t[4]&&b(D,t[4]);const o={};2&r&&(o.fruits=t[1]),R.$set(o);const c={};2&r&&(c.fruits=t[1]),G.$set(c);const s={};2&r&&(s.fruits=t[1]),K.$set(s);const u={};2&r&&(u.fruits=t[1]),X.$set(u),(!at||32&r)&&h(ft,t[5])},i(t){at||(P(R.$$.fragment,t),P(G.$$.fragment,t),P(K.$$.fragment,t),P(X.$$.fragment,t),P(st.$$.fragment,t),at=!0)},o(t){U(R.$$.fragment,t),U(G.$$.fragment,t),U(K.$$.fragment,t),U(X.$$.fragment,t),U(st.$$.fragment,t),at=!1},d(t){t&&f(e),mt.d(),t&&f(c),t&&f(s),a(bt,t),t&&f(T),t&&f(w),t&&f(A),t&&f(C),t&&f(F),V(R,t),t&&f(q),V(G,t),t&&f(J),V(K,t),t&&f(Q),V(X,t),t&&f(Y),t&&f(ot),V(st),dt=!1,r($t)}}}let ct="";function st(t,e,n){let r;s(t,J,(t=>n(5,r=t)));let{name:o}=e,c=["Apple","Banana","Cherry","Orange","Mango"],i=!1;let l=!1,f="";u(J,r="UPDATE VALUE",r);return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o,c,i,l,f,r,function(){n(1,c=c.slice(1))},function(){n(0,o="leave")},function(){n(4,f="SUCCESS")},()=>{n(2,i=!i)},()=>{n(3,l=!l)},()=>n(0,o="enter"),t=>n(4,f=t.target.value),function(){f=this.value,n(4,f)},t=>n(4,f=t.target.value)]}return new class extends M{constructor(t){super(),D(this,t,st,ot,c,{name:0})}}({target:document.body,props:{name:"Fruits"}})}();
//# sourceMappingURL=bundle.js.map
