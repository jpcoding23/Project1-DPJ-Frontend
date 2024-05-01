import React from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div className='dashboard'>
        {/* <div id="carouselExampleCaptions" className="carousel w-100 slide">
            <div className="carousel-indicators carasoul-center">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner w-75">
                <div className="carousel-item w-50 active carasoul-center-img">
                <img src="https://images.pexels.com/photos/618158/pexels-photo-618158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/" className="d-block w-100 center" alt="by Matthias Zomer from Pexels:"></img>
                <div className="carousel-caption d-none d-md-block center ">
                    <h5 className='c1-color'>Bank with us</h5>
                    <p className='c1-color'>Opan an account with DPJ today!</p>
                </div>
                </div>
                <div className="carousel-item w-75 carasoul-center-img">
                <img src="https://images.pexels.com/photos/8112177/pexels-photo-8112177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/" className="d-block w-50" alt="by Pavel Danilyuk from Pexels:"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Take your first steps to financial freedom</h5>
                    <p>Our specialists are ready to assist you with any Business concerns you may have.</p>
                </div>
                </div>
                <div className="carousel-item w-75 carasoul-center-img">
                <img src="https://images.pexels.com/photos/6289026/pexels-photo-6289026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/" className="d-block w-50" alt="by Monstera Production from Pexels"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>We can help you invest</h5>
                    <p>Contact our specialists for more details</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div> */}
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    <p className="card-text">Update/edit profile settings</p>
                    <Link to="/" className="btn btn-primary">profile</Link>
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
        <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Transfer</h5>
                    <p className="card-text">Send/Trasfer between accounts</p>
                    <Link to="/transfer" className="btn btn-primary">Transfer</Link>
                </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Help</h5>
                    <p className="card-text">Get assistance with admin support</p>
                    <Link to="/" className="btn btn-primary">Help</Link>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}
