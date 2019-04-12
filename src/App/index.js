import React from 'react';
import Header from '../Header';
import Calendar from '../Calendar';
import NavigationBar from '../NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavigationBar />
        <Calendar />
      </div>
    );
  }
}

export default App;
