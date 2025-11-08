
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ReportsPage from "./pages/Reportspage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/report" element={<ReportsPage />} />
      </Routes>
    </Router>
  )
}
