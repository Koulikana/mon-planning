import React from 'react';
import { StyledNav, StyledNavigationBar, StyledOl, StyledLi, StyledButton } from './styles';

class NavigationBar extends React.Component {
  render() {
    return (
      <StyledNavigationBar>
        <StyledNav className="mois">
          <StyledOl>
            <StyledLi>
              <StyledButton>Précédent</StyledButton>
            </StyledLi>
            {this.props.months.map(month => (
              <StyledLi key={month.code}>
                {' '}
                <StyledButton onClick={this.props.action}>{month.month}</StyledButton>
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
