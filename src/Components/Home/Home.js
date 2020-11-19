import React from 'react';
import './Home.css';
import logo from '../../images/Tiffinia_icon_small.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="container mt-5 mb-5">
          <div className="home">
          <div className="row justify-content-center ">
               <Link to="/getStart"><img className='logo-img' src={logo}  alt=""/></Link>
          </div>
          </div>
      </div>
    );
};

export default Home;