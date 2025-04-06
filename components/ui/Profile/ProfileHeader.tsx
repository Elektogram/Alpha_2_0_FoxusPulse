import React from 'react';
import { YStack, XStack, Text, Avatar, Button } from 'tamagui';
import { Edit3 } from '@tamagui/lucide-icons';

interface ProfileHeaderProps {
  userName: string;
  userEmail: string;
  avatarUrl: string;
  onEditPress: () => void;
}

export function ProfileHeader({ 
  userName, 
  userEmail, 
  avatarUrl, 
  onEditPress 
}: ProfileHeaderProps) {
  return (
    <YStack alignItems="center" space="$3" paddingVertical="$6">
      <Avatar circular size="$10" elevate>
        <Avatar.Image accessibilityLabel={userName} src={avatarUrl} />
        <Avatar.Fallback backgroundColor="$gray6">
          <Text color="$gray11" fontSize="$4">
            {userName.substring(0, 2).toUpperCase() || 'P'}
          </Text>
        </Avatar.Fallback>
      </Avatar>

      <YStack alignItems="center" space="$1">
        <Text fontSize="$5" fontWeight="bold" color="$color">
          {userName || 'User Name'}
        </Text>
        <Text theme="alt1" color="$gray11" fontSize="$2">
          {userEmail || 'user@example.com'}
        </Text>
      </YStack>

      <Button
        icon={<Edit3 size="$1" />}
        size="$3"
        chromeless
        circular
        onPress={onEditPress}
      >
        Edit Profile
      </Button>
    </YStack>
  );
}