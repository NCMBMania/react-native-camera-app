import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeTab, ListTab } from './components/Tab';

// 画面遷移用
const Tab = createBottomTabNavigator();

export default function App() {  
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="HomeTab"
            component={HomeTab}
            options={{
              tabBarIcon: () => <MaterialCommunityIcons size={24} name="camera" />,
              headerShown: false,
              title: 'メモ'
            }}
          />
          <Tab.Screen
            name="ListTab"
            component={ListTab}
            options={{
              tabBarIcon: () => <MaterialCommunityIcons size={24} name="format-list-bulleted-type" />,
              headerShown: false,
              title: 'リスト'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>    
  );
}

// スタイル設定
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
