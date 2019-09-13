import React from 'react';

class SelectYears extends React.Component {
  render() {
    return (
      <div>
        Année :{' '}
        <select>
          <option onClick={this.props.action}>2019</option>
          <option onClick={this.props.action}>2020</option>
        </select>
      </div>
    );
  }
}

export default SelectYears;
