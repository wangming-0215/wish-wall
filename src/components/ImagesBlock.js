import React, { Component } from 'react';
require('../styles/imageBlock.css');
/*const yeomanImage = require('../images/yeoman.png');*/

const imageArray = [{
  'fileName':'yeoman.png',
  'title': 'yeoman',
  'desc':'This is yeoman icon!!!'
},
  {
    'fileName':'1.png',
    'title':'one',
    'desc':'This is 1.png'
  },
  {
    'fileName':'2.png',
    'title':'two',
    'desc':'This is 2.png'
  }];

// 获取图片的路径
const imagesWithPath = (function getImagePath(imageArray){
  for(let i=0,j=imageArray.length; i<j; i++){
    imageArray[i].imagePath =  require('../images/' + imageArray[i].fileName);
  }
  return imageArray;
})(imageArray);

export default class extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let imageNodes = imagesWithPath.map(function(img,index){
      let topV = Math.random()*800 + 80;
      let leftV = Math.random()*1700;
      let styleString = {top:topV,left:leftV};
      return (
        <div className="image-block" key={index} style={styleString}>
         <a> <img className="image" src={img.imagePath} />
          <span className="desc-span">{img.desc}</span></a>
        </div>
      );
    });
   return (
      <div className="image-container">
        {imageNodes}
      </div>
    );
  }

}
