import React from 'react';
import TableCaption from '../TableCaption';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

class Calendar extends React.Component {
  constructor() {
    super();

    this.state = {
      mois: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
      annee: [2019, 2020],
    };
  }
  render() {
    return (
      <div>
        <table>
          <TableCaption mois={this.state.mois[3]} annee={this.state.annee[0]} />
          <TableHead />
          <TableBody />
        </table>
      </div>
    );
  }
}

export default Calendar;
