export default function SkillCard({ title, skills, color, icon: Icon }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition">
      <div className="flex items-center mb-4">
        {Icon && <Icon className={`w-6 h-6 mr-3 ${color}`} />}
        <h3 className={`text-xl font-bold ${color}`}>{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-slate-600/50 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}