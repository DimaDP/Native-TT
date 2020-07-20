/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Gallery, Images } from "./Gallery";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

class App extends React.Component {




  render () {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Gallery">
            <Stack.Screen name="Gallery" component={Gallery}></Stack.Screen>
            <Stack.Screen name="Images" component={Images}></Stack.Screen>
          </Stack.Navigator>
          </NavigationContainer>


      //   <SafeAreaView>
      //   <ScrollView style={{backgroundColor: "grey"}}>
      //     {this.state.images.map((item, index) => (
      //       <View key={index} style={{paddingVertical: 30, paddingLeft: 4, paddingRight:4, marginTop: 10, backgroundColor: "white"}}>
          
      //       <Image style={styles.tinyLogo} source={{
      //         uri: 'https://i.paste.pics/28c309e171604c1eb5e09b1cd13e313a.png',
      //       }}>
      //     </Image>
      //     <View style={{marginTop:30, }}><Text style={{color: "#463cfa", fontWeight: "bold"}}>Dima Pedko</Text></View>
      //   </View>
      // ))}
      //   </ScrollView>
      //   </SafeAreaView>

      
    );
  }
};

const styles = StyleSheet.create({
  tinyLogo: {

     width: 470,
     height: 300,
    //  resizeMode: "contain",

  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    margin: 50,
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
