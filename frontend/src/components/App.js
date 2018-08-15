import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer />
      </div>
    );
  }
}

export default App;
