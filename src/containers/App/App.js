import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import "./App.css";
import { PlayButton } from "../../components/PlayButton/playButton";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <PlayButton />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
