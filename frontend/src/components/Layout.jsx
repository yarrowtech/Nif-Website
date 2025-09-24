import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import EnquiryForm from "./EnquiryForm";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="shrink-0">
        <Header />
        <Navbar />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Enquiry form present on EVERY page */}
      <EnquiryForm />

      <Footer />
    </div>
  );
}
