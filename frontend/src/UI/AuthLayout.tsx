import type { ReactNode } from "react";
import BG from "../assets/images/coin.jpg";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({children}:AuthLayoutProps) {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {children}
    </div>
  )
}
