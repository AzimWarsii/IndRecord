import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AppStack = createNativeStackNavigator()

const App = () => {

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then(value=> {
      if(value==null){
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else{
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown:false,
        }}
      >
        <AppStack.Screen name='Onboarding' component={OnboardingScreen}/>
        <AppStack.Screen name='Login' component={LoginScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;