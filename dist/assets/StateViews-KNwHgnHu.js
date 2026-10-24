import{j as e}from"./react-DQvHu8dN.js";import{B as l}from"./button-DgsD6Lir.js";import{c as o}from"./utils-Bk382tBs.js";import{L as d}from"./loader-circle-Cr5skw5X.js";import{c as r}from"./ui-C8ZXxYtI.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],x=r("circle-alert",m);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]],h=r("circle-slash",u);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],p=r("external-link",f);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],j=r("inbox",y);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],c=r("refresh-ccw",N);function v({className:t,...a}){return e.jsx("div",{className:o("animate-pulse rounded-md bg-primary/10",t),...a})}function L({label:t="A carregar informação..."}){return e.jsxs("div",{role:"status","aria-live":"polite",className:"clay flex flex-col items-center justify-center gap-3 p-10 text-center",children:[e.jsx(d,{className:"size-6 animate-spin text-primary","aria-hidden":!0}),e.jsx("p",{className:"text-sm text-muted-foreground",children:t})]})}function M({rows:t=3}){return e.jsx("div",{className:"space-y-3","aria-hidden":!0,children:Array.from({length:t}).map((a,s)=>e.jsx(v,{className:"h-20 w-full rounded-2xl"},s))})}function S({title:t="Não foi possível carregar esta informação.",description:a="Verifique a sua ligação à internet e tente novamente.",onRetry:s}){return e.jsxs("div",{role:"alert",className:"clay flex flex-col items-center justify-center gap-3 p-10 text-center",children:[e.jsx("span",{className:"grid size-12 place-items-center rounded-2xl bg-destructive/10 text-destructive",children:e.jsx(x,{className:"size-6","aria-hidden":!0})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:t}),e.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:a})]}),s?e.jsxs(l,{variant:"outline",onClick:s,children:[e.jsx(c,{"aria-hidden":!0})," Tentar novamente"]}):null]})}function q({title:t="Esta funcionalidade não está disponível nesta instalação.",description:a,onRetry:s,retryLabel:n="Verificar novamente",link:i}){return e.jsxs("div",{role:"status",className:"clay flex flex-col items-center justify-center gap-3 p-10 text-center",children:[e.jsx("span",{className:"grid size-12 place-items-center rounded-2xl bg-muted text-muted-foreground",children:e.jsx(h,{className:"size-6","aria-hidden":!0})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:t}),a?e.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:a}):null]}),i?e.jsxs("a",{href:i.url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline",children:[i.label," ",e.jsx(p,{className:"size-3.5","aria-hidden":!0})]}):null,s?e.jsxs(l,{variant:"outline",size:"sm",onClick:s,children:[e.jsx(c,{"aria-hidden":!0})," ",n]}):null]})}function C({title:t,description:a,icon:s,action:n}){return e.jsxs("div",{className:"clay flex flex-col items-center justify-center gap-3 p-10 text-center",children:[e.jsx("span",{className:"grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary",children:s??e.jsx(j,{className:"size-6","aria-hidden":!0})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:t}),e.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:a})]}),n]})}export{S as E,j as I,L,c as R,M as S,q as U,C as a};
