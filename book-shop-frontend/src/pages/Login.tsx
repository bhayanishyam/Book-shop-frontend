import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {

    const {register, handleSubmit} = useForm();

    const login = (data : any) => {
        console.log(data);
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(login)}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" 
            {...register("email", {required : "email is not empty!" })}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your password"
            {...register("password", {required : "password is not empty!"})} />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
        </form>
        <div className="text-sm text-center mt-4">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
        </div>
        <div className="text-sm text-center mt-2">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
