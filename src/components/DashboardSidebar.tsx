import { NavLink } from "react-router"

export function DashboardSidebar() {
    return<nav
        className="flex flex-col space-y-8 shadow-md h-screen w-60">
        
        <NavLink 
        to="/dashboard/:user">
        Settings
        </NavLink>

        <NavLink 
        to="/createevent">
        Create Event
        </NavLink>

        <NavLink 
        to="/manageevents/:user">
        Manage Events
        </NavLink>

        </nav>
}