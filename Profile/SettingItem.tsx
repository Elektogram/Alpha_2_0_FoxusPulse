import React from 'react';
import { XStack, YStack, Text, Switch, Separator } from 'tamagui';

interface SettingItemProps {
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  icon?: React.ElementType; // Optional icon
  isLast?: boolean; // To conditionally hide separator
}

export function SettingItem({ label, value, onValueChange, icon: Icon, isLast = false }: SettingItemProps) {
  return (
    <YStack>
        <XStack
          justifyContent="space-between" // Space label and switch
          alignItems="center"
          paddingVertical="$3" // Vertical padding for the item row
          paddingHorizontal="$1" // Slight horizontal padding if needed
        >
          <XStack alignItems="center" space="$3">
             {Icon && <Icon size="$1.5" color="$secondaryText" />}
             <Text fontSize="$4" color="$color">
                 {label}
            </Text>
          </XStack>

          <Switch
            size="$3" // Adjust size as needed
            checked={value}
            onCheckedChange={onValueChange}
            native // Use native switch for better performance/feel if preferred
          >
            {/* Custom thumb/track requires more setup if not using native */}
            <Switch.Thumb animation="bouncy" backgroundColor={value ? '$accent' : '$gray8'} />
          </Switch>
        </XStack>
        {/* Add a divider below unless it's the last item */}
        {!isLast && <Separator marginVertical="$1" borderColor="$separator" />}
    </YStack>

  );
}