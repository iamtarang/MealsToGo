import { Searchbar } from "react-native-paper";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
} from "react-native";

const isAndroid = Platform.OS === "android";

const RestaurantScreen = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.searchbar}>
                    <Searchbar />
                </View>
                <View style={styles.list}>
                    {/* <Text>list</Text> */}
                    {/* <RestaurantInfoComponent /> */}
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
    },
    searchbar: {
        padding: 16,
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: "lightcoral",
    },
});
export default RestaurantScreen