import React from "react";

export interface IIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({
  onClick,
  iconPath,
  alt,
}: IIconButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}
