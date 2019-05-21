import React, { useState } from "react";
import React from "reactdom";
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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler mc-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                      </button>
                    
                <a class="navbar-brand   ml" href="#">HaloTrak</a>
                
                                                                                                                                                                                                                                                                                                                                                                                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                        <li class="nav-item  fas fa-user-circle">
                            </li>
                            <li class="nav-item">
                                  <a class="nav-link" href="#">Profile</a>
                                </li>
                           
                        <li class="nav-item">
                                <a class="nav-link" href="#">Vehicle settings</a>
                              </li>
                            <li class="nav-item">
                                    <a class="nav-link" href="#">Payment</a>
                                  </li>
                                  
                                      <li class="nav-item">
                                            <a class="nav-link" href="#">Support</a>
                                          </li>

                                      
                
                   <a href="home.html"><button type="button" class="btn btn-success">Log out</button></a> 
                
                  </ul>
                 
                </div>
              </nav>
           
           
              <ReactMapGL {...viewport}
  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
  mapStyle="mapbox://styles/donifez/cjvmc1z353vyu1cqpybkc0zv0"
  onViewportChange={viewport=>{
    setViewport(viewport);
    }}
    >  Nigeria map </ReactMapGL>
   
   
</div> 

  );

}


