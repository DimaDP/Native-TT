import { StyleSheet, Dimensions} from "react-native";
const window = Dimensions.get('window');
export const imagesWidth = window.width - 20;
export const imagesHeight = window.height;

export const styles = StyleSheet.create({
  imageContainer: {
    paddingVertical: 30,
     marginTop: 10, 
     backgroundColor: "white", 
     alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },

  image: {
    height: imagesWidth, 
    resizeMode: "contain", 
    alignSelf: "center",
    width: imagesWidth,
    borderRadius: 10,
  
  },

  imageLarge: {
    height: imagesHeight, 
    resizeMode: "center", 
    alignSelf: "center",
    width: imagesWidth,
    borderRadius: 20,
  },
  imageHeading: {
    fontSize: 30,
    color: "grey",
    alignSelf: "center"
  }
});