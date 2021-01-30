/* =================================================================================================================
    Since I implement the Redux store such that it only stores some of the properties of the timetable, 
    this is the actual place which a full set of properties required to render the timetable is
    derived.
=================================================================================================================*/

import { sliceDayOfWeekArray } from '../LogicUtils/Converters';


//  JSON containing the styling for each themes
const themeDeriver = {
    'default': {
        name: 'default',
        baseBG : 'white',
        labelBG : '#7f8082',
        sideColorBG : '#70ad46',
        oddRowBG : '#c6e0b3',
        evenRowBG : '#a9d08f',
    
        labelFontColor: 'white',
        courseFontColor : 'white',
        fontFamily: 'Roboto',

        colorMaps : [
            '#3498db',
            '#6ab04c',
            '#e74c3c',
            '#9b59b6',
            '#34495e',
            '#f1c40f',
            '#3a40b6',
            '#2ecc71',
            '#e67e22',
            '#686de0'
        ]
    },

    'futuristic': {
        name: 'futuristic',
        baseBG : '#2ecc71',
        labelBG : 'black',
        sideColorBG : 'black',
        oddRowBG : '#1b242e',
        evenRowBG : '#212d3b',
    
        labelFontColor: '#29e679',
        courseFontColor : '#29e679',
        fontFamily: 'Orbitron',

        colorMaps : [
            'black'
        ]
    }, 

    'cuteness': {
        name: 'cuteness',
        baseBG : 'white',
        labelBG : '#ff7199',
        sideColorBG : '#ff7199',
        oddRowBG : '#ffbada',
        evenRowBG : '#ffe2ea',
    
        labelFontColor: 'white',
        courseFontColor : 'white',
        fontFamily: 'Grandstander',

        colorMaps : [
            '#ff90c3'
        ]
    },

    'spiderman': {
        name: 'spiderman',
        baseBG : '#cccee3',
        labelBG : '#0861a3',
        sideColorBG : '#0268d7',
        oddRowBG : '#ca141d',
        evenRowBG : '#b31219',
    
        labelFontColor: 'white',
        courseFontColor : 'white',
        fontFamily: 'Marvel',

        colorMaps : [
            '#8f0505'
        ]
    },


    'nature': {
        name: 'nature',
        baseBG : '#392c1d',
        labelBG : '#55422b',
        sideColorBG : '#907a48',
        oddRowBG : '#4f6336',
        evenRowBG : '#4b6b3c',
    
        labelFontColor: '#e6deb9',
        courseFontColor : '#3b2e1e',
        fontFamily: 'Cantora One',

        colorMaps : [
            '#d4bf88'
        ]
    }
}





//  A Constructor Function (use new keyword). Pass in the properties of timetable stored in the Redux store as
//  argument, it will construct a new Object consisting of full set of properties to generate the timetable
function timetableConfigDeriver( stateTimetableSettings ) {

    const { theme, isIslamicWeekend, courseNameFontSize, lecturerNameFontSize, courseCodeFontSize, gridWidth, gridHeight, noOfSessions }
        = stateTimetableSettings;

    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.margin = 2;

    this.dayOfWeeks = sliceDayOfWeekArray( isIslamicWeekend );
    this.times = [8,9,10,11,12,1,2,3,4,5,6,7];
    this.sessions = ['02','03','04','05','06','07','08','09','10','11','12','13'];

    this.themeSettings = themeDeriver[ theme ];
    this.courseNameFontSize = courseNameFontSize;
    this.lecturerNameFontSize = lecturerNameFontSize;
    this.courseCodeFontSize = courseCodeFontSize;

    //  Auto computed ============================
    this.timetableWidth = this.gridWidth * ( Number(noOfSessions) + 1);
    this.timetableHeight = this.gridHeight * 6;
    this.actualWidth = this.gridWidth - 2 * this.margin;
    this.actualHeight = this.gridHeight - 2 * this.margin;

    this.row1GridHeight = this.gridHeight / 2;
    this.row1ActualHeight = this.row1GridHeight - this.margin * 2;
}


export { themeDeriver, timetableConfigDeriver };