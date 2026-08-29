"use client"
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";


const MinecraftButton = ({
  children,
  onClick,
  className,
  href,
}: {  children: ReactNode,
  onClick?: () => void,
  className?: string
  href?: string ,
  }) => {
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
        className={twMerge("minecraftButton flex items-center justify-center p-4", className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={twMerge("minecraftButton flex items-center justify-center p-4", className)}
    >
      {children}
    </button>
  );
};

export default MinecraftButton;