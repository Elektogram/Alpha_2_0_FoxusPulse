// components/ui/Pomodoro/TimerDisplay.tsx
import React from 'react';
import { Text, Stack } from 'tamagui';
import { formatTime } from '@/utils/formatTime';

interface TimerDisplayProps {
  /** Time remaining in seconds */
  timeLeft: number;
}

/**
 * Displays the remaining time in MM:SS format
 */
export function TimerDisplay({ timeLeft }: TimerDisplayProps) {
  return (
    <Stack paddingVertical="$lg">
      <Text
        fontSize="$6"
        fontWeight="700"
        lineHeight="$6"
        color="$text"
        textAlign="center"
      >
        {formatTime(timeLeft)}
      </Text>
    </Stack>
  );
}