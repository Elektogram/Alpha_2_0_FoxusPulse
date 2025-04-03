import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { signUp } from "../../utils/authService";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    try {
      const user = await signUp(email, password);
      setMessage("Kullanıcı başarıyla oluşturuldu!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Şifre" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Kayıt Ol" onPress={handleSignUp} />
      <Text>{message}</Text>
    </View>
  );
};

export default SignUpScreen;
