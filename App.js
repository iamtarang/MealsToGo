import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import RestaurantScreen from "./src/features/screens/RestaurantScreen";

export default function App() {

  const[oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const[latoLoaded] = useLato({
    Lato_400Regular
  })

  if(!oswaldLoaded || !latoLoaded){
    return null
  }

  //! keep the app's name same in app.json and package.json

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

