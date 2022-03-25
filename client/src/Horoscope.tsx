import React from "react";
import TextBox from "./TextBox";

export default function Horoscope() {
  return (
    <div>
      <h1>Horoscope React Lab!</h1>
      <TextBox label="Sun" />
      <TextBox label="Moon" />
      <TextBox label="Rising" />
    </div>
  );
}
