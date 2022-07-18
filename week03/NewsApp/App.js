// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */


import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
  View,
  Modal,
} from 'react-native';
import NewsItem from './src/components/NewsItem';
import NewsView from './src/components/NewsView';
import {getNewsList} from './src/libs/newsapi';

const App: () => Node = () => {
  const [newsList, setNewsList] = useState([]);
  const [newsItem, setNewsItem] = useState({});

  useEffect(() => {
    async function fetchData(keyword) {
      const response = await getNewsList(keyword);
      setNewsList(response);
    }

    fetchData('테슬라');
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>뉴스</Text>
      </View>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={newsList}
        renderItem={({item, index}) => {
          const {title} = item;
          return (
            <NewsItem
              title={title}
              onPress={() => {
                setNewsItem(item);
              }}
            />
          );
        }}
      />
      <NewsView
        newsItem={newsItem}
        onClose={() => {
          setNewsItem({});
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 50,
    textAlign: 'center',
  },
});

export default App;