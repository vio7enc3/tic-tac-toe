import React from 'react'
import { Deskboard } from './components/Deskboard'
import { MainLayout } from './components/MainLayout'

function App() {
  return (
    <>
      <MainLayout>
        <Deskboard />
      </MainLayout>
    </>
  );
}

export default App;
