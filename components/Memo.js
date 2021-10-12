import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { List } from 'react-native-paper';
import { NCMBFile } from './ncmb';

export default function Detail({ navigation, index, item }) {
  // 画像のURI（dataURI）が入る
  const [uri, setUri] = useState(null);

  // 画像を取得する処理
  const fetchPhoto = async () => {
    // ファイルストアのオブジェクトを準備
    const file = new NCMBFile();
    // ファイル名を設定
    file.set('fileName', item.get('fileName'));
    // ダウンロード実行
    try {
      const uri = await file.download('dataurl');
      setUri(uri);
    } catch (e) {
      console.log(e);
    }
  };

  // 最初に1回だけ実行する関数
  useEffect(() => {
    fetchPhoto(); // 写真を取得
  }, []);

  // 表示内容
  return (
    <List.Item
      title={item.get('text')}
      // リストをタップしたら、編集画面に遷移する
      onPress={() => navigation.push('Detail', { item, uri })}
      // タスクの完了状態を見てチェックボックスを変更
      left={props => <Image
          source={{ uri }}
          // チェックボックスをタップしたら、完了状態を反転
          style={{ height: null, width: 100, resizeMode: 'contain' }}
        />
      }
      // > を表示
      right={props => <List.Icon
          icon="chevron-right"        
        />
      }
    />
  )
}
