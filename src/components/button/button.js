import React from "react";

const Button = ({ label }) => {
  return (
    <div className="buttonStyle" data-testid="button">
      {label}
    </div>
  );
};

export default Button;
