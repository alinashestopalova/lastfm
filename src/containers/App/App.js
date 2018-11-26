import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import "./App.css";
import { PlayButton } from "../../components/PlayButton/playButton";
import axios from "axios";
import List from "../../components/List/List";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const apikey = '2e6aea0b83ca1a01fd8b7c2b3c12e707';

class App extends Component {


    componentDidMount(){
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apikey}&format=json`)
            .then(response => console.log(response.data.artists.artist))
    }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <PlayButton />
            <List>
                <ArtistCard/>
            </List>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
