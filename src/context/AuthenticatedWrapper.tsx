import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { supabase } from "./SupabaseClient";
import { Navigate } from "react-router-dom";

function AuthenticatedWrapper({ children }: { children: ReactNode }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            setAuthenticated(!!session);
            setLoading(false);
        };

        getSession();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    } else {
        if(authenticated) {
            return<>{children}</>
        }
        return <Navigate to="/login" />
    }
}

export default AuthenticatedWrapper