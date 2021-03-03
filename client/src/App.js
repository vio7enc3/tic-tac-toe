import React from "react";
import { Deskboard } from "./components/Deskboard";
import { MainLayout } from "./components/MainLayout";
import { GameContext } from "./context/GameContext";
import {
  FullScreen,
  useFullScreenHandle,
} from "react-full-screen";

function App() {
  const handle = useFullScreenHandle()
  const fsIsActive = handle.active

  return (
    <>
      <GameContext>
        <FullScreen handle={handle}>
          <MainLayout>
            <div className="app__fullscreen" onClick={fsIsActive ? handle.exit : handle.enter}>{fsIsActive ? 'Exit Fullscreen' : 'Enter Fullscreen'}</div>
            <Deskboard />
          </MainLayout>
        </FullScreen>
      </GameContext>
    </>
  );
}

export default App;
