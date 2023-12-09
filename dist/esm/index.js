import*as e from"react";var r=function(){return r=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},r.apply(this,arguments)};function o(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]])}return o}function t(e){var r,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(o=t(e[r]))&&(n&&(n+=" "),n+=o);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function n(){for(var e,r,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(r=t(e))&&(n&&(n+=" "),n+=r);return n}"function"==typeof SuppressedError&&SuppressedError;const l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=n,i="-";function a(e){const r=function(e){const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]},n=function(e,r){if(!r)return e;return e.map((([e,o])=>[e,o.map((e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,o])=>[r+e,o]))):e))]))}(Object.entries(e.classGroups),o);return n.forEach((([e,o])=>{u(o,t,e,r)})),t}(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:function(e){const o=e.split(i);return""===o[0]&&1!==o.length&&o.shift(),c(o,r)||function(e){if(d.test(e)){const r=d.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,r){const n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}}function c(e,r){if(0===e.length)return r.classGroupId;const o=e[0],t=r.nextPart.get(o),n=t?c(e.slice(1),t):void 0;if(n)return n;if(0===r.validators.length)return;const l=e.join(i);return r.validators.find((({validator:e})=>e(l)))?.classGroupId}const d=/^\[(.+)\]$/;function u(e,r,o,t){e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return e.isThemeGetter?void u(e(t),r,o,t):void r.validators.push({validator:e,classGroupId:o});Object.entries(e).forEach((([e,n])=>{u(n,p(r,e),o,t)}))}else{(""===e?r:p(r,e)).classGroupId=o}}))}function p(e,r){let o=e;return r.split(i).forEach((e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)})),o}function f(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;function n(n,l){o.set(n,l),r++,r>e&&(r=0,t=o,o=new Map)}return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}}const b="!";function m(e){const r=e.separator,o=1===r.length,t=r[0],n=r.length;return function(e){const l=[];let s,i=0,a=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===i){if(d===t&&(o||e.slice(c,c+n)===r)){l.push(e.slice(a,c)),a=c+n;continue}if("/"===d){s=c;continue}}"["===d?i++:"]"===d&&i--}const c=0===l.length?e:e.substring(a),d=c.startsWith(b);return{modifiers:l,hasImportantModifier:d,baseClassName:d?c.substring(1):c,maybePostfixModifierPosition:s&&s>a?s-a:void 0}}}const g=/\s+/;function h(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=v(e))&&(t&&(t+=" "),t+=r);return t}function v(e){if("string"==typeof e)return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=v(e[t]))&&(o&&(o+=" "),o+=r);return o}function y(e,...r){let o,t,n,l=function(i){const c=r.reduce(((e,r)=>r(e)),e());return o=function(e){return{cache:f(e.cacheSize),splitModifiers:m(e),...a(e)}}(c),t=o.cache.get,n=o.cache.set,l=s,s(i)};function s(e){const r=t(e);if(r)return r;const l=function(e,r){const{splitModifiers:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,l=new Set;return e.trim().split(g).map((e=>{const{modifiers:r,hasImportantModifier:n,baseClassName:l,maybePostfixModifierPosition:s}=o(e);let i=t(s?l.substring(0,s):l),a=Boolean(s);if(!i){if(!s)return{isTailwindClass:!1,originalClassName:e};if(i=t(l),!i)return{isTailwindClass:!1,originalClassName:e};a=!1}const c=function(e){if(e.length<=1)return e;const r=[];let o=[];return e.forEach((e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)})),r.push(...o.sort()),r}(r).join(":");return{isTailwindClass:!0,modifierId:n?c+b:c,classGroupId:i,originalClassName:e,hasPostfixModifier:a}})).reverse().filter((e=>{if(!e.isTailwindClass)return!0;const{modifierId:r,classGroupId:o,hasPostfixModifier:t}=e,s=r+o;return!l.has(s)&&(l.add(s),n(o,t).forEach((e=>l.add(r+e))),!0)})).reverse().map((e=>e.originalClassName)).join(" ")}(e,o);return n(e,l),l}return function(){return l(h.apply(null,arguments))}}function x(e){const r=r=>r[e]||[];return r.isThemeGetter=!0,r}const w=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,z=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,N=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,O=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function G(e){return I(e)||z.has(e)||k.test(e)}function P(e){return D(e,"length",F)}function I(e){return Boolean(e)&&!Number.isNaN(Number(e))}function S(e){return D(e,"number",I)}function M(e){return Boolean(e)&&Number.isInteger(Number(e))}function E(e){return e.endsWith("%")&&I(e.slice(0,-1))}function A(e){return w.test(e)}function R(e){return j.test(e)}const T=new Set(["length","size","percentage"]);function $(e){return D(e,T,H)}function W(e){return D(e,"position",H)}const B=new Set(["image","url"]);function V(e){return D(e,B,K)}function q(e){return D(e,"",J)}function _(){return!0}function D(e,r,o){const t=w.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))}function F(e){return N.test(e)}function H(){return!1}function J(e){return C.test(e)}function K(e){return O.test(e)}function L(){const e=x("colors"),r=x("spacing"),o=x("blur"),t=x("brightness"),n=x("borderColor"),l=x("borderRadius"),s=x("borderSpacing"),i=x("borderWidth"),a=x("contrast"),c=x("grayscale"),d=x("hueRotate"),u=x("invert"),p=x("gap"),f=x("gradientColorStops"),b=x("gradientColorStopPositions"),m=x("inset"),g=x("margin"),h=x("opacity"),v=x("padding"),y=x("saturate"),w=x("scale"),k=x("sepia"),z=x("skew"),j=x("space"),N=x("translate"),C=()=>["auto",A,r],O=()=>[A,r],T=()=>["",G,P],B=()=>["auto",I,A],D=()=>["","0",A],F=()=>[I,S],H=()=>[I,A];return{cacheSize:500,separator:":",theme:{colors:[_],spacing:[G,P],blur:["none","",R,A],brightness:F(),borderColor:[e],borderRadius:["none","","full",R,A],borderSpacing:O(),borderWidth:T(),contrast:F(),grayscale:D(),hueRotate:H(),invert:D(),gap:O(),gradientColorStops:[e],gradientColorStopPositions:[E,P],inset:C(),margin:C(),opacity:F(),padding:O(),saturate:F(),scale:F(),sepia:D(),skew:H(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",A]}],container:["container"],columns:[{columns:[R]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",A]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",M,A]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",A]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",M,A]}],"grid-cols":[{"grid-cols":[_]}],"col-start-end":[{col:["auto",{span:["full",M,A]},A]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[_]}],"row-start-end":[{row:["auto",{span:[M,A]},A]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",A]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",A]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",A,r]}],"min-w":[{"min-w":["min","max","fit",A,G]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[R]},R,A]}],h:[{h:[A,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",G,A]}],"max-h":[{"max-h":[A,r,"min","max","fit"]}],"font-size":[{text:["base",R,P]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",S]}],"font-family":[{font:[_]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",A]}],"line-clamp":[{"line-clamp":["none",I,S]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",G,A]}],"list-image":[{"list-image":["none",A]}],"list-style-type":[{list:["none","disc","decimal",A]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",G,P]}],"underline-offset":[{"underline-offset":["auto",G,A]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",A]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",A]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",W]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},V]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[G,A]}],"outline-w":[{outline:[G,P]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:T()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[G,P]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",R,q]}],"shadow-color":[{shadow:[_]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",R,A]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",A]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",A]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",A]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[M,A]}],"translate-x":[{"translate-x":[N]}],"translate-y":[{"translate-y":[N]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",A]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",A]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",A]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[G,P,S]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Q=y(L);function U(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return Q(n(e))}var X,Y,Z=(X="relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",Y={variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}},e=>{var r;if(null==(null==Y?void 0:Y.variants))return s(X,null==e?void 0:e.class,null==e?void 0:e.className);const{variants:o,defaultVariants:t}=Y,n=Object.keys(o).map((r=>{const n=null==e?void 0:e[r],s=null==t?void 0:t[r];if(null===n)return null;const i=l(n)||l(s);return o[r][i]})),i=e&&Object.entries(e).reduce(((e,r)=>{let[o,t]=r;return void 0===t||(e[o]=t),e}),{}),a=null==Y||null===(r=Y.compoundVariants)||void 0===r?void 0:r.reduce(((e,r)=>{let{class:o,className:n,...l}=r;return Object.entries(l).every((e=>{let[r,o]=e;return Array.isArray(o)?o.includes({...t,...i}[r]):{...t,...i}[r]===o}))?[...e,o,n]:e}),[]);return s(X,n,a,null==e?void 0:e.class,null==e?void 0:e.className)}),ee=e.forwardRef((function(t,n){var l=t.className,s=t.variant,i=o(t,["className","variant"]);return e.createElement("div",r({ref:n,role:"alert",className:U(Z({variant:s}),l)},i))}));ee.displayName="Alert";var re=e.forwardRef((function(t,n){var l=t.className,s=o(t,["className"]);return e.createElement("h5",r({ref:n,className:U("mb-1 font-medium leading-none tracking-tight",l)},s))}));re.displayName="AlertTitle";var oe=e.forwardRef((function(t,n){var l=t.className,s=o(t,["className"]);return e.createElement("div",r({ref:n,className:U("text-sm [&_p]:leading-relaxed",l)},s))}));oe.displayName="AlertDescription";export{ee as Alert,oe as AlertDescription,re as AlertTitle};
//# sourceMappingURL=index.js.map
