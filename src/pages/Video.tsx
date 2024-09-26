import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PaddedComponent from '../components/MyComponent/PaddedComponent/PaddedComponent';
import Row from '../common/Row';
import Column from '../common/Column';
import VideoWrapper from '../components/VideoWrapper';
import StyledIframe from '../components/StyledIframe';

const Video: React.FC = () => (
  <PaddedComponent>
    <Row>
      <Column>
        <h1>Video Page</h1>
        <VideoWrapper>
          <StyledIframe
            src="https://www.youtube.com/embed/-eGM-FN0n9Y"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></StyledIframe>
        </VideoWrapper>
        <Button
          variant="contained"
          color="primary"
          style={{ width: '100%' }}
          component={Link}
          to="/"
        >
          Go to Home Page
        </Button>
      </Column>
    </Row>
  </PaddedComponent>
);

export default Video;


