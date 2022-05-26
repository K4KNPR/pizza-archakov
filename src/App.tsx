import React, {useEffect, useState} from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {BucketPage} from "./pages/BucketPage";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {
    const [search, setSearch] = useState('')

    return (
        <div className="App">
            <div className="wrapper">
                <Header search={search} setSearch={setSearch} />
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Home search={search} setSearch={setSearch}/>}/>
                        <Route path={'/cart'} element={<BucketPage/>}/>
                        <Route path={'*'} element={<NotFoundPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
