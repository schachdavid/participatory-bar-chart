(this["webpackJsonpparticipatory-bar-chart"]=this["webpackJsonpparticipatory-bar-chart"]||[]).push([[0],{26:function(e,t,n){e.exports={container:"Switcher_container__2qgde",buttonContainer:"Switcher_buttonContainer__tuUOc",selected:"Switcher_selected__1qMfi"}},35:function(e,t,n){e.exports={container:"app_container__2JKVN",switcherContainer:"app_switcherContainer__3HaV7",main:"app_main__2Gv1F"}},36:function(e,t,n){e.exports={container:"Block_container__ZIUlk",block:"Block_block__3GIao",label:"Block_label__36EjM"}},37:function(e,t,n){e.exports={bar:"InteractiveBars_bar__1EexN",ghostBar:"InteractiveBars_ghostBar__29KCi"}},39:function(e,t,n){e.exports={container:"ChartPresenter_container__3q4HM",title:"ChartPresenter_title__2kJKD"}},42:function(e,t,n){e.exports={bar:"Bars_bar__1xEPI"}},43:function(e,t,n){e.exports={line:"BoxPlot_line__1FYpY"}},44:function(e,t,n){e.exports={container:"InteractiveBarChart_container__2QaEl",toolsContainer:"InteractiveBarChart_toolsContainer__2qo98"}},50:function(e,t,n){e.exports={line:"Line_line__38vbU"}},51:function(e,t,n){e.exports={tick:"XAxis_tick__cA7Dh"}},53:function(e,t,n){e.exports={tick:"YAxis_tick__1TPev"}},63:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(48),r=n.n(i),s=(n(63),n(5)),o=n(9),l=n(75),b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join(" ")},d=function(e,t,n){var a=Object(l.a)(n,t);return[Math.max.apply(Math,Object(o.a)(e||[]).concat(Object(o.a)(a))),Math.min.apply(Math,Object(o.a)(e||[]).concat(Object(o.a)(a)))]},u=n(39),h=n.n(u),j=n(0),O=function(e){var t=e.children,n=e.title,a=e.className;return Object(j.jsxs)("div",{className:b(h.a.container,a),children:[n&&Object(j.jsx)("h2",{className:h.a.title,children:n}),t]})},f=n(26),m=n.n(f),g=function(e){var t=e.options,n=Object(a.useState)(0),c=Object(s.a)(n,2),i=c[0],r=c[1];return Object(j.jsx)("div",{className:m.a.container,children:t.map((function(e,t){return Object(j.jsx)("div",{className:i===t?b(m.a.selected,m.a.buttonContainer):b(m.a.buttonContainer),children:Object(j.jsx)("button",{onClick:function(){r(t),e.onClick&&e.onClick()},children:e.label})},t)}))})},x=n(8),p=n(82),y=n(81),v=function(e){e.data;var t=e.getX,n=e.getY,i=e.scaleY,r=e.children,o=e.height,l=void 0===o?200:o,b=e.width,d=void 0===b?600:b,u=e.margin,h=void 0===u?[30,30,45,70]:u,O=Object(a.useState)([0,0]),f=Object(s.a)(O,2),m=f[0],g=f[1],v=Object(a.useState)(),_=Object(s.a)(v,2),k=_[0],w=_[1],S=Object(a.useMemo)((function(){return Object(p.a)().domain(k||[0,0]).range([0,d])}),[d,k]),C=Object(a.useMemo)((function(){return i||Object(y.a)().domain(m||[0,0]).range([0,l]).nice()}),[i,l,m]);return Object(j.jsx)("svg",{height:h[0]+l+h[2],width:h[3]+d+h[1],children:Object(j.jsxs)("g",{transform:"translate(".concat(h[3],", ").concat(h[0],")"),children:[c.a.Children.map(r,(function(e){return c.a.cloneElement(e,Object(x.a)({height:l,width:d,getX:t,getY:n,scaleX:S,scaleY:C,xExtent:k,setXExtent:w,yExtent:m,setYExtent:g},e.props))})),")"]})})},_=(n(85),n(50),n(13)),k=n(42),w=n.n(k),S=n(80),C=["barWidth"],I=function(e){var t=e.barWidth,n=Object(_.a)(e,C),c=n.className,i=n.data,r=n.height,s=n.width,o=n.getX,l=n.getY,u=n.scaleY,h=n.setYExtent,O=n.showTicks;Object(a.useEffect)((function(){h((function(e){return d(e,l,i)}))}),[i,l,h]);var f=Object(a.useMemo)((function(){return Object(S.a)().domain(i.map(o)).range([0,s]).paddingInner(.2)}),[i,o,s]),m=Object(a.useMemo)((function(){if(O){var e=u.ticks(5);return Object(j.jsxs)("mask",{id:"tickLines",children:[Object(j.jsx)("rect",{x:"0",y:"0",width:2*s,height:2*r,fill:"white"}),e.map((function(e,t){return Object(j.jsx)("g",{transform:"translate(0,".concat(u(e),")"),children:Object(j.jsx)("line",{stroke:"black",x1:0,x2:2*s,y1:0,y2:0,className:w.a.tick},t)},e)}))]})}}),[r,u,O,s]);return Object(j.jsxs)("g",{children:[m,Object(j.jsx)("g",{mask:O&&"url(#tickLines)",children:i.map((function(e){var n=u.range()[1]-u(l(e));return Object(j.jsxs)("g",{transform:"translate(".concat(f(o(e))+10,",").concat(u(u.domain()[1])-n,")"),children:[Object(j.jsx)("rect",{className:b(w.a.bar,c),height:n,width:t||f.bandwidth(),x:t?f.bandwidth()/2-t/2:null}),Object(j.jsx)("text",{textAnchor:"middle",alignmentBaseline:"central",x:f.bandwidth()/2,y:n+20,children:o(e)})]},o(e))}))})]})},N=(n(51),n(49),n(52),n(53)),B=n.n(N),Y=["className","showTicks"],M=function(e){e.className;var t=e.showTicks,n=void 0===t||t,c=Object(_.a)(e,Y),i=c.scaleX,r=c.scaleY,s=Object(a.useMemo)((function(){return r.ticks(5)}),[r]);return Object(j.jsx)("g",{transform:"translate(".concat(i.range()[0]-10,", 0)"),children:s.map((function(e){return Object(j.jsxs)("g",{transform:"translate(0,".concat(r(e),")"),children:[Object(j.jsx)("text",{x:-6,textAnchor:"end",alignmentBaseline:"central",children:e}),n&&Object(j.jsx)("line",{x1:0,x2:5,y1:0,y2:0,className:B.a.tick})]},e)}))})},E=(n(43),{title:"Global annual CO\u2082 emissions",yAxisLabel:"billion tons CO\u2082",xKey:"label",yKey:"emission",data:[{label:"1950",emission:60},{label:"1965",emission:110.32},{label:"1980",emission:190.49},{label:"1995",emission:230.45},{label:"2010",emission:330.34}]}),X=n(35),T=n.n(X),K=n(16),D=n(79),z=n(54),A=n.n(z),W=n(44),L=n.n(W);var P=n(83),F="block",G=n(36),q=n.n(G),J=function(e){var t=e.scaledSize,n=e.height,a=e.size,c=e.label,i=Object(P.a)((function(){return{type:F,item:{height:n,width:t},end:function(e,t){var n=t.getDropResult();console.log("dropped",n)},collect:function(e){return{isDragging:e.isDragging(),handlerId:e.getHandlerId()}}}})),r=Object(s.a)(i,2),o=r[0].isDragging,l=r[1];return Object(j.jsxs)("div",{className:q.a.container,style:{height:n},children:[Object(j.jsx)("div",{ref:l,className:q.a.block,style:{width:t,cursor:o?"grabbing":"grab"}}),c&&Object(j.jsx)("span",{className:q.a.label,children:"".concat(a," ").concat(c)})]})},H=n(78),U={position:"fixed",pointerEvents:"none",zIndex:1e3,left:0,top:0,width:"100%",height:"100%"};function R(e,t){if(!e||!t)return{display:"none"};var n=t.x,a=t.y,c="translate(".concat(n,"px, ").concat(a,"px)");return{transform:c,WebkitTransform:c}}var V=function(e){var t=Object(H.a)((function(e){return{item:e.getItem(),itemType:e.getItemType(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}})),n=t.itemType,a=t.isDragging,c=t.item,i=t.initialOffset,r=t.currentOffset;return a?(document.body.style.cursor="grabbing",Object(j.jsx)("div",{style:U,children:Object(j.jsx)("div",{style:R(i,r,e.snapToGrid),children:n===F?Object(j.jsx)("div",{style:{height:c.height,width:c.width,backgroundColor:"black",boxShadow:"5px 5px 15px 5px rgba(0,0,0,0.25)"}}):null})})):(document.body.style.cursor="auto",null)},Q=n(37),Z=n.n(Q),$=n(84),ee=["barWidth","items","setItems"],te=.5,ne=function(e){var t=e.className,n=e.barWidth,a=e.scaleX,c=e.height,i=e.yShift,r=e.removeItem,o=Object(P.a)((function(){return{type:F,item:function(){return r(),{height:c,width:n}},end:function(e,t){var n=t.getDropResult();console.log("dropped",n)}}}),[r]),l=Object(s.a)(o,2)[1];return Object(j.jsx)("rect",{ref:l,className:b(Z.a.bar,t),style:{cursor:"grab"},height:c-1,width:n||a.bandwidth(),x:n?a.bandwidth()/2-n/2:null,y:-i-te})},ae=function(e){var t=e.x,n=e.scaleX,a=e.scaleY,c=e.barWidth,i=e.className,r=e.items,l=e.addItem,d=e.removeItem,u=Object($.a)((function(){return{accept:F,drop:function(e){return l(e.height,t)},collect:function(e){return{isOver:e.isOver(),item:e.getItem()}}}}),[l]),h=Object(s.a)(u,2),O=h[0],f=O.item,m=O.isOver,g=h[1],x=r.reduce((function(e,a,r){var s=e.yShift+a;return{yShift:s,renderedBlocks:[].concat(Object(o.a)(e.renderedBlocks),[Object(j.jsx)(ne,{className:i,barWidth:c,height:a,scaleX:n,yShift:s,removeItem:function(){console.log("ren"),d(r,t)}},r)])}}),{yShift:0,renderedBlocks:[]});return Object(j.jsxs)("g",{transform:"translate(".concat(n(t)+10,",0)"),children:[Object(j.jsx)("rect",{ref:g,height:a.range()[1],width:n.paddingInner(0).bandwidth(),fill:"rgba(0,0,0,0)"}),Object(j.jsxs)("g",{transform:"translate(0,".concat(a(a.domain()[1]),")"),children:[x.renderedBlocks,m&&f&&Object(j.jsx)("rect",{className:b(Z.a.bar,Z.a.ghostBar,i),height:f.height-1,width:c||n.bandwidth(),x:c?n.bandwidth()/2-c/2:null,y:-x.yShift-te-f.height}),Object(j.jsx)("text",{textAnchor:"middle",alignmentBaseline:"central",x:n.bandwidth()/2,y:20,children:t})]},t)]})},ce=function(e){var t=e.barWidth,n=e.items,c=e.setItems,i=Object(_.a)(e,ee),r=i.className,s=i.data,l=i.width,b=i.getX,u=i.getY,h=i.scaleY,O=i.setYExtent;i.showTicks;Object(a.useEffect)((function(){O((function(e){return d(e,u,s)}))}),[s,u,O]);var f=Object(a.useMemo)((function(){return Object(S.a)().domain(s.map(b)).range([0,l]).paddingInner(.2)}),[s,b,l]),m=function(e,t){return c(Object(x.a)(Object(x.a)({},n),{},Object(K.a)({},t,[].concat(Object(o.a)(n[t]),[e]))))},g=function(e,t){c(Object(x.a)(Object(x.a)({},n),{},Object(K.a)({},t,[].concat(Object(o.a)(n[t].slice(0,e)),Object(o.a)(n[t].slice(e+1))))))};return Object(j.jsx)("g",{children:Object.keys(n).map((function(e){return Object(j.jsx)(ae,{x:e,scaleX:f,scaleY:h,barWidth:t,className:r,items:n[e],addItem:m,removeItem:g},e)}))})},ie=function(e){var t=e.config,n=Object(a.useState)(t.data.reduce((function(e,n){return Object(x.a)(Object(x.a)({},e),{},Object(K.a)({},n[t.xKey],[]))}),{})),c=Object(s.a)(n,2),i=c[0],r=c[1],b=function(e){return Object(a.useMemo)((function(){var t=Object(l.a)(e.data,(function(t){return t[e.yKey]})),n=e.data.reduce((function(t,n){return t+n[e.yKey]}),0)/20,a=Math.round(n).toString().length,c=1/Math.pow(10,a-1),i=n*c,r=[1,2.5,5,10].reduce((function(e,t){return Math.abs(t-i)<Math.abs(e-i)?t:e})),s=r*(1/c);return console.log({rawBlocksize:n,scaleBlock:c,scaledBlockSize:i,closestBorder:r,blockSize:s}),{minY:0,maxY:t[1],blockSize:s}}),[e])}(t),d=b.maxY,u=b.minY,h=b.blockSize,f=Object(a.useMemo)((function(){return Object(y.a)().domain([d,u]).range([0,200]).nice()}),[d,u]),m=f.range()[1]-f(h);return Object(j.jsx)(D.a,{backend:A.a,children:Object(j.jsxs)("div",{className:L.a.container,children:[Object(j.jsx)(O,{title:t.title,children:Object(j.jsxs)(v,{getX:function(e){return e[t.xKey]},getY:function(e){return e[t.yKey]},height:200,width:400,scaleY:f,children:[Object(j.jsx)(ce,{data:t.data,barWidth:m,items:i,setItems:r}),Object(j.jsx)(M,{})]})}),Object(j.jsxs)(O,{className:L.a.toolsContainer,children:[Object(o.a)(Array(3).keys()).reduce((function(e,n){var a=m*Math.pow(2,n-1);return{yShift:e.yShift+a+15,items:[].concat(Object(o.a)(e.items),[Object(j.jsx)(J,{height:a,size:h*Math.pow(2,n-1),top:"".concat(e.yShift,"px"),scaledSize:m,padding:15,label:t.yAxisLabel})])}}),{yShift:0,items:[]}).items,Object(j.jsx)(V,{snapToGrid:!1})]})]})})};var re=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{className:T.a.container,children:[Object(j.jsx)("div",{className:T.a.switcherContainer,children:Object(j.jsx)(g,{options:[{label:"interactive",onClick:function(){return c(0)}},{label:"plane",onClick:function(){return c(1)}}]})}),Object(j.jsx)("main",{className:T.a.main,children:0===n?Object(j.jsx)(ie,{config:E}):Object(j.jsx)(O,{title:E.title,children:Object(j.jsxs)(v,{getX:function(e){return e[E.xKey]},getY:function(e){return e[E.yKey]},children:[Object(j.jsx)(I,{data:E.data}),Object(j.jsx)(M,{})]})})})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(re,{})}),document.getElementById("root")),se()}},[[67,1,2]]]);
//# sourceMappingURL=main.24e21eb5.chunk.js.map