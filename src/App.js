import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { button } from 'react-bootstrap';
import './home';
export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 9.600036,
    longitude: 7.999972,
    width: "100vw",
    height: "100vh",
    zoom: 10,

  });

  return (
    <div>

      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler mc-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>

        <a className="navbar-brand   ml" href="index.html">HaloTrak</a>


        
         
            <li className="nav-item  fas fa-user-circle">
            </li>
            <ul>
            <li className="nav-item">
              <a className="nav-link" href="index.html">Profile</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="index.html">Vehicle settings</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html">Payment</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="index.html">Support</a>
            </li>
            </ul>

                   
          <a href="./home.js"><button type="button" className="btn btn-success">Log out</button></a>                 
</div>
      <div>
        <ReactMapGL {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/donifez/cjvmc1z353vyu1cqpybkc0zv0"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}>  Nigeria map </ReactMapGL>
      </div> 
      </div>  
  );
}
