import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';

const Carousel = () => {
    const slides=[
        "https://www.martas.com.tr/Uploads/Gallery/Large/8d1b728d-3995-44b7-9d94-d2099f6046fd.jpg?v-638410014701172278",
       "https://www.martas.com.tr/Uploads/Gallery/Large/7bf82d7f-66dd-410a-bd62-b3caca431cc1.jpg?v-638410014258823618",
       "https://www.martas.com.tr/Uploads/Gallery/Large/9facb5ac-9184-40a3-b76d-ac36f09772f1.jpg?v-638410014081984354"
    ];

    const imageHeight=250;

  return (
    <View style={styles.carouselContainer}>
      <SliderBox 
      images={slides}
      dotColor={COLORS.primary}
      inactiveDotColor={COLORS.secondary}
      ImageComponentStyle={{borderRadius:15, width:"93%",height:imageHeight, marginTop:15}}
      autoplay
      circleLoop
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:"center"
    }
})