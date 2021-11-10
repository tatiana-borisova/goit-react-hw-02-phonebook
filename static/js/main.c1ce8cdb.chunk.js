(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"Filter_filter__1E5tH",label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},13:function(t,e,n){t.exports={title:"Section_title__2S6oE",section:"Section_section__Ap5Zy"}},14:function(t,e,n){t.exports={contacts:"ContactList_contacts__1Ny0J",contact:"ContactList_contact__3ZIyH"}},2:function(t,e,n){t.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",button:"Form_button__243jh"}},23:function(t,e,n){},3:function(t,e,n){t.exports={contact:"Contact_contact__1m2re",name:"Contact_name__2ZcKm",number:"Contact_number__2MvnN",button:"Contact_button__1wUL0"}},33:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(15),o=n.n(r),i=(n(22),n(23),n(17)),s=n(5),l=n(6),u=n(9),b=n(8),m=n(13),d=n.n(m),j=n(0);function h(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{className:d.a.section,children:[e&&Object(j.jsx)("h2",{className:d.a.title,children:e}),n]})}h.defaultProps={title:""};var f=n(7),p=n(10),_=n(16),C=n.n(_),O=n(2),x=n.n(O),v={name:"",number:""},g=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(p.a)({},v),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(p.a)({id:C.a.generate()},t.state)),t.reset()},t.reset=function(){t.setState(Object(p.a)({},v))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:x.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:x.a.label,children:["Name",Object(j.jsx)("input",{className:x.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Enter name",value:e,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:x.a.label,children:["Number",Object(j.jsx)("input",{className:x.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"Enter number",value:n,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",className:x.a.button,children:"Add contact"})]})}}]),n}(a.Component),N=g,S=n(11),y=n.n(S),A=function(t){var e=t.value,n=t.onChange;return Object(j.jsx)("p",{className:y.a.filter,children:Object(j.jsxs)("label",{className:y.a.label,children:["Find contacts by name or number",Object(j.jsx)("input",{className:y.a.input,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Enter name or number",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:n})]})})},w=n(3),k=n.n(w),F=function(t){var e=t.data,n=t.onClick,a=e.name,c=e.number,r=e.id;return Object(j.jsxs)("div",{className:k.a.contact,children:[Object(j.jsxs)("span",{className:k.a.name,children:[a,":"]}),Object(j.jsx)("span",{className:k.a.number,children:c}),Object(j.jsx)("button",{className:k.a.button,type:"button",onClick:function(){return n(r)},children:"Delete"})]})},Z=n(14),E=n.n(Z),L=function(t){var e=t.contacts,n=t.onClick;return Object(j.jsx)("div",{className:E.a.contacts,children:Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{className:E.a.contact,children:Object(j.jsx)(F,{data:t,onClick:n})},t.id)}))})})},z=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onSubmitHandler=function(e){var n=t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})),a=t.state.contacts.find((function(t){return t.number.toLowerCase()===e.number.toLowerCase()}));n||a?alert("".concat(n?e.name:""," ").concat(a?e.number:""," is already in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.onChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)||t.number.includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{title:"Phonebook",children:Object(j.jsx)(N,{onSubmit:this.onSubmitHandler})}),Object(j.jsxs)(h,{title:"Contacts",children:[Object(j.jsx)(A,{value:this.state.filter,onChange:this.onChangeFilter}),Object(j.jsx)(L,{contacts:t,onClick:this.deleteContact})]})]})}}]),n}(a.Component),H=z;o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c1ce8cdb.chunk.js.map