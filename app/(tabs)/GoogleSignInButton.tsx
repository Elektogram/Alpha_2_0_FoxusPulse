import React from "react";
import { Button } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: "YOUR_GOOGLE_CLIENT_ID",
});

const GoogleSignInButton = () => {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.error(error);
    }
  };

  return <Button title="Google ile Giriş Yap" onPress={handleGoogleSignIn} />;
};

export default GoogleSignInButton;
