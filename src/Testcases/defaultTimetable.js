const defaultTimetable = {
    nextCourseID: 1,

    courseItems: {
        '0': {
        courseID: 0,
        courseName: 'Input Course Name',
        lecturerName: 'Input Lecturer Name',
        courseCode: 'Input Course Code'
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

    timetableRenderData: {
        isPreviewOpen: false,
        renderData: null
    }
}

export default defaultTimetable;