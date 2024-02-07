import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; 
import styles from './newRivals.style';
import { COLORS } from '../constants';
import PostList from '../components/products/PostList';

const NewRivals = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Ionicons name='chevron-back-circle' 
              size={30} 
              color={COLORS.lightWhite} />
          </TouchableOpacity>
          <Text style={styles.heading}>Anasayfa</Text>
        </View>
        <br></br>
        <br></br>
        <br></br>
        <PostList/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Text style={styles.silkatitle} >Hakkımızda </Text>
        <br></br>
        <Text style={styles.silka}> silka_otomotiv.com.tr Yedek Parça İnternette! 
          Sloganıyla faaliyetlerini yürüten silka_otomotiv.com.tr otomotiv yedek parça sektöründe saygın bir
           konumda bulunan ve 250 binin üzerinde kayıtlı satışa hazır ürün ile satış yapan Türkiye'nin en 
           büyük oto yedek parça e-ticaret sitesidir.
           SİLKA YEDEK PARÇA VE OTOMOTİV A.Ş. iştiraki olan yedekparca.com.tr ile hızlı ve güvenilir alışverişin
            keyfini yaşayabilirsiniz. Firmamız, internet ortamında 250 binin üzerinde ürünü e-ticaret platformunda 
            satışını yapmaktadır. Oto yedek parça pazarında müşterilerinin %95'lik bir oran ile ihtiyaçlarını 
            karşılamaktadır</Text>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Text style={styles.copyright}> © Telif Hakkı 2024 - silkaOtomotiv.com | Her Hakkı Saklıdır. </Text>
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
