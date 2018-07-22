module.exports.run = (event, context, callback) => {
  callback(null, "Hello World");
};

// module.exports.run = (event, context, callback) => {
//   console.log("I'm a debug statement.")
//   callback(null, "Hello World");
// };

// module.exports.run = (event) => {
//   return Promise.resolve("Hello");
// };

// module.exports.run = async event => {
//   return "Hello";
// };
