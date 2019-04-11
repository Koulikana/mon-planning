import React from 'react';
import TableRow from '../TableRow';

class TableBody extends React.Component {
  constructor() {
    super();

    this.state = {
      employeesId: [],
      employeesList: [],
    };
  }

  componentDidMount() {
    fetch('https://localhost:44368/planning/employees')
      .then(response => response.json())
      .then(data => {
        const employeesId = data.map(employeId => ({
          id: employeId,
          cardUrl: `https://localhost:44368/planning/employees/${employeId}`,
        }));

        //modifier le 2eme then() pour récupérer la value des promises
        const employeesList = employeesId.map(employee =>
          fetch(employee.cardUrl)
            .then(response => response.json())
            .then(data => ({ id: data.id, firstName: data.firstName, lastName: data.lastName })),
        );

        this.setState({ employeesId: employeesId, employeesList: employeesList });
      });
  }

  render() {
    return (
      <tbody>
        {this.state.employeesId.map(employeeId => (
          <TableRow id={employeeId.id} />
        ))}
        {console.log(this.state.employeesId)}
        {console.log(this.state.employeesList)}
      </tbody>
    );
  }
}

export default TableBody;
