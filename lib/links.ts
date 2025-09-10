export type LinkItem = {
  title: string
  href: string
  desc?: string
  emoji?: string
}

export const links: LinkItem[] = [
  { title: 'Website', href: 'https://example.com', desc: 'My homepage', emoji: '🌐' },
  { title: 'GitHub', href: 'https://github.com/yourname', desc: '@yourname', emoji: '🐙' },
  { title: 'Twitter/X', href: 'https://x.com/yourname', desc: '@yourname', emoji: '✖️' },
  { title: 'Email', href: 'mailto:you@example.com', desc: 'you@example.com', emoji: '✉️' },
]
