module.exports = (ctx) => {
  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: ctx.env === "dev" ? {} : false
    },
  };
};