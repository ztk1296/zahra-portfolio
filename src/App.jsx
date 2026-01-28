import { RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import { routers } from "./routes/AppRoutes";

export default function App() {
  return <RouterProvider router={routers} />;
}


