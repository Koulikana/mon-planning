import React from 'react';
import TableCaption from '../TableCaption';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

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
        <table>
          <TableCaption month={this.props.selectedMonth} year={this.state.annee[0]} />
          <TableHead />
          <TableBody />
        </table>
      </div>
    );
  }
}

export default Calendar;
