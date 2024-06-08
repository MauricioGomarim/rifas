import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from "../pages/Home/index"
import { Rifa } from "../pages/Rifa/index"
import { Order } from "../pages/Order/index"
import { useData } from "../hook/infos";
import { useEffect } from 'react';


function OrderOrRedirect() {
  const navigate = useNavigate();
  const { data, setData } = useData(null);



  useEffect(() => {
    const dataLocal = localStorage.getItem("@order");
    if (dataLocal) {
      const parsedData = JSON.parse(dataLocal);
      if (JSON.stringify(parsedData) !== JSON.stringify(data)) {
        setData(parsedData);
      }
    } else {
      if (!data || Object.keys(data).length === 0) {
        navigate('/rifa');
      }
    }
  }, [data, navigate, setData]);

  const isDataNotEmpty = data && Object.keys(data).length !== 0;

  return isDataNotEmpty ? <Order /> : null;
}

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/rifa" element={<Rifa />} />   
            <Route path="/order" element={<OrderOrRedirect />} />   
        </Routes>
    )
}
