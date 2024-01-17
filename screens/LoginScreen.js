import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  return (
    <SafeAreaView>
        <Text>IndRecord</Text>
        <TouchableOpacity>
            <Image></Image>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoginScreen