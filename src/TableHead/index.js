import React from 'react';

class TableHead extends React.Component {
  constructor() {
    super();

    this.state = {
      month: '',
      code: 0,
      days: [],
      morning: true,
      periodes: ['AM', 'PM'],
    };
  }

  componentDidMount() {
    fetch('https://localhost:44368/planning/calendar/4')
      .then(response => response.json())
      .then(data => {
        this.setState({ month: data.month, code: data.code, days: data.days });
      });
  }

  renderPeriodeCells = day => {
    return this.state.periodes.map(periode => (
      <td colSpan="1" key={`${periode}${day}`}>
        {periode}
      </td>
    ));
  };

  render() {
    return (
      <thead>
        <tr>
          <th colSpan="2">Jours du mois</th>
          {this.state.days.map(day => (
            <th colSpan="2" key={day}>
              {day}
            </th>
          ))}
        </tr>
        <tr>
          <th colSpan="2">Employés</th>
          {this.state.days.map(day => this.renderPeriodeCells(day))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
