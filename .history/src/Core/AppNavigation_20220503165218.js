

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashComponent from './SplashComponent';
import SignInComponent from './SignInComponent';

const Stack = createNativeStackNavigator();

function AppNavigatior() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >  
        <Stack.Screen name="" component={SplashComponent} />
        <Stack.Screen name="2" component={SignInComponent} />
        <Stack.Screen name="3" component={SignUpComponent} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

export default AppNavigatior;

