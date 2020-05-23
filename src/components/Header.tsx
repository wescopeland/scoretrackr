import { Typography, styled } from "@material-ui/core";
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
  return (
    <Container>
      <Row>
        <Col className="p-3">
          <StyledAppName variant="h4" className="p-2">
            Scoretrac.kr
          </StyledAppName>

          <StyledDescription>
            High Score Statistics and Permanent Historical Archive
          </StyledDescription>
        </Col>
      </Row>
    </Container>
  );
};
