import React from 'react';
import { YStack, Text, Progress } from 'tamagui';

interface LevelProgressBarProps {
  level: number;
  currentPoints: number;
  pointsForNextLevel: number;
}

export function LevelProgressBar({ 
  level, 
  currentPoints, 
  pointsForNextLevel 
}: LevelProgressBarProps) {
  const progress = (currentPoints / pointsForNextLevel) * 100;

  return (
    <YStack space="$2">
      <Text fontSize="$3" color="$color">
        Level {level}
      </Text>
      <Progress value={progress} size="$2">
        <Progress.Indicator animation="bouncy" />
      </Progress>
      <Text fontSize="$2" color="$color" opacity={0.7}>
        {currentPoints} / {pointsForNextLevel} points
      </Text>
    </YStack>
  );
} 