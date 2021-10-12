import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import MemoList from '../components/MemoList';

// 一覧画面用
export default function ListScreen({ navigation }) {
  return (
    <View>
      <Card>
        <MemoList navigation={navigation} />
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
