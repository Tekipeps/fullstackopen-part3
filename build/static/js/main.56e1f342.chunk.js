(this.webpackJsonppart2e=this.webpackJsonppart2e||[]).push([[0],{17:function(e,n,t){e.exports=t(40)},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(15),u=t.n(c),o=t(16),l=t(2),i=t(4),m=t.n(i),d="/api/persons",f=function(){return m.a.get(d).then((function(e){return e.data}))},s=function(e){return m.a.post(d,e).then((function(e){return e.data}))},h=function(e){return m.a.delete("".concat(d,"/").concat(e)).then((function(e){return e}))},b=function(e,n){return m.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.newFilter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with"," ",r.a.createElement("input",{value:n,onChange:t}))},E=function(e){var n=e.newName,t=e.newNumber,a=e.handleNameChange,c=e.handleNumberChange,u=e.handleSubmit;return r.a.createElement("form",{onSubmit:u},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},v=function(e){var n=e.filtered,t=e.handleDelete;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e)}},"delete"))})))},w=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:t},n)},g=function(){var e=Object(a.useState)(null),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),m=i[0],d=i[1],g=Object(a.useState)(""),C=Object(l.a)(g,2),j=C[0],O=C[1],N=Object(a.useState)(""),S=Object(l.a)(N,2),y=S[0],k=S[1],F=Object(a.useState)(null),L=Object(l.a)(F,2),D=L[0],I=L[1],J=Object(a.useState)(""),T=Object(l.a)(J,2),x=T[0],A=T[1],B=t?t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})):[];Object(a.useEffect)((function(){f().then((function(e){c(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:D,type:x}),r.a.createElement(p,{newFilter:y,handleFilterChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(E,{newName:m,newNumber:j,handleNameChange:function(e){d(e.target.value)},handleNumberChange:function(e){O(e.target.value)},handleSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name.toLowerCase()===m.toLowerCase()}));n?window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))&&b(n.id,{name:m,number:j}).then((function(e){c(t.map((function(n){return n.id!==e.id?n:e}))),A("success"),I("Changed ".concat(n.name))})).catch((function(e){return console.log(e)})):s({name:m.trim(),number:j.trim()}).then((function(e){c([].concat(Object(o.a)(t),[e])),A("success"),I("Added ".concat(e.name))})).catch((function(e){A("error"),I("".concat(e.response.data.error))}));d(""),O(""),setTimeout((function(){I(null)}),4e3)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{filtered:B,handleDelete:function(e){window.confirm("delete ".concat(e.name,"?"))&&h(e.id).then((function(n){c(t.filter((function(n){return n.id!==e.id})))})).catch((function(n){A("error"),I("Information of ".concat(e.name," has already been removed from the server")),c(t.filter((function(n){return n.id!==e.id})))})),setTimeout((function(){I(null)}),4e3)}}))};t(39);u.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.56e1f342.chunk.js.map