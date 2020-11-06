import React from 'react';
import PropTypes from 'prop-types';


function SettingNoSessions(props) {
    const { noOfSessions, changeSetting } = props;
    return (
        <div className='settings__category settings__noSessions'>
            <h4 className='settings__category__title'>Number of Sessions</h4>
            <select className='settings__noSessions__select' id='noOfSessions' value={ noOfSessions } 
                onChange={ changeSetting } title='How many column will exist in your timetable'>
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
            </select>
        </div>
    )
}

SettingNoSessions.propTypes = {
    noOfSessions: PropTypes.number.isRequired,
    
    changeSetting: PropTypes.func.isRequired
}


export default SettingNoSessions;