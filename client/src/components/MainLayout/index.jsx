import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../Footer'
import Header from '../Header'

export function MainLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>Tic Tac Toe | Nick Sakerin</title>
      </Helmet>
      <div className="app">
        <Header />
        <div className="body">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}
