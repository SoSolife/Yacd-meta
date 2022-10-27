import{r as f,b as i,j as t,i as d,d as b,O as S,P,x as R,Q as L,u as W,C as w,S as N,T as C,U as k,g as j,V as I,h as O}from"./index.592f120b.js";import{r as z,s as M,f as $}from"./logs.dc551e37.js";import{d as A}from"./debounce.c2d20996.js";import{u as B}from"./useRemainingViewPortHeight.a94f739e.js";import{F,p as H}from"./Fab.f5e9f1ba.js";import{P as D,a as E}from"./play.6f2c1e95.js";function V(e,s){if(e==null)return{};var r=Q(e,s),a,o;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],!(s.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(r[a]=e[a]))}return r}function Q(e,s){if(e==null)return{};var r={},a=Object.keys(e),o,n;for(n=0;n<a.length;n++)o=a[n],!(s.indexOf(o)>=0)&&(r[o]=e[o]);return r}var _=f.exports.forwardRef(function(e,s){var r=e.color,a=r===void 0?"currentColor":r,o=e.size,n=o===void 0?24:o,p=V(e,["color","size"]);return i("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...p,children:[t("circle",{cx:"11",cy:"11",r:"8"}),t("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})});_.propTypes={color:d.exports.string,size:d.exports.oneOfType([d.exports.string,d.exports.number])};_.displayName="Search";const U=_,Y="_RuleSearch_muvsu_1",q="_RuleSearchContainer_muvsu_10",G="_inputWrapper_muvsu_20",J="_input_muvsu_20",K="_iconWrapper_muvsu_45",g={RuleSearch:Y,RuleSearchContainer:q,inputWrapper:G,input:J,iconWrapper:K};function X({dispatch:e,searchText:s,updateSearchText:r}){const[a,o]=f.exports.useState(s),n=f.exports.useCallback(l=>{e(r(l))},[e,r]),p=f.exports.useMemo(()=>A(n,300),[n]),u=l=>{o(l.target.value),p(l.target.value)};return t("div",{className:g.RuleSearch,children:i("div",{className:g.RuleSearchContainer,children:[t("div",{className:g.inputWrapper,children:t("input",{type:"text",value:a,onChange:u,className:g.input})}),t("div",{className:g.iconWrapper,children:t(U,{size:20})})]})})}const Z=e=>({searchText:S(e),updateSearchText:P}),ee=b(Z)(X),oe="_logMeta_pycfb_1",te="_logType_pycfb_8",re="_logTime_pycfb_17",ne="_logText_pycfb_22",se="_logsWrapper_pycfb_37",ae="_logPlaceholder_pycfb_54",ce="_logPlaceholderIcon_pycfb_67",c={logMeta:oe,logType:te,logTime:re,logText:ne,logsWrapper:se,logPlaceholder:ae,logPlaceholderIcon:ce},{useCallback:v,useEffect:ie}=O,x=30,le={debug:"#389d3d",info:"#58c3f2",warning:"#cc5abb",error:"#c11c1c"},pe={debug:"debug",info:"info",warning:"warn",error:"error"};function ge({time:e,payload:s,type:r}){return i("div",{className:c.logMeta,children:[t("span",{className:c.logTime,children:e}),i("span",{className:c.logType,style:{color:le[r]},children:["[ ",pe[r]," ]"]}),t("span",{className:c.logText,children:s})]})}function ue({dispatch:e,logLevel:s,apiConfig:r,logs:a,logStreamingPaused:o}){const n=R(),p=v(()=>{o?z({...r,logLevel:s}):M(),n.app.updateAppConfig("logStreamingPaused",!o)},[r,s,o,n.app]),u=v(m=>e(L(m)),[e]);ie(()=>{$({...r,logLevel:s},u)},[r,s,u]);const[l,y]=B(),{t:h}=W();return i("div",{children:[t(w,{title:h("Logs")}),t(ee,{}),t("div",{ref:l,children:a.length===0?i("div",{className:c.logPlaceholder,style:{height:y-x*2},children:[t("div",{className:c.logPlaceholderIcon,children:t(N,{width:200,height:200})}),t("div",{children:h("no_logs")})]}):i("div",{className:c.logsWrapper,style:{height:y-x*2},children:[a.map((m,T)=>t("div",{className:"",children:t(ge,{...m})},T)),t(F,{icon:o?t(D,{size:16}):t(E,{size:16}),mainButtonStyles:o?{background:"#e74c3c"}:{},style:H,text:h(o?"Resume Refresh":"Pause Refresh"),onClick:p})]})})]})}const he=e=>({logs:C(e),logLevel:k(e),apiConfig:j(e),logStreamingPaused:I(e)}),xe=b(he)(ue);export{xe as default};
