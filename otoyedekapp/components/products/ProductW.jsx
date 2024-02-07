import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'; // TouchableOpacity ve Image import edildi
import React from 'react';
import styles from './productW.style';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../../constants';

const ProductW = () => {
    return (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image
    source={{ uri: "https://avatars.mds.yandex.net/i?id=8cbcec2d28125f76a92e4e3c07f7f862bd1d9892-9456457-images-thumbs&n=13" }}
    style={styles.image}
/>

            </View>
            
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={1}>Audi Yedek Parça Ürünleri</Text>

            </View>
    
          </View>
        </TouchableOpacity>
    );
}

export default ProductW;
