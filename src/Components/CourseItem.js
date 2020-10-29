import React from 'react';
import { connect } from 'react-redux';

//  ContentEditable
import ContentEditable from 'react-contenteditable';


import CourseActions from '../Redux/Actions/CourseActions';
import TimeActions from '../Redux/Actions/TimeActions';

//  Other React Components
import CourseTimeItem from './CourseTimeItem.js';



class CourseItem extends React.Component {
    constructor(props) {
        super(props);

        this.deleteCourse = this.deleteCourse.bind(this);
        this.changeCourseInfo = this.changeCourseInfo.bind(this);
        this.addTime = this.addTime.bind(this);
    }

    componentDidMount() {
        this.courseItemHTML = document.getElementById( `course-item-${ this.courseID }`);
        this.courseItemInfoElements = this.courseItemHTML.children[0].children;
        
        this.courseNameHTML = this.courseItemInfoElements[0];
        this.lecturerNameHTML = this.courseItemInfoElements[1];
        this.courseCodeHTML = this.courseItemInfoElements[2];
    }


    deleteCourse() {
        this.courseItemHTML.classList.add('fade-out');

        setTimeout(() => {
            this.props.deleteCourse( this.courseID );
        }, 500);
    }

    changeCourseInfo() {
        this.props.changeCourseInfo(
            {
                courseID: this.courseID,
                courseName: this.courseNameHTML.textContent,
                lecturerName: this.lecturerNameHTML.textContent,
                courseCode: this.courseCodeHTML.textContent
            }
        );
    }

    addTime() {
        this.props.addTime( this.courseID );
    }


    timeItemRenderer() {
        return Object.keys( this.props.courseTimes ).map( (timeIdx) => {
            if ( timeIdx !== 'nextTimeID')
                return ( <CourseTimeItem key={timeIdx} courseID={this.courseID} timeInfo={ this.props.courseTimes[timeIdx] } /> )
        });
    }



    render() {
        this.courseInfo = this.props.courseInfo;
        this.courseID = this.courseInfo.courseID;
        this.courseTimes = this.props.courseTimes;

        //=================================== JSX ==========================================
        return (
            <div className={`course-item course-item--${ this.courseID % 10 }-theme`} id={`course-item-${ this.courseID }`}>
                <div className='course-item__info'>


                    <ContentEditable className='course-item__info__courseName' id={`course-item__info__courseName-${ this.courseID }`}
                        onChange={ this.changeCourseInfo } html={ this.courseInfo.courseName } spellCheck='false'  />
                    <ContentEditable className='course-item__info__lecturerName' id={`course-item__info__lecturerName-${ this.courseID }`}
                    onChange={ this.changeCourseInfo } html={ this.courseInfo.lecturerName } spellCheck='false' />
                    <ContentEditable className='course-item__info__courseCode' id={`course-item__info__courseCode-${ this.courseID }`}
                        onChange={ this.changeCourseInfo } html={ this.courseInfo.courseCode } spellCheck='false' />


                    <div className='course-item__info__buttons'>
                        <button type='button' className='course-item__info__buttons__delete-btn'
                            onClick={ this.deleteCourse } >
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        <button type='button' className='course-item__info__buttons__add-button'
                            onClick={ this.addTime } >
                            +
                        </button>
                    </div>

                </div>

                <div className='course-item__seperator'></div>

                <div className='course-item__times'>
                    { this.timeItemRenderer() }
                </div>
                
            </div>
        );
        //=================================== JSX ==========================================
    }
}



function mapDispatchToProps(dispatch) {
    return {
        deleteCourse: ( courseIndexToDel ) => dispatch( CourseActions.deleteCourse( courseIndexToDel ) ),
        changeCourseInfo: ( newInfoValues ) => dispatch( CourseActions.changeCourseInfo( newInfoValues ) ),
        addTime: ( courseIndexToAdd ) => dispatch( TimeActions.addTime( courseIndexToAdd ) )
    }
}







export default connect(null, mapDispatchToProps)(CourseItem);