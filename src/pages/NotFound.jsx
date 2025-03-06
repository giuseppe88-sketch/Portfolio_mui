import React from "react";
import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Typography color={"#ffff"} variant="h3" align="center" gutterBottom>
        Page Not Found
      </Typography>
      <Typography color={"#ffff"} variant="h5" align="center" gutterBottom>
        Sorry, the page you are looking for does not exist.
      </Typography>
    </Container>
  );
};

export default NotFound;
