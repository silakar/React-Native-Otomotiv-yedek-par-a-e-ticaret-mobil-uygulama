import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "./search.style"; 
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation(); 
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    
    console.log("Searching for:", searchText);
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("search")}>
          <Ionicons name="camera-outline" size={SIZES.large} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            placeholder="Marka veya kategori ara"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Feather name="search" size={24} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={require('../assets/images/Pose23.png')}
          style={styles.searchImage}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
