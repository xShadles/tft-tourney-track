import { useEffect, useState } from "react"
import { supabase } from "../context/SupabaseClient.tsx"
import { useNavigate } from "react-router-dom"
import { DashboardSidebar } from "../components/DashboardSidebar"

const Dashboard = () => {
    const navigate = useNavigate();

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


        const signOut = async () => {
            const { error } = await supabase.auth.signOut();

            if (error) throw error;
            navigate("/");
        };
    return (<div className="flex">
            <DashboardSidebar></DashboardSidebar>
                <div className="flex-col">
                <h1>Hello, {displayName ?? ""}</h1>
                <button
                    className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                    onClick={signOut}
                    >
                    Sign Out
                </button>
            </div>
        </div>
        
    );
};

export default Dashboard;
