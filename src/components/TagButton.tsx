import React from "react";

interface ITagButtonProps {
  children: string;
  onClick: () => void;
  isChecked: boolean;
}

export default function TagButton({
  onClick,
  children,
  isChecked,
}: ITagButtonProps) {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "bg-dark-opacity text-white";
  return (
    <button
      className={`rounded-tag-button px-[10px] border
      text-sm
      font-medium
          border-white h-[33px] ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
