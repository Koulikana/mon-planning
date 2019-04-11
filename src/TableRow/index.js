import React from 'react';

class TableRow extends React.Component {
  render() {
    return (
      <tr className="Employee">
        <th>{this.props.id}</th>
      </tr>
    );
  }
}

export default TableRow;
