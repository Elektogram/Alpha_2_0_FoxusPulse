import { View, Text, StyleSheet } from 'react-native';

interface AuthHeaderProps {
    isLogin: boolean;
  }
  
  export function AuthHeader({ isLogin }: AuthHeaderProps) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {isLogin ? "Welcome Back" : "Create Account"}
        </Text>
        <Text style={styles.subtitle}>
          {isLogin ? "Sign in to continue to your account" : "Fill in your details to get started"}
        </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
});