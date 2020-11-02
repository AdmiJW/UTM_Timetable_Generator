
import KonvaFactory from './KonvaFactory';


const { rectFactory, textFactory } = KonvaFactory;


/* =================================================================================================================
    This function is called every time after the TimetableBaseDrawer.js is called. This renders the courses
    onto the timetable.
=================================================================================================================*/

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
function TimetableSlotDrawer( canvas , renderData, derivedConfig) {

    //  Destructuring of the properties required to draw Timetable courses
    const {
        gridWidth, gridHeight, margin,
        themeSettings,
        courseNameFontSize, lecturerNameFontSize ,courseCodeFontSize,
        actualWidth, actualHeight
    } = derivedConfig;

    const {
        courseFontColor, fontFamily, colorMaps
    } = themeSettings;


    //  The first child is the layer to draw on
    const layer = canvas.getLayers()[1];

    const rects = [];
    const texts = [];

    renderData.forEach( course => {
        const { dayOfWeek, startingSession, endingSession } = course;
        const { courseName, lecturerName, courseCode, courseID } = course.courseObj;

        const isCourseNameEmpty = courseName.length === 0;
        const isLectNameEmpty = lecturerName.length === 0;
        const isCourseCodeEmpty = courseCode.length === 0;

        const xPosition = gridWidth + startingSession * gridWidth + margin;
        const yPosition = gridHeight + dayOfWeek * gridHeight + margin;
        const width = (endingSession - startingSession + 1) * (actualWidth + (2 * margin) ) - 2 * margin;


        rects.push( rectFactory(
            xPosition,
            yPosition,
            width,
            actualHeight,
            colorMaps[courseID % colorMaps.length]
        ) );

        if (!isCourseNameEmpty)
            texts.push( textFactory(
                courseName,
                xPosition,
                yPosition,
                width,
                actualHeight * heightDeterminer.courseName.heightScale( isLectNameEmpty, isCourseCodeEmpty ),
                courseNameFontSize,
                courseFontColor,
                fontFamily,
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
                courseFontColor,
                fontFamily,
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
                courseFontColor,
                fontFamily,
                'bold',
                3
            ) );

    })

    rects.forEach( rect => layer.add(rect) );
    texts.forEach( text => layer.add(text) );
    canvas.add(layer);
}





//  Function that give corresponding height for texts depending if some fields are empty
//  Eg: When the lecturerName and courseCode is empty, the courseName will span over entire grid
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