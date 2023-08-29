const e={equals:(e,t)=>e===t};let t=M;const n=1,s=2,r={owned:null,cleanups:null,context:null,owner:null};var o=null;let l=null,i=null,u=null,a=null,c=0;function d(t,n){const s={value:t,observers:null,observerSlots:null,comparator:(n=n?Object.assign({},e,n):e).equals||void 0};return[p.bind(s),e=>("function"==typeof e&&(e=e(s.value)),m(s,e))]}function f(e,t,s){b(y(e,t,!1,n))}function h(e){if(null===i)return e();const t=i;i=null;try{return e()}finally{i=t}}function g(e){!function(e,s,r){t=w;const o=y(e,s,!1,n);r&&r.render||(o.user=!0),a?a.push(o):b(o)}((()=>h(e)))}function p(){if(this.sources&&this.state)if(this.state===n)b(this);else{const e=u;u=null,D((()=>S(this)),!1),u=e}if(i){const e=this.observers?this.observers.length:0;i.sources?(i.sources.push(this),i.sourceSlots.push(e)):(i.sources=[this],i.sourceSlots=[e]),this.observers?(this.observers.push(i),this.observerSlots.push(i.sources.length-1)):(this.observers=[i],this.observerSlots=[i.sources.length-1])}return this.value}function m(e,t,s){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&D((()=>{for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t],r=l&&l.running;r&&l.disposed.has(s),(r?s.tState:s.state)||(s.pure?u.push(s):a.push(s),s.observers&&C(s)),r||(s.state=n)}if(u.length>1e6)throw u=[],new Error}),!1)),t}function b(e){if(!e.fn)return;T(e);const t=o,s=i,r=c;i=o=e,function(e,t,s){let r;try{r=e.fn(t)}catch(o){return e.pure&&(e.state=n,e.owned&&e.owned.forEach(T),e.owned=null),e.updatedAt=s+1,A(o)}(!e.updatedAt||e.updatedAt<=s)&&(null!=e.updatedAt&&"observers"in e?m(e,r):e.value=r,e.updatedAt=s)}(e,e.value,r),i=s,o=t}function y(e,t,s,l=n,i){const u={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:o,context:o?o.context:null,pure:s};return null===o||o!==r&&(o.owned?o.owned.push(u):o.owned=[u]),u}function v(e){if(0===e.state)return;if(e.state===s)return S(e);if(e.suspense&&h(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<c);)e.state&&t.push(e);for(let r=t.length-1;r>=0;r--)if((e=t[r]).state===n)b(e);else if(e.state===s){const n=u;u=null,D((()=>S(e,t[0])),!1),u=n}}function D(e,n){if(u)return e();let s=!1;n||(u=[]),a?s=!0:a=[],c++;try{const n=e();return function(e){u&&(M(u),u=null);if(e)return;const n=a;a=null,n.length&&D((()=>t(n)),!1)}(s),n}catch(r){s||(a=null),u=null,A(r)}}function M(e){for(let t=0;t<e.length;t++)v(e[t])}function w(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:v(s)}for(t=0;t<n;t++)v(e[t])}function S(e,t){e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];if(o.sources){const e=o.state;e===n?o!==t&&(!o.updatedAt||o.updatedAt<c)&&v(o):e===s&&S(o,t)}}}function C(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=s,n.pure?u.push(n):a.push(n),n.observers&&C(n))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const e=s.pop(),r=t.observerSlots.pop();n<s.length&&(e.sourceSlots[r]=n,s[n]=e,t.observerSlots[n]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function A(e,t=o){const n=function(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}(e);throw n}function x(e,t){return h((()=>e(t||{})))}function P(e,t,n){let s;const r=()=>{const t=document.createElement("template");return t.innerHTML=e,n?t.content.firstChild.firstChild:t.content.firstChild},o=t?()=>h((()=>document.importNode(s||(s=r()),!0))):()=>(s||(s=r())).cloneNode(!0);return o.cloneNode=o,o}function G(e,t,n,s){if(void 0===n||s||(s=[]),"function"!=typeof t)return I(e,t,s,n);f((s=>I(e,t(),s,n)),s)}function I(e,t,n,s,r){for(;"function"==typeof n;)n=n();if(t===n)return n;const o=typeof t,l=void 0!==s;if(e=l&&n[0]&&n[0].parentNode||e,"string"===o||"number"===o)if("number"===o&&(t=t.toString()),l){let r=n[0];r&&3===r.nodeType?r.data=t:r=document.createTextNode(t),n=H(e,n,s,r)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===o)n=H(e,n,s);else{if("function"===o)return f((()=>{let r=t();for(;"function"==typeof r;)r=r();n=I(e,r,n,s)})),()=>n;if(Array.isArray(t)){const o=[],i=n&&Array.isArray(n);if(Y(o,t,n,r))return f((()=>n=I(e,o,n,s,!0))),()=>n;if(0===o.length){if(n=H(e,n,s),l)return n}else i?0===n.length?F(e,o,s):function(e,t,n){let s=n.length,r=t.length,o=s,l=0,i=0,u=t[r-1].nextSibling,a=null;for(;l<r||i<o;)if(t[l]!==n[i]){for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const t=o<s?i?n[i-1].nextSibling:n[o-i]:u;for(;i<o;)e.insertBefore(n[i++],t)}else if(o===i)for(;l<r;)a&&a.has(t[l])||t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[r-1]){const s=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],s),t[r]=n[o]}else{if(!a){a=new Map;let e=i;for(;e<o;)a.set(n[e],e++)}const s=a.get(t[l]);if(null!=s)if(i<s&&s<o){let u,c=l,d=1;for(;++c<r&&c<o&&null!=(u=a.get(t[c]))&&u===s+d;)d++;if(d>s-i){const r=t[l];for(;i<s;)e.insertBefore(n[i++],r)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}else l++,i++}(e,n,o):(n&&H(e),F(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=H(e,n,s,t);H(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Y(e,t,n,s){let r=!1;for(let o=0,l=t.length;o<l;o++){let l,i=t[o],u=n&&n[o];if(null==i||!0===i||!1===i);else if("object"==(l=typeof i)&&i.nodeType)e.push(i);else if(Array.isArray(i))r=Y(e,i,u)||r;else if("function"===l)if(s){for(;"function"==typeof i;)i=i();r=Y(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||r}else e.push(i),r=!0;else{const t=String(i);u&&3===u.nodeType&&u.data===t?e.push(u):e.push(document.createTextNode(t))}}return r}function F(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function H(e,t,n,s){if(void 0===n)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(r!==l){const t=l.parentNode===e;s||o?t&&l.remove():t?e.replaceChild(r,l):e.insertBefore(r,n)}else s=!0}}else e.insertBefore(r,n);return[r]}const k="[YMDdAaHhms]+",z=e=>e,N={YYYY:e=>e.year,YY:e=>e.year.slice(-2),MMMM:e=>e.lmonth,MMM:e=>e.lmonth.slice(0,3),MM:e=>e.month,DD:e=>e.day,dddd:e=>e.weekday,ddd:e=>e.weekday.slice(0,3),A:e=>e.dayPeriod,a:e=>e.dayPeriod.toLowerCase(),HH:e=>("0"+Number(e.lhour)%24).slice(-2),hh:e=>e.hour,mm:e=>e.minute,ss:e=>e.second},U=e=>Object.keys(e).reduce(((e,t)=>`|${t}`),"");const B=new Map,$=[{weekday:"long",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"},{month:"long",hour:"2-digit",hour12:!1}],q=e=>"literal"!==e.type?{type:`l${e.type}`,value:e.value}:e,E=(e,t)=>(e[t.type]=t.value,e),j=(e,t)=>e.formatToParts(t).filter((e=>"literal"!==e.type)),O=e=>{const[t,n]=(e=>$.map((t=>new Intl.DateTimeFormat(e.locale,Object.assign({},t,{timeZone:e.timezone})))))(e);return function(e){return(e=>(e.dayPeriod=e.dayPeriod||e.dayperiod||"",delete e.dayperiod,e.lhour=("0"+Number(e.lhour)%24).slice(-2),e))([...j(t,e),...j(n,e).map(q)].reduce(E,{}))}};var R,L=(R={},function(e,t,n){const s=function(e,t={}){const n=`${t.locale}${t.timezone}`;let s=B.get(n);return s||(s=O(t),B.set(n,s)),s(e)}(e,n),r=function(e,t,n,s){const r=U(e),o=new RegExp(`${k}${r}`,"g"),l=Object.assign({},N,e);return t.replace(o,(e=>(l[e]||z)(n,s)))}(R,t,s,e);return r});const K=Date.UTC,W=[{name:"Daily tasks",start:K(2023,7,29,12),occurence:864e5,sequence:["Stia","Retem","Aelio","Kvaris"]},{name:"GP Tree",start:K(2022,8,3,12),occurence:864e5,sequence:["GPID4 (315pts)","GPID1 (625pts)","GPID8 (315pts)","GPID5 (315pts)","GPID2 (625pts)","GPID7 (315pts)","GPID6 (315pts)","GPID3 (625pts)","GPID6 (315pts)","GPID7 (315pts)","GPID0 & 4 (315pts & 625pts)","GPID5 (315pts)","GPID3 & 8 (315pts & 315pts)","GPID5 (625pts)","GPID4 (315pts)","GPID9 (315pts)","GPID6 (625pts)","GPID3 (315pts)","GPID0 (315pts)","GPID7 (625pts)","GPID2 (315pts)","GPID1 (315pts)","GPID8 (625pts)","GPID1 (315pts)","GPID2 (315pts)","GPID9 (625pts)","GPID0 (625pts)","GPID9 (315pts)"]},{name:"Daily free SG scratch",start:K(2023,7,29,8),occurence:864e5},{name:"Lookbook SG",start:K(2023,7,29,15),occurence:864e5},{name:"Leciel Exploration buffs",start:K(2023,7,29,19),occurence:864e5},{name:"Treasure Shop",start:K(2023,7,29,3),occurence:864e5},{name:"Weekly tasks",start:K(2023,7,23,3),occurence:6048e5},{name:"ARKS Records",start:K(2023,7,23,2),occurence:6048e5}],Z=36e5,_=e=>new Date(e.getTime()),J=Math.abs,Q=Math.sign,V=Math.trunc,X=(e,t)=>{const n=_(e);return n.setFullYear(n.getFullYear()+t),n},ee=(e,t)=>{const n=_(e),s=_(t),r=pe(e,t),o=J(((e,t)=>e.getFullYear()-t.getFullYear())(e,t));n.setFullYear(1584),s.setFullYear(1584);const l=r*(o-+(pe(n,s)===-r));return 0===l?0:l},te=(e,t)=>{const n=_(e);return n.setMonth(n.getMonth()+t),n},ne=e=>le(e).getTime()===(e=>{const t=_(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t})(e).getTime(),se=(e,t)=>{const n=_(e),s=pe(e,t),r=J(((e,t)=>12*(e.getFullYear()-t.getFullYear())+(e.getMonth()-t.getMonth()))(e,t));let o;if(r<1)o=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-s*r);let e=pe(n,t)===-Q;ne(n)&&1===r&&1===pe(n,t)&&(e=!1),o=s*(r-+e)}return 0===o?0:o},re=(e,t)=>{const n=_(e);return n.setDate(n.getDate()+t),n},oe=e=>{const t=_(e);return t.setHours(0,0,0,0),t},le=e=>{const t=_(e);return t.setHours(23,59,59,999),t},ie=(e,t)=>{const n=_(e),s=me(e,t),r=J(((e,t)=>{const n=e.getTime()-ye(e),s=t.getTime()-ye(t);return Math.round((n-s)/864e5)})(e,t));n.setDate(n.getDate()-s*r);const o=s*(r-+(me(n,t)===-s));return 0===o?0:o},ue=(e,t)=>ae(e,e.getHours()+t),ae=(e,t)=>{const n=_(e);return n.setHours(t),n},ce=(e,t)=>be(e,t,Z),de=(e,t)=>{const n=_(e);return n.setMinutes(n.getMinutes()+t),n},fe=(e,t)=>be(e,t,6e4),he=(e,t)=>{const n=_(e);return n.setSeconds(n.getSeconds()+t),n},ge=(e,t)=>be(e,t,1e3),pe=(e,t)=>Q(e.getTime()-t.getTime()),me=(e,t)=>{const n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return Q(n)},be=(e,t,n)=>V((e.getTime()-t.getTime())/n),ye=e=>{const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()},ve=P("<tr><th><span></span></th><td>in "),De=P("<span>: "),Me=P('<div><h3>NGS World Time</h3><table><thead><tr><th>Current time:</th><td><span></span><svg><use></use></svg></td></tr></thead><tbody><tr><th>Day (06:00 AM):</th><td><small>(in <!>)</small><span></span></td></tr><tr><th>Night (08:00 PM):</th><td><small>(in <!>)</small><span></span></td></tr></tbody></table><hr><h4>Reset timers</h4><table><tbody></tbody></table><hr><a href="https://codeberg.org/intrnl/ngs-world-time" target="_blank">source code</a><svg><symbol id="icon-sun" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"></path></symbol><symbol id="icon-moon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd">'),we=(e,t,n)=>{let s=(e=>{const t=_(e);return t.setHours(t.getHours(),0,0,0),t})(ae(t,n));return s.getTime()<=t.getTime()&&(s=re(s,1)),he(e,ge(s,t)/30)},Se=(e,t,n)=>(""+e).padStart(n,t),Ce=(e,t)=>{const{days:n,hours:s,minutes:r,seconds:o}=((e,t)=>{const n={};n.years=ee(e,t);const s=X(e,n.years);n.months=se(t,s);const r=te(s,n.months);n.days=ie(t,r);const o=re(r,n.days);n.hours=ce(t,o);const l=ue(o,n.hours);n.minutes=fe(t,l);const i=de(l,n.minutes);return n.seconds=ge(t,i),n})(e,t);let l="";return void 0!==n&&n>0&&(l&&(l+=":"),l+=Se(n,"0",2)),void 0!==s&&s>0&&(l&&(l+=":"),l+=Se(s,"0",2)),l&&(l+=":"),l+=`${Se(r,"0",2)}:${Se(o,"0",2)}`,l},Te=({now:t,event:n})=>{const{name:s,start:r,occurence:o,sequence:l}=n,i=function(t,n,s){s=s?Object.assign({},e,s):e;const r=y(t,n,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=s.equals||void 0,b(r),p.bind(r)}((e=>{const n=t().getTime();return e&&e.date.getTime()>n?e:((e,t,n)=>{const s=e-t,r=Math.ceil(s/n);return{index:r,date:new Date(t+r*n)}})(n,r,o)}));return(()=>{const e=ve(),n=e.firstChild,r=n.firstChild,o=n.nextSibling;return o.firstChild,G(r,s),G(n,l&&(()=>{const e=De();return e.firstChild,G(e,(()=>l[i().index%l.length]),null),e})(),null),G(o,(()=>Ce(t(),i().date)),null),e})()},Ae=()=>{const[e,t]=d(new Date),[n,s]=d(new Date(0)),[r,o]=d(new Date(0)),[l,i]=d(new Date(0)),[u,a]=d("#icon-sun");return f((()=>{const t=e(),n=((e,t)=>{const n=36e5*-t,s=new Date(e.getTime()-n),r=new Date(0);return r.setFullYear(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),r.setHours(s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds()),r})(t,-7),r=ge(n,de(oe(n),-38)),l=he(oe(n),r%2880*30),u=l.getHours();s(l),o(we(t,l,6)),i(we(t,l,20)),a(u<6||u>=20?"#icon-moon":"#icon-sun")})),g((()=>{const e=new AbortController;return((e,t,n)=>{const s=document.timeline?document.timeline.currentTime:performance.now(),r=e=>{t.aborted||(n(e),o(e))},o=t=>{const n=t-s,o=Math.round(n/e)*e,l=s+o+e-performance.now();setTimeout((()=>requestAnimationFrame(r)),l)};o(s)})(1e3,e.signal,(()=>{const e=new Date;e.setMilliseconds(0),t(e)})),()=>e.abort()})),(()=>{const t=Me(),s=t.firstChild.nextSibling,o=s.firstChild,i=o.firstChild.firstChild.nextSibling.firstChild,a=i.nextSibling.firstChild,c=o.nextSibling.firstChild,d=c.firstChild.nextSibling.firstChild,h=d.firstChild.nextSibling;h.nextSibling;const g=d.nextSibling,p=c.nextSibling.firstChild.nextSibling.firstChild,m=p.firstChild.nextSibling;m.nextSibling;const b=p.nextSibling,y=s.nextSibling.nextSibling.nextSibling.firstChild;return G(i,(()=>L(n(),"hh:mm A",{locale:"en"}))),G(d,(()=>Ce(e(),r())),h),G(g,(()=>L(r(),"hh:mm A",{locale:"en"}))),G(p,(()=>Ce(e(),l())),m),G(b,(()=>L(l(),"hh:mm A",{locale:"en"}))),G(y,(()=>W.map((t=>x(Te,{now:e,event:t}))))),f((()=>{return e=a,t="href",void(null==(n=u())?e.removeAttribute(t):e.setAttribute(t,n));var e,t,n})),t})()};!function(e,t,n,s={}){let l;(function(e,t){const n=i,s=o,l=0===e.length,u=void 0===t?s:t,a=l?r:{owned:null,cleanups:null,context:u?u.context:null,owner:u},c=l?e:()=>e((()=>h((()=>T(a)))));o=a,i=null;try{return D(c,!0)}finally{i=n,o=s}})((s=>{l=s,t===document?e():G(t,e(),t.firstChild?null:void 0,n)}),s.owner)}((()=>x(Ae,{})),document.body);
//# sourceMappingURL=index-183ee004.js.map
