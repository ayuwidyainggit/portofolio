import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./view/Home";

function App() {
  return (
    <div className="bg-[#10173E] overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/portofolio" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
