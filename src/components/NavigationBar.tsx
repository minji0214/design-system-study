import React from "react";
import IconButton from "./IconButton";
import { flexRowSpaceBetweenCenter } from "../styles/flex";

interface INavigationBarProps {
  onBackButtonClick: () => void;
  onCloseButtonClick: () => void;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  showTitle: boolean;
  title?: string;
  color: "primary" | "white";
  isDark: boolean;
}
export default function NavigationBar({
  onBackButtonClick,
  onCloseButtonClick,
  showBackButton = false,
  showCloseButton = false,
  showTitle,
  title = "",
  isDark,
}: INavigationBarProps) {
  return (
    <div className={`w-full ${flexRowSpaceBetweenCenter}`}>
      {/* 뒤로가기 버튼 */}
      <section className="flex items-center w-full">
        {showBackButton && (
          <IconButton
            alt="icon"
            iconPath="/icons/ic-back-left.svg"
            onClick={onBackButtonClick}
          />
        )}
        {showTitle && (
          <h1
            className={`
          text-lg 
          ${isDark ? "text-white" : "text-black"}
        
        `}
          >
            {title}
          </h1>
        )}
      </section>
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          alt="icon"
          iconPath={`/icons/ic-cancel.svg${isDark ? "-dark" : ""}`}
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
