"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

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
  return <Switch onClick={() => togleeDakMod()}>Dark-Mod</Switch>;
};

export default ButtonDarkMod;
