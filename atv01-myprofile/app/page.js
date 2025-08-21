import { Profile } from "@/components/profile";

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="home-title">
        Site criado para a disciplina Programação Front-End
      </h1>
      <main className="home-container">
        <Profile />
      </main>
    </div>
  );
}