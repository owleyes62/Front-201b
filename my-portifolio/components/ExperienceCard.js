export default function ExperienceCard({ 
  titulo, 
  instituicao, 
  periodo, 
  descricao, 
  destaque, 
  icon: Icon 
}) {
  return (
    <div 
      className={`bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl transition ${
        destaque ? 'border-l-4 border-blue-500' : ''
      }`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className={`w-12 h-12 ${destaque ? 'text-blue-400' : 'text-gray-400'}`} />
        </div>
        <div className="ml-4 flex-grow">
          <h3 className="text-xl font-bold text-white mb-1">{titulo}</h3>
          <p className="text-blue-400 font-semibold mb-2">{instituicao}</p>
          <p className="text-gray-400 text-sm mb-3">{periodo}</p>
          <p className="text-gray-300 leading-relaxed">{descricao}</p>
        </div>
      </div>
    </div>
  );
}