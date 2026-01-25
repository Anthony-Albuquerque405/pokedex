"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const ButtonDarkMod = () => {
  const [darkMod, setDarkMod] = useState(false);

  const togleeDakMod = () => {
    document.querySelector("html")?.classList.add("dark");
    if (darkMod) {
      document.querySelector("html")?.classList.remove("dark");
      setDarkMod(false);
    } else {
      document.querySelector("html")?.classList.add("dark");
      setDarkMod(true);
    }
  };
  return <Button onClick={() => togleeDakMod()}>Dark-Mod</Button>;
};

export default ButtonDarkMod;
