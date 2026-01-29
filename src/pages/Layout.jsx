import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { Container, CssBaseline } from "@mui/material";
import Latest from "../components/Latest/Lastest";
import Footer from "../components/Footer/Footer";
import MainContent from "../components/MainContent/MainContent";

function Layout() {
  return (
    <div>
      <CssBaseline enableColorScheme />
      <NavBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <MainContent />

        <Latest />
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
