import React from 'react';
import IMDb from '../img/IMDB_Logo_2016 1.png'
import './MoviePageHero.css'
import { Link } from 'react-router-dom';

const MoviePageHero = (props) => {
    const { attributes, type } = props.data

    // console.log('rating ', attributes?.running_time);
    return (
        <div className='text-light'>
            <p className='lead rating'>{`${attributes?.release_date} | ${attributes?.rating} | ${attributes?.running_time}`}</p>
            <h1 className='title text-uppercase'>{attributes?.title}</h1>
            <p className='movieType text-uppercase'>{type}</p>
            <span><img src={IMDb} alt="" className='pe-3' />{attributes?.order}.0</span>
            <br />     <br />
            <Link to={attributes?.trailer} className='youtubeLink'><button className='my-4 p-2 me-5'><i class="fa fa-play-circle-o" aria-hidden="true"></i> Watch Now</button></Link>
            <button className='my-4 p-2'><i class="fa fa-crosshairs" aria-hidden="true"></i> Add to my List</button>

        </div>
    );
}

export default MoviePageHero;
