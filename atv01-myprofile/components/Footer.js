import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 Meu Portfólio. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:seu@email.com" 
              className="hover:text-blue-400 transition"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}