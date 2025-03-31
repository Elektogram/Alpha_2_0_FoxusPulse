// app/(tabs)/_layout.tsx

import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { useColorScheme } from '@/components/useColorScheme'
import { Text } from 'tamagui'
import { themes } from '@/themes'; // veya '../themes' projenin yapısına göre

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const currentTheme = themes[colorScheme ?? 'light'];
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: currentTheme.tabIcon,
      tabBarInactiveTintColor: currentTheme.tabText,
      headerShown: false,      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Görevler',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Diğer',
          tabBarIcon: ({ color }) => <TabBarIcon name="cogs" color={color} />,
        }}
      />
    </Tabs>
  )
}
