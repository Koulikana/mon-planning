import React from 'react';

class SelectYears extends React.Component {
  render() {
    return (
      <div>
        Année :{' '}
        <select>
          <option>2019</option>
          <option>2020</option>
        </select>
      </div>
    );
  }
}

export default SelectYears;
