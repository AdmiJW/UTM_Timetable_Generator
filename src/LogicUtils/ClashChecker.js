import Converters from './Converters';



export default function clashChecker(courseItems, courseTimeItems) {
    const virtualTimetable = [ [], [], [], [], [] ];
    const { dayOfWeekIndexConverter, sessionIndexConverter } = Converters;

    //  Loop through each timeItems in each courseItems. Put the courseItem into the virtualTimeTable in the
    //  correct slot. If there already exists a item before inserting, a timetable clash occurred.
    for (let courseIndex in courseItems ) {
        const courseObject = courseItems[ courseIndex ];
        const courseTimes = courseTimeItems[ courseIndex ];

        for (let timeIndex in courseTimes) {
            if (timeIndex === 'nextTimeID') continue;

            const row = dayOfWeekIndexConverter( courseTimes[timeIndex].dayOfWeek );
            const col = sessionIndexConverter( courseTimes[timeIndex].session );

            const slot = virtualTimetable[row][col];

            //  Clash occurred
            if ( slot !== undefined ) {
                throw 'Clashing Timetable Detected!\nThe course:\n\n' +
                `${slot.courseName}, ${slot.lecturerName}, ${slot.courseCode}\n\n` +
                'Clashes with:\n\n' +
                `${courseObject.courseName}, ${courseObject.lecturerName}, ${courseObject.courseCode}\n\n` +
                'At timeslot:\n' +
                `   ${dayOfWeekIndexConverter(row, true)}, ${sessionIndexConverter(col, true)}`;
            }

            virtualTimetable[row][col] = courseObject;
        }
    }
    return virtualTimetable;            //  Upon validated, return the virtualTimetable 2D array for flattening

}