import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// 各画面
import HomeScreen from '../screens/HomeScreen';
import InputScreen from '../screens/InputScreen';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

// ホームタブ（左側）
export const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: '写真撮影' }} />
      <Stack.Screen name="Input" component={InputScreen} options={{ title: 'メモ' }} />
    </Stack.Navigator>
  );
};

// リストタブ（右側）
export const ListTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} options={{ title: 'メモ一覧' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'メモ詳細' }} />
    </Stack.Navigator>
  );
};
