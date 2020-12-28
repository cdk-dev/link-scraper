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
      lib: [
        'es2018', 'DOM', 'DOM.Iterable',
      ],
    },
  },
});

project.synth();
