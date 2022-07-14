import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "../components/signup/signup";
import Login from "../components/login/login";

function BlogRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                </Routes>                 
               
            </BrowserRouter>
        </>
    )
}
export default BlogRouter;