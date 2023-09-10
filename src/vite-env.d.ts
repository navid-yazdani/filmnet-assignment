/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL_V2: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
