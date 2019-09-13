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

  displayDayTxt = dayNbr => {
    const date = new Date(this.props.selectedYear, this.props.selectedMonth - 1, dayNbr);
    var options = { weekday: 'short' };
    const dayTxt = new Intl.DateTimeFormat('fr-FR', options).format(date);
    return dayTxt;
  };

  render() {
    return (
      <thead>
        <tr>
          <th colSpan="2">Jours du mois</th>
          {this.props.days.map(day => (
            <StyledTh colSpan="2" key={day}>
              {`${this.displayDayTxt(day)} ${day}`}
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
