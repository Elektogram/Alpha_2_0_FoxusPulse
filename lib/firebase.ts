// lib/firebase.ts
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { Platform } from 'react-native'

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  //storageBucket: 'xxx.appspot.com',
  //messagingSenderId: '...',
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

WebBrowser.maybeCompleteAuthSession()

export async function signInWithEmail(email: string, password: string) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    return { user: result.user, error: null }
  } catch (error) {
    return { user: null, error }
  }
}

export async function signInWithGoogle() {
  try {
    const [request, response, promptAsync] = Google.useAuthRequest({
      clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
      iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
      androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
      webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    })

    if (response?.type === 'success') {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      const result = await signInWithCredential(auth, credential)
      return { user: result.user, error: null }
    }
    
    return { user: null, error: new Error('Google sign in was cancelled') }
  } catch (error) {
    return { user: null, error }
  }
}
