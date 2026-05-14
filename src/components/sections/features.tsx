const FEATURES = [
    {
        num: '01',
        title: 'Zero dependencies',
        desc: 'Pure React and browser APIs. No bloat, no surprise transitive deps.'
    },
    {
        num: '02',
        title: 'Auto-reconnection',
        desc: 'Resilient by default. Configurable intervals, no manual wiring.'
    },
    {
        num: '03',
        title: 'Custom events',
        desc: 'Named server events with a clean, declarative handler API.'
    },
    {
        num: '04',
        title: 'SSR safe',
        desc: 'Works with Next.js App Router and server components from day one.'
    }
]

export function Features() {
    return (
        <section
            id="features"
            className="grid grid-cols-1 border-b-[1.5px] md:grid-cols-4"
        >
            {FEATURES.map(({ num, title, desc }) => (
                <div
                    key={num}
                    className="border-b-[1.5px] p-8 last:border-r-0 last:border-b-0 md:border-r-[1.5px] md:border-b-0"
                >
                    <p className="text-muted mb-6 font-mono text-xs tracking-wider">
                        {num}
                    </p>
                    <h3 className="mb-2 text-sm font-bold tracking-[0.01em]">
                        {title}
                    </h3>
                    <p className="text-muted text-xs leading-relaxed font-normal">
                        {desc}
                    </p>
                </div>
            ))}
        </section>
    )
}
