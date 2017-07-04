module.exports = (slapp) => {
  require('./hello')(slapp);
  require('./help')(slapp);
  require('./thanks')(slapp);
  require('./attachment')(slapp);
  require('./random')(slapp);
  require('./bye')(slapp);
  require('./who')(slapp);
  require('./curse')(slapp);
}
