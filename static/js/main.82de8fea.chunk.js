(this.webpackJsonppersonal_web_manager=this.webpackJsonppersonal_web_manager||[]).push([[0],{39:function(e,a,t){},40:function(e,a,t){},56:function(e,a,t){e.exports=t(79)},61:function(e,a,t){},62:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(19),l=t.n(r),o=(t(61),t(5)),m=t(3),i=t(18);t(62);var s=function(e){var a=e.title,t=e.path;return c.a.createElement(o.b,{className:"appmanager_link",to:t},c.a.createElement("div",{className:"appmanager_sidebarRow"},c.a.createElement("h2",{className:"appmanager_sidebarRow__title"},a)))};t(68);var u=function(e){var a=e.apps,t=e.show,r=Object(n.useState)(!1),l=Object(i.a)(r,2),o=l[0],m=l[1],u=function(e){27===e.keyCode&&m((function(e){return!e}))};return Object(n.useEffect)((function(){return window.addEventListener("keydown",u),function(){window.removeEventListener("keydown",u)}}),[]),c.a.createElement(c.a.Fragment,null,(o||t)&&c.a.createElement("div",{className:"appmanager_sidebar"},c.a.createElement("div",{className:"appmanager_sidebar__left"},c.a.createElement("h3",null,"React App Manager"),c.a.createElement("hr",null),a.map((function(e,a){return c.a.createElement(s,{key:a,title:e.title,path:e.path})}))),c.a.createElement("div",{className:"appmanager_sidebar__right",onClick:function(){return m(!o)}})))},d=(t(69),t(70),t(41)),h=t.n(d);var p=function(e){var a=e.title,t=e.description;return c.a.createElement("div",{className:"programCard"},c.a.createElement(h.a,null),c.a.createElement("div",{className:"programCard__info"},c.a.createElement("h3",null,a),c.a.createElement("p",null,t)))};var E=function(){var e=ne.slice(1);return c.a.createElement("div",{className:"appmanager_home"},c.a.createElement(u,{apps:ne,show:!0}),c.a.createElement("div",{className:"appmanager_right"},e.map((function(e,a){return c.a.createElement(p,{title:e.title,description:e.description})}))))},g=(t(72),t(73),t(34)),v=t.n(g),_=t(30),f=t.n(_),w=t(49),b=t.n(w),N=t(31),A=t.n(N),y=t(50),C=t.n(y),I=t(93);t(39);var k=function(e){var a=e.selected,t=e.Icon,n=e.title;return c.a.createElement("div",{className:"hiddenSidebarRow ".concat(a&&"selected")},c.a.createElement(t,{className:"hiddenSidebarRow__icon"}),c.a.createElement("h2",{className:"hiddenSidebarRow__title"},n))},S=t(26),L=t.n(S),j=t(27),q=t.n(j),R=t(28),B=t.n(R),T=t(29),O=t.n(T),x=t(45),F=t.n(x),M=t(46),Y=t.n(M),P=t(47),X=t.n(P),G=t(48),H=t.n(G);var J=function(){return c.a.createElement("div",{className:"hiddenSidebar"},c.a.createElement(k,{selected:!0,Icon:L.a,title:"Home"}),c.a.createElement(k,{Icon:q.a,title:"Trending"}),c.a.createElement(k,{Icon:B.a,title:"Subscription"}),c.a.createElement("hr",null),c.a.createElement(k,{Icon:O.a,title:"Library"}),c.a.createElement(k,{Icon:F.a,title:"History"}),c.a.createElement(k,{Icon:Y.a,title:"Watch Later"}),c.a.createElement(k,{Icon:X.a,title:"Liked video"}),c.a.createElement(k,{Icon:H.a,title:"Show more"}),c.a.createElement("hr",null))};var Q=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!1),m=Object(i.a)(l,2),s=m[0],u=m[1],d=function(){return u(!s)};return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(v.a,{className:"header__menu ".concat(s?"show_menu":""),onClick:d}),c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png",alt:""}))),s&&c.a.createElement("div",{className:"header__hiddenmenu"},c.a.createElement("div",{className:"header__left hiddenMenuLogo"},c.a.createElement(v.a,{className:"header__menu ".concat(s?"show_menu":""),onClick:d}),c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png",alt:""}))),c.a.createElement(J,null)),s&&c.a.createElement("div",{className:"header__hiddenoverlay"}),c.a.createElement("div",{className:"header__input"},c.a.createElement("input",{value:t,onChange:function(e){return r(e.target.value)},placeholder:"Search",type:"text"}),c.a.createElement(o.b,{to:"/search/".concat(t)},c.a.createElement(f.a,{className:"header__inputButton"}))),c.a.createElement("div",{className:"header__icons"},c.a.createElement(b.a,{className:"header__icon"}),c.a.createElement(A.a,{className:"header__icon"}),c.a.createElement(C.a,{className:"header__icon"}),c.a.createElement(I.a,null)))};t(40);var z=function(e){var a=e.selected,t=e.Icon,n=e.title;return c.a.createElement("div",{className:"sidebarRow ".concat(a&&"selected")},c.a.createElement(t,{className:"sidebarRow__icon"}),c.a.createElement("span",{className:"sidebarRow__title"},n))};var W=function(){return c.a.createElement("div",{className:"sidebar"},c.a.createElement(z,{selected:!0,Icon:L.a,title:"Home"}),c.a.createElement(z,{Icon:q.a,title:"Trending"}),c.a.createElement(z,{Icon:B.a,title:"Subscriptions"}),c.a.createElement(z,{Icon:O.a,title:"Library"}))};t(74),t(75);var Z=function(e){var a=e.image,t=e.title,n=e.channel,r=e.views,l=e.timestamp,o=e.channelImage,m=e.videoLink;return c.a.createElement("div",{className:"videoCard"},c.a.createElement("a",{href:m},c.a.createElement("img",{className:"videoCard__thumbnail",src:a,alt:""})),c.a.createElement("div",{className:"videoCard__info"},c.a.createElement(I.a,{className:"videoCard__avatar",alt:n,src:o}),c.a.createElement("div",{className:"videoCard__text"},c.a.createElement("a",{href:m},c.a.createElement("h4",null,t)),c.a.createElement("p",null,n),c.a.createElement("p",null,r," \u2022 ",l))))};var D=function(){return c.a.createElement("div",{className:"recommendedVideos"},c.a.createElement("h2",null,"Recommended"),c.a.createElement("div",{className:"recommendedVideo__videos"},c.a.createElement(Z,{image:"https://i.ytimg.com/vi/sBws8MSXN7A/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB6yE1WpYFAzqxZsOQ_iOCgftVphA",title:"React JS Crash Course",channel:"Traversy Media",views:"1.2M views",timestamp:"1 year ago",channelImage:"https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s48-c-k-c0xffffffff-no-rj-mo",videoLink:"https://www.youtube.com/watch?v=sBws8MSXN7A",channelLink:"https://www.youtube.com/user/TechGuyWeb"}),c.a.createElement(Z,{image:"https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDUo6f6PMFUNrF7BX5BOCiSyqVMcg",title:"React Tutorial for Beginners [React js]",channel:"Programming with Mosh",views:"2.4M views",timestamp:"2 weeks ago",channelImage:"https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s48-c-k-c0xffffffff-no-rj-mo",videoLink:"https://www.youtube.com/watch?v=Ke90Tje7VS0",channelLink:"https://www.youtube.com/user/programmingwithmosh"}),c.a.createElement(Z,{image:"https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDFnnAACOWUzXxtN7MGhP1HNfySEw",title:"Learn React JS - Full Course for Beginners - Tutorial 2019",channel:"freeCideCano,org",views:"1.8M views",timestamp:"1 year ago",channelImage:"https://yt3.ggpht.com/a/AATXAJwFt03RAznOsPwlfo5c1kW1rp-1o3Xgpw9MNreQMQ=s48-c-k-c0xffffffff-no-rj-mo",videoLink:"https://www.youtube.com/watch?v=DLX62G4lc44"}),c.a.createElement(Z,{image:"https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ",title:"\ud83d\udd34 Let's Build a YouTube Clone with REACT JS for Beginners",channel:"Clever Programmer",views:"77,687 views",timestamp:"2 weeks ago",channelImage:"https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo",videoLink:"https://www.youtube.com/watch?v=NT299zIk2JY"}),c.a.createElement(Z,{image:"https://i.ytimg.com/vi/hQAHSlTtcmY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7dW8xqZ0t2_CCgD753MspdIkujA",title:"Learn React In 30 Minutes",channel:"Web Dev Simplified",views:"156K views",timestamp:"10 months ago",channelImage:"https://yt3.ggpht.com/a/AATXAJzlhhukYsdgVeuIspbug5SNo_254oqP9ZyrY2E0=s48-c-k-c0xffffffff-no-rj-mo",videoLink:"https://www.youtube.com/watch?v=hQAHSlTtcmY"})))};var U=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement(Q,null),c.a.createElement("div",{className:"app__page"},c.a.createElement(W,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/search"}),c.a.createElement(m.a,{path:"/"},c.a.createElement(D,null))))))},V=(t(76),t(77),t(78),t(51)),K=t.n(V),$=t(92);var ee=function(e){var a=e.hideButtons,t=void 0!==a&&a,r=Object(n.useState)(""),l=Object(i.a)(r,2),o=l[0],m=l[1],s=function(e){e.preventDefault()};return c.a.createElement("form",{className:"search"},c.a.createElement("div",{className:"search__input"},c.a.createElement(f.a,{className:"search__inputIcon"}),c.a.createElement("input",{value:o,onChange:function(e){return m(e.target.value)}}),c.a.createElement(K.a,null)),t?c.a.createElement("div",{className:"search__buttons"},c.a.createElement($.a,{className:"search__buttonsHidden",type:"submit",onClick:s,variant:"outlined"},"Google Search"),c.a.createElement($.a,{className:"search__buttonsHidden",variant:"outlined"},"I'm Feeling Lucky")):c.a.createElement("div",{className:"search__buttons"},c.a.createElement($.a,{type:"submit",onClick:s,variant:"outlined"},"Google Search"),c.a.createElement($.a,{variant:"outlined"},"I'm Feeling Lucky")))};var ae=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__header"},c.a.createElement("div",{className:"home__headerLeft"},c.a.createElement(o.b,{to:"/about"},"About"),c.a.createElement(o.b,{to:"/store"},"Store")),c.a.createElement("div",{className:"home__headerRight"},c.a.createElement(o.b,{to:"/gmail"},"Gmail"),c.a.createElement(o.b,{to:"/images"},"Images"),c.a.createElement(A.a,null),c.a.createElement(I.a,null))),c.a.createElement("div",{className:"home__body"},c.a.createElement("img",{src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:""}),c.a.createElement("div",{className:"home__inputContainer"},c.a.createElement(ee,null))))};var te=function(){return c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"searchPage__header"},c.a.createElement("h1",null,"Search Page")),c.a.createElement("div",{className:"searchPage__results"}))};var ne=[{title:"Home",path:"/",description:"",app:E},{title:"youtube_clone",path:"/youtube_clone",description:"A React.js website that clones the Youtube styling.",app:U},{title:"google_clone",path:"/google_clone",description:"A React.js website that clones the Google styling.",app:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/search"},c.a.createElement(te,null)),c.a.createElement(m.a,{path:"/"},c.a.createElement(ae,null)))))}}];var ce=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(u,{apps:ne,show:!1}),c.a.createElement(m.c,null,ne.map((function(e,a){return c.a.createElement(m.a,{key:a,path:e.path,exact:!0,component:e.app})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.82de8fea.chunk.js.map