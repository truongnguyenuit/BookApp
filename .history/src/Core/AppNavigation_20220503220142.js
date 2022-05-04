

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashComponent from './SplashComponent';
import SignInComponent from './SignInComponent';
import SignUpComponent from './SignUpComponent';

const Stack = createNativeStackNavigator();

function AppNavigatior() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >  
        <Stack.Screen name="SplashComponent" component={SplashComponent} />
        <Stack.Screen name="SignInScree" component={SignInComponent} />
        <Stack.Screen name="SignUpComponent" component={SignUpComponent} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

export default AppNavigatior;

