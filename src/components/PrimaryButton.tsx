import React from "react";

type PrimaryButtonTheme = "dark" | "light" | "social" | "text"; //한줄짜리는 type선언

interface IPrimaryButtonProps {
  //객체는 interface 선언
  theme: PrimaryButtonTheme;
  onClick: () => void;
  children: string;
  isDisabled?: boolean;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabledStyle = "disabled:bg-mono100 text-mono200";
const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
}; //Record는 객체를 만들어주는 함수

export default function PrimaryButton({
  theme,
  onClick,
  children,
  isDisabled,
}: IPrimaryButtonProps) {
  return (
    <button
      className={` rounded-primary-button
    w-full h-[59px] ${color[theme]}
    ${disabledStyle}
    `}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
