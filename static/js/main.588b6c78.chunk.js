(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(53),c=a.n(r),o=(a(60),a(3)),i=a(4),s=a(6),m=a(5),u=a(2),f=a(25),p=a(1);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var l=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var d=function(e){Object(s.a)(a,e);var t=g(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).scrollToHome=function(e){try{document.getElementById("home").scrollIntoView({behavior:"smooth"})}catch(t){}},e.scrollToAbout=function(e){try{document.getElementById("about").scrollIntoView({behavior:"smooth"})}catch(t){}},e.scrollToPortfolio=function(e){try{document.getElementById("portfolio").scrollIntoView({behavior:"smooth"})}catch(t){}},e.scrollToSkills=function(e){try{document.getElementById("skills").scrollIntoView({behavior:"smooth"})}catch(t){}},e.scrollToContact=function(e){try{document.getElementById("contact").scrollIntoView({behavior:"smooth"})}catch(t){}},e}return Object(i.a)(a,[{key:"handleClick",value:function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:this.props.match.url+"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:this.props.match.url+"#nav",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",null,l.a.createElement("button",{className:" nav-btn",onClick:this.scrollToHome},l.a.createElement("i",{className:"fa fa-home"}))),l.a.createElement("li",null,l.a.createElement("button",{className:" nav-btn",onClick:this.scrollToAbout},"About")),l.a.createElement("li",null,l.a.createElement("button",{className:" nav-btn",onClick:this.scrollToPortfolio},"Portfolio")),l.a.createElement("li",null,l.a.createElement("button",{className:" nav-btn",onClick:this.scrollToSkills},"Skills")),l.a.createElement("li",null,l.a.createElement("button",{className:" nav-btn",onClick:this.scrollToContact},"Contact")),l.a.createElement("li",null,l.a.createElement(f.b,{className:"nav-btn",to:"/portfolioPdfViewer"},"PDF-View")))))}}]),a}(n.Component),E=Object(p.f)(d),v=a(28),h=a.n(v);a(66);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var l=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var y=function(e){Object(s.a)(a,e);var t=b(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).scrollToAbout=function(e){document.getElementById("about").scrollIntoView({behavior:"smooth"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.headerData,t=this.props.socialData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},l.a.createElement(h.a,{avgTypingDelay:170,cursor:{hideWhenDone:!0}},e.title)),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},l.a.createElement("i",{className:"fa fa-user"})," ",e.name,l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope"})," ",e.email,l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone"})," ",e.phone),l.a.createElement("br",null),l.a.createElement("div",{className:"copyright"},l.a.createElement(h.a,{avgTypingDelay:120,startDelay:6e3},l.a.createElement("span",null,e.made),l.a.createElement(h.a.Delay,{ms:1e3}),l.a.createElement(h.a.Backspace,{count:8,delay:150}),l.a.createElement("span",null," React "),l.a.createElement(h.a.Delay,{ms:1e3}),l.a.createElement(h.a.Backspace,{count:35,delay:150}),l.a.createElement("span",null,e.made),l.a.createElement("br",null),l.a.createElement("span",null,e.created))),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},t&&t.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{className:"scrolldown"},l.a.createElement("div",{id:"go-down"},l.a.createElement("button",{onClick:this.scrollToAbout},l.a.createElement("i",{className:"icon-down-circle"}))))))}}]),a}(n.Component);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var l=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var N=function(e){Object(s.a)(a,e);var t=k(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.aboutData,t=e.skillStack.filter(function(e){return e.category.includes("backEnd")}),a=e.skillStack.filter(function(e){return e.category.includes("frontEnd")}),n=e.skillStack.filter(function(e){return e.category.includes("etc")}),r=e.historys.filter(function(e){return e.category.includes("experience")}),c=e.historys.filter(function(e){return e.category.includes("license")});return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:e.meImageUrl,alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"about-start"},l.a.createElement("h2",null,l.a.createElement("span",null,"About Me"))),l.a.createElement("div",{className:"about-block"},l.a.createElement("h3",null,l.a.createElement("i",{className:"fa fa-briefcase"}),l.a.createElement("span",null,"\uc800\ub294 \uc774\ub7f0 \uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4")),l.a.createElement("p",null,e.introduction)),l.a.createElement("div",{className:"about-block"},l.a.createElement("h3",null,l.a.createElement("i",{className:"fa fa-folder-open"}),l.a.createElement("span",null,"\uae30\uc220 \uc2a4\ud0dd")),l.a.createElement("div",{className:"contentsLeft"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fa fa-copy"}),l.a.createElement("span",null,"BackEnd")),t&&t.map(function(e){return l.a.createElement("div",{key:e.contents,className:"contents"},l.a.createElement("span",null,"\u2022"),e.contents)})),l.a.createElement("div",{className:"contentsRight"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fa fa-copy"}),l.a.createElement("span",null,"FrontEnd")),a&&a.map(function(e){return l.a.createElement("div",{key:e.contents,className:"contents"},l.a.createElement("span",null,"\u2022"),e.contents)})),l.a.createElement("div",{className:"contentsLeft"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fa fa-copy"}),l.a.createElement("span",null,"Etc..")),n&&n.map(function(e){return l.a.createElement("div",{key:e.contents,className:"contents"},l.a.createElement("span",null,"\u2022"),e.contents)}))),l.a.createElement("div",{className:"about-block"},l.a.createElement("div",{className:"contentsLeft"},l.a.createElement("h3",null,l.a.createElement("i",{className:"fa fa-book"}),l.a.createElement("span",null,"\ud559\ub825, \ud65c\ub3d9")),r&&r.map(function(e){return l.a.createElement("div",{key:e.contents,className:"contents"},l.a.createElement("span",null,"\u2022"),e.contents)})),l.a.createElement("div",{className:"contentsRight"},l.a.createElement("h3",null,l.a.createElement("i",{className:"fa fa-credit-card"}),l.a.createElement("span",null,"\uc790\uaca9\uc99d")),c&&c.map(function(e){return l.a.createElement("div",{key:e.contents,className:"contents"},l.a.createElement("span",null,"\u2022"),e.contents)}))),l.a.createElement("div",null,l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-tags"})," ",e.favorite),l.a.createElement("a",{href:e.resumeDownload,download:"resume.pdf"},l.a.createElement("button",{className:"download"},l.a.createElement("i",{className:"fa fa-download"}," resume"))),l.a.createElement("a",{href:e.portfolioDownload,download:"portfolio.pdf"},l.a.createElement("button",{className:"download"},l.a.createElement("i",{className:"fa fa-download"}," portfolio")))))))}}]),a}(n.Component);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var l=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var D=function(e){Object(s.a)(a,e);var t=w(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.portfolioData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Portfolio"))),l.a.createElement("div",{className:"nine columns main-col"},e&&e.map(function(e){return l.a.createElement("div",{className:"row item portfolio-box",key:e.portfolioId},l.a.createElement("div",null,l.a.createElement("a",{href:e.gitHub,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"portfolio-pic",src:e.imgUrl,alt:""}))),l.a.createElement("div",{className:"twelve columns contents-box"},l.a.createElement("p",{className:"info"},l.a.createElement("i",{className:"fa fa-mail-forward"}),e.name),l.a.createElement("p",null,l.a.createElement("span",null,"\u2022"),"\uc124\uba85: ",l.a.createElement("em",{className:"tag"}," ",e.description," "),l.a.createElement("br",null),l.a.createElement("span",null,"\u2022"),"\uc81c\uc791 \uae30\uac04: ",l.a.createElement("em",{className:"tag"},e.period)," ",l.a.createElement("br",null),l.a.createElement("span",null,"\u2022"),"\uc0ac\uc6a9 \uae30\uc220: ",l.a.createElement("em",{className:"tag"},e.technology)," ",l.a.createElement("br",null),l.a.createElement("span",null,"\u2022"),l.a.createElement("a",{href:e.youTube,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-youtube-play"},"YouTube")))))}))))}}]),a}(n.Component);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var l=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var S=function(e){Object(s.a)(a,e);var t=j(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.skillsData&&0===this.props.skillsData.length)return null;if(void 0===this.props.skillsData)return null;var e=this.props.skillsData,t=e.filter(function(e){return e.category.includes("Language")}),a=e.filter(function(e){return e.category.includes("Framework")}),n=e.filter(function(e){return e.category.includes("Database")}),r=e.filter(function(e){return e.category.includes("System")}),c=e.filter(function(e){return e.category.includes("Managing")});return l.a.createElement("section",{key:"skills",id:"skills"},l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"six columns"},l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),0!==t.length?l.a.createElement("h4",null,"Language"):null,l.a.createElement("div",{className:"skill-box"},t&&t.map(function(e){return l.a.createElement("div",{className:"skill-pic",key:e.skillId},l.a.createElement("img",{src:e.imgUrl,alt:""}),l.a.createElement("div",{className:"darkness"}),l.a.createElement("div",{className:"btn-plus"},l.a.createElement("p",{draggable:"false"},e.level)),l.a.createElement("div",{className:"target-name"},l.a.createElement("p",null," ",e.skillname," ")))}))),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),0!==a.length?l.a.createElement("h4",null,"Framework"):null,l.a.createElement("div",{className:"skill-box"},a&&a.map(function(e){return l.a.createElement("div",{key:e.skillId,className:"skill-pic"},l.a.createElement("img",{src:e.imgUrl,alt:""}),l.a.createElement("div",{className:"darkness"}),l.a.createElement("div",{className:"btn-plus"},l.a.createElement("p",{draggable:"false"},e.level)),l.a.createElement("div",{className:"target-name"},l.a.createElement("p",null," ",e.skillname," ")))}))),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),0!==n.length?l.a.createElement("h4",null,"Database"):null,l.a.createElement("div",{className:"skill-box"},n&&n.map(function(e){return l.a.createElement("div",{key:e.skillId,className:"skill-pic"},l.a.createElement("img",{src:e.imgUrl,alt:""}),l.a.createElement("div",{className:"darkness"}),l.a.createElement("div",{className:"btn-plus"},l.a.createElement("p",{draggable:"false"},e.level)),l.a.createElement("div",{className:"target-name"},l.a.createElement("p",null," ",e.skillname," ")))}))),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),0!==r.length?l.a.createElement("h4",null,"System"):null,l.a.createElement("div",{className:"skill-box"},r&&r.map(function(e){return l.a.createElement("div",{key:e.skillId,className:"skill-pic"},l.a.createElement("img",{src:e.imgUrl,alt:""}),l.a.createElement("div",{className:"darkness"}),l.a.createElement("div",{className:"btn-plus"},l.a.createElement("p",{draggable:"false"},e.level)),l.a.createElement("div",{className:"target-name"},l.a.createElement("p",null," ",e.skillname," ")))}))),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),0!==c.length?l.a.createElement("h4",null,"Managing"):null,l.a.createElement("div",{className:"skill-box"},c&&c.map(function(e){return l.a.createElement("div",{key:e.skillId,className:"skill-pic"},l.a.createElement("img",{src:e.imgUrl,alt:""}),l.a.createElement("div",{className:"darkness"}),l.a.createElement("div",{className:"btn-plus"},l.a.createElement("p",{draggable:"false"},e.level)),l.a.createElement("div",{className:"target-name"},l.a.createElement("p",null," ",e.skillname," ")))})))),l.a.createElement("div",{className:"nine columns main-col"})))}}]),a}(n.Component);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var l=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var R=function(e){Object(s.a)(a,e);var t=O(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.contactData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("ul",null,e&&e.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("blockquote",null,l.a.createElement("p",{className:"contactMessage"},e.contactMessage),l.a.createElement("p",{className:"finishMessage"},e.finishMessage),l.a.createElement("i",{className:"fa fa-user userinfo"}," ",e.name),l.a.createElement("i",{className:"fa fa-envelope userinfo"}," ",e.email),l.a.createElement("i",{className:"fa fa-phone userinfo"}," ",e.phone)))})))))}}]),a}(n.Component);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var l=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var I=function(e){Object(s.a)(a,e);var t=L(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).scrollToHome=function(e){try{document.getElementById("home").scrollIntoView({behavior:"smooth"})}catch(t){console.log("\uc870\ud68c\ub41c Portfolio\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.socialData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e&&e.map(function(e){return l.a.createElement("li",{key:"footer"},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("div",{className:"top-scroll"},l.a.createElement("button",{className:"btn-up",onClick:this.scrollToHome},l.a.createElement("i",{className:"icon-up-open"})))),l.a.createElement("div",{className:"copyright"},l.a.createElement("p",null," A portfolio site made by ReactJS",l.a.createElement("br",null),"Dev Portfolio \xa92020 created by Lee-Hansung"))))}}]),a}(n.Component);function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var l=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var U=function(e){Object(s.a)(a,e);var t=P(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(y,{headerData:e.header,socialData:e.socialLinks}),l.a.createElement(N,{aboutData:e.about}),l.a.createElement(D,{portfolioData:e.portfolio}),l.a.createElement(S,{skillsData:e.skills}),l.a.createElement(R,{contactData:e.contact}),l.a.createElement(I,{socialData:e.socialLinks}))}}]),a}(n.Component),C={header:{title:"Developer Portfolio",name:"\uc774\ud55c\uc131",email:"dlgkstjd23@naver.com",phone:"010-5017-2438",made:"A portfolio site made by ReactJS.",created:"Dev Portfolio \xa92020 created by Lee-Hansung"},socialLinks:[{name:"github",url:"https://github.com/DevHansung",className:"fa fa-github"}],about:{meImageUrl:"static/images/me-image.jpg",introduction:"\uac1c\ubc1c\ud558\ub294\uac83\uc744 \uc88b\uc544\ud558\uace0, \uc88b\uc740 \uac1c\ubc1c\uc790\ub85c \uc131\uc7a5\ud558\uace0\uc2f6\uc740 \uc695\uc2ec\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud559\ubd80\uc2dc\uc808\uc5d0\ub294 \ubc30\uacbd\uc9c0\uc2dd\uc744 \uc313\uc73c\uba70 \ubcf4\ub2e4 \uadfc\ubcf8\uc801\uc778 \ubd80\ubd84\uc5d0 \uc9d1\uc911\ud558\uace0, \uc57d 1\ub144 \ubc18 \uc804\ubd80\ud130 \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8\ub97c \ubc18\ubcf5\uc801\uc73c\ub85c \uc9c4\ud589\ud558\ub294 \uc911 \uc785\ub2c8\ub2e4. \uafb8\uc900\ud568, \ub2e4\uc591\ud55c \uacbd\ud5d8, \ubc18\ubcf5\uc801\uc778 \uacbd\ud5d8\uc744 \uc911\uc810\uc0ac\ud56d\uc73c\ub85c \uc0bc\uace0 '\uc5b4\ub835\ub2e4\uace0 \ub290\uaef4\uc9c0\ub294\uac83\uc758 \ub300\ubd80\ubd84\uc740 \uc775\uc219\ud558\uc9c0 \uc54a\uc740\uac83\uc77c \ubfd0\uc774\ub2e4' \ub77c\ub294 \uc0dd\uac01\uc73c\ub85c \uac1c\ubc1c \uc790\uccb4\uc5d0 \uc775\uc219\ud574\uc9c0\ub824 \ub178\ub825\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacfc\uc815 \uc18d\uc5d0\uc11c \uc785\uc0ac \ud6c4 \ub9e1\uc740 \uc5c5\ubb34\uc640 \ud68c\uc0ac\uc758 \uac1c\ubc1c \uc2a4\ud0c0\uc77c\uc5d0 \ube60\ub974\uac8c \uc801\uc751\ud558\uae30 \uc704\ud574  \ubc94\uc6a9\uc801\uc778 \uae30\uc220 \uc704\uc8fc\ub85c \ub2e4\uc591\ud55c \uacbd\ud5d8\uc744 \ud558\uc600\uc2b5\ub2c8\ub2e4. \ud604\uc7ac\ub3c4 \uafb8\uc900\ud788 \uc5ed\ub7c9\uc744 \ud0a4\uc6b0\uae30 \uc704\ud558\uc5ec \ub2e4\ubc29\uba74\uc73c\ub85c \ub178\ub825\uc911\uc774\uba70, \uc800\uc758 \uc5ed\ub7c9\uc744 \ucd5c\ub300\uce58\ub85c \ub04c\uc5b4\ub0b4 \uc88b\uc740 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.",skillStack:[{category:"backEnd",contents:"Spring\uc758 \ub3d9\uc791\uad6c\uc870\uc640 \uac1c\ubc1c\ud750\ub984\uc744 \uc774\ud574"},{category:"backEnd",contents:"MVC\ud328\ud134\uc5d0 \ub300\ud55c \uc774\ud574"},{category:"backEnd",contents:"RestAPI \uac1c\ubc1c \uacbd\ud5d8"},{category:"backEnd",contents:"JPA(hibernate), Mybatis \uc0ac\uc6a9 \uacbd\ud5d8"},{category:"backEnd",contents:"DB\ub294 MySQL\uc744 \uc8fc\ub85c \uc0ac\uc6a9"},{category:"backEnd",contents:"\uac04\ub2e8\ud55c CRUD, JOIN, \ud2b8\ub9ac\uac70 \ucffc\ub9ac \uc791\uc131 \uacbd\ud5d8"},{category:"frontEnd",contents:"React\uc0ac\uc6a9 \uacbd\ud5d8(\uc0c1\ud0dc \uad00\ub9ac, VirtualDOM \uc774\ud574)"},{category:"frontEnd",contents:"BootStrap\uc0ac\uc6a9 \uacbd\ud5d8"},{category:"frontEnd",contents:"AJAX\ub97c \ube44\ub3d9\uae30 \ud1b5\uc2e0 \uc0ac\uc6a9 \uacbd\ud5d8"},{category:"frontEnd",contents:"HTML, CSS, JS(Jquary)\ub97c \uc774\uc6a9\ud558\uc5ec \ud654\uba74 \uad6c\uc131 \uac00\ub2a5"},{category:"etc",contents:"Linux \ud658\uacbd\uc5d0\uc11c \uac1c\ubc1c \uacbd\ud5d8"},{category:"etc",contents:"Git, AWS \ub2e8\uc21c \uc0ac\uc6a9 \uacbd\ud5d8"},{category:"review",contents:"NULL"}],historys:[{category:"experience",contents:"\ud55c\uc131\ub300\ud559\uad50 \uacf5\uacfc\ub300\ud559 \ucef4\ud4e8\ud130\uacf5\ud559\ubd80 \uc878\uc5c5"},{category:"experience",contents:"\uad50\uc218\uc5f0\uad6c\uc2e4 \uadfc\ubb34 \uacbd\ud5d8(\uc815\ubd80 \uc5f0\uad6c\uacfc\uc81c \ucc38\uc5ec)"},{category:"experience",contents:"\ud559\ubd80 \uc878\uc5c5\uc791\ud488\uc804 \ucc38\uc5ec \uacbd\ud5d8"},{category:"experience",contents:"\ud559\ubd80 \uacf5\ud559 \uacbd\uc9c4\ub300\ud68c \ucc38\uc5ec \uacbd\ud5d8"},{category:"experience",contents:"\uacf5\ubaa8\uc804 \ucc38\uc5ec(\uad50\ub0b4 \uc789\uae00\ub9ac\uc2dc\ub77c\uc6b4\uc9c0 \ud648\ud398\uc774\uc9c0 \uc81c\uc791)"},{category:"experience",contents:"Spring\uc744 \uc774\uc6a9\ud55c \ub2e4\uc218\uc758 \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"},{category:"license",contents:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc790\uaca9\uc99d \ucde8\ub4dd"},{category:"license",contents:"ACA-Photoshop-CS6 \uc790\uaca9\uc99d \ucde8\ub4dd"},{category:"license",contents:"\uc6b4\uc804\uba74\ud5c8(1\uc885 \ubcf4\ud1b5) \ucde8\ub4dd"}],favorite:"#Java #JS #Spring #SpringBoot #Backend #Web #React",resumeDownload:"static/pdf/resume.pdf",portfolioDownload:"static/pdf/portfolio.pdf"},portfolio:[{portfolioId:1,imgUrl:"static/images/portfolio/portfolio5.PNG",gitHub:"https://github.com/DevHansung/Springboot-TuiGrid-StoreManager",youTube:"null",name:"\ud310\ub9e4, \uc7ac\uace0\uad00\ub9ac \uc0ac\uc774\ud2b8",description:"SpringBoot+TuiGrid\ub85c \uad6c\ud604\ud55c \ud310\ub9e4, \uc7ac\uace0\uad00\ub9ac \uc0ac\uc774\ud2b8",period:"2020.07.01~\uac1c\ubc1c\uc911(70%\uc644\ub8cc)",technology:"#SpringBoot #TuiGrid #MyBatis #Bootstrap(adminLTE)"},{portfolioId:2,imgUrl:"static/images/portfolio/portfolio4.PNG",gitHub:"https://github.com/DevHansung/Springboot-React-DevPortfolio",youTube:"https://youtu.be/eUJHDjgg1hA",name:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uad00\ub9ac \uc0ac\uc774\ud2b8",description:"SpringBoot+React \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uad00\ub9ac \uc0ac\uc774\ud2b8",period:"2020.05.14~06.22(39\uc77c)",technology:"#SpringBoot #React #MySQL #Hibernate #AntDesign"},{portfolioId:3,imgUrl:"static/images/portfolio/portfolio3.PNG",gitHub:"https://github.com/DevHansung/Springboot-React-Diarist",youTube:"https://www.youtube.com/watch?v=JHhuUx7hnj8&feature=youtu.be",name:"\ucee4\ubba4\ub2c8\ud2f0, \uac8c\uc2dc\ud310",description:"Springboot+React \ucee4\ubba4\ub2c8\ud2f0, \uac8c\uc2dc\ud310",period:"2020.04.10~05.09(30\uc77c)",technology:"#SpringBoot #React #MySQL #Hibernate #AntDesign"},{portfolioId:4,imgUrl:"static/images/portfolio/portfolio2.PNG",gitHub:"https://github.com/DevHansung/Spring-GymStore",youTube:"https://www.youtube.com/watch?v=CVS4eP61m_Y&feature=youtu.be",name:"\uc1fc\ud551\ubab0, \ucee4\ubba4\ub2c8\ud2f0",description:"Spring \uc1fc\ud551\ubab0, \ucee4\ubba4\ub2c8\ud2f0",period:"2020.02.03.~02.27(25\uc77c)",technology:"#Spring #MySQL #MyBatis #Hibernate #jquary"},{portfolioId:5,imgUrl:"static/images/portfolio/portfolio1.jpg",gitHub:"https://github.com/DevHansung/Python-ReactNative-SmartHomeCCTV",youTube:"https://youtu.be/XwGct3jzOe4",name:"\uc778\uacf5\uc9c0\ub2a5 SmartHomeCCTV",description:"4\uc778 \ud300 \ud504\ub85c\uc81d\ud2b8(\ubcf8\uc778 \uae30\uc5ec\ub3c4 35%)",period:"2019.04.03.~06.03(60\uc77c)",technology:"#Flask #OpenCV #ReactNative #Linux #RaspberryPi"}],skills:[{skillId:1,category:"Language",skillname:"C",imgUrl:"static/images/skill_logo/c.png",level:"Lv.1"},{skillId:2,category:"Language",skillname:"Java",imgUrl:"static/images/skill_logo/java.png",level:"Lv.3"},{skillId:3,category:"Language",skillname:"JS",imgUrl:"static/images/skill_logo/js.png",level:"Lv.3"},{skillId:4,category:"Language",skillname:"Python",imgUrl:"static/images/skill_logo/python.png",level:"Lv.1"},{skillId:5,category:"Language",skillname:"HTML5",imgUrl:"static/images/skill_logo/html5.png",level:"Lv.3"},{skillId:6,category:"Language",skillname:"CSS",imgUrl:"static/images/skill_logo/css3.png",level:"Lv.3"},{skillId:7,category:"Framework",skillname:"Spring",imgUrl:"static/images/skill_logo/spring.png",level:"Lv.4"},{skillId:8,category:"Framework",skillname:"SpringBoot",imgUrl:"static/images/skill_logo/springboot.png",level:"Lv.4"},{skillId:9,category:"Framework",skillname:"React",imgUrl:"static/images/skill_logo/react.png",level:"Lv.3"},{skillId:10,category:"Framework",skillname:"Jquary",imgUrl:"static/images/skill_logo/jquary.png",level:"Lv.3"},{skillId:11,category:"Framework",skillname:"Flask",imgUrl:"static/images/skill_logo/flask.png",level:"Lv.2"},{skillId:12,category:"Framework",skillname:"Mybatis",imgUrl:"static/images/skill_logo/mybatis.png",level:"Lv.3"},{skillId:13,category:"Framework",skillname:"Hibernate",imgUrl:"static/images/skill_logo/hibernate.png",level:"Lv.3"},{skillId:14,category:"Database",skillname:"MySQL",imgUrl:"static/images/skill_logo/mysql.png",level:"Lv.4"},{skillId:15,category:"Database",skillname:"MariaDB",imgUrl:"static/images/skill_logo/mariadb.png",level:"Lv.3"},{skillId:16,category:"System",skillname:"Windows",imgUrl:"static/images/skill_logo/windows.png",level:"Lv.4"},{skillId:17,category:"System",skillname:"Linux",imgUrl:"static/images/skill_logo/linux.png",level:"Lv.3"},{skillId:18,category:"Managing",skillname:"GitHub",imgUrl:"static/images/skill_logo/github.png",level:"Lv.2"},{skillId:19,category:"Database",skillname:"AWS",imgUrl:"static/images/skill_logo/aws.png",level:"Lv.2"}],contact:[{contactMessage:"\ubcf8 \uc0ac\uc774\ud2b8\ub294 React\ub85c \ub9cc\ub4e4\uc5b4 \uc84c\uc73c\uba70 \ubcf8\uc778\uc774 \uc9c4\ud589\ud55c \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uad00\ub9ac \uc0ac\uc774\ud2b8 \uac1c\ubc1c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ubc31\uc5d4\ub4dc \ubd80\ubd84\uc758 \ucf54\ub4dc\ub97c \uc81c\uac70\ud558\uace0 \ud504\ub860\ud2b8\uc5d4\ub4dc \ubd80\ubd84\ub9cc \uac00\uc838\uc640 \ub85c\uc9c1\uc744 \uac04\uc18c\ud654 \uc2dc\ud0a8 \ub4a4 \uc815\uc801 \uc6f9\uc0ac\uc774\ud2b8\ub85c \uc7ac\uad6c\uc131 \ud55c \uac83 \uc785\ub2c8\ub2e4.",finishMessage:"Thank You",name:"\uc774\ud55c\uc131",email:"dlgkstjd23@naver.com",phone:"010-5017-2438"}],pdfView:{pdfUrl:"static/pdf/portfolio.pdf"}},x=a(37);function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var l=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}x.pdfjs.GlobalWorkerOptions.workerSrc="https://cdn.bootcss.com/pdf.js/2.1.266/pdf.worker.js";var H=function(e){Object(s.a)(a,e);var t=T(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={numPages:null,pageNumber:1},e.onDocumentLoadSuccess=function(t){var a=t.numPages;e.setState({numPages:a})},e.onPageUp=function(){if(e.state.pageNumber!==e.state.numPages){var t=e.state.pageNumber+1;e.setState({pageNumber:t})}},e.onPageDown=function(){if(1!==e.state.pageNumber){var t=e.state.pageNumber-1;e.setState({pageNumber:t})}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.pageNumber,a=e.numPages,n=this.props.resumeData.pdfView.pdfUrl;return l.a.createElement("div",null,l.a.createElement("nav",{className:"port-nav-wrap"},l.a.createElement(f.b,{to:"/"},l.a.createElement("div",{className:"nav-contents"},"Go to Back"))),l.a.createElement("div",{className:"portfolioviewer"},l.a.createElement("div",null,l.a.createElement(x.Document,{className:"pdf-box",file:n,onLoadSuccess:this.onDocumentLoadSuccess},l.a.createElement(x.Page,{pageNumber:t}),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{className:"color",type:"button",onClick:this.onPageDown},"\u2039"),l.a.createElement("span",null,"Page ",t," of ",a),l.a.createElement("button",{className:"color",type:"button",onClick:this.onPageUp},"\u203a"))))))}}]),a}(n.Component);function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var l=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var M=function(e){Object(s.a)(a,e);var t=B(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/portfolioPdfViewer",render:function(){return l.a.createElement(H,{resumeData:C})}}),l.a.createElement(p.a,{path:"/",render:function(){return l.a.createElement(U,{resumeData:C})}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f.a,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=34},55:function(e,t,a){e.exports=a(107)},60:function(e,t,a){},71:function(e,t){},73:function(e,t){},74:function(e,t){},75:function(e,t){},76:function(e,t){}},[[55,2,1]]]);
//# sourceMappingURL=main.588b6c78.chunk.js.map