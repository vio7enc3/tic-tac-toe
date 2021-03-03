import React from 'react'
import { Context } from '../../context/GameContext'
import './Burger.scss'

export const Burger = () => {
  const [show, setShow] = React.useState(false)
  const { history, setHistory, stepCount, xWins, oWins, setDeskboard, setXIsNext } = React.useContext(Context)

  const showHandler = () => {
    setShow(!show)
  }

  const changeMoveHandler = (e) => {
    let arr = Array(9).fill(null)
    for (let i = 0; i < history[+e.target.id].length; i ++) {
      arr[i] = history[+e.target.id][i]
    }
    console.log(arr);
    setDeskboard(arr)
    history.splice(+e.target.id, history.length - 1)
    if (+e.target.id % 2 === 0) {
      setXIsNext(false)
    } else setXIsNext(true)
    console.log(e.target.id);
  }

  console.log(history);

  return (
    <>
      <div onClick={showHandler} role="button" className={`burger ${show && 'active'}`}>
        <span></span>
      </div>

      <div className={`sidemenu ${show && 'active'}`}>
        <div className="sidemenu__stats">
          <span>
            Number of steps:
            {' '}
            {stepCount}
          </span>
          <div className="sidemenu__stats-count">
            <div className="sidemenu__stats-count--left">
              X's Wins:
              {' '}
              {xWins}
            </div>
            <div className="sidemenu__stats-count--right">
              O's Wins:
              {' '}
              {oWins}
            </div>
          </div>
        </div>
        <div className="sidemenu__history">
          <h3 className="sidemenu__history--title">
            History
          </h3>
          {history.length > 0 && history.map((item, i) => (
            <div key={i} className="sidemenu__history-col">
              <button className="sidemenu__history-col--item" id={i} onClick={changeMoveHandler}>
                Move to step
                  {' '}
                {i + 1}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
