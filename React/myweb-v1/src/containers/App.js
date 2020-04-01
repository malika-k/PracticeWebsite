import React, { Component } from 'react';
import classes from './App.module.css';

import Logo from '../elements/Logo/Logo';

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
