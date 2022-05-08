

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashComponent from './SplashComponent';
import SignInComponent from './SignInComponent';
import SignUpComponent from './SignUpComponent';
import ScreenS

const Stack = createNativeStackNavigator();

function AppNavigatior() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >  
        <Stack.Screen name="SplashScreen" component={SplashComponent} />
        <Stack.Screen name="SignInScreen" component={SignInComponent} />
        <Stack.Screen name="SignUpScreen" component={SignUpComponent} />
        <Stack.Screen name="HomeStackScreen" component={ScreenStack}/>
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

export default AppNavigatior;

