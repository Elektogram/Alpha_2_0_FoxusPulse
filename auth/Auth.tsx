import { useState } from "react";
import { router } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { GoogleSignInButton } from "@/components/auth/GoogleSignInButton";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { AuthToggle } from "@/components/auth/AuthToggle";
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { user: currentUser, loading: isLoading } = useAuth();
  
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  
  if (currentUser && !isLoading) {
    router.replace("/");
    return null;
  }
  
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <AuthHeader isLogin={isLogin} />
        
        <View style={styles.content}>
          <GoogleSignInButton />

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <View style={styles.dividerTextContainer}>
              <View style={styles.dividerText}>Or continue with email</View>
            </View>
            <View style={styles.dividerLine} />
          </View>

          {isLogin ? (
            <LoginForm />
          ) : (
            <RegisterForm onRegisterSuccess={() => setIsLogin(true)} />
          )}

          <AuthToggle isLogin={isLogin} onToggle={toggleAuthMode} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  content: {
    padding: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  dividerTextContainer: {
    paddingHorizontal: 8,
  },
  dividerText: {
    color: '#666',
    fontSize: 14,
    backgroundColor: '#fff',
  },
});