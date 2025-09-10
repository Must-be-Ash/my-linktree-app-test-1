import Link from 'next/link'
import type { LinkItem } from '@/lib/links'

export default function LinkCard({ href, title, desc, emoji }: LinkItem) {
  return (
    <Link href={href} target="_blank" rel="noreferrer" className="link-card block w-full">
      <div className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl" aria-hidden>{emoji}</div>
          <div className="min-w-0">
            <h3 className="text-sm font-medium leading-tight">{title}</h3>
            {desc && <p className="text-xs text-white/60 truncate">{desc}</p>}
          </div>
        </div>
      </div>
    </Link>
  )
}
