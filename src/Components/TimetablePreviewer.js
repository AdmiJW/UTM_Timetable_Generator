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
        this.openTabBtnHandler = this.openTabBtnHandler.bind(this);
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

    //  Opens a new tab (Hopefully for those who unable to directly download from the download button, this works
    //  for them). Then on the new tab write the image data into it.
    openTabBtnHandler() {
        const img = new Image();
        img.src = this.canvasStage.toDataURL();
        img.onload = ()=> {
            const w = window.open();
            w.document.write(`
            <style>
                img {
                    width: 100%;
                    height: auto;
                }
            </style>
            ` + img.outerHTML);
            w.document.close();
        }
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

                    <div className='timetable__previewer__btnDiv' id='timetable__previewer__btnDiv'>
                        <button type='button' className='timetable__previewer__downloadbtn' id='timetable__previewer__downloadbtn'
                            onClick={this.downloadBtnHandler} >
                            Download as png
                        </button>

                        <button type='button' className='timetable__previewer__openTab' id='timetable__previewer__openTab'
                            onClick={this.openTabBtnHandler} >
                            Open in new tab
                        </button>
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