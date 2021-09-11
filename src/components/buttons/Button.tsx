import React from "react";
import "./Button.css";

interface Props {
  children?: JSX.Element | string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "default" | "outline" | "text" | undefined;
  size?: "sm" | "md" | "lg";
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string | undefined;
  endIcon?: string | undefined;
  color?: "default" | "primary" | "secondary" | "danger" | undefined;
  hover?: boolean;
  style?: any;
}

const Button = ({
  children = "Default",
  type = "button",
  onClick,
  variant = "default",
  size = "md",
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  color,
  hover,
  ...props
}: Props) => {
  const disableShadowClass =
    disableShadow || disabled ? "btn-disableShadow" : "";
  const startIconClass = startIcon ? "startIcon" : "";
  const endIconClass = endIcon ? "endIcon" : "";
  const colorClass = color ? `btn-color-${color}` : "";
  const hoverClass = hover ? `btn-${variant}-hover ${colorClass}-hover` : ``;

  return (
    <button
      className={`btn btn-${variant} btn-${size} ${disableShadowClass} ${startIconClass} ${endIconClass} ${colorClass} ${hoverClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {startIcon && <span className="material-icons">{startIcon}</span>}
      {children}
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </button>
  );
};

export default Button;
