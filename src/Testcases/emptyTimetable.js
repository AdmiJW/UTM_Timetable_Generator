const emptyTimetable = {
    isPreviewOpen: false,
    isSettingOpen: false,

    nextCourseID: 0,

    courseItems: {},

    courseTimeItems: {},

    timetableRenderData: null,

    settings: {
        theme: 'default',
        isIslamicWeekend: true,

        courseNameFontSize: 25, 
        lecturerNameFontSize: 15,
        courseCodeFontSize: 13,

        gridWidth: 200,
        gridHeight: 150,

        noOfSessions: 11
    }
}

export default emptyTimetable;