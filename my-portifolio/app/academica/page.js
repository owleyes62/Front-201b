import { GraduationCap, Award, Star } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard';

export default function Academica() {
  const formacoes = [
    {
      titulo: 'Formação de Sistema para Internet',
      instituicao: 'Universidade Federal de Pernambuco',
      periodo: '2024 - 2026',
      descricao: 'Formação completa em fundamentos de computação, algoritmos, estruturas de dados e desenvolvimento de software. Participação em projetos de pesquisa e extensão.',
      destaque: true
    },
    {
      titulo: 'Bootcamp GoStack',
      instituicao: 'Rocketseat',
      periodo: '2025',
      descricao: 'Programa intensivo de desenvolvimento Full Stack com React, React Native e Node.js. Foco em aplicações modernas e arquitetura escalável.',
      destaque: false
    },
    {
      titulo: 'Curso Completo de Python',
      instituicao: 'Udemy',
      periodo: '2022',
      descricao: 'Aprofundamento em Python, programação orientada a objetos, manipulação de dados e desenvolvimento web com Flask.',
      destaque: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">Experiência Acadêmica</h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Minha jornada de aprendizado e desenvolvimento profissional
        </p>

        {/* Formações */}
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <GraduationCap className="w-8 h-8 mr-3 text-blue-400" />
          Formação & Cursos
        </h2>
        <div className="space-y-6 mb-12">
          {formacoes.map((formacao, idx) => (
            <ExperienceCard
              key={idx}
              titulo={formacao.titulo}
              instituicao={formacao.instituicao}
              periodo={formacao.periodo}
              descricao={formacao.descricao}
              destaque={formacao.destaque}
              icon={GraduationCap}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Educação Continuada</h3>
          <p className="text-gray-200 mb-6">
            Sempre buscando aprender novas tecnologias e aprimorar minhas habilidades!
          </p>
          <div className="flex justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-lg">🎓 Aprendizado Contínuo</span>
            <span className="bg-white/20 px-4 py-2 rounded-lg">📚 Novas Tecnologias</span>
            <span className="bg-white/20 px-4 py-2 rounded-lg">🚀 Inovação</span>
          </div>
        </div>
      </div>
    </div>
  );
}