import React from 'react'
import { View, Text } from 'tamagui'
import { useTheme } from 'tamagui'
import { useUser } from '@/lib/firebaseHooks'
import { tokens } from '@/tokens'
import { themes } from '@/themes'

type TaskItemProps = {
  title?: string
}

export default function TaskItem({ title = 'TaskItem' }: TaskItemProps) {
  const theme = useTheme()
  const { user } = useUser()

  return (
    <View padding="$4" borderBottomWidth={1} borderColor="$border" backgroundColor={theme.background.val}>
      <Text fontSize="$6" fontWeight="bold" color={theme.color.val}>
        {title} {user?.displayName && `- ${user.displayName}`}
      </Text>
    </View>
  )
}
