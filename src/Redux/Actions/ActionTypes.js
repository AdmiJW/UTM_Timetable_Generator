const ActionTypes = {

    ADD_COURSE : 'ADD_COURSE',                  //  Add a new empty course item to the courses list
    DELETE_COURSE : 'DELETE_COURSE',            //  Delete a course item from the courses list
    CHANGE_COURSE_INFO : 'CHANGE_COURSE_INFO',  //  Change the course info (course Name / lecturer Name/ course Code)
    
    ADD_TIME : 'ADD_TIME',                      //  Add a new course time item to the course item
    DELETE_TIME : 'DELETE_TIME',                //  Delete a course time item from the courses list
    CHANGE_TIME_INFO : 'CHANGE_TIME_INFO',      //  CHange the time info (dayOfWeek / time session)

    VIEW_TIMETABLE: 'VIEW_TIMETABLE',           //  Opens the timetable preview window
    CLOSE_PREVIEW: 'CLOSE_PREVIEW',             //  Closes the timetable preview window

    OPEN_SETTING: 'OPEN_SETTING',               //  Opens the settings window
    CLOSE_SETTING: 'CLOSE_SETTING',             //  Closes the settings window
    CHANGE_SETTING: 'CHANGE_SETTING',           //  Change the settings
}

export default ActionTypes;