// app/(tabs)/pomodoro.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { YStack, H1, Button } from 'tamagui';
import { TimerDisplay } from '@/components/ui/pomodoro/TimerDisplay';
import { SessionIndicator } from '@/components/ui/pomodoro/SessionIndicator';
import { useIsFocused } from '@react-navigation/native';

// Settings
const WORK_DURATION_SECONDS = 25 * 60; // 25 minutes
const SHORT_BREAK_DURATION_SECONDS = 5 * 60; // 5 minutes
const LONG_BREAK_DURATION_SECONDS = 15 * 60; // 15 minutes
const SESSIONS_BEFORE_LONG_BREAK = 4;

type SessionType = 'Work' | 'Short Break' | 'Long Break';

export default function PomodoroScreen() {
  const [sessionType, setSessionType] = useState<SessionType>('Work');
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isFocused = useIsFocused();

  const handleStartPause = useCallback(() => {
    if (!isFocused) return;

    if (isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            handleSessionEnd();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    setIsRunning(!isRunning);
  }, [isRunning, isFocused]);

  const handleSessionEnd = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);

    if (sessionType === 'Work') {
      const newPomodoroCount = pomodoroCount + 1;
      setPomodoroCount(newPomodoroCount);
      if (newPomodoroCount % SESSIONS_BEFORE_LONG_BREAK === 0) {
        setSessionType('Long Break');
        setTimeLeft(LONG_BREAK_DURATION_SECONDS);
      } else {
        setSessionType('Short Break');
        setTimeLeft(SHORT_BREAK_DURATION_SECONDS);
      }
    } else {
      setSessionType('Work');
      setTimeLeft(WORK_DURATION_SECONDS);
    }
  }, [sessionType, pomodoroCount]);

  const handleReset = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
    if (sessionType === 'Work') {
      setTimeLeft(WORK_DURATION_SECONDS);
    } else if (sessionType === 'Short Break') {
      setTimeLeft(SHORT_BREAK_DURATION_SECONDS);
    } else {
      setTimeLeft(LONG_BREAK_DURATION_SECONDS);
    }
  }, [sessionType]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <YStack flex={1} padding="$4" space="$4">
      <H1 textAlign="center">Pomodoro Timer</H1>
      <SessionIndicator sessionType={sessionType} />
      <TimerDisplay timeLeft={timeLeft} />
      <YStack space="$2">
        <Button
          onPress={handleStartPause}
          theme={isRunning ? "red" : "green"}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button
          onPress={handleReset}
          theme="blue"
        >
          Reset
        </Button>
      </YStack>
    </YStack>
  );
}