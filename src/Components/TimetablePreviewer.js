import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//  Action Creators
import TimetableActions from '../Redux/Actions/TimetableActions';

//  Timetable Drawing Functions
import TimetableBaseDrawer from '../LogicUtils/TimetableBaseDrawer';
import TimetableSlotDrawer from '../LogicUtils/TimetableSlotDrawer';
import { timetableConfigDeriver } from '../LogicUtils/TimetableConfigDeriver';




class TimetablePreviewer extends React.Component {
    constructor(props) {
        super(props);

        this.timetableHTML = React.createRef();
        this.timetableCanvasWindow = React.createRef();

        this.closePreviewBtnHandler = this.closePreviewBtnHandler.bind(this);
        this.downloadBtnHandler = this.downloadBtnHandler.bind(this);
    }

    
    //  If the preview window is open, then we'll update the timetable by redrawing it again
    componentDidUpdate() {
        if (this.props.isPreviewOpen) {
            const derivedConfig = new timetableConfigDeriver( this.props.settings );

            this.canvasStage = TimetableBaseDrawer( this.timetableCanvasWindow.current, derivedConfig );
            TimetableSlotDrawer( this.canvasStage, this.props.timetableRenderData, derivedConfig );
        }
    }

    //  Allows for animation to take place first, then only close it
    closePreviewBtnHandler() {
        this.timetableHTML.current.classList.add('transitionOut');

        setTimeout(() => {
            this.timetableHTML.current.classList.remove('transitionOut');
            this.props.closePreview();
        }, 800);
    }


    //  Convert the Canvas to DataURL, load URL into a created anchor tag, and simulate click to download png
    downloadBtnHandler() {
        const tempLink = document.createElement('a');
        tempLink.download = 'timetable';
        tempLink.href = this.canvasStage.toDataURL();
        tempLink.click();
        tempLink.remove();
    }

    
    render() {
        const { isPreviewOpen } = this.props;
        //=================================== JSX ==========================================
        return (
            <div className={`timetable ${isPreviewOpen? '':'hidden' }`} ref={ this.timetableHTML } >

                <div className='timetable__previewer' id='timetable__previewer'>
                    <button type='button' className='timetable__previewer__closebtn' id='timetable__previewer__closebtn'
                        onClick={ this.closePreviewBtnHandler } >
                        <i className="fas fa-times"></i>
                    </button>

                    <div className='timetable__previewer__wrapper' id='timetable__previewer__wrapper'
                          ref={ this.timetableCanvasWindow } >
                    </div>

                    <button type='button' className='timetable__previewer__downloadbtn' id='timetable__previewer__downloadbtn'
                        onClick={this.downloadBtnHandler} >
                        Download as png
                    </button>

                </div>
            </div>
        );
        //=================================== JSX ==========================================
    }
    
}





/* =================================================
    Proptypes, MapStateToProps, MapDispatchToProps
==================================================== */
TimetablePreviewer.propTypes = {
    isPreviewOpen: PropTypes.bool.isRequired,
    timetableRenderData: PropTypes.array,
    settings: PropTypes.object.isRequired,

    closePreview: PropTypes.func.isRequired
}

function mapStateToProps( store ) {
    return {
        isPreviewOpen: store.isPreviewOpen,
        timetableRenderData: store.timetableRenderData,
        settings: store.settings
    };
}



function mapDispatchToProps( dispatch ) {
    return {
        closePreview: ()=> dispatch( TimetableActions.closePreview() )
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TimetablePreviewer);