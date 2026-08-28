"use client"
import { ReactNode } from "react";

type MinecraftButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
};

const MinecraftButton = ({
  children,
  onClick,
  href,
}: MinecraftButtonProps) => {
  const handleClick = () => {
    new Audio("/click.mp3").play().catch(() => {});
    onClick?.();
  };


  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="minecraftButton flex items-center justify-center p-4"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="minecraftButton flex items-center justify-center p-4"
    >
      {children}
    </button>
  );
};

export default MinecraftButton;