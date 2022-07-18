import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import DarkMode from "../DarkMode";

export default function Header() {
  const {systemTheme , theme, setTheme} = useTheme ();

  const renderThemeChanger= () => {

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
        )
      }
  };

  return (
    <header className="h-15 shadow-sm dark:border-gray-700">
      <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* DarkMode */}
        <DarkMode />

        {renderThemeChanger()}
      </div>
    </header>
  )
}