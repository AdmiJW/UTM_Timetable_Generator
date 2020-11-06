(this.webpackJsonputm_timetable_gen=this.webpackJsonputm_timetable_gen||[]).push([[0],{37:function(e,t,n){e.exports=n(85)},46:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),s=n.n(o),i=n(8),c=n(17),l={ADD_COURSE:"ADD_COURSE",DELETE_COURSE:"DELETE_COURSE",CHANGE_COURSE_INFO:"CHANGE_COURSE_INFO",ADD_TIME:"ADD_TIME",DELETE_TIME:"DELETE_TIME",CHANGE_TIME_INFO:"CHANGE_TIME_INFO",VIEW_TIMETABLE:"VIEW_TIMETABLE",CLOSE_PREVIEW:"CLOSE_PREVIEW",OPEN_SETTING:"OPEN_SETTING",CLOSE_SETTING:"CLOSE_SETTING",CHANGE_SETTING:"CHANGE_SETTING",SAVE_SETTING:"SAVE_SETTING",LOAD_SETTING:"LOAD_SETTING",DEL_SETTING:"DEL_SETTING"},u=["Sun","Mon","Tue","Wed","Thu"],m=["02","03","04","05","06","07","08","09","10","11","12"],d={dayOfWeekIndexConverter:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?u[e]:u.indexOf(e)},sessionIndexConverter:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?m[e]:m.indexOf(e)}};function h(e,t){var n=[[],[],[],[],[]],a=d.dayOfWeekIndexConverter,r=d.sessionIndexConverter;for(var o in e){var s=e[o],i=t[o];for(var c in i)if("nextTimeID"!==c){var l=a(i[c].dayOfWeek),u=r(i[c].session),m=n[l][u];if(void 0!==m)throw new Error("Clashing Timetable Detected!\nThe course:\n\n"+"".concat(m.courseName,", ").concat(m.lecturerName,", ").concat(m.courseCode,"\n\n")+"Clashes with:\n\n"+"".concat(s.courseName,", ").concat(s.lecturerName,", ").concat(s.courseCode,"\n\n")+"At timeslot:\n"+"   ".concat(a(l,!0),", ").concat(r(u,!0)));n[l][u]=s}}return n}var g=function(e){for(var t=e.length,n=e.reduce((function(e,t){return Math.max(t.length,e)}),0),a=[],r=0;r<t;r++)for(var o=0;o<n;){if(void 0!==e[r][o]){for(var s={dayOfWeek:r,startingSession:o,endingSession:o,courseObj:e[r][o]};o+1<n&&e[r][o+1]===s.courseObj;)o++,s.endingSession=o;a.push(s)}o++}return a},_={isPreviewOpen:!1,isSettingOpen:!1,nextCourseID:1,courseItems:{0:{courseID:0,courseName:"Enter Course Name",lecturerName:"Enter Lecturer Name",courseCode:"Enter Course Code"}},courseTimeItems:{0:{0:{timeID:0,dayOfWeek:"Sun",session:"02"},nextTimeID:1}},timetableRenderData:null,settings:{theme:"default",courseNameFontSize:25,lecturerNameFontSize:15,courseCodeFontSize:13,gridWidth:200,gridHeight:150,noOfSessions:11}},p=window.localStorage.getItem("nextCourseID"),f=JSON.parse(window.localStorage.getItem("courseItems")),E=JSON.parse(window.localStorage.getItem("courseTimeItems")),v=JSON.parse(window.localStorage.getItem("settings"));p&&f&&E&&v&&(console.log("YES"),_.nextCourseID=p,_.courseItems=f,_.courseTimeItems=E,_.settings=v);var b=function(e){return{courseID:e++,courseName:"",lecturerName:"",courseCode:""}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=e.courseItems,a=e.courseTimeItems;switch(t.type){case l.ADD_COURSE:var r=b(e.nextCourseID);return(n=Object.assign({},n))[r.courseID]=r,(a=Object.assign({},a))[r.courseID]={nextTimeID:0},Object.assign({},e,{courseItems:n,courseTimeItems:a,nextCourseID:e.nextCourseID+1});case l.DELETE_COURSE:var o=t.payload.courseIndexToDel;return delete(n=Object.assign({},n))[o],delete(a=Object.assign({},a))[o],Object.assign({},e,{courseItems:n,courseTimeItems:a});case l.CHANGE_COURSE_INFO:var s=t.payload.newInfoValues,i=s.courseID;return(n=Object.assign({},n))[i]=s,Object.assign({},e,{courseItems:n});case l.ADD_TIME:var c=t.payload.courseIndexToAdd,u=a[c].nextTimeID,m=Object.assign({},a[c],{nextTimeID:u+1});return m[u]={timeID:u,dayOfWeek:"Sun",session:"02"},(a=Object.assign({},a))[c]=m,Object.assign({},e,{courseTimeItems:a});case l.DELETE_TIME:var d=t.payload,p=d.courseIndexToDel,f=d.timeIndexToDel,E=Object.assign({},a[p]);return delete E[f],(a=Object.assign({},a))[p]=E,Object.assign({},e,{courseTimeItems:a});case l.CHANGE_TIME_INFO:var v=t.payload,I=v.courseIndexToChange,T=v.timeIndexToChange,S=v.newTimeValues,N=Object.assign({},a[I]);return N[T]=S,(a=Object.assign({},a))[I]=N,Object.assign({},e,{courseTimeItems:a});case l.VIEW_TIMETABLE:var w=null;try{w=h(e.courseItems,e.courseTimeItems)}catch(L){return window.alert(L),e}var C=g(w);return Object.assign({},e,{timetableRenderData:C,isPreviewOpen:!0});case l.CLOSE_PREVIEW:return Object.assign({},e,{isPreviewOpen:!1});case l.OPEN_SETTING:return Object.assign({},e,{isSettingOpen:!0});case l.CLOSE_SETTING:return Object.assign({},e,{isSettingOpen:!1});case l.CHANGE_SETTING:var O=t.payload.settingEvent.target,y=Object.assign({},e.settings);switch(O.id){case"theme":y.theme=O.value;break;case"courseName-fontsize":y.courseNameFontSize=Math.min(70,Math.max(O.value,0));break;case"lecturerName-fontsize":y.lecturerNameFontSize=Math.min(70,Math.max(O.value,0));break;case"courseCode-fontsize":y.courseCodeFontSize=Math.min(70,Math.max(O.value,0));break;case"noOfSessions":y.noOfSessions=O.value;break;case"gridWidth":y.gridWidth=Math.min(400,Math.max(O.value,0));break;case"gridHeight":y.gridHeight=Math.min(400,Math.max(O.value,0));break;default:return e}return Object.assign({},e,{settings:y});case l.SAVE_SETTING:try{window.localStorage.setItem("nextCourseID",e.nextCourseID),window.localStorage.setItem("courseItems",JSON.stringify(e.courseItems)),window.localStorage.setItem("courseTimeItems",JSON.stringify(e.courseTimeItems)),window.localStorage.setItem("settings",JSON.stringify(e.settings)),window.alert("Course Informations and Settings Saved To Local Storage!")}catch(M){window.alert("Unable to save to local Storage")}return e;case l.LOAD_SETTING:try{var D=window.localStorage.getItem("nextCourseID"),G=JSON.parse(window.localStorage.getItem("courseItems")),H=JSON.parse(window.localStorage.getItem("courseTimeItems")),k=JSON.parse(window.localStorage.getItem("settings"));if(!D||!G||!H||!k)throw Error;return window.alert("Successfully loaded saved state from local storage"),Object.assign({},e,{nextCourseID:D,courseItems:G,courseTimeItems:H,settings:k})}catch(j){window.alert("Unable to load from local Storage")}return e;case l.DEL_SETTING:return window.localStorage.removeItem("nextCourseID"),window.localStorage.removeItem("courseItems"),window.localStorage.removeItem("courseTimeItems"),window.localStorage.removeItem("settings"),window.alert("Successfully cleared saved state from local storage!"),e;default:return e}},T=Object(c.b)(I,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),S=(n(46),n(9)),N=n(10),w=n(12),C=n(11),O=n(7),y={addCourse:function(){return{type:l.ADD_COURSE}},deleteCourse:function(e){return{type:l.DELETE_COURSE,payload:{courseIndexToDel:e}}},changeCourseInfo:function(e){return{type:l.CHANGE_COURSE_INFO,payload:{newInfoValues:e}}}},D={viewTimetable:function(){return{type:l.VIEW_TIMETABLE}},closePreview:function(){return{type:l.CLOSE_PREVIEW}}},G=n(18),H=n.n(G),k={addTime:function(e){return{type:l.ADD_TIME,payload:{courseIndexToAdd:e}}},deleteTime:function(e,t){return{type:l.DELETE_TIME,payload:{courseIndexToDel:e,timeIndexToDel:t}}},changeTimeInfo:function(e,t,n){return{type:l.CHANGE_TIME_INFO,payload:{courseIndexToChange:e,timeIndexToChange:t,newTimeValues:n}}}},L=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).deleteTime=a.deleteTime.bind(Object(O.a)(a)),a.changeTimeInfo=a.changeTimeInfo.bind(Object(O.a)(a)),a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.timeItemHTML=document.getElementById("course-item__times__entry-".concat(this.props.courseID,"-").concat(this.props.timeInfo.timeID)),this.timeDayOfWeekHTML=this.timeItemHTML.children[1],this.timeSessionHTML=this.timeItemHTML.children[2]}},{key:"deleteTime",value:function(){var e=this;this.timeItemHTML.classList.add("fade-out"),setTimeout((function(){e.props.deleteTime(e.props.courseID,e.props.timeInfo.timeID)}),500)}},{key:"changeTimeInfo",value:function(){this.props.changeTimeInfo(this.props.courseID,this.props.timeInfo.timeID,{timeID:this.props.timeInfo.timeID,dayOfWeek:this.timeDayOfWeekHTML.value,session:this.timeSessionHTML.value})}},{key:"render",value:function(){var e=this.props.courseID,t=this.props.timeInfo,n=t.timeID,a=t.dayOfWeek,o=t.session;return r.a.createElement("div",{className:"course-item__times__entry",id:"course-item__times__entry-".concat(e,"-").concat(n)},r.a.createElement("button",{type:"button",className:"course-item__times__entry__delete-button",onClick:this.deleteTime},"X"),r.a.createElement("select",{className:"course-item__times__entry__dayOfWeek",value:a,onChange:this.changeTimeInfo},r.a.createElement("option",{value:"Sun"},"Sunday"),r.a.createElement("option",{value:"Mon"},"Monday"),r.a.createElement("option",{value:"Tue"},"Tuesday"),r.a.createElement("option",{value:"Wed"},"Wednesday"),r.a.createElement("option",{value:"Thu"},"Thursday")),r.a.createElement("select",{className:"course-item__times__entry__session",value:o,onChange:this.changeTimeInfo},r.a.createElement("option",{value:"02"},"02 (8:00am - 8:50am)"),r.a.createElement("option",{value:"03"},"03 (9:00am - 9:50am)"),r.a.createElement("option",{value:"04"},"04 (10:00am - 10:50am)"),r.a.createElement("option",{value:"05"},"05 (11:00am - 11:50am)"),r.a.createElement("option",{value:"06"},"06 (12:00pm - 12:50pm)"),r.a.createElement("option",{value:"07"},"07 (1:00pm - 1:50pm)"),r.a.createElement("option",{value:"08"},"08 (2:00pm - 2:50pm)"),r.a.createElement("option",{value:"09"},"09 (3:00pm - 3:50pm)"),r.a.createElement("option",{value:"10"},"10 (4:00pm - 4:50pm)"),r.a.createElement("option",{value:"11"},"11 (5:00pm - 5:50pm)"),r.a.createElement("option",{value:"12"},"12 (6:00pm - 6:50pm)")))}}]),n}(r.a.PureComponent);var M=Object(i.b)(null,(function(e){return{deleteTime:function(t,n){return e(k.deleteTime(t,n))},changeTimeInfo:function(t,n,a){return e(k.changeTimeInfo(t,n,a))}}}))(L),j=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).deleteCourse=a.deleteCourse.bind(Object(O.a)(a)),a.changeCourseInfo=a.changeCourseInfo.bind(Object(O.a)(a)),a.addTime=a.addTime.bind(Object(O.a)(a)),a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.courseItemHTML=document.getElementById("course-item-".concat(this.courseID)),this.courseItemInfoElements=this.courseItemHTML.children[0].children,this.courseNameHTML=this.courseItemInfoElements[0],this.lecturerNameHTML=this.courseItemInfoElements[1],this.courseCodeHTML=this.courseItemInfoElements[2]}},{key:"deleteCourse",value:function(){var e=this;this.courseItemHTML.classList.add("fade-out"),setTimeout((function(){e.props.deleteCourse(e.courseID)}),500)}},{key:"changeCourseInfo",value:function(){this.props.changeCourseInfo({courseID:this.courseID,courseName:this.courseNameHTML.textContent,lecturerName:this.lecturerNameHTML.textContent,courseCode:this.courseCodeHTML.textContent})}},{key:"addTime",value:function(){this.props.addTime(this.courseID)}},{key:"timeItemRenderer",value:function(){var e=this;return Object.keys(this.props.courseTimes).map((function(t){return"nextTimeID"!==t?r.a.createElement(M,{key:t,courseID:e.courseID,timeInfo:e.props.courseTimes[t]}):null}))}},{key:"render",value:function(){return this.courseInfo=this.props.courseInfo,this.courseID=this.courseInfo.courseID,this.courseTimes=this.props.courseTimes,r.a.createElement("div",{className:"course-item course-item--".concat(this.courseID%10,"-theme"),id:"course-item-".concat(this.courseID)},r.a.createElement("div",{className:"course-item__info"},r.a.createElement(H.a,{className:"course-item__info__courseName",id:"course-item__info__courseName-".concat(this.courseID),onChange:this.changeCourseInfo,html:this.courseInfo.courseName,spellCheck:"false"}),r.a.createElement(H.a,{className:"course-item__info__lecturerName",id:"course-item__info__lecturerName-".concat(this.courseID),onChange:this.changeCourseInfo,html:this.courseInfo.lecturerName,spellCheck:"false"}),r.a.createElement(H.a,{className:"course-item__info__courseCode",id:"course-item__info__courseCode-".concat(this.courseID),onChange:this.changeCourseInfo,html:this.courseInfo.courseCode,spellCheck:"false"}),r.a.createElement("div",{className:"course-item__info__buttons"},r.a.createElement("button",{type:"button",className:"course-item__info__buttons__delete-btn",onClick:this.deleteCourse},r.a.createElement("i",{className:"fas fa-trash-alt"})),r.a.createElement("button",{type:"button",className:"course-item__info__buttons__add-button",onClick:this.addTime},"+"))),r.a.createElement("div",{className:"course-item__seperator"}),r.a.createElement("div",{className:"course-item__times"},this.timeItemRenderer()))}}]),n}(r.a.PureComponent);var x=Object(i.b)(null,(function(e){return{deleteCourse:function(t){return e(y.deleteCourse(t))},changeCourseInfo:function(t){return e(y.changeCourseInfo(t))},addTime:function(t){return e(k.addTime(t))}}}))(j),F=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).addCourse=a.addCourse.bind(Object(O.a)(a)),a.courseItemRenderer=a.courseItemRenderer.bind(Object(O.a)(a)),a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.courseContainer=document.getElementById("course-window__div")}},{key:"addCourse",value:function(){var e=this;this.props.addCourse(),setTimeout((function(){e.courseContainer.scrollTop=e.courseContainer.scrollHeight}),50)}},{key:"courseItemRenderer",value:function(){var e=this.props,t=e.courseItems,n=e.courseTimeItems;return Object.keys(t).map((function(e){return r.a.createElement(x,{key:e,courseInfo:t[e],courseTimes:n[e]})}))}},{key:"render",value:function(){return r.a.createElement("main",{className:"course-window",id:"course-window"},r.a.createElement("div",{className:"course-window__div",id:"course-window__div"},this.courseItemRenderer()),r.a.createElement("button",{type:"button",className:"course-window__add-button",id:"course-window__add-button",onClick:this.addCourse},"+"),r.a.createElement("button",{type:"button",className:"course-window__view-button",id:"course-window__view-button",onClick:this.props.viewTimetable},r.a.createElement("i",{className:"far fa-eye"})))}}]),n}(r.a.Component);var B=Object(i.b)((function(e){return{courseItems:e.courseItems,courseTimeItems:e.courseTimeItems}}),(function(e){return{addCourse:function(){return e(y.addCourse())},viewTimetable:function(){return e(D.viewTimetable())}}}))(F),W=n(13),R=n.n(W),P={rectFactory:function(e,t,n,a,r){return new R.a.Rect({x:e,y:t,width:n,height:a,fill:r,listening:!1})},textFactory:function(e,t,n,a,r,o,s){var i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"Roboto",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"normal",l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0;return new R.a.Text({text:e,x:t,y:n,width:a,height:r,fontFamily:i,fontSize:o,fontStyle:c,padding:l,align:"center",verticalAlign:"middle",fill:s,listening:!1})}};R.a.showWarnings=!1;var A=P.rectFactory,z=P.textFactory;var U=function(e,t){for(var n=t.gridWidth,a=t.gridHeight,r=t.margin,o=t.dayOfWeeks,s=t.times,i=t.sessions,c=t.themeSettings,l=t.timetableWidth,u=t.timetableHeight,m=t.actualWidth,d=t.actualHeight,h=t.row1GridHeight,g=t.row1ActualHeight,_=c.baseBG,p=c.labelBG,f=c.sideColorBG,E=c.oddRowBG,v=c.evenRowBG,b=c.labelFontColor,I=c.fontFamily;e.firstChild;)e.firstChild.remove();var T=new R.a.Stage({container:e.id,width:l,height:u});T.container().classList.add("timetable__previewer__wrapper");var S=new R.a.Layer({width:l,height:u}),N=new R.a.Layer({width:l,height:u}),w=[],C=[];return w.push(A(0,0,l,u,_)),w.push(A(r,r,m,g,p)),w.push(A(r,h+r,m,g,p)),C.push(z("Time",r,r,m,g,30,b,I)),C.push(z("Session",r,h+r,m,g,30,b,I)),o.forEach((function(e,t){w.push(A(r,a+(a*t+r),m,d,f)),C.push(z(e,r,a+(a*t+r),m,d,28,b,I,"bold"))})),s.forEach((function(e,t){var a="".concat(e,":00 ").concat(e>=8&&12!==e?"a.m":"p.m"),o="".concat(e,":50 ").concat(e>=8&&12!==e?"a.m":"p.m");w.push(A(n+(n*t+r),r,m,g,f)),C.push(z(a,n+(n*t+r),r,m,g/2,20,b,I)),C.push(z(o,n+(n*t+r),r+g/2,m,g/2,20,b,I))})),i.forEach((function(e,t){w.push(A(n+(n*t+r),h+r,m,g,f)),C.push(z(e,n+(n*t+r),h+r,m,g,30,b,I))})),i.forEach((function(e,t){w.push(A(n+(n*t+r),a+r,m,d,E)),w.push(A(n+(n*t+r),3*a+r,m,d,E)),w.push(A(n+(n*t+r),5*a+r,m,d,E))})),i.forEach((function(e,t){w.push(A(n+(n*t+r),2*a+r,m,d,v)),w.push(A(n+(n*t+r),4*a+r,m,d,v))})),w.forEach((function(e){return S.add(e)})),C.forEach((function(e){return S.add(e)})),T.add(S),T.add(N),S.draw(),T},V=P.rectFactory,J=P.textFactory;var X={courseName:{heightScale:function(e,t){return e&&t?1:e||t?.75:.5}},lectName:{yOffset:function(e,t){return e?0:t?.75:.5},heightScale:function(e,t){return e&&t?1:t||!e?.25:.5}},courseCode:{yOffset:function(e,t){return e&&t?0:e?.5:.75},heightScale:function(e,t){return e&&t?1:e?.5:.25}}},Y=function(e,t,n){var a=n.gridWidth,r=n.gridHeight,o=n.margin,s=n.themeSettings,i=n.courseNameFontSize,c=n.lecturerNameFontSize,l=n.courseCodeFontSize,u=n.actualWidth,m=n.actualHeight,d=s.courseFontColor,h=s.fontFamily,g=s.colorMaps,_=e.getLayers()[1],p=[],f=[];t.forEach((function(e){var t=e.dayOfWeek,n=e.startingSession,s=e.endingSession,_=e.courseObj,E=_.courseName,v=_.lecturerName,b=_.courseCode,I=_.courseID,T=0===E.length,S=0===v.length,N=0===b.length,w=a+n*a+o,C=r+t*r+o,O=(s-n+1)*(u+2*o)-2*o;p.push(V(w,C,O,m,g[I%g.length])),T||f.push(J(E,w,C,O,m*X.courseName.heightScale(S,N),i,d,h,"normal",3)),S||f.push(J(v,w,C+m*X.lectName.yOffset(T,N),O,m*X.lectName.heightScale(T,N),c,d,h,"normal",3)),N||f.push(J(b,w,C+m*X.courseCode.yOffset(T,S),O,m*X.courseCode.heightScale(T,S),l,d,h,"bold",3))})),p.forEach((function(e){return _.add(e)})),f.forEach((function(e){return _.add(e)})),e.add(_)},q={default:{name:"default",baseBG:"white",labelBG:"#7f8082",sideColorBG:"#70ad46",oddRowBG:"#c6e0b3",evenRowBG:"#a9d08f",labelFontColor:"white",courseFontColor:"white",fontFamily:"Roboto",colorMaps:["#3498db","#6ab04c","#e74c3c","#9b59b6","#34495e","#f1c40f","#3a40b6","#2ecc71","#e67e22","#686de0"]},futuristic:{name:"futuristic",baseBG:"#2ecc71",labelBG:"black",sideColorBG:"black",oddRowBG:"#1b242e",evenRowBG:"#212d3b",labelFontColor:"#29e679",courseFontColor:"#29e679",fontFamily:"Orbitron",colorMaps:["black"]},cuteness:{name:"cuteness",baseBG:"white",labelBG:"#ff7199",sideColorBG:"#ff7199",oddRowBG:"#ffbada",evenRowBG:"#ffe2ea",labelFontColor:"white",courseFontColor:"white",fontFamily:"Grandstander",colorMaps:["#ff90c3"]},spiderman:{name:"spiderman",baseBG:"#cccee3",labelBG:"#0861a3",sideColorBG:"#0268d7",oddRowBG:"#ca141d",evenRowBG:"#b31219",labelFontColor:"white",courseFontColor:"white",fontFamily:"Marvel",colorMaps:["#8f0505"]},nature:{name:"nature",baseBG:"#392c1d",labelBG:"#55422b",sideColorBG:"#907a48",oddRowBG:"#4f6336",evenRowBG:"#4b6b3c",labelFontColor:"#e6deb9",courseFontColor:"#3b2e1e",fontFamily:"Cantora One",colorMaps:["#d4bf88"]}};function K(e){var t=e.theme,n=e.courseNameFontSize,a=e.lecturerNameFontSize,r=e.courseCodeFontSize,o=e.gridWidth,s=e.gridHeight,i=e.noOfSessions;this.gridWidth=o,this.gridHeight=s,this.margin=2,this.dayOfWeeks=["Sunday","Monday","Tuesday","Wednesday","Thursday"],this.times=[8,9,10,11,12,1,2,3,4,5,6],this.sessions=["02","03","04","05","06","07","08","09","10","11","12"],this.themeSettings=q[t],this.courseNameFontSize=n,this.lecturerNameFontSize=a,this.courseCodeFontSize=r,this.timetableWidth=this.gridWidth*(Number(i)+1),this.timetableHeight=6*this.gridHeight,this.actualWidth=this.gridWidth-2*this.margin,this.actualHeight=this.gridHeight-2*this.margin,this.row1GridHeight=this.gridHeight/2,this.row1ActualHeight=this.row1GridHeight-2*this.margin}var Q=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).timetableHTML=r.a.createRef(),a.timetableCanvasWindow=r.a.createRef(),a.closePreviewBtnHandler=a.closePreviewBtnHandler.bind(Object(O.a)(a)),a.downloadBtnHandler=a.downloadBtnHandler.bind(Object(O.a)(a)),a.openTabBtnHandler=a.openTabBtnHandler.bind(Object(O.a)(a)),a}return Object(N.a)(n,[{key:"componentDidUpdate",value:function(){if(this.props.isPreviewOpen){var e=new K(this.props.settings);this.canvasStage=U(this.timetableCanvasWindow.current,e),Y(this.canvasStage,this.props.timetableRenderData,e)}}},{key:"closePreviewBtnHandler",value:function(){var e=this;this.timetableHTML.current.classList.add("transitionOut"),setTimeout((function(){e.timetableHTML.current.classList.remove("transitionOut"),e.props.closePreview()}),800)}},{key:"downloadBtnHandler",value:function(){var e=document.createElement("a");e.download="timetable",e.href=this.canvasStage.toDataURL(),e.click(),e.remove()}},{key:"openTabBtnHandler",value:function(){var e=window.open();e.opener=null;var t=new Image;t.src=this.canvasStage.toDataURL(),t.onload=function(){e.document.write("\n                <a style='display: inline-block; font-size: 30px; padding: 5px; margin: 10px; border-radius: 10px; text-decoration: none;\n                    background-color: #3498db; color: white;' \n                    href=".concat(t.src," download='timetable'>Download Image</a>\n                ").concat(t.outerHTML,"\n            ")),e.document.close()}}},{key:"render",value:function(){var e=this.props.isPreviewOpen;return r.a.createElement("div",{className:"timetable ".concat(e?"":"hidden"),ref:this.timetableHTML},r.a.createElement("div",{className:"timetable__previewer",id:"timetable__previewer"},r.a.createElement("button",{type:"button",className:"timetable__previewer__closebtn",id:"timetable__previewer__closebtn",onClick:this.closePreviewBtnHandler},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement("div",{className:"timetable__previewer__wrapper",id:"timetable__previewer__wrapper",ref:this.timetableCanvasWindow}),r.a.createElement("div",{className:"timetable__previewer__btnDiv",id:"timetable__previewer__btnDiv"},r.a.createElement("button",{type:"button",className:"timetable__previewer__downloadbtn",id:"timetable__previewer__downloadbtn",onClick:this.downloadBtnHandler},"Download as png"),r.a.createElement("button",{type:"button",className:"timetable__previewer__openTab",id:"timetable__previewer__openTab",onClick:this.openTabBtnHandler},"Open in new tab"))))}}]),n}(r.a.Component);var Z=Object(i.b)((function(e){return{isPreviewOpen:e.isPreviewOpen,timetableRenderData:e.timetableRenderData,settings:e.settings}}),(function(e){return{closePreview:function(){return e(D.closePreview())}}}))(Q),$={openSetting:function(){return{type:l.OPEN_SETTING}},closeSetting:function(){return{type:l.CLOSE_SETTING}},changeSetting:function(e){return{type:l.CHANGE_SETTING,payload:{settingEvent:e}}},saveSetting:function(){return{type:l.SAVE_SETTING}},loadSetting:function(){return{type:l.LOAD_SETTING}},delSetting:function(){return{type:l.DEL_SETTING}}};var ee=function(e){return r.a.createElement("div",{className:"settings__category settings__savedel"},r.a.createElement("h4",{className:"settings__category__title"},"Save / Load / Clear Local Storage"),r.a.createElement("div",{className:"settings__savedel__wrapper"},r.a.createElement("button",{className:"settings__savedel__btn",onClick:e.saveSetting,title:"Save State"},r.a.createElement("i",{className:"fas fa-save"})),r.a.createElement("button",{className:"settings__savedel__btn",onClick:e.loadSetting,title:"Load State"},r.a.createElement("i",{className:"fas fa-upload"})),r.a.createElement("button",{className:"settings__savedel__btn",onClick:e.delSetting,title:"Clear State"},r.a.createElement("i",{className:"fas fa-trash-alt"}))))};var te=function(e){return r.a.createElement("div",{className:"settings__category settings__theme"},r.a.createElement("h4",{className:"settings__category__title"},"Timetable Theme"),r.a.createElement("div",{className:"settings__theme__wrapper"},r.a.createElement("select",{className:"settings__theme__select",value:e.theme,id:"theme",onChange:e.changeSetting,title:"Preset color theme for your timetable"},r.a.createElement("option",{value:"default"},"Default"),r.a.createElement("option",{value:"futuristic"},"Futuristic"),r.a.createElement("option",{value:"cuteness"},"Cuteness"),r.a.createElement("option",{value:"spiderman"},"Spiderman"),r.a.createElement("option",{value:"nature"},"Nature"))))};var ne=function(e){var t=e.settings,n=t.courseNameFontSize,a=t.lecturerNameFontSize,o=t.courseCodeFontSize,s=t.gridWidth,i=t.gridHeight,c=e.renderProp,l=e.changeSetting;return r.a.createElement("div",{className:"settings__category settings__gridProps"},r.a.createElement("h4",{className:"settings__category__title"},"Grid Properties"),r.a.createElement("div",{className:"settings__gridProps__wrapper"},r.a.createElement("div",{className:"settings__gridProps__inputGroup"},r.a.createElement("label",{htmlFor:"gridWidth"},"Grid Width"),r.a.createElement("input",{type:"number",id:"gridWidth",value:s,min:"0",max:"400",onChange:l})),r.a.createElement("div",{className:"settings__gridProps__inputGroup"},r.a.createElement("label",{htmlFor:"gridHeight"},"Grid Height"),r.a.createElement("input",{type:"number",id:"gridHeight",value:i,min:"0",max:"400",onChange:l}))),r.a.createElement("div",{className:"settings__gridProps__wrapper"},r.a.createElement("div",{className:"settings__gridProps__inputGroup"},r.a.createElement("label",{htmlFor:"courseName-fontsize"},"Course Name Font size"),r.a.createElement("input",{type:"number",id:"courseName-fontsize",value:n,min:"0",max:"70",onChange:l})),r.a.createElement("div",{className:"settings__gridProps__inputGroup"},r.a.createElement("label",{htmlFor:"lecturerName-fontsize"},"Lecturer Name Font size"),r.a.createElement("input",{type:"number",id:"lecturerName-fontsize",value:a,min:"0",max:"70",onChange:l})),r.a.createElement("div",{className:"settings__gridProps__inputGroup"},r.a.createElement("label",{htmlFor:"courseCode-fontsize"},"Course Code Font size"),r.a.createElement("input",{type:"number",id:"courseCode-fontsize",value:o,min:"0",max:"70",onChange:l}))),r.a.createElement("h4",{className:"settings__category__title"},"Example Grid"),r.a.createElement("div",{style:{fontFamily:c.fontFamily,backgroundColor:c.sideColorBG,color:c.labelFontColor,border:"solid 4px ".concat(c.baseBG),width:s,height:i},className:"settings__gridProps__preview"},r.a.createElement("p",{style:{fontSize:n}},"Engineering Basics"),r.a.createElement("p",{style:{fontSize:a}},"Dr. Ali bin Ahmed"),r.a.createElement("p",{style:{fontSize:o}},"AC20142")))};var ae=function(e){var t=e.noOfSessions,n=e.changeSetting;return r.a.createElement("div",{className:"settings__category settings__noSessions"},r.a.createElement("h4",{className:"settings__category__title"},"Number of Sessions"),r.a.createElement("select",{className:"settings__noSessions__select",id:"noOfSessions",value:t,onChange:n,title:"How many column will exist in your timetable"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"11"},"11")))},re=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={renderProperties:q[a.props.settings.theme]},a.settingHTML=r.a.createRef(),a.closeSettingButtonHandler=a.closeSettingButtonHandler.bind(Object(O.a)(a)),a}return Object(N.a)(n,[{key:"closeSettingButtonHandler",value:function(){var e=this;this.settingHTML.current.classList.add("transitionOut"),setTimeout((function(){e.settingHTML.current.classList.remove("transitionOut"),e.props.closeSetting()}),800)}},{key:"render",value:function(){var e=this.props.settings,t=e.gridWidth,n=e.gridHeight,a=e.noOfSessions;return r.a.createElement("div",{className:"settings ".concat(this.props.isSettingOpen?"":"hidden"),id:"settings",ref:this.settingHTML},r.a.createElement("button",{type:"button",className:"settings__closebtn",id:"settings__closebtn",onClick:this.closeSettingButtonHandler},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement("h3",{className:"settings__title"},"Settings"),r.a.createElement("p",{className:"settings__sizeEstimateMsg"},"Your timetable should be of size:",r.a.createElement("br",null),r.a.createElement("span",{className:"settings__sizeEstimateMsg__value"},"".concat(t*(Number(a)+1),"px ")),"x",r.a.createElement("span",{className:"settings__sizeEstimateMsg__value"}," ".concat(6*n,"px"))),r.a.createElement("div",{className:"settings__wrapper"},r.a.createElement(ee,{saveSetting:this.props.saveSetting,loadSetting:this.props.loadSetting,delSetting:this.props.delSetting}),r.a.createElement(te,{theme:this.props.settings.theme,changeSetting:this.props.changeSetting}),r.a.createElement(ne,{settings:this.props.settings,renderProp:this.state.renderProperties,changeSetting:this.props.changeSetting}),r.a.createElement(ae,{noOfSessions:this.props.settings.noOfSessions,changeSetting:this.props.changeSetting})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.settings.theme===t.renderProperties.name?t:Object.assign({},t,{renderProperties:q[e.settings.theme]})}}]),n}(r.a.PureComponent);var oe=Object(i.b)((function(e){return{isSettingOpen:e.isSettingOpen,settings:e.settings}}),(function(e){return{closeSetting:function(){return e($.closeSetting())},changeSetting:function(t){return e($.changeSetting(t))},saveSetting:function(){return e($.saveSetting())},loadSetting:function(){return e($.loadSetting())},delSetting:function(){return e($.delSetting())}}}))(re);var se=Object(i.b)((function(e){return{isBlocking:e.isPreviewOpen||e.isSettingOpen}}),null)((function(e){return r.a.createElement("div",{className:"blocker ".concat(e.isBlocking?"blocking":"")})})),ie=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container",id:"container"},r.a.createElement("header",{className:"header",id:"header"},r.a.createElement("img",{className:"header__logo",id:"header__logo",src:"https://upload.wikimedia.org/wikipedia/commons/8/81/UTM-LOGO.png",alt:"Logo of UTM"}),r.a.createElement("h1",{className:"header__title",id:"header__title"},"UTM Timetable Generator"),r.a.createElement("button",{className:"header__setting",id:"header__setting",type:"button",onClick:this.props.openSetting},r.a.createElement("i",{className:"fas fa-cog header__setting__cog1"}),r.a.createElement("i",{className:"fas fa-cog header__setting__cog2"}))),r.a.createElement(se,null),r.a.createElement(B,null),r.a.createElement(Z,null),r.a.createElement(oe,null),r.a.createElement("footer",{className:"footer",id:"footer"},r.a.createElement("a",{href:"https://github.com/AdmiJW/UTM_Timetable_Generator/issues",target:"_blank",rel:"noopener noreferrer",className:"footer__support",id:"footer__support"},r.a.createElement("h3",{className:"footer__support__text"},"Support"),r.a.createElement("img",{className:"footer__support__logo",src:"https://icons-for-free.com/iconfiles/png/512/github+hub+icon+icon-1320194641335079152.png",alt:"github logo"})),r.a.createElement("p",{className:"footer__desc"},"An open source project")))}}]),n}(r.a.Component);var ce=Object(i.b)(null,(function(e){return{openSetting:function(){return e($.openSetting())}}}))(ie),le=n(36),ue=n.n(le);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:T},r.a.createElement(ce,null))),document.getElementById("root"));["Orbitron","Roboto","Grandstander","Marvel","Cantora One"].forEach((function(e){new ue.a(e).load().then((function(t){console.log("'".concat(e,"' Web Font is loaded Successfully"))})).catch((function(t){console.log("Loading of Web Font '"+e+"' Failed!")}))}))}},[[37,1,2]]]);
//# sourceMappingURL=main.9bfce7a2.chunk.js.map