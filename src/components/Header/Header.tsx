import { styled, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

const StyledAppName = styled(Typography)({
  letterSpacing: '0.8rem',
  textTransform: 'uppercase',
  textAlign: 'center'
});

const StyledDescription = styled(Typography)({
  letterSpacing: '0.1rem',
  textAlign: 'center'
});

export const Header = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col className="p-3">
          <StyledAppName variant="h4" className="p-2">
            Scoretrac.kr
          </StyledAppName>

          <StyledDescription>{t('header.description')}</StyledDescription>
        </Col>
      </Row>
    </Container>
  );
};
