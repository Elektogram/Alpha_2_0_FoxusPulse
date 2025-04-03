import React, { useEffect } from "react";
import { Animated, Text, View } from "react-native";

const XPGain: React.FC<{ xp: number }> = ({ xp }) => {
  const fadeAnim = new Animated.Value(1);
  const translateYAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateYAnim, {
        toValue: -50,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: 100,
        left: "50%",
        transform: [{ translateX: -30 }, { translateY: translateYAnim }],
        opacity: fadeAnim,
      }}
    >
      <View className="bg-green-500 p-2 rounded-lg">
        <Text className="text-white font-bold">+{xp} XP</Text>
      </View>
    </Animated.View>
  );
};

export default XPGain;
