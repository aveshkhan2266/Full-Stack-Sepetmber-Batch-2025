import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Service() {

  const navigate=useNavigate();

  function back(){
    navigate(-1);
  }
  return (
    <div>
      <h1>Service</h1>

      <button className='btn btn-dark m-3' onClick={back}>Back</button>
    </div>
  )
}
