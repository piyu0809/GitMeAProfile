(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,n){e.exports=n(433)},204:function(e,t,n){},206:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},207:function(e,t,n){},433:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),l=n(57),r=n.n(l),i=(n(204),n(30)),c=n(31),s=n(33),u=n(32),m=n(34),h=(n(206),n(207),n(126)),f=n.n(h),p=(n(386),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.userdata,t="".concat(e.homeurl,"/followers"),n="".concat(e.homeurl,"/following"),a="".concat(e.homeurl,"/repositories");return"Not Found"===e.notfound?o.a.createElement("div",{className:"notfound"},o.a.createElement("h2",null,"Heyyy"),o.a.createElement("p",null,"Are you sure, for whom you are loooking for??")):o.a.createElement("section",{className:"github-profile"},o.a.createElement("div",{className:"github-profile-info"},o.a.createElement("a",{href:e.homeUrl,target:"_blank",title:e.name||e.username},o.a.createElement("img",{src:e.avatar})),o.a.createElement("h2",null,o.a.createElement("a",{href:e.homeUrl,title:e.username,target:"_blank"},e.name||e.username)),o.a.createElement("h3",null,e.location)),o.a.createElement("div",{className:"github-profile-state"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:t,target:"_blank",title:"Number Of Followers"},o.a.createElement("i",null,e.followers),o.a.createElement("span",null,"Followers"))),o.a.createElement("li",null,o.a.createElement("a",{href:a,target:"_blank",title:"Number Of Repositoriy"},o.a.createElement("i",null,e.repos),o.a.createElement("span",null,"Repositoriy"))),o.a.createElement("li",null,o.a.createElement("a",{href:n,target:"_blank",title:"Number Of Following"},o.a.createElement("i",null,e.following),o.a.createElement("span",null,"Following"))))))}}]),t}(a.Component)),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"submit",value:function(e){e.preventDefault();var t=this.refs.username.value;this.props.searchprofile(t),this.refs.username.value=""}},{key:"render",value:function(){return o.a.createElement("section",{className:"search-box"},o.a.createElement("form",{onSubmit:this.submit.bind(this)},o.a.createElement("label",null,o.a.createElement("input",{type:"search",ref:"username",placeholder:"Type username and hit enter..."}))))}}]),t}(a.Component),d=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={username:"piyu0809",avatar:"",name:"",repos:"",followers:"",following:"",homeurl:"",notfound:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getprofile",value:function(e){var t=this,n="".concat("https://api.github.com/users","/").concat(e);fetch(n).then(function(e){return e.json()}).then(function(e){t.setState({username:e.login,avatar:e.avatar_url,name:e.name,repos:e.public_repos,followers:e.followers,following:e.following,homeurl:e.html_url,notfound:e.message})}).catch(function(e){return console.log("there was problem fethcing data")})}},{key:"componentDidMount",value:function(){this.getprofile(this.state.username)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("section",{id:"card"},o.a.createElement("h4",null," Welcome to GitHUb Searcher."),o.a.createElement(g,{searchprofile:this.getprofile.bind(this)}),o.a.createElement(p,{userdata:this.state})))}}]),t}(a.Component),b=n(436),k=n(435),E=n(437),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onLogin",value:function(){this.props.onLogin()}},{key:"onLogout",value:function(){this.props.onLogout()}},{key:"render",value:function(){var e;return e=this.props.idToken?o.a.createElement(b.a,{onClick:this.onLogout.bind(this),href:"#"},"Logout"):o.a.createElement(b.a,{onClick:this.onLogin.bind(this),href:"#"},"LogIn"),o.a.createElement(k.a,null,o.a.createElement(k.a.Header,null,o.a.createElement(k.a.Brand,null,"Github Searcher")),o.a.createElement(E.a,null,e))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={idToken:"",profile:{}},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.lock=new f.a(this.props.clientId,this.props.domain),this.lock.on("authenticated",function(t){e.lock.getProfile(t.accessToken,function(n,a){n?console.log(n):e.setProfile(t.accessToken,a)})}),this.getProfile()}},{key:"setProfile",value:function(e,t){localStorage.setItem("idToken",e),localStorage.setItem("profile",JSON.stringify(t)),this.setState({idToken:localStorage.getItem("idToken"),profile:JSON.parse(localStorage.getItem("profile"))})}},{key:"getProfile",value:function(){null!=localStorage.getItem("idToken")&&this.setState({idToken:localStorage.getItem("idToken"),profile:JSON.parse(localStorage.getItem("profile"))})}},{key:"showlock",value:function(){this.lock.show()}},{key:"logout",value:function(){this.setState({idToken:"",profile:""},function(){localStorage.removeItem("idToken"),localStorage.removeItem("profile")})}},{key:"render",value:function(){var e;return e=this.state.idToken?o.a.createElement(d,null):"Click on Login to go to GitHUb Viewer",o.a.createElement("div",{className:"App"},o.a.createElement(v,{lock:this.lock,idToken:this.state.idToken,profile:this.state.profile,onLogout:this.logout.bind(this),onLogin:this.showlock.bind(this)}),e)}}]),t}(a.Component);w.defaultProps={clientId:"oOUwAkK4NaR06OVJXtYjHyku22EJfVie",domain:"piyu0809.auth0.com"};var y=w;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[199,2,1]]]);
//# sourceMappingURL=main.f62ea3ea.chunk.js.map