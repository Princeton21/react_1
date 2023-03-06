import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Loading from "./pages/Loading/Loading";
import Manage from "./pages/Manage/Manage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 350);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
