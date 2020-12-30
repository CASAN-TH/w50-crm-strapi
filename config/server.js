module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1336),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8ece3dbd1936ace19b058b77ac36d908'),
    },
  },
});
