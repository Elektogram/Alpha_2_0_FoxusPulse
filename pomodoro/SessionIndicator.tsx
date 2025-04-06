// components/ui/Pomodoro/SessionIndicator.tsx
import React from 'react';
import { Paragraph } from 'tamagui';

type SessionIndicatorProps = {
  sessionType: 'Work' | 'Short Break' | 'Long Break';
};

const sessionLabels = {
  Work: 'Çalışma Zamanı',
  'Short Break': 'Kısa Mola',
  'Long Break': 'Uzun Mola',
};

export function SessionIndicator({ sessionType }: SessionIndicatorProps) {
  return (
    <Paragraph
      theme="alt1" // Farklı bir tema alt tonu (isteğe bağlı)
      size="$3" // tokens.ts'den body.3
      fontWeight="500" // tokens.ts'den body.3
      color="$secondary" // Renk tokenı
      textAlign="center"
      paddingVertical="$md" // Alt boşluk
    >
      {sessionLabels[sessionType]}
    </Paragraph>
  );
}