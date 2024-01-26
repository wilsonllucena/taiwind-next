'use client'
import { ComponentProps } from 'react'
import { useFileInputContext } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInputContext()

  function handleFilesSelected(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return
    const files = Array.from(event.target.files || [])
    onFilesSelected(files, multiple)
  }
  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      multiple={multiple}
      {...props}
      onChange={handleFilesSelected}
    />
  )
}
