import { StyleSheet } from "react-native-web";
import {COLORS,SIZES} from '../constants'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    wrapper:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    upperRow:{
        width:SIZES.width -0,
        marginHorizantal:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        position:"absolute",
        backgroundColor:COLORS.blue,
        borderRadius:SIZES.large,
        top:SIZES.large,
        zIndex:999
    },
    heading:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
        marginLeft:5
    },
    copyright:{
        backgroundColor:COLORS.darkBlue,
        fontFamily:"regular",
        color:COLORS.lightWhite
    },
    silkatitle:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.darkBlue,
        backgroundColor:COLORS.gray
       
    },
    silka:{
        fontFamily:"regular",
        fontSize:SIZES.medium,
        color:COLORS.black

    }

})

export default styles