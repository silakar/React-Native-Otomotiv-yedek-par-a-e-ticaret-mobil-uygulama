import React from 'react';
import { StyleSheet, View,Text, Image,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../constants';
import styles from './profile.style';
import {AntDesign,MaterialCommunityIcons,SimpleLineIcons} from "@expo/vector-icons";


const Profile = () => {
return(
  <View style={styles.container}>
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.gray}/>
      <View style={{width:'100%'}}>
      <Image 
      source={require('../assets/images/space.jpg')}
      style={styles.cover}
      />
      </View>

    <View style={styles.profileContainer}>
      <Image
      source={require('../assets/images/userDefault.png')}
      style={styles.profile}
      />
      <Text style={styles.name}>Sıla Kar </Text>
      <View style={styles.loginbtn}>
        <Text style={styles.menuText}>2020607062@gmail.com</Text>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem(0.2)}>
              <MaterialCommunityIcons
                name="heart-outline"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}>Favoriler</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem(0.2)}>
              <MaterialCommunityIcons
                name="heart-outline"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}>Siparişler</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem(0.2)}>
              <SimpleLineIcons
                name="bag"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}>Kartlar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem(0.2)}>
              <MaterialCommunityIcons
                name="cached"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}>Güncelle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem(0.2)}>
              <AntDesign
                name="deleteuser"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}> Hesabı Sil</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {}}>
            <View style={styles.menuItem(0.2)}>
              <AntDesign
                name="logout"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}> Çıkış Yap</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>

    </View>

  </View>

)
}
export default Profile
