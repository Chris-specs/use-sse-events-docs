import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

export function Footer() {
    return (
        <footer className="flex flex-col-reverse items-center justify-between gap-6 px-10 py-7 md:flex-row">
            <p className="text-muted text-center font-mono text-[11px] md:text-start">
                MIT License · © 2026 Made by{' '}
                <Link
                    href="https://christiansan.com"
                    className="text-chart-2 underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Christian Sanchez
                </Link>
            </p>
            <div className="flex gap-2">
                {[
                    {
                        label: 'npm',
                        href: 'https://www.npmjs.com/package/use-sse-events'
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/chris-specs/use-sse-events'
                    }
                ].map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            buttonVariants({ variant: 'link', size: 'xs' }),
                            'text-[10px]'
                        )}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </footer>
    )
}
