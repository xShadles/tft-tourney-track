import { createBrowserRouter } from "react-router";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Tournaments from "./pages/Tournaments";
import PublicLayout from "./layouts/Layout"
import Dashboard from "./pages/Dashboard";
import Lobbies from "./pages/Lobbies";
import AdminLobbies from "./pages/adminLobbies";
import AuthenticatedWrapper from "./context/AuthenticatedWrapper";
import CreateEvent from "./pages/CreateEvent";

export const router = createBrowserRouter([
    { path: "/", element: <PublicLayout />, children: [
    { index: true, element: <Home />},
    { path: "/signup", element: <Signup />},
    { path: "/login", element: <Login />},
    { path: "/tournaments", element: <Tournaments />},
    { path: "/lobbies/:lobbyid", element: <Lobbies />},
    { path: "/dashboard/:user", element: <AuthenticatedWrapper><Dashboard /></AuthenticatedWrapper>},
    { path: "/createevent", element: <AuthenticatedWrapper><CreateEvent /></AuthenticatedWrapper>},
    { path: "/adminlobbies/:lobbyid", element:<AuthenticatedWrapper><AdminLobbies /></AuthenticatedWrapper>}
    ]}
])