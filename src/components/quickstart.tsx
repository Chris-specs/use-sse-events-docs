'use client'

import { useState } from 'react'
import { TABS } from '../constants/code-tabs'
import { Button } from './ui/button'

export function Quickstart() {
    const [active, setActive] = useState('basic')
    const [copied, setCopied] = useState<string | null>(null)

    const currentTab = TABS.find((t) => t.id === active)!

    function handleCopy(text: string, id: string) {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(id)
            setTimeout(() => setCopied(null), 3000)
        })
    }

    return (
        <section
            id="quickstart"
            className="grid min-h-[420px] scroll-m-16 grid-cols-1 border-b-[1.5px] md:grid-cols-[1fr_1.5fr]"
        >
            <div className="flex flex-col justify-between border-r-[1.5px] p-10">
                <div>
                    <p className="text-chart-2 mb-4 font-mono text-xs font-medium tracking-widest uppercase">
                        Quick start
                    </p>
                    <h2 className="mb-4 text-5xl leading-none font-bold tracking-[-0.03em]">
                        Up in 30 seconds.
                    </h2>
                    <p className="mb-8 text-sm leading-[1.7]">
                        Install and drop into any client component. No provider,
                        no config, no ceremony.
                    </p>
                </div>
                <div className="flex flex-col gap-2 overflow-x-auto">
                    {[
                        { pm: 'pnpm', cmd: 'pnpm add use-sse-events' },
                        { pm: 'npm', cmd: 'npm install use-sse-events' },
                        { pm: 'bun', cmd: 'bun add use-sse-events' }
                    ].map(({ pm, cmd }) => (
                        <Button
                            key={pm}
                            size="lg"
                            onClick={() => handleCopy(cmd, pm)}
                            className="min-w-fit font-mono font-normal"
                        >
                            <span className="text-chart-2 mr-2">$</span>
                            {cmd}
                            <span className="text-muted ml-auto">
                                {copied === pm ? 'copied!' : 'copy'}
                            </span>
                        </Button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col bg-[#1c1a16]">
                {/* File tabs */}
                <div className="flex overflow-x-auto border-b border-white/10 bg-[#141410]">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className={[
                                'flex cursor-pointer items-center gap-2 border-r border-white/10 px-5 py-2.5 font-mono text-[11px] tracking-wider whitespace-nowrap uppercase transition-colors',
                                active === tab.id
                                    ? 'border-b-accent border-b-2 bg-[#1c1a16] text-[#c9c3b8]'
                                    : 'text-white/30 hover:text-white/60'
                            ].join(' ')}
                        >
                            <span
                                className={[
                                    'h-2 w-2 shrink-0 rounded-full',
                                    active === tab.id
                                        ? 'bg-accent'
                                        : 'bg-white/20'
                                ].join(' ')}
                            />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Code */}
                <div className="relative flex-1 overflow-x-auto p-8">
                    <button
                        onClick={() => {
                            const raw = currentTab.code.replace(/<[^>]+>/g, '')
                            handleCopy(raw, 'code')
                        }}
                        className="absolute top-4 right-4 border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-white/30 transition-colors hover:bg-white/10 hover:text-white/70"
                    >
                        {copied === 'code' ? 'copied!' : 'copy'}
                    </button>
                    <pre
                        className="font-mono text-[12.5px] leading-[1.75] whitespace-pre text-[#c9c3b8]"
                        dangerouslySetInnerHTML={{ __html: currentTab.code }}
                    />
                </div>
            </div>
        </section>
    )
}
