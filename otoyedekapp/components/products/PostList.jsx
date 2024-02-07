import { StyleSheet, Text, View, FlatList } from 'react-native'; // FlatList import edildi
import React from 'react';
import { SIZES } from '../../constants';
import styles from "./productList.style";
import ProductW from './ProductW';

const PostList = () => {
    const products = [1, 2, 3, 4];

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductW />}
                horizontal
                contentContainerStyle={{ paddingHorizontal: SIZES.medium }} // columnGap yerine paddingHorizontal kullanıldı
                keyExtractor={(item, index) => index.toString()} // keyExtractor eklendi
            />
        </View>
    );
};

export default PostList;
