import { Box, Button, TextField } from '@material-ui/core';
import React from 'react';

import { AuthContainer, AuthElementContainer } from 'client/components/auth';

export const SignUpPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
    >
      <AuthContainer>
        <form>
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
              id="username"
              label="Username"
              variant="outlined"
              className="w-100"
            />
          </AuthElementContainer>

          <AuthElementContainer marginTop={4}>
            <TextField
              id="new-password"
              name="new-password"
              autoComplete="new-password"
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
              Submit
            </Button>
          </AuthElementContainer>
        </form>
      </AuthContainer>
    </Box>
  );
};
