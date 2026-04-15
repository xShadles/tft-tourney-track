import DateInput from "../props/DateInput"
import TimeInput from "../props/TimeInput"
import { supabase } from "../context/SupabaseClient";
import {useState} from "react"

const CreateEvent = () => {
    const [tournamentName,setTournamentName] = useState("");
    const [prize,setPrize] = useState(Number);
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [startTime,setStartTime] = useState("");
    const [message,setMessage] = useState("");

     const insertTournaments = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setMessage("");

        const {error} = await supabase
        .from('tournaments')
        .insert({
            tournament_name: tournamentName,
            prize: prize,
            start_date: startDate,
            end_date: endDate,
            start_time: startTime
     })
        

        if (error) {
            setMessage(error.message);
            return
        }
    }


    return<div className="bg-orange-500/50 min-h-screen">
        <div className="border-2 m-30 bg-gray-900/50">
        <form className="space-y-8">
            <h1 className="text-3xl text-red-500 font-semibold text-red-500 mb-6 text-center">
                Make A Tournament</h1>

            <div>
                <h4>Tournament Name</h4>
                <input
                className="w-1/5 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="e.g Cup, Regionals"
                onChange={(e) => setTournamentName(e.target.value)}>
                </input>
            </div>

            <div>
                <h4>Prize Pool</h4>
                <input
                className="w-1/5 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="$"
                type="number"
                min="0"
                onChange={(e) => setPrize(Number(e.target.value))}>
                </input>
            </div>
                <DateInput 
                label="Start Date"
                onChange={(date) => setStartDate(date)}></DateInput>
            <div>

            </div>
                <DateInput 
                label="End Date"
                onChange={(date) => setEndDate(date)}></DateInput>
            
            <div>
                <TimeInput
                label="Starting Time"
                onChange={(time) => setStartTime(time)}></TimeInput>
            </div>

            <div>
                <button 
                className=""
                onClick={insertTournaments}>Submit</button>
            </div>
            {message && <span>{message}</span>}
        </form>
        </div>
    </div>
}

export default CreateEvent