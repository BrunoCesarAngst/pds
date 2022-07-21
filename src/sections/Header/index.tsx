import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import DarkMode from "../../../zzzzz/DarkMode";

export default function Header() {
  const {systemTheme , theme, setTheme} = useTheme ();

  const renderThemeChanger = () => {  
    if(systemTheme === theme){
      return (
        <SunIcon
          className="w-9 h-9 text-yellow-500"
          role="button"
          onClick={() => {
            setTheme('light')
        }}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-9 h-9 text-gray-400"
          role="button"
          onClick={() => {
            setTheme('dark')
        }}
        />
      )
    }
  }

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