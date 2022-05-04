

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashComponent from './SplashComponent';


const Stack = createNativeStackNavigator();

function AppNavigatior() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >  
        <Stack.Screen name="Home" component={SplashComponent} />
        <Stack.Screen name="Home" component={Sig} />
        <Stack.Screen name="Home" component={SplashComponent} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

export default AppNavigatior;

