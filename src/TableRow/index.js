import React from 'react';
import SelectOptions from '../SelectOptions';
import { StyledTh, StyledTr } from './styles';

class TableRow extends React.Component {
  constructor() {
    super();

    this.state = {
      periodes: ['AM', 'PM'],
    };
  }

  renderPeriodeCells = day => {
    return this.state.periodes.map(periode => (
      <td colSpan="1" key={`${periode}${day}`}>
        <SelectOptions />
      </td>
    ));
  };

  render() {
    return (
      <StyledTr className="Employee">
        <StyledTh colSpan="2">{`${this.props.firstName} ${this.props.lastName}`}</StyledTh>
        {this.props.days.map(day => this.renderPeriodeCells(day))}
      </StyledTr>
    );
  }
}

export default TableRow;
