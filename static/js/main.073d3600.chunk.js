(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={deleteBtn:"DeleteBtn_deleteBtn__ni6cM"}},14:function(t,e,n){t.exports={contact:"Contact_contact__2DqJg"}},2:function(t,e,n){t.exports={form:"Phonebook_form__fJk8l",label:"Phonebook_label__1hDrD",input1:"Phonebook_input1__PeSCS",input2:"Phonebook_input2__2wxTu"}},21:function(t,e,n){},22:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),r=n(10),o=n.n(r),s=(n(21),n(15)),l=n(3),u=n(4),b=n(6),d=n(5),h=(n(22),n(11)),m=n(12),j=n(2),f=n.n(j),p=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleAdd=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name",Object(a.jsx)("input",{className:f.a.input1,name:"name",onChange:this.handleAdd,value:this.state.name,type:"text"})]}),Object(a.jsxs)("label",{className:f.a.label,children:["Number",Object(a.jsx)("input",{className:f.a.input2,name:"number",onChange:this.handleAdd,value:this.state.number,type:"text"})]}),Object(a.jsx)("button",{className:f.a.input1,type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component),O=n(13),v=n.n(O);var x=function(t){return Object(a.jsx)("button",{className:v.a.deleteBtn,onClick:t.onClickDeleteBtn,type:"button",children:"Delete"})},C=n(14),g=n.n(C);var S=function(t){return Object(a.jsxs)("li",{className:g.a.contact,children:[t.name," : ",t.number,Object(a.jsx)(x,{onClickDeleteBtn:function(){return t.deleteBtn(t.id)}})]})};var k=function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)("ul",{children:t.contacts.map((function(e){return Object(a.jsx)(S,{name:e.name,number:e.number,id:e.id,deleteBtn:t.onDeleteBtnClick},e.id)}))})]})},y=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={filter:""},t.handleFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n}),t.props.onChange(n)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)("input",{onChange:this.handleFilter,value:this.state.value})]})}}]),n}(c.Component),_=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=Object(h.v4)();e.id=n,t.state.contacts.map((function(t){return t.name})).includes(e.name)?alert("".concat(e.name," is already exists in contacts")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.filterChangeHandler=function(e){t.setState({filter:e})},t.onDeleteBtnClick=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{onSubmit:this.formSubmitHandler}),Object(a.jsx)(y,{onChange:this.filterChangeHandler}),Object(a.jsx)(k,{contacts:e,onDeleteBtnClick:this.onDeleteBtnClick})]})}}]),n}(c.Component),D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),D()}},[[25,1,2]]]);
//# sourceMappingURL=main.073d3600.chunk.js.map