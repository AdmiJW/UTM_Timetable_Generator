

//  Note: SVG viewBox sizes are 2400 and 900.
//      Each grid shall be sized 150 in height, 200 in width
//      There are a total of 6 rows, including the first row is nested row
//      There are a total of 12 columns. Including one dayOfWeek Column, and the rest are sessions
function configSettings() {
    this.timetableWidth = 2100;
    this.timetableHeight = 750;
    this.margin = 2;

    this.dayOfWeeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    this.times = [8,9,10,11,12,1,2,3,4,5,6];
    this.sessions = ['02','03','04','05','06','07','08','09','10','11','12'];

    this.theme = 'default';
    this.courseNameFontSize = 25;
    this.lecturerNameFontSize = 15;
    this.courseCodeFontSize = 13;

    this.labelBG = '#7f8082';
    this.sideColorBG = '#70ad46';
    this.oddRowBG = '#c6e0b3';
    this.evenRowBG = '#a9d08f';

    this.colorMaps = [
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
    ];

    //  Auto computed ============================
    this.gridWidth = this.timetableWidth / 12;
    this.gridHeight = this.timetableHeight / 6;
    this.actualWidth = this.gridWidth - 2 * this.margin;
    this.actualHeight = this.gridHeight - 2 * this.margin;

    this.row1GridHeight = this.gridHeight / 2;
    this.row1ActualHeight = this.row1GridHeight - this.margin * 2;

    
}

export default new configSettings();