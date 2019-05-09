import React from 'react';
import Header from '../Header';
import Calendar from '../Calendar';
import NavigationBar from '../NavigationBar';
import SelectYears from '../SelectYears';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      months: [],
      selectedMonth: {
        month: 'Avril',
        code: 3,
        days: [],
      },
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
    for (let i = 0; i < this.state.months.length; i++) {
      if (this.state.months[i].month === selectedMonth) {
        this.setState({
          selectedMonth: {
            month: this.state.months[i].month,
            code: this.state.months[i].code,
            days: this.state.months[i].days,
          },
        });
      } else {
        console.log('pas ok');
      }
    }
  };

  render() {
    return (
      <div>
        <Header />
        <SelectYears />
        <NavigationBar action={this.selectMonth} months={this.state.months} />
        <Calendar selectedMonth={this.state.selectedMonth} />
      </div>
    );
  }
}

export default App;
