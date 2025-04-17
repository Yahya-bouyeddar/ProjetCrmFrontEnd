// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Employer from "./pages/employer.jsx";
import Manager from "./pages/manager.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employer" element={
          <PrivateRoute>
            <Employer />
          </PrivateRoute>
        } />
        <Route path="/manager" element={
          <PrivateRoute>
            <Manager />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
