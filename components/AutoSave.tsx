import { useAppStore } from '@/store/hooks'
import storage from '@/store/storage'
import { useInterval } from 'ahooks'
import { useState } from 'react'

const AutoSave = () => {
  const [saving, setSaving] = useState(false)
  const appStore = useAppStore()

  useInterval(() => {
    setSaving(true)
    storage.save(appStore.getState())

    console.log('saving')

    setTimeout(() => {
      setSaving(false)
    }, 2000)
  }, 60000)

  if (!saving) return

  return (
    <div className="fixed left-1/2 top-0 z-[99] flex -translate-x-1/2 p-5">
      自动保存中...
    </div>
  )
}

export default AutoSave
