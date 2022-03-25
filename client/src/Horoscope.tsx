import React from "react";
import TextBox from "./TextBox";

export default function Horoscope() {
  const [sun, setSun] = React.useState("");
  const [moon, setMoon] = React.useState("");
  const [rising, setRising] = React.useState("");

  return (
    <div>
      <h1>Horoscope React Lab!</h1>
      <TextBox label="Sun" value={sun} setValue={setSun} />
      <TextBox label="Moon" value={moon} setValue={setMoon} />
      <TextBox label="Rising" value={rising} setValue={setRising} />
    </div>
  );
}
