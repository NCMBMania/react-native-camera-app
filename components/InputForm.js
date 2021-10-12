import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { NCMBFile, NCMBObject } from './ncmb';

export default function InputForm({ image, navigation }) {
  // メモの内容
  const [ text, setText ] = useState('');

  // 保存アイコンをタップした際のイベント
  const onPress = async () => {
    try {
      // ファイル名をランダムに生成
      const fileName = `${Math.random().toString(32).substring(2)}.jpg`;
      const promises = []; // 非同期処理を入れる配列
      // ファイルストアへのアップロード
      console.log(image);
      promises.push(NCMBFile.upload(fileName, image));
      // データストアのオブジェクト（DBでいう行相当）を準備
      const obj = new NCMBObject('Memo');
      obj
        .set('text', text)           // メモの内容
        .set('fileName', fileName);  // アップロードしたファイル名
      // 保存実行
      promises.push(obj.save());
      // Promise.allで処理完了待ち
      await Promise.all(promises);
      // 前の画面に戻る
      navigation.goBack();
    } catch (e) {
      alert(e.message);
    }
  }

  // 表示内容
  return (
    <View>
      <View>
        <Image source={{uri: image.uri}} style={styles.image} />
      </View>
      <View>
        <TextInput
          label="メモ"
          value={text}
          style={styles.textInput}
          multiline={true}
          numberOfLines={3}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View style={styles.save}>
        <IconButton
          icon="content-save"
          size={25}
          onPress={onPress}
        />
      </View>
    </View>
  )
}

// スタイル設定
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
  save: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
