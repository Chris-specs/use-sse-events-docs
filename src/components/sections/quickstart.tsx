import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CODE_SNIPPETS, INSTALL_COMMANDS } from '../../constants/code-tabs'
import { CodeBlock } from '../custom/codeblock'
import { Icons } from '../custom/icons'

export function Quickstart() {
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
                <div className="bg-foreground flex flex-col">
                    <Tabs
                        defaultValue={INSTALL_COMMANDS[0].pm}
                        className="gap-0"
                    >
                        <TabsList variant="line">
                            {INSTALL_COMMANDS.map((cmd) => (
                                <TabsTrigger
                                    key={cmd.pm}
                                    value={cmd.pm}
                                    className="font-mono font-normal lowercase invert"
                                >
                                    {cmd.pm}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {INSTALL_COMMANDS.map((cmd) => (
                            <TabsContent key={cmd.pm} value={cmd.pm}>
                                <CodeBlock code={cmd.cmd} lang="zsh" />
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
            <div className="bg-foreground flex flex-col">
                <Tabs defaultValue={CODE_SNIPPETS[0].id} className="gap-0">
                    <TabsList
                        variant="line"
                        className="w-full justify-start overflow-x-auto"
                    >
                        {CODE_SNIPPETS.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="max-w-fit font-mono font-normal lowercase invert"
                            >
                                <Icons.react />
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {CODE_SNIPPETS.map((tab) => (
                        <TabsContent key={tab.id} value={tab.id}>
                            <CodeBlock code={tab.code} />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
