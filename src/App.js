import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Home, Marketing, Finance, Users, Content, Investor, Login } from './pages';
import { setAuthToken } from './utils/authed';
function App() {
  const token = localStorage.getItem("token");
   if (token) {
       setAuthToken(token);
   }
  return (
    <Router>
      <div className="flex">
        {token && <Sidebar />}
        <div className="flex flex-col w-full font-body bg-zinc-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} exact />
              <Route path="/marketing" element={<Marketing />} exact />
              <Route path="/investor" element={<Investor />} exact />
              <Route path="/content" element={<Content />} exact />
              <Route path="/users" element={<Users />} exact />
              <Route path="/finance" element={<Finance />} exact />
              <Route
                path="*"
                element={
                  <div>
                    <h2>404 Page not found </h2>
                  </div>
                }
              />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
