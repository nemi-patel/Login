import React from 'react'
import { useNavigate } from 'react-router-dom';
import errorimg from "../../image/Screenshot 2023-07-18 130913.png"

function Error() {
    const history = useNavigate();
    return (
        <>
            <div className="container">
                <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                    <img src={errorimg} alt="error" className='errorimg' />
                    <h4>404 Error ! Page not found  😭😭😭  </h4>
                    <button className='btn btn-primary' onClick={() => history("/")}> Redirect Login Page</button>
                </div>
            </div>
        </>
    )
}

export default Error