import { Text, Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Image } from "react-native";
import { View } from "react-native";
import { Spacer } from "./spacer/spacerComponent";

const RestaurantInfoCardComp = ({ restaurant = {} }) => {

    const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    `;

    const Image = styled(Card.Cover)`

    `;

    const Icon = styled.Image`
        width: 15px;
        height: 15px; 
    `;

    const Rating = styled.View`
        flex-direction: row;
    `;

    const Section = styled.View`
        flex-direction: row;
        align-items: center;
    `;

    const SectionEnd = styled.View`
        flex: 1;
        flex-direction: row;
        justify-content: flex-end;
    `;

    const Title = styled.Text`
        font-family: ${(props) => props.theme.fonts.body};
        font-size: ${(props) => props.theme.fontSizes.title};
    `;

    const Address = styled.Text`
        font-family: ${(props) => props.theme.fonts.monospace};
        font-size: ${(props) => props.theme.fontSizes.caption};
    `;

    const Open = styled(SvgXml)`
        flex-direction: row;
    `;

    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
        ],
        address = "100 some street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <>
            <RestaurantCard
                mode='elevated'
                elevation={5}>
                <Image
                    style={{
                        margin: "5%",
                        marginBottom: "2%"
                    }}
                    source={{ uri: photos[0] }}
                />
                <Card.Content>
                    <View>
                        <Title>{name}</Title>
                        <Section>
                            <Rating>
                                {ratingArray.map((info) => (
                                    <SvgXml
                                        // key={}
                                        width={20}
                                        height={20}
                                        xml={star} />
                                ))}
                            </Rating>
                            <SectionEnd>
                                {isClosedTemporarily && (
                                    <Text variant="labelMedium" style={{ color: "red" }} >
                                        CLOSED TEMPORARILY
                                    </Text>
                                )}
                                <Spacer position="left" size="medium" >
                                    {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                                </Spacer>
                                <Spacer position="left" size="medium" >
                                    <Icon source={{ uri: icon }} />
                                </Spacer>
                            </SectionEnd>
                        </Section>
                        <Address>{address}</Address>
                    </View>
                </Card.Content>
            </RestaurantCard>
        </>
    )
}

export default RestaurantInfoCardComp