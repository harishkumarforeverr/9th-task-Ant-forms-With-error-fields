import React from "react";
import { Input } from "antd";

const CustomInput = ({
  label,
  className,
  prefix,
  suffix,
  placeholder,
  errorText,
  value,
  onChange,
  type,
  onBlur,
  name,
  ErrorClass,
  addonAfter,
  style,
  onKeyDown,
  disabled
}) => {
  return (
    <div className={className} label={label}>
      <Input
        placeholder={placeholder}
        autoComplete={"off"}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        type={type ? type : "text"}
        suffix={suffix}
        onBlur={onBlur}
        name={name}
        addonAfter={addonAfter}
        style={style}
        prefix={prefix}
        disabled={disabled}
      />
      {errorText && (
        <p
          className={ErrorClass}
          style={{ color: "#f44336", fontSize: "1.2rem" }}
        >
          {errorText}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
