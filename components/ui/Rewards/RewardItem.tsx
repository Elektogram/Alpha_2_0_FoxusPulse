import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "@/components/ui/card";

interface RewardItemProps {
  name: string;
  cost: number;
  onPress: () => void;
}

const RewardItem: React.FC<RewardItemProps> = ({ name, cost, onPress }) => {
  return (
    <Card className="p-4 mb-2 flex flex-row justify-between items-center">
      <View>
        <Text className="text-lg font-bold">{name}</Text>
        <Text className="text-gray-500">{cost} XP</Text>
      </View>
      <TouchableOpacity className="bg-blue-500 p-2 rounded-xl" onPress={onPress}>
        <Text className="text-white">Satın Al</Text>
      </TouchableOpacity>
    </Card>
  );
};

export default RewardItem;
