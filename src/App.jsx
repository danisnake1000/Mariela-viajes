import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./page/home/Home";
import { Nosotros } from "./common/Nosotros";
import { DetallesCars } from "./common/DetallesCars";
import { Contactos } from "./common/Contactos";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/contactos" element={<Contactos/>} />
        <Route path="/detalles/:idCard" element={<DetallesCars/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
