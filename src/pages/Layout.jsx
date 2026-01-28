import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { Container } from "@mui/material";

function Layout() {
  return (
    <div>
      <NavBar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;
