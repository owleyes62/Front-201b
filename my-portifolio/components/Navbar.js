"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Code, Home, User, GraduationCap, Briefcase, Folder, X, Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/sobre', label: 'Sobre', icon: User },
    { href: '/academica', label: 'Acadêmica', icon: GraduationCap },
    { href: '/profissional', label: 'Profissional', icon: Briefcase },
    { href: '/projetos', label: 'Projetos', icon: Folder }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition"
            onClick={closeMenu}
          >
            <Code className="w-8 h-8" />
            <span className="font-bold text-xl">Meu Portfólio</span>
          </Link>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          
          {/* Botão Hamburguer Mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top">
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-700 rounded-lg transition-all mb-1"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}