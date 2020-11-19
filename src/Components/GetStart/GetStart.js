import React from 'react';
import object1 from '../../images/object 1.png'
import './GetStart.css'
import { Link } from 'react-router-dom';
const GetStart = () => {
    return (
        <div className="container getStart mt-5 mb-5">
            <div className="row"> 
                <div className="header">
                  <img src={object1} alt=""/>
                  <div className="header-text">
                      <h3>HURRY!!</h3>
                      <h5><i>Hunger Don't Wait</i></h5>
                  </div>
                  </div>
            </div>
            <div className="row">
              <Link to='/login'>
                  <div className="main-div">
                    <div className="btn-1">
                    <p className="btn-text">GET STARTED <br/><small id="small-text">Avail Best Offers & Discounts Only For Yours</small></p>
                    </div>
                </div>
                </Link>
                <Link to='/login'>
                <div className="btn-2-div">
                   <h6 style={{paddingTop:'8px'}}>Continue Without Login</h6>
                </div>
                </Link>
                <Link to='/login'>
                <div className="btn-2-div">
                   <h6 style={{paddingTop:'8px'}}>Already a Tiffinia Member? <span style={{color:'#F69836'}}>Login</span></h6>
                </div>
                </Link>

            </div>
         </div>
    );
};

export default GetStart;