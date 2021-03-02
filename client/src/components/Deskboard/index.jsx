import React from 'react'
import { calculateWinner } from '../../helpers/calculateWinner'
import { ModalWindow } from '../ModalWindow'
import './Deskboard.scss'


const arr = Array(9).fill(null)

export const Deskboard = () => {
  const [xIsNext, setXIsNext] = React.useState(true)
  const [open, setIsOpen] = React.useState(false)

  const handleClick = (e) => {
    const current = xIsNext ? 'x' : 'o'
    if (!e.target.classList.contains('active')) {
      arr[+e.target.id] = current
      setXIsNext(!xIsNext)
    }
    e.target.classList.add('active')
  }

  const res = calculateWinner(arr)

  React.useEffect(() => {
    if (res === 'o' || res === 'x') {
      setIsOpen(true)
    }
  }, [res])

  const gameStartHandler = () => {
    arr.fill(null)
    setIsOpen(false)
    setXIsNext(true)
  }
  console.log(res);

  return (
    <div className="deskboard">
      <div className="deskboard__items">
        {arr.map((cell, i) => (
          <div
            className={`deskboard__items-col ${cell}`}
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
