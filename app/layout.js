import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Ryan | Dev Front-end",
  description:
    "Sou mineiro de BH, tenho 26 anos e 13 anos de experiência em desenvolvimento de aplicações. Atualmente, atuo como desenvolvedor front-end na ioasys.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
