// Base da forca
export const Base = () => (
  <div style={{
    height: "10px",
    width: "100%",
    backgroundColor: "black",
    position: "absolute",
    bottom: "50px"
  }} />
);

// Linha vertical principal
export const VerticalLine = () => (
  <div style={{
    height: "250px",
    width: "10px",
    backgroundColor: "black",
    position: "absolute",
    left: "50px",
    top: 0
  }} />
);

// Linha horizontal superior
export const HorizontalLine = () => (
  <div style={{
    height: "10px",
    width: "150px",
    backgroundColor: "black",
    position: "absolute",
    left: "50px",
    top: 0
  }} />
);

// Linha vertical pequena (corda)
export const VerticalLineSmall = () => (
  <div style={{
    height: "45px",
    width: "10px",
    backgroundColor: "black",
    position: "absolute",
    left: "190px",
    top: "10px"
  }} />
);

// Cabeça
export const Head = () => (
  <div style={{
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "5px solid black",
    position: "absolute",
    top: "50px",
    left: "170px"
  }} />
);

// Corpo
export const Body = () => (
  <div style={{
    width: "10px",
    height: "70px",
    backgroundColor: "black",
    position: "absolute",
    top: "95px",
    left: "190px"
  }} />
);

// Braço esquerdo
export const LeftArm = () => (
  <div style={{
    width: "50px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "100px",
    left: "145px",
    transform: "rotate(-45deg)",
    transformOrigin: "right center"
  }} />
);

// Braço direito
export const RightArm = () => (
  <div style={{
    width: "50px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "100px",
    left: "195px",
    transform: "rotate(45deg)",
    transformOrigin: "left center"
  }} />
);

// Perna esquerda
export const LeftLeg = () => (
  <div style={{
    width: "50px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "155px",
    left: "145px",
    transform: "rotate(-45deg)",
    transformOrigin: "right center"
  }} />
);

// Perna direita
export const RightLeg = () => (
  <div style={{
    width: "50px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "155px",
    left: "195px",
    transform: "rotate(45deg)",
    transformOrigin: "left center"
  }} />
);

export function HangmanDrawing({ numberOfGuesses = 0 }) {
  return (
    <div 
      style={{ 
        position: "relative",
        width: "250px",
        height: "300px",
        margin: "0 auto",
      }}>
      {/* Estrutura da forca */}
      <Base />
      <VerticalLine />
      <HorizontalLine />
      <VerticalLineSmall />

      {/* Partes do corpo */}
      {/* <Head />
      <Body />
      <LeftArm />
      <RightArm />
      <LeftLeg />
      <RightLeg /> */}
    </div>
  )
}
