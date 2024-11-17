import Image from "next/image";
import Header from "../components/Header/Header";
import { FaLeaf } from "react-icons/fa";
import Link from "next/link";
import { IoIosFlash } from "react-icons/io";
import { IoHardwareChip } from "react-icons/io5";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="relative mt-[5rem] flex flex-col items-center">
        <FaLeaf className="flex items-center justify-center text-verde text-5xl" />
        <h1 className="absolute bottom-[340px] inset-0 flex items-center justify-center text-9xl text-black z-0">
          SUN<span className="font-bold">BOX</span>
        </h1>
        <Image
          src="/sunbox.png"
          width="850"
          height="850"
          alt="SunBox"
          className="relative top-5 z-10"
        />
        <h3 className="absolute w-full bottom-10 inset-x-0 flex items-center text-center gap-3 justify-center text-2xl text-black z-0">
          <span className="font-bold">ENERGIA SUSTENTÁVEL</span> AO SEU ALCANCE
        </h3>
      </div>
      <div className="mt-[20px] w-full bg-cinza h-[40rem] rounded-tr-[60px] rounded-tl-[60px] items-center text-4xl flex flex-col">
        <h1 className="mt-[5.5rem] text-[45px] font-semibold">
          PRINCIPAIS VANTAGENS
        </h1>
        <div className="w-full h-aut mt-[5.5rem] flex justify-evenly">
        <div className="flex flex-col">
  <p className="text-2xl w-[25rem] leading-relaxed mb-auto">
    A Sunbox é uma caixa inovadora que{" "}
    <span className="font-semibold">armazena energia solar</span>,
    permitindo <br />o{" "}
    <span className="font-semibold">
      carregamento de dispositivos
    </span>{" "}
    de forma prática, sustentável e sem impacto ambiental.
  </p>
  <Link
    href="/compras"
    className="bg-verde pl-5 pr-5 pt-1 pb-1 text-2xl font-bold rounded-3xl inline-flex items-center justify-center tracking-[0.1em] hover:scale-110 transform transition-transform hover:text-white"
  >
    Compre agora!
  </Link>
</div>
        <div className="flex flex-col gap-14">
  <div className="flex items-center gap-5">
    <div className="bg-white inline-flex rounded-full items-center justify-center">
      <FaLeaf className="text-4xl m-3 text-verde" />
    </div>
    <p className="text-2xl">
      <span className="font-bold">
        Sustentabilidade é transformar{" "}
      </span>
      <br />a luz do sol em energia.
    </p>
  </div>
  <div className="flex items-center gap-5">
    <div className="bg-white inline-flex rounded-full items-center justify-center">
      <IoIosFlash className="text-4xl m-3 text-verde" />
    </div>
    <p className="text-2xl">
      <span className="font-bold">
        Dispositivos sempre carregados{" "}
      </span>
      <br />
      com praticidade e segurança.
    </p>
  </div>
  <div className="flex items-center gap-5">
    <div className="bg-white inline-flex rounded-full items-center justify-center">
      <IoHardwareChip className="text-4xl m-3 text-verde" />
    </div>
    <p className="text-2xl">
      <span className="font-bold">Tecnologia inovadora </span>
      <br />
      que gera energia eficiente.
    </p>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
