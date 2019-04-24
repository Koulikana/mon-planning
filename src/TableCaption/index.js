import React from 'react';

class TableCaption extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return <caption>{`${this.props.month} ${this.props.year}`}</caption>;
  }
}

export default TableCaption;
