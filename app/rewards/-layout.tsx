import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { useColorScheme } from "../../components/useColorScheme";

export default function RewardsLayout() {
  const theme = useColorScheme();

  return (
    <View className="flex-1 bg-gray-100 dark:bg-gray-900">
      {/* Stack Navigator (Ekran geçişlerini yönetir) */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme === "dark" ? "#1a1a1a" : "#f5f5f5",
          },
          headerTintColor: theme === "dark" ? "#fff" : "#000",
        }}
      >
        {/* Ödül Listesi */}
        <Stack.Screen
          name="list"
          options={{ title: "Ödüllerim" }}
        />
        {/* Ödül Satın Alma */}
        <Stack.Screen
          name="purchase"
          options={{ title: "Ödül Satın Al" }}
        />
      </Stack>
    </View>
  );
}
