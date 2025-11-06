import ProjectCard from '@/components/ProjectCard';
import GitHubRepos from '@/components/GitHubRepos';

export default function Projetos() {
  const projetosDestaque = [
    {
      titulo: 'To-chiQ-E_commerce',
      descricao: 'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamentos integrado e painel administrativo para gerenciamento de produtos e pedidos.',
      tecnologias: ['Python', 'Django', 'MongoDB'],
      imagem: '🛒',
      link: 'https://github.com/owleyes62/To-chiQ-E_commerce-'
    },
    {
      titulo: 'ProjetoAdmFarmaciaHospitalar',
      descricao: 'Aplicativo de gerenciamento de farmácias hospitalares com controle de estoque, prescrição eletrônica e relatórios de medicamentos.',
      tecnologias: ['Supabase(MongoDB)', 'JavaScript', 'HTML'],
      imagem: '✅',
      link: 'https://github.com/owleyes62/ProjetoAdmFarmaciaHospitalar'
    },
    {
      titulo: 'Demo_DarkWood',
      descricao: 'jogo de perguntas e respostas sobre um jogo chamado DarkWood',
      tecnologias: ['JavaScript', 'HTML'],
      imagem: '🌤️',
      link: 'https://github.com/owleyes62/Demo_DarkWood'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">Meus Projetos</h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Confira alguns dos projetos que desenvolvi ao longo da minha carreira
        </p>

        {/* Projetos em Destaque */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🌟 Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetosDestaque.map((projeto, idx) => (
              <ProjectCard
                key={idx}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                tecnologias={projeto.tecnologias}
                imagem={projeto.imagem}
                link={projeto.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}