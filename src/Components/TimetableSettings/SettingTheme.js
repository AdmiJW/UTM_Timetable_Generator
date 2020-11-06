
import React from 'react';
import PropTypes from 'prop-types';

function SettingTheme( props ) {
    return (
        <div className='settings__category settings__theme'>
            <h4 className='settings__category__title'>Timetable Theme</h4>

            <div className='settings__theme__wrapper'>
                <select className='settings__theme__select' value={ props.theme } id='theme'
                        onChange={ props.changeSetting } title='Preset color theme for your timetable' >
                    <option value='default'>Default</option>
                    <option value='futuristic'>Futuristic</option>
                    <option value='cuteness'>Cuteness</option>
                    <option value='spiderman'>Spiderman</option>
                    <option value='nature'>Nature</option>
                </select>
            </div>
            
        </div>
    );
}

SettingTheme.propTypes = {
    theme: PropTypes.string.isRequired,
    
    changeSetting: PropTypes.func.isRequired
}

export default SettingTheme;