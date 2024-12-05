import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import "@fontsource/inter";

export const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    customColors: {
      lightText: "white",
      darkText: "#101112",
      greyText: "#A6ABB0",
      greenText: "#51D85E",
      redText: "#EF4E57",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "20px 14px 9px",

          "&:-webkit-autofill": {
            boxShadow: "0 0 0 100px #e9f2ff inset",
            transition: "boxShadow 5000s ease-in-out 0s !important",
            "-webkit-text-fill-color": "black",
            "caret-color": "black",
          },
          "&:-webkit-autofill:hover": {
            boxShadow: "0 0 0 100px #e9f2ff inset",
          },
        },
        root: {
          cursor: "pointer",

          "& legend": {
            display: "none",
          },
          "& fieldset": {
            border: "1px solid #DCDEE0",
            borderRadius: "8px",
            height: 52,
            top: 0,
          },
          "&.Mui-focused fieldset": {
            border: "1px solid #526ED3",
            borderWidth: "1px !important",
          },
          ":hover fieldset": {
            borderColor: "grey !important",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&[data-shrink=true]": {
            transform: "translate(14px, 3px) scale(0.75)",
            color: "#A6ABB0",
          },
          "&[data-shrink=false]": {
            transform: "translate(14px, 15px)",
            color: "#A6ABB0",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 8,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: { padding: 0 },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 12,

          "& button": {
            borderRadius: 12,

            "& .MuiTouchRipple-root": {
              display: "none",
            },
          },
          "& button[aria-pressed=true]": {
            backgroundColor: "#FFFFFF",
            borderRadius: 12,

            "&:hover": {
              backgroundColor: "#FFFFFF",
            },
          },
          "& button:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginTop: 8,
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      lightText: string;
      darkText: string;
      greyText: string;
      greenText: string;
      redText: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      lightText?: string;
      darkText?: string;
      greyText?: string;
      greenText?: string;
      redText?: string;
    };
  }
}
