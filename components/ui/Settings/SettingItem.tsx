import React from 'react';
import { XStack, Text, Switch, useTheme } from 'tamagui';
import { Bell, Moon, Sun, Bot } from '@tamagui/lucide-icons';

type IconType = typeof Bell | typeof Moon | typeof Sun | typeof Bot;

interface SettingItemProps {
    label: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
    icon: IconType;
    isLast?: boolean;
}

export function SettingItem({ label, value, onValueChange, icon: Icon, isLast }: SettingItemProps) {
    const theme = useTheme();

    return (
        <XStack
            alignItems="center"
            justifyContent="space-between"
            paddingVertical="$3"
            borderBottomWidth={isLast ? 0 : 1}
            borderBottomColor="$borderColor"
        >
            <XStack space="$3" alignItems="center">
                <Icon size="$1" color={theme.color?.val || '$color'} />
                <Text fontSize="$5" color="$color">
                    {label}
                </Text>
            </XStack>
            <Switch
                checked={value}
                onCheckedChange={onValueChange}
                size="$4"
            />
        </XStack>
    );
} 