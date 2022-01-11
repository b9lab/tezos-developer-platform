import React from 'react';
import styled from '@emotion/styled';
import {breakpoints} from 'gatsby-theme-apollo-core';
import IconArrow from "../assets/icon-arrow-right.svg"

const Card = styled.a({
  flex: "1 1 48%",
  maxWidth: "49%",
	position: "relative",
	margin: "0 1%",
  textDecoration: "none",
	border: "1px solid #EDEDED",
  borderRadius: "8px",
  padding: "25px 20px",
  marginBottom: "30px !important",
  transition: "box-shadow 0.1s ease-in-out",
  ":hover": {
    boxShadow: "0px 0px 10px 2px rgba(100, 100, 100, .1)"
  },
  ":nth-child(odd)": {
    marginLeft: 0
  },
  ":nth-child(even)": {
    marginRight: 0
  },
  [breakpoints.smMd]: {
		display: "block",
    margin: 0,
  },
  [breakpoints.md]: {
    maxWidth: "100%"
  }
});

const ActionCardLinkText = styled.div({
  color: "#0F61FF",
	fontWeight: "700",
	textDecoration: "none",
  position: "relative",
	bottom: 0,
  marginBottom: "20px"
});

const ActionCardLinkImg = styled.img({
  height: "inherit",
	margin: "0 20px -2px",
  display: "inline-block !important",
  marginBottom: "-3px",
  marginLeft: "10px",
});

const ActionCardLinkDesc = styled.p({
  marginTop: "20px",
	marginBottom: 0,
	paddingBottom: 0,
	color: "#6C7D88"
});

export default function ActionCard(props) {
  return (
    <Card href={props.href}>
      <ActionCardLinkText>
        {props.text}
        <ActionCardLinkImg src={IconArrow}></ActionCardLinkImg>
      </ActionCardLinkText>
      <ActionCardLinkDesc>{props.desc}</ActionCardLinkDesc>
    </Card>
  );
}
