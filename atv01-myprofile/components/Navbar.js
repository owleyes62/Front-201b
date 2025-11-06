import Link from 'next/link';
import { Code, Home, User, GraduationCap, Briefcase, Folder } from 'lucide-react';

export default function Navbar() {
  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/sobre', label: 'Sobre', icon: User },
    { href: '/academica', label: 'Acadêmica', icon: GraduationCap },
    { href: '/profissional', label: 'Profissional', icon: Briefcase },
    { href: '/projetos', label: 'Projetos', icon: Folder }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <Code className="w-8 h-8" />
            <span className="font-bold text-xl">Meu Portfólio</span>
          </Link>
          
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
          
          <button className="md:hidden p-2 hover:bg-blue-700 rounded">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}