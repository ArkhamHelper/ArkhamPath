import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { TranslatedText } from '../../components/TranslatedText';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const header = () => {
    return (
      <SafeAreaView edges={['top']} style={styles.headerContainer}>
        <View style={styles.topRow}>
          <TranslatedText style={styles.headerTitle} text="campaigns_tab" />

          {/**
           * @TODO Filter icon
           * @TODO Create icon
           * <View style={styles.headerButtons}>
           * </View>
           */}
        </View>

        {/**
         * @TODO Search bar
         */}
      </SafeAreaView>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="pathsTab"
        options={{
          title: 'Paths',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="campaignsTab"
        options={{
          title: 'Campaigns',
          header: header,
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settingsTab"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  topRow: {
    height: 44,
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 28,
    letterSpacing: 1,
  },
  headerButtons: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
});
