import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom';

function Details() {

  const history=useNavigate();

  const userlogout=()=>{
    localStorage.removeItem("useryoutube");
    history("/")
  }

  return (
    <>
    <div>Details</div>
    <Button onClick={userlogout}>LogOut</Button>
    </>
  )
}

export default Details