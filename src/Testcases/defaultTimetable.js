const defaultTimetable = {
    version: '1.1.0',

    isPreviewOpen: false,
    isSettingOpen: false,

    nextCourseID: 1,

    courseItems: {
        '0': {
        courseID: 0,
        courseName: 'Course Name',
        lecturerName: 'Lecturer Name',
        courseCode: 'Course Code'
        }
    },

    courseTimeItems: {
        '0': {
            '0': {
                timeID: 0,
                dayOfWeek: 0,
                session: 0
            },
            nextTimeID: 1
        }
    },

    timetableRenderData: null,

    settings: {
        theme: 'default',
        isIslamicWeekend: true,

        courseNameFontSize: 25, 
        lecturerNameFontSize: 15,
        courseCodeFontSize: 13,

        gridWidth: 200,
        gridHeight: 150,

        noOfSessions: 12
    }
}

export default defaultTimetable;