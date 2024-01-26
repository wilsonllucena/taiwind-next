/* eslint-disable @next/next/no-img-element */
'use client'
import { User } from 'lucide-react'
import { useFileInputContext } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInputContext()

  const previewURL = useMemo(() => {
    if (!files?.length) return null
    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  }

  return (
    <img
      src={previewURL}
      alt=""
      className="h-16 w-16 rounded-full object-cover"
    />
  )
}
