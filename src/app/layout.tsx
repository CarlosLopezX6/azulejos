import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";

/*
  El template ayuda a poner Teslo | Shop en todas las paginas, el %s lo que hay en esa pagina
  El default es lo que se mostrará si de casualidad no hay metadata en esa pagina o titulo.
*/
export const metadata: Metadata = {
  title: {
    template: "%s - El Gigante de los Azulejos",                
    default: "Home - El Gigante de los Azulejos"
  },
  description: "Tienda virtual de El Gigante de los Azulejos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${inter.variable} ${geistMono.variable} antialiased`}
        className={ inter.className }
      >
        {children}
      </body>
    </html>
  );
}
