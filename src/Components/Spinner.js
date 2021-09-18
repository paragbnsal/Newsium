import React from 'react'
import loading from './loading.gif'
function Spinner() {
    return (
        <div className="text-center my-3" >
            <img src={loading} alt="loading" style={{ width: "60px", height: "60px" }} />
            <p>Fetching News - Please Wait...</p>
        </div>
    )
}

export default Spinner
