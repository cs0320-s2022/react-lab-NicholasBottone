import React from "react";
import TextBox from "./TextBox";
import axios from "axios";

// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Horoscope() {
  const [sun, setSun] = React.useState("");
  const [moon, setMoon] = React.useState("");
  const [rising, setRising] = React.useState("");

  const [horoscope, setHoroscope] = React.useState<string[]>([]);

  const handleClick = async () => {
    const response = await axios.post("http://localhost:4567/horoscope", {
      sun: sun,
      moon: moon,
      rising: rising,
    });
    if (response.status === 200) {
      setHoroscope(response.data.horoscope);
    } else {
      setHoroscope(["Error"]);
    }
  };

  return (
    <div>
      <h1>Horoscope React Lab!</h1>
      <TextBox label="Sun" value={sun} setValue={setSun} />
      <TextBox label="Moon" value={moon} setValue={setMoon} />
      <TextBox label="Rising" value={rising} setValue={setRising} />
      <AwesomeButton type="primary" onPress={handleClick}>
        Submit
      </AwesomeButton>
      <div>
        {horoscope.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
