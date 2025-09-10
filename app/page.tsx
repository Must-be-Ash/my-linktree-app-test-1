import Image from 'next/image'
import { links } from '@/lib/links'
import LinkCard from '@/components/LinkCard'

export default function Page() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-8 py-16">
      <header className="flex flex-col items-center gap-3 text-center">
        <Image
          src="/avatar.jpg"
          alt="Avatar"
          width={96}
          height={96}
          className="avatar"
          priority
        />
        <h1 className="text-xl font-semibold">Your Name</h1>
        <p className="text-sm text-white/60">Short bio goes here. Creator • Builder • Links below</p>
      </header>

      <section className="w-full space-y-3">
        {links.map((l) => (
          <LinkCard key={l.href} {...l} />
        ))}
      </section>

      <footer className="pt-6 text-xs text-white/40">
        <a href="https://github.com/" className="hover:text-white/70" target="_blank" rel="noreferrer noopener">Built with Next.js + Tailwind</a>
      </footer>
    </main>
  )
}
