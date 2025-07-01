import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
// import Resources from './pages/Resources';
// import Freebies from './pages/Freebies';
// import Contact from './pages/Contact';
// import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resources from './pages/Resources';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import BlogView from "./pages/BlogView";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-[#faf4f0]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogView />} />
            <Route path="/resources" element={<Resources />} />
            {/* <Route path="/freebies" element={<Freebies />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<div className="text-center p-4 flex"><h1 className='pe-2'>Page not found</h1> <Link to="/">Home</Link></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
