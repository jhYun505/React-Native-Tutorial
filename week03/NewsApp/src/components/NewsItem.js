import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const NewsItem = ({title, onPress}) => {
    console.log(title);
    return (
        <Pressable onPress={onPress} style = {styles.item}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create( {
    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title : {
        fontSize: 20,
    },
});

export default NewsItem;