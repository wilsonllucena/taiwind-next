import { Search } from 'lucide-react'
import { ComponentProps } from 'react'
// Usando pattern de composição para criar um componente Input que pode ser usado em qualquer lugar
// Quebra um componente em partes menores e mais simples de serem entendidas
// Cada componente deve ter uma responsabilidade única
type InputProfixProps = ComponentProps<'div'>
export function Prefix(props: InputProfixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>
export function Control(props: InputControlProps) {
  return (
    <input
      placeholder="Search"
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

type InputProps = ComponentProps<'div'>
export function Input(props: InputProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    />
  )
}
