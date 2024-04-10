import React, { useState } from "react";
import IconButton, { IIconButtonProps } from "./IconButton";
import ErrorMessage, { IErrorMessageProps } from "./ErrorMessage";

interface IDefaultTextFieldProps extends IIconButtonProps, IErrorMessageProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  id: string;
}

export default function DefaultTextField({
  onClick,
  placeholder,
  onChange,
  value,
  iconPath,
  children: errorMessage,
  alt,
  isError,
  id,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div className="relative">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary
      
       border-b
       ${borderColor}`}
      >
        <input
          id={id}
          data-testid={id}
          className="outline-none"
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {!!value && (
          <IconButton onClick={onClick} iconPath={iconPath} alt={alt} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
