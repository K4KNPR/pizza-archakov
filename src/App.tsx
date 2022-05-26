import React, {useEffect, useState} from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {BucketPage} from "./pages/BucketPage";
import {NotFoundPage} from "./pages/NotFoundPage";

type defaultValue = {
    search: string,
    setSearch: Function
}
export const MyContext = React.createContext<defaultValue | undefined>(undefined);

function App() {
    const [search, setSearch] = useState('')
    return (
        <div className="App">
            <div className="wrapper">
                <MyContext.Provider value={{search, setSearch}}>
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path={'/'} element={<Home />}/>
                            <Route path={'/cart'} element={<BucketPage/>}/>
                            <Route path={'*'} element={<NotFoundPage/>}/>
                        </Routes>
                    </div>
                </MyContext.Provider>
            </div>
        </div>
    );
}

export default App;
