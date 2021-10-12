import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, RefreshControl, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { NCMBQuery } from './ncmb';
import Memo from './Memo';

export default function MemoList({ navigation }) {
  // メモ一覧用の変数
  const [memos, setMemos] = useState([]);

  // メモの一覧を取得する関数
  const fetchMemo = async () => {
    // NCMBQuery（データストア検索用）のオブジェクトを準備
    const query = new NCMBQuery('Memo');
    // 検索実行
    const ary = await query.fetchAll();
    // セット
    setMemos(ary);
  };

  // 最初に一回だけ実行する関数
  useEffect(() => {
    fetchMemo();
  }, []);

  // 表示内容
  return (
    <View style={styles.container}>
      <List.Section>
        <FlatList
          data={memos}
          renderItem={({index, item }) => <Memo
            item={item}
            index={index}
            navigation={navigation}
          />}
          keyExtractor={item => item.get('objectId')}
        />
      </List.Section>
    </View>
  )
}

// スタイル設定
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
