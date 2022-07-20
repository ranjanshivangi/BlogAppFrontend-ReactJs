import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "../components/signup/signup";
import Login from "../components/login/login";
import Home from "../pages/homepage/home";
import Dashboard from "../pages/dashboard/dashboard";

function BlogRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>                 
               
            </BrowserRouter>
        </>
    )
}
export default BlogRouter;