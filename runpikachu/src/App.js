import React, {Component} from 'react';
import './App.css';

const NUM_BOXES = 32;

//box component
const Box = ({color, image}) => {
  const style = {
    width: '103.9px',
    height: '103.9px',
    display: 'inline-block',
    backgroundImage: `url(${image})`,
    backgroundColor: color,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return <div style={style} />;
};

class App extends Component {

  constructor(props) {
    super(props);
    const boxes =  [];
    for(let i = 0; i<32; i++) {
      const box = {
        image: null,
        color: this.getRandomColor()
      };
      boxes.push(box);
    }
    // const boxes = Array(NUM_BOXES).fill({color: this.getRandomColor(), image:null});
    this.state = {boxes};

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = Math.floor(Math.random()*boxes.length);
      boxes[randIndex] = {color: this.getRandomColor(), image: this.getPica()};
      setTimeout(() => {
        boxes[randIndex] = {color: this.getRandomColor(), image: null};
      }, 200);
      this.setState({boxes});
    }, 300);

  }

  getPica() {
    return 'pikachu.png';
  }

  getRandomColor() {
    const randomColorIndex = Math.floor(Math.random()*this.props.allColors.length);
    return this.props.allColors[randomColorIndex];
  }

  render() {
    const boxes = this.state.boxes.map((pikachu, index) => {
      return(
        <Box key={index} color={pikachu.color} image={pikachu.image} />
      )
    });

    return(
      <div className="App">
        <h1>Can You Spot This running Pikachu!</h1>
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;
