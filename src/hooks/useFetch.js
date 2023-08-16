import { useState, useEffect } from "react";



const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    useEffect(() => {
        console.log('i was called');
        callData();
    }, [])

    const callData = async (url) => {
        try {
            setLoading(true)
            let response = await fetch(url);
            const data2 = await response.json()

            setData(data2.data)
            setLoading(false)
        } catch (error) {
            console.log("there was an error ", error)
            setLoading(false)
            setError(error)
        }
    }

    return { data, loading, error }

}


export default useFetch;