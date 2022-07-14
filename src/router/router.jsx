import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function BlogRouter() {
    return (
        <>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<p>Welcome to Blogg App</p>}/>
                </Routes>                 
               
            </BrowserRouter>
        </>
    )
}
export default BlogRouter;