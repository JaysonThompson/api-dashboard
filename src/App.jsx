import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Layouts from "./components/Layouts";
import Home from "./components/Home";
import ScoreCard from "./components/ScoreCard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="schedule" element={<ScoreCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
