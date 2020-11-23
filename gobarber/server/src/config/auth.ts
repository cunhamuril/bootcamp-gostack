export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default', // => gerado com md5 online
    expiresIn: '1d',
  },
};
