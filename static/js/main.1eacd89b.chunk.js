(window["webpackJsonpdesafio-samba-tech"]=window["webpackJsonpdesafio-samba-tech"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),s=(t(9),t(1));t(10),t(11);function o(e){var a=e.callback,t=e.clickSearch,r=Object(n.useState)(""),l=Object(s.a)(r,2),o=l[0],i=l[1];return c.a.createElement("div",{className:"head-container"},c.a.createElement("img",{src:"assets/breaking_bad_logo.png",alt:"Breaking Bad",className:"title"}),c.a.createElement("form",{className:"search-container",action:""},c.a.createElement("input",{type:"text",id:"search-input",onChange:function(e){i(e.target.value),a(o),console.log(o)},value:o}),c.a.createElement("label",{htmlFor:"search-input",className:"search-bar"},"Pesquisar"),c.a.createElement("button",{className:"search-btn",onClick:t},"P")))}t(12),t(13);function i(e){var a=e.params,t=Object(n.useState)([]),r=Object(s.a)(t,2),l=r[0],o=r[1];return Object(n.useEffect)(function(){o(a)},[a]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"char-card"},c.a.createElement("img",{src:l.img,alt:"",className:"image"})),c.a.createElement("div",{className:"status-container "+l.status},l.status),c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-name"},l.name),c.a.createElement("div",{className:"info-birthday"},l.birthday),c.a.createElement("div",{className:"info-occupation"},l.occupation)))}function u(e){var a=e.listCharacter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"char-title"},"Personagens"),c.a.createElement("ul",{className:"char-list"},a.map(function(e){return c.a.createElement("div",{key:e.char_id,className:"char-item"},c.a.createElement(i,{params:e}))})))}t(14);function m(e){var a=e.pagesNumber,t=e.pageSel,r=e.callback,l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],u=o[1];return Object(n.useEffect)(function(){for(var e=[],t=1;t<=a;t++)e.push(t);u(e)},[a]),c.a.createElement("div",{className:"paginator-container"},i.map(function(e){return c.a.createElement("button",{key:e,onClick:function(){return r(e)}},c.a.createElement("span",{className:"paginator-number"+(a=e,t===a?" selected-page":"")},e));var a}))}t(15);function f(e){var a=e.listCharacter,t=e.filterValue;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"char-title"},"Personagens"),c.a.createElement("ul",{className:"char-list"},a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}).map(function(e){return c.a.createElement("div",{key:e.char_id,className:"char-item"},c.a.createElement(i,{params:e}))})))}var h="https://www.breakingbadapi.com/api/",b=12;function E(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(1),i=Object(s.a)(l,2),E=i[0],p=i[1],d=Object(n.useState)(""),g=Object(s.a)(d,2),v=g[0],j=g[1],N=Object(n.useState)(!1),O=Object(s.a)(N,2),k=O[0],S=O[1],w=Object(n.useState)([]),C=Object(s.a)(w,2),y=C[0],F=C[1];return Object(n.useEffect)(function(){fetch(h+"characters").then(function(e){return e.json()}).then(function(e){return r(1+e.length/b)}).catch(function(e){return console.log("An error ocourred"+e)})},[]),Object(n.useEffect)(function(){var e;e=(E-1)*b,fetch(h+"characters?limit=".concat(b,"&offset=").concat(e)).then(function(e){return e.json()}).then(function(e){return F(e)}).catch(function(e){return console.log("An error ocourred"+e)})},[E]),c.a.createElement("div",{className:"page"},c.a.createElement(o,{callback:j,clickSearch:function(){S(!0),fetch(h+"characters").then(function(e){return e.json()}).then(function(e){return F(e)}).catch(function(e){return console.log("An error ocourred"+e)})}}),k?c.a.createElement(f,{listCharacter:y,filterValue:v}):c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{listCharacter:y}),c.a.createElement(m,{pagesNumber:t,pageSel:E,callback:p})))}l.a.render(c.a.createElement(function(){return c.a.createElement(E,null)},null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.1eacd89b.chunk.js.map