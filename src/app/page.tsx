import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { ApiReference } from '@/components/sections/api-reference'
import { Features } from '@/components/sections/features'
import { Hero } from '@/components/sections/hero'
import { Quickstart } from '@/components/sections/quickstart'

export default function Home() {
    return (
        <main className="">
            <Header />
            <Hero />
            <Features />
            <Quickstart />
            <ApiReference />
            <Footer />
        </main>
    )
}
