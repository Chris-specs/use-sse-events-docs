export const INSTALL_COMMANDS = [
    { pm: 'pnpm', cmd: 'pnpm add use-sse-events' },
    { pm: 'npm', cmd: 'npm install use-sse-events' },
    { pm: 'bun', cmd: 'bun add use-sse-events' }
]

export const CODE_SNIPPETS = [
    {
        id: 'basic',
        label: 'basic.tsx',
        code: `'use client'

import { useSSE } from 'use-sse-events'

function App() {
    const { isConnected } = useSSE({
        url: 'https://server.com/api/sse',
        onMessage: (e) =>
            console.log('New message:', e.data),
    })

    return (
        <p>
            {isConnected ? 'Connected' : 'Disconnected'}
        </p>
    )
}`
    },
    {
        id: 'custom',
        label: 'custom-events.tsx',
        code: `'use client'

import { useSSE } from 'use-sse-events'

function StockFeed() {
    useSSE({
        url: 'https://server.com/api/stocks/live',
        customEvents: {
            'price-update': (e) =>
              updatePrice(JSON.parse(e.data)),
            'market-close': (e) =>
              handleClose(e.data),
            'alert': (e) =>
              showAlert(e.data),
        },
    })
}`
    }
]
