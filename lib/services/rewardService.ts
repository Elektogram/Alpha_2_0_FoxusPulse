import functions from "@react-native-firebase/functions";

export async function purchaseReward(userId: string, rewardId: string) {
  try {
    const response = await functions().httpsCallable("purchaseReward")({ userId, rewardId });
    return response.data;
  } catch (error) {
    console.error("Ödül alınırken hata:", error);
    return { success: false, message: "Ödül alınamadı." };
  }
}
