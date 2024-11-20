"use client";

import Footer from "@/components/Footer/Footer";
import Header from "../../components/Header/Header";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "../styles/Compras.module.css";

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
      <div className={styles.container}>
        <h2 className={styles.novo}>Novo</h2>
        <h1 className={styles.title}>{boxDetails[selectedBox].title}</h1>
        <p className="ml-20">R$ {boxDetails[selectedBox].price}</p>
        <div className={styles.sunbox}>
          <Image
            src={boxDetails[selectedBox].imageSrc}
            width="900"
            height="750"
            alt={Id SunBox ${selectedBox}}
            className={styles.image}
          />
          <div className={styles.sizes}>
            <button
              className={`${styles.size} ${
                selectedBox === "P"
                  ? "font-bold border-4 border-verde"
                  : "border-[1px] border-black"
              }`}
              onClick={() => setSelectedBox("P")}
            >
              SUNBOX P <p className="ml-20 font-light text-sm">Por R$1.499</p>
            </button>
            <button
              className={`${styles.size} ${
                selectedBox === "M"
                  ? "font-bold border-4 border-verde"
                  : "border-2 border-black"
              }`}
              onClick={() => setSelectedBox("M")}
            >
              SUNBOX M <p className="ml-20 font-light text-sm">Por R$3.699</p>
            </button>
            <button
              className={`${styles.size} ${
                selectedBox === "G"
                  ? "font-bold border-4 border-verde"
                  : "border-2 border-black"
              }`}
              onClick={() => setSelectedBox("G")}
            >
              SUNBOX G <p className="ml-20 font-light text-sm">Por R$9.499</p>
            </button>
            <div className={styles.moreInfo}>
              <p className="font-medium">
                Quer saber mais informações <br /> da SUNBOX?
              </p>
              <p className="text-sm">Confira mais detalhes abaixo!</p>
              <IoIosArrowDown
                className={styles.arrowDown}
                onClick={handleScrollToCompra}
              />
            </div>
          </div>
        </div>
        <div
          id="compra"
          className={styles.divInfo}
        >
          <div className={styles.infos}>
            {selectedBox === "P" && (
              <div>
                <h1 className="font-semibold text-2xl">
                  Mais informações sobre a SUNBOX P
                </h1>
                <p>
                  <span className="font-semibold">- Dimensões:</span> o tamanho
                  P é o mais compacto da linha SUNBOX, tendo 35cm de largura{" "}
                  <br /> e 45cm de altura.
                </p>
                <p>
                  <span className="font-semibold">- Peso:</span> 8kg, leve e
                  portátil.
                </p>
                <p>
                  <span className="font-semibold">- Painel solar:</span> 100W
                </p>
                <p>
                  <span className="font-semibold">
                    - Capacidade da bateria:
                  </span>{" "}
                  500Wh
                </p>
                <p>
                  <span className="font-semibold">- Ideal para:</span> carregar
                  celulares e pequenos dispositivos elétricos.
                </p>
                <p>
                  <span className="font-semibold">- Saídas de energia:</span>{" "}
                  <br /> - 4 portas USB <br />- 2 portas UBS-C <br />- 2 tomadas
                  bivolt
                </p>
              </div>
            )}
            {selectedBox === "M" && (
              <div>
                <h1 className="font-semibold text-2xl">
                  Mais informações sobre a SUNBOX M
                </h1>
                <p>
                  <span className="font-semibold">- Dimensões:</span> o tamanho
                  M é o intermediario da linha SUNBOX, tendo 60cm de largura{" "}
                  <br /> e 45cm de altura.
                </p>
                <p>
                  <span className="font-semibold">- Peso:</span> 13kg, portátil
                  mas com maior capacidade.
                </p>
                <p>
                  <span className="font-semibold">- Painel solar:</span> 250W
                </p>
                <p>
                  <span className="font-semibold">
                    - Capacidade da bateria:
                  </span>{" "}
                  1300Wh
                </p>
                <p>
                  <span className="font-semibold">- Ideal para:</span> carregar
                  laptops, pequenos ventiladores e eletrodomésticos <br /> de
                  baixo consumo.
                </p>
                <p>
                  <span className="font-semibold">- Saídas de energia:</span>{" "}
                  <br /> - 6 portas USB <br />- 4 portas UBS-C <br />- 4 tomadas
                  bivolt
                </p>
              </div>
            )}
            {selectedBox === "G" && (
              <div>
                <h1 className="font-semibold text-2xl">
                  Mais informações sobre a SUNBOX G
                </h1>
                <p>
                  <span className="font-semibold">- Dimensões:</span> o tamanho
                  G é o maior e mais completo da linha SUNBOX, tendo 95cm de
                  largura
                  <br /> e 70cm de altura.
                </p>
                <p>
                  <span className="font-semibold">- Peso:</span> 22kg, requer
                  instalação fixa ou semi-fixa.
                </p>
                <p>
                  <span className="font-semibold">- Painel solar:</span> 500W
                </p>
                <p>
                  <span className="font-semibold">
                    - Capacidade da bateria:
                  </span>
                  3500Wh
                </p>
                <p>
                  <span className="font-semibold">- Ideal para:</span> fornecer
                  energia para pequenos sistemas elétricos domésticos, como
                  geladeiras <br /> compactas, TVs maiores e computadores de
                  mesa,
                </p>
                <p>
                  <span className="font-semibold">- Saídas de energia:</span>
                  <br /> - 8 portas USB <br />- 6 portas UBS-C <br />- 8 tomadas
                  bivolt <br />
                </p>
              </div>
            )}
          </div>
          <div className={styles.buy}>
            <h3>Quantidade de cada tamanho:</h3>
            <div className={styles.quantities}>
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
            <div className={styles.quantities}>
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
            <div className={styles.quantities}>
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
            <div>
              <button
                className={`] ${
                  isAnyQuantitySelected ? "bg-verde" : "bg-green-300"
                } text-white py-2 px-4 rounded`}
                disabled={!isAnyQuantitySelected}
                onClick={() => setShowPayment(true)}
              >
                Finalizar Compra
              </button>
              {showPayment && (
                <div className={styles.payment}>
                  <div className={styles.method}>
                    <button
                      className={styles.xButton}
                      onClick={() => setShowPayment(false)}
                    >
                      X
                    </button>
                    <h2 className="text-xl font-semibold mb-4">
                      Selecione o método de pagamento:
                    </h2>
                    <div className={styles.options}>
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
                <div className={styles.loading}>
                  <div className={styles.divLoading}>
                    <p className="text-xl font-semibold">
                      Finalizando compra...
                    </p>
                  </div>
                </div>
              )}
              {showSuccessMessage && (
                <div className={styles.loading}>
                  <div className={styles.divLoading}>
                    <p className="text-xl font-semibold">
                      Compra realizada com sucesso!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
