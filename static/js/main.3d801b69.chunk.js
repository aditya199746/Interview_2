(this.webpackJsonpinterview_2=this.webpackJsonpinterview_2||[]).push([[0],{27:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(17),i=c.n(r),a=(c(42),c(43),c(12)),j=(c(27),c(88)),h=c(89),o=c(23),b=c(90),u=c(2),l=function(e){var t=Object(n.useState)("show"),c=Object(a.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)("hide"),l=Object(a.a)(i,2),d=l[0],O=l[1];return Object(u.jsxs)(h.a,{children:[Object(u.jsxs)(b.a,{children:[Object(u.jsx)("th",{children:"Cutomer Name"}),Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Phone"}),Object(u.jsx)("th",{children:"Primium"}),Object(u.jsx)("th",{children:Object(u.jsx)(j.a,{onClick:function(e){r("show"===s?"hide":"show"),O("hide"===d?"show":"hide")},children:"Max/Min bids"})})]}),e.map((function(e,t){var c=0,n=999999999;return e.bids.map((function(e,t){var s=e.amount;return s>c&&(c=s),n>s&&(n=s),t})),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)(o.b,{to:"/bid",children:Object(u.jsxs)("td",{className:"color",children:[Object(u.jsxs)("div",{children:[e.firstname," ",e.lastname," "]}),Object(u.jsx)("img",{src:e.avatarUrl})]})}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:e.hasPremium.toString()}),Object(u.jsxs)("td",{children:[Object(u.jsx)("i",{className:"".concat(s),children:c})," ",Object(u.jsx)("i",{className:"".concat(d),children:n})]})]},t)})}))]})};var d=function(){for(var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(1),i=Object(a.a)(r,2),j=i[0],h=i[1],o=Object(n.useState)(5),b=Object(a.a)(o,2),d=b[0],O=(b[1],function(e){h(Number(e.target.id))}),m=[],x=1;x<Math.ceil(c.length/d);x++)m.push(x);var f=j*d,p=f-d,v=c.slice(p,f),g=m.map((function(e){return Object(u.jsx)("li",{id:e,onClick:O,className:j===e?"active":null,children:e},e)}));return Object(n.useEffect)((function(){fetch("https://intense-tor-76305.herokuapp.com/merchants").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[c]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("ul",{className:"pageNumber",children:[" ",g]}),l(v)]})},O=c(36),m=c.n(O);var x=function(){var e=Object(n.useState)({}),t=Object(a.a)(e,2),c=(t[0],t[1]),s=Object(n.useState)(1),r=Object(a.a)(s,2),i=r[0];return r[1],Object(n.useEffect)((function(){m.a.get("https://intense-tor-76305.herokuapp.com/merchants/".concat(i)).then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[i]),Object(u.jsx)(u.Fragment,{children:"All data"})},f=c(4);var p=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(f.c,{children:[Object(u.jsx)(f.a,{path:"/bids",component:x}),Object(u.jsx)(f.a,{path:"/",component:d})]})})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.3d801b69.chunk.js.map