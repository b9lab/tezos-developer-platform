import React from 'react';
import styled from '@emotion/styled';
import {breakpoints} from 'gatsby-theme-apollo-core';
//import { H5P } from 'h5p-standalone';

export default class H5PContainer extends React.Component {
  

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("component did mount");
    
    const { H5P } = require('h5p-standalone');
    const el = document.getElementById('h5p_container');
    
    const h5pLocation = this.props.location;

    const options = {
      frameJs: '/js/h5p/frame.bundle.js',
      frameCss: '/css/h5p/h5p.css'
    };

    const h5p = new H5P(el, h5pLocation, options);
    
    console.log("created");
  }

  render() {
    const H5PContainerWrapper = styled.div({
      background: "#cccccc",
      width: "100%",
      minHeight: "300px"
    });

    return (
      <H5PContainerWrapper className="h5p-container-wrapper" id="h5p_container">
        {this.props.children}  
      </H5PContainerWrapper>
    );
  }
}
