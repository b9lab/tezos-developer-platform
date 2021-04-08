import React from 'react';
import styled from '@emotion/styled';
import SiteLogo from '../../assets/b9lab-logo.svg';


const Wrapper = styled.div({
  display: 'flex'
});

const Title = styled.div({
  fontSize: "1.2rem",
  marginTop: 8,
  marginLeft: 17,
  textAlign: "right"
})

export default function Logo() {
  return (
    <Wrapper>
      <img src={SiteLogo} alt="B9lab Logo" height="42" />
      <Title>Tezos Developer Portal</Title>
    </Wrapper>
  );
}

