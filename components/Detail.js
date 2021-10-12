import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Detail({ route }) {
  // 一覧画面から渡されるデータ
  const { item, uri } = route.params;
  // 描画内容
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{ uri }}
          style={{ height: 300, width: '100%', resizeMode: 'contain' }}
        />
      </View>
      <View style={styles.text}>
        <Text>{ item.get('text')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 18,
    padding: 10,
  }
});
