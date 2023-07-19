import React from 'react'
import signin from "../../image/logo.svg";


function Sign_img() {
    return (
        <>
            <div className="right_data mt-5" style={{ width: "100%" }}>
                <div className="sign_img mt-5">
                    <img src={signin} style={{ maxWidth: 400 }} alt="" />
                </div>
            </div>
        </>
    )
}

export default Sign_img