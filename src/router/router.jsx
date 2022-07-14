import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "../components/signup/signup";

function BlogRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp/>}/>
                </Routes>                 
               
            </BrowserRouter>
        </>
    )
}
export default BlogRouter;