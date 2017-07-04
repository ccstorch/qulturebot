module.exports = (slapp) => {
  require('./giveFeedback')(slapp);
  require('./thanks')(slapp);
  require('./help')(slapp);
  require('./who')(slapp);
  require('./hello')(slapp);
  require('./bye')(slapp);
  require('./curse')(slapp);
  require('./random')(slapp);
}
