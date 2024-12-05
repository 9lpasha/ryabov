import React from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AuthForm } from "forms/AuthForm";

import { AuthPageRightColumn } from "./AuthPageRightColumn";
import { AuthToggle } from "./AuthToggle";
import { Contacts } from "./Contacts";

export const AuthPage: React.FC = () => {
  return (
    <Container
      style={{
        minHeight: "100vh",
        display: "flex",
        maxWidth: "100%",
        padding: 0,
      }}
    >
      <Grid container sx={{ width: "100%" }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          overflow="auto"
          height="100vh"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 100,
            paddingTop: 36,
            paddingBottom: 36,
            flexGrow: 1,
          }}
          container
        >
          <Box>
            <img src="LogoImg.svg" alt="logo_img" style={{ marginRight: "8px" }} />
            <img src="LogoText.svg" alt="logo_text" />
          </Box>
          <Box
            width={516}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AuthToggle />

              <AuthForm />
            </Box>

            <Contacts />
          </Box>
        </Grid>

        <AuthPageRightColumn />
      </Grid>
    </Container>
  );
};
