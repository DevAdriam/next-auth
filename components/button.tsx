"use client";

import { signOut } from "next-auth/react";
import React from "react";

interface Button {
  title: string;
  sz?: "lg" | "md" | "sm";
  color: string;
  isGradient?: boolean | null;
  gradientColor?: string | null;
  backgroundColor?: string | null;
}

const CustomButton = ({
  title,
  sz,
  color,
  isGradient,
  backgroundColor,
  gradientColor,
}: Button) => {
  return (
    <button
      style={{
        width: `${
          sz === "lg"
            ? "200px"
            : sz === "md"
            ? "150px"
            : sz === "sm"
            ? "100px"
            : "300px"
        }`,
        padding: "20px 30px ",
        color: `${color}`,
        fontSize: "15px",
        fontWeight: "bold",
        background: `${isGradient ? gradientColor : backgroundColor}`,
        borderRadius: "10px",
        outline: "none",
        border: "none",
        cursor: "pointer",
        margin: "20px",
      }}
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
    >
      {title}
    </button>
  );
};

export default CustomButton;
