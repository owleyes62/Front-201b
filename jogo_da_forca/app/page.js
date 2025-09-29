"use client";

import { useState, useCallback } from 'react';
import { HangmanDrawing } from '@/components/hangmanDrawing';
import { HangmanWord } from '@/components/hangmanWord';
import { KeyBoard } from '@/components/keyBoard';
import { ListOfWords } from '@/components/ListOfWords';
import { useHangmanGame } from '@/components/useHangmanGame';

export default function Home() {
  const [secretWord, setSecretWord] = useState(() => ListOfWords());
  
  const {
    guessedLetters,
    correctLetters,
    incorrectLetters,
    numberOfIncorrectGuesses,
    isWon,
    isLost,
    gameStatus,
    addGuessedLetter,
    resetGame
  } = useHangmanGame(secretWord);

  // Função para iniciar um novo jogo
  const startNewGame = useCallback(() => {
    setSecretWord(ListOfWords());
    resetGame();
  }, [resetGame]);

  // Função para lidar com o clique nas letras
  const handleLetterClick = useCallback((letter) => {
    addGuessedLetter(letter);
  }, [addGuessedLetter]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{
        color: '#333',
        marginBottom: '30px',
        fontSize: '2.5rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
      }}>
        Jogo da Forca
      </h1>
      
      {/* Desenho da forca */}
      <HangmanDrawing numberOfGuesses={numberOfIncorrectGuesses} />
      
      {/* Palavra a ser adivinhada */}
      <HangmanWord 
        wordToGuess={secretWord} 
        guessedLetters={correctLetters}
      />
      
      {/* Teclado */}
      <KeyBoard
        onLetterClick={handleLetterClick}
        guessedLetters={guessedLetters}
        correctLetters={correctLetters}
        incorrectLetters={incorrectLetters}
      />
      
      {/* Status do jogo */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <p style={{ fontSize: '18px', margin: '10px 0', color: '#666' }}>
          Tentativas erradas: {numberOfIncorrectGuesses}/6
        </p>
        
        {isWon && (
          <div style={{
            padding: '20px',
            borderRadius: '10px',
            margin: '20px 0',
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '2px solid #c3e6cb',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>
              🎉 Parabéns! Você ganhou!
            </h2>
            <p style={{ margin: 0, fontSize: '16px' }}>
              A palavra era: <strong>{secretWord}</strong>
            </p>
          </div>
        )}
        
        {isLost && (
          <div style={{
            padding: '20px',
            borderRadius: '10px',
            margin: '20px 0',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '2px solid #f5c6cb',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>
              😞 Você perdeu!
            </h2>
            <p style={{ margin: 0, fontSize: '16px' }}>
              A palavra era: <strong>{secretWord}</strong>
            </p>
          </div>
        )}
        
        {(isWon || isLost) && (
          <button 
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '15px',
              transition: 'all 0.2s ease'
            }}
            onClick={startNewGame}
          >
            Novo Jogo
          </button>
        )}
      </div>

      {/* Debug info (remover em produção) */}
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        {/* <p>Palavra secreta: {secretWord}</p> */}
        <p>Letras tentadas: {guessedLetters.join(', ')}</p>
        <p>Letras corretas: {correctLetters.join(', ')}</p>
        <p>Letras incorretas: {incorrectLetters.join(', ')}</p>
      </div>
    </div>
  );
}