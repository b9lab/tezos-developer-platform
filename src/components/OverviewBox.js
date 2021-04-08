import React from 'react';
import styled from '@emotion/styled';
import {breakpoints} from 'gatsby-theme-apollo-core';
import IconArrow from "../assets/icon-arrow-right.svg"



const OverviewBoxWrapper = styled.div({
  display: "flex",
  borderBottom: "1px solid #EDEDED",
	marginBottom: "40px",
  paddingBottom: "40px",
	marginTop: "40px",
  [breakpoints.md]: {
		flexDirection: "column-reverse"
  }
});

const ContentLeft = styled.div({
  width: "60%",
	paddingRight: "5%",
  [breakpoints.md]: {
    width: "100%",
		maxWidth: "unset"
  }
});

const ContentFloating = styled.div({
  width: "100%",
	paddingRight: "5%",
  [breakpoints.md]: {
    width: "100%",
		maxWidth: "unset"
  }
});

const Title = styled.h3({
});

const Text = styled.p({
});

const ContentRight = styled.div({
});

const Link = styled.a({
  color: "#DD4F52",
  fontWeight: 700,
  textDecoration: "none",
  ":hover": {
    opacity: 0.8
  }
});

const LinkImg = styled.img({
  display: "inline-block !important",
  marginBottom: "-3px",
  marginLeft: "10px"
});

const ImgRightContainer = styled.div({
  width: "40%",
  maxWidth: "350px",
  [breakpoints.md]: {
    width: "100%",
		maxWidth: "unset"
  }
});

const ImgRight = styled.img({
});

const ImgFloating = styled.img({
  float: "right",
  padding: "0 3%",
  width: "41% !important",
  marginTop: "50px"
});

export default function OverviewBox(props) {
  if (props.floating) {
    return (
      <OverviewBoxWrapper>
        <ContentFloating>
          <ImgFloating src={props.imgSrc}></ImgFloating>
          <Title>{props.title}</Title>
          {props.children}
          {props.linkHref && (
            <Link className="action-link" href={props.linkHref}>
              {props.linkText}
              <LinkImg src={IconArrow}>
              </LinkImg>
            </Link>
          )}
        </ContentFloating>
      </OverviewBoxWrapper>
    );
  } else {
    return (
      <OverviewBoxWrapper>
        <ContentLeft>
          <Title>{props.title}</Title>
          {props.children}
          {props.linkHref && (
            <Link className="action-link" href={props.linkHref} target={props.external ? "_blank" : ""}>
              {props.linkText}
              <LinkImg src={IconArrow}>
              </LinkImg>
            </Link>
          )}
        </ContentLeft>
        <ImgRightContainer>
          <ImgRight src={props.imgSrc}></ImgRight>
        </ImgRightContainer>
      </OverviewBoxWrapper>
    );
  }

}
