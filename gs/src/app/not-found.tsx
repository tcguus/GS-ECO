import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <FaLeaf className="text-4xl mb-[2rem] text-verde" />
      <div className="flex gap-4">
        <h1 className="text-4xl font-bold">404 - Página não encontrada</h1>
      </div>
      <p className="mt-4 text-lg">
        A página que você está procurando não existe.
      </p>
      <Link href="/" className="mt-6 text-2xl text-verde font-bold underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
