import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-8 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
