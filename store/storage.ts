'use client'
import packageInfo from '@/package.json'
import type { RootState } from '@/store/store'

const key = `humanity_v${packageInfo.version}`

const storage = {
  save: (data: RootState) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data))
    }
  },
  load: (): RootState | undefined => {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem(key) || 'null') || undefined
    }
    return undefined
  },
}

export default storage
