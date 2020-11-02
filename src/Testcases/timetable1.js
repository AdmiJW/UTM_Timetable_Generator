const timetable1 = 
{

    nextCourseID: 7,

    isPreviewOpen: false,
    isSettingOpen: false,

    courseItems: {
        '0': {
        courseID: 0,
        courseName: 'Discrete Structure',
        lecturerName: 'Dr. Nor Azizah binti Ali',
        courseCode: 'SECI1013'
        },
        '1': {
        courseID: 1,
        courseName: 'Programming Technique I',
        lecturerName: 'Dr. Adila Firdaus binti Arbain',
        courseCode: 'SECJ1013'
        },
        '2': {
        courseID: 2,
        courseName: 'Digital Logic',
        lecturerName: 'Mr. Firoz bin Yusuf Patel Dawoodi',
        courseCode: 'SECR1013'
        },
        '3': {
        courseID: 3,
        courseName: 'Technology & Information System',
        lecturerName: 'Dr. Haswadi bin Hassan',
        courseCode: 'SECP1513'
        },
        '4': {
        courseID: 4,
        courseName: 'Philosophy and Current Issues',
        lecturerName: 'Dr. Nurazmalail bin Marni',
        courseCode: 'UHIS1022'
        },
        '5': {
        courseID: 5,
        courseName: 'Appreciation of Ethics and Civilisations',
        lecturerName: 'Mr. Husain Mahmood',
        courseCode: 'UHMS1182'
        },
        '6': {
        courseID: 6,
        courseName: 'Graduate Success Attributes',
        lecturerName: 'Dr. Mohamad Razib bin Othman',
        courseCode: 'UHMT1012'
        }
    },
    courseTimeItems: {
        '0': {
            '0': {
                timeID: 0,
                dayOfWeek: 'Sun',
                session: '08'
            },
            '1': {
                timeID: 1,
                dayOfWeek: 'Sun',
                session: '09'
            },
            '2': {
                timeID: 2,
                dayOfWeek: 'Wed',
                session: '03'
            },
            nextTimeID: 3
        },
        '1': {
            '0': {
                timeID: 0,
                dayOfWeek: 'Mon',
                session: '05'
            },
            '1': {
                timeID: 1,
                dayOfWeek: 'Mon',
                session: '06'
            },
            '2': {
                timeID: 2,
                dayOfWeek: 'Thu',
                session: '05'
            },
            '3': {
                timeID: 3,
                dayOfWeek: 'Thu',
                session: '06'
            },
            nextTimeID: 4
        },
        '2': {
            '0': {
                timeID: 0,
                dayOfWeek: 'Mon',
                session: '08'
            },
            '1': {
                timeID: 1,
                dayOfWeek: 'Mon',
                session: '09'
            },
            '2': {
                timeID: 2,
                dayOfWeek: 'Wed',
                session: '08'
            },
            '3': {
                timeID: 3,
                dayOfWeek: 'Wed',
                session: '09'
            },
            nextTimeID: 4
        },
        '3': {
            '0': {
                timeID: 0,
                dayOfWeek: 'Tue',
                session: '02'
            },
            '1': {
                timeID: 1,
                dayOfWeek: 'Tue',
                session: '03'
            },
            '2': {
                timeID: 2,
                dayOfWeek: 'Tue',
                session: '04'
            },
            nextTimeID: 3
        },
        '4': {
            '0': {
                timeID: 0,
                dayOfWeek: 'Thu',
                session: '02'
            },
            '1': {
                timeID: 1,
                dayOfWeek: 'Thu',
                session: '03'
            },
            nextTimeID: 2
        },
        '5': {
            '0': {
                timeID: 0,
                dayOfWeek: 'Tue',
                session: '05'
            },
            '1': {
                timeID: 1,
                dayOfWeek: 'Tue',
                session: '06'
            },
            nextTimeID: 2
        },
        '6': {
            '0': {
                timeID: 0,
                dayOfWeek: 'Thu',
                session: '08'
            },
            '1': {
                timeID: 1,
                dayOfWeek: 'Thu',
                session: '09'
            },
            nextTimeID: 2
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
};

export default timetable1;