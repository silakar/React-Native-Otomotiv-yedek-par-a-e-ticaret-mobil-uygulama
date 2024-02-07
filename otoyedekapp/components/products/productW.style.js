import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 260,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary

  },
  imageContainer: {
    flex: 1,
    width: 160,
    height: 200,
    marginLeft: SIZES.small/2,
    marginTop: SIZES.small/2,
    borderRadius: SIZES.small,
    overflow:"hidden",
   backgroundColor:COLORS.gray2
  },
  image: {
    aspectRatio: 1,
    width: "100%",
    height:210,
    resizeMode: 'cover'
  },
  details: {
    padding: SIZES.small
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.small,
    marginBottom: 2
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall
  }
});

export default styles;
