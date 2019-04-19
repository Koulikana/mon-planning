import React from 'react';
import { StyledTd, StyledTh } from './styles';

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
      <StyledTd colSpan="1" key={`${periode}${day}`}>
        {periode}
      </StyledTd>
    ));
  };

  render() {
    return (
      <thead>
        <tr>
          <th colSpan="2">Jours du mois</th>
          {this.state.days.map(day => (
            <StyledTh colSpan="2" key={day}>
              {day}
            </StyledTh>
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
