const defaultTimetable = {
    isPreviewOpen: false,
    isSettingOpen: false,

    nextCourseID: 1,

    courseItems: {
        '0': {
        courseID: 0,
        courseName: 'Enter Course Name',
        lecturerName: 'Enter Lecturer Name',
        courseCode: 'Enter Course Code'
        }
    },

    courseTimeItems: {
        '0': {
            '0': {
                timeID: 0,
                dayOfWeek: 'Sun',
                session: '02'
            },
            nextTimeID: 1
        }
    },

    timetableRenderData: null,

    settings: {
        theme: 'default',

        courseNameFontSize: 25, 
        lecturerNameFontSize: 15,
        courseCodeFontSize: 13,

        gridWidth: 200,
        gridHeight: 150,

        noOfSessions: 11
    }
}

export default defaultTimetable;