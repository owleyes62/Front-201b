// Lista de palavras para o jogo
const WORDS = [
  "JAVASCRIPT",
  "REACT",
  "COMPONENTE",
  "PROGRAMACAO",
  "DESENVOLVIMENTO",
  "TECNOLOGIA",
  "COMPUTADOR",
  "ALGORITMO",
  "FUNCAO",
  "VARIAVEL",
  "INTERNET",
  "APLICACAO",
  "SISTEMA",
  "CODIGO",
  "PROJETO",
  "BIBLIOTECA",
  "FRAMEWORK",
  "DATABASE",
  "SERVIDOR",
  "CLIENTE"
];

export function ListOfWords() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}