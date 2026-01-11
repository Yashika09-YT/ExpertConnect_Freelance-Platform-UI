import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Experts from "./pages/Experts";
import ExpertProfile from "./pages/ExpertProfile";
import PostProject from "./pages/PostProject";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/experts/:id" element={<ExpertProfile />} />
          <Route path="/post-project" element={<PostProject />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
