import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationButtonProps } from "../types/types";

function NavigationButton({ to, btnMessage }: NavigationButtonProps) {
  const nav = useNavigate();

  const handleNav = () => {
    nav(to);
  };

  return (
    <div>
      <button onClick={handleNav}>{btnMessage}</button>
    </div>
  );
}

export default NavigationButton;
