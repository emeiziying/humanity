import packageInfo from '@/package.json'
import type { RootState } from '@/store/store'

const key = `humanity_v${packageInfo.version}`

const storage = {
  save: (data: RootState) => {
    localStorage.setItem(key, JSON.stringify(data))
  },
  load: (): RootState | undefined =>
    JSON.parse(localStorage.getItem(key) || 'null') || undefined,
}

export default storage
