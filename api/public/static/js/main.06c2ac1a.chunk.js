(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(62)},50:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(21),s=n.n(a),u=n(13),i=(n(50),n(7)),c=n(8),l=n(34),h=n.n(l),d=new(function(){function e(){Object(i.a)(this,e),this.user=null,this.authenticationToken=null,this.AUTHENTICATED_USER="AUTHENTICATED_USER",this.AUTH_TOKEN="AUTH_TOKEN",this.SESSION_STORAGE_ERR="Current browser does not support window.sessionStorage!"}return Object(c.a)(e,[{key:"getter",value:function(e){if("undefined"!==typeof window.sessionStorage)return window.sessionStorage.getItem(e);throw new Error(this.SESSION_STORAGE_ERR)}},{key:"setter",value:function(e,t){if("undefined"!==typeof window.sessionStorage)return window.sessionStorage.setItem(e,t),t;throw new Error(this.SESSION_STORAGE_ERR)}},{key:"wipeSession",value:function(){if("undefined"!==typeof window.sessionStorage)return window.sessionStorage.clear(),!0;throw new Error(this.SESSION_STORAGE_ERR)}},{key:"getUser",value:function(){var e=this.getter(this.AUTHENTICATED_USER);return this.authenticationUser=e&&e.trim().length>0?JSON.parse(e):null,this.authenticationUser}},{key:"getAuthToken",value:function(){var e=this.getter(this.AUTH_TOKEN);return this.authenticationToken=e&&e.trim().length>0?e:null,this.authenticationToken}},{key:"setToken",value:function(e){return this.setter(this.AUTH_TOKEN,e)}},{key:"setUser",value:function(e){return this.setter(this.AUTHENTICATED_USER,JSON.stringify(e))}}]),e}()),g=d.getAuthToken(),f=(d.getUser(),function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";console.warn(" ------ API request rejected\n        URL: ".concat(e,"\n        Body: ").concat(t.body,"\n        Response: ").concat(n.status," ").concat(n.statusText,"\n        ").concat(r||n))}),p=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"getResponseData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e.json().then(function(e){return e||t})}},{key:"authToken",get:function(){return g=d.getAuthToken()},set:function(e){g=d.setToken(e)}},{key:"currentUser",get:function(){return d.getUser()},set:function(e){d.setUser(e)}}]),e}();p.get=function(e){return p.go(e,{method:"get"})},p.post=function(e,t){return p.go(e,{method:"post",body:t})},p.put=function(e,t){return p.go(e,{method:"put",body:t})},p.patch=function(e,t){return p.go(e,{method:"patch",body:t})},p.delete=function(e){return p.go(e,{method:"delete"})},p.go=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new Headers({Accept:"application/json"});void 0!==t.body&&(t.body.login&&t.body.password&&(g="Basic ".concat(btoa("".concat(t.body.login,":").concat(t.body.password))),t.body.login=null,t.body.password=null),n.set("Content-Type","application/json"),t.body=JSON.stringify(t.body)),g&&n.set("Authorization",g),t.headers=n;var r="/api/".concat(e);return new Promise(function(e,n){h()(r,t).then(function(o){o.ok&&"2"===String(o.status).charAt()?e(o):function(e,t,n,r){n.json().then(function(o){console.log(o),f(e,t,n,o),r(o)},function(){f(e,t,n),r(new Error(n))})}(r,t,o,n)},function(e){!function(e,t,n){console.warn(" ------ API request failed\n        URL: ".concat(e,"\n        Body: ").concat(t.body,"\n        Error: ").concat(n))}(r,t,e),n(new Error(e))})})};var E=p,m=n(26),O=n.n(m),U=n(35),S=function(e){var t=e.headers.get("Authorization");return t&&(E.authToken=t),E.getResponseData(e)},v=function(e){var t=e.user;t&&(E.currentUser=t)},b=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,[{key:"delete",value:function(){return E.authToken=null,E.delete(e.URL)}},{key:"emailLogin",value:function(){var t=Object(U.a)(O.a.mark(function t(n,r){var o,a,s;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={email:n,password:r},t.prev=1,t.next=4,E.post(e.URL,o);case 4:return a=t.sent,t.next=7,S(a);case 7:return s=t.sent,v(s),t.abrupt("return",s);case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",t.t0);case 15:case"end":return t.stop()}},t,null,[[1,12]])}));return function(e,n){return t.apply(this,arguments)}}()},{key:"logout",value:function(){E.authToken=null}},{key:"resetPassword",value:function(e){var t={email:e};return E.post(this.PASSWORD_RECOVERY_URL,t)}}]),e}();b.URL="sessions",b.SIGNUP_URL="/sessions/email",b.PASSWORD_RECOVERY_URL="/sessions/email/password-recovery";var w=new b,y=function(e){return{type:"USER_LOGIN_FAILURE",errorMessage:JSON.stringify(e.errors)}},R=function(e,t){return function(n){return n({type:"USER_LOGIN",sendAuthRequest:!0}),w.emailLogin(e,t).then(function(e){return e.success?n(function(e){return{type:"USER_LOGIN_SUCCESS",isLoggedIn:!0,user:e.user}}(e)):n(y(e))}).catch(function(e){return n(y(e))})}},T=n(15),k=n(14),A=n(16),_=n(12),j=n(24),L=n(70),I=n(63),N=n(64),C=n(65),G=n(66),M=n(67),H=n(68),x=n(69),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(T.a)(this,Object(k.a)(t).call(this,e))).authenticateUser=function(){var e=n.props.authenticateUser,t=n.state;return e(t.email,t.password)},n.state={email:"",password:""},n}return Object(A.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.isLoggedIn,r=t.errorMessage,a=this.state,s=a.email,u=a.password;return n?o.a.createElement(_.a,{to:"/home"}):o.a.createElement("div",{className:"form-signin-wrapper"},o.a.createElement(I.a,null,o.a.createElement(N.a,{sm:{size:6,push:2,pull:2,offset:1}},o.a.createElement(C.a,null,r?o.a.createElement("div",{style:{color:"red"}},r," "):null,o.a.createElement(G.a,null,o.a.createElement(M.a,{for:"Email"},"Email"),o.a.createElement(H.a,{value:s,type:"email",placeholder:"Enter Email",onChange:function(t){return e.setState({email:t.target.value})}})),o.a.createElement(G.a,null,o.a.createElement(M.a,{for:"Password"},"Password"),o.a.createElement(H.a,{value:u,type:"password",placeholder:"Enter Password",onChange:function(t){return e.setState({password:t.target.value})}}))),o.a.createElement(x.a,{color:"primary",onClick:this.authenticateUser},"Signin"))))}}]),t}(r.Component),D=Object(u.b)(function(e){return{isLoggedIn:e.session.isLoggedIn,currentUser:e.session.currentUser,errorMessage:e.session.errorMessage}},function(e){return{authenticateUser:function(t,n){return e(R(t,n))}}})(P),q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(T.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(o)))).userSignOut=function(){return(0,n.props.userSignOut)()},n}return Object(A.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"page-content-wrapper"},o.a.createElement("h2",null,"This is Home screen",o.a.createElement("br",null),o.a.createElement(x.a,{onClick:this.userSignOut},"Sign out")))}}]),t}(r.Component),J=Object(u.b)(function(e){return{isLoggedIn:e.session.isLoggedIn,currentUser:e.session.currentUser,errorMessage:e.session.errorMessage}},function(e){return{userSignOut:function(){return e(function(e){return e({type:"USER_LOGOUT",sendAuthRequest:!0}),w.delete().then(function(t){return d.wipeSession(),e((t.data,{type:"USER_LOGOUT_SUCCESS",isLoggedIn:!1}))}).catch(function(t){return e({type:"USER_LOGOUT_FAILURE",errorMessage:t})})})}}})(q),B=function(){return o.a.createElement("div",{className:"page-content-wrapper"},o.a.createElement("h2",null,"You seem to be lost. Go"," ",o.a.createElement(j.b,{to:"/home"},"Home")))},F=function(){return o.a.createElement("div",null,"Admin page")},K=[{title:"Home",route:"/home",component:J,exact:!0,mainMenu:!0},{title:"Admin",route:"/admin",component:F,exact:!0,mainMenu:!0}],W=function(e){function t(){return Object(i.a)(this,t),Object(T.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(c.a)(t,[{key:"checkAuth",value:function(e){var t=this.props.isLoggedIn;return function(n){return t?o.a.createElement(e,n):o.a.createElement(_.a,{to:{pathname:"/login",state:{from:n.location}}})}}},{key:"checkRole",value:function(){return"admin"===this.props.currentUser.role&&o.a.createElement(F,null)}},{key:"renderRoutes",value:function(){var e=this;return o.a.createElement("div",{style:{paddingTop:20}},o.a.createElement(_.d,null,o.a.createElement(_.b,{style:{paddingTop:20},path:"/login",component:D}),K.map(function(t){return o.a.createElement(_.b,{path:t.route,key:t.route,exact:t.exact,render:e.checkAuth(t.component)})}),o.a.createElement(_.b,{exact:!0,path:"/*",component:B})))}},{key:"render",value:function(){return o.a.createElement(j.a,null,o.a.createElement(L.a,null,this.renderRoutes()))}}]),t}(r.Component),z=Object(u.b)(function(e){return{isLoggedIn:e.session.isLoggedIn,currentUser:e.session.currentUser}},function(e,t){return{authenticateUser:function(){return e(R(t))}}})(W);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y,V=n(40),$=n(17),Q=n(38),X=(n(58),n(39)),Z={sendAuthRequest:!1,isLoggedIn:!!d.getAuthToken(),currentUser:d.getUser(),errorMessage:null},ee={session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_SUCCESS":return Object.assign({},e,{isLoggedIn:!0,currentUser:t.user,errorMessage:null});case"USER_LOGIN":return Object.assign({},e,{sendAuthRequest:!0});case"USER_LOGIN_FAILURE":return Object.assign({},e,{isLoggedIn:!1,errorMessage:t.errorMessage,currentUser:null});case"USER_LOGOUT":return Object.assign({},e,{sendAuthRequest:!0});case"USER_LOGOUT_SUCCESS":return Object.assign({},e,{isLoggedIn:!1,currentUser:null,errorMessage:null});case"USER_LOGOUT_FAILURE":return Object.assign({},e,{errorMessage:t.errorMessage});default:return e}}};Y=Object($.a)(Q.a);var te=Object($.d)(Object($.c)(Object(V.a)({},ee,{routerReducer:X.routerReducer})),Y);n(61);s.a.render(o.a.createElement(u.a,{store:te},o.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.06c2ac1a.chunk.js.map