// app/modal.tsx

import { YStack, Text } from 'tamagui'

export default function ModalScreen() {
  return (
    <YStack f={1} ai="center" jc="center" p="$4">
      <Text fontSize={20} fontWeight="700">
        Modal Ekranı
      </Text>
      <Text mt="$4">Burası bilgi veya ayar ekranı gibi amaçlar için kullanılabilir.</Text>
    </YStack>
  )
}
