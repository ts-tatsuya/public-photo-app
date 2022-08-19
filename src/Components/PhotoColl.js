import 'bootstrap/dist/css/bootstrap.min.css'
import './PhotoColl.css';
import {useEffect, useState} from 'react'
import PhotoCard from './PhotoCard';
import { Spinner } from 'react-bootstrap';


/*This component will display a box 
 that contained all of the images from data*/

function PhotoColl() {

  const uri = 'http://localhost:3001';
  const [data, setData] = useState([{}]);
  

  useEffect( () => {
    fetch(uri)
    .then(res => res.text())
    .then(text => JSON.parse(text))
    .then(json => setData(json))
  }, [uri]);

  function renderAll(){
    if(data.length !== 1){
      //render image when data is ready to use 
      console.log("rendering process")
      const renderedImg = [];
      data.map((item) => {
        renderedImg.push(<PhotoCard key={item.link} imgUrl={item.media.m} postUrl={item.link}/>);
      })


      let columns = [[], [], []];
      let columnCounter = 0;
      renderedImg.forEach(item => {
        columns[columnCounter].push(item);
        if(columnCounter < 2){
          columnCounter++;
        }else{
          columnCounter = 0;
        }
      });
      console.log(columns)
      const columnContainers = 
      [<div key={"cl1"} className='CardColumn'>{columns[0]}</div>, 
      <div key={"cl2"} className='CardColumn'>{columns[1]}</div>, 
      <div key={"cl3"} className='CardColumn'>{columns[2]}</div>]

      console.log(columnContainers);
      return <div className="CardContainer">{columnContainers}</div>
      
    }else{
      //spinner animation shown when data is not ready
      return <div className="LoadingSpin">
        <Spinner animation="border" role="status"  style={{width: "10rem", height: "10rem" }}/>
        </div>;
    }
  }
  
  
  return (
    <div className="PhotoColl">
      <div className='ImageColl'>{renderAll()}</div>
    </div>
  );
}

export default PhotoColl;