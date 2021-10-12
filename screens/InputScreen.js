import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import InputForm from '../components/InputForm';

// 入力画面用
export default function InputScreen({ route, navigation }) {
  const { image } = route.params;
  return (
    <View>
      <Text style={styles.paragraph}>
        メモを入力してください
      </Text>
      <Card style={styles.form}>
        <InputForm image={image} navigation={navigation} />
      </Card>
    </View>
  );
}

// スタイル設定
const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  }
});
