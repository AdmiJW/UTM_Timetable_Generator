import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//  DayOfWeek and Session Converter
import { dayOfWeekIndexConverter } from '../../LogicUtils/Converters';

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
        const { isIslamicWeekend, courseID } = this.props;
        const { timeID, dayOfWeek, session } = this.props.timeInfo;

        //=================================== JSX ==========================================
        return (
            <div className='course-item__times__entry' id={`course-item__times__entry-${ courseID }-${ timeID }`}>

                    <button type='button' className='course-item__times__entry__delete-button'
                        onClick={ this.deleteTime } >
                        ✖
                    </button>


                    <select className='course-item__times__entry__dayOfWeek' value={ dayOfWeek } onChange={ this.changeTimeInfo } >
                        <option value='0'>{ dayOfWeekIndexConverter(0, isIslamicWeekend, true) }</option>
                        <option value='1'>{ dayOfWeekIndexConverter(1, isIslamicWeekend, true) }</option>
                        <option value='2'>{ dayOfWeekIndexConverter(2, isIslamicWeekend, true) }</option>
                        <option value='3'>{ dayOfWeekIndexConverter(3, isIslamicWeekend, true) }</option>
                        <option value='4'>{ dayOfWeekIndexConverter(4, isIslamicWeekend, true) }</option>
                    </select>

                    <select className='course-item__times__entry__session' value={ session } onChange={ this.changeTimeInfo } >
                        <option value='0'>02 (8:00am - 9:00am)</option>
                        <option value='1'>03 (9:00am - 10:00am)</option>
                        <option value='2'>04 (10:00am - 11:00am)</option>
                        <option value='3'>05 (11:00am - 12:00pm)</option>
                        <option value='4'>06 (12:00pm - 1:00pm)</option>
                        <option value='5'>07 (1:00pm - 2:00pm)</option>
                        <option value='6'>08 (2:00pm - 3:00pm)</option>
                        <option value='7'>09 (3:00pm - 4:00pm)</option>
                        <option value='8'>10 (4:00pm - 5:00pm)</option>
                        <option value='9'>11 (5:00pm - 6:00pm)</option>
                        <option value='10'>12 (6:00pm - 7:00pm)</option>
                        <option value='11'>13 (7:00pm - 8:00pm)</option>
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
    isIslamicWeekend: PropTypes.bool.isRequired,

    deleteTime: PropTypes.func.isRequired,
    changeTimeInfo: PropTypes.func.isRequired
}


function mapStateToProps(store) {
    return {
        isIslamicWeekend: store.settings.isIslamicWeekend
    }
}


function mapDispatchToProps(dispatch) {
    return {
        deleteTime: ( courseIndexToDel, timeIndexToDel ) => 
            dispatch( TimeActions.deleteTime(courseIndexToDel, timeIndexToDel) ),
        changeTimeInfo: ( courseIndexToChange, timeIndexToChange, newTimeValues ) =>
            dispatch( TimeActions.changeTimeInfo(courseIndexToChange, timeIndexToChange, newTimeValues) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CourseTimeItem);