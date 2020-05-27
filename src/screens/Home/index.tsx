import React, { FC } from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';



const Logo = styled.Image`
    height: 200px;
    width: 200px;
    border-radius: 100px;
    margin:0 auto;
`;

const TextWrap = styled.ScrollView`
    margin-top: 25px;
    min-height:100%;
`;

const HomeText = styled.Text`
    margin: 50px 20px;
    font-size: 20px;
`;

const HomePage: FC = () => {
    return (
        <TextWrap>
            <Logo source={require('../../assets/rabbit.jpg')}/>
            <HomeText>tur enim sit amet posarna.tur enaim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet 
                posrna.tur enim sit amet posrna tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet 
                posrna.tur enim sit amet posrna.tur enim sit amet posrna tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet 
                posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna tur enim sit amet posrna.tur enim sit amet 
                posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna tur enim sit amet 
                posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet 
                posrna tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet 
                posrna.tur enim sit amet posrna tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet 
                posrna.tur enim sit amet posrna.tur enim sit amet posrna tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet 
                posrna.tur enim sit amet posrna.tur enim sit amet posrna.tur enim sit amet posrna.</HomeText>
        </TextWrap>
    );
};



export default HomePage;




