
import konva from 'konva';
import KonvaFactory from './KonvaFactory';

//  Timetable configuration Settings
import TimetableConfig from './TimetableConfig';


//  Timetable settings
const { 
    timetableWidth,
    timetableHeight,
    margin, 

    dayOfWeeks,
    times,
    sessions,

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
} = TimetableConfig;

const { rectFactory, textFactory } = KonvaFactory;



function TimetableBaseDrawer( canvas ) {

    const stage = new konva.Stage({
        container: canvas.id
    });
    stage.size( { width: timetableWidth, height: timetableHeight } );
    stage.container().classList.add('timetable__previewer__wrapper');

    const layer = new konva.Layer();
    layer.size( { width: timetableWidth, height: timetableHeight} );

    const rects = [];
    const texts = [];

    //  Background
    rects.push( rectFactory(0,0, timetableWidth, timetableHeight, 'white') );

    //  Labels
    rects.push( rectFactory(margin, margin, actualWidth, row1ActualHeight, labelBG) );
    rects.push( rectFactory(margin, row1GridHeight + margin, actualWidth, row1ActualHeight, labelBG) );
    texts.push( textFactory('Time', margin, margin, actualWidth, row1ActualHeight, 30) );
    texts.push( textFactory('Session', margin, row1GridHeight + margin, actualWidth, row1ActualHeight, 30) );


    //  Day Of Weeks (Monday, Tuesday...)
    dayOfWeeks.forEach( (dayOfWeek, idx) => {
        rects.push( rectFactory(margin, (gridHeight) + (gridHeight * idx + margin), 
            actualWidth, actualHeight, sideColorBG) );
        texts.push( textFactory(dayOfWeek, margin, (gridHeight) + (gridHeight * idx + margin),
            actualWidth, actualHeight, 30, 'Roboto', 'bold') );
    });

    //  Times (8am, 9am...)
    times.forEach( (time, idx) => {
        const beginTime = `${time}:00 ${ time >= 8 && time !== 12? 'a.m':'p.m'}`;
        const endTime = `${time}:50 ${ time >= 8 && time !== 12? 'a.m':'p.m'}`;

        rects.push( rectFactory( (gridWidth) + (gridWidth * idx + margin), margin, 
            actualWidth, row1ActualHeight, sideColorBG) );
        texts.push( textFactory( beginTime, (gridWidth) + (gridWidth * idx + margin), margin,
            actualWidth, row1ActualHeight / 2, 20) );
        texts.push( textFactory( endTime, (gridWidth) + (gridWidth * idx + margin), margin + row1ActualHeight / 2,
            actualWidth, row1ActualHeight / 2, 20) );
    });

    //  Sessions ( 02, 03...)
    sessions.forEach( (session, idx) => {
        rects.push( rectFactory( (gridWidth) + (gridWidth * idx + margin), row1GridHeight + margin, 
            actualWidth, row1ActualHeight, sideColorBG) );
        texts.push( textFactory( session, (gridWidth) + (gridWidth * idx + margin), row1GridHeight + margin,
            actualWidth, row1ActualHeight, 30) );
    });

    //  Odd Rows Background
    sessions.forEach( (times, idx) => {
        rects.push( rectFactory( (gridWidth) + (gridWidth * idx + margin), gridHeight + margin, 
            actualWidth, actualHeight, oddRowBG) );
        rects.push( rectFactory( (gridWidth) + (gridWidth * idx + margin), gridHeight * 3 + margin, 
            actualWidth, actualHeight, oddRowBG) );
        rects.push( rectFactory( (gridWidth) + (gridWidth * idx + margin), gridHeight * 5 + margin, 
            actualWidth, actualHeight, oddRowBG) );
    })

    //  Even Rows Background
    sessions.forEach( (times, idx) => {
        rects.push( rectFactory( (gridWidth) + (gridWidth * idx + margin), gridHeight * 2 + margin, 
            actualWidth, actualHeight, evenRowBG) );
        rects.push( rectFactory( (gridWidth) + (gridWidth * idx + margin), gridHeight * 4 + margin, 
            actualWidth, actualHeight, evenRowBG) );
    })

    //  Draw each element into canvas
    rects.forEach( (rect) => layer.add(rect) );
    texts.forEach( (text) => layer.add(text) );
    stage.add(layer);

    layer.draw();

    return stage;
}

export default TimetableBaseDrawer;