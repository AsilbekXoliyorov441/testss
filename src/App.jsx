import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import LoginPage from './pages/login/index';

const App = () => {
 

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
