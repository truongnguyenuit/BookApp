

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashComponent from './Splashcomponent';


const Stack = createNativeStackNavigator();

function AppNavigatior() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >  
        <Stack.Screen name="Home" component={Splashcomponent} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

export default AppNavigatior;

