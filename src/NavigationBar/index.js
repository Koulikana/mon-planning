import React from 'react';

class NavigationBar extends React.Component {
  constructor() {
    super();

    this.state = {
      months: [],
    };
  }

  componentDidMount() {
    fetch('https://localhost:44368/planning/Calendar/')
      .then(response => response.json())
      .then(data => {
        const months = data.map(month => ({
          month: month.month,
          code: month.code,
          days: month.daysCount,
        }));
        this.setState({ months: months });
      });
  }

  render() {
    return (
      <div>
        <nav class="mois">
          <ul>
            <li>Précédent</li>
            {this.state.months.map(month => (
              <li key={month.code}>{month.month}</li>
            ))}
            <li>Suivant</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
