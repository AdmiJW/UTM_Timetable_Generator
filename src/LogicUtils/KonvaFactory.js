import konva from 'konva';

/* =================================================================================================================
Creates Konva Rectangle Elements or Text elements
=================================================================================================================*/
const konvaFactory = {
    rectFactory: ( x, y, width, height, fill) => {
        return new konva.Rect({
            x, y, width, height, fill, listening: false
        });
    },

    textFactory: ( text, x, y, width, height, fontSize, fillColor, fontFamily='Roboto', fontStyle='normal', padding=0 ) => {
        return new konva.Text({
            text, x, y, width, height, fontFamily, fontSize, fontStyle, padding, align: 'center', verticalAlign: 'middle',
            fill: fillColor, listening: false
        })
    }
};


export default konvaFactory;