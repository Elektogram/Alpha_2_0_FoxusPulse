import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { YStack, XStack, Text, Separator, Button, useTheme } from 'tamagui';
import {
    LogOut, RefreshCcw, Trash2, Bell, Moon, Sun, Bot, TrendingUp, CheckSquare, Star
} from '@tamagui/lucide-icons';

// --- Import UI Components ---
import { ProfileHeader } from '../../components/ui/Profile/ProfileHeader';
import { StatsCard } from '../../components/ui/Profile/StatsCard';
import { SettingItem } from '../../components/ui/Settings/SettingItem';
import { PointsDisplay } from '../../components/ui/Rewards/PointsDisplay';
import { LevelProgressBar } from '../../components/ui/Rewards/LevelProgressBar';

// --- Mock Data & State ---
const MOCK_USER_DATA = {
    name: 'Alex Mercer',
    email: 'alex.mercer@example.com',
    avatar: 'https://placekitten.com/200/200',
    points: 240,
    level: 3,
    pointsForNextLevel: 300,
    taskStreak: 7,
    completedTasks: 125,
};

export default function ProfileScreen() {
    const theme = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [userData, setUserData] = useState(MOCK_USER_DATA);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [aiAssistantEnabled, setAiAssistantEnabled] = useState(true);

    const handleEditProfile = () => {
        console.log("Navigate to Edit Profile Screen");
    };

    const handleThemeChange = (isDark: boolean) => {
        console.log("Changing theme to:", isDark ? 'dark' : 'light');
        setIsDarkMode(isDark);
    };

    const handleLogout = () => {
        console.log("Logging out...");
    };

    const handleResetProgress = () => {
        console.warn("Resetting progress...");
    };

    const handleDeleteAccount = () => {
        console.error("Deleting account...");
    };

    useEffect(() => {
        // TODO: Fetch actual user data
    }, []);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <YStack
                flex={1}
                backgroundColor="$background"
                padding="$4"
                space="$5"
            >
                <ProfileHeader
                    userName={userData.name}
                    userEmail={userData.email}
                    avatarUrl={userData.avatar}
                    onEditPress={handleEditProfile}
                />

                <Separator borderColor="$separator" />

                <YStack space="$4">
                    <Text fontSize="$6" fontWeight="600" color="$color">
                        Your Stats
                    </Text>
                    <PointsDisplay points={userData.points} />
                    <LevelProgressBar
                        level={userData.level}
                        currentPoints={userData.points}
                        pointsForNextLevel={userData.pointsForNextLevel}
                    />

                    <XStack space="$3" justifyContent="space-between">
                        <StatsCard
                            title="Day Streak"
                            value={userData.taskStreak}
                            icon={TrendingUp}
                        />
                        <StatsCard
                            title="Tasks Done"
                            value={userData.completedTasks}
                            icon={CheckSquare}
                        />
                    </XStack>
                </YStack>

                <Separator borderColor="$separator" />

                <YStack space="$2">
                    <Text fontSize="$6" fontWeight="600" color="$color" marginBottom="$2">
                        Settings
                    </Text>
                    <SettingItem
                        label="Notifications"
                        value={notificationsEnabled}
                        onValueChange={setNotificationsEnabled}
                        icon={Bell}
                    />
                    <SettingItem
                        label={isDarkMode ? "Dark Mode" : "Light Mode"}
                        value={isDarkMode}
                        onValueChange={handleThemeChange}
                        icon={isDarkMode ? Moon : Sun}
                    />
                    <SettingItem
                        label="AI Assistant"
                        value={aiAssistantEnabled}
                        onValueChange={setAiAssistantEnabled}
                        icon={Bot}
                        isLast
                    />
                </YStack>

                <Separator borderColor="$separator" />

                <YStack space="$3" paddingTop="$4">
                    <Button
                        icon={<LogOut size="$1" />}
                        onPress={handleLogout}
                        backgroundColor="$background"
                        borderColor="$gray6"
                        borderWidth={1}
                        color="$color"
                    >
                        Logout
                    </Button>

                    <Button
                        icon={<RefreshCcw size="$1" />}
                        onPress={handleResetProgress}
                        theme="red_alt2"
                        chromeless
                    >
                        Reset Progress
                    </Button>
                    <Button
                        icon={<Trash2 size="$1" />}
                        onPress={handleDeleteAccount}
                        theme="red"
                        chromeless
                    >
                        Delete Account
                    </Button>
                    <Text 
                        fontSize="$1" 
                        theme="alt2" 
                        textAlign="center" 
                        paddingTop="$6"
                    >
                        App Version 1.0.0
                    </Text>
                </YStack>
            </YStack>
        </ScrollView>
    );
}