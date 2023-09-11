import Logo from "../../assets/images/key-concepts.png";

import Image from "next/image";

const Header = () => {
  return (
    <div className="border-2 border-white w-1/2 flex flex-col items-center gap-2">
      <Image src={Logo} width={100} height={100} alt="Logo" />
      <h1 className="font-bold text-3xl text-slate-300">Key React Concepts</h1>
      <p>Selected React Key concepts that you must know about</p>
    </div>
  );
};

export default Header;
