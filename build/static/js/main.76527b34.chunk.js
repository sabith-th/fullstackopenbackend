(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),u=n(4),s=n(2),i=function(e){var t=e.onChange;return a.a.createElement("div",null,"search: ",a.a.createElement("input",{onChange:t}))},l=function(e){var t=e.notification,n=t.message,r=t.status;return a.a.createElement("div",{className:"success"===r?"success":"error"},a.a.createElement("p",null,n))},f=n(15);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=function(e){var t=e.addNewContact,n=e.persons,o=e.updateContact,c=Object(r.useState)(""),u=Object(s.a)(c,2),i=u[0],l=u[1],m=Object(r.useState)(""),d=Object(s.a)(m,2),b=d[0],v=d[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r,a=(r=i,n.find((function(e){return e.name.toLowerCase()===r.toLowerCase()})));a?window.confirm("Update ".concat(i," contact info?"))&&o(a.id,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a,{number:b})):t(i,b);l(""),v("")}},a.a.createElement("div",null,"name:"," ",a.a.createElement("input",{value:i,onChange:function(e){return l(e.target.value)}})),a.a.createElement("div",null,"phone:"," ",a.a.createElement("input",{value:b,onChange:function(e){return v(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},d=function(e){var t=e.person,n=e.onDelete;return a.a.createElement("div",null,t.name," ",t.number,a.a.createElement("button",{onClick:function(){window.confirm("Are you sure you want to delete ".concat(t.name,"?"))&&n(t)}},"Delete Contact "))},b=function(e){var t=e.persons,n=e.onDelete;return a.a.createElement("div",null,function(e){return e.map((function(e){return a.a.createElement(d,{key:e.id,person:e,onDelete:n})}))}(t))},v=n(3),h=n.n(v),O=function(){return h.a.get("/api/persons").then((function(e){return e.data}))},E=function(e){return h.a.post("/api/persons",e).then((function(e){return e.data}))},j=function(e){return h.a.delete("".concat("/api/persons","/").concat(e))},g=function(e,t){return h.a.put("".concat("/api/persons","/").concat(e),t).then((function(e){return e.data}))},w=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(null),f=Object(s.a)(c,2),p=f[0],d=f[1],v=Object(r.useState)(null),h=Object(s.a)(v,2),w=h[0],y=h[1];Object(r.useEffect)((function(){O().then((function(e){return o(e)}))}),[]);var C=function(e,t){y({message:e,status:t}),setTimeout((function(){y(null)}),3e3)};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),null!==w?a.a.createElement(l,{notification:w}):null,a.a.createElement(i,{onChange:function(e){var t=n.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));d(Object(u.a)(t))}}),a.a.createElement(m,{addNewContact:function(e,t){E({name:e,number:t}).then((function(t){o([].concat(Object(u.a)(n),[t])),C("".concat(e," added to contact"),"success")})).catch((function(e){400===e.response.status?C(e.response.data.error,"error"):console.error(e)})),d(null)},persons:n,updateContact:function(e,t){g(e,t).then((function(r){o(n.map((function(t){return t.id!==e?t:r}))),C("".concat(t.name," contact info updated"),"success")})).catch((function(e){400===e.response.status?C(e.response.data.error,"error"):console.error(e)})),d(null)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(b,{persons:null!==p?p:n,onDelete:function(e){var t=e.id,r=e.name;j(t).then((function(e){204===e.status&&(o(n.filter((function(e){return e.id!==t}))),C("".concat(r," deleted from contact"),"success"))})).catch((function(e){404===e.response.status?(C("".concat(r," contact details not found on server"),"error"),o(n.filter((function(e){return e.id!==t})))):400===e.response.status?C(e.response.data.error,"error"):console.error(e)}))}}))};n(38);c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.76527b34.chunk.js.map