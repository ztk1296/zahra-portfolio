import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "subtitle1",
          subtitle2: "subtitle2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});
