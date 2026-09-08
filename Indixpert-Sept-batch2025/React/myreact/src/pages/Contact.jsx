import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Contact() {

  const navigate=useNavigate();

  function goto(){
    navigate("/");
  }
  return (
    <div>
      <h3>Contact</h3> 
      <button className='btn btn-danger' onClick={goto}>Home Page</button>
    </div>
  )
}
