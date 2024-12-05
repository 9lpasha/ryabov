import { styled, ToggleButton, ToggleButtonGroup, toggleButtonGroupClasses } from "@mui/material";
import { useState } from "react";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]: {
    marginLeft: -1,
    borderLeft: "1px solid transparent",
  },
}));

export const Styled = { StyledToggleButtonGroup };

export const AuthToggle = () => {
  const [alignment, setAlignment] = useState("signIn");

  const handleChangeTab = (_: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <StyledToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChangeTab}
      aria-label="text alignment"
      sx={{
        display: "inline-flex",
        backgroundColor: "#F4F4F4",
      }}
    >
      <ToggleButton value="signIn" sx={{ textTransform: "none" }}>
        Sign In
      </ToggleButton>
      <ToggleButton value="login" sx={{ textTransform: "none" }}>
        Login
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
};
