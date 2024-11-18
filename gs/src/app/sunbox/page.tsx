"use client";

import Footer from "@/components/Footer/Footer";
import Header from "../../components/Header/Header";
import Image from "next/image";
import { useState } from "react";

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
    <div className="flex flex-col min-h-screen relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      )}
      <Header />
      <div
        className={`flex flex-grow w-full h-auto items-center ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        <div className="w-[calc(50%-0.5px)] h-[calc(100vh-112px)] items-start flex flex-col justify-center left-0 gap-4">
          <p className="w-[45rem] ml-[4.5rem] text-lg">
            Na parte traseira da sua SUNBOX, você encontrará um{" "}
            <span className="font-bold">código identificador exclusivo</span>
            . Com esse código, é possível acessar informações detalhadas sobre o
            dispositivo, como a porcentagem atual de bateria, última atualização do sistema,
             e outros dados importantes para acompanhamento e
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
            className="ml-[4rem]"
          />
          <form
            onSubmit={handleSubmit}
            className="flex items-center ml-[4.5rem] gap-5"
          >
            <input
              type="text"
              placeholder="XXXXX-00"
              value={inputValue}
              onChange={handleInputChange}
              className="p-2 w-[6.5rem] border rounded-lg border-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-verde pl-5 pr-5 pt-1 pb-1 text-2xl font-bold rounded-3xl tracking-[0.1em] hover:scale-110 transform transition-transform hover:text-white"
              disabled={isButtonDisabled}
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="w-[1px] h-[calc(90vh-112px)] bg-gray-300"></div>
        <div className="w-[calc(50%-0.5px)] h-[calc(100vh-112px)] flex flex-col justify-center gap-12">
        <h1 className="flex ml-[4.5rem] mr-auto text-6xl relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#17EB26] after:absolute after:bottom-[-2px]">Status da sua SUNBOX</h1>
          <div className="mt-4 ml-[4.5rem] flex flex-col gap-5">
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
