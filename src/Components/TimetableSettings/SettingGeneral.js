
import React from 'react';
import PropTypes from 'prop-types';

function SettingGeneral( props ) {
    return (
        <div className='settings__category settings__general'>
            <h4 className='settings__category__title'>General</h4>

            <div className='settings__general__wrapper'>
                <div className='settings__general__theme'>
                    <p className='settings__general__subtitle'>Theme</p>
                    <select className='settings__general__select' value={ props.theme } id='theme'
                            onChange={ props.changeSetting } title='Preset color theme for your timetable' >
                        <option value='default'>Default</option>
                        <option value='futuristic'>Futuristic</option>
                        <option value='cuteness'>Cuteness</option>
                        <option value='spiderman'>Spiderman</option>
                        <option value='nature'>Nature</option>
                    </select>
                </div>

                <div className='settings__general__weekend'>
                    <p className='settings__general__subtitle'>Weekend</p>
                    <select className='settings__general__select' value={ props.isIslamicWeekend? 0: 1 } id='weekend'
                            onChange={ props.changeSetting } title='Select the 2 weekends according to your Malaysia State' >
                        <option value='0'>Friday / Saturday</option>
                        <option value='1'>Saturday / Sunday</option>
                    </select>
                </div>
            </div>
            
        </div>
    );
}

SettingGeneral.propTypes = {
    theme: PropTypes.string.isRequired,
    isIslamicWeekend: PropTypes.bool.isRequired,
    
    changeSetting: PropTypes.func.isRequired
}

export default SettingGeneral;