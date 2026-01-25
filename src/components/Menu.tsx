import Link from "next/link";
import { Button } from "./ui/button";
import ButtonDarkMod from "./ButtonDarkMod";

const Menu = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 border-b bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors duration-300">
      <div
        className="w-40 h-16 bg-[url('../img/Pokemon-Logo.png')] bg-contain bg-no-repeat bg-center 
                   transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
      ></div>
      <ul className="flex gap-4 items-center">
        <li>
          <Button
            variant="ghost"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Link href="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Link href="/about">Sobre</Link>
          </Button>
        </li>
        <li>
          <ButtonDarkMod />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
