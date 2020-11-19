export default {
  jwt: {
    secret: process.env.APP_SECRET, // => gerado com md5 online
    expiresIn: '1d',
  },
};
