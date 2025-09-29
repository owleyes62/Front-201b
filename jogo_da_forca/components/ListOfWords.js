// Lista de palavras para o jogo
const WORDS = [
  "TYPESCRIPT",
  "NODEJS",
  "EXPRESS",
  "MONGODB",
  "POSTGRESQL",
  "FRONTEND",
  "BACKEND",
  "FULLSTACK",
  "INTERFACE",
  "USUARIO",
  "AUTENTICACAO",
  "SEGURANCA",
  "CRIPTOGRAFIA",
  "VALIDACAO",
  "MIDDLEWARE",
  "ENDPOINT",
  "REQUISICAO",
  "RESPOSTA",
  "PROMISE",
  "CALLBACK",
  "ASSINCRONISMO",
  "OBJETO",
  "CLASSE",
  "HERANCA",
  "POLIMORFISMO",
  "ENCAPSULAMENTO",
  "ABSTRAÇÃO",
  "MODULARIZACAO",
  "REFATORACAO",
  "DEBUGGING"
];

export function ListOfWords() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}