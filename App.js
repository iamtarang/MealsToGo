import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import RestaurantScreen from "./src/features/screens/RestaurantScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { restaurantRequest } from "./src/services/restaurants/mock/RestaurantService";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  //! keep the app's name same in app.json and package.json

  const Maps = () => <Text>Maps</Text>
  const Settings = () => <Text>Settings</Text>

  const TAB_ICON = {
    Restaurants: "restaurant",
    Maps: "md-location-sharp",
    Settings: "settings"
  }

  const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];

    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      // headerShown: false,
      headerTitle: { allowFontScaling: true },
      headerStyle: { backgroundColor: "#EA5C2B", height: 100, borderRadius: 15 },
      headerTitleStyle: { color: 'white', justifyContent: "center", fontWeight: "bold" },
      headerTitleAlign: "center",
      //
      tabBarStyle: { backgroundColor: '#EA5C2B', height: 55 },
      tabBarLabelStyle: { paddingBottom: 5 },
      tabBarActiveTintColor: "#FEFF86",
      tabBarInactiveTintColor: "whitesmoke",
      tabBarHideOnKeyboard: true,
    }
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <View style={{ flex: 1, backgroundColor: "#aac981" }}> */}
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={
              screenOptions
            }>
            <Tab.Screen name="Restaurants"
              options={{
                tabBarLabel: 'Home',
                headerRight: () => (
                  <Ionicons name='search'
                    size={30} color="white"
                    style={{ paddingRight: 10 }}
                    // onPress={}
                  />
                )
              }}
              component={RestaurantScreen} />
            <Tab.Screen name="Maps" component={Maps} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
        {/* </View> */}
      </ThemeProvider>
      <ExpoStatusBar style="light"
        translucent={true}
        backgroundColor="#EA5C2B"
      />
    </>
  );
}

