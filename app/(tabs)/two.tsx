// app/(tabs)/two.tsx

import { YStack, Text } from 'tamagui'

export default function TabTwoScreen() {
  return (
    <YStack f={1} ai="center" jc="center" p="$4">
      <Text fontSize={20} fontWeight="700">
        Diğer Özellikler
      </Text>
      <Text mt="$4" color="$color">
        Yakında burada AI ve teşvik sistemiyle ilgili bilgiler olacak.
      </Text>
    </YStack>
  )
}
