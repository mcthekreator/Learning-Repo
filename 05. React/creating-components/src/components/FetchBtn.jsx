import React from 'react'
import axios from 'axios';


export default function FetchBtn() {
    const getQuote = async () => {
        const response = await axios.get('https://api.quotable.io/random');
        console.log(response.data);
    }
    return (
        <div>
            <button onClick={getQuote}>Click Me</button>            
        </div>
    )
}
