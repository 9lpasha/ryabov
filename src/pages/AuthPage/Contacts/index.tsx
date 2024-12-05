import { Box, Typography } from "@mui/material";

export const Contacts = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      width: "100%",
      padding: 2,
    }}
  >
    <Typography sx={{ color: (theme) => theme.palette.customColors.greyText, fontSize: 14 }}>
      © 2024 MIND MONEY LIMITED
    </Typography>
    <Box
      sx={{
        color: (theme) => theme.palette.customColors.greyText,
        fontSize: 14,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      Have some issue?{" "}
      <Typography sx={{ fontSize: 14, textAlign: "end" }}>
        Wrote us{" "}
        <a href="info@mind-money.eu" style={{ color: "#526ED3", textDecoration: "none" }}>
          info@mind-money.eu
        </a>
      </Typography>
    </Box>
  </Box>
);
