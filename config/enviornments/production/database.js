module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DB_HOST", "localhost"),
        port: env.int("DB_PORT", 5432),
        DB: env("DB_NAME", "strapi"),
        username: env("DB_USERNAME", "strapi"),
        password: env("DB_PASSWORD", "strapi"),
        ssl: env.bool("DB_SSL", false),
      },
      options: {},
    },
  },
});
