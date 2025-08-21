export function Avatar() {
  const description = "Gregorio Y. Zara";
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  return (
    <img className="avatar" src={avatar} alt={description} />
  );
}
