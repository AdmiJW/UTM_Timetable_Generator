
import ActionTypes from '../Actions/ActionTypes';

//  Timetable Validator and Flattener
import clashChecker from '../../LogicUtils/ClashChecker';
import timeFlattener from '../../LogicUtils/TimeFlattener';

//  Testcases
import timetable1 from '../../Testcases/timetable1';
import emptyTimetable from '../../Testcases/emptyTimetable';


/* ==================================================================================================================
The state basically looks like this:

courseItems - An object, which the key is the courseID, mapping to another object representing the course itself.
              The course object contains the following:
              {
                  courseID:                     the ID of itself
                  courseName:                   the name of the course
                  lecturerName:                 the name of the lecturer
                  courseCode:                   the code of the course
              }

courseTimeItems - Shall be in sync with the courseItems. It is also an object mapping from courseID to another object
                  representing the course times. The course times object maps from timeID to object of individual time
                  which contains the following:
                  {
                      timeID:                   the ID of this time in this course
                      dayOfWeek:                the day of week of this course
                      session:                  the session in which the course is held
                  }
================================================================================================================= */



//==============================
//  Initial State
//==============================
const initialState = timetable1;




function timetableReducer(state = initialState, action ) {
    let { courseItems, courseTimeItems } = state;

    switch (action.type) {
        
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
            const timetableRenderData = {
                isPreviewOpen: true,
                renderData: flattenedVirtualTimetable
            };

            return Object.assign({}, state, { timetableRenderData } );
        }

        case ActionTypes.CLOSE_PREVIEW: {
            const timetableRenderData = Object.assign({}, state.timetableRenderData);
            timetableRenderData.isPreviewOpen = false;

            return Object.assign({}, state, { timetableRenderData} );
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
