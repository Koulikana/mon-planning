import React from 'react';

class DayOptions extends React.Component {
  constructor() {
    super();

    this.state = {
      dayOptions: [],
    };
  }

  componentDidMount() {
    fetch('https://localhost:44368/planning/DaysOption/')
      .then(respose => respose.json())
      .then(data => {
        const dayOptions = data.map(option => ({
          option: option.option,
          value: option.value,
        }));
        this.setState({ dayOptions: dayOptions });
      });
  }

  render() {
    return (
      <select className="options">
        {this.state.dayOptions.map(option => (
          <option value={option.value} key={option.value}>
            {option.option}
          </option>
        ))}
      </select>
    );
  }
}

export default DayOptions;
