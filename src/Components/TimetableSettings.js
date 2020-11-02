import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//  Action Creators
import SettingActions from '../Redux/Actions/SettingActions';

//  Theme properties Deriver, to render preview
import { themeDeriver } from '../LogicUtils/TimetableConfigDeriver';


class TimetableSettings extends React.PureComponent {
    constructor(props) {
        super(props);

        this.settingHTML = React.createRef();

        this.closeSettingButtonHandler = this.closeSettingButtonHandler.bind(this);
    }


    //  The state will store the theme information to render the preview (color, fontfamily...)
    state = {
        renderProperties: themeDeriver[ this.props.settings.theme ]
    }

    //  Upon settings changed, update the theme informations so the preview can also be updated
    static getDerivedStateFromProps( newProps, prevState ) {
        if ( newProps.settings.theme === prevState.renderProperties.name ) return prevState;
        return Object.assign({}, prevState, { renderProperties: themeDeriver[ newProps.settings.theme] } );
    }


    //  Allow the div to undergo animation first, then only we close the div entirely
    closeSettingButtonHandler() {
        this.settingHTML.current.classList.add('transitionOut');

        setTimeout(() => {
            this.settingHTML.current.classList.remove('transitionOut');
            this.props.closeSetting();
        }, 800);
    }




    render() {
        const { theme, courseNameFontSize, lecturerNameFontSize, courseCodeFontSize, gridWidth, gridHeight, 
            noOfSessions } = this.props.settings;
        const { renderProperties: renderProp } = this.state;

        //=================================== JSX ==========================================
        return (
            <div className={`settings ${this.props.isSettingOpen? '':'hidden'}`} id='settings'
                ref={ this.settingHTML } >

                    <button type='button' className='settings__closebtn' id='settings__closebtn'
                         onClick={ this.closeSettingButtonHandler }>
                        <i className="fas fa-times"></i>
                    </button>
                
                <h3 className='settings__title'>Settings</h3>

                <p className='settings__sizeEstimateMsg'>
                    Your timetable should be of size:<br/>
                    <span className='settings__sizeEstimateMsg__value'>{`${gridWidth * (Number(noOfSessions) + 1)}px `}</span> 
                    x 
                    <span className='settings__sizeEstimateMsg__value'>{` ${gridHeight * 6}px`}</span>
                </p>
                
                <div className='settings__wrapper'>
                    <div className='settings__category settings__theme'>
                        <h4 className='settings__category__title'>Timetable Theme</h4>

                        <div className='settings__theme__wrapper'>
                            <select className='settings__theme__select' value={theme} id='theme'
                                 onChange={ this.props.changeSetting } >
                                <option value='default'>Default</option>
                                <option value='futuristic'>Futuristic</option>
                                <option value='cuteness'>Cuteness</option>
                                <option value='spiderman'>Spiderman</option>
                                <option value='nature'>Nature</option>
                            </select>
                        </div>
                        
                    </div>

                    <div className='settings__category settings__gridProps'>
                        <h4 className='settings__category__title'>Grid Properties</h4>

                        <div className='settings__gridProps__wrapper'>
                            <div className='settings__gridProps__inputGroup'>
                                <label htmlFor='gridWidth'>Grid Width</label>
                                <input type='number' id='gridWidth' value={ gridWidth } min='0' max='400'
                                    onChange={ this.props.changeSetting } />
                            </div>
                            <div className='settings__gridProps__inputGroup'>
                                <label htmlFor='gridHeight'>Grid Height</label>
                                <input type='number' id='gridHeight' value={ gridHeight } min='0' max='400'
                                    onChange={ this.props.changeSetting } />
                            </div>
                        </div>

                        <div className='settings__gridProps__wrapper'>
                            <div className='settings__gridProps__inputGroup'>
                                <label htmlFor='courseName-fontsize'>Course Name Font size</label>
                                <input type='number' id='courseName-fontsize' value={ courseNameFontSize } min='0' max='70'
                                    onChange={ this.props.changeSetting } />
                            </div>
                            <div className='settings__gridProps__inputGroup'>
                                <label htmlFor='lecturerName-fontsize'>Lecturer Name Font size</label>
                                <input type='number' id='lecturerName-fontsize' value={ lecturerNameFontSize } min='0' max='70'
                                    onChange={ this.props.changeSetting } />
                            </div>
                            <div className='settings__gridProps__inputGroup'>
                                <label htmlFor='courseCode-fontsize'>Course Code Font size</label>
                                <input type='number' id='courseCode-fontsize' value={ courseCodeFontSize } min='0' max='70'
                                    onChange={ this.props.changeSetting } />
                            </div>
                        </div>

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

                    <div className='settings__category settings__noSessions'>
                        <h4 className='settings__category__title'>Number of Sessions<br/>(Start from 02)</h4>
                        <select className='settings__noSessions__select' id='noOfSessions' value={ noOfSessions } 
                            onChange={ this.props.changeSetting }>
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
                </div>
            </div>
        );
        //=================================== JSX ==========================================
    }

}





/* =================================================
    Proptypes, MapStateToProps, MapDispatchToProps
==================================================== */
TimetableSettings.propTypes = {
    isSettingOpen: PropTypes.bool.isRequired,
    settings: PropTypes.object.isRequired,

    closeSetting: PropTypes.func.isRequired,
    changeSetting: PropTypes.func.isRequired
}

function mapStateToProps( store ) {
    return {
        isSettingOpen: store.isSettingOpen,
        settings: store.settings
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        closeSetting: () => dispatch( SettingActions.closeSetting() ),
        changeSetting: (event) => dispatch( SettingActions.changeSetting(event) )
    };
}


export default connect( mapStateToProps, mapDispatchToProps)(TimetableSettings);