export function HangmanWord({ wordToGuess, guessedLetters = [] }) {
  return (
    <div style={{
      display: 'flex',
      gap: '10px',
      margin: '30px 0',
      fontSize: '2rem',
      fontWeight: 'bold'
    }}>
      {wordToGuess.split("").map((letter, index) => {
        const isVisible = guessedLetters.includes(letter);
        
        return (
          <span 
            key={index} 
            style={{
              minWidth: '40px',
              textAlign: 'center',
              padding: '10px 5px',
              borderBottom: '3px solid #333',
              color: isVisible ? '#2196F3' : 'transparent'
            }}
          >
            {isVisible ? letter : '_'}
          </span>
        );
      })}
    </div>
  );
}