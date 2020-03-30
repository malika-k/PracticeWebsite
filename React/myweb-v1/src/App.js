import React from 'react';
import classes from './App.module.css';

import Header from './components/Header/Header';

function App() {
  return (
    <div className={classes.AppWrapper}>

      <main className={classes.AppMain}>
        <Header/>

      </main>
    </div>
  );
}

export default App;
