import { BundledLanguage, codeToHtml } from 'shiki'
import { CopyButton } from './copy-button'

interface CodeBlockProps {
    code: string
    lang?: BundledLanguage
}

export async function CodeBlock({ code, lang = 'jsx' }: CodeBlockProps) {
    const html = await codeToHtml(code, {
        lang,
        theme: {
            type: 'dark',
            colors: { 'editor.background': '#000000' },
            tokenColors: [
                {
                    scope: [
                        'keyword',
                        'storage.type',
                        'string',
                        'string.quoted'
                    ],
                    settings: { foreground: '#A7A7A7' }
                },
                {
                    scope: ['variable', 'meta.definition'],
                    settings: { foreground: '#FEFEFE' }
                },
                {
                    scope: [
                        'entity.name.function',
                        'entity.name.class',
                        'punctuation.definition.block',
                        'punctuation.definition.parameters',
                        'meta.brace',
                        'punctuation.definition.tag.begin',
                        'punctuation.definition.tag.end',
                        'variable.object.property',
                        'meta.object-literal.key'
                    ],
                    settings: { foreground: '#FFFFFF' }
                },
                {
                    scope: ['comment'],
                    settings: { foreground: '#444240', fontStyle: 'italic' }
                }
            ]
        }
    })

    return (
        <div className="bg-foreground relative flex justify-between">
            <div
                className="overflow-x-auto [&>pre]:overflow-x-auto [&>pre]:bg-transparent! [&>pre]:p-3.5 [&>pre]:text-[13px]"
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <CopyButton
                text={code.replace(/<[^>]+>/g, '')}
                className="invert"
            />
        </div>
    )
}
