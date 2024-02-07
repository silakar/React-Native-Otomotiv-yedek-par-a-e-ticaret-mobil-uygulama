import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import styles from './welcome.style';
import { COLORS, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          {" "}
          Silka Otomotiv
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          {" "}
          Otomotiv Yedek Parça
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("search")}>
          <Feather name="search" size={20} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            placeholder="Marka veya kategori ara"
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
           
            console.log('Arama Yapıldı: ', searchText);
          }}
        >
          <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
