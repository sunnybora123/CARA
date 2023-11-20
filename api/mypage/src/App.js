import './App.css';
import Pay from "./Pay";
import Payment_okay from './Payment_okay';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/pay" element={<Pay />} />
          <Route path="/payment" element={<Payment_okay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
