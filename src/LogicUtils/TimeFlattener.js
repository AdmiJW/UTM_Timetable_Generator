
/* =================================================================================================================
Basically takes in the virtual timetable (2D array timetable, each grid may or may not contain a Course JSON Object),
flatten them into one single array of JSON object consisting of information of courses, such that
    >   Neighboring same courses are combined into one entity
    >   No more 2D array. Its 1D array consisting of objects which contains information
        -   dayOfWeek
        -   starting session
        -   ending session
        -   courseObject (Contains courseName, lecturerName, courseCode)
================================================================================================================= */

function timeFlattener ( virtualTimetable ) {

    const rowLen = virtualTimetable.length;
    const colLen = virtualTimetable.reduce( (max, curr) => Math.max(curr.length, max), 0 );

    const resultingArr = [];

    for (let row = 0; row < rowLen; row ++ ) {
        let col = 0;
        while (col < colLen) {

            //  A course is present in the current position. Create a timetableEntry object specifically for it,
            //  and keep checking if the next grid is also same course. If yes, then extend it.
            if (virtualTimetable[row][col] !== undefined ) {
                const timetableEntry = {
                    dayOfWeek: row,
                    startingSession: col,
                    endingSession: col,
                    courseObj: virtualTimetable[row][col]
                };
                //  Check for next grid if it is same
                while ( col + 1 < colLen && virtualTimetable[row][col + 1] === timetableEntry.courseObj ) {
                    col ++;
                    timetableEntry.endingSession = col;
                }
                resultingArr.push(timetableEntry);
            }
            col++;
        }
    }

    return resultingArr;
}


export default timeFlattener;