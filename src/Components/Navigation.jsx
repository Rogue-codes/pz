import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars, faChevronDown  } from '@fortawesome/free-solid-svg-icons'; 

function Navigation() {
  const [showMenu, setShowMenu]= useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showMenu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
      })

      const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: "translateX(-100%)"},
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
        reverse: showMenu,
        delay: 200,
         // config: config.molasses,
        // onRest: () => set(!show),
      })

  return (
    
    <nav>
      <div className="logo">
        <Link to='/'>pAYzONE</Link>
      </div>

      <div className="links">
        <Link to='/products' className='pro' onMouseOver ={ () => setShowMenu(!showMenu) }>Product <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></Link>
        <Link to='/careers'>Career</Link>
        <Link to='/feature'>Featured in</Link>
        <Link to='/support'>Support</Link>
        <Link to='/blog'>Blog</Link>
      </div>

      <span className='icon'>
        <FontAwesomeIcon icon={faBars} onClick ={ () => setShowMenu(!showMenu) } style={{color:'white'}} size="xl"></FontAwesomeIcon>
      </span>
      
      {
        maskTransitions(
          (styles, item) => item && <animated.div style={styles} className='firstAnimate' onClick={()=> setShowMenu(false)}>

          </animated.div>
        )
      }

      {
        menuTransitions(
          (styles, item) => item && <animated.div style={styles} className='animate'>
                    <div className="menu">MENU</div>
                    <div className="logo"><Link to='/' onClick={()=> setShowMenu(false)}>pAYzONE</Link></div>
                    <Link to='/products' className='pro' onClick={()=> setShowMenu(false)}>Product</Link>
                    <Link to='/careers' onClick={()=> setShowMenu(false)}>Career</Link>
                    <Link to='/feature' onClick={()=> setShowMenu(false)}>Featured in</Link>
                    <Link to='/support' onClick={()=> setShowMenu(false)}>Support</Link>
                    <Link to='/blog' onClick={()=> setShowMenu(false)}>Blog</Link>
                    <button>Download</button>
          </animated.div>
        )
      }
    </nav>


    
  )
}

export default Navigation