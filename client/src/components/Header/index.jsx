import React from 'react'
import './Header.scss'

import logo from '../../assets/icons/close.svg'
import { Burger } from '../Burger'
import { Context } from '../../context/GameContext'

export default function Header() {
  const { xWins, oWins, stepCount } = React.useContext(Context)
  return (
    <header className="header">
      <div className="header__burger">
        <Burger />
      </div>
      <div className="header__logo">
        <img src={logo} alt=""/>
      </div>
      <div className="header__stats">
        <div className="header__stats-count">
          Step:
          {' '}
          {stepCount}
        </div>
        <div className="header__stats-total">
          X : O
          {'  -  '}
          <span>{`${xWins} : ${oWins}`}</span>
        </div>
      </div>
    </header>
  )
}
