/// <reference types="vite/client" />

declare module '*.svg' {
  import type { DefineComponent } from 'vue'
  const SvgComponent: DefineComponent<{}, {}, any>
  export default SvgComponent
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const VueComponent: DefineComponent<{}, {}, any>
  export default VueComponent
}

declare module 'vue3-content-loader' {
  import type { DefineComponent } from 'vue'
  const Vue3ContentLoaderComponent: DefineComponent<{}, {}, any>
  export default Vue3ContentLoaderComponent
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
