import 'bootstrap/dist/css/bootstrap.min.css'
import {Image} from 'react-bootstrap'
import './PhotoCard.css'

//This component is for display each of the images

function PhotoCard({imgUrl, postUrl}) {
  return (
    <div className="PhotoCard">
      
      <a href={postUrl}><Image src={imgUrl}></Image></a>
      {/* <a href={postUrl}><p>{title}</p></a> */}
      
    </div>
  );
}

export default PhotoCard;