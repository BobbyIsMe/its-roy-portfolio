"use client"
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";


const MinecraftButton = ({ children, onClick, className, href, }: { children: ReactNode, onClick?: () => void, className?: string, href?: string }) => {

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        onMouseDown={() => {
          new Audio("/click.mp3").play().catch(() => { });
        }}
        className="minecraftButtonBorder"
      >
        <div className={twMerge("minecraftButton flex items-center justify-center p-4", className)}>{children}</div>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseDown={() => {
        new Audio("/click.mp3").play().catch(() => { });
      }}
      className="minecraftButtonBorder"
    >
      <div className={twMerge("minecraftButton flex items-center justify-center p-4", className)}>{children}</div>
    </button>
  );
};

export default MinecraftButton;