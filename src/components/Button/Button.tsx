import React, { ReactNode } from 'react';
import "./Button.scss";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  type: string;
}
const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className="button"
    >
      {props.children}
    </button>
  );
};

export default Button;