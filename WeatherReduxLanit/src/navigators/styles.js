import { StyleSheet } from "react-native";
import { FontSizes, ColorThemes } from "../themes";

const styles = StyleSheet.create({
  textHeaderLeft: {
      width: 25,
      height: 25,
      margin: 10
  },
  textHeaderRight: {
    width: 40,
    height: 40,
    margin: 15,
    color: ColorThemes.white,
    fontSize: FontSizes.extraLarge
  }
});

export default styles;
