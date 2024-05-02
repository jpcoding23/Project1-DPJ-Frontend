import React from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel w-100 slide">
        {/* Carousel Content */}
      </div>

      {/* First Row */}
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">Update/edit profile settings</p>
              <Link to="/" className="btn btn-primary">Profile</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Accounts</h5>
              <p className="card-text">View/Request accounts</p>
              <Link to="/accounts" className="btn btn-primary">Accounts</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Transfer</h5>
              <p className="card-text">Send/Transfer between accounts</p>
              <Link to="/transfer" className="btn btn-primary">Transfer</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Help</h5>
              <p className="card-text">Get assistance with admin support</p>
              <Link to="/login" className="btn btn-primary">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}