import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import { useColorScheme } from '@/components/useColorScheme'
import { themes } from '@/themes'

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const currentTheme = themes[colorScheme ?? 'light']

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: currentTheme.tabIcon,
        tabBarInactiveTintColor: currentTheme.tabText,
        headerShown: false,
      }}
    >
      {/* Bu ilk sıradaki 'index' otomatik olarak ilk açılan ekran olur */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Takvim',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="aı"
        options={{
          title: 'AI',
          tabBarIcon: ({ color }) => <TabBarIcon name="cloud" color={color} />,
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: 'Ödüller',
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  )
}
