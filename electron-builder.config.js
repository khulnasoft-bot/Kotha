module.exports = {
  appId: 'ai.kotha.kotha',
  productName: 'Kotha',
  copyright: 'Copyright © 2025 Demox Labs',
  directories: {
    buildResources: 'resources',
    output: 'dist',
  },
  files: [
    '!**/.vscode/*',
    '!src/*',
    '!electron.vite.config.{js,ts,mjs,cjs}',
    '!.eslintignore',
    '!.eslintrc.cjs',
    '!.prettierignore',
    '!.prettierrc.yaml',
    '!dev-app-update.yml',
    '!README.md',
    '!.env',
    '!.env.*',
    '!.npmrc',
    '!pnpm-lock.yaml',
    '!tsconfig.json',
    '!tsconfig.node.json',
    '!tsconfig.web.json',
    '!native/**',
    {
      from: 'out',
      filter: ['**/*'],
    },
  ],
  asar: true,
  asarUnpack: ['resources/**'],
  extraResources: [
    {
      from: 'native/global-key-listener/target/${arch}-apple-darwin/release/global-key-listener',
      to: 'binaries/global-key-listener',
    },
    {
      from: 'native/audio-recorder/target/${arch}-apple-darwin/release/audio-recorder',
      to: 'binaries/audio-recorder',
    },
    {
      from: 'native/text-writer/target/${arch}-apple-darwin/release/text-writer',
      to: 'binaries/text-writer',
    },
    {
      from: 'native/active-application/target/${arch}-apple-darwin/release/text-writer',
      to: 'binaries/active-application',
    },
  ],
  extraMetadata: {
    version: process.env.VITE_KOTHA_VERSION || '0.0.0-dev',
  },
  protocols: {
    name: 'kotha',
    schemes: ['kotha'],
  },
  mac: {
    target: 'default',
    icon: 'resources/build/icon.icns',
    darkModeSupport: true,
    hardenedRuntime: true,
    gatekeeperAssess: false,
    identity: 'Demox Labs, Inc. (294ZSTM7UB)',
    notarize: true,
    entitlements: 'build/entitlements.mac.plist',
    entitlementsInherit: 'build/entitlements.mac.inherit.plist',
    extendInfo: {
      NSMicrophoneUsageDescription:
        'Kotha requires microphone access to transcribe your speech.',
    },
  },
  dmg: {
    artifactName: 'Kotha-Installer.${ext}',
  },
  win: {
    target: ['nsis'],
    icon: 'resources/build/icon.ico',
    executableName: 'Kotha',
  },
  nsis: {
    artifactName: '${name}-${version}-setup.${ext}',
    shortcutName: '${productName}',
    uninstallDisplayName: '${productName}',
    createDesktopShortcut: 'always',
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: true,
  },
}
