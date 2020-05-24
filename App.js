import React, { useState } from 'react';
import { Platform, StyleSheet, View, Button, Alert, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library';

export default function App() {

  const [image, setImage] = useState(null);

  const photo = async () => {
  }

  const save = async () => {
  }

  return (
    <View style={styles.container}>
      <Button title="Сделать фото" onPress={photo}/>
      {
        image &&
        <View>
          <Image style={styles.image} />
          <Button title="Сохранить" onPress={save}/>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 320,
    height: 240,
    marginTop: 14,
    marginBottom: 14,
  }});
