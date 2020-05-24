import React, { useState } from 'react';
import { Platform, StyleSheet, View, Button, Alert, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library';

export default function App() {

  const [image, setImage] = useState(null);

  // Запрос прав
  const askPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
    if (status !== 'granted') {
      Alert.alert('Недостаточно прав. Разрешите доступ к камере и фотографиям.');
      return false;
    }
    return true;
  }

  // Фотографирование: запрашиваем права и открываем камеру
  const photo = async () => {
    const hasPermissions = await askPermissions();
    if (!hasPermissions) {
      return;
    }
    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: true,
      aspect: [4, 3],
    });
    setImage(img.uri);
  }

  // Сохранение картинки в библиотеке
  const save = async () => {
    await MediaLibrary.saveToLibraryAsync(image).catch((error)=> {
      Alert.alert('Ошибка при сохранении фото:\n'+error)
    });
    setImage(null);
  }

  return (
    <View style={styles.container}>
      <Button title="Сделать фото" onPress={photo}/>
      {
        image &&
        <View>
          <Image style={styles.image} source={{uri: image}} />
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
