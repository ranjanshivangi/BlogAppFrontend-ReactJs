import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Home from "../pages/homepage/home";


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