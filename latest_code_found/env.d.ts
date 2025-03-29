/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENCAGE_API_KEY: string
  readonly VITE_OPENROUTER_API_KEY: string
  readonly VITE_ASTRO_API_KEY: string
  readonly VITE_API_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}