import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
  const [email, setEmail] = useState(); 
  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log(email)
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" value={email} onChange={(e : any) => setEmail(e.target.value)} />
          </div>
          <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">Reset Password</button>
        </form>
        <div className="text-sm text-center mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
