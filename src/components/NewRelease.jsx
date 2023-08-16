import React from 'react';
import './NewRelease.css'
import img1 from "../img/1 (2).png";
import img2 from "../img/2 (2).png";
import img3 from "../img/3 (2).png";
import img4 from "../img/4 (2).png";

const NewRelease = () => {
  return (
      <div className='container-lg text-white'>
            <h1 className='newReleaseHead mx-5'>New Release</h1>
            <div className='newReleaseImg'>
                <img src={img1} alt="New Release" />
                <img src={img2} alt="New Release" />
                <img src={img3} alt="New Release" />
                <img src={img4} alt="New Release" />
            </div>
        </div>
  
  );
}

export default NewRelease;
