import React from 'react';
import PropTypes from 'prop-types';

function SettingGridProps(props) {
    const { courseNameFontSize, lecturerNameFontSize, courseCodeFontSize, gridWidth, gridHeight, } = props.settings;
    const { renderProp, changeSetting } = props;

    return (
        <div className='settings__category settings__gridProps'>
            <h4 className='settings__category__title'>
                <span role='img' aria-label='ruler logo'>📏</span> 
                Grid Properties
                <span role='img' aria-label='ruler logo'>📏</span> 
            </h4>

            <div className='settings__gridProps__wrapper'>
                <div className='settings__gridProps__inputGroup'>
                    <label htmlFor='gridWidth'>Grid Width</label>
                    <input type='number' id='gridWidth' value={ gridWidth } min='0' max='400'
                        onChange={ changeSetting } />
                </div>
                <div className='settings__gridProps__inputGroup'>
                    <label htmlFor='gridHeight'>Grid Height</label>
                    <input type='number' id='gridHeight' value={ gridHeight } min='0' max='400'
                        onChange={ changeSetting } />
                </div>
            </div>

            <div className='settings__gridProps__wrapper'>
                <div className='settings__gridProps__inputGroup'>
                    <label htmlFor='courseName-fontsize'>Course Name Font size</label>
                    <input type='number' id='courseName-fontsize' value={ courseNameFontSize } min='0' max='70'
                        onChange={ changeSetting } />
                </div>
                <div className='settings__gridProps__inputGroup'>
                    <label htmlFor='lecturerName-fontsize'>Lecturer Name Font size</label>
                    <input type='number' id='lecturerName-fontsize' value={ lecturerNameFontSize } min='0' max='70'
                        onChange={ changeSetting } />
                </div>
                <div className='settings__gridProps__inputGroup'>
                    <label htmlFor='courseCode-fontsize'>Course Code Font size</label>
                    <input type='number' id='courseCode-fontsize' value={ courseCodeFontSize } min='0' max='70'
                        onChange={ changeSetting } />
                </div>
            </div>

            <h4 className='settings__category__title'>Example Grid</h4>

            <div style={ {
                fontFamily: renderProp.fontFamily,
                backgroundColor: renderProp.sideColorBG,
                color: renderProp.labelFontColor,
                border: `solid 4px ${renderProp.baseBG}`,
                width: gridWidth, 
                height: gridHeight
                } } 
                className='settings__gridProps__preview'>
                <p style={ {fontSize: courseNameFontSize} }>Engineering Basics</p>
                <p style={ {fontSize: lecturerNameFontSize} }>Dr. Ali bin Ahmed</p>
                <p style={ {fontSize: courseCodeFontSize} }>AC20142</p>
            </div>
        </div>
    )
}

SettingGridProps.propTypes = {
    settings: PropTypes.object.isRequired,
    renderProp: PropTypes.object.isRequired,
    
    changeSetting: PropTypes.func.isRequired
}

export default SettingGridProps;