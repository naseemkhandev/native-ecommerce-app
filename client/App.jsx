import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import GoBack from './src/components/common/GoBack';
import Register from './src/screens/Register';
import ProductDetails from './src/screens/ProductDetails';
import Cart from './src/screens/Cart';
import Checkout from './src/screens/Checkout';
import Profile from './src/screens/Profile';
import Notifications from './src/screens/Notifications';

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
          name="ProductDetails"
          component={ProductDetails}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{header: () => <GoBack />}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => <GoBack />,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            header: () => <GoBack />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
