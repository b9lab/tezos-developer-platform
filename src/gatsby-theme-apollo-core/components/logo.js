import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div({
  display: 'flex'
});

const Title = styled.div({
	marginTop: 13,
  marginLeft: 17,
  textAlign: "right"
})

export default function Logo() {
  return (
    <Wrapper>
      <img src={'/img/b9lab-logo.svg'} alt="B9lab Logo" height="42" />
      <Title>Tezos Developer Portal</Title>
    </Wrapper>
  );
}

