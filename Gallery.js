import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
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

export class Gallery extends React.Component  {

  state = {
    images: [],
  }

  componentDidMount() {
    fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({images: data});
    });
  }

  render () {
    const { navigation } = this.props
    return (
      <SafeAreaView>
          <ScrollView style={{backgroundColor: "grey"}}>
            {this.state.images.map((item) => (
              <View 
                key={item.id} style={{paddingVertical: 30, paddingLeft: 4, paddingRight:4, marginTop: 10, backgroundColor: "white"}}>
                <TouchableOpacity onPress ={() => navigation.navigate("Images", {id: item.id})}>
                <Image 
                  style={{width:500, height:500}} source={{
                  uri: `https://source.unsplash.com/${item.id}/500x500`,
              }}>
            </Image>
            </TouchableOpacity>
            <View style={{marginTop:30, }}><Text style={{color: "#463cfa", fontWeight: "bold"}}>{item.user.name}</Text></View>
          </View>
        ))}
          </ScrollView>
          </SafeAreaView>
    )
  }

}

export const Images = ({ route, navigation }) => (
<View>
  {/* <Text>{route.params.name}</Text> */}
  <Image 
    style={{width:800, height:500}} source={{
    uri: `https://source.unsplash.com/${route.params.id}/1000x1000`,
    }}>
  </Image>
  </View>
)