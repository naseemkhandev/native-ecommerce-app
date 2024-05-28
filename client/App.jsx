import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import GoBack from './src/components/common/GoBack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => <GoBack />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
