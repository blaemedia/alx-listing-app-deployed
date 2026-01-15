import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;        // allows <Button>Text</Button>
  variant?: "ghost" | "primary" | "secondary"; // or whatever variants you use
  className?: string;         // optional extra CSS classes
}

export default function Button({ children, variant, className }: ButtonProps) {
  const baseClass = "px-4 py-2 rounded"; // basic styling
  const variantClass =
    variant === "ghost"
      ? "bg-transparent border"
      : "bg-blue-500 text-white";

  return (
    <button className={`${baseClass} ${variantClass} ${className ?? ""}`}>
      {children}
    </button>
  );
}
