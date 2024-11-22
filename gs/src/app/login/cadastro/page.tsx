"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/Cadastro.module.css";
import { FaLeaf } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setMessage("Conta criada com sucesso!");
      setTimeout(() => {
        setMessage(null);
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dados}>
        <Link href="/">
          <IoIosArrowBack className={styles.seta} />
        </Link>
        <FaLeaf className={styles.leaf} />
        <h1 className={styles.insira}>Insira seus dados:</h1>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome..."
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Digite seu email..."
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            type="text"
            name="cpf"
            placeholder="Digite seu CPF..."
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha..."
            onChange={handleChange}
            className={styles.input}
            required
          />
          <button className={styles.button} type="submit">
            Criar conta!
          </button>
        </form>
        {message && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>{message}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
