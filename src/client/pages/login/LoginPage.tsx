import { Box, Button, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { AuthContainer, AuthElementContainer } from 'client/components/auth';

export const LoginPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
    >
      <AuthContainer>
        <AuthElementContainer marginTop={0}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            className="w-100"
          />
        </AuthElementContainer>

        <AuthElementContainer marginTop={4}>
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            className="w-100"
          />
        </AuthElementContainer>

        <AuthElementContainer marginTop={4}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="w-100"
          >
            Log In
          </Button>
        </AuthElementContainer>

        <AuthElementContainer marginTop={4}>
          <Link to="/">Forgot your password?</Link>
        </AuthElementContainer>
      </AuthContainer>
    </Box>
  );
};
