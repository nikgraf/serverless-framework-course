module.exports.run = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello World!`
    })
  };
};
