import React from 'react'
import { Context } from '../../context/GameContext'
import { calculateWinner } from '../../helpers/calculateWinner'
import { ModalWindow } from '../ModalWindow'
import './Deskboard.scss'

export const Deskboard = () => {
  const {
    deskboard,
    setDeskboard,
    xIsNext,
    setXIsNext,
    open,
    setIsOpen,
    history,
    setHistory,
    draw,
    setIsDraw,
    stepCount,
    setOWins,
    setXWins
  } = React.useContext(Context)

  const handleClick = (e) => {
    const current = xIsNext ? 'x' : 'o'
    if (!e.target.classList.contains('active')) {
      deskboard[+e.target.id] = current
      setXIsNext(!xIsNext)
    }
    setHistory(prev => [...prev, deskboard.slice(0, +e.target.id + 1)])
  }

  const res = calculateWinner(deskboard)

  React.useEffect(() => {
    if (res === 'o' || res === 'x') {
      setIsOpen(true)
      if (res === 'o') {
        setOWins(prev => prev + 1)
      }
      if (res === 'x') {
        setXWins(prev => prev + 1)
      }
    }
  }, [res, setIsOpen, setOWins, setXWins])

  
  React.useEffect(() => {
    if (stepCount === 9 && res === null) {
      setIsDraw(true)
      setIsOpen(true)
    }
  }, [res, stepCount, setIsDraw, setIsOpen])

  const gameStartHandler = () => {
    deskboard.fill(null)
    setIsOpen(false)
    setXIsNext(true)
    setIsDraw(false)
    setHistory([])
  }

  return (
    <div className="deskboard">
      <div className="deskboard__items">
        {deskboard.map((cell, i) => (
          <div
            className={`deskboard__items-col ${(cell !== null && cell) || ''} ${(cell && 'active') || ''}`}
            key={i.toString()}
            role="button"
            onClick={handleClick}
            id={i}
          />
        ))}
      </div>
      <ModalWindow winner={res} open={open} onClose={gameStartHandler} />
    </div>
  )
}
