import React from 'react';

class TableRow extends React.Component {
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
        test
      </td>
    ));
  };

  render() {
    return (
      <tr className="Employee">
        <th colSpan="2">{`${this.props.firstName} ${this.props.lastName}`}</th>
        {this.state.days.map(day => this.renderPeriodeCells(day))}
      </tr>
    );
  }
}

export default TableRow;
