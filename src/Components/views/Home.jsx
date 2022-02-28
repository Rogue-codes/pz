import React, { useState } from 'react'
import {animated, useSpring} from 'react-spring'
// import { FaApple, FaPlay } from 'react-icons/fa';
import Second from './Second';
import Slick from '../Slick';
import Third from '../Third';
import Fourth from '../Fourth';
import Fifth from '../Fifth';
import Sixth from '../Sixth';
import Seventh from '../Seventh';
import Eight from '../Eight';
import Ninth from '../Ninth';
import Tenth from '../Tenth';
import Eleventh from '../Eleventh';

function Home() {
  const [flip, set] = useState(false)
  const { number, numb, mili, fourty } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0, numb: 0, mili: 0, fourty: 0 },
    number: 4,
    numb: 80000,
    mili: 0.03,
    fourty: 40000,
    delay: 3000,
    // config: config.molasses,
    onRest: () => set(flip),
  })
  return (
    <>
        <main className='first'>  
          <div className="left">
              <h1>Move Your <br /> Money Freely</h1>
              <p>Send and receive money across Africa the fast and easy <br /> way. Enjoy free transfers and the lowest cross-border rates.</p>
              <div className="input">
                <input type="text" placeholder='Your phone number' />
                <button>Download the app</button>
              </div>
          </div>
          <div className="right">

          </div>  
          <div className="hello">
            <p>PayZone  key figures</p>
            <div className='mil'>
            <animated.span className='animate'>{number.to(n => Math.floor(n))}</animated.span> <span>million Users</span>
            </div> 
            <div className='mil'>
            <animated.span className='animate'>{fourty.to(n => Math.floor(n))}</animated.span> <span>New Users a day</span>
            </div> 
            <div className='mil'>
              <animated.span className='animate'>{mili.to(n => n.toFixed(2))}</animated.span> <span>Average Transaction Time</span>
            </div>
            <div className='mil'>
              <animated.span className='animate'>{numb.to(n => Math.floor(n))}</animated.span> <span>Transactions Per Day</span> 
            </div>
          </div>
        </main>
        <Second/>
        <Slick/>
        <Third/>
        <Fourth/>
        <Fifth/>
        <Sixth/>
        <Seventh/>
        <Eight/>
        <Ninth/>
        <Tenth/>
        <Eleventh/> 
    </>
  )
}

export default Home