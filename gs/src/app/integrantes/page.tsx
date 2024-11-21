"use client";

import Footer from "@/components/Footer/Footer";
import Header from "../../components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import style from "../styles/Integrantes.module.css";

export default function Integrantes() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <h1 className={style.title}>Conheça os nossos integrantes!</h1>
        <div className={style.integrantes}>
          <div className={style.integrante}>
            <Image
              src="/integrante-gustavo.jpg"
              width="300"
              height="300"
              alt="Foto do integrante Gustavo"
              className="shadow-xl rounded-lg"
            />
            <p className="font-bold">Gustavo Camargo de Andrade </p>
            <p>RM555562</p>
            <p>1TDSPF</p>
            <div className={style.redes}>
              <Link
                href="https://github.com/tcguus"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/gustavo-camargo-229285306/"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className={style.integrante}>
            <Image
              src="/integrante-leonardo.jpeg"
              width="300"
              height="300"
              alt="Foto do integrante Leonardo"
              className="shadow-xl rounded-lg"
            />
            <p className="font-bold">Leonardo César Nascimento </p>
            <p>RM558373</p>
            <p>1TDSPF</p>
            <div className={style.redes}>
              <Link
                href="https://github.com/leoc7sar"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/leonardo-cesar-rodrigues-nascimento-478610302/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className={style.integrante}>
            <Image
              src="/integrante-rodrigo.jpg"
              width="300"
              height="300"
              alt="Foto do integrante Rodrigo"
              className="shadow-xl rounded-lg"
            />
            <p className="font-bold">Rodrigo Souza Mantovanello </p>
            <p>RM555451</p>
            <p>1TDSPF</p>
            <div className={style.redes}>
              <Link
                href="https://github.com/rsmanto"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rodrigo-souza-mantovanello/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
