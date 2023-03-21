import "./styles.css";
import Mobile from "./Mobile";
import Spin from "./Spin";
import { useState } from "react";
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  const [islogin, SetLogin] = useState(null);
  console.log(islogin);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            element={<PrivateRoutes SetLogin={SetLogin} islogin={islogin} />}
          >
            <Route path="/login" element={<Mobile />} />
          </Route>
          <Route
            path="/"
            element={<Spin SetLogin={SetLogin} islogin={islogin} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
