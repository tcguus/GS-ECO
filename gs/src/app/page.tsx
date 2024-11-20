import Image from "next/image";
import Header from "../components/Header/Header";
import { FaLeaf } from "react-icons/fa";
import Link from "next/link";
import { IoIosFlash } from "react-icons/io";
import { IoHardwareChip } from "react-icons/io5";
import Footer from "../components/Footer/Footer";
import style from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.cont}>
        <FaLeaf className={style.leaf} />
        <h1 className={style.title}>
          SUN<span className="font-bold">BOX</span>
        </h1>
        <Image
          src="/sunbox.png"
          width="850"
          height="850"
          alt="SunBox"
          className={style.image}
        />
        <h3 className={style.frase}>
          <span className="font-bold">ENERGIA SUSTENTÁVEL</span> AO SEU ALCANCE
        </h3>
      </div>
      <div className={style.contVant}>
        <h1 className={style.titleVant}>PRINCIPAIS VANTAGENS</h1>
        <div className={style.divVant}>
          <div className={style.textVant}>
            <p className={style.text}>
              A Sunbox é uma caixa inovadora que{" "}
              <span className="font-semibold">armazena energia solar</span>,
              permitindo <br />o{" "}
              <span className="font-semibold">
                carregamento de dispositivos
              </span>{" "}
              de forma prática, sustentável e sem impacto ambiental.
            </p>
            <Link href="/compras" className={style.button}>
              Compre agora!
            </Link>
          </div>
          <div className={style.divFrases}>
            <div className={style.divFrase}>
              <div className={style.divIcon}>
                <FaLeaf className={style.icon} />
              </div>
              <p className="text-2xl">
                <span className="font-bold">
                  Sustentabilidade é transformar{" "}
                </span>
                <br />a luz do sol em energia.
              </p>
            </div>
            <div className={style.divFrase}>
              <div className={style.divIcon}>
                <IoIosFlash className={style.icon} />
              </div>
              <p className="text-2xl">
                <span className="font-bold">
                  Dispositivos sempre carregados{" "}
                </span>
                <br />
                com praticidade e segurança.
              </p>
            </div>
            <div className={style.divFrase}>
              <div className={style.divIcon}>
                <IoHardwareChip className={style.icon} />
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
      <Footer />
    </div>
  );
};

export default Home;
