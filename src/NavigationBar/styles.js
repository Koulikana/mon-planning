import styled from 'styled-components';
import { blue1 } from '../colors';

export const StyledNav = styled.nav({
  color: 'purple',

  //flexDirection: 'row',
});

export const StyledNavigationBar = styled.div({});

export const StyledOl = styled.ol({
  display: 'flex',
  listStyleType: 'none',
  justifyContent: 'center',
});

export const StyledLi = styled.li({
  //display: 'inline-flex',
});

export const StyledButton = styled.button({
  backgroundColor: blue1,
  border: '1px solid #B0E0E6',
  fontSize: '13px',
  width: '80px',
});
