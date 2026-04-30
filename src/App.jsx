import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Training from "./Training"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training" element={<Training />} />
    </Routes>
  )
}

export default App