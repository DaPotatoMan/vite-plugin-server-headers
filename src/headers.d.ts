export interface SecurityHeaders {
  'Expect-CT': string
  'Feature-Policy': string

  'Content-Security-Policy': string
  'Content-Security-Policy-Report-Only': string

  'Cross-Origin-Embedder-Policy': 'unsafe-none' | 'require-corp'
  'Cross-Origin-Opener-Policy': 'unsafe-none' | 'same-origin' | 'same-origin-allow-popups'
  'Cross-Origin-Resource-Policy': 'same-site' | 'same-origin' | 'cross-origin'

  'Origin-Isolation': string
  'Strict-Transport-Security': string
  'Upgrade-Insecure-Requests': string

  'X-Content-Type-Options': 'nosniff'
  'X-Download-Options': string
  'X-Frame-Options': 'DENY' | 'SAMEORIGIN'
  'X-Permitted-Cross-Domain-Policies': string
  'X-Powered-By': string
  'X-XSS-Protection': string
}

export interface Headers extends SecurityHeaders {
  [key: string]: string
}