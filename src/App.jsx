import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Training from "./Training";
import Quiz from "./Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training" element={<Training />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;