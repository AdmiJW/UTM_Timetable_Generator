import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//  Redux Action Creator
import TimeActions from '../../Redux/Actions/TimeActions';




class CourseTimeItem extends React.PureComponent {
    constructor(props) {
        super(props);

        this.deleteTime = this.deleteTime.bind(this);
        this.changeTimeInfo = this.changeTimeInfo.bind(this);
    }


    componentDidMount() {
        this.timeItemHTML = document.getElementById(`course-item__times__entry-${ this.props.courseID}-${ this.props.timeInfo.timeID }`);

        this.timeDayOfWeekHTML = this.timeItemHTML.children[1];
        this.timeSessionHTML = this.timeItemHTML.children[2];
    }


    //  Allow the div to have fade out animation first, then only we actually remove the div
    deleteTime() {
        this.timeItemHTML.classList.add('fade-out');

        setTimeout(() => {
            this.props.deleteTime( this.props.courseID, this.props.timeInfo.timeID );
        }, 500);
    }


    //  When the dayOfWeek or session of the time item is changed, update the information respectively
    changeTimeInfo() {
        this.props.changeTimeInfo( this.props.courseID, this.props.timeInfo.timeID, {
            timeID: this.props.timeInfo.timeID,
            dayOfWeek: this.timeDayOfWeekHTML.value,
            session: this.timeSessionHTML.value
        });
    }




    render() {
        const courseID = this.props.courseID;
        const { timeID, dayOfWeek, session } = this.props.timeInfo;

        //=================================== JSX ==========================================
        return (
            <div className='course-item__times__entry' id={`course-item__times__entry-${ courseID }-${ timeID }`}>

                    <button type='button' className='course-item__times__entry__delete-button'
                        onClick={ this.deleteTime } >
                        X
                    </button>


                    <select className='course-item__times__entry__dayOfWeek' value={ dayOfWeek } onChange={ this.changeTimeInfo } >
                        <option value='Sun'>Sunday</option>
                        <option value='Mon'>Monday</option>
                        <option value='Tue'>Tuesday</option>
                        <option value='Wed'>Wednesday</option>
                        <option value='Thu'>Thursday</option>
                    </select>

                    <select className='course-item__times__entry__session' value={ session } onChange={ this.changeTimeInfo } >
                        <option value='02'>02 (8:00am - 8:50am)</option>
                        <option value='03'>03 (9:00am - 9:50am)</option>
                        <option value='04'>04 (10:00am - 10:50am)</option>
                        <option value='05'>05 (11:00am - 11:50am)</option>
                        <option value='06'>06 (12:00pm - 12:50pm)</option>
                        <option value='07'>07 (1:00pm - 1:50pm)</option>
                        <option value='08'>08 (2:00pm - 2:50pm)</option>
                        <option value='09'>09 (3:00pm - 3:50pm)</option>
                        <option value='10'>10 (4:00pm - 4:50pm)</option>
                        <option value='11'>11 (5:00pm - 5:50pm)</option>
                        <option value='12'>12 (6:00pm - 6:50pm)</option>
                    </select>

                </div>
        );
        //=================================== JSX ==========================================
    }
}



/* =================================================
    Proptypes, MapStateToProps, MapDispatchToProps
==================================================== */
CourseTimeItem.propTypes = {
    deleteTime: PropTypes.func.isRequired,
    changeTimeInfo: PropTypes.func.isRequired
}


function mapDispatchToProps(dispatch) {
    return {
        deleteTime: ( courseIndexToDel, timeIndexToDel ) => 
            dispatch( TimeActions.deleteTime(courseIndexToDel, timeIndexToDel) ),
        changeTimeInfo: ( courseIndexToChange, timeIndexToChange, newTimeValues ) =>
            dispatch( TimeActions.changeTimeInfo(courseIndexToChange, timeIndexToChange, newTimeValues) )
    }
}


export default connect(null, mapDispatchToProps)(CourseTimeItem);