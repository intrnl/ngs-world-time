const e={equals:(e,t)=>e===t};let t=y;const n=1,s=2,r={owned:null,cleanups:null,context:null,owner:null};var o=null;let l=null,i=null,u=null,c=null,a=0;function f(t,n){const s={value:t,observers:null,observerSlots:null,comparator:(n=n?Object.assign({},e,n):e).equals||void 0};return[p.bind(s),e=>("function"==typeof e&&(e=e(s.value)),m(s,e))]}function d(e,t,s){b(v(e,t,!1,n))}function h(e){if(null===i)return e();const t=i;i=null;try{return e()}finally{i=t}}function g(e){!function(e,s,r){t=C;const o=v(e,s,!1,n);r&&r.render||(o.user=!0),c?c.push(o):b(o)}((()=>h(e)))}function p(){if(this.sources&&this.state)if(this.state===n)b(this);else{const e=u;u=null,S((()=>w(this)),!1),u=e}if(i){const e=this.observers?this.observers.length:0;i.sources?(i.sources.push(this),i.sourceSlots.push(e)):(i.sources=[this],i.sourceSlots=[e]),this.observers?(this.observers.push(i),this.observerSlots.push(i.sources.length-1)):(this.observers=[i],this.observerSlots=[i.sources.length-1])}return this.value}function m(e,t,s){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&S((()=>{for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t],r=l&&l.running;r&&l.disposed.has(s),(r?s.tState:s.state)||(s.pure?u.push(s):c.push(s),s.observers&&M(s)),r||(s.state=n)}if(u.length>1e6)throw u=[],new Error}),!1)),t}function b(e){if(!e.fn)return;T(e);const t=o,s=i,r=a;i=o=e,function(e,t,s){let r;try{r=e.fn(t)}catch(o){return e.pure&&(e.state=n,e.owned&&e.owned.forEach(T),e.owned=null),e.updatedAt=s+1,x(o)}(!e.updatedAt||e.updatedAt<=s)&&(null!=e.updatedAt&&"observers"in e?m(e,r):e.value=r,e.updatedAt=s)}(e,e.value,r),i=s,o=t}function v(e,t,s,l=n,i){const u={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:o,context:o?o.context:null,pure:s};return null===o||o!==r&&(o.owned?o.owned.push(u):o.owned=[u]),u}function D(e){if(0===e.state)return;if(e.state===s)return w(e);if(e.suspense&&h(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<a);)e.state&&t.push(e);for(let r=t.length-1;r>=0;r--)if((e=t[r]).state===n)b(e);else if(e.state===s){const n=u;u=null,S((()=>w(e,t[0])),!1),u=n}}function S(e,n){if(u)return e();let s=!1;n||(u=[]),c?s=!0:c=[],a++;try{const n=e();return function(e){u&&(y(u),u=null);if(e)return;const n=c;c=null,n.length&&S((()=>t(n)),!1)}(s),n}catch(r){s||(c=null),u=null,x(r)}}function y(e){for(let t=0;t<e.length;t++)D(e[t])}function C(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:D(s)}for(t=0;t<n;t++)D(e[t])}function w(e,t){e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];if(o.sources){const e=o.state;e===n?o!==t&&(!o.updatedAt||o.updatedAt<a)&&D(o):e===s&&w(o,t)}}}function M(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=s,n.pure?u.push(n):c.push(n),n.observers&&M(n))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const e=s.pop(),r=t.observerSlots.pop();n<s.length&&(e.sourceSlots[r]=n,s[n]=e,t.observerSlots[n]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function x(e,t=o){const n=function(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}(e);throw n}function A(e,t){return h((()=>e(t||{})))}function G(e,t,n){let s;const r=()=>{const t=document.createElement("template");return t.innerHTML=e,n?t.content.firstChild.firstChild:t.content.firstChild},o=t?()=>h((()=>document.importNode(s||(s=r()),!0))):()=>(s||(s=r())).cloneNode(!0);return o.cloneNode=o,o}function P(e,t,n,s){if(void 0===n||s||(s=[]),"function"!=typeof t)return I(e,t,s,n);d((s=>I(e,t(),s,n)),s)}function I(e,t,n,s,r){for(;"function"==typeof n;)n=n();if(t===n)return n;const o=typeof t,l=void 0!==s;if(e=l&&n[0]&&n[0].parentNode||e,"string"===o||"number"===o)if("number"===o&&(t=t.toString()),l){let r=n[0];r&&3===r.nodeType?r.data=t:r=document.createTextNode(t),n=H(e,n,s,r)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===o)n=H(e,n,s);else{if("function"===o)return d((()=>{let r=t();for(;"function"==typeof r;)r=r();n=I(e,r,n,s)})),()=>n;if(Array.isArray(t)){const o=[],i=n&&Array.isArray(n);if(F(o,t,n,r))return d((()=>n=I(e,o,n,s,!0))),()=>n;if(0===o.length){if(n=H(e,n,s),l)return n}else i?0===n.length?Y(e,o,s):function(e,t,n){let s=n.length,r=t.length,o=s,l=0,i=0,u=t[r-1].nextSibling,c=null;for(;l<r||i<o;)if(t[l]!==n[i]){for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const t=o<s?i?n[i-1].nextSibling:n[o-i]:u;for(;i<o;)e.insertBefore(n[i++],t)}else if(o===i)for(;l<r;)c&&c.has(t[l])||t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[r-1]){const s=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],s),t[r]=n[o]}else{if(!c){c=new Map;let e=i;for(;e<o;)c.set(n[e],e++)}const s=c.get(t[l]);if(null!=s)if(i<s&&s<o){let u,a=l,f=1;for(;++a<r&&a<o&&null!=(u=c.get(t[a]))&&u===s+f;)f++;if(f>s-i){const r=t[l];for(;i<s;)e.insertBefore(n[i++],r)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}else l++,i++}(e,n,o):(n&&H(e),Y(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=H(e,n,s,t);H(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function F(e,t,n,s){let r=!1;for(let o=0,l=t.length;o<l;o++){let l,i=t[o],u=n&&n[o];if(null==i||!0===i||!1===i);else if("object"==(l=typeof i)&&i.nodeType)e.push(i);else if(Array.isArray(i))r=F(e,i,u)||r;else if("function"===l)if(s){for(;"function"==typeof i;)i=i();r=F(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||r}else e.push(i),r=!0;else{const t=String(i);u&&3===u.nodeType&&u.data===t?e.push(u):e.push(document.createTextNode(t))}}return r}function Y(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function H(e,t,n,s){if(void 0===n)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(r!==l){const t=l.parentNode===e;s||o?t&&l.remove():t?e.replaceChild(r,l):e.insertBefore(r,n)}else s=!0}}else e.insertBefore(r,n);return[r]}const U=Date.UTC,z=[{name:"Daily tasks",start:U(2023,7,29,12),occurence:864e5,sequence:["Stia","Retem","Aelio","Kvaris"]},{name:"GP Tree",start:U(2022,8,3,12),occurence:864e5,sequence:["GPID4 (315pts)","GPID1 (625pts)","GPID8 (315pts)","GPID5 (315pts)","GPID2 (625pts)","GPID7 (315pts)","GPID6 (315pts)","GPID3 (625pts)","GPID6 (315pts)","GPID7 (315pts)","GPID0 & 4 (315pts & 625pts)","GPID5 (315pts)","GPID3 & 8 (315pts & 315pts)","GPID5 (625pts)","GPID4 (315pts)","GPID9 (315pts)","GPID6 (625pts)","GPID3 (315pts)","GPID0 (315pts)","GPID7 (625pts)","GPID2 (315pts)","GPID1 (315pts)","GPID8 (625pts)","GPID1 (315pts)","GPID2 (315pts)","GPID9 (625pts)","GPID0 (625pts)","GPID9 (315pts)"]},{name:"Daily free SG scratch",start:U(2023,7,29,8),occurence:864e5},{name:"Lookbook SG",start:U(2023,7,29,15),occurence:864e5},{name:"Leciel Exploration buffs",start:U(2023,7,29,19),occurence:864e5},{name:"Treasure Shop",start:U(2023,7,29,3),occurence:864e5},{name:"Weekly tasks",start:U(2023,7,23,3),occurence:6048e5},{name:"ARKS Records",start:U(2023,7,23,2),occurence:6048e5}],N=36e5,k=e=>new Date(e.getTime()),B=Math.abs,q=Math.sign,E=Math.trunc,R=(e,t)=>{const n=k(e);return n.setFullYear(n.getFullYear()+t),n},j=(e,t)=>{const n=k(e),s=k(t),r=se(e,t),o=B(((e,t)=>e.getFullYear()-t.getFullYear())(e,t));n.setFullYear(1584),s.setFullYear(1584);const l=r*(o-+(se(n,s)===-r));return 0===l?0:l},L=(e,t)=>{const n=k(e);return n.setMonth(n.getMonth()+t),n},K=e=>_(e).getTime()===(e=>{const t=k(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t})(e).getTime(),O=(e,t)=>{const n=k(e),s=se(e,t),r=B(((e,t)=>12*(e.getFullYear()-t.getFullYear())+(e.getMonth()-t.getMonth()))(e,t));let o;if(r<1)o=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-s*r);let e=se(n,t)===-q;K(n)&&1===r&&1===se(n,t)&&(e=!1),o=s*(r-+e)}return 0===o?0:o},W=(e,t)=>{const n=k(e);return n.setDate(n.getDate()+t),n},$=e=>{const t=k(e);return t.setHours(0,0,0,0),t},_=e=>{const t=k(e);return t.setHours(23,59,59,999),t},J=(e,t)=>{const n=k(e),s=re(e,t),r=B(((e,t)=>{const n=e.getTime()-le(e),s=t.getTime()-le(t);return Math.round((n-s)/864e5)})(e,t));n.setDate(n.getDate()-s*r);const o=s*(r-+(re(n,t)===-s));return 0===o?0:o},Q=(e,t)=>V(e,e.getHours()+t),V=(e,t)=>{const n=k(e);return n.setHours(t),n},X=(e,t)=>oe(e,t,N),Z=(e,t)=>{const n=k(e);return n.setMinutes(n.getMinutes()+t),n},ee=(e,t)=>oe(e,t,6e4),te=(e,t)=>{const n=k(e);return n.setSeconds(n.getSeconds()+t),n},ne=(e,t)=>oe(e,t,1e3),se=(e,t)=>q(e.getTime()-t.getTime()),re=(e,t)=>{const n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return q(n)},oe=(e,t,n)=>E((e.getTime()-t.getTime())/n),le=e=>{const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()},ie=G("<tr><th><span></span></th><td>in "),ue=G("<span>: "),ce=G('<div><h3>NGS World Time</h3><table><thead><tr><th>Current time:</th><td><span></span><svg><use></use></svg></td></tr></thead><tbody><tr><th>Day (06:00 AM):</th><td><small>(in <!>)</small><span></span></td></tr><tr><th>Night (08:00 PM):</th><td><small>(in <!>)</small><span></span></td></tr></tbody></table><hr><h4>Reset timers</h4><table><tbody></tbody></table><hr><a href="https://codeberg.org/intrnl/ngs-world-time" target="_blank">source code</a><svg><symbol id="icon-sun" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"></path></symbol><symbol id="icon-moon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd">'),ae=(e,t,n)=>{let s=(e=>{const t=k(e);return t.setHours(t.getHours(),0,0,0),t})(V(t,n));return s.getTime()<=t.getTime()&&(s=W(s,1)),te(e,ne(s,t)/30)},fe=(e,t,n)=>(""+e).padStart(n,t),de=(e,t)=>{const{days:n,hours:s,minutes:r,seconds:o}=((e,t)=>{const n={};n.years=j(e,t);const s=R(e,n.years);n.months=O(t,s);const r=L(s,n.months);n.days=J(t,r);const o=W(r,n.days);n.hours=X(t,o);const l=Q(o,n.hours);n.minutes=ee(t,l);const i=Z(l,n.minutes);return n.seconds=ne(t,i),n})(e,t);let l="",i=!1;return void 0!==n&&n>0&&(l&&(l+=":"),l+=i?fe(n,"0",2):n,i=!0),void 0!==s&&s>0&&(l&&(l+=":"),l+=i?fe(s,"0",2):s,i=!0),l&&(l+=":"),l+=`${fe(r,"0",2)}:${fe(o,"0",2)}`,l},he=({now:t,event:n})=>{const{name:s,start:r,occurence:o,sequence:l}=n,i=function(t,n,s){s=s?Object.assign({},e,s):e;const r=v(t,n,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=s.equals||void 0,b(r),p.bind(r)}((e=>{const n=t().getTime();return e&&e.date.getTime()>n?e:((e,t,n)=>{const s=e-t,r=Math.ceil(s/n);return{index:r,date:new Date(t+r*n)}})(n,r,o)}));return(()=>{const e=ie(),n=e.firstChild,r=n.firstChild,o=n.nextSibling;return o.firstChild,P(r,s),P(n,l&&(()=>{const e=ue();return e.firstChild,P(e,(()=>l[i().index%l.length]),null),e})(),null),P(o,(()=>de(t(),i().date)),null),e})()},ge=new Intl.DateTimeFormat(void 0,{timeStyle:"short"}),pe=()=>{const[e,t]=f(new Date),[n,s]=f(new Date(0)),[r,o]=f(new Date(0)),[l,i]=f(new Date(0)),[u,c]=f("#icon-sun");return d((()=>{const t=e(),n=((e,t)=>{const n=36e5*-t,s=new Date(e.getTime()-n),r=new Date(0);return r.setFullYear(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),r.setHours(s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds()),r})(t,-7),r=ne(n,Z($(n),-38)),l=te($(n),r%2880*30),u=l.getHours();s(l),o(ae(t,l,6)),i(ae(t,l,20)),c(u<6||u>=20?"#icon-moon":"#icon-sun")})),g((()=>{const e=new AbortController;return((e,t,n)=>{const s=document.timeline?document.timeline.currentTime:performance.now(),r=e=>{t.aborted||(n(e),o(e))},o=t=>{const n=t-s,o=Math.round(n/e)*e,l=s+o+e-performance.now();setTimeout((()=>requestAnimationFrame(r)),l)};o(s)})(1e3,e.signal,(()=>{const e=new Date;e.setMilliseconds(0),t(e)})),()=>e.abort()})),(()=>{const t=ce(),s=t.firstChild.nextSibling,o=s.firstChild,i=o.firstChild.firstChild.nextSibling.firstChild,c=i.nextSibling.firstChild,a=o.nextSibling.firstChild,f=a.firstChild.nextSibling.firstChild,h=f.firstChild.nextSibling;h.nextSibling;const g=f.nextSibling,p=a.nextSibling.firstChild.nextSibling.firstChild,m=p.firstChild.nextSibling;m.nextSibling;const b=p.nextSibling,v=s.nextSibling.nextSibling.nextSibling.firstChild;return P(i,(()=>ge.format(n()))),P(f,(()=>de(e(),r())),h),P(g,(()=>ge.format(r()))),P(p,(()=>de(e(),l())),m),P(b,(()=>ge.format(l()))),P(v,(()=>z.map((t=>A(he,{now:e,event:t}))))),d((()=>{return e=c,t="href",void(null==(n=u())?e.removeAttribute(t):e.setAttribute(t,n));var e,t,n})),t})()};!function(e,t,n,s={}){let l;(function(e,t){const n=i,s=o,l=0===e.length,u=void 0===t?s:t,c=l?r:{owned:null,cleanups:null,context:u?u.context:null,owner:u},a=l?e:()=>e((()=>h((()=>T(c)))));o=c,i=null;try{return S(a,!0)}finally{i=n,o=s}})((s=>{l=s,t===document?e():P(t,e(),t.firstChild?null:void 0,n)}),s.owner)}((()=>A(pe,{})),document.body);
//# sourceMappingURL=index-780fffa1.js.map
