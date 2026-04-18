import { Outlet } from "react-router"
import { Navbar } from "../components/Navbar"

function PublicLayout() {
    return<div className="w-screen">
        <Navbar></Navbar>
        
    <Outlet />
    </div>
}

export default PublicLayout