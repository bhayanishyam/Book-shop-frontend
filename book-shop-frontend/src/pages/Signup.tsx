import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Signup() {
    const { register, handleSubmit } = useForm();
    const handleSignup = (data:any) => {
        console.log(data)
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your name"
                            {...register("name", {
                                required: "Name is not a empty!"
                            })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email"
                            {...register("email", {
                                required: "E-mail is not a empty!"
                            })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is not a empty!"
                            })} />
                    </div>
                    <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">Sign Up</button>
                </form>
                <div className="text-sm text-center mt-4">
                    Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                </div>
            </div>
        </div>
    );
}
