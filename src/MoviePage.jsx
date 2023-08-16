import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviePageNav from './components/MoviePageNav';
import bgImg from './img/heroImage.png'
import './MoviePage.css'
import MoviePageHero from './components/MoviePageHero';
import useFetch from './hooks/useFetch';


const MoviePage = () => {
    let params = useParams();
    const movieID = params.id
    const { data, loading, error } = useFetch(`https://api.potterdb.com/v1/movies/${movieID}`)
    //https://api.potterdb.com/v1/movies:id

    // const [data, setData] = useState([]);
    // const callApi = async (url) => {
    //     try {
    //         let response = await fetch(url);
    //         const data = await response.json()

    //         setData(data.data)
    //     } catch (error) {
    //         console.log("there was an error ", error)
    //     }
    // }

    // useEffect(() => {
    //     callApi(`https://api.potterdb.com/v1/movies/${movieID}`);
    // }, [])
    const images = "https://images.unsplash.com/photo-1576158129605-fb0c93eeedfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZpbmUlMjBpbWFnZSUyMCUyMHNxdWFyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"

    if (loading) {
        return <p>loading</p>
    }
    if (error) {
        console.log(error);
        return <p>There was an error</p>
    }

    console.log('this is data', data);

    return (
        <div className='heroSection ' style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)`
            // backgroundImage: `url(${bgImg})`
        }}>
            <div className='tintedLayer px-5'>
                <br />
                <MoviePageNav />
                <br />
                <MoviePageHero
                    data={data}
                // attribute = {data?.attributes}
                />
                <br />
                <div>
                    <h3>Synopsis</h3>
                    <p className='fw-light lead ' style={{ maxWidth: '55rem' }}>{data.attributes?.summary}</p>
                </div>
                <br />
                <div className='cast'>
                    <h3>Cast</h3>
                    <div className='d-flex flex-wrap'>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className='crew'>
                    <h3>Crew</h3>
                    <div className='d-flex flex-wrap'>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                            <p>Producer</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                            <p>Producer</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                            <p>Producer</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                            <p>Producer</p>
                        </div>
                        <div className='crew-castList mt-1'>
                            <img src={images} alt="" />
                            <p>James Bond</p>
                            <p>Producer</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default MoviePage;
