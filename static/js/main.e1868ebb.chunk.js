(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/profile.f38c752f.jpg"},15:function(e,a,t){e.exports=t(26)},20:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),s=t.n(i),l=(t(20),t(2)),c=t(3),o=t(4),m=t(5),d=t(14),u=t.n(d),p=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).sidebarData=e.sidebarData,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:u.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Awards")))))}}]),t}(n.Component),g=t(6),h=t(11),b=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).landingData=e.landingData,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",r.a.createElement("a",{href:"mailto:name@email.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin},r.a.createElement(g.a,{icon:h.b})),r.a.createElement("a",{href:this.landingData.github},r.a.createElement(g.a,{icon:h.a})))))}}]),t}(n.Component),v=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).experience=e.experience,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),t}(n.Component),f=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).education=e.education,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),t}(n.Component),E=t(8),N=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map(function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(g.a,{icon:E.b,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))}))))}}]),t}(n.Component),w=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).interests=e.interests,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),t}(n.Component),k=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).awards=e.awards,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(g.a,{icon:E.a,color:"#ffc107"}),r.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," "))}))))}}]),t}(n.Component),y=t(7),j=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={landingData:y.landing,experience:y.experience,education:y.education,skills:y.skills,interests:y.interests,awards:y.awards},n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(b,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(v,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(f,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(N,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{awards:this.state.awards})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports={landing:{firstName:"Beetoven",lastName:"Desir",phoneNumber:"+54-1156458395",bio:"I am an engineering student in information systems, currently working as a software developer at Mobile Computing Argentina and CTO at P\xfcl. My tech stack includes Python and Javascript. Java for server side and scripting and Javascript for the frontend. I use Spring Boot framework for the server side development and Angular for the frontend development. I have also worked with Rest Api.",email:"dbeetoven@gmail.com",linkedin:"https://linkedin.com/in/dbeetoven",github:"https://github.com/dbeetoven"},experience:[{position:"Software Developer Intern",organization:"Mobile Computing",aboutWork:"Building Api with Java and Front End with Angular.",fromDate:"February 2019",toDate:"Present"},{position:"CTO At PUl",organization:"Pul",aboutWork:"Pul makes commuting faster, more comfortable, and more predictable by connecting people going the same way through a mobile app. Drivers can share their car to reduce their expenses, and riders can enjoy the comfort of taking a car on everyday commutes, without even having to own one.",fromDate:"June 2019",toDate:"Present"},{position:"Software Developer Intern",organization:"Factor IT",aboutWork:"Building new apps with Ionic for Ios & android.",fromDate:"June 2017",toDate:"February 2019"}],education:[{university:"Licentiate degree, Systems Engineering UADE",degree:"Bachelor of Technology",gpa:"7.5",fromDate:"August 2016",toDate:"Present"},{university:"Engineering degree, Systems Engineering UTN",degree:"Bachelor of Technology",gpa:"7.5",fromDate:"March 2014",toDate:"August 2016"}],skills:[{name:"HTML5"},{name:"CSS3"},{name:"Javascript"},{name:"Angular"},{name:"Nodejs"},{name:"Python"},{name:"Java"},{name:"Typescript"}],interests:{paragraphOne:"Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.",paragraphTwo:"When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."},awards:[{awardDetail:"EmprenDev Hackaton 2016."},{awardDetail:"Introduction to Web Development  (Acamica)"},{awardDetail:"JavaScript (Code School)"},{awardDetail:"Java EE (Education IT)"},{awardDetail:"DataBase SQL Server (Education IT)"}]}}},[[15,1,2]]]);
//# sourceMappingURL=main.e1868ebb.chunk.js.map