"use client";
import React, { forwardRef, useEffect } from "react";

const PhoneInput = forwardRef(({ setValue, ...rest }, ref) => {
  const handleChangeInput = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");

    setValue("phone", value);
  };

  useEffect(() => {
    const phoneInput = document.getElementById("phone_input");
    phoneInput.addEventListener("input", handleChangeInput);

    return () => {
      phoneInput.removeEventListener("input", handleChangeInput);
    };
  }, []);

  return (
    <input
      ref={ref}
      id="phone_input"
      type="text"
      placeholder="(__) _____-____"
      {...rest}
    />
  );
});

export default PhoneInput;
