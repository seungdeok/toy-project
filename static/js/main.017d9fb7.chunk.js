(this["webpackJsonpreact-fb-twitter"]=this["webpackJsonpreact-fb-twitter"]||[]).push([[0],{45:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(26),i=n.n(a),s=n(8),u=n(18),o=n(5),l=n(1),j=function(e){var t=e.userInfo;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(u.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsxs)(u.b,{to:"/profile",children:[t.displayName,"\uc758 \ud504\ub85c\ud544"]})})]})})},d=n(28),f=n(19);n(41),n(47),n(46);f.a.initializeApp({apiKey:"AIzaSyDOt0CBSa8Q8KgtQlQj6jAGxxnLxEIgPZc",authDomain:"react-twitter-fa69a.firebaseapp.com",projectId:"react-twitter-fa69a",storageBucket:"react-twitter-fa69a.appspot.com",messagingSenderId:"1031547208022",appId:"1:1031547208022:web:f96f69c83c03d57c4c56f7"});var b=f.a,p=f.a.auth(),h=f.a.firestore(),O=f.a.storage(),x=n(6),v=n.n(x),m=n(11),w=function(e){var t=e.tweetInfo,n=e.isOwner,c=Object(r.useState)(!1),a=Object(s.a)(c,2),i=a[0],u=a[1],o=Object(r.useState)(t.text),j=Object(s.a)(o,2),d=j[0],f=j[1],b=function(){var e=Object(m.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this tweet?")){e.next=6;break}return e.next=4,h.collection("tweets").doc("".concat(t.id)).delete();case 4:return e.next=6,O.refFromURL(t.fileUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){return u((function(e){return!e}))},x=function(){var e=Object(m.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.collection("tweets").doc("".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{children:i?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:x,children:[Object(l.jsx)("input",{type:"text",placeholder:"Edit your tweet",value:d,required:!0,onChange:function(e){var t=e.target.value;f(t)}}),Object(l.jsx)("input",{type:"submit",value:"Update tweet"})]}),Object(l.jsx)("button",{onClick:p,children:"Cancel"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:t.text}),t.fileUrl&&Object(l.jsx)("img",{src:t.fileUrl,width:"50px",height:"50px"}),n&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:b,children:"Delete Tweet"}),Object(l.jsx)("button",{onClick:p,children:"Edit Tweet"})]})]})})},g=n(49),y=function(e){var t=e.userInfo,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],i=c[1],u=Object(r.useState)(),o=Object(s.a)(u,2),j=o[0],d=o[1],f=function(){var e=Object(m.a)(v.a.mark((function e(n){var r,c,s,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",!j){e.next=12;break}return e.next=5,O.ref().child("".concat(t.uid,"/").concat(Object(g.a)()));case 5:return c=e.sent,e.next=8,c.putString(j,"data_url");case 8:return s=e.sent,e.next=11,s.ref.getDownloadURL();case 11:r=e.sent;case 12:return u={text:a,createdAt:Date.now(),creatorId:t.uid,fileUrl:r},e.next=15,h.collection("tweets").add(u);case 15:i(""),d(null);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("form",{onSubmit:f,children:[Object(l.jsx)("input",{type:"text",placeholder:"What`s on your mind?",maxLength:120,value:a,onChange:function(e){var t=e.target.value;i(t)}}),Object(l.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)}}),Object(l.jsx)("input",{type:"submit",value:"Tweet"}),j&&Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:j,width:"50px",height:"50px"}),Object(l.jsx)("button",{onClick:function(){return d(null)},children:"CLEAR"})]})]})},I=function(e){var t=e.userInfo,n=Object(r.useState)([]),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){h.collection("tweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(d.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{userInfo:t}),a.map((function(e){return Object(l.jsx)(w,{tweetInfo:e,isOwner:e.creatorId===t.uid},e.id)}))]})},S=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),u=i[0],o=i[1],j=Object(r.useState)(!0),d=Object(s.a)(j,2),f=d[0],b=d[1],h=Object(r.useState)(""),O=Object(s.a)(h,2),x=O[0],w=O[1],g=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?c(r):"password"===n&&o(r)},y=function(){var e=Object(m.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,p.createUserWithEmailAndPassword(n,u);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,p.signInWithEmailAndPassword(n,u);case 10:r=e.sent;case 11:console.log(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:y,children:[Object(l.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:g}),Object(l.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:g}),Object(l.jsx)("input",{type:"submit",value:f?"Create Account":"LOGIN"}),x]}),Object(l.jsx)("span",{onClick:function(){return b((function(e){return!e}))},children:f?"Sign In":"Sign Up"})]})},k=function(){var e=function(){var e=Object(m.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new b.auth.GoogleAuthProvider:"github"===n&&(r=new b.auth.GithubAuthProvider),e.next=4,p.signInWithPopup(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)(S,{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:e,name:"google",children:"Continue with Googld"}),Object(l.jsx)("button",{onClick:e,name:"github",children:"Continue with Github"})]})]})},C=function(e){var t=e.refreshUser,n=e.userInfo,c=Object(o.f)(),a=Object(r.useState)(n.displayName),i=Object(s.a)(a,2),u=i[0],j=i[1],d=function(){var e=Object(m.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.signOut();case 2:c.push("/"),t();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(m.a)(v.a.mark((function e(r){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n.displayName===u){e.next=5;break}return e.next=4,n.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(m.a)(v.a.mark((function e(){var t,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("tweets").where("creatorId","==",n.uid).orderBy("createdAt","desc").get();case 2:t=e.sent,r=t.docs.map((function(e){return e.data()})),console.log(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){b()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:f,children:[Object(l.jsx)("input",{type:"text",placeholder:"DisplayName",value:u,onChange:function(e){var t=e.target.value;j(t)}}),Object(l.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(l.jsx)("button",{onClick:d,children:"LOGOUT"})]})},U=function(e){var t=e.refreshUser,n=e.isLoggedIn,r=e.userInfo;return Object(l.jsxs)(u.a,{children:[n&&Object(l.jsx)(j,{userInfo:r}),Object(l.jsx)(o.c,{children:n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(I,{userInfo:r})}),Object(l.jsx)(o.a,{exact:!0,path:"/profile",children:Object(l.jsx)(C,{refreshUser:t,userInfo:r})})]}):Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(k,{})})})]})},A=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(s.a)(a,2),u=i[0],o=i[1],j=Object(r.useState)(null),d=Object(s.a)(j,2),f=d[0],b=d[1];Object(r.useEffect)((function(){p.onAuthStateChanged((function(e){e?(o(!0),b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(o(!1),b(null)),c(!0)}))}),[]);return Object(l.jsxs)(l.Fragment,{children:[n?Object(l.jsx)(U,{refreshUser:function(){var e=p.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:u,userInfo:f}):"Initializing...",Object(l.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," twitter clone"]})]})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.017d9fb7.chunk.js.map