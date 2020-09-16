(this["webpackJsonpsortable-list-app"]=this["webpackJsonpsortable-list-app"]||[]).push([[0],{60:function(e,a,t){e.exports=t(98)},65:function(e,a,t){},90:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),o=t.n(l),c=t(30),i=t(31),s=t(38),u=t(36),d=(t(65),t(121)),m=t(123),p=t(124),h=t(41),f=t.n(h),g=Object(d.a)({buttonSmall:{display:"flex",justifyContent:"left",marginBottom:"20px",backgroundColor:"#a5d6a7"},buttonBig:{display:"flex",justifyContent:"left",marginBottom:"20px",backgroundColor:"#ffcc80"},container:{display:"flex",flexDirection:"column",justifyContent:"center",paddingTop:"100px"},icon:{marginRight:"10px"}}),E=function(e){var a=g();return r.a.createElement(m.a,{className:a.container,maxWidth:"sm"},r.a.createElement(p.a,{className:a.buttonSmall,variant:"contained",size:"large",onClick:function(){return e.selectData("https://api.codetabs.com/v1/proxy/?quest=http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")}},r.a.createElement(f.a,{className:a.icon}),"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u043e\u0431\u044a\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445 ",r.a.createElement("b",{style:{marginLeft:"5px"}},"(32 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430)")),r.a.createElement(p.a,{className:a.buttonBig,variant:"contained",size:"large",onClick:function(){return e.selectData("https://api.codetabs.com/v1/proxy/?quest=http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")}},r.a.createElement(f.a,{className:a.icon}),"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u0431\u044a\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445 ",r.a.createElement("b",{style:{marginLeft:"5px"}},"(1000 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432)")))},b=t(52),C=t.n(b),N=Object(d.a)({container:{display:"flex",justifyContent:"center",paddingTop:"100px"}}),O=function(e){var a=N();return r.a.createElement(m.a,{className:a.container,maxWidth:"sm"},r.a.createElement(C.a,{type:"Oval",color:"#9e9e9e",height:100,width:100}))},w=t(33),D=(t(90),t(18)),v=t(125);var x=t(5),j=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={id:"",firstName:"",lastName:"",email:"",phone:""},e.isValidForm=function(){return["id","firstName","lastName","email","phone"].every(e.isValidField)},e.isValidField=function(a){return e.state[a].length>=S[a].min},e.getClassName=function(a){return e.isValidField(a)?"input-form":"input-form__error"},e.handleSubmit=function(a){a.preventDefault(),e.props.addTableRow(e.state),e.setState({id:"",firstName:"",lastName:"",email:"",phone:""})},e.handleChange=function(a){return function(t){var n=t.target.value;n.length>S[a].max||e.setState(Object(w.a)({},a,n))}},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("form",{className:"form-container"},r.a.createElement("div",null,r.a.createElement("input",{className:this.getClassName("id"),value:this.state.id,onChange:this.handleChange("id"),placeholder:"id..."})),r.a.createElement("div",null,r.a.createElement("input",{className:this.getClassName("firstName"),value:this.state.firstName,onChange:this.handleChange("firstName"),placeholder:"first name..."})),r.a.createElement("div",null,r.a.createElement("input",{className:this.getClassName("lastName"),value:this.state.lastName,onChange:this.handleChange("lastName"),placeholder:"last name..."})),r.a.createElement("div",null,r.a.createElement("input",{className:this.getClassName("email"),value:this.state.email,onChange:this.handleChange("email"),placeholder:"email..."})),r.a.createElement("div",null,r.a.createElement("input",{className:this.getClassName("phone"),value:this.state.phone,onChange:this.handleChange("phone"),placeholder:"phone..."})),r.a.createElement("div",null,r.a.createElement(p.a,{className:e.button,variant:"contained",disabled:!this.isValidForm(),onClick:this.handleSubmit},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}}]),t}(n.Component),S={id:{min:3,max:20},firstName:{min:3,max:20},lastName:{min:3,max:20},email:{min:3,max:20},phone:{min:3,max:20}},y=Object(D.b)(null,(function(e){return{addTableRow:function(a){return e(function(e){return{type:"ADD_TABLE_ROW",payload:{newRow:e}}}(a))}}}))(Object(x.a)((function(e){return{button:{borderRadius:0,margin:"10px auto",color:"#ffffff",backgroundColor:"#43a047"}}}))(j)),A=t(56),_=(t(92),Object(d.a)({button:{borderRadius:0,boxShadow:"none",color:"#f9f9f9",backgroundColor:"#757575"}})),T=function(e){var a=_(),t=Object(n.useState)(""),l=Object(A.a)(t,2),o=l[0],c=l[1];return r.a.createElement("div",{className:"search-container"},r.a.createElement(p.a,{className:a.button,variant:"contained",onClick:function(){return e.handleSearchClick(o)}},"\u041d\u0430\u0439\u0442\u0438"),r.a.createElement("input",{className:"input-search",type:"text",onChange:function(e){c(e.target.value)},value:o,placeholder:"\u043f\u043e\u0438\u0441\u043a..."}))},k=(t(93),t(13)),F=t(129),R=t(131),B=t(126),P=t(128),L=t(130),H=t(127),I=Object(x.a)((function(e){return{head:{fontSize:14,backgroundColor:"#757575",color:e.palette.common.white},body:{fontSize:14,cursor:"pointer"}}}))(B.a),G=Object(x.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#eeeeee",cursor:"pointer"}}}}))(H.a),W=function(e){var a=e.data,t=e.sortData,n=t.sortField,l=t.sort;return r.a.createElement(P.a,null,r.a.createElement(F.a,{size:"small","aria-label":"a dense table"},r.a.createElement(L.a,null,r.a.createElement(G,null,r.a.createElement(I,{onClick:function(){return e.onSort("id")}},"ID ","id"===n&&"asc"===l?r.a.createElement(k.a,{className:"icon",icon:"angle-up"}):r.a.createElement(k.a,{className:"icon",icon:"angle-down"})),r.a.createElement(I,{onClick:function(){return e.onSort("firstName")},align:"left"},"First name ","firstName"===n&&"asc"===l?r.a.createElement(k.a,{className:"icon",icon:"angle-up"}):r.a.createElement(k.a,{className:"icon",icon:"angle-down"})),r.a.createElement(I,{onClick:function(){return e.onSort("lastName")},align:"left"},"Last name ","lastName"===n&&"asc"===l?r.a.createElement(k.a,{className:"icon",icon:"angle-up"}):r.a.createElement(k.a,{className:"icon",icon:"angle-down"})),r.a.createElement(I,{onClick:function(){return e.onSort("email")},align:"left"},"Email ","email"===n&&"asc"===l?r.a.createElement(k.a,{className:"icon",icon:"angle-up"}):r.a.createElement(k.a,{className:"icon",icon:"angle-down"})),r.a.createElement(I,{onClick:function(){return e.onSort("phone")},align:"left"},"Phone ","phone"===n&&"asc"===l?r.a.createElement(k.a,{className:"icon",icon:"angle-up"}):r.a.createElement(k.a,{className:"icon",icon:"angle-down"})))),r.a.createElement(R.a,null,a.map((function(a){return r.a.createElement(G,{key:a.phone,onClick:function(){return e.handleRowClick(a)}},r.a.createElement(I,{component:"th",scope:"row"},a.id),r.a.createElement(I,{align:"left"},a.firstName),r.a.createElement(I,{align:"left"},a.lastName),r.a.createElement(I,{align:"left"},a.email),r.a.createElement(I,{align:"left"},a.phone))})))))},V=t(133),z=Object(d.a)((function(e){return{container:{display:"flex",justifyContent:"center",margin:"20px auto"}}})),M=function(e){var a=z(),t=Math.ceil(e.dataForPagination.length/e.pageData.perPage);return r.a.createElement("div",{className:a.container},r.a.createElement(V.a,{count:t,page:e.pageData.currentPage,onChange:e.handlePageClick,color:"primary"}))},U=t(132),X=Object(d.a)({container:{display:"flex",flexDirection:"column",justifyContent:"left",maxWidth:"500px",margin:"0 auto 50px auto",padding:"20px 20px 15px 20px","& div":{marginBottom:"5px"}}}),q=function(e){var a=e.item,t=X();return r.a.createElement(U.a,{className:t.container,elevation:6},r.a.createElement("div",null,"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",r.a.createElement("b",null,a.firstName+" "+a.lastName)),r.a.createElement("div",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",r.a.createElement("br",null),r.a.createElement("textarea",{defaultValue:a.description})),r.a.createElement("div",null,"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",r.a.createElement("b",null,a.address.streetAddress)),r.a.createElement("div",null,"\u0413\u043e\u0440\u043e\u0434: ",r.a.createElement("b",null,a.address.city)),r.a.createElement("div",null,"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",r.a.createElement("b",null,a.address.state)),r.a.createElement("div",null,"\u0418\u043d\u0434\u0435\u043a\u0441: ",r.a.createElement("b",null,a.address.zip)))},J=t(43),$=Object(J.a)((function(e){return e.data.fetchedData}),(function(e){return e.data.search}),(function(e,a){return a?e.filter((function(e){return e.id.toString().includes(a.toString())||e.phone.toString().includes(a.toString())||e.firstName.toLowerCase().includes(a.toLowerCase())||e.lastName.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())})):e})),K=Object(J.a)($,(function(e){return e.pageData}),(function(e,a){var t=a.currentPage*a.perPage,n=t-a.perPage;return e.slice(n,t)})),Q=t(29),Y=t(44);Q.b.add(Y.b,Y.a);var Z=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).handlePageClick=function(a,t){e.props.changePage(t)},e.handleSearchClick=function(a){e.props.searchData(a)},e.handleRowClick=function(a){e.props.selectRow(a)},e.handleShowAddForm=function(){e.props.showAddForm()},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.data,t=e.classes;return r.a.createElement(m.a,{className:t.container},a.isDataSelected?null:r.a.createElement(E,{selectData:this.props.fetchData}),a.loading?r.a.createElement(O,null):null,a.loaded?r.a.createElement(n.Fragment,null,r.a.createElement(p.a,{className:t.isAddingButton,variant:"contained",color:"primary",onClick:this.handleShowAddForm},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u044f\u0434 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443"),a.showAddForm?r.a.createElement(y,null):null,r.a.createElement(T,{handleSearchClick:this.handleSearchClick}),r.a.createElement(W,{sortData:a,data:this.props.dataForTable,onSort:this.props.sortData,selectItemHandler:this.selectItemHandler,handleRowClick:this.handleRowClick}),r.a.createElement(M,{pageData:this.props.pageData,dataForPagination:this.props.dataForPagination,handlePageClick:this.handlePageClick})):null,a.rowSelected?r.a.createElement(q,{item:a.rowSelected}):null)}}]),t}(n.Component),ee=Object(D.b)((function(e){return{data:e.data,pageData:e.pageData,dataForPagination:$(e),dataForTable:K(e)}}),(function(e){return{fetchData:function(a){return e(function(e){return function(a){a({type:"FETCH_DATA_START"}),fetch(e).then((function(e){if(console.log(e),e.status>=400)throw new Error(e.statusText);return e.json()})).then((function(e){return a({type:"FETCH_DATA_SUCCESS",response:e})})).catch((function(e){a(Object(v.a)("/error")),a({type:"FETCH_DATA_FAIL",error:e})}))}}(a))},sortData:function(a){return e(function(e){return console.log("sortData"),{type:"SORT_DATA",payload:{sortField:e}}}(a))},changePage:function(a){return e(function(e){return{type:"CHANGE_PAGINATION_PAGE",payload:{page:e}}}(a))},searchData:function(a){return e(function(e){return console.log(e),{type:"SEARCH_DATA",payload:{search:e}}}(a))},showAddForm:function(){return e({type:"TOGGLE_ADD_FORM"})},selectRow:function(a){return e(function(e){return{type:"SELECT_ROW",payload:{rowSelected:e}}}(a))}}}))(Object(x.a)((function(e){return{container:{maxWidth:"1000px",paddingTop:"50px"},isAddingButton:{display:"block",width:"250px",margin:"20px auto",borderRadius:0}}}))(Z));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=t(17),te=t(54),ne=t(45),re=t(6),le=t(55),oe={fetchedData:[],loading:!1,loaded:!1,error:null,isDataSelected:!1,sort:"",sortField:"",search:"",showAddForm:!1,rowSelected:null},ce={currentPage:1,perPage:50,currentList:[]},ie=Object(ae.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.error,r=a.response,l=a.payload;switch(t){case"FETCH_DATA_START":return Object(re.a)(Object(re.a)({},e),{},{loading:!0,isDataSelected:!0});case"FETCH_DATA_SUCCESS":return Object(re.a)(Object(re.a)({},e),{},{fetchedData:r,loading:!1,loaded:!0});case"FETCH_DATA_FAIL":return Object(re.a)(Object(re.a)({},e),{},{loading:!1,loaded:!1,error:n});case"SORT_DATA":var o=Object(ne.a)(e.fetchedData),c="asc"===e.sort?"desc":"asc",i=Object(le.orderBy)(o,l.sortField,c);return Object(re.a)(Object(re.a)({},e),{},{fetchedData:i,sort:c,sortField:l.sortField});case"ADD_TABLE_ROW":return Object(re.a)(Object(re.a)({},e),{},{fetchedData:[l.newRow].concat(Object(ne.a)(e.fetchedData))});case"SEARCH_DATA":return Object(re.a)(Object(re.a)({},e),{},{search:l.search});case"TOGGLE_ADD_FORM":return Object(re.a)(Object(re.a)({},e),{},{showAddForm:!e.showAddForm});case"SELECT_ROW":return Object(re.a)(Object(re.a)({},e),{},{rowSelected:l.rowSelected});default:return e}},pageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"CHANGE_PAGINATION_PAGE":return Object(re.a)(Object(re.a)({},e),{},{currentPage:n.page});default:return e}}}),se=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):ae.d)(Object(ae.a)(te.a,(function(e){return function(a){return function(t){console.log("before",e.getState()),console.log("dispatching",t),a(t),console.log("after",e.getState())}}}))),ue=Object(ae.e)(ie,se);o.a.render(r.a.createElement(D.a,{store:ue},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.c4424b4e.chunk.js.map