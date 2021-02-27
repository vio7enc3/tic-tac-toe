import React from 'react'
import { calculateWinner } from '../../helpers/calculateWinner'
import './Deskboard.scss'


const arr = Array(9).fill(null)

export const Deskboard = () => {
  const [xIsNext, setXIsNext] = React.useState(true)

  const handleClick = (e) => {
    const current = xIsNext ? 'x' : 'o'
    if (!e.target.classList.contains('active')) {
      e.target.classList.add(`${xIsNext ? 'x' : 'o'}`)
      arr[+e.target.id] = current
      setXIsNext(!xIsNext)
    }
    e.target.classList.add('active')
  }
  console.log(arr);

  const res = calculateWinner(arr)
  console.log(res);

  return (
    <div className="deskboard">
      <div className="deskboard__items">
        {arr.map((cell, i) => (
          <div
            className="deskboard__items-col"
            key={i.toString()}
            role="button"
            onClick={handleClick}
            id={i}
          />
        ))}
      </div>
    </div>
  )
}
