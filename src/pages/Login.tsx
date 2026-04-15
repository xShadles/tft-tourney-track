import { useState } from "react"
import { supabase } from "../context/SupabaseClient.tsx"
import { Link, useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage] = useState("")

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setMessage("");


        const {data,error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
             setMessage(error.message);
            return;
        }

        if (data) {
            navigate(`/`);
            return null
        }
    }
    

    return<div className="flex-col items-center justify-center">
    
    <div className="min-h-screen bg-[url('https://shorturl.at/82Lq0')] bg-cover w-screen absolute">
    <div className="border-2 m-30 bg-gray-900/50">
    <form className="space-y-8">

     <h1 className="text-3xl text-red-500 font-semibold text-red-500 mb-6 text-center">
        Login
    </h1>

        <input 
            className="w-3/5 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" 
            type="text"
            required>
        </input>

        <input
            className="w-3/5 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" 
            type="password"
            required>
        </input>

            <button
            className="w-5/5 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            onClick= {handleSubmit}
            type="submit">
            Login
            </button>
    </form>

        {message && <span>{message}</span>}

    <div>
        <hr/>
            <div className="flex items-center justify-center">
                <h3>or sign in with</h3>
            </div>
        <hr/>

        <form className=" flex items-center justify-center h-4/10">
            <button
            className="w-2/5 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
            Google
            </button>
            <button
            className="w-2/5 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
            Twitch
            </button>          
        </form>

        <p>Don't have an account?</p>
        <Link to="/signup">Sign Up here</Link>
        </div>
    </div>
    </div>
</div>
}

export default Login