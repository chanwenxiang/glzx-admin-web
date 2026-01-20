/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_BASE_API: string
    // 这里可以添加其他的环境变量类型定义
    // readonly VITE_SOME_OTHER_VAR: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
