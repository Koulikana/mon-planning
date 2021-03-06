import React from 'react';
import { StyledDiv, StyledSelect } from './styles';

class SelectOptions extends React.Component {
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
      <StyledDiv>
        <StyledSelect className="options">
          {this.state.dayOptions.map(option => (
            <option value={option.value} key={option.value}>
              {option.option}
            </option>
          ))}
        </StyledSelect>
      </StyledDiv>
    );
  }
}

export default SelectOptions;
