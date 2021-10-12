import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Home from '../components/Home';

// カメラ画面用
export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.paragraph}>
        写真を選択・カメラで撮影してください
      </Text>
      <Card>
        <Home navigation={navigation} />
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
});
