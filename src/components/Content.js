import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "./Header";

function Content() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            {/*<Routes>*/}
            {/*    <Route path={"/"} element={<Home/>}/>*/}
            {/*    <Route path={"/latest"} element={<Latest/>}/>*/}
            {/*    <Route path={"/search"} element={<Search/>}/>*/}
            {/*    <Route path={"/search?/*"} element={<Search/>}/>*/}
            {/*    <Route path={`/movies/:id`} element={<Detail/>}/>*/}
            {/*    <Route path={`/about`} element={<About/>}/>*/}
            {/*</Routes>*/}
            {/*<Footer/>*/}
        </BrowserRouter>
    )
}

export default Content;