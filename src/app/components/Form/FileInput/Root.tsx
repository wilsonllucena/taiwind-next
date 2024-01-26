'use client'
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files?: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)
export function Root(props: RootProps) {
  const id = useId() // esse useId é do react, que gera um id aleatório e sera passado para o context
  const [files, setFiles] = useState<File[]>([])

  // essa função é passada para o context, e será usada no componente Control
  // para que quando o usuário selecionar um arquivo, ele seja adicionado ao estado
  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((currentFiles) => [...currentFiles, ...files])
    } else {
      setFiles(files)
    }
  }
  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInputContext = () => useContext(FileInputContext)
