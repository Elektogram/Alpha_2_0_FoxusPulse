import React from 'react';

type Props = {
  seconds: number;
};

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
}

export const FormatTimeDisplay: React.FC<Props> = ({ seconds }) => {
  const timeString = formatTime(seconds);
  return <span>{timeString}</span>;
};
