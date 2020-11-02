import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//  Just a blocker, which greys out the background and block input when either
//  Settings div or Preview div is open
function Blocker(props) {
    return (
        <div className={`blocker ${ props.isBlocking? 'blocking':''}`} />
    )
}


/* =================================================
    Proptypes, MapStateToProps, MapDispatchToProps
==================================================== */
Blocker.propTypes = {
    isBlocking: PropTypes.bool.isRequired
}

function mapStateToProps( store ) {
    return {
        isBlocking: store.isPreviewOpen || store.isSettingOpen
    };
}

export default connect(mapStateToProps, null)(Blocker);