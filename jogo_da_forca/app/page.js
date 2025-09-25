import { HangmanDrawing } from "@/components/hangmanDrawing";
import { HangmanWord } from "@/components/hangmanWord";
import { KeyBoard } from "@/components/keyBoard";

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="home-title">Jogo da forca</h1>
      <HangmanDrawing/>
      <HangmanWord/>
      <KeyBoard/>
    </div>
  );
}
