import React from 'react';
import TableRow from '../TableRow';

class TableBody extends React.Component {
  constructor() {
    super();

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    fetch('https://localhost:44368/planning/employees')
      .then(response => response.json())
      .then(data => {
        const employees = data.map(employee => ({
          matricule: employee.matricule,
          firstName: employee.firstName,
          lastName: employee.lastName,
          cardUrl: `https://localhost:44368/planning/employees/${employee.matricule}`,
        }));
        this.setState({ employees: employees });
      });
  }

  render() {
    return (
      <tbody>
        {this.state.employees.map(employee => (
          <TableRow
            firstName={employee.firstName}
            lastName={employee.lastName}
            key={employee.matricule}
            days={this.props.days}
          />
        ))}
      </tbody>
    );
  }
}

export default TableBody;
