module.exports.run = (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello World!`,
    }),
  };
  return Promise.resolve(response)
};
