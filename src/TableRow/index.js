import React from 'react';

class TableRow extends React.Component {
  render() {
    return (
      <tr className="Employee">
        <th>{`${this.props.firstName} ${this.props.lastName}`}</th>
      </tr>
    );
  }
}

export default TableRow;
