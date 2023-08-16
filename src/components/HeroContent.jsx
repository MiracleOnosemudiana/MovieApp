import React from 'react';
import './HeroContent.css';
import IMDb from '../img/IMDB_Logo_2016 1.png'

const HeroContent = () => {
    return (
        <div className='container-lg text-light'>
            <p className='lead rating'>2021 | PG-13 | 2h 28m</p>
            <h1 className='title'>SPIDER-MAN:<br />NO WAY HOME</h1>
            <p className='movieType'>Action | Adventure | Fantasy</p>
            <span><img src={IMDb} alt="" /> 8.5</span>
            <br />
            <button className='my-4 p-2'><i class="fa fa-play-circle-o" aria-hidden="true"></i> Watch Now</button>

        </div>
    );
}

export default HeroContent;
