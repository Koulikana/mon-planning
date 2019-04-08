import React from 'react';

class TableCaption extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return <caption>{`${this.props.mois} ${this.props.annee}`}</caption>;
  }
}

export default TableCaption;
