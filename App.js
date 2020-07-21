import 'react-native-gesture-handler';
import React from 'react';
import { Gallery } from "./components/Gallery";
import { ImageLarge } from "./components/ImageLarge";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {

  render () {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Gallery">
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="Image" component={ImageLarge} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
