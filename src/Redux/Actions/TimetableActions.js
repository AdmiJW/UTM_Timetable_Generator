import ActionTypes from './ActionTypes';


const TimetableActions = {

    viewTimetable: function() {
        return {
            type: ActionTypes.VIEW_TIMETABLE
        };
    },

    closePreview: function() {
        return {
            type: ActionTypes.CLOSE_PREVIEW
        };
    }

};

export default TimetableActions;