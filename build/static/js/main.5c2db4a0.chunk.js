(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{260:function(e,t,a){e.exports=a(446)},286:function(e,t,a){},446:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"AUTH_USER",function(){return y}),a.d(n,"SIGN_OUT_USER",function(){return j}),a.d(n,"SET_USER",function(){return S}),a.d(n,"CLEAR_USER",function(){return N}),a.d(n,"SELECT_CHANNEL",function(){return k}),a.d(n,"selectChannel",function(){return U}),a.d(n,"clearUser",function(){return w}),a.d(n,"setUser",function(){return A}),a.d(n,"signOutUser",function(){return _}),a.d(n,"verifyAuth",function(){return R}),a.d(n,"authUser",function(){return I});var r=a(0),s=a.n(r),c=a(64),l=a.n(c),i=a(18),o=a(19),u=a(21),h=a(20),m=a(22),d=a(147),p=a(69),f=a(467),g=a(463),v=a(48),E=a(222),b=a(57),O=a(109),C=a.n(O),y=(a(158),a(273),"AUTH_USER"),j="SIGN_OUT_USER",S="SET_USER",N="CLEAR_USER",k="SELECT_CHANNEL";function U(e){return{type:k,payload:{selectedChannel:e}}}function w(){return{type:N}}function A(e){return{type:S,payload:{currentUser:e}}}function _(){return function(e){C.a.auth().signOut().then(function(){e({type:j})})}}function R(){return function(e){C.a.auth().onAuthStateChanged(function(t){e(t?I():_())})}}function I(){return{type:y}}C.a.initializeApp({apiKey:"AIzaSyCHQAfMk80sgGJygf02I6qIvyahvIZFPRA",authDomain:"chat-app3-43770.firebaseapp.com",databaseURL:"https://chat-app3-43770.firebaseio.com",projectId:"chat-app3-43770",storageBucket:"chat-app3-43770.appspot.com",messagingSenderId:"760270788173"});var x={authenticated:!1,authError:null};var L={currentUser:null};var T={selectedChannel:null};var M=Object(v.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;switch((arguments.length>1?arguments[1]:void 0).type){case y:return Object(b.a)({},e,{authenticated:!0,authError:null});case j:return Object(b.a)({},e,{authenticated:!1,authError:null});default:return e}},router:p.c,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{currentUser:t.payload.currentUser};case N:return Object(b.a)({},e);default:return e}},channel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(b.a)({},e,{selectedChannel:t.payload.selectedChannel});default:return e}}}),D=a(224),P=a.n(D)()();var W=a(29),H=a(469),z=a(455),K=a(221),X=a(30),B=a.n(X),F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"message__author"},s.a.createElement("strong",null,this.props.userName)),this.props.message)}}]),t}(r.Component),G=(a(286),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleSend=function(){if(a.state.message){var e={userName:a.state.userName&&a.props.currentUser.displayName,message:a.state.message,id:a.props.currentUser.uid,timeDetail:B.a.database.ServerValue.TIMESTAMP,channel_id:a.props.selectedChannel.id};a.messageRef.child(a.props.selectedChannel.id).push().set(e).then(function(){a.setState({message:""})}).catch(function(e){console.log(e)})}},a.listMessages=function(e){return e.map(function(e){return Object.keys(e).map(function(t){if(a.props.selectedChannel.id===e[t].channel_id)return s.a.createElement(F,{key:e[t].timeDetail,message:e[t].message,userName:e[t].userName})})})},a.state={userName:null,message:"",messages:[],loadedmessages:[]},a.messageRef=B.a.database().ref("messages"),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.listenMessages()}},{key:"componentWillReceiveProps",value:function(e){this.setState({userName:e.currentUser})}},{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.handleSend()}},{key:"listenMessages",value:function(){var e=this,t=[];this.messageRef.on("value",function(a){a.forEach(function(e){t.push(e.val()),console.log(t)}),e.setState({loadedmessages:Object.values(a.val())})})}},{key:"render",value:function(){var e=this.state.loadedmessages;return s.a.createElement(H.a,{minWidth:320,maxWidth:1969,className:"form"},s.a.createElement("div",{className:"chatroom",style:{height:300,width:"90%"}},this.listMessages(e)),s.a.createElement("div",{className:"input-button"},s.a.createElement(z.a,{className:"input-field",type:"text",placeholder:"type message",value:this.state.message,onChange:this.handleChange.bind(this),onKeyPress:this.handleKeyPress.bind(this)}),s.a.createElement(K.a,{icon:"send",className:"send",onClick:this.handleSend})))}}]),t}(r.Component));var J=Object(W.b)(function(e){return{currentUser:e.user.currentUser,selectedChannel:e.channel.selectedChannel}})(G),V=a(47),q=a(247),Q=a(462),Z=a(465),Y=a(466),$=a(460),ee=a(459),te=a(458),ae=a(461),ne=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).openModal=function(){a.setState({modalIsOpen:!0})},a.closeModal=function(){a.setState({modalIsOpen:!1})},a.handleSubmit=function(e){e.preventDefault(),a.setState({channelName:"",channels:Object(q.a)(a.state.channels).concat([a.state.channelName])}),a.createChannel(),a.closeModal()},a.handleChange=function(e){a.setState(Object(V.a)({},e.target.name,e.target.value))},a.createChannel=function(e){var t=a.state.channelName,n=a.channelsRef.push().key;if(a.state.channelName){var r={name:t,id:n,createdBy:{name:a.props.currentUser.displayName}};a.channelsRef.child(n).update(r).then(function(){a.setState({channelName:""}),a.closeModal(),console.log("channel added")}).catch(function(e){console.log(e)})}},a.setFirstChannel=function(){var e=a.state.channels[0];a.state.firstLoad&&a.state.channels.length>0&&(a.props.selectChannel(e),a.setActiveChannel(e)),a.setState({firstLoad:!1})},a.selectChannel=function(e){a.setActiveChannel(e),a.props.selectChannel(e)},a.setActiveChannel=function(e){a.setState({activeChannel:e.id})},a.listChannels=function(e){return e.map(function(e){return s.a.createElement(Q.a.Item,{key:e.id,onClick:function(){return a.selectChannel(e)},name:e.name},"# ",e.name)})},a.state={user:null,modalIsOpen:!1,channels:[],channelName:"",firstLoad:!0,activeChannel:""},a.channelsRef=B.a.database().ref("channels"),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.listenChannels()}},{key:"componentWillReceiveProps",value:function(e){this.setState({user:e.currentUser})}},{key:"componentWillUnmount",value:function(){this.removeChannel()}},{key:"listenChannels",value:function(){var e=this,t=[];this.channelsRef.on("value",function(a){a.forEach(function(e){console.log(t)}),e.setState({channels:Object.values(a.val())},function(){return e.setFirstChannel()})})}},{key:"removeChannel",value:function(){this.channelsRef.off()}},{key:"render",value:function(){var e=this.state.channels;return s.a.createElement(Z.a,null,s.a.createElement(Z.a.Column,null,s.a.createElement(Z.a.Row,{style:{padding:"1.2em"}},s.a.createElement(Y.a,{inverted:!0,floated:"left",as:"h2"},s.a.createElement(Y.a.Content,{style:{margin:"20px"}},"Chat-App"))),s.a.createElement(Y.a,{style:{padding:"0.95em"},as:"h4",inverted:!0},s.a.createElement($.a,{trigger:s.a.createElement("span",null,this.state.user&&this.props.currentUser.displayName)},s.a.createElement($.a.Menu,null,s.a.createElement($.a.Item,{onClick:this.props.signOut,text:"Sign Out"}),s.a.createElement($.a.Item,{text:"Settings"})))),s.a.createElement(Y.a,{style:{margin:"20px"}},"CHANNELS(",e.length,")",s.a.createElement(K.a,{onClick:this.openModal,style:{float:"right"},name:"plus"}),s.a.createElement(ee.a,{style:{width:"600px",marginTop:"180px",marginLeft:"360px",height:"40vh"},open:this.state.modalIsOpen},s.a.createElement(ee.a.Content,null,s.a.createElement(Y.a,{as:"h1",textAlign:"center"},"Create a Channel"),s.a.createElement(te.a,{onSubmit:this.handleSubmit},s.a.createElement(z.a,{fluid:!0,style:{marginTop:"30px"},name:"channelName",placeholder:"channel name",value:this.state.channelName,onChange:this.handleChange}),s.a.createElement(ae.a,{onClick:this.handleSubmit,style:{marginTop:"60px",float:"right"}},"Create Channel")))),this.listChannels(e))))}}]),t}(r.Component);var re=Object(W.b)(function(e){return{currentUser:e.user.currentUser}},{selectChannel:U})(ne),se=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(Q.a,{style:{background:"#4d394b"},size:"small",fixed:"left",vertical:!0},s.a.createElement(re,{signOut:this.props.signOut}))}}]),t}(r.Component),ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleSignOut=function(){a.props.signOutUser()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;B.a.auth().onAuthStateChanged(function(t){t?e.props.setUser(t):e.props.clearUser()})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(se,{signOut:this.handleSignOut}),s.a.createElement(J,null))}}]),t}(r.Component),le=Object(W.b)(null,n)(ce),ie=a(464),oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){a.setState(Object(V.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),B.a.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).then(function(e){console.log(e),e.user.updateProfile({displayName:a.state.username}).then(function(){a.saveUser(e).then(function(){console.log("user saved")})})}).catch(function(e){console.log(e)})},a.saveUser=function(e){return a.userRef.child(e.user.uid).set({name:e.user.displayName})},a.state={username:"",email:"",password:"",passwordConfirmation:"",error:null},a.userRef=B.a.database().ref("users"),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.email,r=e.passwordConfirmation,c=a!==r||""===a||""===n||""===t;return s.a.createElement(Z.a,{style:{height:"100vh"},textAlign:"center",verticalAlign:"middle",className:"signup-form"},s.a.createElement(Z.a.Column,{style:{maxWidth:450}},s.a.createElement(te.a,{size:"large",onSubmit:this.onSubmit},s.a.createElement(ie.a,null,s.a.createElement(te.a.Input,{name:"username",placeholder:"username",value:t,onChange:this.onChange}),s.a.createElement(te.a.Input,{name:"email",placeholder:"email",value:n,onChange:this.onChange}),s.a.createElement(te.a.Input,{name:"password",placeholder:"password",value:a,type:"password",onChange:this.onChange}),s.a.createElement(te.a.Input,{name:"passwordConfirmation",placeholder:"password confirmation",value:r,type:"password",onChange:this.onChange}),s.a.createElement(ae.a,{disabled:c},"Sign Up")))))}}]),t}(r.Component),ue=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onChange=function(e){a.setState(Object(V.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){B.a.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.password,a=e.email,n=""===t||""===a;return s.a.createElement(Z.a,{style:{height:"100vh"},textAlign:"center",verticalAlign:"middle",className:"signup-form"},s.a.createElement(Z.a.Column,{style:{maxWidth:450}},s.a.createElement(te.a,{size:"large",onSubmit:this.onSubmit},s.a.createElement(ie.a,null,s.a.createElement(te.a.Input,{name:"email",placeholder:"email",value:a,onChange:this.onChange}),s.a.createElement(te.a.Input,{name:"password",placeholder:"password",value:t,type:"password",onChange:this.onChange}),s.a.createElement(ae.a,{disabled:n},"Login")))))}}]),t}(r.Component);var he=Object(W.b)(function(e){return{authenticationError:e.auth.authError}},n)(ue),me=a(457),de=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderAuthLinks",value:function(){return this.props.authenticated?[s.a.createElement("li",{className:"nav-item",key:1},s.a.createElement(me.a,{className:"nav-link",to:"/home"},"Home"))]:[s.a.createElement("li",{className:"nav-item",key:1},s.a.createElement(me.a,{className:"nav-link",to:"/login"},"Login")),s.a.createElement("li",{className:"nav-item",key:2},s.a.createElement(me.a,{className:"nav-link",to:"/signup"},"Sign Up"))]}},{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar navbar-default"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ul",{className:"nav navbar-nav navbar-right"},this.renderAuthLinks())))}}]),t}(s.a.Component);var pe=Object(W.b)(function(e){return{authenticated:e.auth.authenticated}},n)(de),fe=function(e){var t=e.component,a=e.authenticated,n=Object(d.a)(e,["component","authenticated"]);return s.a.createElement(f.a,Object.assign({},n,{render:function(e){return!0===a?s.a.createElement(t,e):s.a.createElement(g.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ge=function(e){var t=e.component,a=e.authenticated,n=Object(d.a)(e,["component","authenticated"]);return s.a.createElement(f.a,Object.assign({},n,{render:function(e){return!1===a?s.a.createElement(t,e):s.a.createElement(g.a,{to:"/home"})}}))},ve=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{history:P},s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement(f.a,{exact:!0,path:"/",component:pe}),s.a.createElement(ge,{authenticated:this.props.authenticated,path:"/signup",component:oe}),s.a.createElement(ge,{authenticated:this.props.authenticated,path:"/login",component:he}),s.a.createElement(fe,{authenticated:this.props.authenticated,path:"/home",component:le}))))}}]),t}(s.a.Component),Ee=Object(W.b)(function(e){return{authenticated:e.auth.authenticated}})(ve),be=function(e){var t=Object(v.e)(M,e,Object(v.d)(Object(v.a)(E.a,Object(p.b)(P)),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():void 0));return t.dispatch(R()),t}();l.a.render(s.a.createElement(W.a,{store:be},s.a.createElement(Ee,null)),document.getElementById("app"))}},[[260,2,1]]]);
//# sourceMappingURL=main.5c2db4a0.chunk.js.map