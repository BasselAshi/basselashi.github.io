(this.webpackJsonpbasselashi=this.webpackJsonpbasselashi||[]).push([[0],{46:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),i=s.n(c),o=s(19),r=s.n(o),n=s(3),l=s(4),d=s(6),m=s(5),h=s(17),j=s(9),b=(s(46),s(7)),u=s.n(b),p=(s(18),s(37)),x=s.n(p),g=s(25),O=s.n(g),v=(s(59),function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){O.a.setJQuery(u.a),x()("flickity",O.a,u.a),u()(".carousel").flickity({fullscreen:!0,autoPlay:!0})}},{key:"render",value:function(){var e=this,t=i.a.Children.map(this.props.children,(function(t){return i.a.isValidElement(t)?i.a.cloneElement(t,{cellClassName:e.props.cellClassName}):t}));return Object(a.jsx)("div",{className:"carousel",children:t})}}]),s}(i.a.Component)),y=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"carousel-cell "+this.props.cellClassName,children:Object(a.jsx)("img",{src:this.props.source})})}}]),s}(i.a.Component),f=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={colour:"bg-"+a.props.colour},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"progress mt-3",children:Object(a.jsx)("div",{className:"progress-bar "+this.state.colour,role:"progressbar",style:{width:this.props.width},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:this.props.text})})}}]),s}(i.a.Component),w=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={colour:"badge-"+a.props.colour},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)("span",{className:"badge mr-1 "+this.state.colour,children:this.props.text})}}]),s}(i.a.Component),N=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){document.title="Bassel Ashi: Home",u()(".tooltip").tooltip("dispose"),u()('[data-toggle="tooltip"]').tooltip()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container-md my-3",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header",children:"About Me"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-9",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-auto col-md-12 text-center mb-4 mb-lg-1",children:Object(a.jsx)("img",{className:"img-thumbnail profile-picture",src:"images/profile.jpg","data-toggle":"tooltip",rel:"tooltip","data-placement":"left",title:"","data-original-title":"Hello there :)"})}),Object(a.jsxs)("div",{className:"col-md",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Brief Summary"}),Object(a.jsx)("p",{className:"card-text",children:"I am a third year Co-Op Computer Science student specializing in Software Engineering at the University of Toronto Scarborough. My passion for problem solving through coding and development has inspired me to pursue perfection in my field as witnessed by my own coworkers and colleagues. Additionally, I possess strong interpersonal skills, demonstrating the utmost discretion and professionalism in teamwork and public speaking."})]})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("div",{className:"row mt-3",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Awards"}),Object(a.jsxs)("ul",{className:"card-text",children:[Object(a.jsx)("li",{children:"University of Toronto Scarborough Dean's List (2019 and 2020)"}),Object(a.jsx)("li",{children:"University of Toronto Scarborough Entrance Scholarship (2018)"}),Object(a.jsx)("li",{children:"Nelson High School Computer Science Award (2018)"})]})]})})})})]}),Object(a.jsx)("div",{className:"col-md-3 mt-3 mt-md-0",children:Object(a.jsxs)(v,{cellClassName:"index-image-cell",children:[Object(a.jsx)(y,{source:"images/deanslist.jpg"}),Object(a.jsx)(y,{source:"images/nelsonaward.jpg"})]})})]}),Object(a.jsx)("div",{className:"row mt-3",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Fields of Interest"}),Object(a.jsx)("p",{children:"In the past 5 years, I have been very focused on software solutions. The infrastructure of many businesses and organizations relies on applications that can either provide services to their employees and clients. After being able to prove my capabilities during my past internships, I am ready to move on and learn more about new design patterns, data structures, algorithms, tools, frameworks, and stacks."})]})})]})]})})}),Object(a.jsx)("div",{className:"row mt-3",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header",children:"Skillset"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Backend Languages"}),Object(a.jsx)(f,{text:"C#",width:"100%",colour:"success"}),Object(a.jsx)(f,{text:"Java",width:"100%",colour:"success"}),Object(a.jsx)(f,{text:"C",width:"95%",colour:"success"}),Object(a.jsx)(f,{text:"Python",width:"90%",colour:"success"}),Object(a.jsx)(f,{text:"VB",width:"90%",colour:"success"})]}),Object(a.jsxs)("div",{className:"col-md-4 mt-md-0 mt-3",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Other Languages"}),Object(a.jsx)(f,{text:"HTML",width:"100%",colour:"info"}),Object(a.jsx)(f,{text:"CSS",width:"100%",colour:"info"}),Object(a.jsx)(f,{text:"SQL",width:"95%",colour:"info"}),Object(a.jsx)(f,{text:"JavaScript",width:"95%",colour:"info"}),Object(a.jsx)(f,{text:"Batch",width:"75%",colour:"info"})]}),Object(a.jsxs)("div",{className:"col-md-4 mt-md-0 mt-3",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Interpersonal Skills"}),Object(a.jsx)(f,{text:"Public Speaking",width:"100%",colour:"danger"}),Object(a.jsx)(f,{text:"Teamwork",width:"100%",colour:"danger"}),Object(a.jsx)(f,{text:"Critical Thinking",width:"100%",colour:"danger"}),Object(a.jsx)(f,{text:"Communication",width:"100%",colour:"danger"}),Object(a.jsx)(f,{text:"Quick Learning",width:"100%",colour:"danger"})]})]}),Object(a.jsx)("div",{className:"row mt-3",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Tools/Technologies"}),Object(a.jsx)(w,{text:".NET",colour:"primary"}),Object(a.jsx)(w,{text:"OOP",colour:"secondary"}),Object(a.jsx)(w,{text:"SOLID",colour:"success"}),Object(a.jsx)(w,{text:"Design Patterns",colour:"dange"}),Object(a.jsx)(w,{text:"MSSQL",colour:"warning"}),Object(a.jsx)(w,{text:"Bash",colour:"info"}),Object(a.jsx)(w,{text:"Visual Studio",colour:"light"}),Object(a.jsx)(w,{text:"Android Studio",colour:"dark"}),Object(a.jsx)(w,{text:"IntelliJ",colour:"primary"}),Object(a.jsx)(w,{text:"Eclipse",colour:"secondary"}),Object(a.jsx)(w,{text:"VS Code",colour:"success"}),Object(a.jsx)(w,{text:"Networking",colour:"danger"}),Object(a.jsx)(w,{text:"DNS",colour:"warning"}),Object(a.jsx)(w,{text:"RDP",colour:"info"}),Object(a.jsx)(w,{text:"Unity",colour:"light"}),Object(a.jsx)(w,{text:"MVC",colour:"dark"}),Object(a.jsx)(w,{text:"FTP",colour:"primary"}),Object(a.jsx)(w,{text:"Scrums",colour:"secondary"}),Object(a.jsx)(w,{text:"Git",colour:"success"}),Object(a.jsx)(w,{text:"Azure",colour:"danger"}),Object(a.jsx)(w,{text:"React",colour:"warning"}),Object(a.jsx)(w,{text:"JQuery",colour:"info"}),Object(a.jsx)(w,{text:"Bootstrap",colour:"light"}),Object(a.jsx)(w,{text:"Stored Procedures",colour:"dark"})]})})]})]})})})]})}}]),s}(i.a.Component),k=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).triggerCardGlow=function(){"btn-outline-secondary-hover"==a.state.glow?a.setState({glow:""}):a.setState({glow:"btn-outline-secondary-hover"})},a.handleClick=function(){a.props.history.push("/mywork/".concat(a.props.link,"/"))},a.state={glow:""},a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){u()(".tooltip").tooltip("dispose"),u()('[data-toggle="tooltip"]').tooltip()}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"col-md-6",onClick:this.handleClick,onTouchEndCapture:this.handleClick,children:Object(a.jsxs)("div",{className:"card mb-3 glow-hover",onTouchStartCapture:this.triggerCardGlow,onMouseOver:this.triggerCardGlow,onMouseOut:this.triggerCardGlow,children:[Object(a.jsx)("div",{className:" card-header",children:this.props.title}),Object(a.jsx)("div",{className:"image-container",children:Object(a.jsx)("img",{src:"../../"+this.props.imageSource,className:"image","data-toggle":"tooltip",rel:"tooltip","data-placement":this.props.tooltipPlacement,"data-html":"true",title:"","data-original-title":this.props.tooltipTitle})}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("p",{children:this.props.description}),Object(a.jsx)(h.b,{to:"/mywork/smartlobby/",className:"btn btn-outline-secondary float-right "+this.state.glow,children:"Read More"})]})]})})}}]),s}(i.a.Component),S=Object(j.g)(k),C=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){document.title="Bassel Ashi: My Work"}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container-md my-3",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(S,{title:"FGF SmartLobby",link:"smartlobby",imageSource:"images/smartlobby1.png",description:"A visitor management solution with badge printing",tooltipPlacement:"left",tooltipTitle:"SmartLobby was completely individually developed during a span of 3 months during my co-op work term. The feedback from management and coworkers was fantastic!"}),Object(a.jsx)(S,{title:"Let's Find Space",link:"letsfindspace",imageSource:"images/letsfindspace1.jpg",description:"A solution for optimizing the best meeting spot among people",tooltipPlacement:"right",tooltipTitle:"This was taken during Hack the Valley 4, a hackathon hosted at U of T Scarborough every February"}),Object(a.jsx)(S,{title:"UTSC Repository",link:"utscrep",imageSource:"images/utscrep1.jpg",description:"An online contribution-based library for UTSC students",tooltipPlacement:"left",tooltipTitle:"<u>Fun fact:</u> All wallpapers and images on the website are taken on campus!"}),Object(a.jsx)(S,{title:"vGRAS",link:"vgras",imageSource:"images/vgras1.jpg",description:"A visual representation of live charts to track progress",tooltipPlacement:"right",tooltipTitle:"At the end of my internship where I built this project, I received a Samsung Gear S2 smartwatch as a gift!"})]})})}}]),s}(i.a.Component),T=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){document.title="Bassel Ashi: Recommendations"}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container-md my-3",children:[Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header",children:"A Glimpse of my Skills"}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("p",{className:"mb-0",children:"To make this page more interesting, I am working on getting permissions from LinkedIn to integrate ASP.NET WebAPI with their OAuth API, to automatically display recommendations from LinkedIn. Unfortunately for now, my recommendations are hard-coded below."})})]}),Object(a.jsxs)("div",{className:"card mt-3",children:[Object(a.jsx)("div",{className:"card-header",children:"Recommendations"}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md col-12",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("hr",{className:"bg-danger"}),"\u2018Ridiculously efficient\u2019 is the phrase that comes to mind when I think about Bassel.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I had the pleasure of working with Bassel for eight months at the FGF Brands.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I was particularly impressed by his ability to take on any challenges in project development and come up with the solution for any kind of problem.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Bassel would be an asset to any team",Object(a.jsx)("hr",{className:"bg-danger"})]})}),Object(a.jsxs)("div",{className:"row mt-3 text-danger",children:[Object(a.jsxs)("div",{className:"col text-right",children:[Object(a.jsx)("p",{className:"mb-0",children:"Ruchita Satani"}),Object(a.jsx)("i",{children:"MVC/.Net Developer at FGF Brands"})]}),Object(a.jsx)("div",{className:"col-auto pl-0",children:Object(a.jsx)("img",{className:"rec-profile border border-danger float-right",src:"https://media-exp1.licdn.com/dms/image/C4D03AQFkmggkdZeLCg/profile-displayphoto-shrink_100_100/0/1603579183425?e=1614211200&v=beta&t=D9pNDFsqtDvqQx_s6mH-FnMQPiYn2hU44TTj0DAiMqk"})})]})]})})})]})]})}}]),s}(i.a.Component),A=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){document.title="Bassel Ashi: SmartLobby",u()(".tooltip").tooltip("dispose"),u()('[data-toggle="tooltip"]').tooltip()}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container-md my-3",children:Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("img",{className:"work-logo mr-1",src:"../../images/smartlobby-logo.png"}),Object(a.jsx)("span",{className:"smartlobby-text",children:"SmartLobby"})]}),Object(a.jsx)("hr",{className:"my-4"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-lg-6 col-md-12",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Preface"}),Object(a.jsxs)("p",{children:["During my 8-months work term at ",Object(a.jsx)("a",{target:"_blank",href:"http://fgfbrands.com/",children:"FGF Brands"})," as a Full-Stack .NET Developer, I was given the chance to demonstrate my skills and capabilities. As a result, my team leader relied on me in many areas such as onboarding co-op students, doing R&D and providing a proof of concept for problem solving and coming up with new ideas. The biggest task out of all was to independently develop a full visitor management solution (VMS). The business requirement stated that it was a replacement for an existing VMS, with additional features that needed to be introduced due to the pandemic of COVID-19. SmartLobby consists of a web application, a desktop application, and a console application that runs as a web job to send e-mail reminders to hosts."]})]}),Object(a.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(a.jsxs)(v,{cellClassName:"smartlobby-image-cell",children:[Object(a.jsx)(y,{source:"../../images/smartlobby2.png"}),Object(a.jsx)(y,{source:"../../images/smartlobby3.png"}),Object(a.jsx)(y,{source:"../../images/smartlobby4.png"}),Object(a.jsx)(y,{source:"../../images/smartlobby5.png"}),Object(a.jsx)(y,{source:"../../images/smartlobby6.png"}),Object(a.jsx)(y,{source:"../../images/smartlobby7.png"}),Object(a.jsx)(y,{source:"../../images/smartlobby8.png"}),Object(a.jsx)(y,{source:"../../images/smartlobby9.png"}),Object(a.jsx)(y,{source:"../../images/smartlobby10.png"}),Object(a.jsx)(y,{source:"../../images/smartlobby11.png"}),Object(a.jsx)(y,{source:"../../images/smartlobby12.png"})]})})]}),Object(a.jsxs)("div",{className:"row mt-3",children:[Object(a.jsx)("div",{className:"col-lg-5 col-md-12",children:Object(a.jsx)("iframe",{width:"100%",height:"325",src:"https://www.youtube.com/embed/iKnnL4dGjAQ",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(a.jsxs)("div",{className:"col-lg-7 col-md-12",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Fighting COVID-19"}),Object(a.jsx)("p",{children:"Some of SmartLobby's features are focused on protecting everyone from COVID-19 by ensuring that the visitor has no symptoms and that minimal physical contact is done during the check-in process"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Integration with FGF Questionnaire, an application built to survey visitors and staff with COVID-19 related questions"}),Object(a.jsx)("li",{children:"Numerous ways for visitors to check in, with the most popular being contactless through the use of their own mobile devices"}),Object(a.jsxs)("li",{children:["Playing welcoming and signal audio messages to update visitors of their host's status by using ",Object(a.jsx)("a",{target:"_blank",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/Speech-Service/",children:"Azure Speech Service"})]}),Object(a.jsx)("li",{children:"Automatically prints a badge once the visitor checks in by using SignalR's websockets and DYMO Label Printer's SDK"})]})]})]}),Object(a.jsx)("div",{className:"row mt-3",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Outcome"}),Object(a.jsx)("p",{children:"The leadership team, including the CIO, provided great feedback on the application. SmartLobby was installed at FGF's locations in Canada and Texas. On the last day of my internship, I installed the tablet at the reception and filmed a full overview. This overview shows the contactless check-in process that can be done through the visitor's mobile device. Some features such as chatting with host is not shown in the video."})]})}),Object(a.jsx)("div",{className:"row mt-3",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/MYOe0WZunWo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]})})}}]),s}(i.a.Component),I=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){document.title="Bassel Ashi: Let's Find Space",u()(".tooltip").tooltip("dispose"),u()('[data-toggle="tooltip"]').tooltip()}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container-md my-3",children:Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("img",{className:"htv-logo","data-html":"true",src:"../../images/letsfindspace-logo.png","data-toggle":"tooltip",rel:"tooltip","data-placement":"right",title:"","data-original-title":"<u>Fun fact:</u> The nodes in the logo icon represent people and the edges represent their connection to each other. The opacity applied to the word 'SPACE' and the underline represent the user's need to find the best meeting spot"})}),Object(a.jsx)("hr",{className:"my-4"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-lg-5 col-md-12",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Motive"}),Object(a.jsxs)("p",{children:["My enthusiasm in problem solving makes me enjoy participating in coding competitions and hackathons. Aside from the better awards, I have been more interested in the latter because it is up to me and my team to choose our level of competitiveness. In February 2020, I was able to attend ",Object(a.jsx)("a",{target:"_blank",href:"https://hackthevalley.io/",children:"Hack the Valley"})," at the University of Toronto Scarborough. I formed a team of four people who shared the same motive as I did. A few minutes through brainstorming, we came up with the idea of Let's Find Space."]})]}),Object(a.jsx)("div",{className:"col-lg-7 col-md-12",children:Object(a.jsxs)(v,{cellClassName:"htv-image-cell",children:[Object(a.jsx)(y,{source:"../../images/letsfindspace2.jpg"}),Object(a.jsx)(y,{source:"../../images/letsfindspace1.jpg"}),Object(a.jsx)(y,{source:"../../images/letsfindspace3.jpg"})]})})]}),Object(a.jsx)("div",{className:"row mt-3",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Idea"}),Object(a.jsx)("p",{children:"We presented a problem in which multiple people want to group up somewhere, the question is how to find the most suitable place for all of them to meet up without making the commute unfair for any of them. Using Google's APIs, we can allow the user to enter their location and map it on a graph in which (x, y) are represented by latitude and longitude. With some basic Math, we can find an average point. Finally, we search for the closest suitable coffeeshop, park, or library to this point and then we display to the user on a map."})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Outcome"}),Object(a.jsx)("p",{children:"Even though we did not win any prizes, we achieved our goal. Through 48 hours of hard work in problem solving and using technology that is new to us such as NodeJS, React, Git, and Google APIs, we were still able to finish the complete project and present it to the judges. This experience also made me confident with my quick learning skills, to be able to adapt and apply what I have learned in no time."})]})}),Object(a.jsx)("div",{className:"row mt-3",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("a",{href:"http://letsfind.space/",target:"_blank",className:"btn btn-primary float-right",role:"button",children:"Visit Website"})})})]})})}}]),s}(i.a.Component),D=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){document.title="Bassel Ashi: UTSC Repository",u()(".tooltip").tooltip("dispose"),u()('[data-toggle="tooltip"]').tooltip()}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container-md my-3",children:Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("img",{className:"utscrep-logo","data-html":"true",src:"../../images/utscrep-logo.png","data-toggle":"tooltip",rel:"tooltip","data-placement":"right",title:"","data-original-title":"<u>Fun fact:</u> I even learned Adobe Illustrator to make that logo. The colours represent the original UTSC logo colours. The arrows represent uploading and downloading files, hence the contribution"})}),Object(a.jsx)("hr",{className:"my-4"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(a.jsxs)(v,{children:[Object(a.jsx)(y,{source:"../../images/utscrep1.jpg"}),Object(a.jsx)(y,{source:"../../images/utscrep2.jpg"}),Object(a.jsx)(y,{source:"../../images/utscrep3.jpg"}),Object(a.jsx)(y,{source:"../../images/utscrep4.jpg"})]})}),Object(a.jsxs)("div",{className:"col-lg-6 col-md-12 mt-lg-0 mt-3",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Source"}),Object(a.jsx)("p",{children:"Also known as UTSCRep, UTSC Repository is an online contributive library that allows students to share course material at the University of Toronto Scarborough. From my experience, it is difficult for students, especially first years, to know about a course before taking it, or to get enough resources for the course to perform better. Therefore, I came up with the idea of this website."})]})]}),Object(a.jsx)("div",{className:"row mt-3",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Technical"}),Object(a.jsx)("p",{children:"The project took me 6 weeks to implement. It operates on ASP.NET Web Forms with MSSQL. To give an insight on the effort that was put into making UTSCRep possible, it uses hash with salt to secure users' sensitive data. Files are stored securely on the web server, preventing users from accessing files just with a link. Stored procedures and views are heavily used through the whole website's interaction with the database, allowing maximum security to prevent SQL injections and increasing performance. As small as the website seems to the normal user, it is way in size in terms of user ranks and their permissions. For example, a contributor earns more permissions to have less constraints when uploading material. Administrators have access to a customized administration panel, preventing the need of any direct interaction through editing the database. Currently, the website stores 1.2gb of data, with around 100 users. I consider this website as a complete success. Unfortunately, further development is tentative due to time constraint. "})]})})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("a",{href:"https://utscrep.ca",target:"_blank",className:"btn btn-primary float-right",role:"button",children:"Visit Website"})})})]})})}}]),s}(i.a.Component),M=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){document.title="Bassel Ashi: 404!"}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container-md my-3",children:Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col text-center",children:Object(a.jsx)("img",{className:"notfound-image",src:"../../images/404.png"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col text-center mt-3",children:Object(a.jsx)("h5",{className:"mb-0",children:"We ain't got nothing here, boss!"})})})]})})}}]),s}(i.a.Component),F=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){document.title="Bassel Ashi: vGRAS",u()(".tooltip").tooltip("dispose")}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container-md my-3",children:Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("h1",{children:"vGRAS"})}),Object(a.jsx)("hr",{className:"my-4"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(a.jsxs)(v,{cellClassName:"vgras-image-cell",children:[Object(a.jsx)(y,{source:"../../images/vgras1.jpg"}),Object(a.jsx)(y,{source:"../../images/vgras2.jpg"}),Object(a.jsx)(y,{source:"../../images/vgras3.jpg"})]})}),Object(a.jsxs)("div",{className:"col-lg-6 col-md-12 mt-lg-0 mt-3",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Background"}),Object(a.jsxs)("p",{children:["Visual Guest Request Administration System (vGRAS) is a project I worked on from scratch during my 5-week internship in 2016 at ",Object(a.jsx)("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/DAMAC_Properties",children:"Damac Properies"}),". Initially, my role was to do basic networking and create server room diagrams. Through brainstorming with my coworkers, the idea of vGRAS came up. The goal was to extract data from their existing GRAS system and display it in a form of live graphical dashboards displaying statistical and analytical data."]})]})]}),Object(a.jsxs)("div",{className:"row mt-3 mt-lg-0",children:[Object(a.jsxs)("div",{className:"col-lg-7",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Technical"}),Object(a.jsx)("p",{children:"Using ASP.NET Web Forms integrated with GRAS' MSSQL database, I was able to collect data, such as employees' work progress, and display it on large TV screens in different departments such as Engineering and Housekeeping, resulting in increasing the motivation and efficiency of employees. The project consisted of the development of four different views (management, department, team and operator views), each of which containing the respective graphs and data."})]}),Object(a.jsxs)("div",{className:"col-lg-5",children:[Object(a.jsx)("h5",{className:"text-primary",children:"Experience"}),Object(a.jsx)("p",{children:"vGRAS is considered my first project with web development. Through working on this project, I was exposed to sophisticated TSQL queries which boosted my understanding of databases. vGRAS was also my first professional interaction with .NET web development, leading to my future successful pursue of this field."})]})]})]})})]})})}}]),s}(i.a.Component),B=s(15),L=s(34),G=s(73),P=s(72),R=s(24),E=s(39),U=function(e){this.element=e;var t=e.dataset.delim||",",s=e.dataset.words||"override these,sample typing";this.words=s.split(t).filter((function(e){return e})),this.delay=e.dataset.delay||200,this.loop=e.dataset.loop||"true","false"===this.loop&&(this.loop=1),this.deleteDelay=e.dataset.deletedelay||e.dataset.deleteDelay||800,this.progress={word:0,char:0,building:!0,looped:0},this.typing=!0;var a=e.dataset.colors||"black";this.colors=a.split(","),this.element.style.color=this.colors[0],this.colorIndex=0,this.doTyping()};U.prototype.start=function(){this.typing||(this.typing=!0,this.doTyping())},U.prototype.stop=function(){this.typing=!1},U.prototype.doTyping=function(){var e,t=this,s=this.element,a=this.progress,c=a.word,i=a.char,o=Object(E.a)(this.words[c]).slice(0,i).join("");this.cursor&&(this.cursor.element.style.opacity="1",this.cursor.on=!0,clearInterval(this.cursor.interval),this.cursor.interval=setInterval((function(){return t.cursor.updateBlinkState()}),400)),s.innerHTML=o,a.building?(e=a.char===this.words[c].length)?a.building=!1:a.char+=1:0===a.char?(a.building=!0,a.word=(a.word+1)%this.words.length,this.colorIndex=(this.colorIndex+1)%this.colors.length,this.element.style.color=this.colors[this.colorIndex]):a.char-=1,a.word===this.words.length-1&&(a.looped+=1),!a.building&&this.loop<=a.looped&&(this.typing=!1),setTimeout((function(){t.typing&&t.doTyping()}),e?this.deleteDelay:this.delay)};var V=function(e){var t=this;this.element=e,this.cursorDisplay=e.dataset.cursordisplay||e.dataset.cursorDisplay||"_",e.innerHTML=this.cursorDisplay,this.on=!0,e.style.transition="all 0.1s",this.interval=setInterval((function(){return t.updateBlinkState()}),400)};V.prototype.updateBlinkState=function(){this.on?(this.element.style.opacity="0",this.on=!1):(this.element.style.opacity="1",this.on=!0)};var Q=s(21),_=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){!function(){var e,t={},s=Object(R.a)(document.getElementsByClassName("typer"));try{for(s.s();!(e=s.n()).done;){var a=e.value;t[a.id]=new U(a)}}catch(b){s.e(b)}finally{s.f()}var c,i=Object(R.a)(document.getElementsByClassName("typer-stop"));try{var o=function(){var e=c.value,s=t[e.dataset.owner];e.onclick=function(){return s.stop()}};for(i.s();!(c=i.n()).done;)o()}catch(b){i.e(b)}finally{i.f()}var r,n=Object(R.a)(document.getElementsByClassName("typer-start"));try{var l=function(){var e=r.value,s=t[e.dataset.owner];e.onclick=function(){return s.start()}};for(n.s();!(r=n.n()).done;)l()}catch(b){n.e(b)}finally{n.f()}var d,m=Object(R.a)(document.getElementsByClassName("cursor"));try{for(m.s();!(d=m.n()).done;){var h=d.value,j=new V(h);j.owner=t[h.dataset.owner],null!=j.owner&&(j.owner.cursor=j)}}catch(b){m.e(b)}finally{m.f()}}()}},{key:"render",value:function(){return Object(a.jsx)(h.a,{children:Object(a.jsx)(j.b,{render:function(e){var t=e.location;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark py-3",children:[Object(a.jsxs)("div",{className:"navbar-bassel",children:[Object(a.jsx)("a",{className:"typer navbar-brand mr-0","data-colors":"#fff",id:"main","data-words":"Bassel Ashi","data-delay":"150","data-loop":"1"}),Object(a.jsx)("a",{className:"cursor navbar-brand","data-owner":"main"})]}),Object(a.jsx)("span",{className:"mr-3 d-lg-block d-none",children:"--\x3e"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse pt-1",id:"navbarColor02",children:[Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item mr-3",children:Object(a.jsxs)(h.c,{className:"nav-link",exact:!0,to:"/",activeClassName:"active",children:[Object(a.jsx)(B.a,{className:"mr-1",icon:Q.d}),"Home"]})}),Object(a.jsx)("li",{className:"nav-item mr-3",children:Object(a.jsxs)(h.c,{className:"nav-link",to:"/mywork",activeClassName:"active",children:[Object(a.jsx)(B.a,{className:"mr-1",icon:Q.a}),"My Work"]})}),Object(a.jsx)("li",{className:"nav-item mr-3",children:Object(a.jsxs)(h.c,{className:"nav-link",to:"/recommendations",activeClassName:"active",children:[Object(a.jsx)(B.a,{className:"mr-1",icon:Q.e}),"Recommendations"]})}),Object(a.jsx)("li",{className:"nav-item mr-3",children:Object(a.jsxs)("a",{className:"nav-link",href:"mailto:p.ashi@mail.utoronto.ca",children:[Object(a.jsx)(B.a,{className:"mr-1",icon:Q.b}),"Contact"]})}),Object(a.jsx)("li",{className:"nav-item mr-3",children:Object(a.jsxs)("a",{className:"nav-link",href:"resume.pdf",children:[Object(a.jsx)(B.a,{className:"mr-2",icon:Q.c}),"R\xe9sum\xe9"]})})]}),Object(a.jsxs)("ul",{className:"navbar-nav float-lg-right",children:[Object(a.jsx)("li",{className:"nav-item mr-3",children:Object(a.jsx)("a",{target:"_blank",className:"nav-link",href:"https://github.com/BasselAshi/",children:Object(a.jsx)(B.a,{className:"social-media",icon:L.a})})}),Object(a.jsx)("li",{className:"nav-item mr-3",children:Object(a.jsx)("a",{target:"_blank",className:"nav-link",href:"https://www.linkedin.com/in/basselashi/",children:Object(a.jsx)(B.a,{className:"social-media",icon:L.b})})})]})]})]}),Object(a.jsxs)(G.a,{children:[Object(a.jsx)(P.a,{classNames:"fade",timeout:750,children:Object(a.jsxs)(j.d,{location:t,children:[Object(a.jsx)(j.b,{path:"/",exact:!0,component:N}),Object(a.jsx)(j.b,{path:"/recommendations",exact:!0,component:T})]})},t.key),Object(a.jsx)(P.a,{classNames:"slide",timeout:600,children:Object(a.jsxs)(j.d,{location:t,children:[Object(a.jsx)(j.b,{path:"/mywork/smartlobby",exact:!0,component:A}),Object(a.jsx)(j.b,{path:"/mywork/letsfindspace",exact:!0,component:I}),Object(a.jsx)(j.b,{path:"/mywork/utscrep",exact:!0,component:D}),Object(a.jsx)(j.b,{path:"/mywork/vgras",exact:!0,component:F})]})},t.key+"2"),Object(a.jsx)(P.a,{classNames:"slide-up",timeout:600,children:Object(a.jsxs)(j.d,{location:t,children:[Object(a.jsx)(j.b,{path:"/mywork",exact:!0,component:C}),Object(a.jsx)(j.b,{path:"/",exact:!0}),Object(a.jsx)(j.b,{path:"/recommendations",exact:!0}),Object(a.jsx)(j.b,{path:"/mywork/smartlobby",exact:!0}),Object(a.jsx)(j.b,{path:"/mywork/letsfindspace",exact:!0}),Object(a.jsx)(j.b,{path:"/mywork/utscrep",exact:!0}),Object(a.jsx)(j.b,{path:"/mywork/vgras",exact:!0}),Object(a.jsx)(j.b,{path:"/404",exact:!0,component:M}),Object(a.jsx)(j.a,{to:"/404"})]})},t.key+"3")]})]})}})})}}]),s}(i.a.Component);s(67),s(68),s(69);r.a.render(Object(a.jsx)(_,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.c355600b.chunk.js.map