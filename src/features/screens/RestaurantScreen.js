import { Searchbar } from "react-native-paper";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import RestaurantInfoCardComp from "../components/RestaurantInfoCardComp";

const isAndroid = Platform.OS === "android";

const RestaurantScreen = () => {
    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.searchbar}>
                        <Searchbar
                            style={{ backgroundColor: "white" }}
                        />
                    </View>
                    <View style={styles.list}>
                        <RestaurantInfoCardComp />
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
    },
    searchbar: {
        backgroundColor: "#E5E0FF",
        padding: 16
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: "#E5E0FF",
    },
});
export default RestaurantScreen