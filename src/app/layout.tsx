import { geistMono, inter } from '@/constants/fonts'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import './globals.css'

const title = 'use-sse-events'
const description =
    'A lightweight, type-safe, and production-ready React hook for Server-Sent Events (SSE)'

export const metadata: Metadata = {
    title: {
        template: `%s | ${title}`,
        default: title
    },
    description,
    metadataBase: new URL('https://use-sse-events.christiansan.com'),
    openGraph: {
        title,
        description,
        siteName: title,
        images: [
            {
                url: '/og.png',
                width: 800,
                height: 600,
                alt: title
            }
        ],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['/og.png']
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={cn(
                inter.variable,
                geistMono.variable,
                'sans h-full scroll-smooth antialiased'
            )}
        >
            <body className="flex min-h-full flex-col">{children}</body>
        </html>
    )
}
