import React from 'react';
import styled from '@emotion/styled';
import {IconProceed} from '@apollo/space-kit/icons/IconProceed';
import {breakpoints} from 'gatsby-theme-apollo-core';
import {colors} from '@apollo/space-kit/colors';
import Logo from '../../gatsby-theme-apollo-core/components/logo.js'

const Container = styled.a({
  display: 'flex',
  flexShrink: 0,
  width: 240,
  [breakpoints.lg]: {
    width: 'auto',
    marginRight: 0
  },
  [breakpoints.md]: {
    display: 'none'
  }
});

const HeaderLogo = styled.img({
  margin: 0,
  height: 40
})

const StyledLink = styled.a({
  display: 'flex',
  alignItems: 'center',
  color: colors.indigo.dark,
  lineHeight: 2,
  textDecoration: 'none',
  ':hover': {
    color: colors.indigo.darker
  }
});

const StyledIcon = styled(IconProceed)({
  height: '0.75em',
  marginLeft: '0.5em'
});

export default function HeaderButton() {
  return (
    <Container href="/">
      <Logo />
    </Container>
  );
}
