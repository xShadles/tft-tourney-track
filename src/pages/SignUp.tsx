import { useState } from "react"
import { supabase } from "../context/SupabaseClient.tsx"
import { Link } from "react-router-dom"

const SignUp = () => {

    const [user,setUser] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setMessage("");

        const {data,error} = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    display_name: user
                }
            }
        });

        if (error) {
            setMessage(error.message);
            return;
        }

        if (data) {
            setMessage("Confirm your Email")
        }
    }
    

    return<div className="flex-col items-center justify-center">
    <div className="min-h-screen bg-[url('https://shorturl.at/82Lq0')] bg-cover w-screen absolute">
    <div className="border-2 m-30 bg-gray-900/50">
    <form  
    className="space-y-4">

     <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Create Account
    </h1>
    {message && <span>{message}</span>}
        <input 
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            onChange={(e) => setUser(e.target.value)} 
            placeholder="Username" 
            type="text"
            required>
        </input>
        
        <input 
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" 
            type="text"
            required>
        </input>

        <input
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" 
            type="password"
            required>
        </input>

        <input
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
            placeholder="Retype Password" 
            type="password"
            required>
        </input>

        <div className="flex row">
            <input type="checkbox"
            required></input>
            <p>I agree to the Terms of Service and Privacy Policy..... whenever it does exist</p>
        </div>
            <button
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            onClick= {handleSubmit}
            type="submit">
            Create Account
            </button>
    </form>
    <div>
        <hr/>
            <div className="flex items-center justify-center px-6">
                <h3>or</h3>
            </div>
        <hr/>

        <form className=" flex items-center justify-center px-6">
            <button
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
            Google
            </button>
            <button
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
            Twitch
            </button>          
        </form>

        <p>Already have an account?</p>
        <Link to="/login">Login here</Link>
    </div>
    </div>
  </div>  
</div>
}

export default SignUp