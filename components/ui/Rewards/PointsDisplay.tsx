import React from 'react';
import { XStack, Text } from 'tamagui';
import { Star } from '@tamagui/lucide-icons';

interface PointsDisplayProps {
  points: number;
}

export function PointsDisplay({ points }: PointsDisplayProps) {
  return (
    <XStack
      alignItems="center"
      space="$2"
      backgroundColor="$backgroundHover"
      padding="$3"
      borderRadius="$4"
    >
      <Star size="$1" color="$yellow10" />
      <Text fontSize="$6" fontWeight="600" color="$color">
        {points} Points
      </Text>
    </XStack>
  );
} 