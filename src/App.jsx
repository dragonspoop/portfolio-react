
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ReportsPage from "./pages/Reportspage";
import ReportsFull from "./pages/ReportFull";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/report" element={<ReportsPage />} />
        <Route path="/report/:id" element={<ReportsFull />} />
      </Routes>
    </Router>
  )
}
