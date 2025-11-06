"use client";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ titulo, descricao, tecnologias, imagem, link }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition">
      {/* Imagem/Ícone */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-40 flex items-center justify-center text-6xl">
        {imagem}
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{titulo}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{descricao}</p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tecnologias?.map((tech, idx) => (
            <span
              key={idx}
              className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-slate-600/50 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition"
        >
          Ver Projeto
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
