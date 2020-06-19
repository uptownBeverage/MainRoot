module.exports = app => {
  
 

  app.get('/api/user/createUser', (req, res) => {
    const { name, address, phone, role, userId, isActive } = res;
    const payload = {
      name,
      address,
      phone,
      role,
      userId,
      isActive
    };
    res.send(payload);
  });

  app.get('/api/user/updateUser', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/user/removeUser', (req, res) => {
    res.send(req.user);
  });
};