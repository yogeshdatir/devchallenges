import React, { HTMLInputTypeAttribute, ReactElement } from "react";
import "./Input.css";

interface Props {
  type?: HTMLInputTypeAttribute | undefined;
  hover?: boolean;
  focus?: boolean;
  error?: boolean;
  disabled?: boolean;
  helperText?: string | undefined;
  startIcon?: ReactElement<any, any>;
  endIcon?: ReactElement<any, any>;
  value?: any;
  size?: "sm" | "md";
  fullWidth?: boolean;
  multiline?: boolean;
  row?: number;
}

const Input = ({
  type = "text",
  hover,
  focus,
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
}: Props) => {
  const errorClass = error ? ` input-error` : ``;
  const hoverClass = hover ? ` input-hover` : ``;
  const focusClass = focus ? ` input-focus` : ``;
  const disabledClass = disabled ? ` input-disabled` : ``;
  const startIconClass = startIcon ? ` input-start-icon` : ``;
  const endIconClass = endIcon ? ` input-end-icon` : ``;
  const sizeClass = size === "sm" ? ` input-sm` : ``;
  const fullWidthClass = fullWidth ? ` input-fullWidth` : ``;

  return (
    <div className="input-container">
      {!multiline ? (
        <>
          <input
            type={type}
            placeholder="Placeholder"
            className={`input${errorClass}${hoverClass}${focusClass}${disabledClass}${startIconClass}${endIconClass}${sizeClass}${fullWidthClass}`}
            disabled={disabled}
            value={value}
          />
          {startIcon}
          {endIcon}
          <label className={`input-label`}>Label</label>
          {helperText?.trim() && (
            <span className="helper-text">{helperText}</span>
          )}
        </>
      ) : (
        <>
          <textarea className={`input`} rows={row} placeholder='Placeholder'></textarea>
          <label className={`input-label`}>Label</label>
        </>
      )}
    </div>
  );
};

export default Input;
