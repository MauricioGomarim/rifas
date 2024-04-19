import { Routes, Route } from 'react-router-dom';
import { Home } from "../pages/Home/index"
import { Rifa } from "../pages/Rifa/index"



export function AppRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/rifa" element={<Rifa />} />   

        </Routes>
    )
}
