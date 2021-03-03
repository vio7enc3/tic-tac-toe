import React from "react";
import { Deskboard } from "./components/Deskboard";
import { MainLayout } from "./components/MainLayout";
import { GameContext } from "./context/GameContext";

function App() {
  return (
    <>
      <GameContext>
        <MainLayout>
          <Deskboard />
        </MainLayout>
      </GameContext>
    </>
  );
}

export default App;
