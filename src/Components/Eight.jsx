import React from 'react'
import { FaMinus } from 'react-icons/fa';

function Eight() {
  return (
    <section className='eight'>
        <div className="left">
            <h1>Featured In</h1>
            <p>PayZone story is “chipping away” at hard problems and unlocking global opportunities.</p>
            <span>
                <FaMinus/> 
                Read more about our journey
            </span>
        </div>

        <div className="right">
            <div className="img">
            <img src="https://chippercash.com/images/home/logo__bbc.svg" alt="" />
            </div>

            <div className="img">
            <img src="https://chippercash.com/images/home/logo__the-economist.svg" alt="" />
            </div>

            <div className="img">
            <img src="https://chippercash.com/images/home/logo__apple.svg" alt="" />
            </div>
            
            <div className="img">
            <img src="https://chippercash.com/images/home/logo__forbes.svg" alt="" />
            </div>
            <div className="img">
            <img src="https://chippercash.com/images/home/logo__tc.svg" alt="" />
            </div>
            <div className="img">
            <img src="https://chippercash.com/images/home/logo__roma.svg" alt="" />
            </div>
        </div>
        
    </section>
  )
}

export default Eight