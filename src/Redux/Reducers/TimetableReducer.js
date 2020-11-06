
import ActionTypes from '../Actions/ActionTypes';

//  Timetable Validator and Flattener
import clashChecker from '../../LogicUtils/ClashChecker';
import timeFlattener from '../../LogicUtils/TimeFlattener';

//  Testcases
import defaultTimetable from '../../Testcases/defaultTimetable';




//==============================
//  Initial State
//==============================
const initialState = defaultTimetable;

//  Try to load the state from the local storage when the application first starts up
{
    const nextCourseID = window.localStorage.getItem('nextCourseID');
    const courseItems = JSON.parse( window.localStorage.getItem('courseItems') );
    const courseTimeItems = JSON.parse( window.localStorage.getItem('courseTimeItems') );
    const settings = JSON.parse( window.localStorage.getItem('settings') );

    if (nextCourseID && courseItems && courseTimeItems && settings) {
        console.log("YES");
        initialState.nextCourseID = nextCourseID;
        initialState.courseItems = courseItems;
        initialState.courseTimeItems = courseTimeItems;
        initialState.settings = settings;
    }
}



//==============================
//  Reducer
//==============================
function timetableReducer(state = initialState, action ) {
    let { courseItems, courseTimeItems } = state;

    switch (action.type) {

        //======================    COURSE ACTIONS ==============================
        
        case ActionTypes.ADD_COURSE: {
            const newCourseItem = courseFactory( state.nextCourseID );

            courseItems = Object.assign({}, courseItems );
            courseItems[ newCourseItem.courseID ] = newCourseItem;

            courseTimeItems = Object.assign({}, courseTimeItems );
            courseTimeItems[ newCourseItem.courseID ] = { 
                nextTimeID: 0 
            };

            return Object.assign({}, state, { courseItems, courseTimeItems, nextCourseID: state.nextCourseID+1 } );
        }

        case ActionTypes.DELETE_COURSE: {
            const { courseIndexToDel }  = action.payload;

            courseItems = Object.assign( {}, courseItems );
            delete courseItems[ courseIndexToDel ];

            courseTimeItems = Object.assign( {}, courseTimeItems );
            delete courseTimeItems[ courseIndexToDel ];

            return Object.assign({}, state, { courseItems, courseTimeItems } );
        }

        case ActionTypes.CHANGE_COURSE_INFO: {
            const { newInfoValues } = action.payload;
            const courseIndexToChange = newInfoValues.courseID;

            courseItems = Object.assign({}, courseItems);
            courseItems[ courseIndexToChange ] = newInfoValues;

            return Object.assign({}, state, { courseItems } );
        }

        //======================    TIME ACTIONS     ==============================

        case ActionTypes.ADD_TIME: {
            const { courseIndexToAdd } = action.payload;

            const nextTimeID = courseTimeItems[courseIndexToAdd].nextTimeID;

            const newCourseTimes = Object.assign( {}, courseTimeItems[courseIndexToAdd], { nextTimeID: nextTimeID + 1 }  );
            newCourseTimes[ nextTimeID ] = {
                timeID: nextTimeID,
                dayOfWeek: 'Sun',
                session: '02'
            };
            courseTimeItems = Object.assign( {}, courseTimeItems );
            courseTimeItems[ courseIndexToAdd ] = newCourseTimes;
            
            return Object.assign({}, state, { courseTimeItems } );
        }
        case ActionTypes.DELETE_TIME: {
            const { courseIndexToDel, timeIndexToDel } = action.payload;

            const newCourseTimes = Object.assign( {}, courseTimeItems[ courseIndexToDel ] );
            delete newCourseTimes[ timeIndexToDel ];

            courseTimeItems = Object.assign( {}, courseTimeItems );
            courseTimeItems[ courseIndexToDel ] = newCourseTimes;

            return Object.assign({}, state, { courseTimeItems } );
        }
        case ActionTypes.CHANGE_TIME_INFO: {
            const { courseIndexToChange, timeIndexToChange, newTimeValues } = action.payload;    
            
            const newCourseTimes = Object.assign( {}, courseTimeItems[ courseIndexToChange ] );
            newCourseTimes[ timeIndexToChange ] = newTimeValues;

            courseTimeItems = Object.assign( {}, courseTimeItems );
            courseTimeItems[ courseIndexToChange ] = newCourseTimes;

            return Object.assign( {}, state, { courseTimeItems } );
        }

        //======================    PREVIEW TIMETABLE ACTIONS     ==============================

        case ActionTypes.VIEW_TIMETABLE: {
            // Check for clashing time slots
            let virtualTimetable = null;
            try {
                virtualTimetable = clashChecker( state.courseItems, state.courseTimeItems );
            } catch (e) {
                window.alert(e);    //  If found the clashing timeslot, then alert the user. Don't change state
                return state;
            }
            const flattenedVirtualTimetable = timeFlattener( virtualTimetable );

            return Object.assign({}, state, { timetableRenderData: flattenedVirtualTimetable, isPreviewOpen: true } );
        }

        case ActionTypes.CLOSE_PREVIEW: {
            return Object.assign({}, state, { isPreviewOpen: false} );
        }

        //======================    SETTING ACTIONS     ==============================

        case ActionTypes.OPEN_SETTING: {
            return Object.assign({}, state, { isSettingOpen: true} );
        }

        case ActionTypes.CLOSE_SETTING: {
            return Object.assign({}, state, { isSettingOpen: false} );
        }

        case ActionTypes.CHANGE_SETTING: {
            const eventTarget = action.payload.settingEvent.target;
            const settings = Object.assign({}, state.settings);
            switch( eventTarget.id ) {
                case 'theme':
                    settings.theme = eventTarget.value;
                    break;
                case 'courseName-fontsize':
                    settings.courseNameFontSize = Math.min( 70, Math.max(eventTarget.value, 0) );
                    break;
                case 'lecturerName-fontsize':
                    settings.lecturerNameFontSize = Math.min( 70, Math.max(eventTarget.value, 0) );
                    break;
                case 'courseCode-fontsize':
                    settings.courseCodeFontSize = Math.min( 70, Math.max(eventTarget.value, 0) );
                    break;
                case 'noOfSessions':
                    settings.noOfSessions = eventTarget.value;
                    break;
                case 'gridWidth':
                    settings.gridWidth = Math.min( 400, Math.max(eventTarget.value, 0) );
                    break;
                case 'gridHeight':
                    settings.gridHeight = Math.min( 400, Math.max(eventTarget.value, 0) );
                    break;
                default:
                    return state;
            }
            return Object.assign({}, state, { settings });
        }

        case ActionTypes.SAVE_SETTING: {
            try {
                window.localStorage.setItem("nextCourseID", state.nextCourseID);
                window.localStorage.setItem("courseItems", JSON.stringify(state.courseItems) );
                window.localStorage.setItem("courseTimeItems", JSON.stringify(state.courseTimeItems) );
                window.localStorage.setItem("settings", JSON.stringify(state.settings) );
                
                window.alert("Course Informations and Settings Saved To Local Storage!");
            } catch {
                window.alert("Unable to save to local Storage");
            }
            return state;
        }

        case ActionTypes.LOAD_SETTING: {
            try {
                const nextCourseID = window.localStorage.getItem('nextCourseID');
                const courseItems = JSON.parse( window.localStorage.getItem('courseItems') );
                const courseTimeItems = JSON.parse( window.localStorage.getItem("courseTimeItems") );
                const settings = JSON.parse( window.localStorage.getItem("settings") );

                if (!nextCourseID || !courseItems || !courseTimeItems || !settings ) throw Error;

                window.alert("Successfully loaded saved state from local storage");
                
                return Object.assign({}, state, { nextCourseID, courseItems, courseTimeItems, settings} );
            } catch {
                window.alert("Unable to load from local Storage");
            }
            return state;
        }

        case ActionTypes.DEL_SETTING: {
            window.localStorage.removeItem('nextCourseID');
            window.localStorage.removeItem('courseItems');
            window.localStorage.removeItem('courseTimeItems');
            window.localStorage.removeItem('settings');

            window.alert('Successfully cleared saved state from local storage!');
            return state;
        }

        default:
            return state;
    }

}



/* ===============================
    Creates an Empty Course
================================ */
const courseFactory = ( nextID ) => {
    return {
        courseID: nextID ++,
        courseName: '',
        lecturerName: '',
        courseCode: ''
    };
};


export default timetableReducer;
