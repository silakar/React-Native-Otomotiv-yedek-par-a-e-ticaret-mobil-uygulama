import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import styles from './productDetails.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image 
        source={{ uri: "https://images.parcafilosu.com.tr/yedek-parca/debriyaj-seti/3000970004-debriyaj-seti_600_70a199aa-9f24-4b7e-b535-eb5bc600d96b.jpg" }} 
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Mapa Debriyaj Seti</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>6.305,31TL</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
                key={index}
                name='star'
                size={24}
                color="gold"
              />
            ))}

            <Text style={styles.ratingText}>(4.9) </Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={increment}>
              <SimpleLineIcons name='plus' size={20} />
            </TouchableOpacity>

            <Text style={styles.ratingText}>{count}</Text>

            <TouchableOpacity onPress={decrement}>
              <SimpleLineIcons name='minus' size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWraper}>
          <Text style={styles.description}> 00220900 Debriyaj Seti MAPA markadır. Bu parça Skoda Fabia, Skoda Yeti, Skoda Octavia, Skoda Roomster, Seat Altea, Seat Ibiza, Seat Leon, Seat Toledo, Audi A3, Volkswagen Eos, Volkswagen Beetle, Volkswagen Caddy, Volkswagen Golf, Volkswagen Jetta, Volkswagen Passat, Volkswagen Polo, Volkswagen Touran, Skoda Rapid vb otomobillere uymaktadır. </Text>
          <Text style={styles.descText}>
            Marka: MAPA
            Stok Kodu: 036141015AFMAP
            Stok Adı: 00220900 Debriyaj Seti
            Yurtdışına Satış: Yok
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name='location-outline' size={20} />
              <Text>Kocaeli</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
              <Text>Ücretsiz Kargo</Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Sepete Ekle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
