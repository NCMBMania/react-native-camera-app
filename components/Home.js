import React, { useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function Home({ navigation }) {
  // メディアライブラリを利用する許可を得る関数
  const requestMediaLibraryPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // 許可が得られなかった場合はアラート
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }

  // 表示された際に1回だけ実行する関数
  useEffect(() => {
    // Webじゃなければライブラリ利用の許可を得る
    if (Platform.OS !== 'web') {
      requestMediaLibraryPermissions();
    }
  }, []);

  // カメラアイコンをタップした際の処理
  const onPress = async () => {
    // ライブラリにアクセスして画像を取得する
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });
    // 入力画面に遷移する
    navigation.navigate('Input', { image });
  }

  // 表示内容
  return (
    <View style={styles.container}>
      <IconButton icon="camera" size={100} onPress={onPress} />
    </View>
  );
}

// スタイル設定
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
