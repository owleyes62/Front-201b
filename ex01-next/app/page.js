// import Image from "next/image";

import { Profile } from "@/components/profile";
import { TodoList } from "@/components/TodoList";
import { Avatar } from "@/components/avatar";


// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Ola mundo</h1>
      <Profile />
      <hr />
      <TodoList />
      <hr />
      <Avatar />
    </div>
  );
}
