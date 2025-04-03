import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import RewardItem from "@/components/RewardItem";
import firestore from "@react-native-firebase/firestore";

interface Reward {
  id: string;
  name: string;
  cost: number;
}

const RewardListScreen: React.FC = () => {
  const [rewards, setRewards] = useState<Reward[]>([]);

  useEffect(() => {
    const fetchRewards = async () => {
      const snapshot = await firestore().collection("rewards").get();
      const rewardList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Reward[];
      setRewards(rewardList);
    };
    fetchRewards();
  }, []);

  return (
    <ScrollView className="p-4">
      <Text className="text-xl font-bold mb-4">🎁 Ödüller</Text>
      {rewards.map(reward => (
        <RewardItem
          key={reward.id}
          name={reward.name}
          cost={reward.cost}
          onPress={() => console.log("Satın alma işlemi", reward.id)}
        />
      ))}
    </ScrollView>
  );
};

export default RewardListScreen;
