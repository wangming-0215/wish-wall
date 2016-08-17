require('normalize.css/normalize.css');
require('styles/App.css');


import React,{Component} from 'react';
import ImagesBlock from './ImagesBlock.js';




/*let yeomanImage = require('../images/yeoman.png');*/


export default class extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>wang ming</h1>
        <ImagesBlock />
      </div>
    );
  }
}
