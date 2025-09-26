import { useState, useCallback } from 'react';

export function useHangmanGame(wordToGuess) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  
  // Letras corretas (que existem na palavra)
  const correctLetters = guessedLetters.filter(letter => 
    wordToGuess.includes(letter)
  );
  
  // Letras incorretas (que não existem na palavra)
  const incorrectLetters = guessedLetters.filter(letter => 
    !wordToGuess.includes(letter)
  );
  
  // Número de tentativas erradas
  const numberOfIncorrectGuesses = incorrectLetters.length;
  
  // Verifica se o jogador perdeu (6 tentativas erradas)
  const isLost = numberOfIncorrectGuesses >= 6;
  
  // Verifica se o jogador ganhou (todas as letras da palavra foram adivinhadas)
  const isWon = wordToGuess
    .split('')
    .every(letter => correctLetters.includes(letter));
  
  // Status do jogo
  const gameStatus = isWon ? 'won' : isLost ? 'lost' : 'playing';
  
  // Função para adicionar uma nova letra
  const addGuessedLetter = useCallback((letter) => {
    if (guessedLetters.includes(letter) || isWon || isLost) {
      return; // Não faz nada se a letra já foi tentada ou o jogo terminou
    }
    
    setGuessedLetters(prev => [...prev, letter]);
  }, [guessedLetters, isWon, isLost]);
  
  // Função para resetar o jogo
  const resetGame = useCallback(() => {
    setGuessedLetters([]);
  }, []);
  
  return {
    guessedLetters,
    correctLetters,
    incorrectLetters,
    numberOfIncorrectGuesses,
    isWon,
    isLost,
    gameStatus,
    addGuessedLetter,
    resetGame
  };
}