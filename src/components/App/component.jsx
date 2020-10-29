import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "../header";
import HomePage from "../Home";
import CharacterGeneration from "../CharacterGeneration";
import GameSheet from "../GameSheet";

import { fetchSignedIn } from "../../fetch";

import "../../stylesheet/styles.css";
import "./App.css";

const App = ({ currentView }) => {
  const [signedIn, setSignedIn] = useState(false);

  React.useEffect(() => {
    const checkUserSignedIn = async () => {
      const res = await fetchSignedIn();

      if (res.message === "Signed In") {
        setSignedIn(true);
      }
    };

    checkUserSignedIn();
  }, []);

  const handleSetSignedIn = () => {
    setSignedIn(!signedIn);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Header signedIn={signedIn} handleSetSignedIn={handleSetSignedIn} />
      </header>
      <div className='App-body'>
        {currentView === "home" && <HomePage />}
        {(currentView === "createChar" || currentView === "printRefSheet") && (
          <CharacterGeneration />
        )}
      </div>
      {currentView === "printRefSheet" && <GameSheet />}
    </div>
  );
};

App.propTypes = {
  currentView: PropTypes.string,
};

export default App;
