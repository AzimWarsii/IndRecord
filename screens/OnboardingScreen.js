import React from 'react'
import { View, Text, Button, Image } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper'

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
    onDone={navigation.navigate("Login")}
    onSkip={navigation.replace("Login")}
    pages={[
        {
        backgroundColor: '#01071B',
        image: <Image source={require('../assets/img1.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
        backgroundColor: '#01071B',
        image: <Image source={require('../assets/img1.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
        },
    ]}
    />
  )
}

export default OnboardingScreen