// Letras do alfabeto
const LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

export function KeyBoard({ 
  onLetterClick, 
  guessedLetters = [], 
  correctLetters = [], 
  incorrectLetters = [] 
}) {
  
  const getButtonStyle = (letter) => {
    let style = {
      padding: '12px 8px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: '2px solid #ddd',
      borderRadius: '6px',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    };
    
    if (correctLetters.includes(letter)) {
      style.backgroundColor = '#4CAF50';
      style.color = 'white';
      style.borderColor = '#45a049';
    } else if (incorrectLetters.includes(letter)) {
      style.backgroundColor = '#f44336';
      style.color = 'white';
      style.borderColor = '#da190b';
    } else if (guessedLetters.includes(letter)) {
      style.backgroundColor = '#9e9e9e';
      style.color = 'white';
      style.borderColor = '#757575';
      style.cursor = 'not-allowed';
      style.opacity = 0.6;
    }
    
    return style;
  };

  const isButtonDisabled = (letter) => {
    return guessedLetters.includes(letter);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(9, 1fr)',
      gap: '8px',
      margin: '30px 0',
      maxWidth: '600px'
    }}>
      {LETTERS.map((letter) => (
        <button
          key={letter}
          style={getButtonStyle(letter)}
          disabled={isButtonDisabled(letter)}
          onClick={() => onLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}