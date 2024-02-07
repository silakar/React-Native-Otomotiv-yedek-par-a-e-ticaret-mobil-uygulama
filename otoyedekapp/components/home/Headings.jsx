import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../../constants';
import headingStyles from "./headings.style";
import { useNavigation } from '@react-navigation/native';
const Headings = () => {
  const navigation=useNavigation();
  return (
    <View style={headingStyles.container}>
      <View style={headingStyles.header}>
        <Text style={headingStyles.headerTitle}> Popüler Ürünler </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("ProductList")}  >
          <Ionicons name='ios-grid' size={24} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
