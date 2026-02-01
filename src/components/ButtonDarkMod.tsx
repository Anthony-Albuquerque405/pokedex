"use client";

import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";
import { Sun, Moon } from "lucide-react";

const ButtonDarkMod = () => {
  const [darkMod, setDarkMod] = useState(false);

  useEffect(() => {
    const saveThema = localStorage.getItem("theme");
    if (saveThema === "dark") {
      document.querySelector("html")?.classList.add("dark");
      setDarkMod(true);
    } else {
      document.querySelector("html")?.classList.remove("dark");
      setDarkMod(false);
    }
  }, []);

  const togleeDakMod = () => {
    document.querySelector("html");
    if (darkMod) {
      document.querySelector("html")?.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMod(false);
    } else {
      document.querySelector("html")?.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMod(true);
    }
  };
  return <Switch checked={darkMod} onCheckedChange={togleeDakMod}></Switch>;
};

export default ButtonDarkMod;
