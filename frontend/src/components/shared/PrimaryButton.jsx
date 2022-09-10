import React from "react";

export const PrimaryButton = ({ id, label, className, onClick, disabled }) => {
  return (
    <button data-testid={id} id={id} className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
