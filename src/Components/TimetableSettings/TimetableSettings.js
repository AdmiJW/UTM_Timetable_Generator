import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//  Action Creators
import SettingActions from '../../Redux/Actions/SettingActions';

//  Theme properties Deriver, to render preview
import { themeDeriver } from '../../LogicUtils/TimetableConfigDeriver';

//  Setting Components
import SettingLocalStorage from './SettingLocalStorage';
import SettingGeneral from './SettingGeneral';
import SettingGridProps from './SettingGridProps';


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
        const { gridWidth, gridHeight, noOfSessions } = this.props.settings;

        //=================================== JSX ==========================================
        return (
            <div className={`settings ${this.props.isSettingOpen? '':'hidden'}`} id='settings'
                ref={ this.settingHTML } >

                    <button type='button' className='settings__closebtn' id='settings__closebtn'
                         onClick={ this.closeSettingButtonHandler }>
                        <i className="fas fa-times"></i>
                    </button>
                
                <h3 className='settings__title'>
                    <span role='img' aria-label='spanner logo'>🛠️</span> 
                    Settings
                    <span role='img' aria-label='spanner logo'>🛠️</span> 
                </h3>
                
                <p className='settings__version'>Version: v {this.props.version}</p>

                <p className='settings__sizeEstimateMsg'>
                    Your timetable should be of size:<br/>
                    <span className='settings__sizeEstimateMsg__value'>{`${gridWidth * (Number(noOfSessions) + 1)}px `}</span> 
                    x 
                    <span className='settings__sizeEstimateMsg__value'>{` ${gridHeight * 6}px`}</span>
                </p>
                
                <div className='settings__wrapper'>
                    <SettingLocalStorage saveSetting={ this.props.saveSetting } loadSetting={ this.props.loadSetting}
                        delSetting={ this.props.delSetting } />

                    <SettingGeneral theme={ this.props.settings.theme} isIslamicWeekend={ this.props.settings.isIslamicWeekend } 
                        noOfSessions={ this.props.settings.noOfSessions } changeSetting={ this.props.changeSetting } />

                    <SettingGridProps settings={this.props.settings} renderProp={ this.state.renderProperties }
                        changeSetting={ this.props.changeSetting } />
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
    version: PropTypes.string.isRequired,
    isSettingOpen: PropTypes.bool.isRequired,
    settings: PropTypes.object.isRequired,

    closeSetting: PropTypes.func.isRequired,
    changeSetting: PropTypes.func.isRequired,

    saveSetting: PropTypes.func.isRequired,
    loadSetting: PropTypes.func.isRequired,
    delSetting: PropTypes.func.isRequired,
}

function mapStateToProps( store ) {
    return {
        version: store.version,
        isSettingOpen: store.isSettingOpen,
        settings: store.settings
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        closeSetting: () => dispatch( SettingActions.closeSetting() ),
        changeSetting: (event) => dispatch( SettingActions.changeSetting(event) ),

        saveSetting: () => dispatch( SettingActions.saveSetting() ),
        loadSetting: () => dispatch( SettingActions.loadSetting() ),
        delSetting: () => dispatch( SettingActions.delSetting() ),
    };
}


export default connect( mapStateToProps, mapDispatchToProps)(TimetableSettings);