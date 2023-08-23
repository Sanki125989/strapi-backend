module.exports = ({ env }) => ({
  host: process.env.HOST,
  port: process.env.NODE_PORT,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
