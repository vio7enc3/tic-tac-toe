import React from 'react'

export const Context = React.createContext(null)

export const GameContext = ({ children }) => {
  const [deskboard, setDeskboard] = React.useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = React.useState(true)
  const [open, setIsOpen] = React.useState(false)

  const [history, setHistory] = React.useState([])
  const stepCount = history.length

  const [draw, setIsDraw] = React.useState(false)
  const [xWins, setXWins] = React.useState(0)
  const [oWins, setOWins] = React.useState(0)

  return (
    <Context.Provider
      value={{
        deskboard,
        setDeskboard,
        xIsNext,
        setXIsNext,
        open,
        setIsOpen,
        history,
        setHistory,
        stepCount,
        draw,
        setIsDraw,
        xWins,
        setXWins,
        oWins,
        setOWins
      }}
    >
      {children}
    </Context.Provider>
  )
}
