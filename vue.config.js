module.exports = {
    pwa: {
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swDest: 'service-worker.js',
      },
    },
  };