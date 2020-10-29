import React from 'react';

//  Redux Utilities
import { connect } from 'react-redux';

import TimetableActions from '../Redux/Actions/TimetableActions';

//  Timetable Drawing Functions
import TimetableBaseDrawer from '../LogicUtils/TimetableBaseDrawer';
import TimetableSlotDrawer from '../LogicUtils/TimetableSlotDrawer';




class TimetablePreviewer extends React.Component {
    constructor(props) {
        super(props);

        this.timetableHTML = React.createRef();
        this.timetableCanvasWindow = React.createRef();

        this.closePreviewBtnHandler = this.closePreviewBtnHandler.bind(this);
        this.downloadBtnHandler = this.downloadBtnHandler.bind(this);
    }

    componentDidMount() {
        this.canvasStage = TimetableBaseDrawer( this.timetableCanvasWindow.current );
    }

    componentDidUpdate() {
        TimetableSlotDrawer( this.canvasStage, this.props.timetableRenderData );
    }

    closePreviewBtnHandler() {
        this.timetableHTML.current.classList.add('transitionOut');

        setTimeout(() => {
            this.timetableHTML.current.classList.remove('transitionOut');
            this.props.closePreview();
        }, 800);
    }

    downloadBtnHandler() {
        const tempLink = document.createElement('a');
        tempLink.download = 'timetable';
        tempLink.href = this.canvasStage.toDataURL();
        tempLink.click();
        tempLink.remove();
    }

    
    render() {
        const {isPreviewOpen} = this.props.timetableRenderData;
        //=================================== JSX ==========================================
        return (
            <div className={`timetable ${isPreviewOpen? '':'hidden' }`} ref={ this.timetableHTML } >
                <div className='timetable__bgblocker' >
                </div>

                <div className='timetable__previewer' id='timetable__previewer'>
                    <button type='button' className='timetable__previewer__closebtn' id='timetable__previewer__closebtn'
                        onClick={this.closePreviewBtnHandler} >
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

function mapStateToProps( store ) {
    return {
        timetableRenderData: store.timetableRenderData
    };
}



function mapDispatchToProps( dispatch ) {
    return {
        closePreview: ()=> dispatch( TimetableActions.closePreview() )
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TimetablePreviewer);