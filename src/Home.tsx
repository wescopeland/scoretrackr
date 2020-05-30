import { Typography } from '@material-ui/core';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import { AppBar } from './components/AppBar';
import { Header } from './components/Header';
import { MostRecentSubmissions } from './components/MostRecentSubmissions';

export const Home = () => {
  return (
    <div>
      <Header />
      <AppBar />

      <Container className="mt-5">
        <Row>
          <Col>
            <Typography variant="h6">Most recent submissions</Typography>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <MostRecentSubmissions />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
