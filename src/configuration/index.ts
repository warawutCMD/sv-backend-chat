export default () => ({
  environment: process.env.NODE_ENV || 'localhost',
  region: process.env.APP_REGION,
  port: parseInt(process.env.PORT, 10) || 80,
  baseUrl: process.env.BASE_URL,
  bashCollectStatsChunkSize:
    parseInt(process.env.BASH_COLLECT_STATS_CHUNK_SIZE, 10) || 10,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  databaseSQL: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    debug: process.env.NODE_ENV !== 'production',
    replicas: [
      {
        type: process.env.DB_TYPE_READ,
        host: process.env.DB_HOST_READ,
        user: process.env.DB_USER_READ,
        password: process.env.DB_PASS_READ,
        dbName: process.env.DB_NAME_READ,
      },
    ],
  },
});
