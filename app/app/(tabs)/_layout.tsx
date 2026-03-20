import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import { View } from '../../components/View';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, useColorScheme } from 'react-native';
import { TranslatedText } from '../../components/TranslatedText';
import { colors } from '../../constants/colors';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useColorScheme() ?? 'dark';

  const backgroundPrimaryColor = colors[theme]['background-primary'];
  const backgroundSecondaryColor = colors[theme]['background-secondary'];

  const header = () => {
    return (
      <SafeAreaView
        edges={['top']}
        style={[
          styles.headerContainer,
          {
            borderBottomColor: backgroundSecondaryColor,
          },
        ]}
      >
        <View style={styles.topRow}>
          <TranslatedText
            size="large"
            style={styles.headerTitle}
            text="campaigns_tab"
          />

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
        sceneStyle: {
          backgroundColor: backgroundPrimaryColor,
        },
        headerStyle: {
          borderColor: backgroundSecondaryColor,
        },
        tabBarStyle: {
          backgroundColor: backgroundPrimaryColor,
          borderTopWidth: 1,
          borderTopColor: backgroundSecondaryColor,
        },
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
    paddingVertical: 8,
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Conkordia-Regular',
    letterSpacing: 1,
  },
  headerButtons: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
});
