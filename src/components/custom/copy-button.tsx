'use client'

import { Check, Clipboard } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'

interface CopyButtonProps {
    text: string
    className?: string
}

export function CopyButton({ text, className }: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false)

    function handleCopy(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 3000)
        })
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => handleCopy(text)}
            className={className}
        >
            {isCopied ? <Check /> : <Clipboard />}
        </Button>
    )
}
