import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import GetInvolved from "./pages/GetInvolved";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="events" element={<Events />} />
          <Route path="getinvolved" element={<GetInvolved />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
