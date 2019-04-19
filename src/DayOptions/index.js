import React from 'react';

class DayOptions extends React.Component {
  render() {
    return (
      <select className="options">
        <option value="normal" />
        <option value="absent">Absent(e)</option>
        <option value="conge">Congé</option>
        <option value="deplacement">Déplacement</option>
        <option value="ferie">Férié</option>
        <option value="formation">Formation</option>
        <option value="homeOffice">Home-office</option>
        <option value="malade">Malade</option>
        <option value="reunion">Réunion</option>
        <option value="rdv">Rendez-vous</option>
        <option value="weekend">Weekend</option>
      </select>
    );
  }
}

export default DayOptions;
