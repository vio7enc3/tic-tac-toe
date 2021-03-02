import React from 'react'
import './Footer.scss'

import logo from '../../assets/rs_school_js.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__logo" href="https://rs.school/js/">
        <img src={logo} alt="RSSchool" />
      </a>
      <a href="https://github.com/vio7enc3" className="footer__name">
        Nikita Sakerin
      </a>
    </footer>
  )
}
