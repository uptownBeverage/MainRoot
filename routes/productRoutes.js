module.exports = app => {

  app.get('/api/product/createProduct', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/product/updateProduct', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/product/removeProduct', (req, res) => {
    res.send(req.user);
  });

};