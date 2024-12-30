import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/Providers";
import ThemeToggleSwitcher from "@/app/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shu Sudoku",
  description: "play smarty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Providers >
        <ThemeToggleSwitcher/>
          {children}
        </Providers>
        </body>
    </html>
  );
}
