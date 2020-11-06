import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Other React Components
import CourseContainer from './CourseList/CourseContainer.js'
import TimetablePreviewer from './TimetablePreviewer';
import TimetableSettings from './TimetableSettings/TimetableSettings';
import Blocker from './Blocker';

//  Redux ActionCreators
import SettingActions from '../Redux/Actions/SettingActions';


class MainDiv extends React.Component {

    render() {
        //=================================== JSX ==========================================
        return (
            <div className='container' id='container'>
                <header className='header' id='header'>
                    <img className='header__logo' id='header__logo' 
                        src='https://upload.wikimedia.org/wikipedia/commons/8/81/UTM-LOGO.png' alt='Logo of UTM'/>
                    <h1 className='header__title' id='header__title'>UTM Timetable Generator</h1>
                    <button className='header__setting' id='header__setting' type='button'
                        onClick={ this.props.openSetting } >
                        <i className="fas fa-cog header__setting__cog1"></i>
                        <i className="fas fa-cog header__setting__cog2"></i>
                    </button>
                </header>

                <Blocker />

                <CourseContainer />

                <TimetablePreviewer />

                <TimetableSettings />

                <footer className='footer' id='footer'>
                    <a href='https://github.com/AdmiJW/UTM_Timetable_Generator/issues' target='_blank' rel='noopener noreferrer'
                        className='footer__support' id='footer__support'>
                        <h3 className='footer__support__text'>Support</h3>
                        <img className='footer__support__logo' src='https://icons-for-free.com/iconfiles/png/512/github+hub+icon+icon-1320194641335079152.png'
                            alt='github logo'/>
                    </a>
                    <p className='footer__desc'>An open source project</p>
                </footer>
            </div>
        );
        //=================================== JSX ==========================================
    }

}


/* =================================================
    Proptypes, MapStateToProps, MapDispatchToProps
==================================================== */
MainDiv.propTypes = {
    openSetting: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
        openSetting: () => dispatch( SettingActions.openSetting() )
    };
}

export default connect(null, mapDispatchToProps)(MainDiv);