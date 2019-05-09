import styled from 'styled-components';
import { lightCyan, powderBlue } from '../colors';

export const StyledTd = styled.td({
  backgroundColor: powderBlue,
  color: lightCyan,
  border: '1px solid black',
});

export const StyledTh = styled.th({
  backgroundColor: lightCyan,
  borderColor: powderBlue,
  border: '1px solid black',
});
