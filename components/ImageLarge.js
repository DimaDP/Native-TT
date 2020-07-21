import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { styles } from "./styles"
import {
  View,
  Text,
  Image,
} from 'react-native';

export const ImageLarge = ({ route, navigation }) => (
  <View>
  <Text style={styles.imageHeading}>{route.params.name}</Text>
    <Image 
      style={styles.imageLarge}
      source={{uri: `${route.params.url}`}}
    >
    </Image>
    </View>
  )

