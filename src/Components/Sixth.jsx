import React from 'react'
import { FaMinus } from 'react-icons/fa';

function Sixth() {
  return (
    <section className='sixth'>
        <div className="top">
            <div className="left">
                <FaMinus/> <br />
                <p>Community powered by over 3 million users, and we are just getting started.</p>
            </div>
            <div className="right">
                <div className="card">
                    <div className="img"><img src="https://www.nationsonline.org/flags_big/Ghana_lgflag.gif" alt="" /></div>
                    <p>So fast and very easy to transfer money to other countries. I love it!</p>
                    <span>App store review, 11 October, 2020</span>
                </div>
            </div>
        </div>

        <div className="bottom">
            <div className="left">
                <div className="rate">
                    <h1>4.5 <span>out of 5</span></h1>
                    <div className="img">
                        <img src="https://kudi.com/static/google-play-8ffd93c7c9842aaee1fdf52d891a0611.png" alt="" />
                    </div>

                </div>
                <div className="rate">
                    <h1>4.4 <span>out of 5</span></h1>
                    <div className="img">
                        <img src="https://kuda.com/static/app-store-9df3d746121bcf93fcdce6bff77758b5.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="card">
                        <div className="img"><img src="https://www.nationsonline.org/flags_big/Kenya_lgflag.gif" alt="" /></div>
                        <p>So fast and very easy to transfer money to other countries. I love it!</p>
                        <span>App store review, 11 October, 2020</span>
                </div>

                <div className="card">
                        <div className="img"><img src="https://www.worldometers.info/img/flags/uk-flag.gif" alt="" /></div>
                        <p>So fast and very easy to transfer money to other countries. I love it!</p>
                        <span>App store review, 11 October, 2020</span>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Sixth