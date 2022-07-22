import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
    const [click,setClick]=useState(false)
    const handelClick = ()=> setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
            <h1 style={{marginLeft:'1rem',color:'#00d8ff'}} >Adubi</h1>
            <ul className={click ? "nav active":"nav"}>
                <li className="nav-item">
                    <a href='/'>Platform</a>
                </li>
                <li className="nav-item">
                    <a href='/'>Developers</a>
                </li>
                <li className="nav-item">
                    <a href='/'>Community</a>
                </li>
                <li className="nav-item">
                    <a href='/'>About</a>
                </li>
                <li className="nav-item">
                    <a className='btn' href="/">Use Adubi</a>
                </li>
            </ul>
            <div onClick={handelClick} className='hamburger'>
                {click ? (<AiOutlineClose className='icon'/>):(<AiOutlineMenu className='icon'/>)}
                    
            </div>
        </div>
    </div>
  )
}

export default Navbar