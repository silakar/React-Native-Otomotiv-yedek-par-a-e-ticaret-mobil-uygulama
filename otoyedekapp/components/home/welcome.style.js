import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../constants/index.js";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: (color, top) => ({
    fontFamily: "Bold", 
    fontSize: SIZES.xLarge,
    marginTop: top,
    color: color,
    marginHorizontal:SIZES.small,
  }),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height:50
  },
  searchIcon: { 
    marginHorizontal:10,
    color: COLORS.red,
    marginTop:SIZES.small
  },
  searchWrapper:{
    flex:1,
    backgroundColor:COLORS.secondary,
    marginRight:SIZES.small,
    borderRadius:SIZES.small
  },
  searchInput:{
    fontFamily:"regular",
    width:"100%",
    height:"100%",
    paddingHorizontal:SIZES.small
  },
  searchBtn:{
    width:40,
    height:"100",
    borderRadius:SIZES.medium,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:COLORS.primary
  }



});

export default styles;
