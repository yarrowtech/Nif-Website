import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


// pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import FashionDesign from "./pages/FashionDesign";
import InteriorDesign from "./pages/InteriorDesign";
import RetailManagement from "./pages/RetailManagement";
import ExploreNIF from "./pages/ExploreNIF";
import Placement from "./pages/Placement";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FloatingActions from "./components/FloatingActions"; 
import SuccessStories from "./pages/SuccessStories";
import Blog1 from "./pages/Blog1.jsx";
import Blog2 from "./pages/Blog2.jsx";
import Blog3 from "./pages/Blog3.jsx";
import Blog4 from "./pages/Blog4.jsx";
import Blog5 from "./pages/Blog5.jsx";
import Blog6 from "./pages/Blog6.jsx";
import Blog7 from "./pages/Blog7.jsx";
import Blog8 from "./pages/Blog8.jsx";
import Blog9 from "./pages/Blog9.jsx";
import Blog10 from "./pages/Blog10.jsx";
import OurMentors from "./pages/OurMentors.jsx";
import Gallery from "./pages/Gallery.jsx";
import OurFaculties from "./pages/OurFaculties.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";

export default function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/fashion-design" element={<FashionDesign />} />
        <Route path="/interior-design" element={<InteriorDesign />} />
        <Route path="/retail-management" element={<RetailManagement />} />
        <Route path="/explore" element={<ExploreNIF />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/students/success-stories" element={<SuccessStories />} />
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/blog/3" element={<Blog3 />} />
        <Route path="/blog/4" element={<Blog4 />} />
        <Route path="/blog/5" element={<Blog5 />} />
        <Route path="/blog/6" element={<Blog6 />} />
        <Route path="/blog/7" element={<Blog7 />} />
        <Route path="/blog/8" element={<Blog8 />} />
        <Route path="/blog/9" element={<Blog9 />} />
        <Route path="/blog/10" element={<Blog10 />} />
        <Route path="/ourmentors" element={<OurMentors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ourfaculties" element={<OurFaculties />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<Terms />} />

      </Route>
    </Routes>
   
      <FloatingActions
        whatsappUrl="https://api.whatsapp.com/send/?phone=919836796000&text&type=phone_number&app_absent=0" // <-- your real link
        useRouter={true} // set to false if not using react-router
      />
   </>
  );
}
