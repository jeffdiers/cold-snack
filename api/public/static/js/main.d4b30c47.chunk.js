(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(59)},48:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(18),s=n.n(a),i=n(13),u=(n(48),n(9)),c=n(10),l=n(32),h=n.n(l),d=new(function(){function e(){Object(u.a)(this,e),this.user=null,this.authenticationToken=null,this.AUTHENTICATED_USER="AUTHENTICATED_USER",this.AUTH_TOKEN="AUTH_TOKEN",this.SESSION_STORAGE_ERR="Current browser does not support window.sessionStorage!"}return Object(c.a)(e,[{key:"getter",value:function(e){if("undefined"!==typeof window.sessionStorage)return window.sessionStorage.getItem(e);throw new Error(this.SESSION_STORAGE_ERR)}},{key:"setter",value:function(e,t){if("undefined"!==typeof window.sessionStorage)return window.sessionStorage.setItem(e,t),t;throw new Error(this.SESSION_STORAGE_ERR)}},{key:"wipeSession",value:function(){if("undefined"!==typeof window.sessionStorage)return window.sessionStorage.clear(),!0;throw new Error(this.SESSION_STORAGE_ERR)}},{key:"getUser",value:function(){var e=this.getter(this.AUTHENTICATED_USER);return this.authenticationUser=e&&e.trim().length>0?JSON.parse(e):null,this.authenticationUser}},{key:"getAuthToken",value:function(){var e=this.getter(this.AUTH_TOKEN);return this.authenticationToken=e&&e.trim().length>0?e:null,this.authenticationToken}},{key:"setToken",value:function(e){return this.setter(this.AUTH_TOKEN,e)}},{key:"setUser",value:function(e){return this.setter(this.AUTHENTICATED_USER,JSON.stringify(e))}}]),e}()),g=d.getAuthToken(),f=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";console.warn(" ------ API request rejected\n        URL: ".concat(e,"\n        Body: ").concat(t.body,"\n        Response: ").concat(n.status," ").concat(n.statusText,"\n        ").concat(r||n))},E=function(){function e(){Object(u.a)(this,e)}return Object(c.a)(e,null,[{key:"getResponseData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e.json().then(function(e){return e||t})}},{key:"authToken",get:function(){return g=d.getAuthToken()},set:function(e){g=d.setToken(e)}}]),e}();E.get=function(e){return E.go(e,{method:"get"})},E.post=function(e,t){return E.go(e,{method:"post",body:t})},E.put=function(e,t){return E.go(e,{method:"put",body:t})},E.patch=function(e,t){return E.go(e,{method:"patch",body:t})},E.delete=function(e){return E.go(e,{method:"delete"})},E.go=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new Headers({Accept:"application/json"});void 0!==t.body&&(t.body.login&&t.body.password&&(g="Basic ".concat(btoa("".concat(t.body.login,":").concat(t.body.password))),t.body.login=null,t.body.password=null),n.set("Content-Type","application/json"),t.body=JSON.stringify(t.body)),g&&n.set("Authorization",g),t.headers=n;var r="/api/".concat(e);return new Promise(function(e,n){h()(r,t).then(function(o){o.ok&&"2"===String(o.status).charAt()?e(o):function(e,t,n,r){n.json().then(function(o){console.log(o),f(e,t,n,o),r(o)},function(){f(e,t,n),r(new Error(n))})}(r,t,o,n)},function(e){!function(e,t,n){console.warn(" ------ API request failed\n        URL: ".concat(e,"\n        Body: ").concat(t.body,"\n        Error: ").concat(n))}(r,t,e),n(new Error(e))})})};var p=E,m=function(e){var t=e.headers.get("Authorization");return t&&(p.authToken=t),p.getResponseData(e)},w=function(){function e(){Object(u.a)(this,e)}return Object(c.a)(e,[{key:"delete",value:function(){return p.authToken=null,p.delete(this.URL)}},{key:"emailLogin",value:function(t,n){var r={email:t,password:n};return p.post(e.URL,r).then(m).catch(function(e){return e})}},{key:"logout",value:function(){p.authToken=null}},{key:"resetPassword",value:function(e){var t={email:e};return p.post(this.PASSWORD_RECOVERY_URL,t)}}]),e}();w.URL="/users/login",w.SIGNUP_URL="/sessions/email",w.PASSWORD_RECOVERY_URL="/sessions/email/password-recovery";var O=new w,S=function(e){return{type:"USER_LOGIN_FAILURE",errorMessage:JSON.stringify(e.errors)}},U=function(e,t){return function(n){return n({type:"USER_LOGIN",sendAuthRequest:!0}),O.emailLogin(e,t).then(function(e){return console.log(e),e.success?n(function(e){return{type:"USER_LOGIN_SUCCESS",isLoggedIn:!0,user:e.user}}(e)):n(S(e))}).catch(function(e){return n(S(e))})}},v=n(23),y=n(20),b=n(24),R=n(12),T=n(22),k=n(67),A=n(60),_=n(61),I=n(62),j=n(63),L=n(64),N=n(65),C=n(66),G=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(v.a)(this,Object(y.a)(t).call(this,e))).authenticateUser=function(){var e=n.props.authenticateUser,t=n.state;return e(t.email,t.password)},n.state={email:"",password:""},n}return Object(b.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.isLoggedIn,r=t.errorMessage,a=this.state,s=a.email,i=a.password;return n?o.a.createElement(R.a,{to:"/home"}):o.a.createElement("div",{className:"form-signin-wrapper"},o.a.createElement(A.a,null,o.a.createElement(_.a,{sm:{size:6,push:2,pull:2,offset:1}},o.a.createElement(I.a,null,r?o.a.createElement("div",{style:{color:"red"}},r," "):null,o.a.createElement(j.a,null,o.a.createElement(L.a,{for:"Email"},"Email"),o.a.createElement(N.a,{value:s,type:"email",placeholder:"Enter Email",onChange:function(t){return e.setState({email:t.target.value})}})),o.a.createElement(j.a,null,o.a.createElement(L.a,{for:"Password"},"Password"),o.a.createElement(N.a,{value:i,type:"password",placeholder:"Enter Password",onChange:function(t){return e.setState({password:t.target.value})}}))),o.a.createElement(C.a,{color:"primary",onClick:this.authenticateUser},"Signin"))))}}]),t}(r.Component),H=Object(i.b)(function(e){return{isLoggedIn:e.session.isLoggedIn,currentUser:e.session.currentUser,errorMessage:e.session.errorMessage}},function(e){return{authenticateUser:function(t,n){return e(U(t,n))}}})(G),M=function(){return o.a.createElement("div",{className:"page-content-wrapper"},o.a.createElement("h2",null,"You seem to be lost. Go"," ",o.a.createElement(T.b,{to:"/home"},"Home")))},P=[{title:"Home",route:"/home",component:function(){return o.a.createElement("div",{className:"page-content-wrapper"},o.a.createElement("h2",null,"This is Home screen"))},exact:!0,mainMenu:!0}],D=function(e){function t(){return Object(u.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(c.a)(t,[{key:"checkAuth",value:function(e){var t=this.props.isLoggedIn;return function(n){return t?o.a.createElement(e,n):o.a.createElement(R.a,{to:{pathname:"/login",state:{from:n.location}}})}}},{key:"renderRoutes",value:function(){var e=this;return o.a.createElement("div",{style:{paddingTop:20}},o.a.createElement(R.d,null,o.a.createElement(R.b,{style:{paddingTop:20},path:"/login",component:H}),P.map(function(t){return o.a.createElement(R.b,{path:t.route,key:t.route,exact:t.exact,render:e.checkAuth(t.component)})}),o.a.createElement(R.b,{exact:!0,path:"/*",component:M})))}},{key:"render",value:function(){return o.a.createElement(T.a,null,o.a.createElement(k.a,null,this.renderRoutes()))}}]),t}(r.Component),q=Object(i.b)(function(e){return{isLoggedIn:e.session.isLoggedIn,currentUser:e.session.currentUser}},function(e,t){return{authenticateUser:function(){return e(U(t))}}})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x,J=n(37),B=n(14),K=n(35),W=(n(55),n(36)),z={sendAuthRequest:!1,isLoggedIn:!!d.getAuthToken(),currentUser:d.getUser(),errorMessage:null},F={session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_SUCCESS":return Object.assign({},e,{isLoggedIn:!0,currentUser:t.user,errorMessage:null});case"USER_LOGIN":return Object.assign({},e,{sendAuthRequest:!0});case"USER_LOGIN_FAILURE":return Object.assign({},e,{isLoggedIn:!1,errorMessage:t.errorMessage,currentUser:null});case"USER_LOGOUT":return Object.assign({},e,{sendAuthRequest:!0});case"USER_LOGOUT_SUCCESS":return Object.assign({},e,{isLoggedIn:!1,currentUser:null,errorMessage:null});case"USER_LOGOUT_FAILURE":return Object.assign({},e,{errorMessage:t.errorMessage});default:return e}}};x=Object(B.a)(K.a);var Y=Object(B.d)(Object(B.c)(Object(J.a)({},F,{routerReducer:W.routerReducer})),x);n(58);s.a.render(o.a.createElement(i.a,{store:Y},o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.d4b30c47.chunk.js.map