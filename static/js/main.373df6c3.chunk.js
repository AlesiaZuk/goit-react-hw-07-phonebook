(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={contacts_item:"Contacts_contacts_item__1UcH3",contacts_text:"Contacts_contacts_text__2HXpc",contacts_button:"Contacts_contacts_button__224i5"}},22:function(t,e,n){t.exports={section:"Section_section__19U79",title:"Section_title__2garj"}},23:function(t,e,n){t.exports={filter_label:"Filter_filter_label__27KE4",filter_input:"Filter_filter_input__2_s7E"}},36:function(t,e,n){t.exports={section:"Loader_section__32nH6"}},67:function(t,e,n){},87:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(15),o=n.n(r),i=n(7),s=n(17),u=n(5),l=n(10),b=n(34),j=n.n(b),f=n(2),d=n(4),O=Object(u.b)("contact/filter"),p=n(8),m=n.n(p),_=n(18),h=n(12),x=n.n(h);x.a.defaults.baseURL="https://61ba224148df2f0017e5a92f.mockapi.io";var v,g,C,N=Object(u.c)("contact/fetchContacts",Object(_.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("/contacts");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),w=Object(u.c)("contact/addContact",function(){var t=Object(_.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post("/contacts",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),y=Object(u.c)("contact/deleteContact",function(){var t=Object(_.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("/contacts/".concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),k=Object(u.d)([],(v={},Object(f.a)(v,N.fulfilled,(function(t,e){return e.payload})),Object(f.a)(v,w.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(s.a)(t),[n])})),Object(f.a)(v,y.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),v)),A=Object(u.d)(!1,(g={},Object(f.a)(g,N.pending,(function(){return!0})),Object(f.a)(g,N.fulfilled,(function(){return!1})),Object(f.a)(g,N.rejected,(function(){return!1})),Object(f.a)(g,w.pending,(function(){return!0})),Object(f.a)(g,w.fulfilled,(function(){return!1})),Object(f.a)(g,w.rejected,(function(){return!1})),Object(f.a)(g,y.pending,(function(){return!0})),Object(f.a)(g,y.fulfilled,(function(){return!1})),Object(f.a)(g,y.rejected,(function(){return!1})),g)),z=Object(u.d)("",Object(f.a)({},O,(function(t,e){return e.payload}))),F=Object(u.d)(null,(C={},Object(f.a)(C,N.rejected,(function(t,e){var n=e.error;return console.log(n)})),Object(f.a)(C,N.pending,null),Object(f.a)(C,w.rejected,(function(t,e){var n=e.error;return console.log(n)})),Object(f.a)(C,w.pending,null),Object(f.a)(C,y.rejected,(function(t,e){var n=e.error;return console.log(n)})),Object(f.a)(C,y.pending,null),C)),S=Object(d.b)({contacts:k,filter:z,loading:A,error:F}),Z=[].concat(Object(s.a)(Object(u.e)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})),[j.a]),L=Object(u.a)({reducer:S,middleware:Z}),q=(n(66),n(67),n(22)),E=n.n(q),H=n(1);var J=function(t){var e=t.title,n=t.children;return Object(H.jsxs)("section",{className:E.a.section,children:[Object(H.jsx)("h2",{className:E.a.title,children:e}),n]})},B=n(24),M=function(t){return t.contacts},U=function(t){return t.filter},D=function(t){return t.loading},P=function(t){var e=M(t),n=U(t);return e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},$=n(9),I=n.n($);var K=function(){var t=Object(c.useState)(""),e=Object(B.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(B.a)(r,2),s=o[0],u=o[1],l=Object(i.c)(M),b=Object(i.b)(),j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":u(c)}};return Object(H.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t){var e=t.name,n=t.phone;l.find((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):b(w({name:e,phone:n}))}({name:n,phone:s}),a(""),u("")},children:[Object(H.jsxs)("label",{className:I.a.form_label,children:["Name:",Object(H.jsx)("input",{className:I.a.form_input,type:"text",name:"name",value:n,onChange:j,placeholder:"Name Lastname",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(H.jsxs)("label",{className:I.a.form_label,children:["Number",Object(H.jsx)("input",{className:I.a.form_input,type:"tel",name:"number",value:s,onChange:j,placeholder:"Phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(H.jsx)("button",{className:I.a.form_button,type:"submit",children:Object(H.jsx)("p",{className:I.a.form_button_text,children:"Add contact"})})]})},R=n(35),V=n.n(R),W=n(36),X=n.n(W);var G=function(){return Object(H.jsx)("div",{className:X.a.section,children:Object(H.jsx)(V.a,{type:"Circles",color:"#000",height:30,width:30,timeout:3e3})})},Q=n(19),T=n.n(Q);var Y=function(){var t=Object(i.b)(),e=Object(i.c)(P),n=Object(i.c)(D);Object(c.useEffect)((function(){t(N())}),[]);var a=function(e){var n=e.target.id;console.log(n),t(y(n))};return Object(H.jsxs)("ul",{children:[n&&Object(H.jsx)(G,{}),e.map((function(t){var e=t.id,n=t.name,c=t.phone;return Object(H.jsxs)("li",{className:T.a.contacts_item,children:[Object(H.jsxs)("p",{className:T.a.contacts_text,children:[n,": ",c]}),Object(H.jsx)("button",{className:T.a.contacts_button,id:e,type:"button",onClick:a,children:"Delete"})]},e)}))]})},tt=n(23),et=n.n(tt);var nt=function(){var t=Object(i.b)(),e=Object(i.c)(U);return Object(H.jsxs)("label",{className:et.a.filter_label,children:["Find contacts by name:",Object(H.jsx)("input",{className:et.a.filter_input,type:"text",name:"filter",value:e,onChange:function(e){var n=e.target.value;t(O(n))},placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},ct=["section"];var at=function(){return Object(H.jsxs)("section",{className:ct,children:[Object(H.jsx)(J,{title:"Phonebook",children:Object(H.jsx)(K,{})}),Object(H.jsxs)(J,{title:"Contacts",children:[Object(H.jsx)(nt,{}),Object(H.jsx)(Y,{})]})]})};o.a.render(Object(H.jsx)(a.a.StrictMode,{children:Object(H.jsx)(i.a,{store:L,children:Object(H.jsx)(at,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form_label:"Form_form_label__30btW",form_input:"Form_form_input__1VOH4",form_button:"Form_form_button__2tqd9",form_button_text:"Form_form_button_text__3uOFv"}}},[[87,1,2]]]);
//# sourceMappingURL=main.373df6c3.chunk.js.map