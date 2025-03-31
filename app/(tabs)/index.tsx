// app/(tabs)/index.tsx

import { YStack, Text, Separator } from 'tamagui'

export default function TabOneScreen() {
  return (
    <YStack f={1} ai="center" jc="center" p="$4">
      <Text fontSize={20} fontWeight="700">
        Görev Ekleme
      </Text>
      <Separator my="$4" />
      <Text color="$color">Hoş geldin! Buraya görevlerini ekleyebilirsin.</Text>
    </YStack>
  )
}
