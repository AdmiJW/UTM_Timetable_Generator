
import React from 'react';
import PropTypes from 'prop-types';

function SettingGeneral( props ) {
    return (
        <div className='settings__category settings__general'>
            <h4 className='settings__category__title'>General</h4>

            <div className='settings__general__wrapper'>
                <div className='settings__general__theme'>
                    <p className='settings__general__subtitle'>
                        <span role='img' aria-label='color palette logo'>🎨</span>
                            Theme 
                        <span role='img' aria-label='color palette logo'>🎨</span>
                    </p>
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
                    <p className='settings__general__subtitle'>
                        <span role='img' aria-label='calendar logo'>📅</span> 
                        Weekend 
                        <span role='img' aria-label='calendar logo'>📅</span> 
                        </p>
                    <select className='settings__general__select' value={ props.isIslamicWeekend? 0: 1 } id='weekend'
                            onChange={ props.changeSetting } title='Select the 2 weekends according to your Malaysia State' >
                        <option value='0'>Friday / Saturday</option>
                        <option value='1'>Saturday / Sunday</option>
                    </select>
                </div>
            </div>

            <div className='settings__general__wrapper'>
                <div className='settings__general__columns'>
                    <h4 className='settings__general__subtitle'>No. of Columns</h4>
                    <select className='settings__noSessions__select' id='noOfSessions' value={ props.noOfSessions } 
                        onChange={ props.changeSetting } title='How many column will exist in your timetable'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                    </select>
                </div>
            </div>
            
        </div>
    );
}

SettingGeneral.propTypes = {
    theme: PropTypes.string.isRequired,
    isIslamicWeekend: PropTypes.bool.isRequired,
    noOfSessions: PropTypes.number.isRequired,
    
    changeSetting: PropTypes.func.isRequired
}

export default SettingGeneral;