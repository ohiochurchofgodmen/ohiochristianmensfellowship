(self.webpackChunkohio_christian_mens_fellowship=self.webpackChunkohio_christian_mens_fellowship||[]).push([[678],{9516:function(e,n,t){"use strict";t.d(n,{n:function(){return d}});var r=t(7294),o=t(9),i=t(8952),a=t(4192),l=t(9409),c=(0,o.css)(["color:",";"],(function(e){return(0,i.ut)(e.colorProp,e.theme)})),s=(0,o.css)(["font-family:",";"],(function(e){return e.theme.paragraph.font.family})),h=o.default.p.withConfig({displayName:"StyledParagraph",componentId:"tbetod-0"})([""," "," "," "," "," ",""],a.$G,(function(e){return function(e){var n=e.size||"medium",t=e.theme.paragraph[n];return(0,o.css)(["font-size:",";line-height:",";max-width:",";"],t.size,t.height,e.fillProp?"none":t.maxWidth)}(e)}),(function(e){return e.textAlign&&a.jt}),(function(e){return e.colorProp&&c}),(function(e){return e.theme.paragraph.font&&e.theme.paragraph.font.family&&s}),(function(e){return e.theme.paragraph&&e.theme.paragraph.extend}));function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}h.defaultProps={},Object.setPrototypeOf(h.defaultProps,l.l);var f=(0,r.forwardRef)((function(e,n){var t=e.color,o=e.fill,i=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["color","fill"]);return r.createElement(h,u({ref:n,colorProp:t,fillProp:o},i))}));f.displayName="Paragraph";var d=f},4396:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var r=t(7294),o=t(8952),i=t(9409),a=t(4593),l=t(6289),c=t(6596),s=t(1085),h=t(5915);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=function(e){var n=e.initialChild,t=e.onChild,f=e.play,d=e.children,m=e.controls,p=e.fill,v=e.onFocus,g=e.onBlur,y=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["initialChild","onChild","play","children","controls","fill","onFocus","onBlur"]),x=(0,r.useContext)(a.N)||i.l.theme,b=(0,r.useState)(),w=b[0],E=b[1],C=(0,r.useRef)(),O=(0,r.useState)({activeIndex:n}),k=O[0],I=O[1],P=k.activeIndex,j=k.priorActiveIndex,z=r.Children.count(d)-1;(0,r.useEffect)((function(){if(f){var e=setInterval((function(){I(P<z?{activeIndex:P+1,priorActiveIndex:P}:{activeIndex:0,priorActiveIndex:P})}),f);return C.current=e,function(){clearTimeout(e)}}return function(){}}),[P,f,d,z]),(0,r.useEffect)((function(){return t&&t(P),function(){}}),[P]);var F=function(){P>=z||(clearInterval(C.current),I({activeIndex:P+1,priorActiveIndex:P}))},A=function(){P<=0||(clearInterval(C.current),I({activeIndex:P-1,priorActiveIndex:P}))},T=function(e){return function(){clearInterval(C.current),I({activeIndex:e,priorActiveIndex:P})}},_=m&&"selectors"!==m,S=m&&"arrows"!==m,B=x.carousel.icons.current,R=(0,o.ut)(x.carousel.icons.color||"control",x),M=[],L=r.Children.map(d,(function(e,n){var t;return M.push(r.createElement(c.z,{key:n,icon:r.createElement(B,{color:P===n?R:void 0}),onClick:T(n)})),n===P?void 0!==j&&(t={type:j<P?"slideLeft":"slideRight",size:"xlarge",duration:x.carousel.animation.duration}):t=n===j?{type:"fadeOut",duration:x.carousel.animation.duration}:{type:"fadeOut",duration:0},r.createElement(l.x,{fill:p,overflow:"hidden"},r.createElement(l.x,{fill:p,animation:t},e))})),N=x.carousel.icons.next,W=x.carousel.icons.previous,G=P>=z,q=P<=0;return r.createElement(s.N,{onLeft:A,onRight:F},r.createElement(h.K,u({guidingChild:P,fill:p},y),L,r.createElement(l.x,{tabIndex:"0",focus:w,onFocus:function(e){E(!0),v&&v(e)},onBlur:function(e){E(!1),g&&g(e)},fill:!0,direction:"row",justify:"between"},_&&r.createElement(c.z,{fill:"vertical",icon:r.createElement(W,{color:(0,o.ut)(q?x.carousel.disabled.icons.color:x.carousel.icons.color,x)}),plain:!0,disabled:q,onClick:A,hoverIndicator:!0}),S&&r.createElement(l.x,{justify:"end",fill:!_&&"horizontal"},r.createElement(l.x,{direction:"row",justify:"center"},M)),_&&r.createElement(c.z,{fill:"vertical",icon:r.createElement(N,{color:(0,o.ut)(G?x.carousel.disabled.icons.color:x.carousel.icons.color,x)}),plain:!0,disabled:G,onClick:F,hoverIndicator:!0}))))};f.defaultProps={initialChild:0,controls:!0},Object.setPrototypeOf(f.defaultProps,i.l),f.displayName="Carousel";var d=f,m=t(9),p=t(4192),v=m.default.a.withConfig({shouldForwardProp:function(e,n){return!["as","colorProp","focus","hasIcon","hasLabel","reverse"].includes(e)&&n(e)}}).withConfig({displayName:"StyledAnchor",componentId:"sc-1rp7lwl-0"})(["box-sizing:border-box;"," color:",";"," text-decoration:",";cursor:pointer;"," "," "," "," "," ",""],(function(e){return function(e){if(e.size){var n=e.size||"medium",t=e.theme.text[n];return(0,m.css)(["font-size:",";line-height:",";"],t.size,t.height)}return(0,m.css)(["font-size:inherit;line-height:inherit;"])}(e)}),(function(e){return(0,o.ut)(e.colorProp||e.theme.anchor.color,e.theme)}),(function(e){return e.weight?"font-weight: "+e.weight+";":e.theme.anchor.fontWeight&&"font-weight: "+e.theme.anchor.fontWeight+";"}),(function(e){return e.hasIcon?"none":e.theme.anchor.textDecoration}),p.$G,(function(e){return!e.disabled&&e.theme.anchor.hover&&(0,m.css)(["&:hover{"," "," ","}"],e.theme.anchor.hover.textDecoration&&"text-decoration: "+e.theme.anchor.hover.textDecoration+";",e.theme.anchor.hover.fontWeight&&"font-weight: "+e.theme.anchor.hover.fontWeight+";",e.theme.anchor.hover.extend)}),(function(e){return e.hasIcon&&!e.hasLabel&&"\n    padding: "+e.theme.global.edgeSize.small+";\n  "}),(function(e){return e.disabled&&"\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n"}),(function(e){return e.focus&&(0,p.jq)()}),(function(e){return e.theme.anchor.extend}));function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}v.defaultProps={},Object.setPrototypeOf(v.defaultProps,i.l);var y=(0,r.forwardRef)((function(e,n){var t=e.a11yTitle,a=e.children,c=e.color,s=e.disabled,h=e.href,u=e.icon,f=e.label,d=e.onBlur,p=e.onClick,y=e.onFocus,x=e.reverse,b=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["a11yTitle","children","color","disabled","href","icon","label","onBlur","onClick","onFocus","reverse"]),w=(0,r.useContext)(m.ThemeContext)||i.l.theme,E=(0,r.useState)(),C=E[0],O=E[1];(0,r.useEffect)((function(){(u||f)&&a&&console.warn("Anchor should not have children if icon or label is provided")}),[a,u,f]);var k=u;u&&!u.props.color&&(k=(0,r.cloneElement)(u,{color:(0,o.ut)(c||w.anchor.color,w)}));var I=x?f:k,P=x?k:f;return r.createElement(v,g({},b,{ref:n,"aria-label":t,colorProp:c,disabled:s,hasIcon:!!u,focus:C,hasLabel:f,reverse:x,href:s?void 0:h,onClick:s?void 0:p,onFocus:function(e){O(!0),y&&y(e)},onBlur:function(e){O(!1),d&&d(e)}}),I&&P?r.createElement(l.x,{as:"span",direction:"row",align:"center",gap:"small",responsive:!1,style:{display:"inline-flex"}},I,P):I||P||a)}));y.displayName="Anchor";var x=y,b=t(9516),w=t(8169),E=t(6354),C=t(733),O=t(5444),k=t(1524),I=t.p+"static/knife_for_raffle-667a78d9823bd27f4c8ab00285bcc88b.jpeg",P=t.p+"static/mens_golf_info-8ec6261aaff2ccdff182af022e6a4c36.pdf",j=t.p+"static/council_img-56f64a656563cb545160152d43e39830.jpg",z=function(){return r.createElement(O.StaticQuery,{query:"3115322152",render:function(e){return r.createElement(k.Z,{showHeader:!0,showRegisterButton:!0},r.createElement(l.x,{forwadedAs:"section",height:"medium",overflow:"hidden",background:"dark-1",pad:"medium",fill:"horizontal"},r.createElement(d,{fill:!0,controls:"arrows",play:8e3},e.allTestimonialsJson.nodes.map((function(e){return r.createElement(l.x,{key:e.id,width:"medium",alignSelf:"center"},r.createElement(b.n,{margin:{left:"28px",right:"28px"}},'"'+e.quote+'"'),r.createElement(w.x,{textAlign:"end",margin:{left:"28px",right:"28px"}},"~ "+e.author))})))),r.createElement(l.x,{pad:"medium",align:"center",margin:{top:"medium"}},r.createElement(x,{href:"/schedule"},"Click Here For Event Schedule!")),r.createElement(l.x,{pad:"medium",align:"center"},r.createElement(b.n,{fill:!0},"If you plan to participate in the golf scramble, please open the attached document. ",r.createElement("a",{href:""+P,target:"_blank",rel:"noreferrer"},"Golf Attachment"))),r.createElement(l.x,{pad:"medium",align:"center"},r.createElement(E.X,{level:"3"},"Cross Knife Raffle: Made By Forged In Fire Champion Pete Winkler"),r.createElement(C.E,{src:I,margin:{bottom:"small"}}),r.createElement(c.z,{as:"a",label:"Buy raffle tickets",href:"https://go.rallyup.com/ocmf"})),r.createElement(l.x,{forwardedAs:"section",pad:"medium"},r.createElement(E.X,{level:"3"},"Our Story"),r.createElement(l.x,{width:"medium",pad:"none",margin:"none"},r.createElement(C.E,{src:j,fit:"cover"})),r.createElement(b.n,{fill:!0},"When the Ohio Church of God Men's ministry began in 1976, the\n              members had a vision for all men in Ohio. They would seek to live\n              out the message and ministry of reconciliation through corporate\n              fellowship and mission by the grace of God. For many years, the\n              men's ministry hosted a spiritual retreat known as the Ohio\n              Men’s Ox Roast. Today, the fellowship, mission, and retreat\n              continue as the Ohio Christian Men's Fellowship."),r.createElement(b.n,{fill:!0},"The Ohio Christian Men's Fellowship is an event, in which\n              Christian men gather to engage in fellowship with one another.\n              This event has many different activities that younger and older\n              men can enjoy. The event is broken into two days of activities\n              with cabin accommodations included. Friday is the lighter of the\n              two days and offers a more relaxed schedule. The highlights of\n              Friday include the annual fishing tournament and the evening\n              bonfire and hotdog roast. Saturday has a packed schedule that\n              includes: three meals, devotional sessions, a sermon from an\n              accomplished Christian speaker, worship with professional\n              musicians, athletic tournaments, and loads of recreational\n              activities such as hiking, fishing, horseshoes, and cornhole. The\n              Ohio Christian Men's Fellowship is a time for men to grow in\n              their faith, meet and fellowship with brothers in Christ, and\n              invite others in your life to experience the love of Jesus Christ."),r.createElement(b.n,{fill:!0},"Through the Ohio Christian Men's Fellowship, Christian men\n              across the state of Ohio have raised money for ministry outreach\n              and challenged countless numbers of men and boys to serve the\n              Lord. The OCGM council meets multiple times per year, under\n              President Lance Rose, to plan the annual retreat and to continue\n              the fellowship.")))}})}}}]);
//# sourceMappingURL=component---src-pages-index-js-e878b5d7e365a85ca2f3.js.map