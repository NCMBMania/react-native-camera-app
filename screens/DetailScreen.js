import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Detail from '../components/Detail';

// 詳細画面用
export default function DetailScreen(props) {
  return (
    <View>
      <Card>
        <Detail {...props} />
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
