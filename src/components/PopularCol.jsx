import React from 'react';
import "./PopularCol.css";
import { Link } from 'react-router-dom';

const PopularCol = ({ data }) => {
    return (
        <div className='container-lg p-0'>
            <h1 className='popularColHead mx-5 '>Popular Collections</h1>
            <div className='popularColImg'>

                {data && data.map(({ attributes: { poster }, id }) => {

                    if (poster) {
                        return (<Link to={`/movie/${id}`}>
                            <img key={id} src={poster} alt="image collections" style={{ maxWidth: '20rem' }} />
                        </Link>)
                    } else {
                        return (<Link to={`/movie/${id}`}>
                        <img key={id} src={'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="image collections" style={{ maxWidth: '20rem' }} />
                    </Link>)  
                    }


                })}
            </div>

        </div>
    );
}

export default PopularCol;