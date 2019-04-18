import React from 'react';
import { StyledNav, StyledNavigationBar, StyledOl, StyledLi, StyledButton } from './styles';

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
      <StyledNavigationBar>
        <StyledNav class="mois">
          <StyledOl>
            <StyledLi>
              <StyledButton>Précédent</StyledButton>
            </StyledLi>
            {this.state.months.map(month => (
              <StyledLi key={month.code}>
                {' '}
                <StyledButton>{month.month}</StyledButton>
              </StyledLi>
            ))}
            <StyledLi>
              <StyledButton>Suivant</StyledButton>{' '}
            </StyledLi>
          </StyledOl>
        </StyledNav>
      </StyledNavigationBar>
    );
  }
}

export default NavigationBar;
