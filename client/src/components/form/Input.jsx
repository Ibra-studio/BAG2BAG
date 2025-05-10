import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function Input({ value, onChange, label, type, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[18px]">{label}</label>

      {/* Wrapper avec position relative */}
      <div className="relative">
        <input
          className="bg-[#F7F7F7] text-[20px] p-3 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-btn-primary"
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {/* Icône placée en absolute à droite */}
        {isPassword && (
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-black"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <FaRegEye size={20} />
            ) : (
              <FaRegEyeSlash size={20} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
