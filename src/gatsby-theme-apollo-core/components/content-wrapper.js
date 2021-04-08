import breakpoints from '../utils/breakpoints';
import styled from '@emotion/styled';

export default styled.div({
  padding: '0px 56px',
  [breakpoints.md]: {
    padding: '0px 48px'
  },
  [breakpoints.sm]: {
    padding: '0px 32px'
  }
});
