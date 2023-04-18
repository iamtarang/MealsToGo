import { Card } from "react-native-paper";
import styled from "styled-components/native"

export const RestaurantCard = styled(Card)`
        background-color: ${(props) => props.theme.colors.bg.primary};
        margin-bottom: ${(props) => props.theme.space[3]};
    `;

export const Image = styled(Card.Cover)`
        margin: 5%;
        margin-bottom: 2%;
    `;

export const CardImage = styled(Card.Content)`

    `;

export const Icon = styled.Image`
        width: 15px;
        height: 15px; 
    `;

export const Rating = styled.View`
        flex-direction: row;
    `;

export const Section = styled.View`
        flex-direction: row;
        align-items: center;
    `;

export const SectionEnd = styled.View`
        flex: 1;
        flex-direction: row;
        justify-content: flex-end;
    `;

export const Title = styled.Text`
        font-family: ${(props) => props.theme.fonts.body};
        font-size: ${(props) => props.theme.fontSizes.title};
    `;

export const Address = styled.Text`
        font-family: ${(props) => props.theme.fonts.monospace};
        font-size: ${(props) => props.theme.fontSizes.caption};
    `;

