import React from 'react';
import TableCaption from '../TableCaption';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import { StyledTable } from './styles';

class Calendar extends React.Component {
  constructor() {
    super();

    this.state = {
      annee: [2019, 2020],
    };
  }
  render() {
    return (
      <div>
        <StyledTable>
          <TableCaption month={this.props.selectedMonth.month} year={this.props.selectedYear} />
          <TableHead
            days={this.props.selectedMonth.days}
            selectedMonth={this.props.selectedMonth.code}
            selectedYear={this.props.selectedYear}
          />
          <TableBody days={this.props.selectedMonth.days} />
        </StyledTable>
      </div>
    );
  }
}

export default Calendar;
