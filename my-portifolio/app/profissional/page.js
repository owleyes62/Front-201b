import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Profissional() {
  const experiencias = [
    {
      cargo: 'Engenheiro de Prompt e Desenvolvedor de Agentes de IA',
      empresa: 'Aircury',
      periodo: 'Jan 2024 - Presente',
      localizacao: 'Remoto',
      descricao:
      'Responsável pela criação, teste e otimização de agentes de Inteligência Artificial com foco em automação, análise e interação contextual. Trabalho com engenharia de prompt, avaliação de desempenho de modelos e integração de soluções baseadas em IA em sistemas web e back-end. Busco unir precisão técnica e criatividade para desenvolver agentes inteligentes mais eficazes e humanos.',
      tecnologias: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'Docker', 'Prompt Engineering', 'N8n', 'Confident A.i.'],
      atual: true
    },
    {
    cargo: 'Desenvolvedor Autônomo | Python & Django',
    empresa: 'Freelancer / Projeto Pessoal',
    periodo: 'Jan 2023 - Presente',
    localizacao: 'Remoto',
    descricao:
    'Atuação como desenvolvedor autônomo na criação de aplicações web com Django e integração de soluções de Inteligência Artificial. Responsável por projetar APIs, modelar bancos de dados e implementar back-ends escaláveis em Python. Experiência também em engenharia de prompt e desenvolvimento de agentes de IA para automação e análise de dados.',
    tecnologias: ['Python', 'Django', 'PostgreSQL', 'Docker', 'OpenAI API', 'Prompt Engineering'],
    atual: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">Experiência Profissional</h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Minha trajetória profissional e principais conquistas
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

          <div className="space-y-8">
            {experiencias.map((exp, idx) => (
              <div key={idx} className="relative pl-20">
                {/* Bolinha na timeline */}
                <div 
                  className={`absolute left-5 w-6 h-6 rounded-full border-4 border-slate-900 shadow-lg ${
                    exp.atual 
                      ? 'bg-blue-500 shadow-blue-500/50' 
                      : 'bg-gray-500'
                  }`}
                ></div>

                {/* Card de experiência */}
                <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-[1.02] transition">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.cargo}</h3>
                      <p className="text-blue-400 font-semibold text-lg">{exp.empresa}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span 
                        className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                          exp.atual 
                            ? 'bg-green-500/20 text-green-400 border border-green-500' 
                            : 'bg-slate-700/50 text-gray-400'
                        }`}
                      >
                        {exp.atual ? '🟢 Atual' : exp.periodo}
                      </span>
                    </div>
                  </div>

                  {/* Info adicional */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.periodo}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.localizacao}
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.descricao}</p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tecnologias.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interessado em trabalhar juntos?</h2>
          <p className="text-lg mb-6 text-gray-200">
            Estou sempre aberto a novos desafios e oportunidades de colaboração!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:seu@email.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold shadow-lg"
            >
              Entre em Contato
            </a>
            <Link
              href="/projetos"
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold"
            >
              Ver Projetos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}