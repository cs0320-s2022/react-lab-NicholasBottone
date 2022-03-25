import React from "react";

export default function TextBox({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
