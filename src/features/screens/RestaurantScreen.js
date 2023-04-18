import { Searchbar } from "react-native-paper";
import {
    FlatList,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import RestaurantInfoCardComp from "../components/RestaurantInfoCardComp";
import styled from "styled-components/native";
import { Spacer } from "../components/spacer/spacerComponent";
import { SafeArea } from "../components/SafeArea";

const RestaurantScreen = () => {

    const RestaurantListView = styled(FlatList).attrs({
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#f1f1f1"
    })``;

    const SearchBarView = styled.View`
        background-color: #f1f1f1;
        color: white;
        padding: ${(props) => props.theme.space[3]};
        padding-bottom: 8px;
    `;

    const Search = styled(Searchbar)`
    background-color: white;
    `;

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeArea>
                    {/* <SearchBarView>
                        <Search />
                    </SearchBarView> */}
                    {/* <Spacer position="top" size="large" /> */}
                    <RestaurantListView
                        data={[
                            { name: 1 },
                            { name: 2 },
                            { name: 3 },
                            { name: 4 },
                            { name: 5 },
                            { name: 6 },
                        ]}
                        renderItem={() =>
                        (
                            <Spacer position="top" size="medium">
                                <RestaurantInfoCardComp />
                            </Spacer>
                        )}
                        keyExtractor={(item) => item.name}
                    />
                </SafeArea>
            </TouchableWithoutFeedback>
        </>
    )
}

export default RestaurantScreen