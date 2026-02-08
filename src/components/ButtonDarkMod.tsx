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
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg">
      <Sun className="text-yellow-500 transition-transform duration-300 hover:scale-110" />
      <Switch
        checked={darkMod}
        onCheckedChange={togleeDakMod}
        className="data-[state=checked]:bg-blue-700 data-[state=unchecked]:bg-yellow-400 
                 relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300"
      ></Switch>
      <Moon className="text-red-400 transition-transform duration-300 hover:scale-110" />
    </div>
  );
};

export default ButtonDarkMod;
