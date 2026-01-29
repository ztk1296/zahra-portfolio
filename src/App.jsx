import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./routes/AppRoutes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/globalTheme";
import AppTheme from "./styles/appTheme";

export default function App(props) {
  return (
    // <ThemeProvider theme={theme}>
    <AppTheme {...props}>
      <RouterProvider router={routers} />
    </AppTheme>
    // </ThemeProvider>
  );
}
