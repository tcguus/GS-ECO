"use client";

import Footer from "@/components/Footer/Footer";
import Header from "../../components/Header/Header";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Compras() {
  const [selectedBox, setSelectedBox] = useState<"P" | "M" | "G">("P");
  const [quantities, setQuantities] = useState<{
    P: number;
    M: number;
    G: number;
  }>({ P: 0, M: 0, G: 0 });

  const boxDetails: {
    [key in "P" | "M" | "G"]: {
      title: string;
      price: number;
      imageSrc: string;
    };
  } = {
    P: {
      title: "Comprar SUNBOX P",
      price: 1499,
      imageSrc: "/sunbox-p.svg",
    },
    M: {
      title: "Comprar SUNBOX M",
      price: 3699,
      imageSrc: "/sunbox-m.svg",
    },
    G: {
      title: "Comprar SUNBOX G",
      price: 9499,
      imageSrc: "/sunbox-g.svg",
    },
  };

  const handleScrollToCompra = () => {
    const compraElement = document.getElementById("compra");
    if (compraElement) {
      compraElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const incrementQuantity = (size: "P" | "M" | "G") => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [size]: prevQuantities[size] + 1,
    }));
  };

  const decrementQuantity = (size: "P" | "M" | "G") => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [size]: prevQuantities[size] > 0 ? prevQuantities[size] - 1 : 0,
    }));
  };

  const totalPrice =
    boxDetails.P.price * quantities.P +
    boxDetails.M.price * quantities.M +
    boxDetails.G.price * quantities.G;

  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePurchase = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        window.location.reload();
      }, 2000);
    }, 2000);
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const isAnyQuantitySelected =
    quantities.P > 0 || quantities.M > 0 || quantities.G > 0;

  return (
    <div>
      <Header />
      <div className="h-auto flex flex-col">
        <h2 className="text-verde font-semibold text-xl ml-20 mt-14 mb-2">
          Novo
        </h2>
        <h1 className="text-4xl font-semibold ml-20 mb-2">
          {boxDetails[selectedBox].title}
        </h1>
        <p className="ml-20">R$ {boxDetails[selectedBox].price}</p>
        <div className="w-full h-auto flex items-center justify-center">
          <Image
            src={boxDetails[selectedBox].imageSrc}
            width="900"
            height="750"
            alt={`Id SunBox ${selectedBox}`}
            className=" mt-14 transition-transform duration-500 ease-in-out"
          />
          <div className="ml-20 mt-14 flex flex-col gap-8 items-start left-0">
            <button
              className={`pl-2 pt-6 pr-2 pb-6 flex items-center mr-4 border-[1px] rounded-2xl text-xl ${
                selectedBox === "P"
                  ? "font-bold border-4 border-verde"
                  : "border-[1px] border-black"
              }`}
              onClick={() => setSelectedBox("P")}
            >
              SUNBOX P <p className="ml-20 font-light text-sm">Por R$1.499</p>
            </button>
            <button
              className={`pl-2 pt-6 pr-2 pb-6 flex items-center mr-4 border-[1px] rounded-2xl text-xl ${
                selectedBox === "M"
                  ? "font-bold border-4 border-verde"
                  : "border-2 border-black"
              }`}
              onClick={() => setSelectedBox("M")}
            >
              SUNBOX M <p className="ml-20 font-light text-sm">Por R$3.699</p>
            </button>
            <button
              className={`pl-2 pt-6 pr-2 pb-6 flex items-center mr-4 border-[1px] rounded-2xl text-xl ${
                selectedBox === "G"
                  ? "font-bold border-4 border-verde"
                  : "border-2 border-black"
              }`}
              onClick={() => setSelectedBox("G")}
            >
              SUNBOX G <p className="ml-20 font-light text-sm">Por R$9.499</p>
            </button>
            <div className="relative bg-cinza pl-3 pr-3 pt-4 pb-4 rounded-lg w-[17rem]">
              <p className="font-medium">
                Quer saber mais informações <br /> da SUNBOX?
              </p>
              <p className="text-sm">Confira mais detalhes abaixo!</p>
              <IoIosArrowDown
                className="absolute bottom-3 right-3 transition-colors duration-300 cursor-pointer hover:text-verde"
                onClick={handleScrollToCompra}
              />
            </div>
          </div>
        </div>
        <div id="compra" className="mt-20 w-full bg-cinza h-auto">
          <div className="ml-[55px] mt-[50px] mb-[8px] w-[25rem] flex flex-col items-start left-0 gap-2 text-xl">
            <h3>Quantidade de cada tamanho:</h3>
            <div className="flex gap-2 border border-black pr-2 rounded-lg min-w-[220px] max-w-[auto]">
              <button
                className="bg-black text-white rounded-l-md pl-2 pr-2"
                onClick={() => decrementQuantity("P")}
              >
                -
              </button>
              <span>{quantities.P}</span>
              <button
                className="bg-black text-white pl-2 pr-2"
                onClick={() => incrementQuantity("P")}
              >
                +
              </button>
              <span className="flex mr-auto ml-auto"> SUNBOX P</span>
            </div>
            <div className="flex gap-2 border border-black pr-2 rounded-lg min-w-[220px] max-w-[auto]">
              <button
                className="bg-black text-white rounded-l-md pl-2 pr-2"
                onClick={() => decrementQuantity("M")}
              >
                -
              </button>
              <span>{quantities.M}</span>
              <button
                className="bg-black text-white pl-2 pr-2"
                onClick={() => incrementQuantity("M")}
              >
                +
              </button>
              <span className="flex mr-auto ml-auto"> SUNBOX M</span>
            </div>
            <div className="flex gap-2 border border-black pr-2 rounded-lg min-w-[220px] max-w-[auto]">
              <button
                className="bg-black text-white rounded-l-md pl-2 pr-2"
                onClick={() => decrementQuantity("G")}
              >
                -
              </button>
              <span>{quantities.G}</span>
              <button
                className="bg-black text-white pl-2 pr-2"
                onClick={() => incrementQuantity("G")}
              >
                +
              </button>
              <span className="flex mr-auto ml-auto"> SUNBOX G</span>
            </div>
            <p className="text-2xl font-semibold">
              Preço total: R$ {totalPrice}
            </p>
          </div>
          <div>
            <button
              className={`ml-[55px] mb-[50px] ${
                isAnyQuantitySelected ? "bg-verde" : "bg-green-300"
              } text-white py-2 px-4 rounded`}
              disabled={!isAnyQuantitySelected}
              onClick={() => setShowPayment(true)}
            >
              Finalizar Compra
            </button>
            {showPayment && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-lg relative flex flex-col items-start">
                  <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
                    onClick={() => setShowPayment(false)}
                  >
                    X
                  </button>
                  <h2 className="text-xl font-semibold mb-4">
                    Selecione o método de pagamento:
                  </h2>
                  <div className="flex flex-col space-y-2 items-start left-0">
                    <label>
                      <input
                        type="radio"
                        name="payment"
                        value="credit"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-2"
                      />
                      Cartão de Crédito
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="payment"
                        value="debit"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-2"
                      />
                      Cartão de Débito
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="payment"
                        value="pix"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-2"
                      />
                      Pix
                    </label>
                  </div>
                  <button
                    className={`mt-4 mr-auto ml-auto ${
                      paymentMethod ? "bg-verde" : "bg-green-300"
                    } text-white py-2 px-4 rounded`}
                    disabled={!paymentMethod}
                    onClick={handlePurchase}
                  >
                    Comprar!
                  </button>
                </div>
              </div>
            )}
            {loading && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded shadow-lg">
                  <p className="text-xl font-semibold">Finalizando compra...</p>
                </div>
              </div>
            )}
            {showSuccessMessage && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded shadow-lg">
                  <p className="text-xl font-semibold">
                    Compra realizada com sucesso!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
