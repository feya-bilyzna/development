(this["webpackJsonpfeya-bilyzna-front-end"]=this["webpackJsonpfeya-bilyzna-front-end"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var c,r,l=n(2),s=n.n(l),i=n(40),j=n.n(i),a=(n(64),n(65),n(22)),o=n(10),d=n(44),b=n(6),x=n(1),h=function(){return Object(x.jsx)(b.Card,{closeIcon:Object(x.jsx)(b.Icon,{children:"close"}),header:Object(x.jsx)(b.CardTitle,{image:"https://materializecss.com/images/sample-1.jpg",children:"Card Title"}),revealIcon:Object(x.jsx)(b.Icon,{children:"more_vert"}),children:"Here is the standard card with an image thumbnail."})},O=function(){return Object(x.jsxs)(b.Row,{children:[Object(x.jsx)(b.Col,{className:"teal red darken-1",xl:4,l:6,children:Object(x.jsx)(h,{})}),Object(x.jsx)(b.Col,{className:"teal darken-1",xl:4,l:6,children:Object(x.jsx)(h,{})}),Object(x.jsx)(b.Col,{className:"teal darken-1",xl:4,l:6,children:Object(x.jsx)(h,{})}),Object(x.jsx)(b.Col,{className:"teal darken-1",xl:4,l:6,children:Object(x.jsx)(h,{})}),Object(x.jsx)(b.Col,{className:"teal darken-1",xl:4,l:6,children:Object(x.jsx)(h,{})}),Object(x.jsx)(b.Col,{className:"teal darken-1",xl:4,l:6,children:Object(x.jsx)(h,{})})]})},u=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{"font-size":"calc(24px + 16 * (120vw / 1280))"},children:"\u0411\u0440\u0435\u043d\u0434\u044b"}),Object(x.jsx)(O,{})]})},p=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{"font-size":"calc(24px + 16 * (120vw / 1280))"},children:"\u0411\u044e\u0441\u0442\u0433\u0430\u043b\u044c\u0442\u0435\u0440\u044b"}),Object(x.jsx)(O,{})]})},m=n(32),g=n(130),v=n(132),f=function(e){var t,n=e.product;return Object(x.jsx)(b.Card,{closeIcon:Object(x.jsx)(b.Icon,{children:"close"}),header:Object(x.jsx)(b.CardTitle,{image:null===(t=n.images[0])||void 0===t?void 0:t.url,children:n.description}),revealIcon:Object(x.jsx)(b.Icon,{children:"more_vert"}),children:n.description})},y=function(e){var t=e.products;return Object(x.jsx)(b.Row,{children:t.map((function(e){return Object(x.jsx)(b.Col,{className:"teal darken-1",xl:4,l:6,children:Object(x.jsx)(f,{product:e},e.id)})}))})},C=function(){var e=Object(g.a)(c||(c=Object(m.a)(['\n    query MyQuery {\n             categoryProducts(categoryName: "\u0422\u0440\u0443\u0441\u0438\u043a\u0438") {\n                description\n                id\n                images {\n                  url           \n                }\n            }\n    }\n']))),t=Object(v.a)(e),n=t.loading,r=t.error,l=t.data;return n?Object(x.jsx)("p",{children:"Loading..."}):r?Object(x.jsx)("p",{children:"Error"}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{"font-size":"calc(24px + 16 * (120vw / 1280))"},children:"\u0422\u0440\u0443\u0441\u0438\u043a\u0438"}),Object(x.jsx)(y,{products:l.categoryProducts})]})},I=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{"font-size":"calc(24px + 16 * (120vw / 1280))"},children:"\u0420\u0430\u0441\u043f\u0440\u043e\u0434\u0430\u0436\u0430"}),Object(x.jsx)(O,{})]})},k=function(){var e=Object(g.a)(r||(r=Object(m.a)(['\n    query MyQuery {\n             categoryProducts(categoryName: "\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0435") {\n                description\n                id\n                images {\n                  url           \n                }\n            }\n    }\n']))),t=Object(v.a)(e),n=t.loading,c=t.error,l=t.data;return n?Object(x.jsx)("p",{children:"Loading..."}):c?Object(x.jsx)("p",{children:"Error"}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{"font-size":"calc(24px + 16 * (120vw / 1280))"},children:"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0435 \u0431\u0435\u043b\u044c\u0435"}),Object(x.jsx)(y,{products:l.categoryProducts})]})},N=[{route:"/brands",menuItem:"\u0411\u0440\u0435\u043d\u0434\u044b",component:Object(x.jsx)(u,{})},{route:"/bras",menuItem:"\u0411\u044e\u0441\u0442\u0433\u0430\u043b\u044c\u0442\u0435\u0440\u044b",component:Object(x.jsx)(p,{})},{route:"/knickers",menuItem:"\u0422\u0440\u0443\u0441\u0438\u043a\u0438",component:Object(x.jsx)(C,{})},{route:"/sale",menuItem:"\u0420\u0430\u0441\u043f\u0440\u043e\u0434\u0430\u0436\u0430",component:Object(x.jsx)(I,{})},{route:"/shapewear",menuItem:"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0435 \u0431\u0435\u043b\u044c\u0451",component:Object(x.jsx)(k,{})}],w=n(4),z=n.n(w);b.Navbar.propTypes=Object(d.a)(Object(d.a)({},b.Navbar.propTypes),{},{alignLinks:z.a.oneOf(["right sidenav-close"])});var T=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(b.Navbar,{brand:Object(x.jsx)("a",{className:"brand-logo",href:"/",children:"Logo"}),centerChildren:!0,id:"mobile-nav",menuIcon:Object(x.jsx)(b.Icon,{children:"menu"}),alignLinks:"right sidenav-close",sidenav:Object(x.jsxs)(x.Fragment,{children:[N.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(a.b,{to:e.route,children:e.menuItem})},e.route)})),Object(x.jsx)("li",{children:Object(x.jsx)(a.b,{to:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]}),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0,closeOnClick:!0},children:[Object(x.jsx)(b.Dropdown,{id:"Dropdown_6",options:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!1,container:null,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250},trigger:Object(x.jsxs)("a",{href:"#!",children:["\u0412\u0441\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"," "]}),children:N.map((function(e){return Object(x.jsx)(a.b,{to:e.route,children:e.menuItem},e.route)}))}),Object(x.jsx)(a.b,{to:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})})},P=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{"font-size":"calc(24px + 16 * (120vw / 1280))"},children:"\u0413\u0440\u0443\u043f\u043f\u044b \u0442\u043e\u0432\u0430\u0440\u043e\u0432:"}),Object(x.jsx)(O,{})]})})},F=function(){return Object(x.jsxs)(b.Collapsible,{accordion:!0,popout:!0,children:[Object(x.jsx)(b.CollapsibleItem,{expanded:!1,header:"Telegram",node:"div",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b Telegram"}),Object(x.jsx)(b.CollapsibleItem,{expanded:!1,header:"Viber",node:"div",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b Viber"}),Object(x.jsx)(b.CollapsibleItem,{expanded:!1,header:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",node:"div",children:"\u0442\u0435\u043b. 000-000-00-00"}),Object(x.jsx)(b.CollapsibleItem,{expanded:!1,header:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",node:"div",children:"email feya_123456789@gmail.com"})]})},D=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{"font-size":"calc(24px + 16 * (120vw / 1280))"},children:"Contacts"}),Object(x.jsx)(F,{})]})},E=function(){return Object(x.jsx)(b.Footer,{links:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Instagram"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Facebook"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Google maps"})})]}),children:Object(x.jsx)("h5",{className:"grey-text text-lighten-4",children:"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0441\u043e\u0446 \u0441\u0435\u0442\u0438:"})})},L=function(e){var t=e.Page;return Object(x.jsx)("div",{className:"container",children:t})};var S=function(){var e=Object(x.jsxs)("div",{children:[Object(x.jsx)(T,{}),Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{path:"/",exact:!0,children:Object(x.jsx)(L,{Page:Object(x.jsx)(P,{})})}),Object(x.jsx)(o.b,{path:"/contacts",exact:!0,children:Object(x.jsx)(L,{Page:Object(x.jsx)(D,{})})}),N.map((function(e){return Object(x.jsx)(o.b,{path:e.route,exact:!0,children:Object(x.jsx)(L,{Page:e.component})},e.route)})),Object(x.jsx)(o.a,{to:"/"})]}),Object(x.jsx)(E,{})]});return Object(x.jsx)(a.a,{children:Object(x.jsx)("div",{children:e})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),l(e),s(e)}))},M=(n(113),n(129)),q=n(131),B=n(128),J=new M.a({uri:"https://feya-bilyzna.herokuapp.com/api",cache:new q.a});j.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(B.a,{client:J,children:Object(x.jsx)(S,{})})}),document.getElementById("root")),_()},64:function(e,t,n){},65:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.39e57805.chunk.js.map