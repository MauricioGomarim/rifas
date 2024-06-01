import { Routes, Route } from 'react-router-dom';
import { Home } from "../pages/Home/index"
import { Rifa } from "../pages/Rifa/index"
import { Order } from "../pages/Order/index"



export function AppRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/rifa" element={<Rifa />} />   
            <Route path="/order" element={<Order />} />   

        </Routes>
    )
}
