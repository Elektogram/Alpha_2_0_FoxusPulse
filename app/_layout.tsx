import FontAwesome from '@expo/vector-icons/FontAwesome'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'
import { useColorScheme } from '@/components/useColorScheme'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  initialRouteName: '(tabs)',
}

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Manrope: require('../assets/fonts/static/Manrope-Regular.ttf'),
    'Manrope-Medium': require('../assets/fonts/static/Manrope-Medium.ttf'),
    'Manrope-Bold': require('../assets/fonts/static/Manrope-Bold.ttf'),
  })

  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
  }, [])

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  useEffect(() => {
    if (error) throw error
  }, [error])

  if (!fontsLoaded) return null

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme ?? 'light'}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
