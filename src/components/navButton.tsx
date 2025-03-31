import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  to: string;
  btnMessage: string;
}

function NavigationButton({ to, btnMessage }: ButtonProps) {
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
