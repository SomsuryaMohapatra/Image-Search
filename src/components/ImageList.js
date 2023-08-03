import React from "react";
import "../components_css/ImageList.css"
import ImgageShow from "./ImageShow";

export default function ImageList(props) {
  const { images } = props;
  return (
    <div className="image-list">
      {
        images.map((image)=>{
          return(
            <ImgageShow key={image.id} image={image}/>
          );
        })
      }
    </div>
  );
}
