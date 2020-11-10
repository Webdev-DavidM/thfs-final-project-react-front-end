(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(41),c=a.n(s),i=(a(49),a(4)),l=a(1);var o=function(){return r.a.createElement("div",{className:"bounds"},r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"Sorry! We couldn't find the page you're looking for."))},u=a(15),m=a(5),d=a(6),p=a(8),h=a(7),v=function(e){var t=e.cancel,a=e.errors,n=e.submit,s=e.submitButtonText,c=e.elements;return r.a.createElement("div",null,r.a.createElement(E,{errors:a}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n()}},c(),r.a.createElement("div",{className:"pad-bottom"},r.a.createElement("button",{className:"button",type:"submit"},s),r.a.createElement("button",{className:"button button-secondary",onClick:function(e){e.preventDefault(),t()}},"Cancel"))))};function E(e){var t=e.errors,a=null;return t&&(a=r.a.createElement("div",null,r.a.createElement("h2",{className:"validation--errors--label"},"Validation errors"),r.a.createElement("div",{className:"validation-errors"},r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))),a}var f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",firstName:"",lastName:"",emailAddress:"",password:"",errors:null},e.change=function(t){var a=t.target.name,n=t.target.value;e.setState((function(){return Object(u.a)({},a,n)}))},e.submit=function(){e.setState({errors:null});var t=e.props.context,a=e.state,n=a.firstName,r=a.lastName,s=a.emailAddress,c=a.password,i={firstName:n,lastName:r,emailAddress:s,password:c};t.data.createUser(i).then((function(a){a?e.setState({errors:a}):t.actions.signIn(s,c).then((function(){e.props.history.push("/")}))})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(){e.props.history.push("/")},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,n=t.lastName,s=t.emailAddress,c=t.errors,l=t.password;return r.a.createElement("div",{className:"bounds"},r.a.createElement("div",{className:"grid-33 centered signin"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement(v,{cancel:this.cancel,errors:c,submit:this.submit,submitButtonText:"Sign Up",elements:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"firstName",name:"firstName",type:"text",value:a,onChange:e.change,placeholder:"First Name"}),r.a.createElement("input",{id:"lastName",name:"lastName",type:"text",value:n,onChange:e.change,placeholder:"Last Name"}),r.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"emailAddress",value:s,onChange:e.change,placeholder:"Email Address"}),r.a.createElement("input",{id:"password",name:"password",type:"password",value:l,onChange:e.change,placeholder:"Password"}))}}),r.a.createElement("p",null,"Already have a user account? ",r.a.createElement(i.b,{to:"/signin"},"Click here")," to sign in!")))}}]),a}(n.Component),b=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",errors:null},e.change=function(t){var a=t.target.name,n=t.target.value;e.setState((function(){return Object(u.a)({},a,n)}))},e.submit=function(){var t=e.props.context,a=(e.props.location.state||{from:{pathname:"/"}}).from,n=e.state,r=n.username,s=n.password;t.actions.signIn(r,s).then((function(t){null===t?e.setState((function(){return{errors:["Sign-in was unsuccessful"]}})):e.props.history.push(a)})).catch((function(t){console.error(t),e.props.history.push("/error")}))},e.cancel=function(){e.props.history.push("/")},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,s=t.errors;return r.a.createElement("div",{className:"bounds"},r.a.createElement("div",{className:"grid-33 centered signin"},r.a.createElement("h1",null,"Sign In"),r.a.createElement(v,{cancel:this.cancel,errors:s,submit:this.submit,submitButtonText:"Sign In",elements:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"username",name:"username",type:"text",value:a,onChange:e.change,placeholder:"User Name"}),r.a.createElement("input",{id:"password",name:"password",type:"password",value:n,onChange:e.change,placeholder:"Password"}))}}),r.a.createElement("p",null,"Don't have a user account? ",r.a.createElement(i.b,{to:"/signup"},"Click here")," to sign up!")))}}]),a}(n.Component),g=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={courses:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;return fetch("https://thfs-final-project-api.herokuapp.com/api/courses").then((function(t){return t.json().then((function(t){e.setState({courses:t})}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"bounds"},this.state.courses.map((function(e){return r.a.createElement("div",{key:e.id,className:"grid-33"},r.a.createElement(i.b,{className:"course--module course--link",to:"/courses/".concat(e.id)},r.a.createElement("h4",{className:"course--label"},"Course"),r.a.createElement("h3",{className:"course--title"},e.title)))})),r.a.createElement("div",{className:"grid-33"},r.a.createElement(i.b,{to:"/courses/create",className:"course--module course--add--module"},r.a.createElement("h3",{className:"course--add--title"},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add"},r.a.createElement("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})),"New Course"))))}}]),a}(n.Component),N=a(19),y=a(55),x=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).deleteCourse=function(){if(e.props.context.authenticatedUser){var t=e.props.context.authenticatedUser,a={password:t.password,username:t.emailAddress},n=e.props.match.params.id;e.props.context.data.deleteCourse(n,a).then((function(t){t.length?e.setState({errors:t}):e.props.history.push("/")}))}else e.props.history.push("/forbidden")},e.selectedCourse=function(){var t=e.props.match.params.id;e.props.context.data.getCourse(t).then((function(t){t.error?e.props.history.push("/notfound"):e.setState({course:t,owner:t.User})}))},e.state={course:[],owner:[]},e.selectedCourse=e.selectedCourse.bind(Object(N.a)(e)),e.returnToList=e.returnToList.bind(Object(N.a)(e)),e.deleteCourse=e.deleteCourse.bind(Object(N.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.selectedCourse()}},{key:"returnToList",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=!1;if(this.props.context.authenticatedUser){var a=this.props.context.authenticatedUser.emailAddress;t=this.state.owner.emailAddress===a}var n=this.state.course,s=this.props.match.params.id;return r.a.createElement("div",{className:"bounds course--detail"},r.a.createElement("div",null,r.a.createElement("div",{className:"actions--bar"},r.a.createElement("div",{className:"bounds"},r.a.createElement("div",{className:"grid-100"},t&&r.a.createElement("span",null,r.a.createElement("div",{className:"button"},r.a.createElement(i.b,{style:{color:"white"},to:"/courses/".concat(s,"/update")},"Update Course")),r.a.createElement("button",{className:"button",onClick:function(){return e.deleteCourse()}},"Delete Course")),r.a.createElement("a",{className:"button button-secondary",href:"/"},"Return to List"))))),r.a.createElement("div",{className:"grid-66"},r.a.createElement("div",{className:"course--header"},r.a.createElement("h4",{className:"course--label"},"Course"),r.a.createElement("h3",{className:"course--title"},n.title),r.a.createElement("p",null,"By ",this.state.owner.firstName," ",this.state.owner.lastName)),r.a.createElement("div",{className:"course--description"},r.a.createElement(y,{source:n.description}))),r.a.createElement("div",{className:"grid-25 grid-right"},r.a.createElement("div",{className:"course--stats"},r.a.createElement("ul",{className:"course--stats--list"},r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Estimated Time"),r.a.createElement("h3",null,n.estimatedTime)),r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Materials Needed"),r.a.createElement("ul",null,r.a.createElement(y,{source:n.materialsNeeded})))))))}}]),a}(n.Component),w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",estimatedTime:"",materialsNeeded:"",errors:null},e.change=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(u.a)({},a,n))},e.submit=function(t){t.preventDefault(),e.setState({errors:null});var a=e.props.context.authenticatedUser,n={password:a.password,username:a.emailAddress},r=e.props.context.authenticatedUser.id,s=e.state,c={title:s.title,description:s.description,estimatedTime:s.estimatedTime,materialsNeeded:s.materialsNeeded,userId:r};e.props.context.data.createCourse(c,n).then((function(t){console.log(t),t?e.setState({errors:t.message}):e.props.history.push("/")}))},e.cancel=function(t){e.props.history.push("/")},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.context.authenticatedUser,t=e.firstName,a=e.lastName,n=this.state.errors;return r.a.createElement("div",{className:"bounds course--detail"},r.a.createElement("h1",null,"Create Course"),r.a.createElement("div",null,n&&r.a.createElement("div",null,r.a.createElement("h2",{className:"validation--errors--label"},"Validation errors"),r.a.createElement("div",{className:"validation-errors"},r.a.createElement("ul",null,n.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))),r.a.createElement("form",{onSubmit:this.submit},r.a.createElement("div",{className:"grid-66"},r.a.createElement("div",{className:"course--header"},r.a.createElement("h4",{className:"course--label"},"Course"),r.a.createElement("div",null,r.a.createElement("input",{id:"title",name:"title",type:"text",className:"input-title course--title--input",placeholder:"Course title...",value:this.state.value,onChange:this.change})),r.a.createElement("p",null,"by ",t," ",a)),r.a.createElement("div",{className:"course--description"},r.a.createElement("div",null,r.a.createElement("textarea",{id:"description",name:"description",className:"",placeholder:"Course description...",value:this.state.value,onChange:this.change})))),r.a.createElement("div",{className:"grid-25 grid-right"},r.a.createElement("div",{className:"course--stats"},r.a.createElement("ul",{className:"course--stats--list"},r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Estimated Time"),r.a.createElement("div",null,r.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",className:"course--time--input",placeholder:"Hours",value:this.state.value,onChange:this.change}))),r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Materials Needed"),r.a.createElement("div",null,r.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",className:"",placeholder:"List materials...",value:this.state.value,onChange:this.change})))))),r.a.createElement("div",{className:"grid-100 pad-bottom"},r.a.createElement("button",{className:"button",type:"submit"},"Create Course"),r.a.createElement("button",{className:"button button-secondary",type:"button",onClick:this.cancel},"Cancel")))))}}]),a}(n.Component),C=a(3),j=a.n(C),O=a(13),k=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).updateCourse=function(t){t.preventDefault();var a=e.props.context.authenticatedUser,n=a.password,r=a.emailAddress,s=e.state,c={password:n,username:r},i={id:s.id,title:s.title,description:s.description,estimatedTime:s.estimatedTime,materialsNeeded:s.materialsNeeded,userId:s.userId};e.props.context.data.updateCourse(i,c).then((function(t){t.message?e.setState({errors:t.message}):e.props.history.push("/")}))},e.componentDidMount=function(){e.courseToUpdate()},e.change=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(u.a)({},a,n))},e.cancel=function(t){e.props.history.push("/")},e.courseToUpdate=Object(O.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.props.match.params.id,e.props.context.data.getCourse(a).then((function(t){if(t.error)e.props.history.push("./notfound");else{var a=t.id,n=t.title,r=t.description,s=t.estimatedTime,c=t.materialsNeeded,i=t.userId;e.setState({id:a,title:n,description:r,estimatedTime:s,materialsNeeded:c,userId:i,owner:t.User.id})}}));case 2:case"end":return t.stop()}}),t)}))),e.state={id:null,title:"",description:"",estimatedTime:"",materialsNeeded:"",errors:"",userId:null,owner:null},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.props.context.authenticatedUser.id;this.state.owner!==e&&this.props.history.push("/forbidden")}},{key:"render",value:function(){var e=this.props.context.authenticatedUser,t=e.firstName,a=e.lastName,n=this.state,s=n.description,c=n.estimatedTime,i=n.materialsNeeded,l=n.title,o=this.state.errors;return r.a.createElement("div",{className:"bounds course--detail"},r.a.createElement("h1",null,"Update Course"),r.a.createElement("div",null,o&&r.a.createElement("div",null,r.a.createElement("h2",{className:"validation--errors--label"},"Validation errors"),r.a.createElement("div",{className:"validation-errors"},r.a.createElement("ul",null,o.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))),r.a.createElement("form",{onSubmit:this.updateCourse},r.a.createElement("div",{className:"grid-66"},r.a.createElement("div",{className:"course--header"},r.a.createElement("h4",{className:"course--label"},"Course"),r.a.createElement("div",null,r.a.createElement("input",{id:"title",name:"title",type:"text",className:"input-title course--title--input",placeholder:"Course title...",value:l,onChange:this.change})),r.a.createElement("p",null,"By ",t," ",a)),r.a.createElement("div",{className:"course--description"},r.a.createElement("div",null,r.a.createElement("textarea",{id:"description",name:"description",className:"",placeholder:"...Description",value:s,onChange:this.change})))),r.a.createElement("div",{className:"grid-25 grid-right"},r.a.createElement("div",{className:"course--stats"},r.a.createElement("ul",{className:"course--stats--list"},r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Estimated Time"),r.a.createElement("div",null,r.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",className:"course--time--input",placeholder:"...estimated time  ",value:c,onChange:this.change}))),r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Materials Needed"),r.a.createElement("div",null,r.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",className:"",placeholder:"...materialsNeeded",value:i,onChange:this.change})))))),r.a.createElement("div",{className:"grid-100 pad-bottom"},r.a.createElement("button",{className:"button",type:"submit"},"Update Course"),r.a.createElement("button",{className:"button button-secondary",onClick:this.cancel},"Cancel")))))}}]),a}(n.Component);function U(){return r.a.createElement("div",{className:"bounds"},r.a.createElement("h1",null,"Forbidden"),r.a.createElement("p",null,"Oh oh! You can't access this page."))}function S(){return r.a.createElement("div",{class:"bounds"},r.a.createElement("h1",null,"Error"),r.a.createElement("p",null,"Sorry! We just encountered an unexpected error."))}var T=a(22),A=a.n(T),I="https://thfs-final-project-api.herokuapp.com/api",D=function(){function e(){Object(m.a)(this,e)}return Object(d.a)(e,[{key:"api",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=I+e,c={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};if(null!==a&&(c.body=JSON.stringify(a)),n){var i=btoa("".concat(r.username,":").concat(r.password));c.headers.Authorization="Basic ".concat(i)}return fetch(s,c)}},{key:"getUser",value:function(){var e=Object(O.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","GET",null,!0,{username:t,password:a});case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json().then((function(e){return e})));case 7:if(401!==n.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"deleteCourse",value:function(){var e=Object(O.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"DELETE",null,!0,a);case 2:if(204!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(401!==n.status){e.next=11;break}return e.abrupt("return",n.json().then((function(e){return e.message})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"createCourse",value:function(){var e=Object(O.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","POST",t,!0,a);case 2:if(201!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",null);case 7:if(400!==n.status){e.next=12;break}return e.next=10,n.json();case 10:return n=e.sent,e.abrupt("return",n);case 12:throw new Error;case 13:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"updateCourse",value:function(){var e=Object(O.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t.id),"PUT",t,!0,a);case 2:if(204!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n);case 5:if(404!==n.status){e.next=7;break}return e.abrupt("return",n.json().then((function(e){return e.errors="no such course",e})));case 7:if(400!==n.status){e.next=12;break}return e.next=10,n.json();case 10:return n=e.sent,e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getCourse",value:function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"GET",null,!1,null);case 2:if(200!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",a.json().then((function(e){return e})));case 7:if(404!==a.status){e.next=12;break}return a.error=" cant find this course",e.abrupt("return",a);case 12:throw new Error;case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","POST",t);case 2:if(201!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",null);case 7:if(400!==a.status){e.next=11;break}return e.abrupt("return",a.json().then((function(e){return e.message})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=r.a.createContext(),F=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={authenticatedUser:A.a.getJSON("authenticatedUser")||null},e.signIn=function(){var t=Object(O.a)(j.a.mark((function t(a,n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.data.getUser(a,n);case 2:return null!==(r=t.sent)&&(r.password=n,e.setState((function(){return{authenticatedUser:r}})),A.a.set("authenticatedUser",JSON.stringify(r),{expires:1})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.signOut=function(){e.setState({authenticatedUser:null}),A.a.remove("authenticatedUser")},e.data=new D,e}return Object(d.a)(a,[{key:"render",value:function(){var e={authenticatedUser:this.state.authenticatedUser,data:this.data,actions:{signIn:this.signIn,signOut:this.signOut}};return r.a.createElement(B.Provider,{value:e},this.props.children)}}]),a}(n.Component),L=B.Consumer;function M(e){return function(t){return r.a.createElement(B.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{context:a}))}))}}var P=a(43),J=function(e){var t=e.component,a=Object(P.a)(e,["component"]);return r.a.createElement(L,null,(function(e){return r.a.createElement(l.b,Object.assign({},a,{render:function(a){return e.authenticatedUser?r.a.createElement(t,a):r.a.createElement(l.a,{to:{pathname:"/forbidden",state:{from:a.location}}})}}))}))},W=M((function(e){var t=e.context.authenticatedUser;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"bounds"},r.a.createElement("h1",{className:"header--logo"},"Courses"),r.a.createElement("nav",null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Welcome, ",t.firstName,"!"),r.a.createElement(i.b,{to:"/signout"},"Sign Out")):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{className:"signup",to:"/signup"},"Sign Up"),r.a.createElement(i.b,{className:"signin",to:"/signin"},"Sign In")))))})),G=M(f),V=M(b),z=M((function(e){return e.context.actions.signOut(),r.a.createElement(l.a,{to:"/"})})),H=M(g),R=M(x),Y=M(w),$=M(k),q=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:H}),r.a.createElement(J,{exact:!0,path:"/courses/create",component:Y}),r.a.createElement(l.b,{exact:!0,path:"/courses/:id",component:R}),";",r.a.createElement(J,{exact:!0,path:"/courses/:id/update",component:$}),r.a.createElement(l.b,{exact:!0,path:"/forbidden",component:U}),r.a.createElement(l.b,{exact:!0,path:"/signin",component:V}),r.a.createElement(l.b,{exact:!0,path:"/signup",component:G}),r.a.createElement(l.b,{exact:!0,path:"/signout",component:z}),r.a.createElement(l.b,{exact:!0,path:"/error",component:S}),r.a.createElement(l.b,{exact:!0,path:"/notfound",component:o}),r.a.createElement(l.b,{component:o}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,a){e.exports=a(136)},49:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.bd269724.chunk.js.map