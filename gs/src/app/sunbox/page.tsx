"use client";

import Footer from "@/components/Footer/Footer";
import Header from "../../components/Header/Header";
import Image from "next/image";
import { useState } from "react";
import style from "../styles/Sunbox.module.css";

export default function Sunbox() {
  const [inputValue, setInputValue] = useState("");
  interface DeviceData {
    identifier: string;
    batteryPercentage: string;
    lastUpdate: string;
    rechargeCycles: string;
    temperature: string;
    nextReview: string;
  }

  const [deviceData, setDeviceData] = useState<DeviceData | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase();
    if (value.length > 5 && value[5] !== "-") {
      value = value.slice(0, 5) + "-" + value.slice(5);
    }
    if (/^[A-Za-z]{0,5}-?[0-9]{0,2}$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    setIsLoading(true);

    setTimeout(() => {
      const randomBatteryPercentage = Math.floor(Math.random() * 101) + "%";
      const randomLastUpdate = new Date(
        2024,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1
      ).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const randomRechargeCycles = Math.floor(Math.random() * 101) + " ciclos";
      const randomTemperature = Math.floor(Math.random() * 12) + 25 + "°C";
      const randomNextReview = new Date(
        2025,
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 28) + 1
      ).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      setDeviceData({
        identifier: inputValue,
        batteryPercentage: randomBatteryPercentage,
        lastUpdate: randomLastUpdate,
        rechargeCycles: randomRechargeCycles,
        temperature: randomTemperature,
        nextReview: randomNextReview,
      });

      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className={style.container}>
      {isLoading && (
        <div className={style.loading}>
          <div className={style.circle}></div>
        </div>
      )}
      <Header />
      <div className={`${style.cont} ${isLoading ? "blur-sm" : ""}`}>
        <div className={style.divId}>
          <p className={style.text}>
            Na parte traseira da sua SUNBOX, você encontrará um{" "}
            <span className="font-bold">código identificador exclusivo</span>
            . Com esse código, é possível acessar informações detalhadas sobre o
            dispositivo, como a porcentagem atual de bateria, última atualização
            do sistema, e outros dados importantes para acompanhamento e
            manutenção. <br />{" "}
            <span className="font-bold">
              Sua SUNBOX conectada e sempre sob seu controle!
            </span>
          </p>
          <Image
            src="/id-sunbox.svg"
            width="600"
            height="500"
            alt="Id SunBox"
            className={style.image}
          />
          <form onSubmit={handleSubmit} className={style.formulario}>
            <input
              type="text"
              placeholder="XXXXX-00"
              value={inputValue}
              onChange={handleInputChange}
              className={style.input}
            />
            <button
              type="submit"
              className={style.button}
              disabled={isButtonDisabled}
            >
              Enviar
            </button>
          </form>
        </div>
        <div className={style.divLinha}></div>
        <div className={style.divStatus}>
          <h1 className={style.title}>Status da sua SUNBOX</h1>
          <div className={style.status}>
            <p>
              <strong>Código-identificador:</strong> {deviceData?.identifier}
            </p>
            <p>
              <strong>Porcentagem da bateria:</strong>{" "}
              {deviceData?.batteryPercentage}
            </p>
            <p>
              <strong>Última atualização do sistema:</strong>{" "}
              {deviceData?.lastUpdate}
            </p>
            <p>
              <strong>Ciclos de recarga realizados:</strong>{" "}
              {deviceData?.rechargeCycles}
            </p>
            <p>
              <strong>Temperatura atual do dispositivo:</strong>{" "}
              {deviceData?.temperature}
            </p>
            <p>
              <strong>Próxima revisão recomendada:</strong>{" "}
              {deviceData?.nextReview}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
