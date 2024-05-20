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
    storeRef.current = makeStore(
      storage.load({
        workstations: {
          ids: ['1'],
          entities: {
            '1': {
              type: 'workstation',
              id: '1',
              name: 'Temporary logging site',
              outputs: [{ name: 'wood', amount: 1, duration: 1 }],
              qty: 3,
            },
          },
        },
      }),
    )
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
