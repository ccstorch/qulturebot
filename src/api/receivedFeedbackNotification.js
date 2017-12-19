const slack = require('slack');

module.exports = (server, slapp) => {
  server.post('/received-feedback-notification', function(req, res){
    const { botToken, botChatId, userSlcakId } = req.body;
    slack.chat.postMessage({ token: botToken, channel: botChatId, text: 'Test' }, (error, res) => {
    });

    /*
    // TEST
    slack.client.im.open({ token: botToken, user: userSlcakId }, (err, data) => {
      if (err) {
        return console.error(err)
      }

      let channelId = data.channel.id

      // it would be nice to have a new msg object w/ the channel default to the dm channel we acquired somehow
      // msg.say({ channel: channel, text: 'Hi, just here to bug you!' })
      slack.chat.postMessage({ token: botToken, channel: channelId, text: 'Test' }, (error, res) => {
    })
    */
  });
}
