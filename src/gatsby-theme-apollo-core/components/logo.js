import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div({
  display: 'flex'
});

export default function Logo() {
  return (
    <Wrapper>
      <img src={'/tezos-logo.png'} alt="Tezos Logo" height="42" />
    </Wrapper>
  );
}

