import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "@/pages/Profile";
import Signup from "@/pages/Signup";
import ForgetPassword from "@/pages/ForgetPassword";
import Home from "@/pages/Home";


export default function AppRoute() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
                <Route path="/" element={<Home />} />

                <Route path="/profile" element={<Profile />} />
                
            </Routes>
        </BrowserRouter>
    );
}
