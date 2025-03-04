/// <reference types="node" />

// Extend the NodeJS namespace with Next.js-defined properties
declare namespace NodeJS {
  interface Process {
    /**
     * @deprecated Use `typeof window` instead
     */
    readonly browser: boolean
  }

  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
  }
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

interface Window {
  MSInputMethodContext?: unknown
}

type NextFetchRequestConfig = {
  revalidate?: number
}

declare function fetch(
  url: RequestInfo,
  opts: RequestInit & { next?: NextFetchRequestConfig }
): Promise<Response>
