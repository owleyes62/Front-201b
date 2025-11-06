import { User, Code, Server, Database, Wrench, Github, Linkedin, Mail } from 'lucide-react';
import SkillCard from '@/components/SkillCard';
import SocialLinks from '@/components/SocialLinks';
import Image from "next/image";

export default function Sobre() {
  const tecnologias = {
    frontend: {
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      icon: Code,
      color: 'text-blue-400'
    },
    backend: {
      skills: ['Node.js', 'Python', 'Django', 'REST APIs'],
      icon: Server,
      color: 'text-green-400'
    },
    database: {
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
      icon: Database,
      color: 'text-purple-400'
    },
    tools: {
      skills: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman'],
      icon: Wrench,
      color: 'text-orange-400'
    }
  };

  const modulos = [
    { nome: 'React', versao: '18.x', uso: 'Framework principal para UI' },
    { nome: 'Next.js', versao: '15.x', uso: 'Framework React com SSR' },
    { nome: 'Lucide React', versao: '0.263.1', uso: 'Biblioteca de ícones' },
    { nome: 'GitHub API', versao: 'v3', uso: 'Integração de repositórios' },
    { nome: 'Tailwind CSS', versao: 'Next', uso: 'Framework CSS utilitário' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-12">Sobre Mim</h1>

        {/* Seção de Apresentação */}
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.6)] border-4 border-purple-600">
                  <Image
                  src="/Iwerson.jpg"
                  alt="Foto de Iwerson"
                  className="object-cover w-full h-full"
                  layout="fill"
                  />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Desenvolvedor Full Stack
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Sou um desenvolvedor apaixonado por tecnologia e inovação, com experiência em criar 
                aplicações web modernas e escaláveis. Minha jornada no desenvolvimento começou há 
                mais de 3 anos, e desde então venho aprimorando minhas habilidades em diversas 
                tecnologias e frameworks.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Meu foco está em criar experiências digitais que não apenas funcionam perfeitamente, 
                mas que também proporcionam uma experiência única aos usuários. Acredito na 
                importância do código limpo, boas práticas e trabalho em equipe.
              </p>
              
              <div className="flex space-x-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        {/* Tecnologias */}
        <h2 className="text-3xl font-bold mb-6">Tecnologias & Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SkillCard
            title="Frontend"
            skills={tecnologias.frontend.skills}
            color={tecnologias.frontend.color}
            icon={tecnologias.frontend.icon}
          />
          <SkillCard
            title="Backend"
            skills={tecnologias.backend.skills}
            color={tecnologias.backend.color}
            icon={tecnologias.backend.icon}
          />
          <SkillCard
            title="Database"
            skills={tecnologias.database.skills}
            color={tecnologias.database.color}
            icon={tecnologias.database.icon}
          />
          <SkillCard
            title="Ferramentas"
            skills={tecnologias.tools.skills}
            color={tecnologias.tools.color}
            icon={tecnologias.tools.icon}
          />
        </div>

        {/* Módulos utilizados */}
        <h2 className="text-3xl font-bold mb-6">Módulos Utilizados neste App</h2>
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Módulo</th>
                <th className="px-6 py-4 text-left font-bold">Versão</th>
                <th className="px-6 py-4 text-left font-bold">Uso</th>
              </tr>
            </thead>
            <tbody>
              {modulos.map((modulo, idx) => (
                <tr key={idx} className="border-b border-slate-700 hover:bg-slate-700/30 transition">
                  <td className="px-6 py-4 font-semibold text-blue-400">{modulo.nome}</td>
                  <td className="px-6 py-4 text-gray-400">{modulo.versao}</td>
                  <td className="px-6 py-4 text-gray-300">{modulo.uso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}