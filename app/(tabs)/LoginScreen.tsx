import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { login } from "../services/authService";


function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const result = await login(email, password);
      setMessage(`Hoş geldin, ${result.user.email}!`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Şifre" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Giriş Yap" onPress={handleLogin} />
      <Text>{message}</Text>
    </View>
  );
}

export default LoginScreen;
