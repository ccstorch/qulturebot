module.exports = (slapp) => {
  require('./help')(slapp);
  require('./thanks')(slapp);
  require('./who')(slapp);
  require('./hello')(slapp);
  require('./bye')(slapp);
  require('./curse')(slapp);
  require('./random')(slapp);
}
