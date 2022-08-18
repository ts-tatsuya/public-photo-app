import PhotoColl from "./Components/PhotoColl";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Accordion, Popover, OverlayTrigger, Button} from 'react-bootstrap'


function App() {

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
      {/* <h1 className="PageTitle">Public Photo App</h1> */}
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
