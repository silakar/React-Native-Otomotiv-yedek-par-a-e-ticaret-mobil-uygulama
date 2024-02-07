
import { TouchableOpacity,View, Text, ScrollView } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons,Fontisto} from '@expo/vector-icons';
import styles from './Home.style';
import { Welcome } from '../components';
import Carousel from "../components/home/Carousel";
import Headings from '../components/home/Headings';
import ProductRow from '../components/products/ProductRow';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
        <Ionicons name='location-outline'size={24}/>

        <text style={styles.location}> Kocaeli </text>

        <View style={{alignItems:"flex-end"}}>
          <View style={styles.cartCount}>
            <text style={styles.cartNumber}> 4 </text>
          </View>
          <TouchableOpacity>
            <Fontisto name='shopping-bag' size={24} />
          </ TouchableOpacity>
         </View>  
        </View>
      </View>
      <ScrollView>
        <Welcome/>
        <Carousel/>
        <Headings/>
        <ProductRow/>
      </ScrollView> 
    </SafeAreaView>
  )
}

export default Home;
