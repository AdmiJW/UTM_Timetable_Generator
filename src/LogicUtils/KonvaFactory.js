import konva from 'konva';

const konvaFactory = {
    
    rectFactory: ( x, y, width, height, fill) => {
        return new konva.Rect({
            x, y, width, height, fill, listening: false
        });
    },

    textFactory: ( text, x, y, width, height, fontSize, fontFamily='Roboto', fontStyle='normal', padding=0 ) => {
        return new konva.Text({
            text, x, y, width, height, fontFamily, fontSize, fontStyle, padding, align: 'center', verticalAlign: 'middle',
            fill: 'white', listening: false
        })
    }
    
};


export default konvaFactory;