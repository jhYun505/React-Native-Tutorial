import React, {useEffect, useState} from 'react';
import {StyleSheet, Modal, View, Text, Pressable, Image} from 'react-native';

const NewsView = ({newsItem, onClose}) => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    console.log(newsItem.urlToImage);
    if (newsItem.urlToImage) {
      Image.getSize(newsItem.urlToImage, (w, h) => {
        setWidth(w);
        setHeight(h);
      });
    }
  }, [newsItem.urlToImage]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={Object.keys(newsItem).length > 0}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{newsItem.title}</Text>
          <Image
            source={{uri: newsItem.urlToImage}}
            resizeMethod="auto"
            resizeMode="cover"
            style={{
              width: 300,
              borderWidth: 1,
              marginBottom: 20,
              aspectRatio: width / height,
            }}
          />
          <Text style={styles.modalText}>{newsItem.description}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => onClose()}>
            <Text style={styles.textStyle}>그만 보기</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 10,
    marginBottom: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 20,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 17,
  },
  button: {
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NewsView;