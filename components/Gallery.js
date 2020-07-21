import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {imageLarge} from "./ImageLarge"
import { styles } from "./styles"
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const API_URL = "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"

export class Gallery extends React.Component  {

  state = {
    images: [],
    isLoaded: false,
  };

  async componentDidMount() {
    await fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState(
          {
            images: data, 
            isLoaded: true,
          }
        );
      });
  };

  render () {
    const { isLoaded } = this.state;
    const { navigation } = this.props;

    if (!isLoaded) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator color="red"/>
        </View>
      )
    }

    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor: "grey"}}>
          {this.state.images.map((item) => (
            <View 
              key={item.id} 
              style={styles.imageContainer}
            >
              <TouchableOpacity 
                onPress = {() => (
                  navigation
                    .navigate(
                      "Image", 
                      {url: item.urls.regular, name: item.user.name}
                    ))}
              >
                <Image 
                  style={styles.image} 
                  source={{uri: `${item.urls.small}`}}
                >
                </Image>
              </TouchableOpacity>
              <View>
                <Text style={{color: "#463cfa", fontWeight: "bold"}}>
                  {item.user.name}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
};
