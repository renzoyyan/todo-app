(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),s=c(9),a=c.n(s),i=(c(8),c(2)),l=c(7),r=c(0),d=function(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(l.a)(t))+1},j=function(e){var t=e.todos,c=e.setTodos,o=Object(n.useState)(""),s=Object(i.a)(o,2),a=s[0],j=s[1];return Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("div",{className:"checkbox-wrapper",children:Object(r.jsx)("span",{className:"checkbox"})}),Object(r.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),a){var n={id:d(t),content:a.trim(),completed:!1};c([n].concat(Object(l.a)(t))),j("")}},children:[Object(r.jsx)("label",{children:"Add Todo"}),Object(r.jsx)("input",{type:"text",name:"todo-input",id:"todo-input",className:"todo-input",value:a,placeholder:"Create new todo...",onChange:function(e){j(e.target.value)}}),Object(r.jsx)("button",{id:"submitNewTodo",type:"submit",children:"Add"})]})]})},b=function(){return Object(r.jsxs)("footer",{children:[Object(r.jsxs)("p",{children:["Challenge by",Object(r.jsx)("a",{href:"https://www.frontendment.io",children:"Frontend Mentor"})]}),Object(r.jsx)("span",{children:"|"}),Object(r.jsxs)("p",{children:["Coded by",Object(r.jsx)("a",{href:"renzoyyan.github.io/portfolio",children:"Renz Vallinas"})]})]})},u=c.p+"static/media/icon-moon.6c03114b.svg",m=c.p+"static/media/icon-sun.910b1f9a.svg",h=function(e){var t=e.theme,c=e.setTheme,n=t?m:u;return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{children:"Todo"}),Object(r.jsx)("button",{className:"btn",onClick:function(){c(!t)},children:Object(r.jsx)("img",{src:n,alt:"Theme"})})]})},p=function(e){var t=e.filterStatus,c=e.setFilterStatus,n=function(e){c(e)};return Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{className:"all"===t?"btn active":"btn",onClick:function(){return n("all")},children:"All"}),Object(r.jsx)("button",{className:"active"===t?"btn active":"btn",onClick:function(){return n("active")},children:"Active"}),Object(r.jsx)("button",{className:"completed"===t?"btn active":"btn",onClick:function(){return n("completed")},children:"Completed"})]})},O=c(4),f=c.p+"static/media/icon-check.a8fb15d0.svg",x=function(e){var t=e.todo,c=e.todos,o=e.setTodos,s=Object(n.useState)(t),a=Object(i.a)(s,2),l=a[0],d=a[1],j=l.completed?"completed":"",b=l.completed?Object(r.jsx)("img",{src:f,alt:"Complete"}):"",u=function(){d(Object(O.a)(Object(O.a)({},l),{},{completed:!l.completed}));var e=c.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{completed:!e.completed}):e}));o(e)};return Object(r.jsxs)("li",{className:j,children:[Object(r.jsx)("input",{type:"checkbox",id:"todo-".concat(t.id),className:"input-checkbox",defaultChecked:l.completed}),Object(r.jsx)("label",{htmlFor:"todo-".concat(t.id),children:"Complete the Javascript course"}),Object(r.jsx)("div",{className:"checkbox-wrapper",children:Object(r.jsx)("span",{className:"checkbox",onClick:u,children:b})}),Object(r.jsx)("p",{onClick:u,children:t.content})]})},v=function(e){var t=e.todos,c=e.setTodos,o=e.filterTodo,s=e.filterStatus,a=e.setFilterStatus,l=Object(n.useState)(0),d=Object(i.a)(l,2),j=d[0],b=d[1];Object(n.useEffect)((function(){var e=t.filter((function(e){return!e.completed}));b(e.length)}),[t]);var u="completed"===s?"completed task":"task";return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"todo-list-section",children:[o.length<1?Object(r.jsxs)("p",{className:"text",children:["There's no ",u]}):Object(r.jsx)("ul",{className:"todo-list",children:o.map((function(e){return Object(r.jsx)(x,{todo:e,todos:t,setTodos:c},e.id)}))}),Object(r.jsxs)("div",{className:"todo-filter-control",children:[Object(r.jsxs)("div",{className:"todo-left",children:[j," ",0!==j?"items":"item"," left"]}),Object(r.jsx)("div",{className:"filter-control-desktop",children:Object(r.jsx)(p,{filterStatus:s,setFilterStatus:a})}),Object(r.jsx)("div",{className:"todo-clear-complete",children:Object(r.jsx)("button",{className:"btn",onClick:function(){c(t.filter((function(e){return!e.completed}))),a("all")},children:"Clear completed"})})]})]}),Object(r.jsx)("section",{className:"filter-control-mobile",children:Object(r.jsx)(p,{filterStatus:s,setFilterStatus:a})})]})},N=[{id:1,content:"Complete online JavaScript course",completed:!0},{id:2,content:"Jog around the park 3x",completed:!1},{id:3,content:"10 minutes meditation",completed:!1},{id:4,content:"Read for 1 hour",completed:!1}];var k=function(){var e=Object(n.useState)(N),t=Object(i.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(!0),a=Object(i.a)(s,2),l=a[0],d=a[1],u=Object(n.useState)("all"),m=Object(i.a)(u,2),p=m[0],O=m[1],f=Object(n.useState)(c),x=Object(i.a)(f,2),k=x[0],g=x[1],S=l?"dark":"light";return Object(n.useEffect)((function(){!function(){switch(p){case"active":return g(c.filter((function(e){return!e.completed})));case"completed":return g(c.filter((function(e){return e.completed})));default:g(c)}}()}),[c,p]),Object(r.jsxs)("div",{className:"wrapper ".concat(S),children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(h,{theme:l,setTheme:d}),Object(r.jsxs)("main",{children:[Object(r.jsx)(j,{todos:c,setTodos:o}),Object(r.jsx)(v,{todos:c,setTodos:o,filterTodo:k,filterStatus:p,setFilterStatus:O})]})]}),Object(r.jsx)(b,{})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),o(e),s(e),a(e)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),g()},8:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.95d30914.chunk.js.map