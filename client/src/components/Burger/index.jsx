import React from 'react'
import './Burger.scss'

export const Burger = () => {
  const [open, setOpen] = React.useState(false)

  const openHandler = () => {
    setOpen(!open)
  }
  return (
    <>
      <div onClick={openHandler} role="button" className={`burger ${open && 'active'}`}>
        <span></span>
      </div>

      <div className={`sidemenu ${open && 'active'}`}>
        <div className="sidemenu__stats">
          <span>Number of steps: 0</span>
          <div className="sidemenu__stats-count">
            <div className="sidemenu__stats-count--left">
              X's Wins: 0
          </div>
            <div className="sidemenu__stats-count--right">
              O's Wins: 0
          </div>
          </div>
        </div>
        <div className="sidemenu__history">

        </div>

      </div>
    </>
  )
}
