Package.describe({
  name: 'markusxmr:aurelia',
  version: '0.0.49',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name : 'templates',
  sources : [
    'plugin/handler.js'
  ]
});

Package.onUse(function (api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor"]);

  api.addFiles([
    'jspm_packages/system.js',
    'config.js',
    "dist/app-bundle.js"
    ], ["client"]);
});
