import { DashboardSidebar } from "../components/DashboardSidebar";
import TournamentCardAdmin from "../components/TournamentCardAdmin";

const ManageEvents= () => {
    
    return<div className="flex">
        <DashboardSidebar></DashboardSidebar>
        <TournamentCardAdmin></TournamentCardAdmin>
    </div>
}

export default ManageEvents