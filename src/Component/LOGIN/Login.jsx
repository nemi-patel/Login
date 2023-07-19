import React, { useState } from 'react'
import Sign_img from './Sign_img';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })
    // console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);       // target=attribute..............e=parameters 

        const { value, name } = e.target;

        // const value=e.target.value;          //also use


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const [data, setData] = useState([]);

    const addData = (e) => {
        e.preventDefault();                    //when we click on submit page didn't load

        const getuseArr = localStorage.getItem("email");
        const getusepass = localStorage.getItem("password");
        console.log("getuseArr",getuseArr)
        console.log("getusepass",getusepass)
        alert("please !!! registration ")

        const { email, password } = inpval;          //destructured
        if (email === "") {
            alert("email field id required")
        }
        else if (!email.includes("@")) {
            alert("plz enter valid email address")
        }
        else if (password === "") {
            alert("password field is required")
        }
        else if (password.length > 5) {
            alert("password length is greater five")
        }
        else {
            if (getuseArr && getuseArr.length) {
                const userdata = JSON.parse(getuseArr);
                console.log(userdata);
            }
        }
        if (getuseArr && getuseArr.length) {
            const userdata = JSON.parse(getuseArr);
            const userLogin = userdata.filter((el, k) => {
                return el.email === email && el.password === password
            });
            console.log("userlogin",userLogin);

            if (userLogin.length === 0) {
                alert("Invalid details");
            }
            else {
                alert("Login sucessfully");
                localStorage.setItem("email", JSON.stringify(userLogin))
                localStorage.setItem("password", JSON.stringify(userLogin))

                    history("/details")
                // history("/details");
            }
        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67,185,127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Don't Have An Account ? <span><NavLink to="/registration">SignUp</NavLink></span></p>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </>
    )
}

export default Login