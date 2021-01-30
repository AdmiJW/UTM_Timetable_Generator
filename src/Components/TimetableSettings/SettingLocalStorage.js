import React from 'react';


function SettingLocalStorage(props) {
    return (
        <div className='settings__category settings__savedel'>
            <h4 className='settings__category__title'>
                <span role='img' aria-label='disk logo'>💾</span> 
                Manage Timetable 
                <span role='img' aria-label='disk logo'>💾</span>
            </h4>
            <div className='settings__savedel__wrapper'>

                <div className='settings__savedel__div'>
                    <label htmlFor='save_timetable'>Save</label>
                    <button className='settings__savedel__btn' onClick={ props.saveSetting }
                        title='Save Timetable' >
                        <i className="fas fa-save"></i>
                    </button>
                </div>
                <div className='settings__savedel__div'>
                    <label htmlFor='load_timetable'>Load</label>
                    <button className='settings__savedel__btn' onClick={ props.loadSetting }
                        title='Load Timetable' >
                        <i className="fas fa-upload"></i>
                    </button>
                </div>
                <div className='settings__savedel__div'>
                    <label htmlFor='delete_timetable'>Delete</label>
                    <button className='settings__savedel__btn' onClick={ props.delSetting }
                        title='Clear Timetable' >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default SettingLocalStorage;