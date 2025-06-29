import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

// Fuente optimizada
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi App",
  description: "Aplicación con fuente optimizada",
};

interface RootLayoutProps {
  children: ReactNode;  
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="lZ5eYKKZ8rKNRekiNteY-z92rYa2Z1vtPtu9ZIFT0FY" />
        <title>Mi App</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
