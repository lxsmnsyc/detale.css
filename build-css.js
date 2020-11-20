const esbuild = require('esbuild');

esbuild.build({
  entryPoints: [
    'src/index.css',
  ],
  outfile: 'dist/detale.min.css',
  bundle: true,
  minify: true,
});

esbuild.build({
  entryPoints: [
    'src/index.css',
  ],
  outfile: 'dist/detale.css',
  bundle: true,
  minify: false,
});
