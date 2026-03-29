module.exports = async function (req, res) {
  const server = await import('../dist/app/server/server.mjs');
  const app = server.default || server.reqHandler;
  return app(req, res);
};
