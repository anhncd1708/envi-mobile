import { View, Text, Image, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, {FunctionComponent} from 'react'
import styled from 'styled-components/native'
import { Container } from '../../components/shared'
import { colors } from '../../components/colors'
import { useWindowDimensions } from 'react-native'
import Logo from "../../../assets/image/logo.png"
import SmallText from '../../components/Texts/SmallText'
import RegularButton from '../../components/Buttons/RegularButton'




const WelcomeContainer = styled(Container)`
  background-color: ${colors.success[100]};
  justify-content: center;
  width: 100%;
  height: 100%;
`;


const TopSection = styled.View`
  align-items: center;
  width: 100%;
  flex:1 ;
  max-height: 35%;
`

const BottomSection = styled.View`
align-items: center;
  width: 100%;
  flex:1 ;
  
`





const Welcome : FunctionComponent = () => {
  const {height} = useWindowDimensions()

  return (
            <WelcomeContainer>
              <TopSection>
                
                </TopSection>
               <BottomSection>
                <Image source={Logo} style={[styles.logo, {height: height * 0.3}]}></Image>
                <SmallText>Environment Monitoring System</SmallText>
                <RegularButton  onPress={()=>{}}> Get Started</RegularButton>
               </BottomSection>
                
            </WelcomeContainer>
    
  )
}




const styles = StyleSheet.create({
  
  logo : {
      width : '50%',
      maxWidth : 300,
      maxHeight: 100,
  }
});

export default Welcome