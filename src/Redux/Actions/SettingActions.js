import ActionTypes from './ActionTypes';

const SettingActions = {

    openSetting: function() {
        return {
            type: ActionTypes.OPEN_SETTING
        };
    },

    closeSetting: function() {
        return {
            type: ActionTypes.CLOSE_SETTING
        };
    },

    changeSetting: function( settingEvent ) {
        return {
            type: ActionTypes.CHANGE_SETTING,
            payload: {
                settingEvent
            }
        };
    }

};


export default SettingActions;


