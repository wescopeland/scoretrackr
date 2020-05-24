import { Typography, styled } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Container, Col, Row } from "reactstrap";

const StyledAppName = styled(Typography)({
  letterSpacing: "0.6rem",
  textTransform: "uppercase",
  textAlign: "center"
});

const StyledDescription = styled(Typography)({
  letterSpacing: "0.1rem",
  textAlign: "center"
});

export const Header = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col className="p-3">
          <StyledAppName variant="h4" className="p-2">
            Scoretrac.kr
          </StyledAppName>

          <StyledDescription>
            {t("common:header.description")}
          </StyledDescription>
        </Col>
      </Row>
    </Container>
  );
};
