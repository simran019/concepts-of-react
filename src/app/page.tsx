import Image from "next/image";
import Header from "./Header/page";
import Concepts from "./Concepts/page";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header />
      <Concepts />
    </div>
  );
}
