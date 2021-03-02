import React from 'react'
import { Backdrop, makeStyles, Modal } from '@material-ui/core';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  text: {
    color: '#fff'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  startButton: {
    marginTop: 20,
    padding: '8px 10px',
    cursor: 'pointer',
  }
});

export const ModalWindow = ({ winner, open, onClose }) => {
  const classes = useStyles()

  return (
    <Modal
      open={open}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className={classes.container}>
        <h1 className={classes.text} tabIndex={0}>Winner is {winner && winner.toUpperCase()}</h1>
        <h3 className={classes.text}>Congratulations!</h3>
        <button
          className={classes.startButton}
          type="button"
          onClick={onClose}
        >
          Start new game
        </button>
      </div>
    </Modal>
  )
}
