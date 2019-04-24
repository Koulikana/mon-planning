import React from 'react';
import Header from '../Header';
import Calendar from '../Calendar';
import NavigationBar from '../NavigationBar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      months: [],
      selectedMonth: '',
    };
  }

  componentDidMount() {
    fetch('https://localhost:44368/planning/Calendar/')
      .then(response => response.json())
      .then(data => {
        const months = data.map(month => ({
          month: month.month,
          code: month.code,
          days: month.days,
        }));
        this.setState({ months: months });
      });
  }

  selectMonth = event => {
    const selectedMonth = event.target.innerText;
    this.setState({ selectedMonth: selectedMonth });
  };

  render() {
    return (
      <div>
        <Header />
        <NavigationBar action={this.selectMonth} months={this.state.months} />
        <Calendar selectedMonth={this.state.selectedMonth} />
      </div>
    );
  }
}

export default App;
