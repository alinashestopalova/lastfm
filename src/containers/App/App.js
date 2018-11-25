import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import "./App.css";
import { ArtistBlock } from "../../modules/ArtistBlock/artistBlock";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ArtistBlock />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
