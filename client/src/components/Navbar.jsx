import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#5bb3a3]">AIN ZONE</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-[#5bb3a3]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#5bb3a3]">About</Link></li>
          <li><Link to="/blog" className="hover:text-[#5bb3a3]">Blog</Link></li>
          <li><Link to="/resources" className="hover:text-[#5bb3a3]">Resources</Link></li>
          {/* <li><Link to="/freebies" className="hover:text-[#5bb3a3]">Freebies</Link></li> */}
          <li><Link to="/contact" className="hover:text-[#5bb3a3]">Contact</Link></li>
          <li><Link to="/shop" className="hover:text-[#5bb3a3]">Shop</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-[#5bb3a3]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-[#5bb3a3]">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-start px-6 py-4 gap-4 text-sm font-medium">
          <li><Link to="/" className="hover:text-[#5bb3a3]" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:text-[#5bb3a3]" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/blog" className="hover:text-[#5bb3a3]" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link to="/resources" className="hover:text-[#5bb3a3]" onClick={() => setIsOpen(false)}>Resources</Link></li>
          <li><Link to="/freebies" className="hover:text-[#5bb3a3]" onClick={() => setIsOpen(false)}>Freebies</Link></li>
          <li><Link to="/contact" className="hover:text-[#5bb3a3]" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/shop" className="hover:text-[#5bb3a3]" onClick={() => setIsOpen(false)}>Shop</Link></li>
        </ul>
      </div>
    </nav>
  );
}
