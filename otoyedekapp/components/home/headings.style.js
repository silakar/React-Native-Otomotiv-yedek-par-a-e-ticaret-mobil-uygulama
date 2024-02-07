import { StyleSheet } from "react-native-web";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container:{
    marginTop:SIZES.medium,
   
    marginHorizontal:12
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  headerTitle:{
    fontFamily:"semibold",
    fontSize: SIZES.xLarge,

  }
});

export default styles;
