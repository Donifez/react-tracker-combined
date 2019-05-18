import React from 'react';
//import logo from './logo.svg';
import './App';
import './css/style.css';
import {button} from 'react-bootstrap';

export default function App() {
  return (
  <div>
    <div className="App">
    
  <div className="top col-12">
    <img id="i-logo" src={require("./image/logo.png")} alt="logo"/>
    <div id="input1"><input type="email" placeholder="Enter your email" name="email"/></div>
    <div id="input2"><input type="password" placeholder="Enter your password" name="password"/></div>
    
    <a href="./App.js"><button type="button" id="log1">Log In</button></a> 
    
  </div>


  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-caption d-none d-md-block">
          <h5 className="header">HaloTrak welcomes you</h5>
          <p className="header2">Track your machines in Real-Time,<br/>To get an account and track.<br/>
           <div className="icon">
            <i className="fas fa-chevron-circle-right btn button-free btn-lg sign1 "data-toggle="modal" data-target="#myModal4" width="50" height="50"> Signup</i>
          
           </div> </p>
        </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={require("./image/maptrack.jpg")} className="d-block w-100" alt="mappedtracker"/>
      </div>
      <div className="carousel-item">
        <img src={require("./image/Vehicle-Tracking-Application.png")} className="d-block w-100" alt="fleettracked"/>
      </div>
      <div className="carousel-item">
        <img src={require("./image/vehicletracked.png")} className="d-block w-100" alt="trackedonthego"/>
      </div>
     
    </div>
    
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
  <div className="container modal fade " id="myModal4" tabindex="-1" role="dialog">

    <div className="modal-dialog">

      <div className="modal-content">
        <div className="modal-header modal-style">
          <button type="button" className="close" data-dismiss="modal">&times;</button>


          <div className="container ">
             
            <h4 className="my-modal-btn-login-text">Sign-up</h4>
            
              <form action="#">
              <div className="form-group">
                <input type="text" className="form-control" id="usr" name="username" placeholder="Firstname" required
                  style={{width:"80%"}}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="usr" name="username" placeholder="Surname" required
                  style={{width:"80%"}}/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="pwd" name="password" placeholder="Password" required
                  style={{width:"80%"}}/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="usr" name="username" placeholder="Email" required
                  style={{width:"80%"}}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="usr" name="username" placeholder=" Full Address" required
                  style={{width:"80%"}}/>
              </div>
              <div className="form-group">
                  <input type="date" className="form-control" id="usr" name="bday" max="1979-12-31" required
                  style={{width:"80%"}}/>
              </div>
              <div className="form-group">
                <select name="Country" required style={{width:"70%"}}>
                  <option value="Anambra">Anambra</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Lagos">Lagos</option>
                </select>
              </div>
              <div className="form-group">
                <select name="Country" required style={{width:"70%"}}>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                </select>

              </div>
              <label className="form-check-label">
                <input type="checkbox" class="form-check-input" value="" required/>Click if you agree to terms and Conditions
              </label>
              <br/>
              <a href="home.html"><button type="submit" className="btn btn-primary my-modal-btn-login">Submit</button></a>
              <div className="row my-modal-row-div">
                <div className="col 6">

               

                </div>

              </div>
            </form>
          
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
    </div>
     

                
                );

}

