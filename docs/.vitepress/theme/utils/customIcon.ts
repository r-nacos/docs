import {localIconLoader} from "vitepress-plugin-group-icons";

export const customIcon = {

    // ==========================================
    // 1. 编程语言 (已替换为内置)
    // ==========================================
    c: "vscode-icons:file-type-c",           // 原为本地 c.svg
    cpp: "vscode-icons:file-type-cpp",       // 原为本地 cpp.svg
    java: "vscode-icons:file-type-java",
    lua: "vscode-icons:file-type-lua",
    sql: "vscode-icons:file-type-sql",
    css: "vscode-icons:file-type-css",
    h: localIconLoader(import.meta.url, "../../../public/iconify/c.svg"), // 内置无 .h，保留本地

    // ==========================================
    // 2. 终端与 Shell (已替换为内置)
    // ==========================================
    shell: "vscode-icons:file-type-shell",   // 原为本地 shell.svg
    sh: "vscode-icons:file-type-shell",      // 原为本地 shell.svg
    bash: "vscode-icons:file-type-gnu",
    cmd: "vscode-icons:file-type-shell",
    winget: "vscode-icons:file-type-shell",
    powershell: "vscode-icons:file-type-powershell",
    fish: localIconLoader(import.meta.url, "../../../public/iconify/fish.svg"), // 内置无 fish，保留本地
    "控制台": localIconLoader(import.meta.url, "../../../public/iconify/terminal.svg"),

    // ==========================================
    // 3. 构建工具、配置与文档 (已经是内置)
    // ==========================================
    maven: "vscode-icons:file-type-apache",
    gradle: "vscode-icons:file-type-light-gradle",
    git: "vscode-icons:file-type-git",
    docker: "vscode-icons:file-type-docker2",
    dockerfile: "vscode-icons:file-type-docker2",
    toml: "vscode-icons:file-type-toml",
    markdown: "vscode-icons:file-type-markdown",

    // ==========================================
    // 4. 操作系统与发行版 (内置无，保留本地)
    // ==========================================
    almalinux: localIconLoader(import.meta.url, "../../../public/iconify/almaLinux.svg"),
    ubuntu: localIconLoader(import.meta.url, "../../../public/iconify/ubuntu.svg"),
    linux: localIconLoader(import.meta.url, "../../../public/iconify/linux.svg"),
    Linux: localIconLoader(import.meta.url, "../../../public/iconify/linux.svg"),
    windows: localIconLoader(import.meta.url, "../../../public/iconify/windows.svg"),
    Windows: localIconLoader(import.meta.url, "../../../public/iconify/windows.svg"),

    // ==========================================
    // 5. 第三方软件、IDE 与浏览器 (内置无，保留本地)
    // ==========================================
    idea: localIconLoader(import.meta.url, "../../../public/iconify/idea.svg"),
    webstorm: localIconLoader(import.meta.url, "../../../public/iconify/webstorm.svg"),
    scoop: localIconLoader(import.meta.url, "../../../public/iconify/scoop.svg"),
    choco: localIconLoader(import.meta.url, "../../../public/iconify/choco.svg"),
    chrome: localIconLoader(import.meta.url, "../../../public/iconify/chrome.svg"),
    firefox: localIconLoader(import.meta.url, "../../../public/iconify/firefox.svg"),
    edge: localIconLoader(import.meta.url, "../../../public/iconify/edge.svg"),
    arthas: localIconLoader(import.meta.url, "../../../public/iconify/arthas.svg"),

    // ==========================================
    // 6. 自定义语义化/业务图标 (内置无，保留本地)
    // ==========================================
    cpu: localIconLoader(import.meta.url, "../../../public/iconify/cpu.svg"),
    "项目结构": localIconLoader(import.meta.url, "../../../public/iconify/architecture.svg"),
    effect: localIconLoader(import.meta.url, "../../../public/iconify/effect.svg"),
    "结果": localIconLoader(import.meta.url, "../../../public/iconify/effect.svg"),
    faq: localIconLoader(import.meta.url, "../../../public/iconify/reply.svg"),
    bytecode: localIconLoader(import.meta.url, "../../../public/iconify/bytecode.svg"),
    "字节码指令": localIconLoader(import.meta.url, "../../../public/iconify/bytecode.svg"),
    log: localIconLoader(import.meta.url, "../../../public/iconify/log.svg"),
    "日志": localIconLoader(import.meta.url, "../../../public/iconify/log.svg"),
    "路由器": localIconLoader(import.meta.url, "../../../public/iconify/router.svg"),
}