
/* =========================================================================================================
    This function, taking in the courseItems and courseTimeItems for each course, will check for clashing
    time slots.
    This is done by a 2D array (virtual Timetable) which has 5 rows, and 11 column each. It iterates through the 
    time slots, and will put the courses in the respective slots in the 2D array.
    If the slot is already occupied when trying to insert the course, that means a clash had occurred

    If clashing occurs, will throw exception.

    Otherwise, at end of the function, the 2D array (virtual timetable) will be returned for flattening
 ========================================================================================================= */
export default function clashChecker(courseItems, courseTimeItems) {
    const virtualTimetable = [ [], [], [], [], [] ];

    //  Loop through each timeItems in each courseItems. Put the courseItem into the virtualTimeTable in the
    //  correct slot. If there already exists a item before inserting, a timetable clash occurred.
    for (let courseIndex in courseItems ) {
        const courseObject = courseItems[ courseIndex ];
        const courseTimes = courseTimeItems[ courseIndex ];

        for (let timeIndex in courseTimes) {
            if (timeIndex === 'nextTimeID') continue;       //  Skip the nextID key
            
            const row = parseInt( courseTimes[timeIndex].dayOfWeek );    //Convert day of week to index
            const col = parseInt( courseTimes[timeIndex].session );        //Convert session to index

            const slot = virtualTimetable[row][col];

            //  Clash occurred. Throw an error with information of clashing course and time slot
            if ( slot !== undefined ) {
                const err = new Error();
                err.course1 = slot;
                err.course2 = courseObject;
                err.row = row;
                err.col = col;
                throw err;
            }

            virtualTimetable[row][col] = courseObject;
        }
    }
    return virtualTimetable;            //  Upon validated, return the virtualTimetable 2D array for flattening
}