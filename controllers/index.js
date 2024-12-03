const testFunction =
  ("/",
  (req, res) => {
    res.send("Hello World");
  });

const routeCheck =
  ("/test",
  (req, res) => {
    res.send("Test says Hi!");
  });

module.exports = { testFunction, routeCheck };
