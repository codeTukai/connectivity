import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "orbitary";
  size: "sm" | "md" | "lg";
  style:"sm" | "md";
  text: string,
  fullWidth?:boolean
  onClick?: () => void;
  className?:string;
}

const variantStyles = {
  primary: "bg-[#7164c0] text-white hover:bg-[#6255b0] active:bg-[#5548a0]",
  secondary:
    "bg-[#d9ddee] text-gray-800 hover:bg-[#cdd2e8] active:bg-[#c1c7df]",
  orbitary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
};

const sizeStyles = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const customStyles = {
    sm:"rounded-md",
    md:"rounded-2xl"
}

function Button({ variant, size, style, text, fullWidth = false}: ButtonProps) {
  return (
    <>
    <div>
        <button
        type="button"
         className={`
        ${fullWidth ? "w-full" : ""}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${customStyles[style]}

        
        
      `}
        
        >
          <span>{text}</span>
        </button>
    </div>

    </>
  )
}

export default Button;
