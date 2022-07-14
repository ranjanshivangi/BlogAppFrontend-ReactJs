import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "../components/signup/signup";
import Login from "../components/login/login";
import Home from "../pages/homepage/home";

function BlogRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>                 
               
            </BrowserRouter>
        </>
    )
}
export default BlogRouter;