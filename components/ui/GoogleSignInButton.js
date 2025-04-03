import React from "react";
import { Button } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { googleSignIn } from "../services/authService";

const GoogleSignInButton = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "YOUR_GOOGLE_CLIENT_ID",
  });

  const handleGoogleSignIn = async () => {
    if (response?.type === "success") {
      await googleSignIn(response.params.id_token);
    }
  };

  return <Button title="Google ile Giriş Yap" onPress={() => promptAsync()} />;
};

export default GoogleSignInButton;
