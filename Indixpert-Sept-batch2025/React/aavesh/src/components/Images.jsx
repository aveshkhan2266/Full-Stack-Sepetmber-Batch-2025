import React from 'react'
import buggati from '../assets/images/car1.jpg'
import ferrari from '../assets/images/car2.jpg'
export default function Images() {
  return (
    <div>
        <img src={buggati} alt="" width={"400px"}/>
        <img src={ferrari} alt="" width={"400px"}/>
        <img src={buggati} alt="" width={"400px"}/>
        <img src={buggati} alt="" width={"400px"}/>
        <img src={buggati} alt="" width={"400px"}/>
        <img src={buggati} alt="" width={"400px"}/>
    </div>
  )
}
