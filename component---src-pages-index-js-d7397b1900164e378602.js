(self.webpackChunkohio_christian_mens_fellowship=self.webpackChunkohio_christian_mens_fellowship||[]).push([[678],{9516:function(e,n,t){"use strict";t.d(n,{n:function(){return d}});var r=t(7294),i=t(9),o=t(8952),a=t(4192),l=t(9409),c=(0,i.css)(["color:",";"],(function(e){return(0,o.ut)(e.colorProp,e.theme)})),s=(0,i.css)(["font-family:",";"],(function(e){return e.theme.paragraph.font.family})),u=i.default.p.withConfig({displayName:"StyledParagraph",componentId:"tbetod-0"})([""," "," "," "," "," ",""],a.$G,(function(e){return function(e){var n=e.size||"medium",t=e.theme.paragraph[n];return(0,i.css)(["font-size:",";line-height:",";max-width:",";"],t.size,t.height,e.fillProp?"none":t.maxWidth)}(e)}),(function(e){return e.textAlign&&a.jt}),(function(e){return e.colorProp&&c}),(function(e){return e.theme.paragraph.font&&e.theme.paragraph.font.family&&s}),(function(e){return e.theme.paragraph&&e.theme.paragraph.extend}));function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}u.defaultProps={},Object.setPrototypeOf(u.defaultProps,l.l);var f=(0,r.forwardRef)((function(e,n){var t=e.color,i=e.fill,o=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["color","fill"]);return r.createElement(u,h({ref:n,colorProp:t,fillProp:i},o))}));f.displayName="Paragraph";var d=f},2237:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(7294),i=t(8952),o=t(9409),a=t(4593),l=t(6289),c=t(6596),s=t(1085),u=t(5915);function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=function(e){var n=e.initialChild,t=e.onChild,f=e.play,d=e.children,m=e.controls,p=e.fill,v=e.onFocus,g=e.onBlur,y=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["initialChild","onChild","play","children","controls","fill","onFocus","onBlur"]),w=(0,r.useContext)(a.N)||o.l.theme,x=(0,r.useState)(),E=x[0],b=x[1],C=(0,r.useRef)(),O=(0,r.useState)({activeIndex:n}),I=O[0],k=O[1],P=I.activeIndex,j=I.priorActiveIndex,T=r.Children.count(d)-1;(0,r.useEffect)((function(){if(f){var e=setInterval((function(){k(P<T?{activeIndex:P+1,priorActiveIndex:P}:{activeIndex:0,priorActiveIndex:P})}),f);return C.current=e,function(){clearTimeout(e)}}return function(){}}),[P,f,d,T]),(0,r.useEffect)((function(){return t&&t(P),function(){}}),[P]);var A=function(){P>=T||(clearInterval(C.current),k({activeIndex:P+1,priorActiveIndex:P}))},F=function(){P<=0||(clearInterval(C.current),k({activeIndex:P-1,priorActiveIndex:P}))},z=function(e){return function(){clearInterval(C.current),k({activeIndex:e,priorActiveIndex:P})}},M=m&&"selectors"!==m,R=m&&"arrows"!==m,S=w.carousel.icons.current,_=(0,i.ut)(w.carousel.icons.color||"control",w),N=[],B=r.Children.map(d,(function(e,n){var t;return N.push(r.createElement(c.z,{key:n,icon:r.createElement(S,{color:P===n?_:void 0}),onClick:z(n)})),n===P?void 0!==j&&(t={type:j<P?"slideLeft":"slideRight",size:"xlarge",duration:w.carousel.animation.duration}):t=n===j?{type:"fadeOut",duration:w.carousel.animation.duration}:{type:"fadeOut",duration:0},r.createElement(l.x,{fill:p,overflow:"hidden"},r.createElement(l.x,{fill:p,animation:t},e))})),G=w.carousel.icons.next,L=w.carousel.icons.previous,q=P>=T,J=P<=0;return r.createElement(s.N,{onLeft:F,onRight:A},r.createElement(u.K,h({guidingChild:P,fill:p},y),B,r.createElement(l.x,{tabIndex:"0",focus:E,onFocus:function(e){b(!0),v&&v(e)},onBlur:function(e){b(!1),g&&g(e)},fill:!0,direction:"row",justify:"between"},M&&r.createElement(c.z,{fill:"vertical",icon:r.createElement(L,{color:(0,i.ut)(J?w.carousel.disabled.icons.color:w.carousel.icons.color,w)}),plain:!0,disabled:J,onClick:F,hoverIndicator:!0}),R&&r.createElement(l.x,{justify:"end",fill:!M&&"horizontal"},r.createElement(l.x,{direction:"row",justify:"center"},N)),M&&r.createElement(c.z,{fill:"vertical",icon:r.createElement(G,{color:(0,i.ut)(q?w.carousel.disabled.icons.color:w.carousel.icons.color,w)}),plain:!0,disabled:q,onClick:A,hoverIndicator:!0}))))};f.defaultProps={initialChild:0,controls:!0},Object.setPrototypeOf(f.defaultProps,o.l),f.displayName="Carousel";var d=f,m=t(9516),p=t(8169),v=t(6354),g=t(733),y=t(5444),w=t(1524),x=(t.p,t.p+"static/council_img-8279d4182738fe9f5a8b55ff5d68f1af.jpg"),E=function(){return r.createElement(y.StaticQuery,{query:"3115322152",render:function(e){return r.createElement(w.Z,{showHeader:!0,showRegisterButton:!0},r.createElement(l.x,{forwadedAs:"section",height:"medium",overflow:"hidden",background:"dark-1",pad:"medium",fill:"horizontal"},r.createElement(d,{fill:!0,controls:"arrows",play:8e3},e.allTestimonialsJson.nodes.map((function(e){return r.createElement(l.x,{key:e.id,width:"medium",alignSelf:"center"},r.createElement(m.n,{margin:{left:"28px",right:"28px"}},'"'+e.quote+'"'),r.createElement(p.x,{textAlign:"end",margin:{left:"28px",right:"28px"}},"~ "+e.author))})))),r.createElement(l.x,{forwardedAs:"section",pad:"medium"},r.createElement(v.X,{level:"3"},"Our Story"),r.createElement(l.x,{width:"medium",height:"medium",pad:"none",margin:"none"},r.createElement(g.E,{src:x,fit:"cover",pad:"none",margin:"none"})),r.createElement(m.n,{fill:!0},"When the Ohio Church of God Men's ministry began in 1976, the\n              members had a vision for all men in Ohio. They would seek to live\n              out the message and ministry of reconciliation through corporate\n              fellowship and mission by the grace of God. For many years, the\n              men's ministry hosted a spiritual retreat known as the Ohio\n              Men’s Ox Roast. Today, the fellowship, mission, and retreat\n              continue as the Ohio Christian Men's Fellowship."),r.createElement(m.n,{fill:!0},"The Ohio Christian Men's Fellowship is an event, in which\n              Christian men gather to engage in fellowship with one another.\n              This event has many different activities that younger and older\n              men can enjoy. The event is broken into two days of activities\n              with cabin accommodations included. Friday is the lighter of the\n              two days and offers a more relaxed schedule. The highlights of\n              Friday include the annual fishing tournament and the evening\n              bonfire and hotdog roast. Saturday has a packed schedule that\n              includes: three meals, devotional sessions, a sermon from an\n              accomplished Christian speaker, worship with professional\n              musicians, athletic tournaments, and loads of recreational\n              activities such as hiking, fishing, horseshoes, and cornhole. The\n              Ohio Christian Men's Fellowship is a time for men to grow in\n              their faith, meet and fellowship with brothers in Christ, and\n              invite others in your life to experience the love of Jesus Christ."),r.createElement(m.n,{fill:!0},"Through the Ohio Christian Men's Fellowship, Christian men\n              across the state of Ohio have raised money for ministry outreach\n              and challenged countless numbers of men and boys to serve the\n              Lord. The OCGM council meets multiple times per year, under\n              President Lance Rose, to plan the annual retreat and to continue\n              the fellowship.")))}})}}}]);
//# sourceMappingURL=component---src-pages-index-js-d7397b1900164e378602.js.map