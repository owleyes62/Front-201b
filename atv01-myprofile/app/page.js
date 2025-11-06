import { Code, Folder, Star, Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24">
          {/* Texto */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Olá, eu sou{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Seu Nome
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-6">Desenvolvedor Full Stack</p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
              Transformo ideias em experiências digitais incríveis, combinando
              design e performance. Especializado em React, Node.js e
              tecnologias modernas de desenvolvimento web.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projetos"
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
              >
                Ver Projetos
              </Link>
              <a
                href="mailto:seu@email.com"
                className="border-2 border-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                Contato
              </a>
            </div>

            <div className="flex space-x-6 mt-8">
              <a
                href="https://linkedin.com/in/seu-perfil"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/seuusuario"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="mailto:seu@email.com"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Ícone central */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.6)] animate-pulse">
              <Code className="w-32 h-32 text-white" />
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition">
            <Code className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-3xl font-bold mb-2">5+ Anos</h3>
            <p className="text-gray-400">Experiência em Desenvolvimento</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition">
            <Folder className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-3xl font-bold mb-2">20+ Projetos</h3>
            <p className="text-gray-400">Desenvolvidos e Entregues</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition">
            <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-3xl font-bold mb-2">100% Satisfação</h3>
            <p className="text-gray-400">Clientes Satisfeitos</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-lg mb-6 text-gray-200 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades de colaboração.
            Vamos criar algo incrível!
          </p>
          <Link
            href="/profissional"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold shadow-lg transition"
          >
            Conheça Minha Experiência
          </Link>
        </div>
      </div>
    </div>
  );
}
