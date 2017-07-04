module.exports = (server) => {
  server.get('/login', function(req, res){
    res.render('loginView');
  });
}
