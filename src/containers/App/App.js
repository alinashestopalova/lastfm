import React, { Component } from "react";
import "./App.css";
import { LastfmAPI } from "last.fm.api";

class App extends Component {
  componentDidMount() {
    var lfm = new LastfmAPI({
      api_key: "e0da7de5bac57ca66c3a2c2ba7bccf8a",
      secret: "	1ef82841ec0ae5ff46f0bd3de38dc724"
    });
    lfm.track.getInfo(
      {
        artist: "Poliça",
        track: "Wandering Star"
      },
      function(err, track) {
        if (err) {
          throw err;
        }
        console.log(track);
      }
    );
  }
  render() {
    return <div className="App" />;
  }
}

export default App;
