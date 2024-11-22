"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Login.module.css";
import { FaLeaf } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

interface UserType {
  id: number;
  name: string;
  email: string;
  cpf: string;
  password: string;
}

const User = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchLastUserId = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/last");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserId(data.id);
      } catch (error) {
        console.error("Failed to fetch last user ID:", error);
      }
    };
    fetchLastUserId();
  }, []);

  useEffect(() => {
    if (userId !== null) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`http://localhost:5000/users/${userId}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user) {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setMessage("Dados atualizados com sucesso!");
      setTimeout(() => {
        setMessage(null);
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setMessage("Conta deletada com sucesso!");
      setTimeout(() => {
        setMessage(null);
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  if (loading) return <div className={styles.title}>Procurando usuário...</div>;

  if (!user) return <div className={styles.title}>Usuário não encontrado!</div>;

  return (
    <div className={styles.container}>
      <div className={styles.dados}>
        <Link href="/">
          <IoIosArrowBack className={styles.seta} />
        </Link>
        <FaLeaf className={styles.leaf} />
        <h1 className={styles.atualizar}>Atualizar dados:</h1>
        <form className={styles.formulario}>
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Nome"
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Email"
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="cpf"
            value={user.cpf}
            placeholder="CPF"
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Senha"
            onChange={handleChange}
            className={styles.input}
            required
          />
          <button
            className={styles.button}
            type="button"
            onClick={handleUpdate}
          >
            Atualizar
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={handleDelete}
          >
            Deletar
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

export default User;
