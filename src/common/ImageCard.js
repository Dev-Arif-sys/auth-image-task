import React from "react";

const ImageCard = ({ image }) => {

 
  return (
    <div
   
    >
      <img
      style={{
        maxWidth: "100%",
        height: "220px"
      }}
     
        src={image.url}
      />
    </div>
  );
};

export default ImageCard;
