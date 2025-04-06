import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller, Control } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { signInWithEmail } from '@/lib/firebase';
import { Ionicons } from '@expo/vector-icons';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface InputFieldProps {
  control: Control<LoginFormValues>;
  name: keyof LoginFormValues;
  placeholder: string;
  icon: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address';
}

const InputField = ({ control, name, placeholder, icon, secureTextEntry, keyboardType = 'default' }: InputFieldProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value } }) => (
      <View style={styles.inputContainer}>
        <Ionicons name={icon as any} size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />
      </View>
    )}
  />
);

export function LoginForm() {
  const router = useRouter();
  
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
  const onSubmit = async (values: LoginFormValues) => {
    try {
      const { user, error } = await signInWithEmail(values.email, values.password);
      
      if (error) {
        Toast.show({
          type: 'error',
          text1: 'Login failed',
          text2: (error as Error).message
        });
        return;
      }
      
      if (user) {
        Toast.show({
          type: 'success',
          text1: 'Login successful!'
        });
        router.replace('/');
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: (error as Error).message
      });
    }
  };
  
  return (
    <View style={styles.container}>
      <InputField
        control={control}
        name="email"
        placeholder="you@example.com"
        icon="mail-outline"
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      <InputField
        control={control}
        name="password"
        placeholder="••••••"
        icon="lock-closed-outline"
        secureTextEntry
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: 12,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
