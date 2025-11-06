import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 Meu Portfólio. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex space-x-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}