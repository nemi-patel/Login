import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { NavLink, useNavigate } from 'react-router-dom';


function Home() {
    const history = useNavigate();

    const[inpval,setInpval]=useState({
        name:"",
        email:"",
        date:"",
        password:""
    })
    console.log(inpval);


    const getdata=(e)=>{
        // console.log(e.target.value);       // target=attribute..............e=parameters 

        const{value,name}=e.target;
        // console.log(value,name); 

        // const value=e.target.value;
        // console.log(value);

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    }

    const[data,setData]=useState([])

    const addData=(e)=>{
        e.preventDefault();                    //when we click on submit page didn't load

        const{name,email,date,password}=inpval;          //destructured
        if(name === ""){
            alert("name field is required")
        }
        else if(email === ""){
            alert("email field id required")
        }
        else if(!email.includes ( "@")){
            alert("plz enter valid email address")
        }
        else if(date === ""){
            alert("date field is required")
        }
        else if(password === ""){
            alert("password field is required")
        }
        else if(password.length > 5){
            alert("password length is greater five")
        }
        else{
            alert("Data added succesfully ")
            history("/")
        }

        localStorage.setItem("email",email);        
        localStorage.setItem("password",password);        
        // localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));        

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='name'  onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="date" name='date' onChange={getdata}/>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password'  onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67,185,127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have An Account ? <span><NavLink to="/login">SignIn</NavLink></span></p>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </>
    )
}

export default Home