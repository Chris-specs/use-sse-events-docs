import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

const STATS = [
    { val: '~1.5kB', label: 'gzipped size' },
    { val: 'ZERO', label: 'dependencies' },
    { val: 'TS 6', label: 'fully typed' },
    { val: 'SSR', label: 'Next.js safe' }
]

export function Hero() {
    return (
        <section className="grid min-h-[480px] max-w-full grid-cols-1 gap-0 border-b-[1.5px] md:grid-cols-2">
            <div className="flex flex-col justify-between border-b-[1.5px] px-10 py-16 md:border-r-[1.5px] md:border-b-0">
                <div className="mb-8 space-y-6">
                    <div className="text-muted font-mono text-xs uppercase">
                        React hook · Server-Sent Events
                    </div>
                    <h1 className="text-[clamp(3rem,6vw,5rem)] leading-[0.95] font-bold tracking-tighter">
                        SSE.
                        <br />
                        Finally
                        <br />
                        <span className="text-chart-2">done</span>
                        <br />
                        right.
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Link
                        href="#quickstart"
                        className={cn(
                            buttonVariants({ size: 'lg' }),
                            'border-none'
                        )}
                    >
                        Get started →
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-center p-10">
                {STATS.map(({ val, label }) => (
                    <div
                        key={label}
                        className="border-muted flex items-baseline justify-between border-b py-6 last:border-b-0"
                    >
                        <div className="text-5xl font-bold tracking-tighter">
                            {val}
                        </div>
                        <div className="text-muted font-mono text-xs tracking-tighter uppercase">
                            {label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
