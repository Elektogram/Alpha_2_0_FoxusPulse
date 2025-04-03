import firestore from "@react-native-firebase/firestore";

export async function addRewardToUser(userId: string, rewardId: string) {
  const userRef = firestore().collection("users").doc(userId);
  await userRef.update({
    rewards: firestore.FieldValue.arrayUnion(rewardId),
  });
}
