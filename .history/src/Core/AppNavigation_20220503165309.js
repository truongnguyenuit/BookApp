

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashComponent from './SplashComponent';
import SignInComponent from './SignInComponent';
import SigUpComponent from './SignUpComponent';

const Stack = createNativeStackNavigator();

function AppNavigatior() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >  
        <Stack.Screen name="SplashComponent" component={SplashComponent} />
        <Stack.Screen name="SignInComponent" component={SignInComponent} />
        <Stack.Screen name="SigUp" component={SignUpComponent} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

export default AppNavigatior;

