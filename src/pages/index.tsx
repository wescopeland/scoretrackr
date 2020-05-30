import Head from "next/head";
import React from "react";
import { Typography } from "@material-ui/core";
import { Container, Col, Row } from "reactstrap";

import { AppBar } from "@components/AppBar";
import { Header } from "@components/Header";
import { MostRecentSubmissions } from "@components/MostRecentSubmissions";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default Home;
