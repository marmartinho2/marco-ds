import{_ as o}from"./iframe-MyLRL7MC.js";var i=Object.defineProperty,s=(e,r)=>{for(var t in r)i(e,t,{get:r[t],enumerable:!0})},_={};s(_,{parameters:()=>d});var p=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,a]=r;return a.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await o(()=>import("./DocsRenderer-CFRXHY34-tfxtM0-0.js").then(r=>r.al),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>p[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-tfxtM0-0.js","./iframe-MyLRL7MC.js","./index-UWpBQi2C.js","./jsx-runtime-HGRrBHN2.js","./index-VEdWiDPe.js","./index-FKz__Ft5.js","./index-PPLHz8o0.js","./react-18-xETaueE7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}