import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { signInWithGoogle } from "@/lib/firebase";
import { useRouter } from 'expo-router';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export function GoogleSignInButton() {
  const router = useRouter();
  
  const handleGoogleSignIn = async () => {
    try {
      const { user, error } = await signInWithGoogle();
      
      if (error) {
        Toast.show({
          type: 'error',
          text1: 'Google sign in failed',
          text2: (error as Error).message
        });
        return;
      }
      
      if (user) {
        Toast.show({
          type: 'success',
          text1: 'Google sign in successful!'
        });
        router.replace('/');
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Google sign in failed',
        text2: (error as Error).message
      });
    }
  };

  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={handleGoogleSignIn}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>G</Text>
      </View>
      <Text style={styles.text}>Sign in with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: '100%'
  },
  iconContainer: {
    marginRight: 8
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4285F4'
  },
  text: {
    fontSize: 16,
    color: '#374151'
  }
});
