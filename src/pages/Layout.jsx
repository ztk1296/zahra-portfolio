import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "./Home";

function Layout() {
  return (
    <div>
      <NavBar />
      <div sx={{ p: 10 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
