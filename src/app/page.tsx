import { ApiReference } from '@/components/api-reference'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Quickstart } from '@/components/quickstart'

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
