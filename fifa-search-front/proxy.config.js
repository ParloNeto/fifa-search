const proxy = [
    {
      context: ['/cards', '/types'],
      target: 'http://localhost:8080',
      secure: false, //alterar em produção
      logLevel: 'debug'
    }
  ];
  module.exports = proxy;