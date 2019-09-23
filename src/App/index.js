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
        month: '',
        code: 0,
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      years: [],
      selectedYear: 0,
    };
  }

  componentDidMount() {
    fetch('https://localhost:44368/planning/months')
      .then(response => response.json())
      .then(data => {
        const months = data.map(month => ({
          month: month.month,
          code: month.monthId,
          daysCount: month.daysCount,
        }));
        this.setState({ months: months });
      });

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const currentMonthDaysCount = new Date(currentYear, currentMonth + 1, 0).getDate();
    var options = { month: 'long' };

    this.setState({
      selectedMonth: {
        month: new Intl.DateTimeFormat('fr-FR', options).format(new Date()),
        code: currentMonth + 1,
        days: this.setDays(currentMonthDaysCount),
      },
      selectedYear: currentYear,
    });
  }

  setDays(daysCount) {
    var days = [];
    var day = 1;

    while (day < daysCount + 1) {
      days.push(day);
      day++;
    }

    return days;
  }

  selectMonth = event => {
    const selectedMonth = event.target.innerText;

    for (let i = 0; i < this.state.months.length; i++) {
      if (this.state.months[i].month === selectedMonth) {
        const days = this.setDays(this.state.months[i].daysCount);
        console.log(this.state.months[i].days);
        console.log(days);

        this.setState({
          selectedMonth: {
            month: this.state.months[i].month,
            code: this.state.months[i].code,
            days: days,
          },
        });
      } else {
        console.log('pas ok');
      }
    }
  };

  selectYear = event => {
    const selectedYear = event.target.innerText;
    this.setState({
      selectedYear: selectedYear,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SelectYears action={this.selectYear} />
        <NavigationBar action={this.selectMonth} months={this.state.months} />
        <Calendar selectedMonth={this.state.selectedMonth} selectedYear={this.state.selectedYear} />
      </div>
    );
  }
}

export default App;
