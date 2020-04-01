import React, { Component } from 'react';
import classes from './App.module.css';

import Logo from '../elements/Logo/Logo';
import SearchBar from '../components/SearchBar/SearchBar';

class App extends Component {

  state = {
      searchBarInput: '',
      artistDisplay: {
        name: '',
        events: [],
        fb: '',
        imdb: '',
        picture: ''
      },
      loading: false,
      error: false
    }

    // Update state with current search bar input
  searchBarHandler = (e) => {
      this.setState({
        searchBarInput: e.target.value
      })
    }

    // Reset state after clicking on Logo or Try Again button
  tryAgainHandler = () => {
      this.setState({
        searchBarInput: '',
        artistDisplay: {
          name: '',
          events: [],
          fb: '',
          imdb: '',
          picture: ''
        },
        error: false
      })
    }


  fetchAPI = (api) => {
    return fetch(api).then(res => res.json());
  }

  fetchArtist = () => {

    const artist = this.state.searchBarInput;

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://rest.bandsintown.com/artists/${artist}`;

    const ARTIST_URL = API_URL + `?app_id=${API_KEY}`;
    const EVENT_URL = API_URL + `/events?app_id=${API_KEY}&date=upcoming`;


    this.setState({
      artistDisplay: {
        name: '',
        events: [],
        fb: '',
        imdb: '',
        picture: ''
      },
      loading: true,
      error: false
    }, () => {
      // Executed as callback function
      fetch(ARTIST_URL)
        .then(res => res.json())
          .then(artistdata => {
          this.fetchAPI(EVENT_URL)
            .then(eventdata => {
              //filter both event and artist data
              let output = [artistdata, eventdata];
              console.log(output);

              // If city exists, update weather details
              if(artistdata.cod === 200) {
                this.setState({
                  artistDisplay: {
                    name: '',
                    events: [],
                    fb: '',
                    imdb: '',
                    picture: ''
                  },
                  loading: false
                });
              } else {
                // If artist doesn't exist, throw error
                throw artistdata.cod
              }
            })
            .catch(err => {
              console.log(err);
              this.setState({
                loading: false,
                error: true
              });
            });
        });


      fetch(EVENT_URL)
        .then(res => res.json())
        .then(data => {

        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading: false,
            error: true
          });
        });
    });
  }


  render() {
    return (
      <div className={classes.AppWrapper}>
        <main className={classes.AppMain}>

        <header className={classes.Header} >
          <div  className={classes.LogoSize} >
            <Logo clicked={this.tryAgainHandler} />
          </div>
            <SearchBar
              value={this.state.searchBarInput}
              onChangeHandler={this.searchBarHandler}
              onClickHandler={this.fetchArtist}
              error={this.state.error} />

        </header>


        </main>
      </div>
    );
  }


}

export default App;
