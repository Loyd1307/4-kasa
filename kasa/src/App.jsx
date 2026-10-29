
import { Routes, Route, Navigate } from "react-router";
import Home from "./composants/Home.jsx";
import About from "./composants/About.jsx";
import NotFound from "./composants/NotFound.jsx";
import Properties from "./composants/Properties.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
      <Route path="/logement/:id" element={<Properties />} />
    </Routes>
  );
}

export default App;
