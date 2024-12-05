import { styled, ToggleButtonGroup as BaseToggleButtonGroup, toggleButtonGroupClasses } from "@mui/material";

const ToggleButtonGroup = styled(BaseToggleButtonGroup)(({ theme }) => ({
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

export const Styled = { ToggleButtonGroup };
