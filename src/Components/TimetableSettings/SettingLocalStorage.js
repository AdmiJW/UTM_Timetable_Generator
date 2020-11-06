import React from 'react';


function SettingLocalStorage(props) {
    return (
        <div className='settings__category settings__savedel'>
            <h4 className='settings__category__title'>Save / Load / Clear Local Storage</h4>
            <div className='settings__savedel__wrapper'>
                <button className='settings__savedel__btn' onClick={ props.saveSetting }
                    title='Save State' >
                    <i className="fas fa-save"></i>
                </button>
                <button className='settings__savedel__btn' onClick={ props.loadSetting }
                    title='Load State' >
                    <i className="fas fa-upload"></i>
                </button>
                <button className='settings__savedel__btn' onClick={ props.delSetting }
                    title='Clear State' >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default SettingLocalStorage;