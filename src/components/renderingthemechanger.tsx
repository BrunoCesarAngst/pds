/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon  } from '@heroicons/react/solid'

// const {systemTheme, theme, setTheme} = useTheme();

type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

export interface IconsThemes {
  icon: HeroIcon;
}

export interface Icons {
  sunIcon: HeroIcon;
  moonIcon: HeroIcon;
}

export interface Theme extends Icons {
  themeOfSys: 'dark' | 'light' | undefined;
  theTheme: string | undefined;
  updateTheme: (theTheme: string) => void;
  icons: Icons
}

export function RenderingThemeChanger(props: Theme) {  
  if(props.themeOfSys === props.theTheme){
    return (
      <props.sunIcon
        className="w-9 h-9 text-yellow-500"
        role="button"
        onClick={() => {
          props.updateTheme('light')
      }}
      />
    )
  } else {
    return (
      <props.moonIcon
        className="w-9 h-9 text-gray-400"
        role="button"
        onClick={() => {
          props.updateTheme('dark')
      }}
      />
    )
  }
}