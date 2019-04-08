import React from 'react';
import TableCaption from '../TableCaption';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <table>
          <TableCaption />
          <TableHead />
          <TableBody />
        </table>
      </div>
    );
  }
}

export default Calendar;
