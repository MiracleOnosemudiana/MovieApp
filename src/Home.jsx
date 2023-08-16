import React from 'react';
import './Home.css'
import TopNav from './components/TopNav';
import HeroContent from './components/HeroContent';
import PopularCol from './components/PopularCol';
import NewRelease from './components/NewRelease';
import { useState, useEffect } from "react";

const Home = () => {
    const [data, setData] = useState([]);
    const callApi = async (url, signal) => {
        try {
            // console.log("calling the api")
            let response = await fetch(url, {
                signal: signal
            });
            console.log("finish calling the api")
            const data = await response.json()
            const filteredData = data.data.filter((movie) => {
                const { id, type, attributes } = movie;
                // console.log('movies ', movie);
                if (id !== 'b5c93f7c-49bb-43a6-84f3-796daa75f354') {
                     return { id, type, attributes }
                }
               
            })
            { console.log('filteredData  ',filteredData) }
            setData(filteredData)
        } catch (error) {
            console.log("there was an error ", error)
        }
    }
    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal;
        callApi("https://api.potterdb.com/v1/movies", signal);


        return () => {
            controller.abort();
        }
    }, []);
    return (


        <>
            <div className='heroImgBg'>
                <div className='blur'></div>
                <div className='mx-3 my-4'>
                    <TopNav />
                </div>
                <div className='mx-5 my-5'>
                    <HeroContent />
                </div>
            </div>
            <div className='layerTint px-0'>

                {/* {console.log("data returned ", data)} */}
                <PopularCol data={data} />

                <NewRelease />

            </div>
        </ >

    );
}

export default Home;



