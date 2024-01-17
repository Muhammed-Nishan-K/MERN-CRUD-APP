import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'

export default function Header() {
  return (
    <>
        <header>
            <div className="header-main">
                <img className='img' src={logo} alt="" />
            </div>
        </header>
        
    </>
  )
}
