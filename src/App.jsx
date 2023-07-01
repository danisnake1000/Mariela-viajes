import "./App.css";
import { Button } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./page/home/Home";
import { Footer } from "./common/Footer";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to="/" />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
