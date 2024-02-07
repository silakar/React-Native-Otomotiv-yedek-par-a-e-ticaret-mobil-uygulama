import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import styles from "./ProductCardView.style";

const ProductCardView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: "https://images.parcafilosu.com.tr/yedek-parca/debriyaj-seti/3000970004-debriyaj-seti_600_70a199aa-9f24-4b7e-b535-eb5bc600d96b.jpg" }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Debriyaj</Text>
                    <Text style={styles.supplier} numberOfLines={1}>Mapa</Text>
                    <Text style={styles.price}>6.305,31TL</Text>
                </View>

                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name="add-circle" size={35} color={COLORS.primary} />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    );
};

export default ProductCardView;
