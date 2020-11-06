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
    },

    saveSetting: function() {
        return {
            type: ActionTypes.SAVE_SETTING
        }
    },

    loadSetting: function() {
        return {
            type: ActionTypes.LOAD_SETTING
        }
    },

    delSetting: function() {
        return {
            type: ActionTypes.DEL_SETTING
        }
    }

};


export default SettingActions;


