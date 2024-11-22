import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="folha.svg" />
        <title>Eco+</title>
      </head>
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
