import type { MDXComponents } from 'mdx/types'
import GlitchText from './components/ui/GlitchText'
import { ModuleBadge } from './components/ui/ModuleBadge'
import { Lock, ArrowLeft, Send, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-black uppercase tracking-tight mb-4">{children}</h2>,
    p: ({ children }) => <p className="text-lg text-foreground/60 leading-relaxed mb-6">{children}</p>,
    GlitchText,
    ModuleBadge,
    Lock,
    ArrowLeft,
    Send,
    ArrowRight,
    Link,
    CurrentYear: () => <span>{new Date().getFullYear()}</span>,
    ...components,
  }
}
