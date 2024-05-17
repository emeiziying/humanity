'use client'
import storage from '@/store/storage'
import type { AppStore } from '@/store/store'
import { makeStore } from '@/store/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider(
  { children }: { children: React.ReactNode },
) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore(storage.load())
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
