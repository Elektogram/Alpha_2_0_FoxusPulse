import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'

export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser)
    return () => unsubscribe()
  }, [])

  return { user }
}


export function useTasks(userId: string) {
  const [tasks, setTasks] = useState<any[]>([])
  const db = getFirestore()

  useEffect(() => {
    if (!userId) return

    const fetchTasks = async () => {
      const q = query(collection(db, 'tasks'), where('userId', '==', userId))
      const snapshot = await getDocs(q)
      setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    }

    fetchTasks()
  }, [userId])

  return tasks
}

// lib/callFunction.ts
import { getFunctions, httpsCallable } from 'firebase/functions'

export async function callFunction(name: string, data: any) {
  const functions = getFunctions()
  const func = httpsCallable(functions, name)

  try {
    const result = await func(data)
    return result.data
  } catch (err) {
    console.error(`Function "${name}" failed:`, err)
    throw err
  }
}
