(this.webpackJsonputm_timetable_gen=this.webpackJsonputm_timetable_gen||[]).push([[0],{36:function(e,t,n){e.exports=n(84)},45:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),i=n.n(r),s=n(10),c=n(17),u={ADD_COURSE:"ADD_COURSE",DELETE_COURSE:"DELETE_COURSE",CHANGE_COURSE_INFO:"CHANGE_COURSE_INFO",ADD_TIME:"ADD_TIME",DELETE_TIME:"DELETE_TIME",CHANGE_TIME_INFO:"CHANGE_TIME_INFO",VIEW_TIMETABLE:"VIEW_TIMETABLE",CLOSE_PREVIEW:"CLOSE_PREVIEW"},l=["Sun","Mon","Tue","Wed","Thu"],m=["02","03","04","05","06","07","08","09","10","11","12"],d={dayOfWeekIndexConverter:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?l[e]:l.indexOf(e)},sessionIndexConverter:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?m[e]:m.indexOf(e)}};function h(e,t){var n=[[],[],[],[],[]],a=d.dayOfWeekIndexConverter,o=d.sessionIndexConverter;for(var r in e){var i=e[r],s=t[r];for(var c in s)if("nextTimeID"!==c){var u=a(s[c].dayOfWeek),l=o(s[c].session),m=n[u][l];if(void 0!==m)throw"Clashing Timetable Detected!\nThe course:\n\n"+"".concat(m.courseName,", ").concat(m.lecturerName,", ").concat(m.courseCode,"\n\n")+"Clashes with:\n\n"+"".concat(i.courseName,", ").concat(i.lecturerName,", ").concat(i.courseCode,"\n\n")+"At timeslot:\n"+"   ".concat(a(u,!0),", ").concat(o(l,!0));n[u][l]=i}}return n}var f=function(e){for(var t=e.length,n=e.reduce((function(e,t){return Math.max(t.length,e)}),0),a=[],o=0;o<t;o++)for(var r=0;r<n;){if(void 0!==e[o][r]){for(var i={dayOfWeek:o,startingSession:r,endingSession:r,courseObj:e[o][r]};r+1<n&&e[o][r+1]===i.courseObj;)r++,i.endingSession=r;a.push(i)}r++}return a},_={nextCourseID:1,courseItems:{0:{courseID:0,courseName:"Input Course Name",lecturerName:"Input Lecturer Name",courseCode:"Input Course Code"}},courseTimeItems:{0:{0:{timeID:0,dayOfWeek:"Sun",session:"02"},nextTimeID:1}},timetableRenderData:{isPreviewOpen:!1,renderData:null}};var p=function(e){return{courseID:e++,courseName:"",lecturerName:"",courseCode:""}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=e.courseItems,a=e.courseTimeItems;switch(t.type){case u.ADD_COURSE:var o=p(e.nextCourseID);return(n=Object.assign({},n))[o.courseID]=o,(a=Object.assign({},a))[o.courseID]={nextTimeID:0},Object.assign({},e,{courseItems:n,courseTimeItems:a,nextCourseID:e.nextCourseID+1});case u.DELETE_COURSE:var r=t.payload.courseIndexToDel;return delete(n=Object.assign({},n))[r],delete(a=Object.assign({},a))[r],Object.assign({},e,{courseItems:n,courseTimeItems:a});case u.CHANGE_COURSE_INFO:var i=t.payload.newInfoValues,s=i.courseID;return(n=Object.assign({},n))[s]=i,Object.assign({},e,{courseItems:n});case u.ADD_TIME:var c=t.payload.courseIndexToAdd,l=a[c].nextTimeID,m=Object.assign({},a[c],{nextTimeID:l+1});return m[l]={timeID:l,dayOfWeek:"Sun",session:"02"},(a=Object.assign({},a))[c]=m,Object.assign({},e,{courseTimeItems:a});case u.DELETE_TIME:var d=t.payload,I=d.courseIndexToDel,v=d.timeIndexToDel,b=Object.assign({},a[I]);return delete b[v],(a=Object.assign({},a))[I]=b,Object.assign({},e,{courseTimeItems:a});case u.CHANGE_TIME_INFO:var E=t.payload,T=E.courseIndexToChange,g=E.timeIndexToChange,O=E.newTimeValues,C=Object.assign({},a[T]);return C[g]=O,(a=Object.assign({},a))[T]=C,Object.assign({},e,{courseTimeItems:a});case u.VIEW_TIMETABLE:var w=null;try{w=h(e.courseItems,e.courseTimeItems)}catch(H){return window.alert(H),e}var y=f(w),D={isPreviewOpen:!0,renderData:y};return Object.assign({},e,{timetableRenderData:D});case u.CLOSE_PREVIEW:var N=Object.assign({},e.timetableRenderData);return N.isPreviewOpen=!1,Object.assign({},e,{timetableRenderData:N});default:return e}},v=Object(c.b)(I,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=(n(45),n(8)),E=n(9),T=n(7),g=n(12),O=n(11),C={addCourse:function(){return{type:u.ADD_COURSE}},deleteCourse:function(e){return{type:u.DELETE_COURSE,payload:{courseIndexToDel:e}}},changeCourseInfo:function(e){return{type:u.CHANGE_COURSE_INFO,payload:{newInfoValues:e}}}},w={viewTimetable:function(){return{type:u.VIEW_TIMETABLE}},closePreview:function(){return{type:u.CLOSE_PREVIEW}}},y=n(18),D=n.n(y),N={addTime:function(e){return{type:u.ADD_TIME,payload:{courseIndexToAdd:e}}},deleteTime:function(e,t){return{type:u.DELETE_TIME,payload:{courseIndexToDel:e,timeIndexToDel:t}}},changeTimeInfo:function(e,t,n){return{type:u.CHANGE_TIME_INFO,payload:{courseIndexToChange:e,timeIndexToChange:t,newTimeValues:n}}}},H=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).deleteTime=a.deleteTime.bind(Object(T.a)(a)),a.changeTimeInfo=a.changeTimeInfo.bind(Object(T.a)(a)),a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.timeItemHTML=document.getElementById("course-item__times__entry-".concat(this.props.courseID,"-").concat(this.props.timeInfo.timeID)),this.timeDayOfWeekHTML=this.timeItemHTML.children[1],this.timeSessionHTML=this.timeItemHTML.children[2]}},{key:"deleteTime",value:function(){var e=this;this.timeItemHTML.classList.add("fade-out"),setTimeout((function(){e.props.deleteTime(e.props.courseID,e.props.timeInfo.timeID)}),500)}},{key:"changeTimeInfo",value:function(){this.props.changeTimeInfo(this.props.courseID,this.props.timeInfo.timeID,{timeID:this.props.timeInfo.timeID,dayOfWeek:this.timeDayOfWeekHTML.value,session:this.timeSessionHTML.value})}},{key:"render",value:function(){var e=this.props.courseID,t=this.props.timeInfo,n=t.timeID,a=t.dayOfWeek,r=t.session;return o.a.createElement("div",{className:"course-item__times__entry",id:"course-item__times__entry-".concat(e,"-").concat(n)},o.a.createElement("button",{type:"button",className:"course-item__times__entry__delete-button",onClick:this.deleteTime},"X"),o.a.createElement("select",{className:"course-item__times__entry__dayOfWeek",value:a,onChange:this.changeTimeInfo},o.a.createElement("option",{value:"Sun"},"Sunday"),o.a.createElement("option",{value:"Mon"},"Monday"),o.a.createElement("option",{value:"Tue"},"Tuesday"),o.a.createElement("option",{value:"Wed"},"Wednesday"),o.a.createElement("option",{value:"Thu"},"Thursday")),o.a.createElement("select",{className:"course-item__times__entry__session",value:r,onChange:this.changeTimeInfo},o.a.createElement("option",{value:"02"},"02 (8:00am - 8:50am)"),o.a.createElement("option",{value:"03"},"03 (9:00am - 9:50am)"),o.a.createElement("option",{value:"04"},"04 (10:00am - 10:50am)"),o.a.createElement("option",{value:"05"},"05 (11:00am - 11:50am)"),o.a.createElement("option",{value:"06"},"06 (12:00pm - 12:50pm)"),o.a.createElement("option",{value:"07"},"07 (1:00pm - 1:50pm)"),o.a.createElement("option",{value:"08"},"08 (2:00pm - 2:50pm)"),o.a.createElement("option",{value:"09"},"09 (3:00pm - 3:50pm)"),o.a.createElement("option",{value:"10"},"10 (4:00pm - 4:50pm)"),o.a.createElement("option",{value:"11"},"11 (5:00pm - 5:50pm)"),o.a.createElement("option",{value:"12"},"12 (6:00pm - 6:50pm)")))}}]),n}(o.a.Component);var j=Object(s.b)(null,(function(e){return{deleteTime:function(t,n){return e(N.deleteTime(t,n))},changeTimeInfo:function(t,n,a){return e(N.changeTimeInfo(t,n,a))}}}))(H),k=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).deleteCourse=a.deleteCourse.bind(Object(T.a)(a)),a.changeCourseInfo=a.changeCourseInfo.bind(Object(T.a)(a)),a.addTime=a.addTime.bind(Object(T.a)(a)),a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.courseItemHTML=document.getElementById("course-item-".concat(this.courseID)),this.courseItemInfoElements=this.courseItemHTML.children[0].children,this.courseNameHTML=this.courseItemInfoElements[0],this.lecturerNameHTML=this.courseItemInfoElements[1],this.courseCodeHTML=this.courseItemInfoElements[2]}},{key:"deleteCourse",value:function(){var e=this;this.courseItemHTML.classList.add("fade-out"),setTimeout((function(){e.props.deleteCourse(e.courseID)}),500)}},{key:"changeCourseInfo",value:function(){this.props.changeCourseInfo({courseID:this.courseID,courseName:this.courseNameHTML.textContent,lecturerName:this.lecturerNameHTML.textContent,courseCode:this.courseCodeHTML.textContent})}},{key:"addTime",value:function(){this.props.addTime(this.courseID)}},{key:"timeItemRenderer",value:function(){var e=this;return Object.keys(this.props.courseTimes).map((function(t){if("nextTimeID"!==t)return o.a.createElement(j,{key:t,courseID:e.courseID,timeInfo:e.props.courseTimes[t]})}))}},{key:"render",value:function(){return this.courseInfo=this.props.courseInfo,this.courseID=this.courseInfo.courseID,this.courseTimes=this.props.courseTimes,o.a.createElement("div",{className:"course-item course-item--".concat(this.courseID%10,"-theme"),id:"course-item-".concat(this.courseID)},o.a.createElement("div",{className:"course-item__info"},o.a.createElement(D.a,{className:"course-item__info__courseName",id:"course-item__info__courseName-".concat(this.courseID),onChange:this.changeCourseInfo,html:this.courseInfo.courseName,spellCheck:"false"}),o.a.createElement(D.a,{className:"course-item__info__lecturerName",id:"course-item__info__lecturerName-".concat(this.courseID),onChange:this.changeCourseInfo,html:this.courseInfo.lecturerName,spellCheck:"false"}),o.a.createElement(D.a,{className:"course-item__info__courseCode",id:"course-item__info__courseCode-".concat(this.courseID),onChange:this.changeCourseInfo,html:this.courseInfo.courseCode,spellCheck:"false"}),o.a.createElement("div",{className:"course-item__info__buttons"},o.a.createElement("button",{type:"button",className:"course-item__info__buttons__delete-btn",onClick:this.deleteCourse},o.a.createElement("i",{className:"fas fa-trash-alt"})),o.a.createElement("button",{type:"button",className:"course-item__info__buttons__add-button",onClick:this.addTime},"+"))),o.a.createElement("div",{className:"course-item__seperator"}),o.a.createElement("div",{className:"course-item__times"},this.timeItemRenderer()))}}]),n}(o.a.Component);var S=Object(s.b)(null,(function(e){return{deleteCourse:function(t){return e(C.deleteCourse(t))},changeCourseInfo:function(t){return e(C.changeCourseInfo(t))},addTime:function(t){return e(N.addTime(t))}}}))(k),L=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).addCourse=a.addCourse.bind(Object(T.a)(a)),a.courseItemRenderer=a.courseItemRenderer.bind(Object(T.a)(a)),a.viewButtonHandler=a.viewButtonHandler.bind(Object(T.a)(a)),a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.courseContainer=document.getElementById("course-window__div")}},{key:"addCourse",value:function(){var e=this;this.props.addCourse(),setTimeout((function(){e.courseContainer.scrollTop=e.courseContainer.scrollHeight}),50)}},{key:"courseItemRenderer",value:function(){var e=this.props,t=e.courseItems,n=e.courseTimeItems;return Object.keys(t).map((function(e){return o.a.createElement(S,{key:e,courseInfo:t[e],courseTimes:n[e]})}))}},{key:"viewButtonHandler",value:function(){this.props.viewTimetable()}},{key:"render",value:function(){return o.a.createElement("main",{className:"course-window",id:"course-window"},o.a.createElement("div",{className:"course-window__div",id:"course-window__div"},this.courseItemRenderer()),o.a.createElement("button",{type:"button",className:"course-window__add-button",id:"course-window__add-button",onClick:this.addCourse},"+"),o.a.createElement("button",{type:"button",className:"course-window__view-button",id:"course-window__view-button",onClick:this.viewButtonHandler},o.a.createElement("i",{className:"far fa-eye"})))}}]),n}(o.a.Component);var M=Object(s.b)((function(e){return{courseItems:e.courseItems,courseTimeItems:e.courseTimeItems}}),(function(e){return{addCourse:function(){return e(C.addCourse())},viewTimetable:function(){return e(w.viewTimetable())}}}))(L),R=n(13),x=n.n(R),W={rectFactory:function(e,t,n,a,o){return new x.a.Rect({x:e,y:t,width:n,height:a,fill:o,listening:!1})},textFactory:function(e,t,n,a,o,r){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"Roboto",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"normal",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0;return new x.a.Text({text:e,x:t,y:n,width:a,height:o,fontFamily:i,fontSize:r,fontStyle:s,padding:c,align:"center",verticalAlign:"middle",fill:"white",listening:!1})}};var B=new function(){this.timetableWidth=2100,this.timetableHeight=750,this.margin=2,this.dayOfWeeks=["Sunday","Monday","Tuesday","Wednesday","Thursday"],this.times=[8,9,10,11,12,1,2,3,4,5,6],this.sessions=["02","03","04","05","06","07","08","09","10","11","12"],this.theme="default",this.courseNameFontSize=25,this.lecturerNameFontSize=15,this.courseCodeFontSize=13,this.labelBG="#7f8082",this.sideColorBG="#70ad46",this.oddRowBG="#c6e0b3",this.evenRowBG="#a9d08f",this.colorMaps=["#3498db","#6ab04c","#e74c3c","#9b59b6","#34495e","#f1c40f","#3a40b6","#2ecc71","#e67e22","#686de0"],this.gridWidth=this.timetableWidth/12,this.gridHeight=this.timetableHeight/6,this.actualWidth=this.gridWidth-2*this.margin,this.actualHeight=this.gridHeight-2*this.margin,this.row1GridHeight=this.gridHeight/2,this.row1ActualHeight=this.row1GridHeight-2*this.margin},A=B.timetableWidth,G=B.timetableHeight,F=B.margin,P=B.dayOfWeeks,U=B.times,V=B.sessions,z=B.gridWidth,X=B.gridHeight,J=B.actualWidth,q=B.actualHeight,K=B.row1GridHeight,Q=B.row1ActualHeight,Y=B.labelBG,Z=B.sideColorBG,$=B.oddRowBG,ee=B.evenRowBG,te=W.rectFactory,ne=W.textFactory;var ae=function(e){var t=new x.a.Stage({container:e.id});t.size({width:A,height:G}),t.container().classList.add("timetable__previewer__wrapper");var n=new x.a.Layer;n.size({width:A,height:G});var a=[],o=[];return a.push(te(0,0,A,G,"white")),a.push(te(F,F,J,Q,Y)),a.push(te(F,K+F,J,Q,Y)),o.push(ne("Time",F,F,J,Q,30)),o.push(ne("Session",F,K+F,J,Q,30)),P.forEach((function(e,t){a.push(te(F,X+(X*t+F),J,q,Z)),o.push(ne(e,F,X+(X*t+F),J,q,30,"Roboto","bold"))})),U.forEach((function(e,t){var n="".concat(e,":00 ").concat(e>=8&&12!==e?"a.m":"p.m"),r="".concat(e,":50 ").concat(e>=8&&12!==e?"a.m":"p.m");a.push(te(z+(z*t+F),F,J,Q,Z)),o.push(ne(n,z+(z*t+F),F,J,Q/2,20)),o.push(ne(r,z+(z*t+F),F+Q/2,J,Q/2,20))})),V.forEach((function(e,t){a.push(te(z+(z*t+F),K+F,J,Q,Z)),o.push(ne(e,z+(z*t+F),K+F,J,Q,30))})),V.forEach((function(e,t){a.push(te(z+(z*t+F),X+F,J,q,$)),a.push(te(z+(z*t+F),3*X+F,J,q,$)),a.push(te(z+(z*t+F),5*X+F,J,q,$))})),V.forEach((function(e,t){a.push(te(z+(z*t+F),2*X+F,J,q,ee)),a.push(te(z+(z*t+F),4*X+F,J,q,ee))})),a.forEach((function(e){return n.add(e)})),o.forEach((function(e){return n.add(e)})),t.add(n),n.draw(),t},oe=B.timetableWidth,re=B.timetableHeight,ie=B.margin,se=(B.dayOfWeeks,B.times,B.sessions,B.theme,B.courseNameFontSize),ce=B.lecturerNameFontSize,ue=B.courseCodeFontSize,le=B.gridWidth,me=B.gridHeight,de=B.actualWidth,he=B.actualHeight,fe=(B.row1GridHeight,B.row1ActualHeight,B.labelBG,B.sideColorBG,B.oddRowBG,B.evenRowBG,B.colorMaps),_e=W.rectFactory,pe=W.textFactory;var Ie={courseName:{heightScale:function(e,t){return e&&t?1:e||t?.75:.5}},lectName:{yOffset:function(e,t){return e?0:t?.75:.5},heightScale:function(e,t){return e&&t?1:t||!e?.25:.5}},courseCode:{yOffset:function(e,t){return e&&t?0:e?.5:.75},heightScale:function(e,t){return e&&t?1:e?.5:.25}}},ve=function(e,t){e.getLayers()[1]&&e.getLayers()[1].destroy();var n=new x.a.Layer({width:oe,height:re}),a=[],o=[];t.renderData.forEach((function(e){var t=e.dayOfWeek,n=e.startingSession,r=e.endingSession,i=e.courseObj,s=i.courseName,c=i.lecturerName,u=i.courseCode,l=i.courseID,m=0===s.length,d=0===c.length,h=0===u.length,f=le+n*le+ie,_=me+t*me+ie,p=(de+ie)*(r-n+1);a.push(_e(f,_,p,he,fe[l])),m||o.push(pe(s,f,_,p,he*Ie.courseName.heightScale(d,h),se,"Roboto","normal",3)),d||o.push(pe(c,f,_+he*Ie.lectName.yOffset(m,h),p,he*Ie.lectName.heightScale(m,h),ce,"Roboto","normal",3)),h||o.push(pe(u,f,_+he*Ie.courseCode.yOffset(m,d),p,he*Ie.courseCode.heightScale(m,d),ue,"Roboto","bold",3))})),a.forEach((function(e){return n.add(e)})),o.forEach((function(e){return n.add(e)})),e.add(n)},be=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).timetableHTML=o.a.createRef(),a.timetableCanvasWindow=o.a.createRef(),a.closePreviewBtnHandler=a.closePreviewBtnHandler.bind(Object(T.a)(a)),a.downloadBtnHandler=a.downloadBtnHandler.bind(Object(T.a)(a)),a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.canvasStage=ae(this.timetableCanvasWindow.current)}},{key:"componentDidUpdate",value:function(){ve(this.canvasStage,this.props.timetableRenderData)}},{key:"closePreviewBtnHandler",value:function(){var e=this;this.timetableHTML.current.classList.add("transitionOut"),setTimeout((function(){e.timetableHTML.current.classList.remove("transitionOut"),e.props.closePreview()}),800)}},{key:"downloadBtnHandler",value:function(){var e=document.createElement("a");e.download="timetable",e.href=this.canvasStage.toDataURL(),e.click(),e.remove()}},{key:"render",value:function(){var e=this.props.timetableRenderData.isPreviewOpen;return o.a.createElement("div",{className:"timetable ".concat(e?"":"hidden"),ref:this.timetableHTML},o.a.createElement("div",{className:"timetable__bgblocker"}),o.a.createElement("div",{className:"timetable__previewer",id:"timetable__previewer"},o.a.createElement("button",{type:"button",className:"timetable__previewer__closebtn",id:"timetable__previewer__closebtn",onClick:this.closePreviewBtnHandler},o.a.createElement("i",{className:"fas fa-times"})),o.a.createElement("div",{className:"timetable__previewer__wrapper",id:"timetable__previewer__wrapper",ref:this.timetableCanvasWindow}),o.a.createElement("button",{type:"button",className:"timetable__previewer__downloadbtn",id:"timetable__previewer__downloadbtn",onClick:this.downloadBtnHandler},"Download as png")))}}]),n}(o.a.Component);var Ee=Object(s.b)((function(e){return{timetableRenderData:e.timetableRenderData}}),(function(e){return{closePreview:function(){return e(w.closePreview())}}}))(be),Te=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).closePreviewButtonHandler=a.closePreviewButtonHandler.bind(Object(T.a)(a)),a}return Object(E.a)(n,[{key:"closePreviewButtonHandler",value:function(){this.props.closePreview()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container",id:"container"},o.a.createElement("header",{className:"header",id:"header"},o.a.createElement("img",{className:"header__logo",id:"header__logo",src:"https://upload.wikimedia.org/wikipedia/commons/8/81/UTM-LOGO.png",alt:"Logo of UTM"}),o.a.createElement("h1",{className:"header__title",id:"header__title"},"UTM Timetable Generator")),o.a.createElement(M,null),o.a.createElement(Ee,null),o.a.createElement("footer",{className:"footer",id:"footer"},o.a.createElement("h2",{className:"footer__text"}," Lorem Ipsum Sit Dolor Amet Placeholder Text ")))}}]),n}(o.a.Component);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,{store:v},o.a.createElement(Te,null))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.2a348d5f.chunk.js.map