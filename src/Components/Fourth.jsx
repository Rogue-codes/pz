import React from 'react'
import { FaMinus } from 'react-icons/fa';

function Fourth() {
  return (
    <section className='fourth'>
        <div className="left">
            <div className="card">
                <div className="circle">
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="txt">
                    <p>Great app to send and receive money across a number of countries, highly recommended as a money transfer alternative.</p>
                    <span>Amai Rosie, 6 June, 2020</span>
                </div>
            </div>

            <div className="card">
                <div className="circle">
                    <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
                <div className="txt">
                    <p>PayZone cash is the coolest app ever. Packed with great features, very reliable, fast transactions, easy to use and cool discounts.</p>
                    <span>Sunday Adeniyi, 9 Aug, 2020</span>
                </div>
            </div>
        </div>

        <div className="right">
            <h1>Trusted & Secure</h1>
            <p>Join over 4 million people securely sending and receiving money with PayZone.</p>
            <span>
                <FaMinus/> 
                Get started with PayZone
            </span>
        </div>
    </section>
  )
}

export default Fourth