/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE?: string
  readonly VITE_API_BASE_URL?: string
  readonly VITE_BASE_URL?: string
  readonly VITE_DOCS_USERNAME?: string
  readonly VITE_DOCS_PASSWORD?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
