const API_OPTIONS = [
    {
        name: 'url',
        type: 'string',
        required: true,
        desc: 'The SSE endpoint URL to connect to.'
    },
    {
        name: 'enabled',
        type: 'boolean',
        required: false,
        desc: 'Toggle the connection on/off without unmounting the component.'
    },
    {
        name: 'withCredentials',
        type: 'boolean',
        required: false,
        desc: 'Whether to send cookies along with the SSE request.'
    },
    {
        name: 'reconnectInterval',
        type: 'number',
        required: false,
        desc: 'Milliseconds to wait before each reconnect attempt. Default: 3000.'
    },
    {
        name: 'onOpen',
        type: '() => void',
        required: false,
        desc: 'Fires when the connection is successfully established.'
    },
    {
        name: 'onConnected',
        type: '(e: MessageEvent) => void',
        required: false,
        desc: 'Fires on the server-side connected event.'
    },
    {
        name: 'onMessage',
        type: '(e: MessageEvent) => void',
        required: false,
        desc: 'Fires on every default message event from the server.'
    },
    {
        name: 'onReconnecting',
        type: '({ delay: number }) => void',
        required: false,
        desc: 'Fires before each reconnection attempt, with the delay value.'
    },
    {
        name: 'onNotification',
        type: '(e: MessageEvent) => void',
        required: false,
        desc: 'Fires on notification events from the server.'
    },
    {
        name: 'onHeartbeat',
        type: '(e: MessageEvent) => void',
        required: false,
        desc: 'Fires on heartbeat events to detect connection health.'
    },
    {
        name: 'onError',
        type: '(error: Event) => void',
        required: false,
        desc: 'Fires when a connection error occurs.'
    },
    {
        name: 'customEvents',
        type: 'Record<string, (e: MessageEvent) => void>',
        required: false,
        desc: 'Map of named server event types to their respective handlers.'
    }
]

export function ApiReference() {
    return (
        <section id="api-reference" className="border-b-[1.5px] px-10 py-16">
            <div className="mb-10 flex items-end justify-between">
                <div>
                    <p className="text-chart-2 mb-4 font-mono text-xs font-medium tracking-widest uppercase">
                        Reference
                    </p>
                    <h2 className="mb-4 text-5xl leading-none font-bold tracking-[-0.03em]">
                        API Options
                    </h2>
                </div>
            </div>

            <div
                className="bg-muted grid grid-cols-1 gap-px border-[1.5px] md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]"
                // style={{
                //     gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
                // }}
            >
                {API_OPTIONS.map(({ name, type, required, desc }) => (
                    <div key={name} className="bg-background p-5">
                        <div className="mb-1 flex items-baseline gap-2">
                            <span className="font-mono text-xs font-semibold">
                                {name}
                            </span>
                            {required && (
                                <span className="bg-chart-2 text-background h-3.5 px-1.5 py-px font-mono text-[9px] tracking-[0.08em] uppercase">
                                    required
                                </span>
                            )}
                        </div>
                        <p className="text-muted mb-2 font-mono text-xs leading-snug">
                            {type}
                        </p>
                        <p className="text-xs leading-[1.6]">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
