(self.webpackChunkohio_christian_mens_fellowship=self.webpackChunkohio_christian_mens_fellowship||[]).push([[249],{9516:function(e,t,n){"use strict";n.d(t,{n:function(){return d}});var r=n(7294),a=n(9),o=n(8952),i=n(4192),l=n(9409),c=(0,a.css)(["color:",";"],(function(e){return(0,o.ut)(e.colorProp,e.theme)})),s=(0,a.css)(["font-family:",";"],(function(e){return e.theme.paragraph.font.family})),u=a.default.p.withConfig({displayName:"StyledParagraph",componentId:"tbetod-0"})([""," "," "," "," "," ",""],i.$G,(function(e){return function(e){var t=e.size||"medium",n=e.theme.paragraph[t];return(0,a.css)(["font-size:",";line-height:",";max-width:",";"],n.size,n.height,e.fillProp?"none":n.maxWidth)}(e)}),(function(e){return e.textAlign&&i.jt}),(function(e){return e.colorProp&&c}),(function(e){return e.theme.paragraph.font&&e.theme.paragraph.font.family&&s}),(function(e){return e.theme.paragraph&&e.theme.paragraph.extend}));function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}u.defaultProps={},Object.setPrototypeOf(u.defaultProps,l.l);var f=(0,r.forwardRef)((function(e,t){var n=e.color,a=e.fill,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color","fill"]);return r.createElement(u,m({ref:t,colorProp:n,fillProp:a},o))}));f.displayName="Paragraph";var d=f},4663:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ve}});var r=n(5761),a=n(7294),o=n(9),i=n(4192),l=n(7459),c=n(9409),s={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},u=(0,o.css)(["align-items:",";"],(function(e){return s[e.align]})),m={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},f=(0,o.css)(["align-content:",";"],(function(e){return m[e.alignContent]})),d={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},h=(0,o.css)(["justify-items:",";"],(function(e){return d[e.justify]})),p={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},g=(0,o.css)(["justify-content:",";"],(function(e){return p[e.justifyContent]})),v={flex:"1fr",full:"100%","1/2":"50%","1/4":"25%","2/4":"50%","3/4":"75%","1/3":"33.33%","2/3":"66.66%"},y=function(e,t){return"flex"===e?"1fr":(Array.isArray(e)?(n=t.global.size[e[0]]||e[0],r=t.global.size[e[1]]||e[1]):(n=t.global.size[e]||e,r="1fr"),-1!==n.search(/\d/)&&(n="min("+n+", 100%)"),"minmax("+n+", "+r+")");var n,r},w=function(e,t,n){var r=v[e];return!n||!r||t.fillContainer&&"horizontal"!==t.fillContainer||console.warn("Grid needs `fill` when using fractional row sizes"),r||t.theme.global.size[e]||e},b=o.default.div.attrs((function(e){return{"aria-label":e.a11yTitleProp}})).withConfig({displayName:"StyledGrid",componentId:"sc-1wofa1l-0"})(["display:grid;box-sizing:border-box;"," "," "," "," "," "," "," "," "," "," "," "," ",""],i.$G,(function(e){return e.border&&(Array.isArray(e.border)?e.border.map((function(t){return(0,l.$)(t,e.responsive,e.theme)})):(0,l.$)(e.border,e.responsive,e.theme))}),(function(e){return(t=e.fillContainer)?"horizontal"===t?"width: 100%;":"vertical"===t?"height: 100%;":"\n      width: 100%;\n      height: 100%;\n    ":t;var t}),(function(e){return e.align&&u}),(function(e){return e.alignContent&&f}),(function(e){return e.areas&&function(e){if(Array.isArray(e.rowsProp)&&Array.isArray(e.columns)||console.warn("Grid `areas` requires `rows` and `columns` to be arrays."),Array.isArray(e.areas)&&e.areas.every((function(e){return Array.isArray(e)})))return"grid-template-areas: "+e.areas.map((function(e){return'"'+e.join(" ")+'"'})).join(" ")+";";var t=e.rowsProp.map((function(){return e.columns.map((function(){return"."}))}));return e.areas.forEach((function(e){for(var n=e.start[1];n<=e.end[1];n+=1)for(var r=e.start[0];r<=e.end[0];r+=1)t[n][r]=e.name})),"grid-template-areas: "+t.map((function(e){return'"'+e.join(" ")+'"'})).join(" ")+";"}(e)}),(function(e){return e.columns&&function(e){return Array.isArray(e.columns)?(0,o.css)(["grid-template-columns:",";"],e.columns.map((function(t){return Array.isArray(t)?"minmax("+w(t[0],e)+", "+w(t[1],e)+")":w(t,e)})).join(" ")):"object"==typeof e.columns?(0,o.css)(["grid-template-columns:repeat( ",","," );"],"number"==typeof(t=e.columns.count)?t:"auto-"+t,y(e.columns.size,e.theme)):(0,o.css)(["grid-template-columns:repeat( auto-fill,"," );"],y(e.columns,e.theme));var t}(e)}),(function(e){return e.gap&&function(e){if("string"==typeof e.gap){var t=e.theme.global.edgeSize[e.gap]||e.gap;return"grid-gap: "+t+" "+t+";"}return e.gap.row&&e.gap.column?"\n      grid-row-gap: "+(e.theme.global.edgeSize[e.gap.row]||e.gap.row)+";\n      grid-column-gap: "+(e.theme.global.edgeSize[e.gap.column]||e.gap.column)+";\n    ":e.gap.row?"\n      grid-row-gap: "+(e.theme.global.edgeSize[e.gap.row]||e.gap.row)+";\n    ":e.gap.column?"\n      grid-column-gap: "+(e.theme.global.edgeSize[e.gap.column]||e.gap.column)+";\n    ":""}(e)}),(function(e){return e.justify&&h}),(function(e){return e.justifyContent&&g}),(function(e){return e.pad&&(0,i.oW)("padding",e.pad,e.responsive,e.theme.global.edgeSize.responsiveBreakpoint,e.theme)}),(function(e){return e.rowsProp&&function(e){return Array.isArray(e.rowsProp)?(0,o.css)(["grid-template-rows:",";"],e.rowsProp.map((function(t){return Array.isArray(t)?"minmax("+w(t[0],e,!0)+", "+w(t[1],e,!0)+")":w(t,e,!0)})).join(" ")):(0,o.css)(["grid-auto-rows:",";"],e.theme.global.size[e.rowsProp])}(e)}),(function(e){return e.theme.grid&&e.theme.grid.extend}));function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}b.defaultProps={},Object.setPrototypeOf(b.defaultProps,c.l);var x=(0,a.forwardRef)((function(e,t){var n=e.a11yTitle,r=e.border,o=e.fill,i=e.responsive,l=void 0===i||i,c=e.rows,s=e.tag,u=e.as,m=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["a11yTitle","border","fill","responsive","rows","tag","as"]);return a.createElement(b,E({ref:t,a11yTitleProp:n,as:!u&&s?s:u,border:r,fillContainer:o,responsive:l,rowsProp:c},m))}));x.displayName="Grid";var O=x;O.available="undefined"!=typeof window&&window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid");var C=n(6289);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var P=(0,a.forwardRef)((function(e,t){var n=j({},e),r=(0,a.useContext)(o.ThemeContext)||c.l.theme;return a.createElement(C.x,j({overflow:"hidden",ref:t},r.card.container,n))}));P.displayName="Card";var A=P,k=n(8399);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=function(e){var t=z({},e),n=(0,a.useContext)(o.ThemeContext)||c.l.theme;return a.createElement(k.h,z({},n.card.header,t))};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=function(e){var t=_({},e),n=(0,a.useContext)(o.ThemeContext)||c.l.theme;return a.createElement(C.x,_({flex:!0},n.card.body,t))},M=(0,a.createContext)({});function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var N=(0,a.forwardRef)((function(e,t){var n,r=e.activeIndex,o=e.animate,i=void 0===o||o,l=e.children,c=e.multiple,s=e.onActive,u=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["activeIndex","animate","children","multiple","onActive"]),m=(0,a.useState)([]),f=m[0],d=m[1],h=(0,a.useState)(),p=h[0],g=h[1],v=("number"==typeof(n=r)?[n]:n)||[];void 0===r&&r===p||v.join()===f.join()||(d(v),g(r));return a.createElement(C.x,F({ref:t,role:"tablist"},u),a.Children.toArray(l).filter((function(e){return e})).map((function(e,t){return a.createElement(M.Provider,{key:t,value:{active:f.indexOf(t)>-1,animate:i,onPanelChange:function(){return function(e){var t=[].concat(f||[]),n=t.indexOf(e);n>-1?t.splice(n,1):c?t.push(e):t=[e],d(t),s&&s(t)}(t)}}},e)})))}));N.displayName="Accordion";var K=N,R=n(8952),B=n(9653),G=n(6596),D=n(5462),I=(0,o.default)(C.x).withConfig({displayName:"Collapsible__AnimatedBox",componentId:"sc-15kniua-0"})(["",""],(function(e){return"transition: max-"+e.dimension+" "+e.speedProp+"ms, opacity "+e.speedProp+"ms;\n      opacity: "+(e.open?1:0)+";\n      overflow: "+(e.animate||!e.open?"hidden":"visible")+";\n      max-"+e.dimension+": "+(e.open?"unset":0)+";\n    "})),L=(0,a.forwardRef)((function(e,t){var n=e.children,r=e.direction,i=e.open,l=(0,a.useContext)(o.ThemeContext)||c.l.theme,s=(0,a.useState)(i),u=s[0],m=s[1],f=(0,a.useState)(!1),d=f[0],h=f[1],p=(0,a.useState)(),g=p[0],v=p[1],y=(0,a.useState)(l.collapsible.minSpeed),w=y[0],b=y[1],E=(0,a.useMemo)((function(){return"horizontal"===r?"width":"height"}),[r]),x=(0,D.t)(t);return(0,a.useEffect)((function(){i!==u&&(h(!0),m(i))}),[u,i]),(0,a.useEffect)((function(){if(d){var e=setTimeout((function(){h(!1),v(void 0),x.current.removeAttribute("style")}),w);return function(){return clearTimeout(e)}}}),[d,x,w]),(0,a.useEffect)((function(){if(d){var e=l.collapsible,t=e.minSpeed,n=e.baseline,r=x.current;r.style["max-"+E]="unset";var a=r.getBoundingClientRect();r.removeAttribute("style");var o=a[E];r.style["max-"+E]=u?0:o+"px",v(o);var i=Math.max(o/n*t,t);b(i)}}),[d,x,E,u,l]),(0,a.useLayoutEffect)((function(){if(d&&g){var e=x.current;requestAnimationFrame((function(){requestAnimationFrame((function(){e.style["max-"+E]=u?g+"px":0}))}))}}),[d,x,E,u,g]),a.createElement(I,{"aria-hidden":!u,ref:x,open:u,animate:d,dimension:E,speedProp:w},u||d?n:null)}));L.displayName="Collapsible";var Z=L,H=n(6354);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $=(0,a.forwardRef)((function(e,t){var n=e.children,r=e.header,i=e.label,l=e.onClick,s=e.onMouseOut,u=e.onMouseOver,m=e.onFocus,f=e.onBlur,d=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","header","label","onClick","onMouseOut","onMouseOver","onFocus","onBlur"]),h=(0,a.useContext)(o.ThemeContext)||c.l.theme,p=(0,a.useContext)(M),g=p.active,v=p.animate,y=p.onPanelChange,w=(0,a.useState)(void 0),b=w[0],E=w[1],x=(0,a.useState)(),O=x[0],j=x[1],P=(0,a.useMemo)((function(){return(0,R.ut)(h.accordion.icons.color||"control",h)}),[h]),A=(0,a.useMemo)((function(){return g?h.accordion.icons.collapse:h.accordion.icons.expand}),[g,h.accordion.icons]),k=JSON.stringify({dark:"light-4",light:"dark-3"});JSON.stringify(h.accordion.hover.color)!==k&&console.warn("The theme style for accordion.hover.color is deprecated, \n        use accordion.hover.heading.color instead.");var z,S=h.accordion.hover&&JSON.stringify(h.accordion.hover.heading.color)!==k?h.accordion.hover.heading.color:h.accordion.hover.color,_=h.accordion.border,T=h.accordion.panel.border;return T&&(z={bottom:"-"+(0,B.gd)(h.global.borderSize[T.size]||T.size||h.global.borderSize.xsmall)+"px"}),a.createElement(C.x,{ref:t,flex:!1,onClick:l,border:T,margin:z},a.createElement(G.z,{role:"tab","aria-selected":g,"aria-expanded":g,plain:!!h.button.default||void 0,onClick:y,onMouseOver:function(e){E(S),u&&u(e)},onMouseOut:function(e){E(void 0),s&&s(e)},onFocus:function(e){E(S),j(!0),m&&m(e)},onBlur:function(e){E(void 0),j(!1),f&&f(e)},style:O?{zIndex:1}:void 0},r||a.createElement(C.x,J({align:"center",direction:"row",justify:"between"},d),"string"==typeof i?a.createElement(C.x,{pad:{horizontal:"xsmall"}},a.createElement(H.X,{level:h.accordion.heading&&h.accordion.heading.level||4,margin:h.accordion.heading&&h.accordion.heading.margin||void 0,color:b},i)):i,A&&a.createElement(C.x,{pad:{horizontal:"small"}},a.createElement(A,{color:P})))),a.createElement(C.x,{border:_},v?a.createElement(Z,{open:g},n):g&&n))}));$.displayName="AccordionPanel";var q,W,X,U,Y,Q=$,V=n(9516),ee=n(5915),te=n(733),ne=n(8169),re=n(1524),ae=n.p+"static/fishing_at_camp_2020-5827aa093b8151a48ed376452592e34b.jpg",oe=n.p+"static/cornhole_at_camp_2020-1e08b81d606fa4348f50dd8b566c8093.jpg",ie=n.p+"static/horseshoes_at_camp_2020-e72b09ae140734c24e1173408fbec8f1.jpg",le=n.p+"static/MARK BALL AND PUTTER DSC_9238-30d72addf2e81296d8c9cc3e434492fc.jpg",ce=n.p+"static/archery_at_camp_2020-1216338e9e8a1d4d54982d24d59f463d.jpg",se=n.p+"static/frisebee_golf_at_camp_2020-39a41edf5604f296f2e01d0e56d83af6.jpg",ue=n.p+"static/camp_pic_2020-a594416a52170d1e2100213a1da0194c.jpg",me=n.p+"static/lake_crosses2_at_camp_2020-dac951725be6f7aa05a8a99cd537a437.jpg",fe=(0,o.default)(C.x)(q||(q=(0,r.Z)(["\n  grid-column: 1/-1;\n"]))),de=(0,o.default)(C.x)(W||(W=(0,r.Z)(["\n  grid-column: span 2;\n  grid-row: span 2;\n"]))),he=(0,o.default)(C.x)(X||(X=(0,r.Z)(["\n  grid-column: 3 / span 2;\n  grid-row: span 2;\n"]))),pe=(0,o.default)(C.x)(U||(U=(0,r.Z)(["\n  grid-column: span 2;\n  grid-row: span 2;\n"]))),ge=(0,o.default)(C.x)(Y||(Y=(0,r.Z)(["\n  grid-column: 3 / span 2;\n  grid-row: span 2;\n"]))),ve=function(){return a.createElement(re.Z,{showHeader:!1,showRegisterButton:!0},a.createElement(C.x,{pad:"medium",fill:!0},a.createElement(H.X,{level:"3"},"Activities"),a.createElement(V.n,{fill:!0},"The Ohio Christian Men's Fellowship is an event, offering a variety of outdoor activities. There is something for everyone, from individual tournaments to group competitions to activities just for fun. These events provide an opportunity to meet and socialize with other church members while enjoying the great outdoors.")),a.createElement(O,{columns:{count:"fit",size:["medium","1fr"]},gap:"small",pad:"medium"},a.createElement(C.x,null,a.createElement(A,{background:"light-1"},a.createElement(S,null,a.createElement(ee.K,{anchor:"center"},a.createElement(te.E,{src:le,fill:!0}),a.createElement(C.x,{align:"center",pad:"none",width:"100vw"},a.createElement(ne.x,{color:"light-1",size:"2xl"},"Golf Tournament")))),a.createElement(T,null,a.createElement(K,null,a.createElement(Q,{label:"Details"},a.createElement(C.x,{pad:"medium",background:"light-2"},a.createElement(V.n,null,"The golf tournament at the Ohio Christian Men's Fellowship can be a great chance to get away from your work week and relax. Join in with others to play an 18-holes of scramble tournament. Swap golf tips and stories, as you play your way through a golf course that has something to offer every skill level."),a.createElement(V.n,null,"Golf will be held at 1223 N. State Rt. 741 Lebanon Ohio 45036. All golfers should be at the course by 10:30AM for an 11AM start time on September 10th. For more information about this event you can call Rusty Alward at ",a.createElement("a",{href:"mailto:rfalward@gmail.com"},"rfalward@gmail.com"),"."))))))),a.createElement(C.x,null,a.createElement(A,{background:"light-1"},a.createElement(S,null,a.createElement(ee.K,{anchor:"center"},a.createElement(te.E,{src:ae,fill:!0}),a.createElement(C.x,{align:"center",pad:"none",width:"100vw"},a.createElement(ne.x,{color:"light-1",size:"2xl"},"Fishing Tournament")))),a.createElement(T,null,a.createElement(K,null,a.createElement(Q,{label:"Details"},a.createElement(C.x,{pad:"medium",background:"light-2"},a.createElement(V.n,null,"The fishing tournament at the Ohio Christian Men's Fellowship is fun for all ages. The tournament gives you time to make memories with others who love fishing just as much as you. We will be fishing for catfish, bluegill, bass, etc. Prizes will be given out at the tournament. There will also be open fishing for anyone on during recreational time. So if you enjoy fishing, take advantage of this opportunity to reel in that big fish before the summer ends."),a.createElement(V.n,null,"Fishing will take place at Camp Lebanon from 4 PM to 8 PM Friday. Open fishing will be on Saturday during recreational time. For more information about this event you can call Carl Levine at ",a.createElement("a",{href:"tel:+19372320064"},"937-232-0064"),"."))))))),a.createElement(C.x,null,a.createElement(A,{background:"light-1"},a.createElement(S,null,a.createElement(ee.K,{anchor:"center"},a.createElement(te.E,{src:oe,fill:!0}),a.createElement(C.x,{align:"center",pad:"none",width:"100vw"},a.createElement(ne.x,{color:"light-1",size:"2xl"},"Cornhole Tournament")))),a.createElement(T,null,a.createElement(K,null,a.createElement(Q,{label:"Details"},a.createElement(C.x,{pad:"medium",background:"light-2"},a.createElement(V.n,null,"The cornhole boards at the Ohio Christian Men's Fellowship are always setup and are a great way to meet others. Come enjoy this Midwest pastime, as you try to outscore your opponents. Young or old, this game is easy to learn and fun to play."),a.createElement(V.n,null,"Cornhole tournament registration will take place at registration tent when you arrive and the tournament on Saturday from 11:15 PM - 12:45 PM. For more information about this event you can call Chad Knight at ",a.createElement("a",{href:"tel:+17402531231"},"(740) 253-1231"),"."))))))),a.createElement(C.x,null,a.createElement(A,{background:"light-1"},a.createElement(S,null,a.createElement(ee.K,{anchor:"center"},a.createElement(te.E,{src:ie,fill:!0}),a.createElement(C.x,{align:"center",pad:"none",width:"100vw"},a.createElement(ne.x,{color:"light-1",size:"2xl"},"Horseshoe Tournament")))),a.createElement(T,null,a.createElement(K,null,a.createElement(Q,{label:"Details"},a.createElement(C.x,{pad:"medium",background:"light-2"},a.createElement(V.n,null,"Horseshoes may seem similar to cornhole, but has its own skillset. At the Ohio Christian Men's Fellowship, there are several horshoe pits for you to show off your skills or to learn how to play. There is also a viewing area where you can watch other horseshoers battle it out."),a.createElement(V.n,null,"Horseshoes tournament reigistration will take place at registration tent when you arrive and the tournament on Saturday from 11:15 PM - 12:45 PM. For more information about this event you can call Fred O Davis at ",a.createElement("a",{href:"tel:+13305757485"},"(330) 575-7485"))))))))),a.createElement(O,{rows:"xsmall",columns:{count:"fit",size:["xsmall","1fr"]},gap:"xsmall",pad:"xsmall",fill:!0},a.createElement(fe,{background:"dark-2"},a.createElement(ee.K,{anchor:"center"},a.createElement(C.x,{align:"center",pad:"none",width:"100vw"},a.createElement(H.X,{level:"4",color:"light-1",size:"xl"},"Other Activities")))),a.createElement(de,{background:"light-5"},a.createElement(ee.K,{anchor:"center"},a.createElement(te.E,{src:me,fill:!0}),a.createElement(C.x,{align:"center",pad:"none",width:"100vw"},a.createElement(ne.x,{color:"light-1",size:"xl"},"Paddle Boating/Kayaking")))),a.createElement(he,null,a.createElement(ee.K,{anchor:"center"},a.createElement(te.E,{src:se,fill:!0}),a.createElement(C.x,{align:"center",pad:"none",width:"100vw"},a.createElement(ne.x,{color:"light-1",size:"xl"},"Frisbee Golf")))),a.createElement(pe,null,a.createElement(ee.K,{anchor:"center"},a.createElement(te.E,{src:ue,fill:!0}),a.createElement(C.x,{align:"center",pad:"none",width:"100vw"},a.createElement(ne.x,{color:"light-1",size:"xl"},"Hiking")))),a.createElement(ge,null,a.createElement(ee.K,{anchor:"center"},a.createElement(te.E,{src:ce,fill:!0}),a.createElement(C.x,{align:"center",pad:"none",width:"100vw"},a.createElement(ne.x,{color:"light-1",size:"xl"},"Archery"))))),a.createElement("hr",null))}}}]);
//# sourceMappingURL=component---src-pages-activities-js-88cc2ee06aa7584f6d1f.js.map