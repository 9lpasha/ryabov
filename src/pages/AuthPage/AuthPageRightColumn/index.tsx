import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const AuthPageRightColumn = () => (
  <Grid
    size={{ md: 6 }}
    sx={{
      display: {
        md: "flex",
        xs: "none",
      },
    }}
    style={{
      background: "#526ED3 url('lines.png') center / cover no-repeat",
      flexDirection: "column",
      padding: "150px 130px 0 64px",
      position: "relative",
      overflow: "hidden",
      height: "100vh",
    }}
  >
    <Typography variant="h4" sx={{ color: (theme) => theme.palette.customColors.lightText }} gutterBottom>
      Start Investing in global stock markets
    </Typography>
    <Typography variant="body1" sx={{ color: (theme) => theme.palette.customColors.lightText }}>
      Mind.money.eu is the easiest place to invest your money and become a rich guy. <br />
      Sign up and get started today free trial for 14 days!
    </Typography>

    <Box sx={{ margin: "20vh 0 0 10vw" }}>
      <Box sx={{ position: "relative" }}>
        <img src="workspace.png" alt="workspace" />
        <Box sx={{ position: "absolute", top: "20vh", left: -50 }} width={100} height={100}>
          <img
            src="woman.png"
            alt="woman"
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "white url('money.png') center / cover no-repeat",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </Box>
        <Box sx={{ position: "absolute", left: "20vw", top: -50 }} width={100} height={100}>
          <img
            src="man.png"
            alt="man"
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "white url('bar_chart.png') center / cover no-repeat",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  </Grid>
);
