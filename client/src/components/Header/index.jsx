import React from 'react'
import './Header.scss'

import logo from '../../assets/icons/close.svg'
import { Burger } from '../Burger'

export default function Header() {
  return (
    <header className="header">
      <div className="header__burger">
        <Burger />
      </div>
      <div className="header__logo">
        <img src={logo} alt=""/>
      </div>
    </header>
  )
}
