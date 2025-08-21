export function Profile() {
  const name = "Iwerson Guilherme da Silva Souza";
  const image = "/images/Iwerson.jpeg";
  const descricao = "Olá, meu nome é Iwerson e sou desenvolvedor aprendendo React e Next.js.";
  const miniBio = "Sou estudante de Programação Front-End. Adoro criar interfaces limpas e intuitivas. Sempre buscando aprender novas tecnologias.";

  return (
    <div className="profile-container">
      <img
        src={image}
        alt={name}
        className="profile-image"
      />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{descricao}</p>
      <p className="profile-mini-bio">{miniBio}</p>
    </div>
  );
}