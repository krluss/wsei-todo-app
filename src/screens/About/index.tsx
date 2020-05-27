import React, { FC } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';



const About: FC = () => {
    return (
        <Wrapper>
            <Logo source={require('../../assets/rabbit.jpg')}/>
            <TextWrapper>
                <AboutText>Left</AboutText>
                    <LeftPicture source={require('../../assets/rabbit.jpg')}/>
                <AboutText>Right</AboutText> 
                    <RightPicture source={require('../../assets/rabbit.jpg')}/>
                <AboutText>Rotated</AboutText>
                    <RotatedPicture source={require('../../assets/rabbit.jpg')}/>
            </TextWrapper>
            
            
        </Wrapper>
    );
};

const Logo = styled.Image`
    width:100px;
    height:100px;
    margin:0 auto;
    border-radius:50px;
`;

const Picture = styled.Image`
    width:100px;
    height:100px;
    margin-bottom:20px;
`;

const LeftPicture = styled(Picture)`
    align-self: flex-start;
    margin-left: 20px;
    `;

const RightPicture = styled(Picture)`
    align-self: flex-end;
    margin-right: 20px;
    `;
const RotatedPicture = styled(Picture)`
    transform: rotate(90deg);
`;

const TextWrapper = styled.View`
    align-items: center;
    width:100%;
    margin-top: 30px;
`;

const Wrapper = styled.ScrollView`
    margin: 80px 20px 0 20px;    
`;

const AboutText = styled.Text`
    display:flex;
    font-size: 25px;
`;

export default About;