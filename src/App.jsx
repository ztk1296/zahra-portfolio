import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./routes/AppRoutes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/globalTheme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}
