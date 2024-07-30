import logo from "./logo.svg";
import "./App.css";
import Houses from "./Houses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import House from "./House";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/house/:id" element={House} />
          <Route exact path="/" element={Houses} />
          {/* <Route path="no-details" /> */}
        </Routes>
      </BrowserRouter>
      <Houses />
    </div>
  );
}

export default App;
