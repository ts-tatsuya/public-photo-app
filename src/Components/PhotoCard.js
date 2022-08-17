import {useEffect, useState} from 'react'
import './PhotoCard.css'




function PhotoCard({imgUrl, postUrl}) {

  

  return (
    <div className="PhotoCard">
      <a href={postUrl}><img src={imgUrl}></img></a>
      {/* <a href={postUrl}><p>{title}</p></a> */}
      
    </div>
  );
}

export default PhotoCard;