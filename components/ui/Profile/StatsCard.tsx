import React from 'react';
import { YStack, Text } from 'tamagui';
import { TrendingUp, CheckSquare } from '@tamagui/lucide-icons';

type IconType = typeof TrendingUp | typeof CheckSquare;

interface StatsCardProps {
  title: string;
  value: number;
  icon: IconType;
}

export function StatsCard({ title, value, icon: Icon }: StatsCardProps) {
  return (
    <YStack 
      flex={1} 
      backgroundColor="$gray2" 
      padding="$3" 
      borderRadius="$4"
      space="$2"
    >
      <Icon size="$1" color="$color" />
      <Text fontSize="$3" fontWeight="500">{title}</Text>
      <Text fontSize="$5" fontWeight="700">{value}</Text>
    </YStack>
  );
}