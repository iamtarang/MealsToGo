import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native-paper";
import RestaurantScreen from "./src/features/screens/RestaurantScreen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" backgroundColor="grey" />
    </>
  );
}

