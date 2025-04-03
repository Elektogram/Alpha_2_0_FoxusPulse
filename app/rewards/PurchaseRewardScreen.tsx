import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Button } from "@/components/ui/button";
import { purchaseReward } from "@/services/rewardService";

const PurchaseRewardScreen: React.FC<{ route: any }> = ({ route }) => {
  const { reward } = route.params;
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    const result = await purchaseReward("user123", reward.id);
    setLoading(false);

    if (result.success) {
      Alert.alert("Tebrikler! 🎉", `${reward.name} ödülünü aldınız!`);
    } else {
      Alert.alert("Hata!", result.message);
    }
  };

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-2">{reward.name}</Text>
      <Text className="text-gray-500 mb-4">{reward.cost} XP</Text>
      <Button disabled={loading} onPress={handlePurchase}>
        {loading ? "İşlem Yapılıyor..." : "Satın Al"}
      </Button>
    </View>
  );
};

export default PurchaseRewardScreen;
