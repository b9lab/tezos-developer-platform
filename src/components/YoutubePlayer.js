import React from 'react';
import styled from '@emotion/styled';

const YoutubePlayerWrapper = styled.div({
    height: "30vw",
    width: "100%",
});

export default function YoutubePlayer(props) {
  const videoUrl = "https://www.youtube.com/embed/" + props.videoId;

  return (
    <YoutubePlayerWrapper>
        <iframe
            src={videoUrl}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            width="100%"
            height="100%"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    </YoutubePlayerWrapper>
  );
}
