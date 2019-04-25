import React from 'react';
import { StyledTd, StyledTh } from './styles';

class TableHead extends React.Component {
  constructor() {
    super();

    this.state = {
      periodes: ['AM', 'PM'],
    };
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
          {this.props.days.map(day => (
            <StyledTh colSpan="2" key={day}>
              {day}
            </StyledTh>
          ))}
        </tr>
        <tr>
          <th colSpan="2">Employés</th>
          {this.props.days.map(day => this.renderPeriodeCells(day))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
