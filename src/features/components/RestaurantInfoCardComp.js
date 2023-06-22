import { View } from "react-native";
import { Text } from "./typography/textComponent";

import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";

import { Spacer } from "./spacer/spacerComponent";
import {
    RestaurantCard,
    Icon,
    Image,
    Rating,
    Section,
    SectionEnd,
    Title,
    Address,
    CardImage
} from "./RestaurantInfoCardStyles";

const RestaurantInfoCardComp = ({ restaurant = {} }) => {

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
                // mode=''
                elevation={0}>
                <Image source={{ uri: photos[0] }} />
                <CardImage>
                    <View>
                        <Title>{name}</Title>
                        <Section>
                            <Rating>
                                {ratingArray.map((index) => (
                                    <SvgXml
                                        key={index}
                                        width={20}
                                        height={20}
                                        xml={star} />
                                ))}
                            </Rating>
                            <SectionEnd>
                                {isClosedTemporarily && (
                                    <Text variant="error">
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
                </CardImage>
            </RestaurantCard>
        </>
    )
}

export default RestaurantInfoCardComp