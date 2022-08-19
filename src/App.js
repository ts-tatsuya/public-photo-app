import PhotoColl from "./Components/PhotoColl";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Accordion, Popover, OverlayTrigger, Button} from 'react-bootstrap'
import { ReactTitle } from "react-meta-tags";


function App() {

  //Popover content that will be shown when title is clicked
  const popover = (
    <Popover id="appInfoPopover">
      <Popover.Header as="h3">What is this app?</Popover.Header>
      <Popover.Body>
        This app will fetch the data from public photo feeds, then put it into display.
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="App">
      <ReactTitle title="Public Photo App"/>
      {/* <h1 className="PageTitle">Public Photo App</h1> */}
      {/* The title of the page/app */}
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button style={{
          width: "50vw", 
          height: "15vh", 
          fontSize: "8vh", 
          marginTop: "10vh", 
          marginBottom: "10vh", 
          backgroundColor: "white", 
          color: "blue",
          borderWidth: "5px",
          borderColor: "#c3e1fa"
          }}>Public Photo App</Button>
      </OverlayTrigger>

      {/* Display the photo using PhotoColl component */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><h3>Public Photo</h3></Accordion.Header>
          <Accordion.Body>
            <PhotoColl/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      
    </div>
  );
}

export default App;
