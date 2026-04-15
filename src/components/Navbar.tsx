import { NavLink } from "react-router"
import { useState, useEffect } from "react"
import { supabase } from "../context/SupabaseClient";

export function Navbar() {

const [displayName, setDisplayName] = useState<string | null>(null);

    useEffect(() => {
        const findDisplayName = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            const { data, error } = await supabase
                .from("profiles")
                .select("display_name")
                .eq("id", user.id)
                .single();

            if (!error && data) {
                setDisplayName(data.display_name);
            }
        };

        findDisplayName();
    }, []); 
       
    return<nav 
        className="flex items-center justify-center gap-12 h-12 bg-black-100"
        >
            <NavLink 
            to="/">
            Home
            </NavLink>

            <NavLink 
            to="/tournaments">
            Tournaments
            </NavLink>

            <NavLink 
            to={`/dashboard/${displayName}`}>
            Dashboard
            </NavLink>

            <NavLink 
            to="/signup">
            Sign Up
            </NavLink>

            <NavLink 
            to="/login">
            Login
            </NavLink>

            <NavLink 
            to="/createevent">
            Create Event
            </NavLink>
        </nav>
}