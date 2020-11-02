import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//  Redux Action Creators
import CourseActions from '../../Redux/Actions/CourseActions';
import TimetableActions from '../../Redux/Actions/TimetableActions';

// Other React Components
import CourseItem from './CourseItem.js';


class CourseContainer extends React.Component {
    constructor(props) {
        super(props);

        this.addCourse = this.addCourse.bind(this);
        this.courseItemRenderer = this.courseItemRenderer.bind(this);
    }


    componentDidMount() {
        this.courseContainer = document.getElementById('course-window__div');
    }


    //  Adds a new course item into the courses div
    addCourse() {
        this.props.addCourse();

        //  Animate Scroll to bottom after element is inserted, which takes a little bit of time
        setTimeout(() => {
            this.courseContainer.scrollTop = this.courseContainer.scrollHeight;
        }, 50);
    }


    //  Converts the array of courses into arrays of CourseItem Component respectively.
    courseItemRenderer() {
        const { courseItems, courseTimeItems } = this.props;

        const courseHTML = Object.keys( courseItems ).map( (courseID) => {
            return ( <CourseItem key={courseID} courseInfo={courseItems[courseID]} 
                courseTimes={courseTimeItems[courseID] } /> );
        });
        return courseHTML;
    }



    render() {

        //=================================== JSX ==========================================
        return (
            <main className='course-window' id='course-window'>

                <div className='course-window__div' id='course-window__div'>
                    { this.courseItemRenderer() }
                </div>

                <button type='button' className='course-window__add-button' id='course-window__add-button'
                    onClick={ this.addCourse } >
                    +
                </button>

                <button type='button' className='course-window__view-button' id='course-window__view-button'
                    onClick={ this.props.viewTimetable } >
                    <i className="far fa-eye"></i>
                </button>
            </main>
        );
        //=================================== JSX ==========================================
    }
}




/* =================================================
    Proptypes, MapStateToProps, MapDispatchToProps
==================================================== */
CourseContainer.propTypes = {
    courseItems: PropTypes.object.isRequired,
    courseTimeItems: PropTypes.object.isRequired,

    addCourse: PropTypes.func.isRequired,
    viewTimetable: PropTypes.func.isRequired
}


function mapStateToProps(store) {
    return {
        courseItems: store.courseItems,
        courseTimeItems: store.courseTimeItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCourse: () => dispatch( CourseActions.addCourse() ),
        viewTimetable: () => dispatch( TimetableActions.viewTimetable() )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);