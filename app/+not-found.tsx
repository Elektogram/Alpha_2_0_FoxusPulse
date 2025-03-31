// app/+not-found.tsx

import { Stack, Link } from 'expo-router'
import { YStack, Text } from 'tamagui'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <YStack f={1} ai="center" jc="center" p="$4">
        <Text fontSize={18} fontWeight="700">
          Bu ekran bulunamadı.
        </Text>
        <Link href="/" asChild>
          <Text mt="$3" color="$primary">
            Ana sayfaya dön!
          </Text>
        </Link>
      </YStack>
    </>
  )
}
