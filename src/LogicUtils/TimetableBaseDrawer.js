
import konva from 'konva';
import KonvaFactory from './KonvaFactory';
konva.showWarnings = false;

//  KonvaFactory.js Destructuring
const { rectFactory, textFactory } = KonvaFactory;


/* =================================================================================================================
    This function is called every time the preview button is clicked, to render and update the timetable
=================================================================================================================*/
function TimetableBaseDrawer( canvas, derivedConfig ) {

    //  Destructuring of the Rendering Properties
    const {
        gridWidth, gridHeight, margin,
        dayOfWeeks, times, sessions,
    
        themeSettings,
    
        timetableWidth, timetableHeight, actualWidth, actualHeight, row1GridHeight, row1ActualHeight
    } = derivedConfig;

    //  Destructuring of the Theme Properties
    const {
        baseBG, labelBG, sideColorBG, oddRowBG, evenRowBG,
        labelFontColor, fontFamily
    } = themeSettings;


    //  Redrawing the bases again. Clearing the Canvas won't do because width and height of timetable might be
    //  changed due to changing of the grid's width, height or the number of sessions.
    while (canvas.firstChild ) {
        canvas.firstChild.remove();
    }

    const stage = new konva.Stage({
        container: canvas.id,
        width: timetableWidth,
        height: timetableHeight
    });
    stage.container().classList.add('timetable__previewer__wrapper');

    //  Layer to draw the base
    const layer = new konva.Layer({
        width: timetableWidth,
        height: timetableHeight
    });

    //  Layer to draw the actual occupied slots. We draw them in TimetableSlotDrawer.js
    const layer2 = new konva.Layer({
        width: timetableWidth,
        height: timetableHeight
    });

    const rects = [];
    const texts = [];

    //  Background
    rects.push( rectFactory(0,0, timetableWidth, timetableHeight, baseBG) );

    //  Labels
    rects.push( rectFactory(margin, margin, actualWidth, row1ActualHeight, labelBG) );
    rects.push( rectFactory(margin, row1GridHeight + margin, actualWidth, row1ActualHeight, labelBG) );
    texts.push( textFactory('Time', margin, margin, actualWidth, row1ActualHeight, 30, labelFontColor, fontFamily) );
    texts.push( textFactory('Session', margin, row1GridHeight + margin, actualWidth, row1ActualHeight, 30, labelFontColor, fontFamily) );


    //  Day Of Weeks (Monday, Tuesday...)
    dayOfWeeks.forEach( (dayOfWeek, idx) => {
        rects.push( rectFactory(margin, (gridHeight) + (gridHeight * idx + margin), 
            actualWidth, actualHeight, sideColorBG) );
        texts.push( textFactory(dayOfWeek, margin, (gridHeight) + (gridHeight * idx + margin),
            actualWidth, actualHeight, 28, labelFontColor, fontFamily) );
    });

    //  Times (8am, 9am...)
    //  Starting time is [8 until 19]. From 8 until 11 is a.m. Otherwise p.m.
    //  Ending time is [9 until 20]. From 9 until 11 is a.m. Otherwise p.m.
    times.forEach( (time, idx) => {
        const beginTime = `${time}:00 ${ time >= 8 && time <= 11? 'a.m':'p.m'}`;
        const endTime = `${ (time % 12) + 1 }:00 ${ time >= 8 && time <= 10? 'a.m':'p.m'}`;

        rects.push( rectFactory( (gridWidth) + (gridWidth * idx + margin), margin, 
            actualWidth, row1ActualHeight, sideColorBG) );
        texts.push( textFactory( beginTime, (gridWidth) + (gridWidth * idx + margin), margin,
            actualWidth, row1ActualHeight / 2, 20, labelFontColor, fontFamily) );
        texts.push( textFactory( endTime, (gridWidth) + (gridWidth * idx + margin), margin + row1ActualHeight / 2,
            actualWidth, row1ActualHeight / 2, 20, labelFontColor, fontFamily) );
    });

    //  Sessions ( 02, 03...)
    sessions.forEach( (session, idx) => {
        rects.push( rectFactory( (gridWidth) + (gridWidth * idx + margin), row1GridHeight + margin, 
            actualWidth, row1ActualHeight, sideColorBG) );
        texts.push( textFactory( session, (gridWidth) + (gridWidth * idx + margin), row1GridHeight + margin,
            actualWidth, row1ActualHeight, 30, labelFontColor, fontFamily) );
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
    stage.add(layer2);

    layer.draw();

    return stage;
}

export default TimetableBaseDrawer;