import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

export function Header() {
    return (
        <header className="bg-background sticky top-0 z-100 flex h-16 items-center justify-between border-b-[1.5px] px-4 md:px-10">
            <Link
                href="/"
                className="flex items-center gap-2 font-bold tracking-tight"
            >
                <span className="bg-chart-2 size-2.5 animate-pulse rounded-full" />
                use-sse-events
            </Link>
            <div className="flex items-center gap-6">
                <Link
                    href="https://github.com/chris-specs/use-sse-events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        buttonVariants({ variant: 'link', size: 'xs' }),
                        'hidden md:inline-flex'
                    )}
                >
                    GitHub
                </Link>
                <span className="bg-primary text-primary-foreground px-2.5 py-1 font-mono text-xs">
                    v1.0.2
                </span>
            </div>
        </header>
    )
}
