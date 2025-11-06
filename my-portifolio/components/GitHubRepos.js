"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, ExternalLink, Github, Search } from "lucide-react";

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("torvalds");

  const fetchGitHubRepos = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(
          username.trim()
        )}/repos?sort=updated&per_page=6`,
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Usuário não encontrado ou erro na API");
      }

      const data = await response.json();
      setRepos(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Erro inesperado");
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (username.trim()) {
      fetchGitHubRepos();
    }
  };

  // (Opcional) Carrega o usuário padrão na primeira renderização
  useEffect(() => {
    fetchGitHubRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Header + Busca */}
      <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <Github className="w-6 h-6 mr-3 text-blue-400" />
          Repositórios do GitHub
        </h2>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite um username do GitHub"
            className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition"
            aria-label="Username do GitHub"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-semibold disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              "Buscando..."
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </>
            )}
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-3">
          Experimente buscar: <span className="text-gray-300">facebook</span>,{" "}
          <span className="text-gray-300">vercel</span>,{" "}
          <span className="text-gray-300">microsoft</span>,{" "}
          <span className="text-gray-300">netflix</span>
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
          <p className="mt-4 text-gray-400">Carregando repositórios...</p>
        </div>
      )}

      {/* Erro */}
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 px-6 py-4 rounded-lg mb-8">
          {error}
        </div>
      )}

      {/* Lista */}
      {!loading && !error && repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-white flex-grow pr-2 line-clamp-1">
                  {repo.name}
                </h3>
                {repo.language && (
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30 whitespace-nowrap">
                    {repo.language}
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
                {repo.description || "Sem descrição disponível"}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4 pb-4 border-b border-slate-700">
                <span className="flex items-center hover:text-yellow-400 transition">
                  <Star className="w-4 h-4 mr-1" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center hover:text-blue-400 transition">
                  <GitFork className="w-4 h-4 mr-1" />
                  {repo.forks_count}
                </span>
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition text-sm"
                aria-label={`Abrir ${repo.name} no GitHub`}
              >
                Ver no GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Estado vazio */}
      {!loading && !error && repos.length === 0 && (
        <div className="text-center text-gray-400 py-10">
          Nenhum repositório encontrado para <span className="text-gray-200 font-semibold">{username}</span>.
          Tente outro usuário.
        </div>
      )}
    </div>
  );
}
