const { TypeScriptProject, Semver } = require('projen');

const project = new TypeScriptProject({
  name: 'link-scraper',
  authorName: 'Sebastian Korfmann',
  authorEmail: 'sebastian@korfmann.net',
  repository: 'https://github.com/cdk-dev/link-scraper.git',
  deps: ['playwright', '@mozilla/readability'],
  devDeps: ['@types/mozilla-readability'],
  gitignore: ['out/'],
  tsconfig: {
    compilerOptions: {
      rootDir: 'src',
      outDir: 'lib',
      alwaysStrict: true,
      declaration: true,
      experimentalDecorators: true,
      inlineSourceMap: true,
      inlineSources: true,
      lib: [
        'es2018', 'DOM', 'DOM.Iterable',
      ],
      module: 'CommonJS',
      noEmitOnError: false,
      noFallthroughCasesInSwitch: true,
      noImplicitAny: true,
      noImplicitReturns: true,
      noImplicitThis: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      resolveJsonModule: true,
      strict: true,
      strictNullChecks: true,
      strictPropertyInitialization: true,
      stripInternal: true,
      target: 'ES2018',
    },
    include: [
      'src/**/*.ts',
    ],
    exclude: [
      'node_modules',
      'lib',
    ],
  },
});

project.synth();
