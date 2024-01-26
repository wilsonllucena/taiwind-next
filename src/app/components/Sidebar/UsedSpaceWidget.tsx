import { Cog, LifeBuoy } from 'lucide-react'
import { NavItem } from './NavItem'

export function UsedSpaceWidget() {
  return (
    <>
      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
        <div className="space-y-1">
          <span className="text-sm/5 font-medium text-violet-700">
            Used space
          </span>
          <p className=" text-sm/5 text-violet-500">
            Ypur team user 80% of your available space. Need more ?
          </p>
        </div>
        <div></div>
      </div>
    </>
  )
}
