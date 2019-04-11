import React from 'react';
import Header from '../Header';
import Calendar from '../Calendar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Calendar />
      </div>
    );
  }
}

export default App;
