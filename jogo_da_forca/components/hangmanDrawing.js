// Estilos da forca
const GALLOWS_STYLES = {
  base: {
    position: 'absolute',
    bottom: 0,
    left: '10px',
    width: '80px',
    height: '8px',
    backgroundColor: '#8B4513'
  },
  pole: {
    position: 'absolute',
    bottom: '8px',
    left: '20px',
    width: '8px',
    height: '180px',
    backgroundColor: '#8B4513'
  },
  top: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    width: '120px',
    height: '8px',
    backgroundColor: '#8B4513'
  },
  noose: {
    position: 'absolute',
    top: '18px',
    left: '135px',
    width: '3px',
    height: '25px',
    backgroundColor: '#654321'
  }
};

// Componentes das partes do corpo
const Head = () => (
  <div style={{
    width: '25px',
    height: '25px',
    border: '3px solid #333',
    borderRadius: '50%',
    position: 'absolute',
    top: '43px',
    left: '122px'
  }} />
);

const Body = () => (
  <div style={{
    width: '3px',
    height: '50px',
    backgroundColor: '#333',
    position: 'absolute',
    top: '71px',
    left: '134px'
  }} />
);

const LeftArm = () => (
  <div style={{
    width: '25px',
    height: '3px',
    backgroundColor: '#333',
    position: 'absolute',
    top: '85px',
    left: '109px',
    transform: 'rotate(30deg)',
    transformOrigin: 'right center'
  }} />
);

const RightArm = () => (
  <div style={{
    width: '25px',
    height: '3px',
    backgroundColor: '#333',
    position: 'absolute',
    top: '85px',
    left: '137px',
    transform: 'rotate(-30deg)',
    transformOrigin: 'left center'
  }} />
);

const LeftLeg = () => (
  <div style={{
    width: '25px',
    height: '3px',
    backgroundColor: '#333',
    position: 'absolute',
    top: '115px',
    left: '109px',
    transform: 'rotate(-30deg)',
    transformOrigin: 'right center'
  }} />
);

const RightLeg = () => (
  <div style={{
    width: '25px',
    height: '3px',
    backgroundColor: '#333',
    position: 'absolute',
    top: '115px',
    left: '137px',
    transform: 'rotate(30deg)',
    transformOrigin: 'left center'
  }} />
);

// Configuração das partes do corpo
const BODY_PARTS = [
  { component: Head, minGuesses: 1 },
  { component: Body, minGuesses: 2 },
  { component: LeftArm, minGuesses: 3 },
  { component: RightArm, minGuesses: 4 },
  { component: LeftLeg, minGuesses: 5 },
  { component: RightLeg, minGuesses: 6 }
];

// Componente HangmanDrawing
export function HangmanDrawing({ numberOfGuesses = 0 }) {
  return (
    <div style={{ 
      margin: '20px 0', 
      position: 'relative', 
      width: '200px', 
      height: '200px',
      borderRadius: '8px',
    }}>
      {/* Estrutura da forca */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {/* Base */}
        <div style={GALLOWS_STYLES.base} />
        
        {/* Poste vertical */}
        <div style={GALLOWS_STYLES.pole} />
        
        {/* Viga horizontal */}
        <div style={GALLOWS_STYLES.top} />
        
        {/* Corda */}
        <div style={GALLOWS_STYLES.noose} />
      </div>
      
      {/* Partes do corpo */}
      <div>
        {BODY_PARTS.map(({ component: Component, minGuesses }, index) => 
          numberOfGuesses >= minGuesses ? <Component key={index} /> : null
        )}
      </div>
    </div>
  );
}