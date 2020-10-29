
import TimetableConfig from './TimetableConfig';

import konva from 'konva';
import KonvaFactory from './KonvaFactory';

//  Timetable settings
const { 
    timetableWidth,
    timetableHeight,
    margin, 

    dayOfWeeks,
    times,
    sessions,
    
    theme,
    courseNameFontSize,
    lecturerNameFontSize,
    courseCodeFontSize,

    gridWidth, 
    gridHeight, 
    actualWidth, 
    actualHeight, 
    row1GridHeight, 
    row1ActualHeight,
    
    labelBG,
    sideColorBG,
    oddRowBG,
    evenRowBG,
    colorMaps
} = TimetableConfig;

const { rectFactory, textFactory } = KonvaFactory;


/*
    Structure of each individual renderData:
    {
        courseObj: {
            courseCode:
            courseName:
            lecturerName:
            courseID:
        },
        dayOfWeek:              ( [0 - 4] )
        startingSession:        ( [0 - 11] )
        endingSession:          ( [0 - 11] )
    }
*/
function TimetableSlotDrawer( canvas , renderData) {

    //  Remove the previously drawn timetable courses
    if (canvas.getLayers()[1] ) {
        canvas.getLayers()[1].destroy();
    }

    const layer = new konva.Layer({
        width: timetableWidth,
        height: timetableHeight
    });

    const rects = [];
    const texts = [];

    renderData.renderData.forEach( course => {
        const { dayOfWeek, startingSession, endingSession } = course;
        const { courseName, lecturerName, courseCode, courseID } = course.courseObj;

        const isCourseNameEmpty = courseName.length === 0;
        const isLectNameEmpty = lecturerName.length === 0;
        const isCourseCodeEmpty = courseCode.length === 0;

        const xPosition = gridWidth + startingSession * gridWidth + margin;
        const yPosition = gridHeight + dayOfWeek * gridHeight + margin;
        const width = (actualWidth + margin) * (endingSession - startingSession + 1);


        rects.push( rectFactory(
            xPosition,
            yPosition,
            width,
            actualHeight,
            colorMaps[courseID]
        ) );

        if (!isCourseNameEmpty)
            texts.push( textFactory(
                courseName,
                xPosition,
                yPosition,
                width,
                actualHeight * heightDeterminer.courseName.heightScale( isLectNameEmpty, isCourseCodeEmpty ),
                courseNameFontSize,
                'Roboto',
                'normal',
                3
            ) );

        if (!isLectNameEmpty)
            texts.push( textFactory(
                lecturerName,
                xPosition,
                yPosition + actualHeight * heightDeterminer.lectName.yOffset( isCourseNameEmpty, isCourseCodeEmpty ),
                width,
                actualHeight * heightDeterminer.lectName.heightScale( isCourseNameEmpty, isCourseCodeEmpty ),
                lecturerNameFontSize,
                'Roboto',
                'normal',
                3
            ) );

        if (!isCourseCodeEmpty)
            texts.push( textFactory(
                courseCode,
                xPosition,
                yPosition + actualHeight * heightDeterminer.courseCode.yOffset( isCourseNameEmpty, isLectNameEmpty ),
                width,
                actualHeight * heightDeterminer.courseCode.heightScale( isCourseNameEmpty, isLectNameEmpty ),
                courseCodeFontSize,
                'Roboto',
                'bold',
                3
            ) );

    })

    rects.forEach( rect => layer.add(rect) );
    texts.forEach( text => layer.add(text) );
    canvas.add(layer);
}

//  Give corresponding height for texts depending if some fields are empty
const heightDeterminer = {
    courseName: {
        heightScale: function( isLectNameEmpty, isCourseCodeEmpty) {
            if (isLectNameEmpty && isCourseCodeEmpty) return 1;
            if (isLectNameEmpty || isCourseCodeEmpty) return 0.75;
            return 0.5;
        }
    },
    lectName: {
        yOffset: function( isCourseNameEmpty, isCourseCodeEmpty) {
            if (isCourseNameEmpty) return 0;
            if (isCourseCodeEmpty) return 0.75;
            return 0.5;
        },
        heightScale: function( isCourseNameEmpty, isCourseCodeEmpty) {
            if (isCourseNameEmpty && isCourseCodeEmpty) return 1;
            if (isCourseCodeEmpty || !isCourseNameEmpty) return 0.25;
            return 0.5;
        }
    },
    courseCode: {
        yOffset: function( isCourseNameEmpty, isLectNameEmpty ) {
            if (isCourseNameEmpty && isLectNameEmpty) return 0;
            if (isCourseNameEmpty) return 0.5;
            return 0.75;
        },
        heightScale: function( isCourseNameEmpty, isCourseCodeEmpty) {
            if (isCourseNameEmpty && isCourseCodeEmpty) return 1;
            if (isCourseNameEmpty) return 0.5;
            return 0.25;
        }
    }
}


export default TimetableSlotDrawer;