import React from "react";

export default function TextBox({ label }: { label: string }) {
  return <input type="text" placeholder={label} />;
}
