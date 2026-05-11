export const TABS = [
    {
        id: 'basic',
        label: 'basic.tsx',
        code: `<span class="kw">'use client'</span>

<span class="kw">import</span> { <span class="fn">useSSE</span> } <span class="kw">from</span> <span class="str">'use-sse-events'</span>

<span class="kw">function</span> <span class="fn">App</span>() {
  <span class="kw">const</span> { <span class="prop">isConnected</span> } = <span class="fn">useSSE</span>({
    <span class="prop">url</span>: <span class="str">'/api/sse'</span>,
    <span class="prop">onMessage</span>: (e) =>
      console.<span class="fn">log</span>(<span class="str">'New message:'</span>, e.data),
  })

  <span class="kw">return</span> (
    &lt;<span class="fn">p</span>&gt;
      {isConnected ? <span class="str">'Connected'</span> : <span class="str">'Disconnected'</span>}
    &lt;/<span class="fn">p</span>&gt;
  )
}`
    },
    {
        id: 'custom',
        label: 'custom-events.tsx',
        code: `<span class="kw">'use client'</span>

<span class="kw">import</span> { <span class="fn">useSSE</span> } <span class="kw">from</span> <span class="str">'use-sse-events'</span>

<span class="kw">function</span> <span class="fn">StockFeed</span>() {
  <span class="fn">useSSE</span>({
    <span class="prop">url</span>: <span class="str">'/api/stocks/live'</span>,
    <span class="prop">customEvents</span>: {
      <span class="str">'price-update'</span>: (e) =>
        <span class="fn">updatePrice</span>(JSON.<span class="fn">parse</span>(e.data)),
      <span class="str">'market-close'</span>: (e) =>
        <span class="fn">handleClose</span>(e.data),
      <span class="str">'alert'</span>: (e) =>
        <span class="fn">showAlert</span>(e.data),
    },
  })
}`
    }
]
